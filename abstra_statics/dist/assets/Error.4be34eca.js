import{_ as k}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.0fd38fe7.js";import{d as v,ea as A,eo as x,f as b,o as i,Y as I,b as d,w as a,u as e,c as p,S as f,aG as s,e9 as l,dd as C,d9 as m,bT as N,a as T,da as B,eP as o,a0 as D}from"./index.77602df8.js";import{u as E}from"./workspaceStore.3bcaa4eb.js";import{C as S}from"./Card.2f500b34.js";import"./Logo.2d277330.js";import"./url.2906f968.js";import"./colorHelpers.7b942f88.js";import"./TabPane.085bdad9.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new P().stack;c&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[c]="3dad307e-1399-4204-9989-a7a960c9d67d",r._sentryDebugIdIdentifier="sentry-dbid-3dad307e-1399-4204-9989-a7a960c9d67d")}catch{}})();const V={class:"inner-content"},G={class:"card-content"},H=v({__name:"Error",setup(r){const c=A(),g=x(),u=E(),y=b(()=>{var t,_,w;return(w=(t=u.state.workspace)==null?void 0:t.name)!=null?w:(_=u.state.workspace)==null?void 0:_.brandName}),n=b(()=>{const{status:t}=c.params;switch(t){case"404":return{status:t,title:o.translate("i18n_page_not_found"),message:o.translate("i18n_page_not_found_message"),showAd:!1};case"403":return{status:t,title:o.translate("i18n_access_denied"),message:o.translate("i18n_access_denied_message"),action:"Go back to home",showAd:!0};default:return{status:"500",title:o.translate("i18n_internal_error"),message:o.translate("i18n_internal_error_message"),showAd:!1}}}),h=()=>{g.push({name:"playerHome"})};return(t,_)=>(i(),I("div",V,[d(e(C),null,{default:a(()=>[s(l(n.value.title),1)]),_:1}),d(e(m),{class:"message"},{default:a(()=>[s(l(n.value.message),1)]),_:1}),n.value.action?(i(),p(e(N),{key:0,type:"link",onClick:h},{default:a(()=>[s(l(n.value.action),1)]),_:1})):f("",!0),n.value.showAd?(i(),p(e(S),{key:1,bordered:!1,class:"card"},{default:a(()=>[T("div",G,[d(k,{style:{"margin-bottom":"10px"}}),d(e(m),null,{default:a(()=>[s("This page is part of "+l(y.value?`the ${y.value}`:"a")+" workflow, built with Abstra.",1)]),_:1}),e(u).state.workspace?(i(),p(e(m),{key:0},{default:a(()=>[s("Automate your own processes by getting started "),d(e(B),{href:"https://abstra.io"},{default:a(()=>[s("here")]),_:1}),s(".")]),_:1})):f("",!0)])]),_:1})):f("",!0)]))}});const P=D(H,[["__scopeId","data-v-f16a0b67"]]);export{P as default};
//# sourceMappingURL=Error.4be34eca.js.map
