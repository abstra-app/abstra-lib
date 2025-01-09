import{b as D,i as E}from"./workspaceStore.3f83c3b9.js";import{a as C,r as S,c as k,d as R}from"./FormRunner.f5adfe46.js";import{d as F,ea as U,eo as A,E as I,e as L,g as W,f as V,aL as x,X as B,ah as K,u as o,o as y,Y as M,b as N,c as T,S as q,a0 as G}from"./index.43e493da.js";import{a as P}from"./asyncComputed.7a3a32a5.js";import{u as h}from"./uuid.d83b493e.js";import{L as X}from"./CircularLoading.74e0e11a.js";import"./url.affe4585.js";import"./colorHelpers.2be5154c.js";import"./Login.vue_vue_type_script_setup_true_lang.ecd51124.js";import"./Logo.acb1b331.js";import"./string.93875efd.js";import"./index.9819b0ec.js";import"./index.7b829db3.js";import"./Steps.f6bde015.js";import"./index.6a3696c2.js";import"./Watermark.f766ebf2.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[a]="78712528-07df-4883-9b10-3e06de46a05f",u._sentryDebugIdIdentifier="sentry-dbid-78712528-07df-4883-9b10-3e06de46a05f")}catch{}})();const Y={key:0,class:"loading"},j=F({__name:"Form",setup(u){const a=U(),d=A(),f=I({playerKey:h()}),g=D(),i=L(null);W(a,()=>{a.name==="form"&&w()});const{loading:c,result:t,error:p,refetch:w}=P(async()=>{f.playerKey=h();const r=a.path.slice(1),e=await E(r);if(!e){d.push({name:"error",params:{status:"404"}});return}const n=new k({formRunnerData:e,logService:null,connectionManager:new R(e.id,"player",a.query),onRedirect:_,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:l=>i.value=l}),s=n.getState();return i.value=s.formState,{runnerData:e,controller:n}}),b=V(()=>{const r=!c,e=!!p,n=!t||i.value===null;return r&&(e||n)});x(()=>{var r,e,n,s,l;b.value&&d.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(l=(n=t.value)==null?void 0:n.runnerData.welcomeTitle)!=null?l:(s=t.value)==null?void 0:s.runnerData.title)});function _(r,e){window.removeEventListener("beforeunload",m),S("player",d,r,e)}B(async()=>{window.addEventListener("beforeunload",m)}),K(()=>{window.removeEventListener("beforeunload",m)});const m=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var n,s,l,v;return o(c)?(y(),M("div",Y,[N(X)])):o(t)&&o(t).runnerData&&i.value&&!o(p)&&!o(c)?(y(),T(C,{key:f.playerKey,"form-runner-data":o(t).runnerData,"form-state":i.value,"is-preview":!1,"user-email":o(g).email,onRedirect:_,onActionClicked:(n=o(t))==null?void 0:n.controller.handleActionClick,onUpdateWidgetErrors:(s=o(t))==null?void 0:s.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(l=o(t))==null?void 0:l.controller.updateWidgetValue,onAuthComplete:(v=o(t))==null?void 0:v.controller.handleAuthComplete},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAuthComplete"])):q("",!0)}}});const ie=G(j,[["__scopeId","data-v-c3fd8bc9"]]);export{ie as default};
//# sourceMappingURL=Form.b8dfcdb8.js.map
