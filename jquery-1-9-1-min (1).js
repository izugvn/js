!function(r){function e(r,e,n,t,u,a){r=String(r);for(var o=0,c=0,f=r.length,i="",d=0;f>c;){var h=r.charCodeAt(c);for(h=256>h?n[h]:-1,o=(o<<u)+h,d+=u;d>=a;){d-=a;var C=o>>d;i+=t.charAt(C),o^=C<<d}++c}return!e&&d>0&&(i+=t.charAt(o<<a-d)),i}for(var n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/",t="",u=[256],a=[256],o=0,c={enc:function(r){var e=r.replace(/[\u0080-\u07ff]/g,function(r){var e=r.charCodeAt(0);return String.fromCharCode(192|e>>6,128|63&e)}).replace(/[\u0800-\uffff]/g,function(r){var e=r.charCodeAt(0);return String.fromCharCode(224|e>>12,128|e>>6&63,128|63&e)});return e},dec:function(r){var e=r.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(r){var e=(15&r.charCodeAt(0))<<12|(63&r.charCodeAt(1))<<6|63&r.charCodeAt(2);return String.fromCharCode(e)}).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(r){var e=(31&r.charCodeAt(0))<<6|63&r.charCodeAt(1);return String.fromCharCode(e)});return e}};256>o;){var f=String.fromCharCode(o);t+=f,a[o]=o,u[o]=n.indexOf(f),++o}var i=r.write=function(r,e,n){return e?i[r](e,n):r?null:this};i.btoa=i.enc=function(r,t){return r=i.raw===!1||i.utf8enc||t?c.enc(r):r,r=e(r,!1,a,n,8,6),r+"====".slice(r.length%4||4)},i.atob=i.dec=function(r,n){r=String(r).split("=");var a=r.length;do--a,r[a]=e(r[a],!0,u,t,6,8);while(a>0);return r=r.join(""),i.raw===!1||i.utf8dec||n?c.dec(r):r}}(jQuery);