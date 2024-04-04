import{d as q,e_ as C,G as x,o as E,I as W,b as M,eu as S,e as A,u,dh as G,ev as P,v as U}from"./outputWidgets.63450c6a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="83b73582-1877-4090-ae3d-6c7a8bef4c31",e._sentryDebugIdIdentifier="sentry-dbid-83b73582-1877-4090-ae3d-6c7a8bef4c31")}catch{}})();const B={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},H="#000",h="#ffffff",f="#1b1b23";function D(e,t){const{r:n,g:r,b:o,usePound:l}=y(e);return b(g(n,-t),g(r,-t),g(o,-t),l)}function g(e,t){const n=e*(100+t*100)/100;return n>255?255:n<0?0:Math.round(n)}const O=(e,t)=>I(D(I(e),t)),T=e=>{if(z(e))return c(e);const t=B[e.toLowerCase()];if(!t)return!1;const[n,r,o]=t;return c(b(n,r,o))},$=e=>c(e)?h:f,F=e=>c(e)?O(e,.1):D(e,.1);function c(e){const{r:t,g:n,b:r}=y(e);return t*.299+n*.587+r*.114<186}function y(e){let t=!1;e[0]=="#"&&(e=e.slice(1),t=!0);const n=parseInt(e,16);return{r:n>>16&255,g:n>>8&255,b:n&255,usePound:t}}function I(e){const{r:t,g:n,b:r,usePound:o}=y(e);return b(255-t,255-n,255-r,o)}const b=(e,t,n,r=!0)=>(r?"#":"")+(n|t<<8|e<<16).toString(16).padStart(6,"0");function z(e){if(e.length>9)return!1;const t=e.startsWith("#")?e.slice(1):e;return/[0-9A-Fa-f]{6}/g.test(t)}function N(e){return/https?:\/\/[^\s]+/g.test(e)}const m={};function j(e){return e in m||(m[e]=new Promise(t=>{const n=document.createElement("img");n.src=e,n.crossOrigin="Anonymous",n.style.display="none",document.body.appendChild(n);let r=0;n.onload=()=>{const{width:o,height:l}=n,s=document.createElement("canvas");s.width=o,s.height=l;const a=s.getContext("2d");if(!a)return t(!1);a.drawImage(n,0,0);const p=a.getImageData(0,0,s.width,s.height),{data:d}=p;let k,_,w,v;for(let i=0,R=d.length;i<R;i+=4)k=d[i],_=d[i+1],w=d[i+2],v=Math.floor((k+_+w)/3),r+=v;const L=Math.floor(r/(o*l));document.body.removeChild(n),t(L<=127)}})),m[e]}const K=e=>`https://fonts.googleapis.com/css2?family=${e.split(" ").join("+")}:wght@300;400;500;700;900&display=swap`;function V(e){return e.startsWith("#")||e.match(/^(rgb|hsl)/)}function J(e){try{return new URL(e),!0}catch{return!1}}function Q(e){return J(e)?{backgroundImage:`url(${e})`,backgroundSize:"cover"}:V(e)?{backgroundColor:e}:{backgroundColor:"/_assets/background"}}const X=["theme"],Y=["href"],Z=q({__name:"WidgetsFrame",props:{theme:{},mainColor:{},fontFamily:{}},setup(e){const t=e,n=C(()=>K(t.fontFamily)),r=C(()=>(typeof document<"u"&&document.documentElement.style.setProperty("--ac-global-font-family",t.fontFamily),{"--color-main":t.mainColor,"--color-main-light":O(t.mainColor,.15),"--color-main-hover":F(t.mainColor),"--color-main-active":F(t.mainColor),"--color-secondary":"transparent","--color-secondary-lighter":"transparent","--color-secondary-darker":"transparent","--button-font-color-main":$(t.mainColor),"--font-family":t.fontFamily,...Q(t.theme)})),l=x({"--font-color":H,"--background-color":"transparent"}),s=async()=>{const a=N(t.theme)?await j(t.theme):T(t.theme);l["--font-color"]=a?h:f,l["--background-color"]=a?f:h};return E(s),W(()=>t.theme,s),(a,p)=>(M(),S("div",{class:"frame background-theme",theme:a.theme,style:P({...u(r),...u(l)})},[A("link",{href:u(n),rel:"stylesheet"},null,8,Y),G(a.$slots,"default",{},void 0,!0)],12,X))}});const te=U(Z,[["__scopeId","data-v-8c89b16b"]]);export{te as W};
//# sourceMappingURL=WidgetsFrame.81b446d4.js.map
