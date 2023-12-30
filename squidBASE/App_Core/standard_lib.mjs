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
    jsScript.src = 'Modules/' + interfaceName + '/' + 'main.mjs';
    head.appendChild(jsScript);
}

export function loadScript(dir){
    const head = document.head;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = ddir;
    head.appendChild(script)
}

export function loadStyle(dir){
    const head = document.head;

    const style = document.createElement('link');
    link.href = dir;
    link.type = 'text/css';
    link.rel = 'stylesheet';

    head.appendChild(style)
}
