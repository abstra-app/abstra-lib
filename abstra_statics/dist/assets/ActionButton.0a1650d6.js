import{d as u,G as m,b as c,ev as d,e as i,bq as b,eC as g,ez as f,eD as _,ex as v,v as y,r as k,o as I,c as B,w as r,f as w,aq as h,eP as C,u as p,bO as D,eX as N}from"./outputWidgets.f2ae36a0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="f6c1bf99-3c9e-4373-8562-c6e1eafe434e",e._sentryDebugIdIdentifier="sentry-dbid-f6c1bf99-3c9e-4373-8562-c6e1eafe434e")}catch{}})();const S={key:0,class:"p-steps p-component"},A={class:"p-steps-list"},x={class:"p-menuitem-link"},V={class:"p-steps-number"},E=u({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,o=m(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(l,t)=>e.stepsInfo?(c(),d("nav",S,[i("ol",A,[(c(!0),d(b,null,g(o.value,(n,a)=>(c(),d("li",{key:a,class:f(["p-steps-item",{"p-highlight":a+1===e.stepsInfo.current}])},[i("span",x,[i("span",V,_(a+1),1)])],2))),128))])])):v("",!0)}});const z=y(E,[["__scopeId","data-v-c916ecf3"]]),$=u({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(e,{emit:s}){const o=e,l=k(null);return I(()=>{l.value&&o.action.setElement(l.value)}),(t,n)=>(c(),B(p(N),null,{default:r(()=>[w(p(D),{ref_key:"element",ref:l,class:f(["next-button",t.disabled?"disabled":""]),loading:t.loading,disabled:t.disabled,onClick:n[0]||(n[0]=a=>s("click")),onKeydown:n[1]||(n[1]=C(a=>s("click"),["enter"]))},{default:r(()=>[h(_(t.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const K=y($,[["__scopeId","data-v-e711f126"]]);export{K as A,z as S};
//# sourceMappingURL=ActionButton.0a1650d6.js.map
