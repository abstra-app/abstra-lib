import{L as k}from"./Logo.c7e9ac0c.js";import{d as v,eu as x,eH as A,f as w,W as I,b as d,w as a,u as e,c as f,R as p,e$ as o,o as i,ax as s,et as l,cY as C,cU as m,bL as N,a as B,cV as D,$ as T}from"./vue-router.b459e0ec.js";import{u as V}from"./workspaceStore.35caed1b.js";import{C as E}from"./Card.af6028cc.js";import"./router.2e0e4df8.js";import"./api.4a1bedf9.js";import"./runnerData.c3339ec5.js";import"./url.3f6a828a.js";import"./TabPane.0e3d0db5.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new S().stack;c&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[c]="3d0cdd5c-f1d0-4704-8ab5-df6d1f3a4bc8",r._sentryDebugIdIdentifier="sentry-dbid-3d0cdd5c-f1d0-4704-8ab5-df6d1f3a4bc8")}catch{}})();const L={class:"inner-content"},H={class:"card-content"},R=v({__name:"Error",setup(r){const c=x(),g=A(),u=V(),y=w(()=>{var t,_,b;return(b=(t=u.state.workspace)==null?void 0:t.name)!=null?b:(_=u.state.workspace)==null?void 0:_.brandName}),n=w(()=>{const{status:t}=c.params;switch(t){case"404":return{status:t,title:o.translate("i18n_page_not_found"),message:o.translate("i18n_page_not_found_message"),showAd:!1};case"403":return{status:t,title:o.translate("i18n_access_denied"),message:o.translate("i18n_access_denied_message"),action:"Go back to home",showAd:!0};default:return{status:"500",title:o.translate("i18n_internal_error"),message:o.translate("i18n_internal_error_message"),showAd:!1}}}),h=()=>{g.push({name:"playerHome"})};return(t,_)=>(i(),I("div",L,[d(e(C),null,{default:a(()=>[s(l(n.value.title),1)]),_:1}),d(e(m),{class:"message"},{default:a(()=>[s(l(n.value.message),1)]),_:1}),n.value.action?(i(),f(e(N),{key:0,type:"link",onClick:h},{default:a(()=>[s(l(n.value.action),1)]),_:1})):p("",!0),n.value.showAd?(i(),f(e(E),{key:1,bordered:!1,class:"card"},{default:a(()=>[B("div",H,[d(k,{style:{"margin-bottom":"10px"}}),d(e(m),null,{default:a(()=>[s("This page is part of "+l(y.value?`the ${y.value}`:"a")+" workflow, built with Abstra.",1)]),_:1}),e(u).state.workspace?(i(),f(e(m),{key:0},{default:a(()=>[s("Automate your own processes by getting started "),d(e(D),{href:"https://abstra.io"},{default:a(()=>[s("here")]),_:1}),s(".")]),_:1})):p("",!0)])]),_:1})):p("",!0)]))}});const S=T(R,[["__scopeId","data-v-623dafe1"]]);export{S as default};
//# sourceMappingURL=Error.880f9dfa.js.map
