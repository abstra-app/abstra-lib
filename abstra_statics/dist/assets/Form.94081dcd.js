import{A as S}from"./api.fff15498.js";import{b as I,j as U}from"./workspaceStore.dbfbf104.js";import{b as A,r as T,c as x,d as W}from"./FormRunner.85a220e9.js";import{d as L,ed as V,eq as K,D as N,e as b,g as B,f as q,aK as M,W as j,ag as G,u as t,X as P,b as f,c as D,w as y,R as X,o as _,aF as R,d9 as $,d5 as z,dd as H,$ as J}from"./vue-router.85c27f05.js";import{a as O}from"./asyncComputed.cef7b9d8.js";import{u as k}from"./uuid.23c0712d.js";import{L as Q}from"./CircularLoading.cd545ab6.js";import"./fetch.474b3c95.js";import"./metadata.a1d107ae.js";import"./PhBug.vue.cdc6f325.js";import"./PhCheckCircle.vue.d825c360.js";import"./PhKanban.vue.5d3ea6f3.js";import"./PhWebhooksLogo.vue.21427dd7.js";import"./url.2f0a55dd.js";import"./colorHelpers.569fabfb.js";import"./Login.vue_vue_type_script_setup_true_lang.3b405518.js";import"./Logo.c8f3b91c.js";import"./string.76b61cc9.js";import"./index.66331862.js";import"./Steps.dfd0e8f3.js";import"./index.fae0b3cc.js";import"./Watermark.0dfb10b7.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="c01c8e6d-d476-4095-8c80-bca580445302",l._sentryDebugIdIdentifier="sentry-dbid-c01c8e6d-d476-4095-8c80-bca580445302")}catch{}})();const Y={key:0,class:"loading"},Z=L({__name:"Form",setup(l){const o=V(),c=K(),h=N({playerKey:k()}),E=I(),u=b(null),v=b(!1);B(o,()=>{o.name==="form"&&C()});const{loading:m,result:r,error:g,refetch:C}=O(async()=>{h.playerKey=k();const a=o.path.slice(1),e=await U(a);if(!e){c.push({name:"error",params:{status:"404"}});return}const n=o.query[S];if(!e.isInitial&&!n){v.value=!0;return}const s=new x({formRunnerData:e,logService:null,connectionManager:new W(e.id,"player",o.query),onRedirect:w,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:d=>u.value=d}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),F=q(()=>{const a=!m,e=!!g,n=!r||u.value===null;return a&&(e||n)});M(()=>{var a,e,n,s,i;F.value&&c.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(n=r.value)==null?void 0:n.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function w(a,e){window.removeEventListener("beforeunload",p),T("player",c,a,e)}j(async()=>{window.addEventListener("beforeunload",p)}),G(()=>{window.removeEventListener("beforeunload",p)});const p=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var n,s,i,d;return t(m)?(_(),P("div",Y,[f(Q)])):v.value?(_(),D(t(H),{key:1,class:"unset-thread-container",vertical:""},{default:y(()=>[f(t($),null,{default:y(()=>[R("Cannot open this link directly")]),_:1}),f(t(z),{class:"message"},{default:y(()=>[R(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&u.value&&!t(g)&&!t(m)?(_(),D(A,{key:h.playerKey,"form-runner-data":t(r).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(n=t(E).user)==null?void 0:n.claims.email,onRedirect:w,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=t(r))==null?void 0:d.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):X("",!0)}}});const De=J(Z,[["__scopeId","data-v-0e49e822"]]);export{De as default};
//# sourceMappingURL=Form.94081dcd.js.map
