import{_ as k}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.5f385786.js";import{d as v,ed as A,eq as x,f as w,X as I,b as d,w as a,u as e,c as f,R as p,o as i,aF as s,ec as l,d9 as C,d5 as m,bP as N,a as B,d6 as D,eW as o,$ as T}from"./vue-router.282d063d.js";import{u as E}from"./workspaceStore.bca52cd5.js";import{C as V}from"./Card.a79d25ba.js";import"./Logo.848ac143.js";import"./url.a9e72d9c.js";import"./colorHelpers.14b26e2c.js";import"./TabPane.47564669.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new H().stack;c&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[c]="1d7325b2-6809-4848-9716-2de7f24e181a",r._sentryDebugIdIdentifier="sentry-dbid-1d7325b2-6809-4848-9716-2de7f24e181a")}catch{}})();const R={class:"inner-content"},S={class:"card-content"},$=v({__name:"Error",setup(r){const c=A(),g=x(),u=E(),y=w(()=>{var t,_,b;return(b=(t=u.state.workspace)==null?void 0:t.name)!=null?b:(_=u.state.workspace)==null?void 0:_.brandName}),n=w(()=>{const{status:t}=c.params;switch(t){case"404":return{status:t,title:o.translate("i18n_page_not_found"),message:o.translate("i18n_page_not_found_message"),showAd:!1};case"403":return{status:t,title:o.translate("i18n_access_denied"),message:o.translate("i18n_access_denied_message"),action:"Go back to home",showAd:!0};default:return{status:"500",title:o.translate("i18n_internal_error"),message:o.translate("i18n_internal_error_message"),showAd:!1}}}),h=()=>{g.push({name:"playerHome"})};return(t,_)=>(i(),I("div",R,[d(e(C),null,{default:a(()=>[s(l(n.value.title),1)]),_:1}),d(e(m),{class:"message"},{default:a(()=>[s(l(n.value.message),1)]),_:1}),n.value.action?(i(),f(e(N),{key:0,type:"link",onClick:h},{default:a(()=>[s(l(n.value.action),1)]),_:1})):p("",!0),n.value.showAd?(i(),f(e(V),{key:1,bordered:!1,class:"card"},{default:a(()=>[B("div",S,[d(k,{style:{"margin-bottom":"10px"}}),d(e(m),null,{default:a(()=>[s("This page is part of "+l(y.value?`the ${y.value}`:"a")+" workflow, built with Abstra.",1)]),_:1}),e(u).state.workspace?(i(),f(e(m),{key:0},{default:a(()=>[s("Automate your own processes by getting started "),d(e(D),{href:"https://abstra.io"},{default:a(()=>[s("here")]),_:1}),s(".")]),_:1})):p("",!0)])]),_:1})):p("",!0)]))}});const H=T($,[["__scopeId","data-v-f16a0b67"]]);export{H as default};
//# sourceMappingURL=Error.8e5fe8f0.js.map
