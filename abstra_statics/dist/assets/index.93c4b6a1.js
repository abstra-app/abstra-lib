import{d as V,a1 as K,dE as L,dF as M,K as o,r as O,y as W,a2 as q,a6 as p,aC as H,f as m,aD as J,a4 as E,cD as h,ag as F,bh as G,ay as Q}from"./vue-router.c084b0ce.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[c]="673f25fc-2155-4c8d-a62e-d0afa1ebb9b5",e._sentryDebugIdIdentifier="sentry-dbid-673f25fc-2155-4c8d-a62e-d0afa1ebb9b5")}catch{}})();const U={small:8,middle:16,large:24},X=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:F.oneOf(G("horizontal","vertical")).def("horizontal"),align:F.oneOf(G("start","end","center","baseline")),wrap:Q()});function Y(e){return typeof e=="string"?U[e]:e||0}const r=V({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:X(),slots:Object,setup(e,c){let{slots:l,attrs:g}=c;const{prefixCls:n,space:y,direction:x}=K("space",e),[j,B]=L(n),z=M(),s=o(()=>{var a,t,i;return(i=(a=e.size)!==null&&a!==void 0?a:(t=y==null?void 0:y.value)===null||t===void 0?void 0:t.size)!==null&&i!==void 0?i:"small"}),b=O(),u=O();W(s,()=>{[b.value,u.value]=(Array.isArray(s.value)?s.value:[s.value,s.value]).map(a=>Y(a))},{immediate:!0});const w=o(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),k=o(()=>q(n.value,B.value,`${n.value}-${e.direction}`,{[`${n.value}-rtl`]:x.value==="rtl",[`${n.value}-align-${w.value}`]:w.value})),P=o(()=>x.value==="rtl"?"marginLeft":"marginRight"),R=o(()=>{const a={};return z.value&&(a.columnGap=`${b.value}px`,a.rowGap=`${u.value}px`),p(p({},a),e.wrap&&{flexWrap:"wrap",marginBottom:`${-u.value}px`})});return()=>{var a,t;const{wrap:i,direction:T="horizontal"}=e,_=(a=l.default)===null||a===void 0?void 0:a.call(l),C=H(_),I=C.length;if(I===0)return null;const d=(t=l.split)===null||t===void 0?void 0:t.call(l),A=`${n.value}-item`,D=b.value,S=I-1;return m("div",E(E({},g),{},{class:[k.value,g.class],style:[R.value,g.style]}),[C.map((N,v)=>{let $=_.indexOf(N);$===-1&&($=`$$space-${v}`);let f={};return z.value||(T==="vertical"?v<S&&(f={marginBottom:`${D/(d?2:1)}px`}):f=p(p({},v<S&&{[P.value]:`${D/(d?2:1)}px`}),i&&{paddingBottom:`${u.value}px`})),j(m(J,{key:$},[m("div",{class:A,style:f},[N]),v<S&&d&&m("span",{class:`${A}-split`,style:f},[d])]))})])}}});r.Compact=h;r.install=function(e){return e.component(r.name,r),e.component(h.name,h),e};const ee=r;export{ee as A};
//# sourceMappingURL=index.93c4b6a1.js.map
