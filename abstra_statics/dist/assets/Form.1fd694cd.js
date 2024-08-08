import{u as U}from"./router.4e800ecb.js";import{b as F,r as I,c as A,d as x}from"./FormRunner.7c7b49d8.js";import{A as T}from"./api.fe471eef.js";import{d as V,eu as W,eH as L,D as N,e as w,g as B,f as K,aC as M,V as q,a7 as G,u as t,W as H,b as p,c as D,w as y,R as P,o as _,ax as R,cY as Y,cU as $,d0 as j,$ as z}from"./vue-router.33ac8cf0.js";import{a as J}from"./asyncComputed.9837140d.js";import{u as k}from"./uuid.5f70b278.js";import{L as O}from"./CircularLoading.b81f5bd0.js";import{f as Q}from"./api.9e154b60.js";import"./url.d6d42cf8.js";import"./Login.vue_vue_type_script_setup_true_lang.f0eb10e5.js";import"./index.fed9fe14.js";import"./WidgetsFrame.c1a5e0e5.js";import"./Steps.fab0fe43.js";import"./Watermark.49ed07d5.js";import"./Card.3815c904.js";import"./TabPane.3c2ae325.js";import"./fetch.fbcfc71d.js";import"./metadata.9e4f8380.js";import"./PhBug.vue.14c4ca47.js";import"./PhCheckCircle.vue.dd54e5f8.js";import"./PhKanban.vue.3f725030.js";import"./PhWebhooksLogo.vue.ecd2df5b.js";import"./runnerData.411ef4c2.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="64136be7-7bb0-4e00-95c7-39ff4f99e764",l._sentryDebugIdIdentifier="sentry-dbid-64136be7-7bb0-4e00-95c7-39ff4f99e764")}catch{}})();const X={key:0,class:"loading"},Z=V({__name:"Form",setup(l){const o=W(),c=L(),h=N({playerKey:k()}),E=U(),u=w(null),v=w(!1);B(o,()=>{o.name==="form"&&C()});const{loading:m,result:r,error:g,refetch:C}=J(async()=>{h.playerKey=k();const a=o.path.slice(1),e=await Q(a);if(!e){c.push({name:"error",params:{status:"404"}});return}const n=o.query[T];if(!e.isInitial&&!n){v.value=!0;return}const s=new A({formRunnerData:e,logService:null,connectionManager:new x(e.id,"player",o.query),onRedirect:b,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:d=>u.value=d}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),S=K(()=>{const a=!m,e=!!g,n=!r||u.value===null;return a&&(e||n)});M(()=>{var a,e,n,s,i;S.value&&c.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(n=r.value)==null?void 0:n.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function b(a,e){window.removeEventListener("beforeunload",f),I("player",c,a,e)}q(async()=>{window.addEventListener("beforeunload",f)}),G(()=>{window.removeEventListener("beforeunload",f)});const f=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var n,s,i,d;return t(m)?(_(),H("div",X,[p(O)])):v.value?(_(),D(t(j),{key:1,class:"unset-thread-container",vertical:""},{default:y(()=>[p(t(Y),null,{default:y(()=>[R("Cannot open this link directly")]),_:1}),p(t($),{class:"message"},{default:y(()=>[R(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&u.value&&!t(g)&&!t(m)?(_(),D(F,{key:h.playerKey,"form-runner-data":t(r).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(n=t(E).user)==null?void 0:n.claims.email,onRedirect:b,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=t(r))==null?void 0:d.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):P("",!0)}}});const Re=z(Z,[["__scopeId","data-v-d667e7b2"]]);export{Re as default};
//# sourceMappingURL=Form.1fd694cd.js.map
