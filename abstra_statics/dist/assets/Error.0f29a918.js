import{_ as k}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.d1ac35e1.js";import{d as v,ea as A,eo as x,f as w,o as i,X as I,b as c,w as a,u as e,c as f,R as p,aF as s,e9 as l,d9 as C,d5 as m,bP as N,a as B,d6 as D,eV as o,$ as T}from"./vue-router.47906b9b.js";import{u as V}from"./workspaceStore.a6063a5b.js";import{C as E}from"./Card.66382fe6.js";import"./Logo.a9d0f43a.js";import"./url.e00e77ef.js";import"./colorHelpers.d0c5bb86.js";import"./TabPane.cc21a725.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new H().stack;d&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[d]="f27e8f89-ff4a-4f01-91ba-b59322a97c63",r._sentryDebugIdIdentifier="sentry-dbid-f27e8f89-ff4a-4f01-91ba-b59322a97c63")}catch{}})();const R={class:"inner-content"},S={class:"card-content"},$=v({__name:"Error",setup(r){const d=A(),g=x(),u=V(),b=w(()=>{var t,_,y;return(y=(t=u.state.workspace)==null?void 0:t.name)!=null?y:(_=u.state.workspace)==null?void 0:_.brandName}),n=w(()=>{const{status:t}=d.params;switch(t){case"404":return{status:t,title:o.translate("i18n_page_not_found"),message:o.translate("i18n_page_not_found_message"),showAd:!1};case"403":return{status:t,title:o.translate("i18n_access_denied"),message:o.translate("i18n_access_denied_message"),action:"Go back to home",showAd:!0};default:return{status:"500",title:o.translate("i18n_internal_error"),message:o.translate("i18n_internal_error_message"),showAd:!1}}}),h=()=>{g.push({name:"playerHome"})};return(t,_)=>(i(),I("div",R,[c(e(C),null,{default:a(()=>[s(l(n.value.title),1)]),_:1}),c(e(m),{class:"message"},{default:a(()=>[s(l(n.value.message),1)]),_:1}),n.value.action?(i(),f(e(N),{key:0,type:"link",onClick:h},{default:a(()=>[s(l(n.value.action),1)]),_:1})):p("",!0),n.value.showAd?(i(),f(e(E),{key:1,bordered:!1,class:"card"},{default:a(()=>[B("div",S,[c(k,{style:{"margin-bottom":"10px"}}),c(e(m),null,{default:a(()=>[s("This page is part of "+l(b.value?`the ${b.value}`:"a")+" workflow, built with Abstra.",1)]),_:1}),e(u).state.workspace?(i(),f(e(m),{key:0},{default:a(()=>[s("Automate your own processes by getting started "),c(e(D),{href:"https://abstra.io"},{default:a(()=>[s("here")]),_:1}),s(".")]),_:1})):p("",!0)])]),_:1})):p("",!0)]))}});const H=T($,[["__scopeId","data-v-f16a0b67"]]);export{H as default};
//# sourceMappingURL=Error.0f29a918.js.map
