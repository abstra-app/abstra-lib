import{b as D,i as E}from"./workspaceStore.0b37aac9.js";import{a as C,r as S,c as k,d as R}from"./FormRunner.379fb4e5.js";import{d as F,ea as U,eo as A,E as I,e as L,g as W,f as V,aL as x,X as B,ah as K,u as o,o as y,Y as M,b as N,c as T,S as q,a0 as G}from"./index.a6a7b83e.js";import{a as P}from"./asyncComputed.be98d509.js";import{u as h}from"./uuid.363d23cc.js";import{L as X}from"./CircularLoading.af202154.js";import"./url.078190f9.js";import"./colorHelpers.6b0b841e.js";import"./Login.vue_vue_type_script_setup_true_lang.a8964f62.js";import"./Logo.f0cf6930.js";import"./string.dca533ee.js";import"./index.99af64c5.js";import"./index.445f27e0.js";import"./Steps.aa1336c3.js";import"./index.412aab6e.js";import"./Watermark.6e526f3e.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[n]="9d477eb2-0b51-40ea-bc77-09deaa7656c8",u._sentryDebugIdIdentifier="sentry-dbid-9d477eb2-0b51-40ea-bc77-09deaa7656c8")}catch{}})();const Y={key:0,class:"loading"},j=F({__name:"Form",setup(u){const n=U(),c=A(),p=I({playerKey:h()}),g=D(),i=L(null);W(n,()=>{n.name==="form"&&b()});const{loading:d,result:t,error:f,refetch:b}=P(async()=>{p.playerKey=h();const r=n.path.slice(1),e=await E(r);if(!e){c.push({name:"error",params:{status:"404"}});return}const a=new k({formRunnerData:e,logService:null,connectionManager:new R(e.id,"player",n.query),onRedirect:_,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:l=>i.value=l}),s=a.getState();return i.value=s.formState,{runnerData:e,controller:a}}),w=V(()=>{const r=!d,e=!!f,a=!t||i.value===null;return r&&(e||a)});x(()=>{var r,e,a,s,l;w.value&&c.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(l=(a=t.value)==null?void 0:a.runnerData.welcomeTitle)!=null?l:(s=t.value)==null?void 0:s.runnerData.title)});function _(r,e){window.removeEventListener("beforeunload",m),S("player",c,r,e)}B(async()=>{window.addEventListener("beforeunload",m)}),K(()=>{window.removeEventListener("beforeunload",m)});const m=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var a,s,l,v;return o(d)?(y(),M("div",Y,[N(X)])):o(t)&&o(t).runnerData&&i.value&&!o(f)&&!o(d)?(y(),T(C,{key:p.playerKey,"form-runner-data":o(t).runnerData,"form-state":i.value,"is-preview":!1,"user-email":o(g).email,onRedirect:_,onActionClicked:(a=o(t))==null?void 0:a.controller.handleActionClick,onUpdateWidgetErrors:(s=o(t))==null?void 0:s.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(l=o(t))==null?void 0:l.controller.updateWidgetValue,onAuthComplete:(v=o(t))==null?void 0:v.controller.handleAuthComplete},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAuthComplete"])):q("",!0)}}});const ie=G(j,[["__scopeId","data-v-c3fd8bc9"]]);export{ie as default};
//# sourceMappingURL=Form.85842972.js.map
