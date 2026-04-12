const express = require('express');
const router = express.Router();
const { exec, execFile } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const TIMEOUT = 10000;
const JAVA = '"C:\\Program Files\\Eclipse Adoptium\\jdk-25.0.2.10-hotspot\\bin\\java"';
const JAVAC = '"C:\\Program Files\\Eclipse Adoptium\\jdk-25.0.2.10-hotspot\\bin\\javac"';
const RSCRIPT = '"C:\\Program Files\\R\\R-4.5.3\\bin\\Rscript"';
const GCC = '"C:\\msys64\\mingw64\\bin\\gcc"';
const GPP = '"C:\\msys64\\mingw64\\bin\\g++"';
const PHP = '"C:\\xampp\\php\\php"';
const PYTHON = '"C:\\Users\\sahan\\AppData\\Local\\Python\\bin\\python"';

function getTempDir() {
    const dir = path.join(os.tmpdir(), 'cc_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6));
    fs.mkdirSync(dir, { recursive: true });
    return dir;
}

function cleanup(dir) {
    try { fs.rmSync(dir, { recursive: true, force: true }); } catch (e) {}
}

function runCommand(command, input, timeout) {
    const env = { ...process.env, PATH: process.env.PATH + ';C:\\msys64\\mingw64\\bin' };
    return new Promise((resolve) => {
        const proc = exec(command, { timeout, env }, (error, stdout, stderr) => {
            if (error && error.killed) {
                resolve({ stdout: '', stderr: 'Time Limit Exceeded', timedOut: true });
            } else {
                resolve({ stdout: stdout || '', stderr: stderr || '' });
            }
        });
        if (input && proc.stdin) {
            proc.stdin.write(input);
            proc.stdin.end();
        }
    });
}

function runExe(exePath, input, timeout) {
    const env = { ...process.env, PATH: process.env.PATH + ';C:\\msys64\\mingw64\\bin' };
    return new Promise((resolve) => {
        const proc = execFile(exePath, [], { timeout, encoding: 'utf8', env }, (error, stdout, stderr) => {
            if (error && error.killed) {
                resolve({ stdout: '', stderr: 'Time Limit Exceeded', timedOut: true });
            } else if (error && error.code !== 0 && !stdout) {
                resolve({ stdout: stdout || '', stderr: stderr || error.message });
            } else {
                resolve({ stdout: stdout || '', stderr: stderr || '' });
            }
        });
        if (input && proc.stdin) {
            proc.stdin.write(input);
            proc.stdin.end();
        }
    });
}

router.post('/run', async (req, res) => {
    const { code, language, input } = req.body;
    if (!code || !language) return res.status(400).json({ error: 'Code and language required' });

    const tmpDir = getTempDir();

    try {
        let result;

        if (language === 'javascript') {
            const file = path.join(tmpDir, 'solution.js');
            fs.writeFileSync(file, code);
            result = await runCommand(`node "${file}"`, input, TIMEOUT);

        } else if (language === 'python') {
            const file = path.join(tmpDir, 'solution.py');
            fs.writeFileSync(file, code);
            result = await runCommand(`${PYTHON} "${file}"`, input, TIMEOUT);

        } else if (language === 'php') {
            const file = path.join(tmpDir, 'solution.php');
            fs.writeFileSync(file, code);
            result = await runCommand(`${PHP} "${file}"`, input, TIMEOUT);

        } else if (language === 'c') {
            const srcFile = path.join(tmpDir, 'solution.c');
            const outFile = path.join(tmpDir, 'solution.exe');
            fs.writeFileSync(srcFile, code);
            const compile = await runCommand(`${GCC} "${srcFile}" -o "${outFile}"`, '', 15000);
            if (compile.stderr && !fs.existsSync(outFile)) {
                cleanup(tmpDir);
                return res.json({ success: false, type: 'compile_error', stderr: compile.stderr });
            }
            result = await runExe(outFile, input, TIMEOUT);

        } else if (language === 'r') {
            const file = path.join(tmpDir, 'solution.R');
            fs.writeFileSync(file, code);
            result = await runCommand(`${RSCRIPT} "${file}"`, input, TIMEOUT);

        } else if (language === 'java') {
            const srcFile = path.join(tmpDir, 'Solution.java');
            fs.writeFileSync(srcFile, code);
            const compile = await runCommand(`${JAVAC} "${srcFile}"`, '', 15000);
            if (compile.stderr) {
                cleanup(tmpDir);
                return res.json({ success: false, type: 'compile_error', stderr: compile.stderr });
            }
            result = await runCommand(`${JAVA} -cp "${tmpDir}" Solution`, input, TIMEOUT);

        } else {
            cleanup(tmpDir);
            return res.status(400).json({ error: 'Unsupported language' });
        }

        cleanup(tmpDir);

        if (result.timedOut) return res.json({ success: false, type: 'tle', stderr: 'Time Limit Exceeded (10s)' });
        if (result.stderr && !result.stdout) return res.json({ success: false, type: 'runtime_error', stderr: result.stderr });

        return res.json({ success: true, stdout: result.stdout, stderr: result.stderr });

    } catch (err) {
        cleanup(tmpDir);
        return res.status(500).json({ success: false, type: 'error', stderr: err.message });
    }
});

module.exports = router;
