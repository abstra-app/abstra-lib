import"./vue-router.9b93fdf7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6b5b0a72-269b-410e-8fde-7027dd9d86be",e._sentryDebugIdIdentifier="sentry-dbid-6b5b0a72-269b-410e-8fde-7027dd9d86be")}catch{}})();function p(e,t){const{r:n,g:r,b:o,usePound:s}=g(e);return w(c(n,-t),c(r,-t),c(o,-t),s)}function c(e,t){const n=e*(100+t*100)/100;return n>255?255:n<0?0:Math.round(n)}function E(e){return e.startsWith("#")||e.match(/^(rgb|hsl)/)}const v=(e,t)=>y(p(y(e),t)),P=e=>k(e)?v(e,.1):p(e,.1);function k(e){const{r:t,g:n,b:r}=g(e);return t*.299+n*.587+r*.114<186}function g(e){let t=!1;e[0]=="#"&&(e=e.slice(1),t=!0);const n=parseInt(e,16);return{r:n>>16&255,g:n>>8&255,b:n&255,usePound:t}}function y(e){const{r:t,g:n,b:r,usePound:o}=g(e);return w(255-t,255-n,255-r,o)}const w=(e,t,n,r=!0)=>(r?"#":"")+(n|t<<8|e<<16).toString(16).padStart(6,"0");function _(e){return new Promise((t,n)=>{const r=document.createElement("img");r.src=e,r.crossOrigin="Anonymous",r.style.display="none",document.body.appendChild(r);let o=0;r.onerror=s=>n(new Error(`Failed to load image: ${s}`)),r.onload=()=>{const{width:s,height:l}=r,a=document.createElement("canvas");a.width=s,a.height=l;const u=a.getContext("2d");if(!u)return t(!1);u.drawImage(r,0,0);const I=u.getImageData(0,0,a.width,a.height),{data:i}=I;let f,b,h,m;for(let d=0,x=i.length;d<x;d+=4)f=i[d],b=i[d+1],h=i[d+2],m=Math.floor((f+b+h)/3),o+=m;const D=Math.floor(o/(s*l));document.body.removeChild(r),t(D<=127)}})}export{k as a,_ as b,P as c,E as i,v as l};
//# sourceMappingURL=colorHelpers.c8a16bb8.js.map
