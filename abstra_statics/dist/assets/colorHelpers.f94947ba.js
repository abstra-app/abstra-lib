import"./index.e5cf75e7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="c32d8964-8f4c-4916-819c-406497cabe98",t._sentryDebugIdIdentifier="sentry-dbid-c32d8964-8f4c-4916-819c-406497cabe98")}catch{}})();function p(t,e){const{r:n,g:r,b:o,usePound:s}=g(t);return w(u(n,-e),u(r,-e),u(o,-e),s)}function u(t,e){const n=t*(100+e*100)/100;return n>255?255:n<0?0:Math.round(n)}function E(t){return t.startsWith("#")||t.match(/^(rgb|hsl)/)}const v=(t,e)=>y(p(y(t),e)),P=t=>k(t)?v(t,.1):p(t,.1);function k(t){const{r:e,g:n,b:r}=g(t);return e*.299+n*.587+r*.114<186}function g(t){let e=!1;t[0]=="#"&&(t=t.slice(1),e=!0);const n=parseInt(t,16);return{r:n>>16&255,g:n>>8&255,b:n&255,usePound:e}}function y(t){const{r:e,g:n,b:r,usePound:o}=g(t);return w(255-e,255-n,255-r,o)}const w=(t,e,n,r=!0)=>(r?"#":"")+(n|e<<8|t<<16).toString(16).padStart(6,"0");function _(t){return new Promise((e,n)=>{const r=document.createElement("img");r.src=t,r.crossOrigin="Anonymous",r.style.display="none",document.body.appendChild(r);let o=0;r.onerror=s=>n(new Error(`Failed to load image: ${s}`)),r.onload=()=>{const{width:s,height:l}=r,a=document.createElement("canvas");a.width=s,a.height=l;const d=a.getContext("2d");if(!d)return e(!1);d.drawImage(r,0,0);const I=d.getImageData(0,0,a.width,a.height),{data:c}=I;let f,h,b,m;for(let i=0,x=c.length;i<x;i+=4)f=c[i],h=c[i+1],b=c[i+2],m=Math.floor((f+h+b)/3),o+=m;const D=Math.floor(o/(s*l));document.body.removeChild(r),e(D<=127)}})}export{k as a,_ as b,P as c,E as i,v as l};
//# sourceMappingURL=colorHelpers.f94947ba.js.map
