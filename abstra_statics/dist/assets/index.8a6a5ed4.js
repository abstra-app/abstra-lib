import{d as V,ai as L,dO as M,dP as U,f as o,e as O,g as W,aR as Y,b as p,U as m,aS as q,al as j,cY as h,av as G,bw as B,aN as H,aj as J}from"./index.58989c26.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[c]="8f337143-9670-4bc0-be7a-64b4f675c2f1",e._sentryDebugIdIdentifier="sentry-dbid-8f337143-9670-4bc0-be7a-64b4f675c2f1")}catch{}})();const K={small:8,middle:16,large:24},Q=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:G.oneOf(B("horizontal","vertical")).def("horizontal"),align:G.oneOf(B("start","end","center","baseline")),wrap:H()});function X(e){return typeof e=="string"?K[e]:e||0}const r=V({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:Q(),slots:Object,setup(e,c){let{slots:l,attrs:g}=c;const{prefixCls:n,space:y,direction:w}=L("space",e),[E,F]=M(n),x=U(),s=o(()=>{var a,t,i;return(i=(a=e.size)!==null&&a!==void 0?a:(t=y==null?void 0:y.value)===null||t===void 0?void 0:t.size)!==null&&i!==void 0?i:"small"}),b=O(),u=O();W(s,()=>{[b.value,u.value]=(Array.isArray(s.value)?s.value:[s.value,s.value]).map(a=>X(a))},{immediate:!0});const z=o(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),P=o(()=>J(n.value,F.value,`${n.value}-${e.direction}`,{[`${n.value}-rtl`]:w.value==="rtl",[`${n.value}-align-${z.value}`]:z.value})),R=o(()=>w.value==="rtl"?"marginLeft":"marginRight"),k=o(()=>{const a={};return x.value&&(a.columnGap=`${b.value}px`,a.rowGap=`${u.value}px`),m(m({},a),e.wrap&&{flexWrap:"wrap",marginBottom:`${-u.value}px`})});return()=>{var a,t;const{wrap:i,direction:T="horizontal"}=e,_=(a=l.default)===null||a===void 0?void 0:a.call(l),C=Y(_),I=C.length;if(I===0)return null;const d=(t=l.split)===null||t===void 0?void 0:t.call(l),A=`${n.value}-item`,D=b.value,S=I-1;return p("div",j(j({},g),{},{class:[P.value,g.class],style:[k.value,g.style]}),[C.map((N,v)=>{let $=_.indexOf(N);$===-1&&($=`$$space-${v}`);let f={};return x.value||(T==="vertical"?v<S&&(f={marginBottom:`${D/(d?2:1)}px`}):f=m(m({},v<S&&{[R.value]:`${D/(d?2:1)}px`}),i&&{paddingBottom:`${u.value}px`})),E(p(q,{key:$},[p("div",{class:A,style:f},[N]),v<S&&d&&p("span",{class:`${A}-split`,style:f},[d])]))})])}}});r.Compact=h;r.install=function(e){return e.component(r.name,r),e.component(h.name,h),e};const ee=r;export{ee as A};
//# sourceMappingURL=index.8a6a5ed4.js.map
