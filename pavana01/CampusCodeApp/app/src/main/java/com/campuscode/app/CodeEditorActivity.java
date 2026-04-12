package com.campuscode.app;

import android.os.Bundle;
import android.widget.*;
import androidx.appcompat.app.AppCompatActivity;
import org.json.JSONObject;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class CodeEditorActivity extends AppCompatActivity {
    private EditText etCode, etInput;
    private TextView tvOutput, tvTitle, tvDiff;
    private Button btnRun, btnSubmit;
    private Spinner spinnerLang;
    private ExecutorService executor = Executors.newSingleThreadExecutor();
    private String problemTitle, difficulty, subject;
    private int problemId;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_code_editor);

        problemTitle = getIntent().getStringExtra("problemTitle");
        difficulty = getIntent().getStringExtra("difficulty");
        subject = getIntent().getStringExtra("subject");
        problemId = getIntent().getIntExtra("problemId", 0);

        tvTitle = findViewById(R.id.tvProblemTitle);
        tvDiff = findViewById(R.id.tvDifficulty);
        etCode = findViewById(R.id.etCode);
        etInput = findViewById(R.id.etInput);
        tvOutput = findViewById(R.id.tvOutput);
        btnRun = findViewById(R.id.btnRun);
        btnSubmit = findViewById(R.id.btnSubmit);
        spinnerLang = findViewById(R.id.spinnerLang);

        tvTitle.setText(problemId + ". " + problemTitle);
        tvDiff.setText(difficulty);

        String[] langs = {"python", "c", "php", "r"};
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item, langs);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnerLang.setAdapter(adapter);

        etCode.setText(getTemplate("python"));
        spinnerLang.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            public void onItemSelected(AdapterView<?> p, android.view.View v, int pos, long id) {
                etCode.setText(getTemplate(langs[pos]));
            }
            public void onNothingSelected(AdapterView<?> p) {}
        });

        btnRun.setOnClickListener(v -> runCode(false));
        btnSubmit.setOnClickListener(v -> runCode(true));
        findViewById(R.id.btnBack).setOnClickListener(v -> finish());
    }

    private String getTemplate(String lang) {
        switch (lang) {
            case "c": return "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}";
            case "php": return "<?php\necho \"Hello, World!\";\n?>";
            case "r": return "cat(\"Hello, World!\\n\")";
            default: return "print(\"Hello, World!\")";
        }
    }

    private void runCode(boolean isSubmit) {
        String code = etCode.getText().toString().trim();
        String input = etInput.getText().toString().trim();
        String lang = spinnerLang.getSelectedItem().toString();

        if (code.isEmpty()) {
            Toast.makeText(this, "Please write some code first!", Toast.LENGTH_SHORT).show();
            return;
        }

        btnRun.setEnabled(false);
        btnSubmit.setEnabled(false);
        tvOutput.setText("⟳ Running...");

        executor.execute(() -> {
            try {
                JSONObject json = new JSONObject();
                json.put("code", code);
                json.put("language", lang);
                json.put("input", input);

                String response = ApiClient.post("/compiler/run", json.toString(),
                    new SessionManager(this).getToken());
                JSONObject res = new JSONObject(response);

                runOnUiThread(() -> {
                    try {
                        if (res.getBoolean("success")) {
                            String output = res.optString("stdout", "(no output)");
                            tvOutput.setText("✓ Output:\n\n" + output);
                            if (isSubmit) markSolved();
                        } else {
                            String err = res.optString("stderr", "Unknown error");
                            String type = res.optString("type", "error");
                            tvOutput.setText("✗ " + type + ":\n\n" + err);
                        }
                    } catch (Exception e) {
                        tvOutput.setText("Error parsing response");
                    }
                    btnRun.setEnabled(true);
                    btnSubmit.setEnabled(true);
                });
            } catch (Exception e) {
                runOnUiThread(() -> {
                    tvOutput.setText("✗ Cannot connect to server.\nMake sure backend is running.");
                    btnRun.setEnabled(true);
                    btnSubmit.setEnabled(true);
                });
            }
        });
    }

    private void markSolved() {
        android.content.SharedPreferences prefs = getSharedPreferences("SolvedProblems", MODE_PRIVATE);
        String key = subject + "_" + problemId;
        if (!prefs.getBoolean(key, false)) {
            int total = prefs.getInt("totalSolved", 0);
            prefs.edit().putBoolean(key, true).putInt("totalSolved", total + 1).apply();
        }
        Toast.makeText(this, "✓ Submitted successfully!", Toast.LENGTH_SHORT).show();
    }
}
