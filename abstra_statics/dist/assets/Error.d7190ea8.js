import{L as k}from"./Logo.9a260bf6.js";import{d as v,eu as x,eH as A,f as w,W as I,b as c,w as a,u as e,c as f,R as p,e$ as o,o as i,ax as s,et as l,cY as C,cU as m,bL as N,a as B,cV as D,$ as T}from"./vue-router.a1ff9813.js";import{u as V}from"./workspaceStore.2b12f818.js";import{C as E}from"./Card.04c2bcf6.js";import"./router.1e15253c.js";import"./api.598a8b3f.js";import"./runnerData.d267cfd6.js";import"./url.f7fc4403.js";import"./TabPane.b6f6963e.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new S().stack;d&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[d]="2edcbef0-a21e-45c3-ba8e-1852914ea9f2",r._sentryDebugIdIdentifier="sentry-dbid-2edcbef0-a21e-45c3-ba8e-1852914ea9f2")}catch{}})();const L={class:"inner-content"},H={class:"card-content"},R=v({__name:"Error",setup(r){const d=x(),g=A(),u=V(),y=w(()=>{var t,_,b;return(b=(t=u.state.workspace)==null?void 0:t.name)!=null?b:(_=u.state.workspace)==null?void 0:_.brandName}),n=w(()=>{const{status:t}=d.params;switch(t){case"404":return{status:t,title:o.translate("i18n_page_not_found"),message:o.translate("i18n_page_not_found_message"),showAd:!1};case"403":return{status:t,title:o.translate("i18n_access_denied"),message:o.translate("i18n_access_denied_message"),action:"Go back to home",showAd:!0};default:return{status:"500",title:o.translate("i18n_internal_error"),message:o.translate("i18n_internal_error_message"),showAd:!1}}}),h=()=>{g.push({name:"playerHome"})};return(t,_)=>(i(),I("div",L,[c(e(C),null,{default:a(()=>[s(l(n.value.title),1)]),_:1}),c(e(m),{class:"message"},{default:a(()=>[s(l(n.value.message),1)]),_:1}),n.value.action?(i(),f(e(N),{key:0,type:"link",onClick:h},{default:a(()=>[s(l(n.value.action),1)]),_:1})):p("",!0),n.value.showAd?(i(),f(e(E),{key:1,bordered:!1,class:"card"},{default:a(()=>[B("div",H,[c(k,{style:{"margin-bottom":"10px"}}),c(e(m),null,{default:a(()=>[s("This page is part of "+l(y.value?`the ${y.value}`:"a")+" workflow, built with Abstra.",1)]),_:1}),e(u).state.workspace?(i(),f(e(m),{key:0},{default:a(()=>[s("Automate your own processes by getting started "),c(e(D),{href:"https://abstra.io"},{default:a(()=>[s("here")]),_:1}),s(".")]),_:1})):p("",!0)])]),_:1})):p("",!0)]))}});const S=T(R,[["__scopeId","data-v-623dafe1"]]);export{S as default};
//# sourceMappingURL=Error.d7190ea8.js.map
