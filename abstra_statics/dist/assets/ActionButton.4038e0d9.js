import{d as u,G as y,b as c,ev as d,e as i,bq as m,eC as g,ez as f,eD as _,ex as v,v as b,r as k,o as I,c as B,w as r,f as w,aq as h,eP as C,u as p,bO as D,eX as N}from"./outputWidgets.ec1b7422.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="cf14fa48-f0b4-47bc-aab3-52213ae03535",e._sentryDebugIdIdentifier="sentry-dbid-cf14fa48-f0b4-47bc-aab3-52213ae03535")}catch{}})();const S={key:0,class:"p-steps p-component"},A={class:"p-steps-list"},x={class:"p-menuitem-link"},V={class:"p-steps-number"},E=u({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const s=e,o=y(()=>s.stepsInfo?Array(s.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(l,t)=>e.stepsInfo?(c(),d("nav",S,[i("ol",A,[(c(!0),d(m,null,g(o.value,(n,a)=>(c(),d("li",{key:a,class:f(["p-steps-item",{"p-highlight":a+1===e.stepsInfo.current}])},[i("span",x,[i("span",V,_(a+1),1)])],2))),128))])])):v("",!0)}});const z=b(E,[["__scopeId","data-v-c916ecf3"]]),$=u({__name:"ActionButton",props:{action:{},displayName:{},disabled:{type:Boolean},loading:{type:Boolean}},emits:["click"],setup(e,{emit:s}){const o=e,l=k(null);return I(()=>{l.value&&o.action.setElement(l.value)}),(t,n)=>(c(),B(p(N),null,{default:r(()=>[w(p(D),{ref_key:"element",ref:l,class:f(["next-button",t.disabled?"disabled":""]),loading:t.loading,disabled:t.disabled,onClick:n[0]||(n[0]=a=>s("click")),onKeydown:n[1]||(n[1]=C(a=>s("click"),["enter"]))},{default:r(()=>[h(_(t.displayName),1)]),_:1},8,["loading","disabled","class"])]),_:1}))}});const K=b($,[["__scopeId","data-v-e711f126"]]);export{K as A,z as S};
//# sourceMappingURL=ActionButton.4038e0d9.js.map
