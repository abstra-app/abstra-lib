import"./vue-router.1c3872ea.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="9cd41006-3617-4f68-8aa3-015eacc8a336",t._sentryDebugIdIdentifier="sentry-dbid-9cd41006-3617-4f68-8aa3-015eacc8a336")}catch{}})();function p(t,e){const{r:n,g:r,b:a,usePound:o}=g(t);return w(u(n,-e),u(r,-e),u(a,-e),o)}function u(t,e){const n=t*(100+e*100)/100;return n>255?255:n<0?0:Math.round(n)}function E(t){return t.startsWith("#")||t.match(/^(rgb|hsl)/)}const v=(t,e)=>y(p(y(t),e)),P=t=>k(t)?v(t,.1):p(t,.1);function k(t){const{r:e,g:n,b:r}=g(t);return e*.299+n*.587+r*.114<186}function g(t){let e=!1;t[0]=="#"&&(t=t.slice(1),e=!0);const n=parseInt(t,16);return{r:n>>16&255,g:n>>8&255,b:n&255,usePound:e}}function y(t){const{r:e,g:n,b:r,usePound:a}=g(t);return w(255-e,255-n,255-r,a)}const w=(t,e,n,r=!0)=>(r?"#":"")+(n|e<<8|t<<16).toString(16).padStart(6,"0");function _(t){return new Promise((e,n)=>{const r=document.createElement("img");r.src=t,r.crossOrigin="Anonymous",r.style.display="none",document.body.appendChild(r);let a=0;r.onerror=o=>n(new Error(`Failed to load image: ${o}`)),r.onload=()=>{const{width:o,height:l}=r,s=document.createElement("canvas");s.width=o,s.height=l;const c=s.getContext("2d");if(!c)return e(!1);c.drawImage(r,0,0);const I=c.getImageData(0,0,s.width,s.height),{data:d}=I;let f,h,b,m;for(let i=0,x=d.length;i<x;i+=4)f=d[i],h=d[i+1],b=d[i+2],m=Math.floor((f+h+b)/3),a+=m;const D=Math.floor(a/(o*l));document.body.removeChild(r),e(D<=127)}})}export{k as a,_ as b,P as c,E as i,v as l};
//# sourceMappingURL=colorHelpers.55e1596f.js.map
