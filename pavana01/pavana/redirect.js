// Auto-redirect from file:// to localhost:5000
(function () {
    if (window.location.protocol === 'file:') {
        var full = window.location.pathname;
        // Extract just the filename and any path after the last known folder
        var match = full.match(/\/([^\/]+\.html.*)$/);
        var page = match ? '/' + match[1] : '/index.html';
        var search = window.location.search || '';
        window.location.replace('' + page + search);
    }
})();
