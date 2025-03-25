import{b as D,i as E}from"./workspaceStore.e0adc4bc.js";import{a as C,r as S,c as k,d as R}from"./FormRunner.20278705.js";import{d as F,ea as U,eo as A,E as I,e as L,g as W,f as V,aL as x,X as B,ah as K,u as a,o as y,Y as M,b as N,c as T,S as q,a0 as G}from"./index.aae55199.js";import{a as P}from"./asyncComputed.134e912f.js";import{u as h}from"./uuid.edb398b2.js";import{L as X}from"./OTPInput.c196ca60.js";import"./url.8d81634b.js";import"./colorHelpers.f9f13f7e.js";import"./Login.vue_vue_type_script_setup_true_lang.68f98e09.js";import"./Logo.4470ab2c.js";import"./string.b2c7262c.js";import"./index.9a1c91be.js";import"./Steps.e2872eee.js";import"./index.3481b347.js";import"./Watermark.fe56a1ed.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[n]="40517155-2ae7-433d-aab9-bad7246015c2",u._sentryDebugIdIdentifier="sentry-dbid-40517155-2ae7-433d-aab9-bad7246015c2")}catch{}})();const Y={key:0,class:"loading"},j=F({__name:"Form",setup(u){const n=U(),c=A(),p=I({playerKey:h()}),g=D(),i=L(null);W(n,()=>{n.name==="form"&&b()});const{loading:d,result:t,error:f,refetch:b}=P(async()=>{p.playerKey=h();const r=n.path.slice(1),e=await E(r);if(!e){c.push({name:"error",params:{status:"404"}});return}const o=new k({formRunnerData:e,logService:null,connectionManager:new R(e.id,"player",n.query),onRedirect:_,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:l=>i.value=l}),s=o.getState();return i.value=s.formState,{runnerData:e,controller:o}}),w=V(()=>{const r=!d,e=!!f,o=!t||i.value===null;return r&&(e||o)});x(()=>{var r,e,o,s,l;w.value&&c.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(l=(o=t.value)==null?void 0:o.runnerData.welcomeTitle)!=null?l:(s=t.value)==null?void 0:s.runnerData.title)});function _(r,e){window.removeEventListener("beforeunload",m),S("player",c,r,e)}B(async()=>{window.addEventListener("beforeunload",m)}),K(()=>{window.removeEventListener("beforeunload",m)});const m=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var o,s,l,v;return a(d)?(y(),M("div",Y,[N(X)])):a(t)&&a(t).runnerData&&i.value&&!a(f)&&!a(d)?(y(),T(C,{key:p.playerKey,"form-runner-data":a(t).runnerData,"form-state":i.value,"is-preview":!1,"user-email":a(g).email,onRedirect:_,onActionClicked:(o=a(t))==null?void 0:o.controller.handleActionClick,onUpdateWidgetErrors:(s=a(t))==null?void 0:s.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(l=a(t))==null?void 0:l.controller.updateWidgetValue,onAuthComplete:(v=a(t))==null?void 0:v.controller.handleAuthComplete},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAuthComplete"])):q("",!0)}}});const ue=G(j,[["__scopeId","data-v-c3fd8bc9"]]);export{ue as default};
//# sourceMappingURL=Form.36227f9d.js.map
