import{L as k}from"./Logo.c3c80eef.js";import{d as v,eB as A,eN as x,f as b,o as i,W as I,b as c,w as a,u as e,c as p,R as f,f4 as o,ax as s,eA as l,cW as N,cS as m,bL as B,a as C,cT as T,$ as D}from"./vue-router.1fa35404.js";import{u as E}from"./workspaceStore.69b85944.js";import{C as L}from"./Card.16919718.js";import"./router.ea67fb87.js";import"./api.9d0c1b2a.js";import"./runnerData.ced7c9eb.js";import"./url.3c9d9694.js";import"./TabPane.01c8da03.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new W().stack;d&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[d]="0ab694c1-e35c-40c2-9426-51356172258d",r._sentryDebugIdIdentifier="sentry-dbid-0ab694c1-e35c-40c2-9426-51356172258d")}catch{}})();const S={class:"inner-content"},V={class:"card-content"},R=v({__name:"Error",setup(r){const d=A(),g=x(),u=E(),y=b(()=>{var t,_,w;return(w=(t=u.state.workspace)==null?void 0:t.name)!=null?w:(_=u.state.workspace)==null?void 0:_.brandName}),n=b(()=>{const{status:t}=d.params;switch(t){case"404":return{status:t,title:o.translate("i18n_page_not_found"),message:o.translate("i18n_page_not_found_message"),showAd:!1};case"403":return{status:t,title:o.translate("i18n_access_denied"),message:o.translate("i18n_access_denied_message"),action:"Go back to home",showAd:!0};default:return{status:"500",title:o.translate("i18n_internal_error"),message:o.translate("i18n_internal_error_message"),showAd:!1}}}),h=()=>{g.push({name:"playerHome"})};return(t,_)=>(i(),I("div",S,[c(e(N),null,{default:a(()=>[s(l(n.value.title),1)]),_:1}),c(e(m),{class:"message"},{default:a(()=>[s(l(n.value.message),1)]),_:1}),n.value.action?(i(),p(e(B),{key:0,type:"link",onClick:h},{default:a(()=>[s(l(n.value.action),1)]),_:1})):f("",!0),n.value.showAd?(i(),p(e(L),{key:1,bordered:!1,class:"card"},{default:a(()=>[C("div",V,[c(k,{style:{"margin-bottom":"10px"}}),c(e(m),null,{default:a(()=>[s("This page is part of "+l(y.value?`the ${y.value}`:"a")+" workflow, built with Abstra.",1)]),_:1}),e(u).state.workspace?(i(),p(e(m),{key:0},{default:a(()=>[s("Automate your own processes by getting started "),c(e(T),{href:"https://abstra.io"},{default:a(()=>[s("here")]),_:1}),s(".")]),_:1})):f("",!0)])]),_:1})):f("",!0)]))}});const W=D(R,[["__scopeId","data-v-623dafe1"]]);export{W as default};
//# sourceMappingURL=Error.26c1d231.js.map
