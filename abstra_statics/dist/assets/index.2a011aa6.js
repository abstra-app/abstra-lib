import{d as V,a2 as L,dE as M,dF as W,f as o,e as N,g as q,a3 as H,a7 as m,aD as J,b as f,aE as K,a5 as O,cE as h,ah as F,bi as G,az as Q}from"./vue-router.e2bf802b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[c]="7d351b68-0c85-43d9-b018-dcb95902942b",e._sentryDebugIdIdentifier="sentry-dbid-7d351b68-0c85-43d9-b018-dcb95902942b")}catch{}})();const U={small:8,middle:16,large:24},X=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:F.oneOf(G("horizontal","vertical")).def("horizontal"),align:F.oneOf(G("start","end","center","baseline")),wrap:Q()});function Y(e){return typeof e=="string"?U[e]:e||0}const r=V({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:X(),slots:Object,setup(e,c){let{slots:l,attrs:g}=c;const{prefixCls:n,space:y,direction:z}=L("space",e),[j,B]=M(n),x=W(),s=o(()=>{var t,a,i;return(i=(t=e.size)!==null&&t!==void 0?t:(a=y==null?void 0:y.value)===null||a===void 0?void 0:a.size)!==null&&i!==void 0?i:"small"}),b=N(),u=N();q(s,()=>{[b.value,u.value]=(Array.isArray(s.value)?s.value:[s.value,s.value]).map(t=>Y(t))},{immediate:!0});const w=o(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),k=o(()=>H(n.value,B.value,`${n.value}-${e.direction}`,{[`${n.value}-rtl`]:z.value==="rtl",[`${n.value}-align-${w.value}`]:w.value})),P=o(()=>z.value==="rtl"?"marginLeft":"marginRight"),R=o(()=>{const t={};return x.value&&(t.columnGap=`${b.value}px`,t.rowGap=`${u.value}px`),m(m({},t),e.wrap&&{flexWrap:"wrap",marginBottom:`${-u.value}px`})});return()=>{var t,a;const{wrap:i,direction:T="horizontal"}=e,_=(t=l.default)===null||t===void 0?void 0:t.call(l),C=J(_),I=C.length;if(I===0)return null;const d=(a=l.split)===null||a===void 0?void 0:a.call(l),A=`${n.value}-item`,D=b.value,S=I-1;return f("div",O(O({},g),{},{class:[k.value,g.class],style:[R.value,g.style]}),[C.map((E,v)=>{let $=_.indexOf(E);$===-1&&($=`$$space-${v}`);let p={};return x.value||(T==="vertical"?v<S&&(p={marginBottom:`${D/(d?2:1)}px`}):p=m(m({},v<S&&{[P.value]:`${D/(d?2:1)}px`}),i&&{paddingBottom:`${u.value}px`})),j(f(K,{key:$},[f("div",{class:A,style:p},[E]),v<S&&d&&f("span",{class:`${A}-split`,style:p},[d])]))})])}}});r.Compact=h;r.install=function(e){return e.component(r.name,r),e.component(h.name,h),e};const ee=r;export{ee as A};
//# sourceMappingURL=index.2a011aa6.js.map
