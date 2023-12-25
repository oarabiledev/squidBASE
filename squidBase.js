function loadInterface(interfaceName) {
    const head = document.head;
    const link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    switch(interfaceName){
        case 'Material Design 3':
            link.href = `md3.css`;
            break;
        case 'Material Design 2':
            link.href = `md2.css`;
    }
    head.appendChild(link);
    
    const jsScript = document.createElement('script');
    jsScript.type = 'text/javascript';
    switch(interfaceName){
        case 'Material Design 3':
            jsScript.src = `Material Design 3.js`;
    }
    head.appendChild(jsScript);
}

