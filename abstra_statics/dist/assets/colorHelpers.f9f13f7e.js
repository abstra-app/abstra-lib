import"./index.aae55199.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="00088a8c-40a2-4dae-afe8-d1a9ea6a0f09",e._sentryDebugIdIdentifier="sentry-dbid-00088a8c-40a2-4dae-afe8-d1a9ea6a0f09")}catch{}})();function p(e,t){const{r:n,g:r,b:a,usePound:o}=g(e);return w(c(n,-t),c(r,-t),c(a,-t),o)}function c(e,t){const n=e*(100+t*100)/100;return n>255?255:n<0?0:Math.round(n)}function E(e){return e.startsWith("#")||e.match(/^(rgb|hsl)/)}const v=(e,t)=>y(p(y(e),t)),P=e=>k(e)?v(e,.1):p(e,.1);function k(e){const{r:t,g:n,b:r}=g(e);return t*.299+n*.587+r*.114<186}function g(e){let t=!1;e[0]=="#"&&(e=e.slice(1),t=!0);const n=parseInt(e,16);return{r:n>>16&255,g:n>>8&255,b:n&255,usePound:t}}function y(e){const{r:t,g:n,b:r,usePound:a}=g(e);return w(255-t,255-n,255-r,a)}const w=(e,t,n,r=!0)=>(r?"#":"")+(n|t<<8|e<<16).toString(16).padStart(6,"0");function _(e){return new Promise((t,n)=>{const r=document.createElement("img");r.src=e,r.crossOrigin="Anonymous",r.style.display="none",document.body.appendChild(r);let a=0;r.onerror=o=>n(new Error(`Failed to load image: ${o}`)),r.onload=()=>{const{width:o,height:f}=r,s=document.createElement("canvas");s.width=o,s.height=f;const u=s.getContext("2d");if(!u)return t(!1);u.drawImage(r,0,0);const I=u.getImageData(0,0,s.width,s.height),{data:d}=I;let l,h,b,m;for(let i=0,x=d.length;i<x;i+=4)l=d[i],h=d[i+1],b=d[i+2],m=Math.floor((l+h+b)/3),a+=m;const D=Math.floor(a/(o*f));document.body.removeChild(r),t(D<=127)}})}export{k as a,_ as b,P as c,E as i,v as l};
//# sourceMappingURL=colorHelpers.f9f13f7e.js.map
