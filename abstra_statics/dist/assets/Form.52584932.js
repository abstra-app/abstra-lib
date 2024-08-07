import{u as U}from"./router.cbc2490c.js";import{b as F,r as I,c as A,d as x}from"./FormRunner.7bb1bd12.js";import{A as T}from"./api.a4d97af4.js";import{d as V,eu as W,eH as L,D as N,e as w,g as B,f as K,aC as M,V as q,a7 as G,u as t,W as H,b as f,c as D,w as y,R as P,o as _,ax as R,cY as Y,cU as $,d0 as j,$ as z}from"./vue-router.967882c8.js";import{a as J}from"./asyncComputed.4b2a24b4.js";import{u as k}from"./uuid.1bfc590a.js";import{L as O}from"./CircularLoading.ec82daf2.js";import{f as Q}from"./api.27083d64.js";import"./url.ca479924.js";import"./Login.vue_vue_type_script_setup_true_lang.b2778ea0.js";import"./index.1cdc6746.js";import"./WidgetsFrame.33fd0ac3.js";import"./Steps.4b202904.js";import"./Watermark.0a3671b2.js";import"./Card.3d0c01c8.js";import"./TabPane.4d5829b5.js";import"./fetch.06db5e77.js";import"./metadata.13347b41.js";import"./PhBug.vue.4ca22a33.js";import"./PhCheckCircle.vue.1735ba12.js";import"./PhKanban.vue.d200ad18.js";import"./PhWebhooksLogo.vue.31f69db8.js";import"./runnerData.6dfbb051.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="b1e34f46-0899-4875-b25e-da6d74689353",l._sentryDebugIdIdentifier="sentry-dbid-b1e34f46-0899-4875-b25e-da6d74689353")}catch{}})();const X={key:0,class:"loading"},Z=V({__name:"Form",setup(l){const o=W(),d=L(),h=N({playerKey:k()}),E=U(),u=w(null),v=w(!1);B(o,()=>{o.name==="form"&&C()});const{loading:m,result:r,error:g,refetch:C}=J(async()=>{h.playerKey=k();const a=o.path.slice(1),e=await Q(a);if(!e){d.push({name:"error",params:{status:"404"}});return}const n=o.query[T];if(!e.isInitial&&!n){v.value=!0;return}const s=new A({formRunnerData:e,logService:null,connectionManager:new x(e.id,"player",o.query),onRedirect:b,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:c=>u.value=c}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),S=K(()=>{const a=!m,e=!!g,n=!r||u.value===null;return a&&(e||n)});M(()=>{var a,e,n,s,i;S.value&&d.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(n=r.value)==null?void 0:n.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function b(a,e){window.removeEventListener("beforeunload",p),I("player",d,a,e)}q(async()=>{window.addEventListener("beforeunload",p)}),G(()=>{window.removeEventListener("beforeunload",p)});const p=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var n,s,i,c;return t(m)?(_(),H("div",X,[f(O)])):v.value?(_(),D(t(j),{key:1,class:"unset-thread-container",vertical:""},{default:y(()=>[f(t(Y),null,{default:y(()=>[R("Cannot open this link directly")]),_:1}),f(t($),{class:"message"},{default:y(()=>[R(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&u.value&&!t(g)&&!t(m)?(_(),D(F,{key:h.playerKey,"form-runner-data":t(r).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(n=t(E).user)==null?void 0:n.claims.email,onRedirect:b,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(c=t(r))==null?void 0:c.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):P("",!0)}}});const Re=z(Z,[["__scopeId","data-v-d667e7b2"]]);export{Re as default};
//# sourceMappingURL=Form.52584932.js.map
