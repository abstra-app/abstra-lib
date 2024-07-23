import{u as A}from"./router.ea67fb87.js";import{b as F,r as I,c as U,d as x}from"./FormRunner.adfcbf94.js";import{A as T}from"./api.a72b0438.js";import{d as W,eB as B,eN as L,D as V,e as w,g as N,f as K,aC as M,V as q,a7 as G,u as t,o as f,W as P,b as p,c as k,w as _,R as $,ax as D,cW as j,cS as z,c_ as H,$ as J}from"./vue-router.1fa35404.js";import{a as O}from"./asyncComputed.8db624a6.js";import{u as R}from"./uuid.c14d271a.js";import{L as Q}from"./CircularLoading.a7a7261c.js";import{f as X}from"./api.9d0c1b2a.js";import"./url.3c9d9694.js";import"./Login.vue_vue_type_script_setup_true_lang.3317d28b.js";import"./index.46b55d16.js";import"./WidgetsFrame.ec702b65.js";import"./Steps.c8ab87cb.js";import"./Watermark.d0c840a8.js";import"./Card.16919718.js";import"./TabPane.01c8da03.js";import"./fetch.7ea36cf9.js";import"./metadata.f41ad8ee.js";import"./PhCheckCircle.vue.e1291a34.js";import"./PhKanban.vue.a0dcb41e.js";import"./PhWebhooksLogo.vue.a1f8bc14.js";import"./runnerData.ced7c9eb.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[n]="c270cda5-d601-4437-9efb-12f83d8b1243",l._sentryDebugIdIdentifier="sentry-dbid-c270cda5-d601-4437-9efb-12f83d8b1243")}catch{}})();const Y={key:0,class:"loading"},Z=W({__name:"Form",setup(l){const n=B(),c=L(),h=V({playerKey:R()}),C=A(),u=w(null),y=w(!1);N(n,()=>{n.name==="form"&&E()});const{loading:m,result:r,error:v,refetch:E}=O(async()=>{h.playerKey=R();const a=n.path.slice(1),e=await X(a);if(!e){c.push({name:"error",params:{status:"404"}});return}const o=n.query[T];if(!e.isInitial&&!o){y.value=!0;return}const s=new U({formRunnerData:e,logService:null,connectionManager:new x(e.id,"player",n.query),onRedirect:g,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:d=>u.value=d}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),S=K(()=>{const a=!m,e=!!v,o=!r||u.value===null;return a&&(e||o)});M(()=>{var a,e,o,s,i;S.value&&c.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(o=r.value)==null?void 0:o.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function g(a,e){I("player",c,a,e)}q(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",b)}),G(()=>{window.removeEventListener("beforeunload",b)});const b=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var o,s,i,d;return t(m)?(f(),P("div",Y,[p(Q)])):y.value?(f(),k(t(H),{key:1,class:"unset-thread-container",vertical:""},{default:_(()=>[p(t(j),null,{default:_(()=>[D("Cannot open this link directly")]),_:1}),p(t(z),{class:"message"},{default:_(()=>[D(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&u.value&&!t(v)&&!t(m)?(f(),k(F,{key:h.playerKey,"form-runner-data":t(r).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(o=t(C).user)==null?void 0:o.claims.email,onRedirect:g,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=t(r))==null?void 0:d.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):$("",!0)}}});const ke=J(Z,[["__scopeId","data-v-038b8619"]]);export{ke as default};
//# sourceMappingURL=Form.9216b734.js.map
