
const loadStyleSheet = src => {
    if (document.createStyleSheet) {
        document.createStyleSheet(src);
    } else {
        const stylesheet = document.createElement('link');
        stylesheet.href = src;
        stylesheet.type = 'text/css';
        stylesheet.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(stylesheet); 
    }
}

window.onload = function() {
    console.log('window loaded~!');
    loadStyleSheet('./stylesheet-path');
}