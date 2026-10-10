(function () {
    var go = function () { window.location.replace('home.html'); };
    var img = document.querySelector('#splash img');
    if (img) img.addEventListener('animationend', go);
    // Fallback: redirect even if the animation never fires (reduced motion, image error)
    setTimeout(go, 3000);
})();
