import{u as A}from"./router.5373f0a9.js";import{b as F,r as I,c as U,d as x}from"./FormRunner.3929b48d.js";import{A as T}from"./api.5c87ab77.js";import{d as W,eB as B,eN as L,D as V,e as w,g as N,f as K,aC as M,V as q,a7 as G,u as t,W as P,b as f,c as k,w as p,R as $,o as _,ax as D,cW as j,cS as z,c_ as H,$ as J}from"./vue-router.a1ae2b4d.js";import{a as O}from"./asyncComputed.942ccb8e.js";import{u as R}from"./uuid.c03b9f5a.js";import{L as Q}from"./CircularLoading.7ba9de7b.js";import{f as X}from"./api.90c1c252.js";import"./url.bc94821b.js";import"./Login.vue_vue_type_script_setup_true_lang.5294458c.js";import"./index.b5d5f891.js";import"./WidgetsFrame.4d0eef2d.js";import"./Steps.2ca47edf.js";import"./Watermark.cdf4d9ad.js";import"./Card.88ceef61.js";import"./TabPane.b77050e3.js";import"./fetch.2190d3cc.js";import"./metadata.d16eb83d.js";import"./PhCheckCircle.vue.faef06e7.js";import"./PhKanban.vue.56a15fd7.js";import"./PhWebhooksLogo.vue.dd3d3279.js";import"./runnerData.d3f917e5.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[n]="39d80aee-d84f-48b0-a30c-2ab5aab3f310",l._sentryDebugIdIdentifier="sentry-dbid-39d80aee-d84f-48b0-a30c-2ab5aab3f310")}catch{}})();const Y={key:0,class:"loading"},Z=W({__name:"Form",setup(l){const n=B(),c=L(),h=V({playerKey:R()}),C=A(),u=w(null),y=w(!1);N(n,()=>{n.name==="form"&&E()});const{loading:m,result:r,error:v,refetch:E}=O(async()=>{h.playerKey=R();const a=n.path.slice(1),e=await X(a);if(!e){c.push({name:"error",params:{status:"404"}});return}const o=n.query[T];if(!e.isInitial&&!o){y.value=!0;return}const s=new U({formRunnerData:e,logService:null,connectionManager:new x(e.id,"player",n.query),onRedirect:g,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:d=>u.value=d}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),S=K(()=>{const a=!m,e=!!v,o=!r||u.value===null;return a&&(e||o)});M(()=>{var a,e,o,s,i;S.value&&c.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(o=r.value)==null?void 0:o.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function g(a,e){I("player",c,a,e)}q(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",b)}),G(()=>{window.removeEventListener("beforeunload",b)});const b=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var o,s,i,d;return t(m)?(_(),P("div",Y,[f(Q)])):y.value?(_(),k(t(H),{key:1,class:"unset-thread-container",vertical:""},{default:p(()=>[f(t(j),null,{default:p(()=>[D("Cannot open this link directly")]),_:1}),f(t(z),{class:"message"},{default:p(()=>[D(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&u.value&&!t(v)&&!t(m)?(_(),k(F,{key:h.playerKey,"form-runner-data":t(r).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(o=t(C).user)==null?void 0:o.claims.email,onRedirect:g,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=t(r))==null?void 0:d.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):$("",!0)}}});const ke=J(Z,[["__scopeId","data-v-038b8619"]]);export{ke as default};
//# sourceMappingURL=Form.5de84cf4.js.map
