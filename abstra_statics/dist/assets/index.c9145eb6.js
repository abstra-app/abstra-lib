import{N as h,U as f,z as $,B as j,aw as o,ax as I,b0 as d,a1 as _,D as G,d as O,dl as F,L as E,G as A,f as D,Q as T,O as N}from"./outputWidgets.44a09867.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="528ba99b-10b9-4db9-ba09-fdd6eac67aca",e._sentryDebugIdIdentifier="sentry-dbid-528ba99b-10b9-4db9-ba09-fdd6eac67aca")}catch{}})();const p=["wrap","nowrap","wrap-reverse"],y=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],x=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],P=(e,t)=>{const a={};return p.forEach(n=>{a[`${e}-wrap-${n}`]=t.wrap===n}),a},L=(e,t)=>{const a={};return x.forEach(n=>{a[`${e}-align-${n}`]=t.align===n}),a[`${e}-align-stretch`]=!t.align&&!!t.vertical,a},V=(e,t)=>{const a={};return y.forEach(n=>{a[`${e}-justify-${n}`]=t.justify===n}),a};function W(e,t){return h(f(f(f({},P(e,t)),L(e,t)),V(e,t)))}const z=e=>{const{componentCls:t}=e;return{[t]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},J=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},M=e=>{const{componentCls:t}=e,a={};return p.forEach(n=>{a[`${t}-wrap-${n}`]={flexWrap:n}}),a},B=e=>{const{componentCls:t}=e,a={};return x.forEach(n=>{a[`${t}-align-${n}`]={alignItems:n}}),a},H=e=>{const{componentCls:t}=e,a={};return y.forEach(n=>{a[`${t}-justify-${n}`]={justifyContent:n}}),a},Q=$("Flex",e=>{const t=j(e,{flexGapSM:e.paddingXS,flexGap:e.padding,flexGapLG:e.paddingLG});return[z(t),J(t),M(t),B(t),H(t)]});function g(e){return["small","middle","large"].includes(e)}const R=()=>({prefixCls:o(),vertical:I(),wrap:o(),justify:o(),align:o(),flex:d([Number,String]),gap:d([Number,String]),component:_()});var U=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]]);return a};const X=O({name:"AFlex",inheritAttrs:!1,props:R(),setup(e,t){let{slots:a,attrs:n}=t;const{flex:l,direction:m}=F(),{prefixCls:s}=E("flex",e),[b,v]=Q(s),w=A(()=>{var r;return[s.value,v.value,W(s.value,e),{[`${s.value}-rtl`]:m.value==="rtl",[`${s.value}-gap-${e.gap}`]:g(e.gap),[`${s.value}-vertical`]:(r=e.vertical)!==null&&r!==void 0?r:l==null?void 0:l.value.vertical}]});return()=>{var r;const{flex:u,gap:c,component:S="div"}=e,C=U(e,["flex","gap","component"]),i={};return u&&(i.flex=u),c&&!g(c)&&(i.gap=`${c}px`),b(D(S,T({class:[n.class,w.value],style:[n.style,i]},N(C,["justify","wrap","align","vertical"])),{default:()=>[(r=a.default)===null||r===void 0?void 0:r.call(a)]}))}}}),Y=G(X);export{Y as A};
//# sourceMappingURL=index.c9145eb6.js.map
