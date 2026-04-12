import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummySubjects, dummyUnits, dummyProblems } from '../data/dummyData';
import './Dashboard.css';

function Dashboard() {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [units, setUnits] = useState([]);
  const [allProblems, setAllProblems] = useState([]);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    loadSubjects();
  }, []);

  const loadSubjects = () => {
    // Filter subjects by user's semester
    const userSubjects = dummySubjects.filter(s => s.semester === (user.semester || 1));
    setSubjects(userSubjects);
    
    if (userSubjects.length > 0) {
      loadUnits(userSubjects[0].id);
    }
  };

  const loadUnits = (subjectId) => {
    const subjectUnits = dummyUnits.filter(u => u.subject_id === subjectId);
    setUnits(subjectUnits);
    setSelectedSubject(subjectId);
    
    // Load all problems for these units
    const problems = [];
    subjectUnits.forEach(unit => {
      const unitProblems = dummyProblems
        .filter(p => p.unit_id === unit.id)
        .map(p => ({ ...p, unit: unit.unit_name }));
      problems.push(...unitProblems);
    });
    setAllProblems(problems);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const filteredProblems = filter === 'all' 
    ? allProblems 
    : allProblems.filter(p => p.difficulty === filter);

  return (
    <div className="leetcode-dashboard">
      <nav className="navbar">
        <div className="nav-left">
          <h1 className="logo" onClick={() => navigate('/home')}>💻 CampusCode</h1>
          <div className="nav-links">
            <a href="#" className="active">Problems</a>
            <a href="#" onClick={() => navigate('/home')}>Home</a>
          </div>
        </div>
        <div className="nav-right">
          <span className="user-info">👤 {user.name}</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </nav>

      <div className="dashboard-container">
        <div className="sidebar">
          <div className="sidebar-section">
            <h3>Semester {user.semester || 1}</h3>
            <div className="subject-list">
              {subjects.map(subject => (
                <div 
                  key={subject.id} 
                  className={`subject-item ${selectedSubject === subject.id ? 'active' : ''}`}
                  onClick={() => loadUnits(subject.id)}
                >
                  <span className="subject-icon">📚</span>
                  <div>
                    <div className="subject-name">{subject.name}</div>
                    <div className="subject-code">{subject.code}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Difficulty</h3>
            <div className="filter-list">
              <div className={`filter-item ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
                <span>All</span>
                <span className="count">{allProblems.length}</span>
              </div>
              <div className={`filter-item ${filter === 'easy' ? 'active' : ''}`} onClick={() => setFilter('easy')}>
                <span className="dot easy"></span>
                <span>Easy</span>
                <span className="count">{allProblems.filter(p => p.difficulty === 'easy').length}</span>
              </div>
              <div className={`filter-item ${filter === 'medium' ? 'active' : ''}`} onClick={() => setFilter('medium')}>
                <span className="dot medium"></span>
                <span>Medium</span>
                <span className="count">{allProblems.filter(p => p.difficulty === 'medium').length}</span>
              </div>
              <div className={`filter-item ${filter === 'hard' ? 'active' : ''}`} onClick={() => setFilter('hard')}>
                <span className="dot hard"></span>
                <span>Hard</span>
                <span className="count">{allProblems.filter(p => p.difficulty === 'hard').length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="content-header">
            <h2>Problems</h2>
            <div className="search-bar">
              <input type="text" placeholder="Search questions..." />
            </div>
          </div>

          <div className="problems-table">
            <table>
              <thead>
                <tr>
                  <th width="60">Status</th>
                  <th>Title</th>
                  <th width="150">Unit</th>
                  <th width="120">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {filteredProblems.map((problem, idx) => (
                  <tr key={problem.id} onClick={() => navigate(`/code/${problem.id}`)} className="problem-row">
                    <td className="status-cell">
                      <span className="status-icon">○</span>
                    </td>
                    <td className="title-cell">
                      <span className="problem-number">{idx + 1}.</span>
                      <span className="problem-title">{problem.title}</span>
                    </td>
                    <td className="unit-cell">{problem.unit}</td>
                    <td className="difficulty-cell">
                      <span className={`difficulty-tag ${problem.difficulty}`}>
                        {problem.difficulty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
