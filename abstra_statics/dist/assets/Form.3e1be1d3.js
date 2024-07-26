import{u as F}from"./router.08432de3.js";import{b as I,r as U,c as A,d as x}from"./FormRunner.418d3558.js";import{A as T}from"./api.1c2313c5.js";import{d as W,eB as V,eO as L,D as B,e as w,g as N,f as K,aC as M,V as q,a7 as G,u as t,W as O,b as p,c as D,w as _,R as P,o as y,ax as R,cW as $,cS as j,c_ as z,$ as H}from"./vue-router.78d58ff0.js";import{a as J}from"./asyncComputed.95993e52.js";import{u as k}from"./uuid.34b93336.js";import{L as Q}from"./CircularLoading.f8a423e1.js";import{f as X}from"./api.eee349cf.js";import"./url.f92f4d36.js";import"./Login.vue_vue_type_script_setup_true_lang.e76fb666.js";import"./index.aab54164.js";import"./WidgetsFrame.fcf54d4b.js";import"./Steps.9fbe8d52.js";import"./Watermark.e5cf2622.js";import"./Card.e6564a3e.js";import"./TabPane.e15de9cc.js";import"./fetch.6b493350.js";import"./metadata.5a21999c.js";import"./PhCheckCircle.vue.3b4eb234.js";import"./PhKanban.vue.78518561.js";import"./PhWebhooksLogo.vue.307cd289.js";import"./runnerData.d455da29.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="247ce02e-2741-48af-b900-598a72e8e733",l._sentryDebugIdIdentifier="sentry-dbid-247ce02e-2741-48af-b900-598a72e8e733")}catch{}})();const Y={key:0,class:"loading"},Z=W({__name:"Form",setup(l){const o=V(),c=L(),h=B({playerKey:k()}),E=F(),u=w(null),v=w(!1);N(o,()=>{o.name==="form"&&C()});const{loading:m,result:r,error:g,refetch:C}=J(async()=>{h.playerKey=k();const a=o.path.slice(1),e=await X(a);if(!e){c.push({name:"error",params:{status:"404"}});return}const n=o.query[T];if(!e.isInitial&&!n){v.value=!0;return}const s=new A({formRunnerData:e,logService:null,connectionManager:new x(e.id,"player",o.query),onRedirect:b,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:d=>u.value=d}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),S=K(()=>{const a=!m,e=!!g,n=!r||u.value===null;return a&&(e||n)});M(()=>{var a,e,n,s,i;S.value&&c.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(n=r.value)==null?void 0:n.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function b(a,e){window.removeEventListener("beforeunload",f),U("player",c,a,e)}q(async()=>{window.addEventListener("beforeunload",f)}),G(()=>{window.removeEventListener("beforeunload",f)});const f=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var n,s,i,d;return t(m)?(y(),O("div",Y,[p(Q)])):v.value?(y(),D(t(z),{key:1,class:"unset-thread-container",vertical:""},{default:_(()=>[p(t($),null,{default:_(()=>[R("Cannot open this link directly")]),_:1}),p(t(j),{class:"message"},{default:_(()=>[R(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&u.value&&!t(g)&&!t(m)?(y(),D(I,{key:h.playerKey,"form-runner-data":t(r).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(n=t(E).user)==null?void 0:n.claims.email,onRedirect:b,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=t(r))==null?void 0:d.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):P("",!0)}}});const De=H(Z,[["__scopeId","data-v-d667e7b2"]]);export{De as default};
//# sourceMappingURL=Form.3e1be1d3.js.map
