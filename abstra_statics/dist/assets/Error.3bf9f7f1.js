import{_ as k}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.121dea82.js";import{d as v,ea as A,eo as x,f as w,o as i,Y as I,b as c,w as a,u as e,c as f,S as p,aG as s,e9 as l,dd as C,d9 as m,bT as N,a as T,da as B,eR as o,a0 as D}from"./index.27bc5f51.js";import{u as E}from"./workspaceStore.ae7c246d.js";import{C as S}from"./Card.08b4bac1.js";import"./Logo.d5a4382c.js";import"./url.ffe10626.js";import"./colorHelpers.6857de5d.js";import"./TabPane.a4a9e97d.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new H().stack;d&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[d]="7508f591-903d-49e7-8dcb-24be307acf8f",r._sentryDebugIdIdentifier="sentry-dbid-7508f591-903d-49e7-8dcb-24be307acf8f")}catch{}})();const V={class:"inner-content"},R={class:"card-content"},G=v({__name:"Error",setup(r){const d=A(),g=x(),u=E(),b=w(()=>{var t,_,y;return(y=(t=u.state.workspace)==null?void 0:t.name)!=null?y:(_=u.state.workspace)==null?void 0:_.brandName}),n=w(()=>{const{status:t}=d.params;switch(t){case"404":return{status:t,title:o.translate("i18n_page_not_found"),message:o.translate("i18n_page_not_found_message"),showAd:!1};case"403":return{status:t,title:o.translate("i18n_access_denied"),message:o.translate("i18n_access_denied_message"),action:"Go back to home",showAd:!0};default:return{status:"500",title:o.translate("i18n_internal_error"),message:o.translate("i18n_internal_error_message"),showAd:!1}}}),h=()=>{g.push({name:"playerHome"})};return(t,_)=>(i(),I("div",V,[c(e(C),null,{default:a(()=>[s(l(n.value.title),1)]),_:1}),c(e(m),{class:"message"},{default:a(()=>[s(l(n.value.message),1)]),_:1}),n.value.action?(i(),f(e(N),{key:0,type:"link",onClick:h},{default:a(()=>[s(l(n.value.action),1)]),_:1})):p("",!0),n.value.showAd?(i(),f(e(S),{key:1,bordered:!1,class:"card"},{default:a(()=>[T("div",R,[c(k,{style:{"margin-bottom":"10px"}}),c(e(m),null,{default:a(()=>[s("This page is part of "+l(b.value?`the ${b.value}`:"a")+" workflow, built with Abstra.",1)]),_:1}),e(u).state.workspace?(i(),f(e(m),{key:0},{default:a(()=>[s("Automate your own processes by getting started "),c(e(B),{href:"https://abstra.io"},{default:a(()=>[s("here")]),_:1}),s(".")]),_:1})):p("",!0)])]),_:1})):p("",!0)]))}});const H=D(G,[["__scopeId","data-v-f16a0b67"]]);export{H as default};
//# sourceMappingURL=Error.3bf9f7f1.js.map
