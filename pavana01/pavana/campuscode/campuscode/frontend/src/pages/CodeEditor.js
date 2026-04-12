import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { dummyProblems, dummyTestCases } from '../data/dummyData';
import './CodeEditor.css';

function CodeEditor() {
  const [problem, setProblem] = useState(null);
  const [testCases, setTestCases] = useState([]);
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('c');
  const [result, setResult] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const { problemId } = useParams();
  const navigate = useNavigate();

  const languageMap = {
    c: 'c',
    cpp: 'cpp',
    java: 'java',
    python: 'python'
  };

  useEffect(() => {
    loadProblem();
  }, [problemId]);

  const loadProblem = () => {
    const foundProblem = dummyProblems.find(p => p.id === parseInt(problemId));
    const foundTestCases = dummyTestCases.filter(tc => tc.problem_id === parseInt(problemId));
    
    if (foundProblem) {
      setProblem(foundProblem);
      setTestCases(foundTestCases);
      setCode(foundProblem.starter_code || '// Write your code here\n');
    }
  };

  const handleRun = () => {
    setResult({ status: 'running', message: 'Running test cases...' });
    setTimeout(() => {
      setResult({ 
        status: 'success', 
        message: 'All test cases passed!',
        testResults: testCases.map(tc => ({ 
          passed: true, 
          input: tc.input, 
          output: tc.expected_output 
        }))
      });
    }, 1000);
  };

  const handleSubmit = () => {
    setResult({ status: 'running', message: 'Submitting code...' });
    setTimeout(() => {
      setResult({ 
        status: 'success', 
        message: 'Code submitted successfully! All test cases passed.' 
      });
    }, 1500);
  };

  if (!problem) return <div className="loading">Loading...</div>;

  return (
    <div className="leetcode-container">
      <div className="leetcode-header">
        <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
        <h2>{problem.title}</h2>
        <span className={`difficulty-badge ${problem.difficulty}`}>{problem.difficulty}</span>
      </div>

      <div className="leetcode-content">
        <div className="problem-panel">
          <div className="tabs">
            <button 
              className={activeTab === 'description' ? 'active' : ''} 
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={activeTab === 'submissions' ? 'active' : ''} 
              onClick={() => setActiveTab('submissions')}
            >
              Submissions
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="description-content">
                <p className="problem-description">{problem.description}</p>
                
                <h3>Examples</h3>
                {testCases.map((tc, idx) => (
                  <div key={idx} className="example-box">
                    <p><strong>Input:</strong> <code>{tc.input || 'No input'}</code></p>
                    <p><strong>Output:</strong> <code>{tc.expected_output}</code></p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'submissions' && (
              <div className="submissions-content">
                <p>Your submission history will appear here.</p>
              </div>
            )}
          </div>
        </div>

        <div className="editor-panel">
          <div className="editor-header">
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="language-select"
            >
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
          </div>

          <Editor
            height="60vh"
            language={languageMap[language]}
            value={code}
            onChange={(value) => setCode(value)}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />

          <div className="editor-footer">
            <button onClick={handleRun} className="btn-run">▶ Run</button>
            <button onClick={handleSubmit} className="btn-submit">Submit</button>
          </div>

          {result && (
            <div className={`result-panel ${result.status}`}>
              <h4>{result.status === 'success' ? '✓ Accepted' : result.status === 'running' ? '⟳ Running' : '✗ Error'}</h4>
              <p>{result.message}</p>
              {result.testResults && (
                <div className="test-results">
                  {result.testResults.map((tr, idx) => (
                    <div key={idx} className="test-result-item">
                      <span className={tr.passed ? 'passed' : 'failed'}>
                        {tr.passed ? '✓' : '✗'} Test Case {idx + 1}
                      </span>
                      <p>Input: {tr.input || 'None'}</p>
                      <p>Output: {tr.output}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
