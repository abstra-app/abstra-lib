import{u as U}from"./router.1e15253c.js";import{b as F,r as I,c as A,d as x}from"./FormRunner.9ef243e9.js";import{A as T}from"./api.0bfd3d27.js";import{d as V,eu as W,eH as L,D as N,e as b,g as B,f as K,aC as M,V as q,a7 as G,u as t,W as H,b as f,c as D,w as y,R as P,o as _,ax as R,cY as Y,cU as $,d0 as j,$ as z}from"./vue-router.a1ff9813.js";import{a as J}from"./asyncComputed.a37ec0d2.js";import{u as k}from"./uuid.6d82a293.js";import{L as O}from"./CircularLoading.356eb4b7.js";import{f as Q}from"./api.598a8b3f.js";import"./url.f7fc4403.js";import"./Login.vue_vue_type_script_setup_true_lang.b7be8a39.js";import"./index.eee0ee5e.js";import"./WidgetsFrame.a2bc52e7.js";import"./Steps.25017d15.js";import"./Watermark.94a33225.js";import"./Card.04c2bcf6.js";import"./TabPane.b6f6963e.js";import"./fetch.35de4aff.js";import"./metadata.69704407.js";import"./PhBug.vue.9412b3e7.js";import"./PhCheckCircle.vue.ff074d17.js";import"./PhKanban.vue.20811d63.js";import"./PhWebhooksLogo.vue.1cca651c.js";import"./runnerData.d267cfd6.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="64617a41-d2cd-424e-8d43-665ca6764e3a",l._sentryDebugIdIdentifier="sentry-dbid-64617a41-d2cd-424e-8d43-665ca6764e3a")}catch{}})();const X={key:0,class:"loading"},Z=V({__name:"Form",setup(l){const o=W(),c=L(),h=N({playerKey:k()}),E=U(),u=b(null),v=b(!1);B(o,()=>{o.name==="form"&&C()});const{loading:m,result:r,error:g,refetch:C}=J(async()=>{h.playerKey=k();const a=o.path.slice(1),e=await Q(a);if(!e){c.push({name:"error",params:{status:"404"}});return}const n=o.query[T];if(!e.isInitial&&!n){v.value=!0;return}const s=new A({formRunnerData:e,logService:null,connectionManager:new x(e.id,"player",o.query),onRedirect:w,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:d=>u.value=d}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),S=K(()=>{const a=!m,e=!!g,n=!r||u.value===null;return a&&(e||n)});M(()=>{var a,e,n,s,i;S.value&&c.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(n=r.value)==null?void 0:n.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function w(a,e){window.removeEventListener("beforeunload",p),I("player",c,a,e)}q(async()=>{window.addEventListener("beforeunload",p)}),G(()=>{window.removeEventListener("beforeunload",p)});const p=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var n,s,i,d;return t(m)?(_(),H("div",X,[f(O)])):v.value?(_(),D(t(j),{key:1,class:"unset-thread-container",vertical:""},{default:y(()=>[f(t(Y),null,{default:y(()=>[R("Cannot open this link directly")]),_:1}),f(t($),{class:"message"},{default:y(()=>[R(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&u.value&&!t(g)&&!t(m)?(_(),D(F,{key:h.playerKey,"form-runner-data":t(r).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(n=t(E).user)==null?void 0:n.claims.email,onRedirect:w,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=t(r))==null?void 0:d.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):P("",!0)}}});const Re=z(Z,[["__scopeId","data-v-d667e7b2"]]);export{Re as default};
//# sourceMappingURL=Form.baf0c56c.js.map
