import{_ as k}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.3b8a84cc.js";import{d as v,ed as A,eq as x,f as b,X as I,b as c,w as a,u as e,c as f,R as p,o as i,aF as s,ec as l,d9 as C,d5 as m,bP as N,a as B,d6 as D,eV as o,$ as T}from"./vue-router.4c412b7f.js";import{u as V}from"./workspaceStore.967507d0.js";import{C as E}from"./Card.db148d5e.js";import"./Logo.287cfda8.js";import"./url.d51ef576.js";import"./colorHelpers.4a965e4e.js";import"./TabPane.54cf68a7.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new H().stack;d&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[d]="e93a569e-a23f-4ae1-9587-2025a19625d1",r._sentryDebugIdIdentifier="sentry-dbid-e93a569e-a23f-4ae1-9587-2025a19625d1")}catch{}})();const R={class:"inner-content"},S={class:"card-content"},$=v({__name:"Error",setup(r){const d=A(),g=x(),u=V(),y=b(()=>{var t,_,w;return(w=(t=u.state.workspace)==null?void 0:t.name)!=null?w:(_=u.state.workspace)==null?void 0:_.brandName}),n=b(()=>{const{status:t}=d.params;switch(t){case"404":return{status:t,title:o.translate("i18n_page_not_found"),message:o.translate("i18n_page_not_found_message"),showAd:!1};case"403":return{status:t,title:o.translate("i18n_access_denied"),message:o.translate("i18n_access_denied_message"),action:"Go back to home",showAd:!0};default:return{status:"500",title:o.translate("i18n_internal_error"),message:o.translate("i18n_internal_error_message"),showAd:!1}}}),h=()=>{g.push({name:"playerHome"})};return(t,_)=>(i(),I("div",R,[c(e(C),null,{default:a(()=>[s(l(n.value.title),1)]),_:1}),c(e(m),{class:"message"},{default:a(()=>[s(l(n.value.message),1)]),_:1}),n.value.action?(i(),f(e(N),{key:0,type:"link",onClick:h},{default:a(()=>[s(l(n.value.action),1)]),_:1})):p("",!0),n.value.showAd?(i(),f(e(E),{key:1,bordered:!1,class:"card"},{default:a(()=>[B("div",S,[c(k,{style:{"margin-bottom":"10px"}}),c(e(m),null,{default:a(()=>[s("This page is part of "+l(y.value?`the ${y.value}`:"a")+" workflow, built with Abstra.",1)]),_:1}),e(u).state.workspace?(i(),f(e(m),{key:0},{default:a(()=>[s("Automate your own processes by getting started "),c(e(D),{href:"https://abstra.io"},{default:a(()=>[s("here")]),_:1}),s(".")]),_:1})):p("",!0)])]),_:1})):p("",!0)]))}});const H=T($,[["__scopeId","data-v-f16a0b67"]]);export{H as default};
//# sourceMappingURL=Error.29fd548c.js.map
