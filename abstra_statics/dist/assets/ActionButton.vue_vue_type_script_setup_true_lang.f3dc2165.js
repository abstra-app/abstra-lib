import{d as u,G as _,b as l,ev as r,e as p,bq as m,eC as y,ez as b,eD as f,ex as g,v,r as k,o as I,c as w,w as i,f as h,aq as B,eU as C,u as d,bO as D,e_ as N}from"./outputWidgets.57362b1f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ca2b3a5b-6618-4f94-8896-0f66c8ec89a0",e._sentryDebugIdIdentifier="sentry-dbid-ca2b3a5b-6618-4f94-8896-0f66c8ec89a0")}catch{}})();const S={key:0,class:"p-steps p-component"},x={class:"p-steps-list"},V={class:"p-menuitem-link"},E={class:"p-steps-number"},$=u({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,a=_(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(o,c)=>e.stepsInfo?(l(),r("nav",S,[p("ol",x,[(l(!0),r(m,null,y(a.value,(s,n)=>(l(),r("li",{key:n,class:b(["p-steps-item",{"p-highlight":n+1===e.stepsInfo.current}])},[p("span",V,[p("span",E,f(n+1),1)])],2))),128))])])):g("",!0)}});const z=v($,[["__scopeId","data-v-c6d9488a"]]),A=u({__name:"ActionButton",props:{action:{},displayName:{},loading:{type:Boolean}},emits:["click"],setup(e,{emit:t}){const a=e,o=k(null);return I(()=>{o.value&&a.action.setElement(o.value)}),(c,s)=>(l(),w(d(N),null,{default:i(()=>[h(d(D),{ref_key:"element",ref:o,class:"next-button",loading:c.loading,onClick:s[0]||(s[0]=n=>t("click")),onKeydown:s[1]||(s[1]=C(n=>t("click"),["enter"]))},{default:i(()=>[B(f(c.displayName),1)]),_:1},8,["loading"])]),_:1}))}});export{z as S,A as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.f3dc2165.js.map
