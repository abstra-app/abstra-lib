import{b as D,i as E}from"./workspaceStore.910ae60c.js";import{a as C,r as S,c as k,d as R}from"./FormRunner.34d6afbe.js";import{d as F,ea as U,eo as A,E as I,e as L,g as W,f as V,aL as x,X as B,ah as K,u as o,o as y,Y as M,b as N,c as T,S as q,a0 as G}from"./index.b7706ac6.js";import{a as P}from"./asyncComputed.f8c01991.js";import{u as h}from"./uuid.cab6d1a8.js";import{L as X}from"./CircularLoading.9fc398e4.js";import"./url.f0146726.js";import"./colorHelpers.d89e7346.js";import"./Login.vue_vue_type_script_setup_true_lang.1ce8c796.js";import"./Logo.dd251528.js";import"./string.b1bfb0ea.js";import"./index.2ac0762a.js";import"./Steps.f424cbf7.js";import"./index.7a65fdfb.js";import"./Watermark.ea6304e9.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[a]="8ec4fd9f-bd71-4b86-ab63-80159728fd59",u._sentryDebugIdIdentifier="sentry-dbid-8ec4fd9f-bd71-4b86-ab63-80159728fd59")}catch{}})();const Y={key:0,class:"loading"},j=F({__name:"Form",setup(u){const a=U(),i=A(),f=I({playerKey:h()}),g=D(),d=L(null);W(a,()=>{a.name==="form"&&b()});const{loading:c,result:t,error:p,refetch:b}=P(async()=>{f.playerKey=h();const r=a.path.slice(1),e=await E(r);if(!e){i.push({name:"error",params:{status:"404"}});return}const n=new k({formRunnerData:e,logService:null,connectionManager:new R(e.id,"player",a.query),onRedirect:_,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:l=>d.value=l}),s=n.getState();return d.value=s.formState,{runnerData:e,controller:n}}),w=V(()=>{const r=!c,e=!!p,n=!t||d.value===null;return r&&(e||n)});x(()=>{var r,e,n,s,l;w.value&&i.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(l=(n=t.value)==null?void 0:n.runnerData.welcomeTitle)!=null?l:(s=t.value)==null?void 0:s.runnerData.title)});function _(r,e){window.removeEventListener("beforeunload",m),S("player",i,r,e)}B(async()=>{window.addEventListener("beforeunload",m)}),K(()=>{window.removeEventListener("beforeunload",m)});const m=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var n,s,l,v;return o(c)?(y(),M("div",Y,[N(X)])):o(t)&&o(t).runnerData&&d.value&&!o(p)&&!o(c)?(y(),T(C,{key:f.playerKey,"form-runner-data":o(t).runnerData,"form-state":d.value,"is-preview":!1,"user-email":o(g).email,onRedirect:_,onActionClicked:(n=o(t))==null?void 0:n.controller.handleActionClick,onUpdateWidgetErrors:(s=o(t))==null?void 0:s.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(l=o(t))==null?void 0:l.controller.updateWidgetValue,onAuthComplete:(v=o(t))==null?void 0:v.controller.handleAuthComplete},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAuthComplete"])):q("",!0)}}});const ue=G(j,[["__scopeId","data-v-c3fd8bc9"]]);export{ue as default};
//# sourceMappingURL=Form.18ad3786.js.map
