import{_ as k}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.06b10d75.js";import{d as v,ed as A,eq as x,f as w,X as I,b as c,w as a,u as e,c as p,R as f,o as i,aF as s,ec as l,db as C,d7 as m,bS as N,a as B,d8 as D,eV as o,$ as T}from"./vue-router.42f25760.js";import{u as V}from"./workspaceStore.9e6dc003.js";import{C as E}from"./Card.610c7ea6.js";import"./Logo.12c7e724.js";import"./url.f532c700.js";import"./colorHelpers.379f25c9.js";import"./TabPane.6a35c312.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new H().stack;d&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[d]="bc927a31-2ada-42e1-9c35-e86425324a87",r._sentryDebugIdIdentifier="sentry-dbid-bc927a31-2ada-42e1-9c35-e86425324a87")}catch{}})();const S={class:"inner-content"},R={class:"card-content"},$=v({__name:"Error",setup(r){const d=A(),g=x(),u=V(),b=w(()=>{var t,_,y;return(y=(t=u.state.workspace)==null?void 0:t.name)!=null?y:(_=u.state.workspace)==null?void 0:_.brandName}),n=w(()=>{const{status:t}=d.params;switch(t){case"404":return{status:t,title:o.translate("i18n_page_not_found"),message:o.translate("i18n_page_not_found_message"),showAd:!1};case"403":return{status:t,title:o.translate("i18n_access_denied"),message:o.translate("i18n_access_denied_message"),action:"Go back to home",showAd:!0};default:return{status:"500",title:o.translate("i18n_internal_error"),message:o.translate("i18n_internal_error_message"),showAd:!1}}}),h=()=>{g.push({name:"playerHome"})};return(t,_)=>(i(),I("div",S,[c(e(C),null,{default:a(()=>[s(l(n.value.title),1)]),_:1}),c(e(m),{class:"message"},{default:a(()=>[s(l(n.value.message),1)]),_:1}),n.value.action?(i(),p(e(N),{key:0,type:"link",onClick:h},{default:a(()=>[s(l(n.value.action),1)]),_:1})):f("",!0),n.value.showAd?(i(),p(e(E),{key:1,bordered:!1,class:"card"},{default:a(()=>[B("div",R,[c(k,{style:{"margin-bottom":"10px"}}),c(e(m),null,{default:a(()=>[s("This page is part of "+l(b.value?`the ${b.value}`:"a")+" workflow, built with Abstra.",1)]),_:1}),e(u).state.workspace?(i(),p(e(m),{key:0},{default:a(()=>[s("Automate your own processes by getting started "),c(e(D),{href:"https://abstra.io"},{default:a(()=>[s("here")]),_:1}),s(".")]),_:1})):f("",!0)])]),_:1})):f("",!0)]))}});const H=T($,[["__scopeId","data-v-f16a0b67"]]);export{H as default};
//# sourceMappingURL=Error.4792e80d.js.map
