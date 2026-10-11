(function () {
    // Saved choice first, then browser language (Italian -> it), otherwise English
    var pickLanguage = function () {
        try {
            var saved = localStorage.getItem('lang');
            if (saved === 'it' || saved === 'en') return saved;
        } catch (e) { /* storage blocked: fall through */ }
        var prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
        for (var i = 0; i < prefs.length; i++) {
            if (String(prefs[i]).toLowerCase().indexOf('it') === 0) return 'it';
        }
        return 'en';
    };
    var go = function () { window.location.replace(pickLanguage() + '/home.html'); };
    var img = document.querySelector('#splash img');
    if (img) img.addEventListener('animationend', go);
    // Fallback: redirect even if the animation never fires (reduced motion, image error)
    setTimeout(go, 4500);
})();
