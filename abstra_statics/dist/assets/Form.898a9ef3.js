import{A as S}from"./api.c24e3c6a.js";import{b as I,j as U}from"./workspaceStore.74d18b4d.js";import{b as A,r as T,c as x,d as W}from"./FormRunner.5b436c04.js";import{d as L,ed as V,eq as K,D as N,e as w,g as B,f as q,aK as M,W as j,ag as G,u as t,X as P,b as p,c as D,w as y,R as X,o as _,aF as R,db as $,d7 as z,df as H,$ as J}from"./vue-router.a3230213.js";import{a as O}from"./asyncComputed.d3cc635a.js";import{u as k}from"./uuid.82890f62.js";import{L as Q}from"./CircularLoading.7b40c5f4.js";import"./fetch.a1d9cb39.js";import"./metadata.180228af.js";import"./PhBug.vue.5b38b24b.js";import"./PhCheckCircle.vue.70797aab.js";import"./PhKanban.vue.43fd5e54.js";import"./PhWebhooksLogo.vue.b3336e8b.js";import"./url.8268e467.js";import"./colorHelpers.bcee64f0.js";import"./Login.vue_vue_type_script_setup_true_lang.127a4365.js";import"./Logo.2dd1cdc1.js";import"./index.ca10e61e.js";import"./Steps.14e700c1.js";import"./Watermark.f16424b2.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="bafa0d4e-d039-4f76-8a8a-a2a1a5ab983d",l._sentryDebugIdIdentifier="sentry-dbid-bafa0d4e-d039-4f76-8a8a-a2a1a5ab983d")}catch{}})();const Y={key:0,class:"loading"},Z=L({__name:"Form",setup(l){const o=V(),d=K(),h=N({playerKey:k()}),E=I(),u=w(null),v=w(!1);B(o,()=>{o.name==="form"&&C()});const{loading:m,result:a,error:g,refetch:C}=O(async()=>{h.playerKey=k();const r=o.path.slice(1),e=await U(r);if(!e){d.push({name:"error",params:{status:"404"}});return}const n=o.query[S];if(!e.isInitial&&!n){v.value=!0;return}const s=new x({formRunnerData:e,logService:null,connectionManager:new W(e.id,"player",o.query),onRedirect:b,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:c=>u.value=c}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),F=q(()=>{const r=!m,e=!!g,n=!a||u.value===null;return r&&(e||n)});M(()=>{var r,e,n,s,i;F.value&&d.push({name:"error",params:{status:"500"}}),!!((r=a.value)!=null&&r.runnerData)&&(e=a.value)!=null&&e.runnerData&&(document.title=(i=(n=a.value)==null?void 0:n.runnerData.welcomeTitle)!=null?i:(s=a.value)==null?void 0:s.runnerData.title)});function b(r,e){window.removeEventListener("beforeunload",f),T("player",d,r,e)}j(async()=>{window.addEventListener("beforeunload",f)}),G(()=>{window.removeEventListener("beforeunload",f)});const f=r=>{var e;if((e=a.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var n,s,i,c;return t(m)?(_(),P("div",Y,[p(Q)])):v.value?(_(),D(t(H),{key:1,class:"unset-thread-container",vertical:""},{default:y(()=>[p(t($),null,{default:y(()=>[R("Cannot open this link directly")]),_:1}),p(t(z),{class:"message"},{default:y(()=>[R(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(a)&&t(a).runnerData&&u.value&&!t(g)&&!t(m)?(_(),D(A,{key:h.playerKey,"form-runner-data":t(a).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(n=t(E).user)==null?void 0:n.claims.email,onRedirect:b,onActionClicked:(s=t(a))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(a))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(c=t(a))==null?void 0:c.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):X("",!0)}}});const be=J(Z,[["__scopeId","data-v-0e49e822"]]);export{be as default};
//# sourceMappingURL=Form.898a9ef3.js.map
