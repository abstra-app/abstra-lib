import{L as k}from"./Logo.1643f166.js";import{d as v,eB as A,eO as x,f as w,W as I,b as d,w as a,u as e,c as p,R as f,f6 as o,o as i,ax as s,eA as l,cW as B,cS as m,bL as C,a as N,cT as T,$ as D}from"./vue-router.78d58ff0.js";import{u as E}from"./workspaceStore.48fc9b8b.js";import{C as L}from"./Card.e6564a3e.js";import"./router.08432de3.js";import"./api.eee349cf.js";import"./runnerData.d455da29.js";import"./url.f92f4d36.js";import"./TabPane.e15de9cc.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new W().stack;c&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[c]="04079bfd-188d-4a57-9706-1bdde2d0c35c",r._sentryDebugIdIdentifier="sentry-dbid-04079bfd-188d-4a57-9706-1bdde2d0c35c")}catch{}})();const S={class:"inner-content"},V={class:"card-content"},R=v({__name:"Error",setup(r){const c=A(),g=x(),u=E(),y=w(()=>{var t,_,b;return(b=(t=u.state.workspace)==null?void 0:t.name)!=null?b:(_=u.state.workspace)==null?void 0:_.brandName}),n=w(()=>{const{status:t}=c.params;switch(t){case"404":return{status:t,title:o.translate("i18n_page_not_found"),message:o.translate("i18n_page_not_found_message"),showAd:!1};case"403":return{status:t,title:o.translate("i18n_access_denied"),message:o.translate("i18n_access_denied_message"),action:"Go back to home",showAd:!0};default:return{status:"500",title:o.translate("i18n_internal_error"),message:o.translate("i18n_internal_error_message"),showAd:!1}}}),h=()=>{g.push({name:"playerHome"})};return(t,_)=>(i(),I("div",S,[d(e(B),null,{default:a(()=>[s(l(n.value.title),1)]),_:1}),d(e(m),{class:"message"},{default:a(()=>[s(l(n.value.message),1)]),_:1}),n.value.action?(i(),p(e(C),{key:0,type:"link",onClick:h},{default:a(()=>[s(l(n.value.action),1)]),_:1})):f("",!0),n.value.showAd?(i(),p(e(L),{key:1,bordered:!1,class:"card"},{default:a(()=>[N("div",V,[d(k,{style:{"margin-bottom":"10px"}}),d(e(m),null,{default:a(()=>[s("This page is part of "+l(y.value?`the ${y.value}`:"a")+" workflow, built with Abstra.",1)]),_:1}),e(u).state.workspace?(i(),p(e(m),{key:0},{default:a(()=>[s("Automate your own processes by getting started "),d(e(T),{href:"https://abstra.io"},{default:a(()=>[s("here")]),_:1}),s(".")]),_:1})):f("",!0)])]),_:1})):f("",!0)]))}});const W=D(R,[["__scopeId","data-v-623dafe1"]]);export{W as default};
//# sourceMappingURL=Error.73a75403.js.map
