import"./vue-router.7d22a765.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e84f8b0f-0c51-4825-80ac-707b7a6bc74e",e._sentryDebugIdIdentifier="sentry-dbid-e84f8b0f-0c51-4825-80ac-707b7a6bc74e")}catch{}})();function p(e,t){const{r:n,g:r,b:o,usePound:s}=g(e);return w(u(n,-t),u(r,-t),u(o,-t),s)}function u(e,t){const n=e*(100+t*100)/100;return n>255?255:n<0?0:Math.round(n)}function E(e){return e.startsWith("#")||e.match(/^(rgb|hsl)/)}const v=(e,t)=>y(p(y(e),t)),P=e=>k(e)?v(e,.1):p(e,.1);function k(e){const{r:t,g:n,b:r}=g(e);return t*.299+n*.587+r*.114<186}function g(e){let t=!1;e[0]=="#"&&(e=e.slice(1),t=!0);const n=parseInt(e,16);return{r:n>>16&255,g:n>>8&255,b:n&255,usePound:t}}function y(e){const{r:t,g:n,b:r,usePound:o}=g(e);return w(255-t,255-n,255-r,o)}const w=(e,t,n,r=!0)=>(r?"#":"")+(n|t<<8|e<<16).toString(16).padStart(6,"0");function _(e){return new Promise((t,n)=>{const r=document.createElement("img");r.src=e,r.crossOrigin="Anonymous",r.style.display="none",document.body.appendChild(r);let o=0;r.onerror=s=>n(new Error(`Failed to load image: ${s}`)),r.onload=()=>{const{width:s,height:f}=r,a=document.createElement("canvas");a.width=s,a.height=f;const d=a.getContext("2d");if(!d)return t(!1);d.drawImage(r,0,0);const I=d.getImageData(0,0,a.width,a.height),{data:c}=I;let l,b,h,m;for(let i=0,x=c.length;i<x;i+=4)l=c[i],b=c[i+1],h=c[i+2],m=Math.floor((l+b+h)/3),o+=m;const D=Math.floor(o/(s*f));document.body.removeChild(r),t(D<=127)}})}export{k as a,_ as b,P as c,E as i,v as l};
//# sourceMappingURL=colorHelpers.e5ec8c13.js.map
