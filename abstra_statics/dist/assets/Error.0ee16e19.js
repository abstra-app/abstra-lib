import{_ as k}from"./AbstraLogo.vue_vue_type_script_setup_true_lang.acf14ce7.js";import{d as v,ea as A,eo as x,f as w,o as i,Y as I,b as d,w as a,u as e,c as p,S as f,aG as s,e9 as l,df as C,db as m,bT as N,a as T,dc as B,eP as o,a0 as D}from"./index.94c209a7.js";import{u as E}from"./workspaceStore.adff3c97.js";import{C as S}from"./Card.8cf60f3d.js";import"./Logo.a21df1a6.js";import"./url.9f210000.js";import"./colorHelpers.88596b14.js";import"./TabPane.4db78b46.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new P().stack;c&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[c]="b4452187-0408-4e1a-9d17-5b1454d29bd0",r._sentryDebugIdIdentifier="sentry-dbid-b4452187-0408-4e1a-9d17-5b1454d29bd0")}catch{}})();const V={class:"inner-content"},G={class:"card-content"},H=v({__name:"Error",setup(r){const c=A(),b=x(),u=E(),g=w(()=>{var t,_,y;return(y=(t=u.state.workspace)==null?void 0:t.name)!=null?y:(_=u.state.workspace)==null?void 0:_.brandName}),n=w(()=>{const{status:t}=c.params;switch(t){case"404":return{status:t,title:o.translate("i18n_page_not_found"),message:o.translate("i18n_page_not_found_message"),showAd:!1};case"403":return{status:t,title:o.translate("i18n_access_denied"),message:o.translate("i18n_access_denied_message"),action:"Go back to home",showAd:!0};default:return{status:"500",title:o.translate("i18n_internal_error"),message:o.translate("i18n_internal_error_message"),showAd:!1}}}),h=()=>{b.push({name:"playerHome"})};return(t,_)=>(i(),I("div",V,[d(e(C),null,{default:a(()=>[s(l(n.value.title),1)]),_:1}),d(e(m),{class:"message"},{default:a(()=>[s(l(n.value.message),1)]),_:1}),n.value.action?(i(),p(e(N),{key:0,type:"link",onClick:h},{default:a(()=>[s(l(n.value.action),1)]),_:1})):f("",!0),n.value.showAd?(i(),p(e(S),{key:1,bordered:!1,class:"card"},{default:a(()=>[T("div",G,[d(k,{style:{"margin-bottom":"10px"}}),d(e(m),null,{default:a(()=>[s("This page is part of "+l(g.value?`the ${g.value}`:"a")+" workflow, built with Abstra.",1)]),_:1}),e(u).state.workspace?(i(),p(e(m),{key:0},{default:a(()=>[s("Automate your own processes by getting started "),d(e(B),{href:"https://abstra.io"},{default:a(()=>[s("here")]),_:1}),s(".")]),_:1})):f("",!0)])]),_:1})):f("",!0)]))}});const P=D(H,[["__scopeId","data-v-f16a0b67"]]);export{P as default};
//# sourceMappingURL=Error.0ee16e19.js.map
