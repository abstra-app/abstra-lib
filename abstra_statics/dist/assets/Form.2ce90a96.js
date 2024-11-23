import{A as S}from"./api.c8e1878c.js";import{b as I,j as U}from"./workspaceStore.5ffc2e14.js";import{b as A,r as T,c as x,d as W}from"./FormRunner.e8aea344.js";import{d as L,ea as V,eo as K,D as N,e as w,g as B,f as M,aK as q,W as j,ag as G,u as t,o as f,X as P,b as y,c as D,w as _,R as X,aF as R,dc as $,d8 as z,dg as H,$ as J}from"./vue-router.c5c56f4e.js";import{a as O}from"./asyncComputed.717010b1.js";import{u as k}from"./uuid.961012cb.js";import{L as Q}from"./CircularLoading.61fcfb62.js";import"./fetch.f41c7d96.js";import"./metadata.c3ab8436.js";import"./PhBug.vue.eefb8478.js";import"./PhCheckCircle.vue.ab3ac8ff.js";import"./PhKanban.vue.301c2dc4.js";import"./PhWebhooksLogo.vue.a68fe8f9.js";import"./url.581d1091.js";import"./colorHelpers.f0502991.js";import"./Login.vue_vue_type_script_setup_true_lang.eac2385e.js";import"./Logo.e5cc2d92.js";import"./string.98000289.js";import"./index.28bf0a8f.js";import"./index.0f8e974e.js";import"./Steps.aca98f71.js";import"./index.8e3660e2.js";import"./Watermark.49f0f3bf.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="97567d3b-4934-4298-95ae-63aaa4fcfb90",l._sentryDebugIdIdentifier="sentry-dbid-97567d3b-4934-4298-95ae-63aaa4fcfb90")}catch{}})();const Y={key:0,class:"loading"},Z=L({__name:"Form",setup(l){const o=V(),c=K(),h=N({playerKey:k()}),E=I(),u=w(null),v=w(!1);B(o,()=>{o.name==="form"&&C()});const{loading:m,result:r,error:g,refetch:C}=O(async()=>{h.playerKey=k();const a=o.path.slice(1),e=await U(a);if(!e){c.push({name:"error",params:{status:"404"}});return}const n=o.query[S];if(!e.isInitial&&!n){v.value=!0;return}const s=new x({formRunnerData:e,logService:null,connectionManager:new W(e.id,"player",o.query),onRedirect:b,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:d=>u.value=d}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),F=M(()=>{const a=!m,e=!!g,n=!r||u.value===null;return a&&(e||n)});q(()=>{var a,e,n,s,i;F.value&&c.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(n=r.value)==null?void 0:n.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function b(a,e){window.removeEventListener("beforeunload",p),T("player",c,a,e)}j(async()=>{window.addEventListener("beforeunload",p)}),G(()=>{window.removeEventListener("beforeunload",p)});const p=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var n,s,i,d;return t(m)?(f(),P("div",Y,[y(Q)])):v.value?(f(),D(t(H),{key:1,class:"unset-thread-container",vertical:""},{default:_(()=>[y(t($),null,{default:_(()=>[R("Cannot open this link directly")]),_:1}),y(t(z),{class:"message"},{default:_(()=>[R(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&u.value&&!t(g)&&!t(m)?(f(),D(A,{key:h.playerKey,"form-runner-data":t(r).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(n=t(E).user)==null?void 0:n.claims.email,onRedirect:b,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=t(r))==null?void 0:d.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):X("",!0)}}});const Re=J(Z,[["__scopeId","data-v-22706e2c"]]);export{Re as default};
//# sourceMappingURL=Form.2ce90a96.js.map
