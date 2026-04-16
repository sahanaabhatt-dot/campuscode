// Inject mobile bottom navigation on all pages
(function() {
    const style = document.createElement('style');
    style.textContent = `
        .mobile-nav {
            display: none;
            position: fixed;
            bottom: 0; left: 0; right: 0;
            background: #1a0a2e;
            border-top: 1px solid #3d2a52;
            z-index: 999;
            padding-bottom: env(safe-area-inset-bottom, 0px);
        }
        .mobile-nav-items {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 58px;
        }
        .mobile-nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: #666;
            font-size: 0.68rem;
            gap: 3px;
            flex: 1;
            height: 100%;
            transition: color 0.2s;
            -webkit-tap-highlight-color: transparent;
        }
        .mobile-nav-item.active { color: #e91e63; }
        .mobile-nav-item .nav-icon { font-size: 1.4rem; line-height: 1; }
        @media (max-width: 768px) {
            .mobile-nav { display: block; }
            body { padding-bottom: calc(58px + env(safe-area-inset-bottom, 0px)) !important; }
        }
    `;
    document.head.appendChild(style);

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const nav = document.createElement('nav');
    nav.className = 'mobile-nav';
    nav.innerHTML = `
        <div class="mobile-nav-items">
            <a href="index.html?home=1" class="mobile-nav-item ${currentPage === 'index.html' ? 'active' : ''}">
                <span class="nav-icon">🏠</span><span>Home</span>
            </a>
            <a href="problems.html" class="mobile-nav-item ${currentPage === 'problems.html' ? 'active' : ''}">
                <span class="nav-icon">📝</span><span>Problems</span>
            </a>
            <a href="explore.html" class="mobile-nav-item ${currentPage === 'explore.html' ? 'active' : ''}">
                <span class="nav-icon">✨</span><span>Explore</span>
            </a>
            <a href="dashboard.html" class="mobile-nav-item ${currentPage === 'dashboard.html' ? 'active' : ''}">
                <span class="nav-icon">📊</span><span>Dashboard</span>
            </a>
            <a href="profile.html" class="mobile-nav-item ${currentPage === 'profile.html' ? 'active' : ''}">
                <span class="nav-icon">👤</span><span>Profile</span>
            </a>
        </div>
    `;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => document.body.appendChild(nav));
    } else {
        document.body.appendChild(nav);
    }
})();
