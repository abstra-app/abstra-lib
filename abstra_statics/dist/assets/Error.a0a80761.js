import{_ as k}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.22bd7c01.js";import{d as v,ea as A,eo as x,f as w,o as i,Y as I,b as d,w as t,u as e,c as f,S as p,aG as s,e9 as l,dd as C,d9 as m,bT as N,a as T,da as B,eP as o,a0 as D}from"./index.d72204b4.js";import{u as E}from"./workspaceStore.8903535b.js";import{C as S}from"./Card.32794ae8.js";import"./Logo.7524814a.js";import"./url.22bb5778.js";import"./colorHelpers.2502e188.js";import"./TabPane.25dc8e44.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new P().stack;c&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[c]="319fadca-a364-4fd3-a4ae-3967d3a595fb",r._sentryDebugIdIdentifier="sentry-dbid-319fadca-a364-4fd3-a4ae-3967d3a595fb")}catch{}})();const V={class:"inner-content"},G={class:"card-content"},H=v({__name:"Error",setup(r){const c=A(),g=x(),u=E(),y=w(()=>{var a,_,b;return(b=(a=u.state.workspace)==null?void 0:a.name)!=null?b:(_=u.state.workspace)==null?void 0:_.brandName}),n=w(()=>{const{status:a}=c.params;switch(a){case"404":return{status:a,title:o.translate("i18n_page_not_found"),message:o.translate("i18n_page_not_found_message"),showAd:!1};case"403":return{status:a,title:o.translate("i18n_access_denied"),message:o.translate("i18n_access_denied_message"),action:"Go back to home",showAd:!0};default:return{status:"500",title:o.translate("i18n_internal_error"),message:o.translate("i18n_internal_error_message"),showAd:!1}}}),h=()=>{g.push({name:"playerHome"})};return(a,_)=>(i(),I("div",V,[d(e(C),null,{default:t(()=>[s(l(n.value.title),1)]),_:1}),d(e(m),{class:"message"},{default:t(()=>[s(l(n.value.message),1)]),_:1}),n.value.action?(i(),f(e(N),{key:0,type:"link",onClick:h},{default:t(()=>[s(l(n.value.action),1)]),_:1})):p("",!0),n.value.showAd?(i(),f(e(S),{key:1,bordered:!1,class:"card"},{default:t(()=>[T("div",G,[d(k,{style:{"margin-bottom":"10px"}}),d(e(m),null,{default:t(()=>[s("This page is part of "+l(y.value?`the ${y.value}`:"a")+" workflow, built with Abstra.",1)]),_:1}),e(u).state.workspace?(i(),f(e(m),{key:0},{default:t(()=>[s("Automate your own processes by getting started "),d(e(B),{href:"https://abstra.io"},{default:t(()=>[s("here")]),_:1}),s(".")]),_:1})):p("",!0)])]),_:1})):p("",!0)]))}});const P=D(H,[["__scopeId","data-v-f16a0b67"]]);export{P as default};
//# sourceMappingURL=Error.a0a80761.js.map
