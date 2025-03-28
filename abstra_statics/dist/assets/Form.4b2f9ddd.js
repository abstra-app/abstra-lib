import{b as D,i as E}from"./workspaceStore.dd7b207f.js";import{a as C,r as S,c as k,d as R}from"./FormRunner.5126dd4f.js";import{d as F,ea as U,eo as A,E as I,e as L,g as W,f as V,aL as x,X as B,ah as K,u as o,o as y,Y as M,b as N,c as T,S as q,a0 as G}from"./index.07f9f4c4.js";import{a as P}from"./asyncComputed.c03dce3e.js";import{u as h}from"./uuid.4cb85baf.js";import{L as X}from"./OTPInput.c37ae044.js";import"./url.d4d00a32.js";import"./colorHelpers.e581006b.js";import"./Login.vue_vue_type_script_setup_true_lang.c84b2393.js";import"./Logo.dda0ebf1.js";import"./string.0108bd09.js";import"./index.5c7cdba3.js";import"./Steps.ef35594c.js";import"./index.45c250a2.js";import"./Watermark.3518d2b3.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[a]="b5a1e263-e8fc-4f8e-ade1-1376b23fee0e",u._sentryDebugIdIdentifier="sentry-dbid-b5a1e263-e8fc-4f8e-ade1-1376b23fee0e")}catch{}})();const Y={key:0,class:"loading"},j=F({__name:"Form",setup(u){const a=U(),c=A(),f=I({playerKey:h()}),g=D(),i=L(null);W(a,()=>{a.name==="form"&&b()});const{loading:d,result:t,error:p,refetch:b}=P(async()=>{f.playerKey=h();const r=a.path.slice(1),e=await E(r);if(!e){c.push({name:"error",params:{status:"404"}});return}const n=new k({formRunnerData:e,logService:null,connectionManager:new R(e.id,"player",a.query),onRedirect:_,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:l=>i.value=l}),s=n.getState();return i.value=s.formState,{runnerData:e,controller:n}}),w=V(()=>{const r=!d,e=!!p,n=!t||i.value===null;return r&&(e||n)});x(()=>{var r,e,n,s,l;w.value&&c.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(l=(n=t.value)==null?void 0:n.runnerData.welcomeTitle)!=null?l:(s=t.value)==null?void 0:s.runnerData.title)});function _(r,e){window.removeEventListener("beforeunload",m),S("player",c,r,e)}B(async()=>{window.addEventListener("beforeunload",m)}),K(()=>{window.removeEventListener("beforeunload",m)});const m=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var n,s,l,v;return o(d)?(y(),M("div",Y,[N(X)])):o(t)&&o(t).runnerData&&i.value&&!o(p)&&!o(d)?(y(),T(C,{key:f.playerKey,"form-runner-data":o(t).runnerData,"form-state":i.value,"is-preview":!1,"user-email":o(g).email,onRedirect:_,onActionClicked:(n=o(t))==null?void 0:n.controller.handleActionClick,onUpdateWidgetErrors:(s=o(t))==null?void 0:s.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(l=o(t))==null?void 0:l.controller.updateWidgetValue,onAuthComplete:(v=o(t))==null?void 0:v.controller.handleAuthComplete},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAuthComplete"])):q("",!0)}}});const ue=G(j,[["__scopeId","data-v-c3fd8bc9"]]);export{ue as default};
//# sourceMappingURL=Form.4b2f9ddd.js.map
