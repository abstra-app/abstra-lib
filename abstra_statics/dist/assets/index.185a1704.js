import{d as R,O as T,d_ as V,J as o,r as O,K as W,Q as J,W as p,ai as K,f,bg as L,U as N,cM as x,a7 as G,bD as j,aQ as U}from"./outputWidgets.ec044eb8.js";import{u as q}from"./Title.85fa9137.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[c]="ee262b55-86f2-4c31-b658-a09fe7458133",e._sentryDebugIdIdentifier="sentry-dbid-ee262b55-86f2-4c31-b658-a09fe7458133")}catch{}})();const H={small:8,middle:16,large:24},X=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:G.oneOf(j("horizontal","vertical")).def("horizontal"),align:G.oneOf(j("start","end","center","baseline")),wrap:U()});function Y(e){return typeof e=="string"?H[e]:e||0}const r=R({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:X(),slots:Object,setup(e,c){let{slots:l,attrs:m}=c;const{prefixCls:n,space:g,direction:h}=T("space",e),[B,E]=V(n),z=q(),s=o(()=>{var t,a,i;return(i=(t=e.size)!==null&&t!==void 0?t:(a=g==null?void 0:g.value)===null||a===void 0?void 0:a.size)!==null&&i!==void 0?i:"small"}),y=O(),u=O();W(s,()=>{[y.value,u.value]=(Array.isArray(s.value)?s.value:[s.value,s.value]).map(t=>Y(t))},{immediate:!0});const $=o(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),F=o(()=>J(n.value,E.value,`${n.value}-${e.direction}`,{[`${n.value}-rtl`]:h.value==="rtl",[`${n.value}-align-${$.value}`]:$.value})),k=o(()=>h.value==="rtl"?"marginLeft":"marginRight"),M=o(()=>{const t={};return z.value&&(t.columnGap=`${y.value}px`,t.rowGap=`${u.value}px`),p(p({},t),e.wrap&&{flexWrap:"wrap",marginBottom:`${-u.value}px`})});return()=>{var t,a;const{wrap:i,direction:P="horizontal"}=e,w=(t=l.default)===null||t===void 0?void 0:t.call(l),_=K(w),C=_.length;if(C===0)return null;const d=(a=l.split)===null||a===void 0?void 0:a.call(l),I=`${n.value}-item`,A=y.value,b=C-1;return f("div",N(N({},m),{},{class:[F.value,m.class],style:[M.value,m.style]}),[_.map((D,S)=>{const Q=w.indexOf(D);let v={};return z.value||(P==="vertical"?S<b&&(v={marginBottom:`${A/(d?2:1)}px`}):v=p(p({},S<b&&{[k.value]:`${A/(d?2:1)}px`}),i&&{paddingBottom:`${u.value}px`})),B(f(L,{key:Q},[f("div",{class:I,style:v},[D]),S<b&&d&&f("span",{class:`${I}-split`,style:v},[d])]))})])}}});r.Compact=x;r.install=function(e){return e.component(r.name,r),e.component(x.name,x),e};const te=r;export{te as A};
//# sourceMappingURL=index.185a1704.js.map
