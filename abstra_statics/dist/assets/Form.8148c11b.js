import{b as D,i as E}from"./workspaceStore.bb0f51e5.js";import{a as C,r as S,c as k,d as R}from"./FormRunner.4a7551bc.js";import{d as F,ea as U,eo as A,E as I,e as L,g as W,f as V,aL as x,X as B,ah as K,u as o,o as y,Y as M,b as N,c as T,S as q,a0 as G}from"./index.7c703ad7.js";import{a as P}from"./asyncComputed.1ca3dd12.js";import{u as h}from"./uuid.144564cf.js";import{L as X}from"./CircularLoading.f65fdc69.js";import"./url.a7a2be43.js";import"./colorHelpers.ccf2ca8f.js";import"./Login.vue_vue_type_script_setup_true_lang.9c36e75a.js";import"./Logo.407eff79.js";import"./string.83779ab9.js";import"./index.0aabb3e3.js";import"./index.79a0c079.js";import"./Steps.701a9c10.js";import"./index.9c25c235.js";import"./Watermark.880d4a63.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[n]="9093e040-5ebe-47b0-a9a2-eb86a4604dd3",u._sentryDebugIdIdentifier="sentry-dbid-9093e040-5ebe-47b0-a9a2-eb86a4604dd3")}catch{}})();const Y={key:0,class:"loading"},j=F({__name:"Form",setup(u){const n=U(),d=A(),p=I({playerKey:h()}),g=D(),i=L(null);W(n,()=>{n.name==="form"&&b()});const{loading:c,result:t,error:f,refetch:b}=P(async()=>{p.playerKey=h();const r=n.path.slice(1),e=await E(r);if(!e){d.push({name:"error",params:{status:"404"}});return}const a=new k({formRunnerData:e,logService:null,connectionManager:new R(e.id,"player",n.query),onRedirect:_,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:l=>i.value=l}),s=a.getState();return i.value=s.formState,{runnerData:e,controller:a}}),w=V(()=>{const r=!c,e=!!f,a=!t||i.value===null;return r&&(e||a)});x(()=>{var r,e,a,s,l;w.value&&d.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(l=(a=t.value)==null?void 0:a.runnerData.welcomeTitle)!=null?l:(s=t.value)==null?void 0:s.runnerData.title)});function _(r,e){window.removeEventListener("beforeunload",m),S("player",d,r,e)}B(async()=>{window.addEventListener("beforeunload",m)}),K(()=>{window.removeEventListener("beforeunload",m)});const m=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var a,s,l,v;return o(c)?(y(),M("div",Y,[N(X)])):o(t)&&o(t).runnerData&&i.value&&!o(f)&&!o(c)?(y(),T(C,{key:p.playerKey,"form-runner-data":o(t).runnerData,"form-state":i.value,"is-preview":!1,"user-email":o(g).email,onRedirect:_,onActionClicked:(a=o(t))==null?void 0:a.controller.handleActionClick,onUpdateWidgetErrors:(s=o(t))==null?void 0:s.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(l=o(t))==null?void 0:l.controller.updateWidgetValue,onAuthComplete:(v=o(t))==null?void 0:v.controller.handleAuthComplete},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAuthComplete"])):q("",!0)}}});const ie=G(j,[["__scopeId","data-v-c3fd8bc9"]]);export{ie as default};
//# sourceMappingURL=Form.8148c11b.js.map
