var browser = checkBrowser();

function checkBrowser(){
    // OPERA 8.0+
    let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // FIREFOX 1.0+
    let isFirefox = typeof InstallTrigger !== 'undefined';

    // SAFARI 3.0+
    let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    // INTERNET EXPLORER 6-11
    let isIE = /*@cc_on!@*/false || !!document.documentMode;

    // EDGE 20+
    let isEdge = !isIE && !!window.StyleMedia;

    // CHROME 1+
    let isChrome = !!window.chrome;

    // BLINK ENGINE DETECTION
    let isBlink = (isChrome || isOpera) && !!window.CSS;

    if(isOpera) return 'Opera';
    else if(isFirefox) return 'Firefox';
    else if(isSafari) return 'Safari';
    else if(isIE) return 'IE';
    else if(isEdge) return 'Edge';
    else if(isChrome) return 'Chrome'

}
//////////////////////////////////////////////////////////
/////////////////////[ Answer ]///////////////////////////
//////////////////////////////////////////////////////////

if (browser === 'Edge') 
    alert( "You've got the Edge!" );
else if (browser === 'Chrome' 
            || browser === 'Firefox' 
            || browser === 'Safari' 
            || browser === 'Opera' )
    alert( 'Okey we support these browser too' );
else 
    alert( 'We hope that this page looks ok!' );

//////////////////////////////////////////////////////////