import{d as u,G as _,b as l,eu as c,e as d,a_ as m,eC as y,ey as b,eD as f,ew as g,t as k,r as v,o as I,c as w,w as p,f as h,aq as B,eQ as C,u as i,bU as D,eW as N}from"./outputWidgets.92e6243c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="84707e21-683f-408b-8ff5-63d9442d2fe0",e._sentryDebugIdIdentifier="sentry-dbid-84707e21-683f-408b-8ff5-63d9442d2fe0")}catch{}})();const S={key:0,class:"p-steps p-component"},x={class:"p-steps-list"},V={class:"p-menuitem-link"},E={class:"p-steps-number"},$=u({__name:"Steps",props:{stepsInfo:{type:Object,default:null}},setup(e){const t=e,a=_(()=>t.stepsInfo?Array(t.stepsInfo.total).fill(null).map(()=>({label:"",to:""})):[]);return(o,r)=>e.stepsInfo?(l(),c("nav",S,[d("ol",x,[(l(!0),c(m,null,y(a.value,(s,n)=>(l(),c("li",{key:n,class:b(["p-steps-item",{"p-highlight":n+1===e.stepsInfo.current}])},[d("span",V,[d("span",E,f(n+1),1)])],2))),128))])])):g("",!0)}});const K=k($,[["__scopeId","data-v-c6d9488a"]]),j=u({__name:"ActionButton",props:{action:{},displayName:{},loading:{type:Boolean}},emits:["click"],setup(e,{emit:t}){const a=e,o=v(null);return I(()=>{o.value&&a.action.setElement(o.value)}),(r,s)=>(l(),w(i(N),null,{default:p(()=>[h(i(D),{ref_key:"element",ref:o,class:"next-button",loading:r.loading,onClick:s[0]||(s[0]=n=>t("click")),onKeydown:s[1]||(s[1]=C(n=>t("click"),["enter"]))},{default:p(()=>[B(f(r.displayName),1)]),_:1},8,["loading"])]),_:1}))}});export{K as S,j as _};
//# sourceMappingURL=ActionButton.vue_vue_type_script_setup_true_lang.358fbf7a.js.map
