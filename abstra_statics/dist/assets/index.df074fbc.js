import{d as T,ah as V,dO as L,dP as Q,f as o,e as N,g as W,aQ as q,b as f,S as m,aR as H,ak as G,cS as h,au as j,bt as k,aM as J,ai as K}from"./vue-router.6860ceb3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[c]="9402c779-90f5-498d-8d5d-a6c429737226",e._sentryDebugIdIdentifier="sentry-dbid-9402c779-90f5-498d-8d5d-a6c429737226")}catch{}})();const U={small:8,middle:16,large:24},X=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:j.oneOf(k("horizontal","vertical")).def("horizontal"),align:j.oneOf(k("start","end","center","baseline")),wrap:J()});function Y(e){return typeof e=="string"?U[e]:e||0}const r=T({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:X(),slots:Object,setup(e,c){let{slots:l,attrs:g}=c;const{prefixCls:n,space:y,direction:x}=V("space",e),[B,E]=L(n),z=Q(),s=o(()=>{var t,a,i;return(i=(t=e.size)!==null&&t!==void 0?t:(a=y==null?void 0:y.value)===null||a===void 0?void 0:a.size)!==null&&i!==void 0?i:"small"}),S=N(),u=N();W(s,()=>{[S.value,u.value]=(Array.isArray(s.value)?s.value:[s.value,s.value]).map(t=>Y(t))},{immediate:!0});const w=o(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),F=o(()=>K(n.value,E.value,`${n.value}-${e.direction}`,{[`${n.value}-rtl`]:x.value==="rtl",[`${n.value}-align-${w.value}`]:w.value})),P=o(()=>x.value==="rtl"?"marginLeft":"marginRight"),R=o(()=>{const t={};return z.value&&(t.columnGap=`${S.value}px`,t.rowGap=`${u.value}px`),m(m({},t),e.wrap&&{flexWrap:"wrap",marginBottom:`${-u.value}px`})});return()=>{var t,a;const{wrap:i,direction:M="horizontal"}=e,_=(t=l.default)===null||t===void 0?void 0:t.call(l),C=q(_),I=C.length;if(I===0)return null;const d=(a=l.split)===null||a===void 0?void 0:a.call(l),A=`${n.value}-item`,D=S.value,b=I-1;return f("div",G(G({},g),{},{class:[F.value,g.class],style:[R.value,g.style]}),[C.map((O,v)=>{let $=_.indexOf(O);$===-1&&($=`$$space-${v}`);let p={};return z.value||(M==="vertical"?v<b&&(p={marginBottom:`${D/(d?2:1)}px`}):p=m(m({},v<b&&{[P.value]:`${D/(d?2:1)}px`}),i&&{paddingBottom:`${u.value}px`})),B(f(H,{key:$},[f("div",{class:A,style:p},[O]),v<b&&d&&f("span",{class:`${A}-split`,style:p},[d])]))})])}}});r.Compact=h;r.install=function(e){return e.component(r.name,r),e.component(h.name,h),e};const ee=r;export{ee as A};
//# sourceMappingURL=index.df074fbc.js.map
