import{_ as k}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.f3e0b6e1.js";import{d as v,ea as A,eo as x,f as w,o as i,Y as I,b as c,w as a,u as e,c as p,S as f,aG as s,e9 as l,dd as C,d9 as m,bT as N,a as T,da as B,eP as o,a0 as D}from"./index.f858dbab.js";import{u as E}from"./workspaceStore.e979a3ed.js";import{C as S}from"./Card.9ce63e5f.js";import"./Logo.5e4dc097.js";import"./url.672a6937.js";import"./colorHelpers.7d67fe00.js";import"./TabPane.602e4ebf.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new P().stack;d&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[d]="b806cce2-b3dc-49d0-9aa5-4418a3146b3b",r._sentryDebugIdIdentifier="sentry-dbid-b806cce2-b3dc-49d0-9aa5-4418a3146b3b")}catch{}})();const V={class:"inner-content"},G={class:"card-content"},H=v({__name:"Error",setup(r){const d=A(),b=x(),u=E(),g=w(()=>{var t,_,y;return(y=(t=u.state.workspace)==null?void 0:t.name)!=null?y:(_=u.state.workspace)==null?void 0:_.brandName}),n=w(()=>{const{status:t}=d.params;switch(t){case"404":return{status:t,title:o.translate("i18n_page_not_found"),message:o.translate("i18n_page_not_found_message"),showAd:!1};case"403":return{status:t,title:o.translate("i18n_access_denied"),message:o.translate("i18n_access_denied_message"),action:"Go back to home",showAd:!0};default:return{status:"500",title:o.translate("i18n_internal_error"),message:o.translate("i18n_internal_error_message"),showAd:!1}}}),h=()=>{b.push({name:"playerHome"})};return(t,_)=>(i(),I("div",V,[c(e(C),null,{default:a(()=>[s(l(n.value.title),1)]),_:1}),c(e(m),{class:"message"},{default:a(()=>[s(l(n.value.message),1)]),_:1}),n.value.action?(i(),p(e(N),{key:0,type:"link",onClick:h},{default:a(()=>[s(l(n.value.action),1)]),_:1})):f("",!0),n.value.showAd?(i(),p(e(S),{key:1,bordered:!1,class:"card"},{default:a(()=>[T("div",G,[c(k,{style:{"margin-bottom":"10px"}}),c(e(m),null,{default:a(()=>[s("This page is part of "+l(g.value?`the ${g.value}`:"a")+" workflow, built with Abstra.",1)]),_:1}),e(u).state.workspace?(i(),p(e(m),{key:0},{default:a(()=>[s("Automate your own processes by getting started "),c(e(B),{href:"https://abstra.io"},{default:a(()=>[s("here")]),_:1}),s(".")]),_:1})):f("",!0)])]),_:1})):f("",!0)]))}});const P=D(H,[["__scopeId","data-v-f16a0b67"]]);export{P as default};
//# sourceMappingURL=Error.055fa4fd.js.map
