export function loadModule(interfaceName) {
    const head = document.head;

    // Load CSS file
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'Modules/' + interfaceName + '/' + 'main.css';
    head.appendChild(link);

    // Load JS file as a module
    const jsScript = document.createElement('script');
    jsScript.type = 'module';
    jsScript.src = 'Modules/' + interfaceName + '/' + 'main.js';
    head.appendChild(jsScript);
}
//Standard Lib