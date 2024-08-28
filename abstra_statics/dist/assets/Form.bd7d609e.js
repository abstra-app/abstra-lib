import{A as S}from"./api.0ca17a81.js";import{b as I,j as U}from"./workspaceStore.d43d105a.js";import{b as A,r as T,c as x,d as W}from"./FormRunner.442552da.js";import{d as L,ed as V,eq as K,D as N,e as w,g as B,f as q,aK as M,W as j,ag as G,u as t,X as P,b as p,c as D,w as y,R as X,o as _,aF as R,db as $,d7 as z,df as H,$ as J}from"./vue-router.e363248c.js";import{a as O}from"./asyncComputed.8e1f8284.js";import{u as k}from"./uuid.57ddad12.js";import{L as Q}from"./CircularLoading.bdd4ccb5.js";import"./fetch.7abbb878.js";import"./metadata.ca7788cc.js";import"./PhBug.vue.c2effc86.js";import"./PhCheckCircle.vue.4279348d.js";import"./PhKanban.vue.64b071aa.js";import"./PhWebhooksLogo.vue.d8b847e1.js";import"./url.0bf83deb.js";import"./colorHelpers.6e51265b.js";import"./Login.vue_vue_type_script_setup_true_lang.a9f7ab8c.js";import"./index.1070e07d.js";import"./PhArrowClockwise.vue.973fcb06.js";import"./Steps.4d77c1cd.js";import"./Watermark.ef84b3b8.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="6c7e8ccf-a8a6-404e-919c-36afc4756541",l._sentryDebugIdIdentifier="sentry-dbid-6c7e8ccf-a8a6-404e-919c-36afc4756541")}catch{}})();const Y={key:0,class:"loading"},Z=L({__name:"Form",setup(l){const o=V(),u=K(),h=N({playerKey:k()}),E=I(),c=w(null),v=w(!1);B(o,()=>{o.name==="form"&&C()});const{loading:m,result:r,error:g,refetch:C}=O(async()=>{h.playerKey=k();const a=o.path.slice(1),e=await U(a);if(!e){u.push({name:"error",params:{status:"404"}});return}const n=o.query[S];if(!e.isInitial&&!n){v.value=!0;return}const s=new x({formRunnerData:e,logService:null,connectionManager:new W(e.id,"player",o.query),onRedirect:b,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:d=>c.value=d}),i=s.getState();return c.value=i.formState,{runnerData:e,controller:s}}),F=q(()=>{const a=!m,e=!!g,n=!r||c.value===null;return a&&(e||n)});M(()=>{var a,e,n,s,i;F.value&&u.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(n=r.value)==null?void 0:n.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function b(a,e){window.removeEventListener("beforeunload",f),T("player",u,a,e)}j(async()=>{window.addEventListener("beforeunload",f)}),G(()=>{window.removeEventListener("beforeunload",f)});const f=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var n,s,i,d;return t(m)?(_(),P("div",Y,[p(Q)])):v.value?(_(),D(t(H),{key:1,class:"unset-thread-container",vertical:""},{default:y(()=>[p(t($),null,{default:y(()=>[R("Cannot open this link directly")]),_:1}),p(t(z),{class:"message"},{default:y(()=>[R(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&c.value&&!t(g)&&!t(m)?(_(),D(A,{key:h.playerKey,"form-runner-data":t(r).runnerData,"form-state":c.value,"is-preview":!1,"user-email":(n=t(E).user)==null?void 0:n.claims.email,onRedirect:b,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=t(r))==null?void 0:d.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):X("",!0)}}});const be=J(Z,[["__scopeId","data-v-bd0f6275"]]);export{be as default};
//# sourceMappingURL=Form.bd7d609e.js.map
