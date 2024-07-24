import{u as A}from"./router.e1acddf1.js";import{b as F,r as I,c as U,d as x}from"./FormRunner.5c9c78d6.js";import{A as T}from"./api.8190808a.js";import{d as W,eB as B,eN as L,D as V,e as w,g as N,f as K,aC as M,V as q,a7 as G,u as t,W as P,b as m,c as k,w as p,R as $,o as _,ax as D,cW as j,cS as z,c_ as H,$ as J}from"./vue-router.e3a418ab.js";import{a as O}from"./asyncComputed.fdcbda70.js";import{u as R}from"./uuid.7554b00d.js";import{L as Q}from"./CircularLoading.c2c9eebd.js";import{f as X}from"./api.8b22322e.js";import"./url.fa4c0118.js";import"./Login.vue_vue_type_script_setup_true_lang.df1a89dc.js";import"./index.5e202806.js";import"./WidgetsFrame.37ffab17.js";import"./Steps.2e6933eb.js";import"./Watermark.fcb865fa.js";import"./Card.e12cbc19.js";import"./TabPane.9a9478f2.js";import"./fetch.350abaf1.js";import"./metadata.8841bff7.js";import"./PhCheckCircle.vue.f6244f8e.js";import"./PhKanban.vue.bb243b7d.js";import"./PhWebhooksLogo.vue.bef5575c.js";import"./runnerData.2330c51c.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[n]="5f5ddf30-6ee2-4aaa-a0f6-23fa90ffdab4",l._sentryDebugIdIdentifier="sentry-dbid-5f5ddf30-6ee2-4aaa-a0f6-23fa90ffdab4")}catch{}})();const Y={key:0,class:"loading"},Z=W({__name:"Form",setup(l){const n=B(),d=L(),h=V({playerKey:R()}),C=A(),u=w(null),y=w(!1);N(n,()=>{n.name==="form"&&E()});const{loading:f,result:r,error:v,refetch:E}=O(async()=>{h.playerKey=R();const a=n.path.slice(1),e=await X(a);if(!e){d.push({name:"error",params:{status:"404"}});return}const o=n.query[T];if(!e.isInitial&&!o){y.value=!0;return}const s=new U({formRunnerData:e,logService:null,connectionManager:new x(e.id,"player",n.query),onRedirect:g,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:c=>u.value=c}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),S=K(()=>{const a=!f,e=!!v,o=!r||u.value===null;return a&&(e||o)});M(()=>{var a,e,o,s,i;S.value&&d.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(o=r.value)==null?void 0:o.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function g(a,e){I("player",d,a,e)}q(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",b)}),G(()=>{window.removeEventListener("beforeunload",b)});const b=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var o,s,i,c;return t(f)?(_(),P("div",Y,[m(Q)])):y.value?(_(),k(t(H),{key:1,class:"unset-thread-container",vertical:""},{default:p(()=>[m(t(j),null,{default:p(()=>[D("Cannot open this link directly")]),_:1}),m(t(z),{class:"message"},{default:p(()=>[D(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&u.value&&!t(v)&&!t(f)?(_(),k(F,{key:h.playerKey,"form-runner-data":t(r).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(o=t(C).user)==null?void 0:o.claims.email,onRedirect:g,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(c=t(r))==null?void 0:c.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):$("",!0)}}});const ke=J(Z,[["__scopeId","data-v-038b8619"]]);export{ke as default};
//# sourceMappingURL=Form.6d240d07.js.map
