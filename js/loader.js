var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('loaderAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'searchLoader.json'
});

var loader = document.getElementById('loader')

window.addEventListener('load', (event) => {
    setTimeout (function() {
        loader.style.transition = '.5s';
        loader.style.opacity = '0';
        setTimeout (function() {
            loader.style.display = "none";
        }, 500);
    }, 5000);
});