/* Remember the visitor's language choice so the splash page can respect it next time */
(function () {
    document.querySelectorAll('.lang-switch a[data-lang]').forEach(function (link) {
        link.addEventListener('click', function () {
            try { localStorage.setItem('lang', link.getAttribute('data-lang')); } catch (e) { /* storage unavailable */ }
        });
    });
})();
