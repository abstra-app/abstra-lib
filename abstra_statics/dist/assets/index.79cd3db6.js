import{d as T,ah as V,dO as L,dP as Q,f as o,e as N,g as W,aQ as q,b as f,S as m,aR as H,ak as G,cS as h,au as j,bt as k,aM as J,ai as K}from"./vue-router.19c25bb8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[c]="82b8e13c-26ee-4aa2-ad8e-84dcf0a15bfb",e._sentryDebugIdIdentifier="sentry-dbid-82b8e13c-26ee-4aa2-ad8e-84dcf0a15bfb")}catch{}})();const U={small:8,middle:16,large:24},X=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:j.oneOf(k("horizontal","vertical")).def("horizontal"),align:j.oneOf(k("start","end","center","baseline")),wrap:J()});function Y(e){return typeof e=="string"?U[e]:e||0}const r=T({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:X(),slots:Object,setup(e,c){let{slots:l,attrs:g}=c;const{prefixCls:n,space:y,direction:x}=V("space",e),[B,E]=L(n),z=Q(),s=o(()=>{var a,t,i;return(i=(a=e.size)!==null&&a!==void 0?a:(t=y==null?void 0:y.value)===null||t===void 0?void 0:t.size)!==null&&i!==void 0?i:"small"}),b=N(),u=N();W(s,()=>{[b.value,u.value]=(Array.isArray(s.value)?s.value:[s.value,s.value]).map(a=>Y(a))},{immediate:!0});const w=o(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),F=o(()=>K(n.value,E.value,`${n.value}-${e.direction}`,{[`${n.value}-rtl`]:x.value==="rtl",[`${n.value}-align-${w.value}`]:w.value})),P=o(()=>x.value==="rtl"?"marginLeft":"marginRight"),R=o(()=>{const a={};return z.value&&(a.columnGap=`${b.value}px`,a.rowGap=`${u.value}px`),m(m({},a),e.wrap&&{flexWrap:"wrap",marginBottom:`${-u.value}px`})});return()=>{var a,t;const{wrap:i,direction:M="horizontal"}=e,_=(a=l.default)===null||a===void 0?void 0:a.call(l),C=q(_),I=C.length;if(I===0)return null;const d=(t=l.split)===null||t===void 0?void 0:t.call(l),A=`${n.value}-item`,D=b.value,S=I-1;return f("div",G(G({},g),{},{class:[F.value,g.class],style:[R.value,g.style]}),[C.map((O,v)=>{let $=_.indexOf(O);$===-1&&($=`$$space-${v}`);let p={};return z.value||(M==="vertical"?v<S&&(p={marginBottom:`${D/(d?2:1)}px`}):p=m(m({},v<S&&{[P.value]:`${D/(d?2:1)}px`}),i&&{paddingBottom:`${u.value}px`})),B(f(H,{key:$},[f("div",{class:A,style:p},[O]),v<S&&d&&f("span",{class:`${A}-split`,style:p},[d])]))})])}}});r.Compact=h;r.install=function(e){return e.component(r.name,r),e.component(h.name,h),e};const ee=r;export{ee as A};
//# sourceMappingURL=index.79cd3db6.js.map
