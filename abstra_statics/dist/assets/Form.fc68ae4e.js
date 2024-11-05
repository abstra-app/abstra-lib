import{A as S}from"./api.98c914bd.js";import{b as I,j as U}from"./workspaceStore.6f7aad79.js";import{b as A,r as T,c as x,d as W}from"./FormRunner.2403b690.js";import{d as L,ea as V,ep as K,D as N,e as b,g as B,f as M,aK as q,W as j,ag as G,u as t,o as f,X as P,b as y,c as D,w as _,R as X,aF as R,d9 as $,d5 as z,dd as H,$ as J}from"./vue-router.0ff92f83.js";import{a as O}from"./asyncComputed.7b6feed1.js";import{u as k}from"./uuid.5d1a1075.js";import{L as Q}from"./CircularLoading.37274031.js";import"./fetch.513a0cc9.js";import"./metadata.2e9fd898.js";import"./PhBug.vue.f3558171.js";import"./PhCheckCircle.vue.602e9239.js";import"./PhKanban.vue.b3a54bee.js";import"./PhWebhooksLogo.vue.3004d628.js";import"./url.30f3ec79.js";import"./colorHelpers.76515cb4.js";import"./Login.vue_vue_type_script_setup_true_lang.27cadbc3.js";import"./Logo.23e22d8e.js";import"./string.f0b23ae7.js";import"./index.114240b2.js";import"./Steps.6406bd8c.js";import"./index.9c80a11a.js";import"./Watermark.8e7e092e.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[o]="8971a769-2944-46fe-a7e8-a8266dc56189",l._sentryDebugIdIdentifier="sentry-dbid-8971a769-2944-46fe-a7e8-a8266dc56189")}catch{}})();const Y={key:0,class:"loading"},Z=L({__name:"Form",setup(l){const o=V(),d=K(),h=N({playerKey:k()}),E=I(),u=b(null),v=b(!1);B(o,()=>{o.name==="form"&&C()});const{loading:m,result:r,error:g,refetch:C}=O(async()=>{h.playerKey=k();const a=o.path.slice(1),e=await U(a);if(!e){d.push({name:"error",params:{status:"404"}});return}const n=o.query[S];if(!e.isInitial&&!n){v.value=!0;return}const s=new x({formRunnerData:e,logService:null,connectionManager:new W(e.id,"player",o.query),onRedirect:w,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:c=>u.value=c}),i=s.getState();return u.value=i.formState,{runnerData:e,controller:s}}),F=M(()=>{const a=!m,e=!!g,n=!r||u.value===null;return a&&(e||n)});q(()=>{var a,e,n,s,i;F.value&&d.push({name:"error",params:{status:"500"}}),!!((a=r.value)!=null&&a.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(i=(n=r.value)==null?void 0:n.runnerData.welcomeTitle)!=null?i:(s=r.value)==null?void 0:s.runnerData.title)});function w(a,e){window.removeEventListener("beforeunload",p),T("player",d,a,e)}j(async()=>{window.addEventListener("beforeunload",p)}),G(()=>{window.removeEventListener("beforeunload",p)});const p=a=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return a.preventDefault(),""};return(a,e)=>{var n,s,i,c;return t(m)?(f(),P("div",Y,[y(Q)])):v.value?(f(),D(t(H),{key:1,class:"unset-thread-container",vertical:""},{default:_(()=>[y(t($),null,{default:_(()=>[R("Cannot open this link directly")]),_:1}),y(t(z),{class:"message"},{default:_(()=>[R(" This form must be accessed within a thread, either by clicking on it by notification email or the Kanban board ")]),_:1})]),_:1})):t(r)&&t(r).runnerData&&u.value&&!t(g)&&!t(m)?(f(),D(A,{key:h.playerKey,"form-runner-data":t(r).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(n=t(E).user)==null?void 0:n.claims.email,onRedirect:w,onActionClicked:(s=t(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(i=t(r))==null?void 0:i.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(c=t(r))==null?void 0:c.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):X("",!0)}}});const De=J(Z,[["__scopeId","data-v-0e49e822"]]);export{De as default};
//# sourceMappingURL=Form.fc68ae4e.js.map
