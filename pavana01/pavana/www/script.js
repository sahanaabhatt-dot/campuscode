
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const toggle = event.currentTarget;
    
    if (input.type === 'password') {
        input.type = 'text';
        toggle.classList.add('active');

        toggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
        `;
    } else {
        input.type = 'password';
        toggle.classList.remove('active');

        toggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
        `;
    }
}

if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
    const skipRedirect = new URLSearchParams(window.location.search).get('home');
    if (!skipRedirect) {
        const currentUser = localStorage.getItem('currentUser');
        const authToken = localStorage.getItem('authToken');
        if (currentUser && authToken) {
            window.location.href = 'dashboard.html';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const allNavLinks = document.querySelectorAll('.navbar nav a');
    
    allNavLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    const loginForm = document.querySelector('.auth-form[action="dashboard.html"]');
    if (loginForm && window.location.pathname.includes('login.html')) {
        loginForm.addEventListener('submit', function(e) {
            const email = this.querySelector('input[type="text"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (email && password) {
                localStorage.setItem('userLoggedIn', 'true');
                localStorage.setItem('userName', email);
            }
        });
    }

    const registerForm = document.querySelector('.auth-form[action="dashboard.html"]');
    if (registerForm && window.location.pathname.includes('register.html')) {
        registerForm.addEventListener('submit', function(e) {
            const name = this.querySelector('input[placeholder*="full name"]').value;
            const password = this.querySelectorAll('input[type="password"]')[0].value;
            const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;
            
            if (password !== confirmPassword) {
                e.preventDefault();
                alert('Passwords do not match!');
                return false;
            }
            
            if (name) {
                localStorage.setItem('userLoggedIn', 'true');
                localStorage.setItem('userName', name);
            }
        });
    }

    if (window.location.pathname.includes('dashboard.html')) {
        const userName = localStorage.getItem('userName');
        const userNameElement = document.querySelector('.user-info h3');
        if (userNameElement && userName) {
            userNameElement.textContent = userName;
        }
    }

    const logoutLinks = document.querySelectorAll('a[href="index.html"]');
    logoutLinks.forEach(link => {
        if (link.textContent.includes('Logout')) {
            link.addEventListener('click', function() {
                localStorage.removeItem('userLoggedIn');
                localStorage.removeItem('userName');
            });
        }
    });

    const runCodeBtn = document.querySelector('.secondary-btn');
    if (runCodeBtn && runCodeBtn.textContent.includes('Run Code')) {
        runCodeBtn.addEventListener('click', function() {
            const codeEditor = document.querySelector('.code-editor');
            const outputBox = document.querySelector('.output-box');
            
            if (codeEditor && outputBox) {
                outputBox.innerHTML = '<p style="color: #4ade80;">Code execution simulated...</p><p>Output: Program executed successfully!</p>';
            }
        });
    }

    const submitBtn = document.querySelector('.primary-btn');
    if (submitBtn && submitBtn.textContent.includes('Submit Solution')) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const codeEditor = document.querySelector('.code-editor');
            
            if (codeEditor && codeEditor.value.trim()) {
                alert('Solution submitted successfully! ✅');
            } else {
                alert('Please write some code before submitting.');
            }
        });
    }

    const semesterBtns = document.querySelectorAll('.semester-btn');
    semesterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            semesterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const problemItems = document.querySelectorAll('.problem-item');
    problemItems.forEach(item => {
        item.addEventListener('click', function() {
            problemItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            const problemTitle = this.querySelector('.problem-title').textContent;
            const mainTitle = document.querySelector('.problem-header h1');
            if (mainTitle) {
                mainTitle.textContent = problemTitle;
            }
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.feature-card, .subject-card, .stat-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    const passwordInput = document.querySelector('input[placeholder*="Create a password"]');
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            let strength = 0;
            
            if (password.length >= 8) strength++;
            if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
            if (/\d/.test(password)) strength++;
            if (/[^a-zA-Z\d]/.test(password)) strength++;

            console.log('Password strength:', strength);
        });
    }

    const codeEditor = document.querySelector('.code-editor');
    if (codeEditor) {

        const savedCode = localStorage.getItem('savedCode');
        if (savedCode) {
            codeEditor.value = savedCode;
        }

        codeEditor.addEventListener('input', function() {
            localStorage.setItem('savedCode', this.value);
        });
    }

    const languageSelect = document.querySelector('.language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const codeEditor = document.querySelector('.code-editor');
            const language = this.value;

            const templates = {
                'C': '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    \n    return 0;\n}',
                'C++': '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your code here\n    \n    return 0;\n}',
                'Java': 'public class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n        \n    }\n}',
                'Python': '# Write your code here\n\ndef main():\n    pass\n\nif __name__ == "__main__":\n    main()'
            };
            
            if (codeEditor && templates[language]) {
                codeEditor.value = templates[language];
            }
        });
    }
});
