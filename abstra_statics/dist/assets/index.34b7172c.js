import{d as T,N as H,dY as J,H as o,r as N,J as L,O as M,V as v,ah as W,f as p,bf as Y,R as O,cI as h,a6 as G,bC as j,aP as q}from"./outputWidgets.17e2270d.js";import{u as K}from"./Title.7b6ce571.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[c]="f2cf7b70-c127-4c5f-a23d-60946f571339",e._sentryDebugIdIdentifier="sentry-dbid-f2cf7b70-c127-4c5f-a23d-60946f571339")}catch{}})();const Q={small:8,middle:16,large:24},U=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:G.oneOf(j("horizontal","vertical")).def("horizontal"),align:G.oneOf(j("start","end","center","baseline")),wrap:q()});function X(e){return typeof e=="string"?Q[e]:e||0}const r=T({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:U(),slots:Object,setup(e,c){let{slots:l,attrs:m}=c;const{prefixCls:n,space:g,direction:x}=H("space",e),[B,E]=J(n),z=K(),s=o(()=>{var t,a,i;return(i=(t=e.size)!==null&&t!==void 0?t:(a=g==null?void 0:g.value)===null||a===void 0?void 0:a.size)!==null&&i!==void 0?i:"small"}),y=N(),u=N();L(s,()=>{[y.value,u.value]=(Array.isArray(s.value)?s.value:[s.value,s.value]).map(t=>X(t))},{immediate:!0});const $=o(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),F=o(()=>M(n.value,E.value,`${n.value}-${e.direction}`,{[`${n.value}-rtl`]:x.value==="rtl",[`${n.value}-align-${$.value}`]:$.value})),P=o(()=>x.value==="rtl"?"marginLeft":"marginRight"),R=o(()=>{const t={};return z.value&&(t.columnGap=`${y.value}px`,t.rowGap=`${u.value}px`),v(v({},t),e.wrap&&{flexWrap:"wrap",marginBottom:`${-u.value}px`})});return()=>{var t,a;const{wrap:i,direction:V="horizontal"}=e,w=(t=l.default)===null||t===void 0?void 0:t.call(l),_=W(w),C=_.length;if(C===0)return null;const d=(a=l.split)===null||a===void 0?void 0:a.call(l),I=`${n.value}-item`,A=y.value,b=C-1;return p("div",O(O({},m),{},{class:[F.value,m.class],style:[R.value,m.style]}),[_.map((D,S)=>{const k=w.indexOf(D);let f={};return z.value||(V==="vertical"?S<b&&(f={marginBottom:`${A/(d?2:1)}px`}):f=v(v({},S<b&&{[P.value]:`${A/(d?2:1)}px`}),i&&{paddingBottom:`${u.value}px`})),B(p(Y,{key:k},[p("div",{class:I,style:f},[D]),S<b&&d&&p("span",{class:`${I}-split`,style:f},[d])]))})])}}});r.Compact=h;r.install=function(e){return e.component(r.name,r),e.component(h.name,h),e};const te=r;export{te as A};
//# sourceMappingURL=index.34b7172c.js.map
