import{b as D,i as E}from"./workspaceStore.7dd1a2ed.js";import{a as C,r as S,c as k,d as R}from"./FormRunner.6d0abb19.js";import{d as F,ef as U,eH as A,E as I,e as L,g as W,f as V,aL as x,X as B,ah as K,u as o,o as y,Y as M,b as N,c as T,S as q,a0 as G}from"./index.a2737cd4.js";import{a as H}from"./asyncComputed.8feee535.js";import{u as h}from"./uuid.14531530.js";import{L as P}from"./OTPInput.6b4b1368.js";import"./url.fc767289.js";import"./colorHelpers.d4c45902.js";import"./Login.vue_vue_type_script_setup_true_lang.e924df00.js";import"./Logo.f0f54262.js";import"./string.65ae7559.js";import"./index.a675dffd.js";import"./Steps.4f3f61ba.js";import"./index.1b932ee3.js";import"./Watermark.0b786650.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[a]="f56a0f57-ed53-4037-9ce5-f93b32fbcc8c",l._sentryDebugIdIdentifier="sentry-dbid-f56a0f57-ed53-4037-9ce5-f93b32fbcc8c")}catch{}})();const X={key:0,class:"loading"},Y=F({__name:"Form",setup(l){const a=U(),i=A(),f=I({playerKey:h()}),g=D(),u=L(null);W(a,()=>{a.name==="form"&&b()});const{loading:d,result:t,error:p,refetch:b}=H(async()=>{f.playerKey=h();const r=a.path.slice(1),e=await E(r);if(!e){i.push({name:"error",params:{status:"404"}});return}const n=new k({formRunnerData:e,logService:null,connectionManager:new R(e.id,"player",a.query),onRedirect:_,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:c=>u.value=c}),s=n.getState();return u.value=s.formState,{runnerData:e,controller:n}}),w=V(()=>{const r=!d,e=!!p,n=!t||u.value===null;return r&&(e||n)});x(()=>{var r,e,n,s,c;w.value&&i.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(c=(n=t.value)==null?void 0:n.runnerData.welcomeTitle)!=null?c:(s=t.value)==null?void 0:s.runnerData.title)});function _(r,e){window.removeEventListener("beforeunload",m),S("player",i,r,e)}B(async()=>{window.addEventListener("beforeunload",m)}),K(()=>{window.removeEventListener("beforeunload",m)});const m=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var n,s,c,v;return o(d)?(y(),M("div",X,[N(P)])):o(t)&&o(t).runnerData&&u.value&&!o(p)&&!o(d)?(y(),T(C,{key:f.playerKey,"form-runner-data":o(t).runnerData,"form-state":u.value,"is-preview":!1,"user-email":o(g).email,onRedirect:_,onActionClicked:(n=o(t))==null?void 0:n.controller.handleActionClick,onUpdateWidgetErrors:(s=o(t))==null?void 0:s.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(c=o(t))==null?void 0:c.controller.updateWidgetValue,onAuthComplete:(v=o(t))==null?void 0:v.controller.handleAuthComplete},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAuthComplete"])):q("",!0)}}});const le=G(Y,[["__scopeId","data-v-c3fd8bc9"]]);export{le as default};
//# sourceMappingURL=Form.e844dd67.js.map
