import{d as u,G as _,b as l,eu as r,e as i,a_ as m,eC as y,ey as g,eD as f,ew as b,t as k,r as v,o as I,eS as w,c as h,w as p,f as B,aq as S,eQ as C,u as d,bU as D,eX as N}from"./outputWidgets.5ad528ac.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fae9f858-e640-4704-9192-77532ac56463",e._sentryDebugIdIdentifier="sentry-dbid-fae9f858-e640-4704-9192-77532ac56463")}catch{}})();const x={key:0,class:"p-steps p-component"},V={class:"p-steps-list"},A={class:"p-menuitem-link"},E={class:"p-steps-number"},$=u({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,s=_(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(o,c)=>e.stepsInfo?(l(),r("nav",x,[i("ol",V,[(l(!0),r(m,null,y(s.value,(n,a)=>(l(),r("li",{key:a,class:g(["p-steps-item",{"p-highlight":a+1===e.stepsInfo.current}])},[i("span",A,[i("span",E,f(a+1),1)])],2))),128))])])):b("",!0)}});const K=k($,[["__scopeId","data-v-c6d9488a"]]),j=u({__name:"ActionButton",props:{action:{},displayName:{},loading:{type:Boolean}},emits:["click"],setup(e,{emit:t}){const s=e,o=v(null);return I(()=>{o.value&&s.action.setElement(o.value),w.addAction(s.action)}),(c,n)=>(l(),h(d(N),null,{default:p(()=>[B(d(D),{ref_key:"element",ref:o,class:"next-button",loading:c.loading,onClick:n[0]||(n[0]=a=>t("click")),onKeydown:n[1]||(n[1]=C(a=>t("click"),["enter"]))},{default:p(()=>[S(f(c.displayName),1)]),_:1},8,["loading"])]),_:1}))}});export{K as S,j as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.d2fb9fb7.js.map
