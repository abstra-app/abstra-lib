import{d as u,F as y,b as c,et as d,e as i,bo as m,eA as g,ex as _,eB as f,ev as v,t as b,r as k,o as I,c as B,w as r,f as w,ao as h,eN as N,u as p,bM as A,eV as S}from"./outputWidgets.c5c8a98e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bf40c3a5-562b-40f0-9b22-a590040bb3cc",e._sentryDebugIdIdentifier="sentry-dbid-bf40c3a5-562b-40f0-9b22-a590040bb3cc")}catch{}})();const C={key:0,class:"p-steps p-component"},D={class:"p-steps-list"},V={class:"p-menuitem-link"},x={class:"p-steps-number"},E=u({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,o=y(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(l,s)=>e.stepsInfo?(c(),d("nav",C,[i("ol",D,[(c(!0),d(m,null,g(o.value,(n,a)=>(c(),d("li",{key:a,class:_(["p-steps-item",{"p-highlight":a+1===e.stepsInfo.current}])},[i("span",V,[i("span",x,f(a+1),1)])],2))),128))])])):v("",!0)}});const K=b(E,[["__scopeId","data-v-c916ecf3"]]),$=u({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(e,{emit:t}){const o=e,l=k(null);return I(()=>{l.value&&o.action.setElement(l.value)}),(s,n)=>(c(),B(p(S),null,{default:r(()=>[w(p(A),{ref_key:"element",ref:l,class:_(["next-button",s.disabled?"disabled":""]),loading:s.loading,disabled:s.disabled,onClick:n[0]||(n[0]=a=>t("click")),onKeydown:n[1]||(n[1]=N(a=>t("click"),["enter"]))},{default:r(()=>[h(f(s.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const M=b($,[["__scopeId","data-v-e711f126"]]);export{M as A,K as S};
//# sourceMappingURL=ActionButton.3bc03065.js.map
