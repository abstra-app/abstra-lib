import{b as D,i as E}from"./workspaceStore.ae7c246d.js";import{a as C,r as S,c as k,d as R}from"./FormRunner.b442d338.js";import{d as F,ea as U,eo as A,E as I,e as L,g as W,f as V,aL as x,X as B,ah as K,u as o,o as y,Y as M,b as N,c as T,S as q,a0 as G}from"./index.27bc5f51.js";import{a as P}from"./asyncComputed.c32bac68.js";import{u as b}from"./uuid.fa2c7ab9.js";import{L as X}from"./OTPInput.583be3c1.js";import"./url.ffe10626.js";import"./colorHelpers.6857de5d.js";import"./Login.vue_vue_type_script_setup_true_lang.097dd932.js";import"./Logo.d5a4382c.js";import"./string.85f5394e.js";import"./index.64dab59c.js";import"./Steps.03394075.js";import"./index.f09c505e.js";import"./Watermark.b772e033.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[n]="deb83fa1-d85b-4805-a85b-0cdb8e7ab069",u._sentryDebugIdIdentifier="sentry-dbid-deb83fa1-d85b-4805-a85b-0cdb8e7ab069")}catch{}})();const Y={key:0,class:"loading"},j=F({__name:"Form",setup(u){const n=U(),i=A(),p=I({playerKey:b()}),h=D(),d=L(null);W(n,()=>{n.name==="form"&&g()});const{loading:c,result:t,error:f,refetch:g}=P(async()=>{p.playerKey=b();const r=n.path.slice(1),e=await E(r);if(!e){i.push({name:"error",params:{status:"404"}});return}const a=new k({formRunnerData:e,logService:null,connectionManager:new R(e.id,"player",n.query),onRedirect:_,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:l=>d.value=l}),s=a.getState();return d.value=s.formState,{runnerData:e,controller:a}}),w=V(()=>{const r=!c,e=!!f,a=!t||d.value===null;return r&&(e||a)});x(()=>{var r,e,a,s,l;w.value&&i.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(l=(a=t.value)==null?void 0:a.runnerData.welcomeTitle)!=null?l:(s=t.value)==null?void 0:s.runnerData.title)});function _(r,e){window.removeEventListener("beforeunload",m),S("player",i,r,e)}B(async()=>{window.addEventListener("beforeunload",m)}),K(()=>{window.removeEventListener("beforeunload",m)});const m=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var a,s,l,v;return o(c)?(y(),M("div",Y,[N(X)])):o(t)&&o(t).runnerData&&d.value&&!o(f)&&!o(c)?(y(),T(C,{key:p.playerKey,"form-runner-data":o(t).runnerData,"form-state":d.value,"is-preview":!1,"user-email":o(h).email,onRedirect:_,onActionClicked:(a=o(t))==null?void 0:a.controller.handleActionClick,onUpdateWidgetErrors:(s=o(t))==null?void 0:s.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(l=o(t))==null?void 0:l.controller.updateWidgetValue,onAuthComplete:(v=o(t))==null?void 0:v.controller.handleAuthComplete},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAuthComplete"])):q("",!0)}}});const ue=G(j,[["__scopeId","data-v-c3fd8bc9"]]);export{ue as default};
//# sourceMappingURL=Form.d1386f4b.js.map
