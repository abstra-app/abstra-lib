import"./index.ccb069df.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f650fe76-8c33-46b3-b9f2-32c718def32c",e._sentryDebugIdIdentifier="sentry-dbid-f650fe76-8c33-46b3-b9f2-32c718def32c")}catch{}})();function p(e,t){const{r:n,g:r,b:o,usePound:s}=f(e);return w(u(n,-t),u(r,-t),u(o,-t),s)}function u(e,t){const n=e*(100+t*100)/100;return n>255?255:n<0?0:Math.round(n)}function E(e){return e.startsWith("#")||e.match(/^(rgb|hsl)/)}const v=(e,t)=>y(p(y(e),t)),P=e=>k(e)?v(e,.1):p(e,.1);function k(e){const{r:t,g:n,b:r}=f(e);return t*.299+n*.587+r*.114<186}function f(e){let t=!1;e[0]=="#"&&(e=e.slice(1),t=!0);const n=parseInt(e,16);return{r:n>>16&255,g:n>>8&255,b:n&255,usePound:t}}function y(e){const{r:t,g:n,b:r,usePound:o}=f(e);return w(255-t,255-n,255-r,o)}const w=(e,t,n,r=!0)=>(r?"#":"")+(n|t<<8|e<<16).toString(16).padStart(6,"0");function _(e){return new Promise((t,n)=>{const r=document.createElement("img");r.src=e,r.crossOrigin="Anonymous",r.style.display="none",document.body.appendChild(r);let o=0;r.onerror=s=>n(new Error(`Failed to load image: ${s}`)),r.onload=()=>{const{width:s,height:g}=r,a=document.createElement("canvas");a.width=s,a.height=g;const c=a.getContext("2d");if(!c)return t(!1);c.drawImage(r,0,0);const I=c.getImageData(0,0,a.width,a.height),{data:d}=I;let l,b,h,m;for(let i=0,x=d.length;i<x;i+=4)l=d[i],b=d[i+1],h=d[i+2],m=Math.floor((l+b+h)/3),o+=m;const D=Math.floor(o/(s*g));document.body.removeChild(r),t(D<=127)}})}export{k as a,_ as b,P as c,E as i,v as l};
//# sourceMappingURL=colorHelpers.a6168508.js.map
