// Auto-redirect from file:// to localhost:5000 (dev only)
(function () {
    if (window.location.protocol === 'file:') {
        var full = window.location.pathname;
        var match = full.match(/\/([^\/]+\.html.*)$/);
        var page = match ? '/' + match[1] : '/index.html';
        var search = window.location.search || '';
        window.location.replace('http://localhost:5000' + page + search);
    }
})();
