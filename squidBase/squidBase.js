function loadInterface(interfaceName) {
    const head = document.head;
    const link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    switch(interfaceName){
        case 'Material Design 3':
            link.href = `md3.css`;
            break;
        case 'Native Design':
            link.href = ``;
    }
    head.appendChild(link);
    
    const jsScript = document.createElement('script');
    jsScript.type = 'text/javascript';
    switch(interfaceName){
        case 'Material Design 3':
            jsScript.src = `Material Design 3.js`;
            break;
        case 'Native Design':
             jsScript.src = `Native Design.js`;
    }
    head.appendChild(jsScript);
}

//Simple squidBase File To Load Other Components,
//It will do some work in the future.
