import{b as D,i as E}from"./workspaceStore.1193ce80.js";import{a as C,r as S,c as k,d as R}from"./FormRunner.a901c996.js";import{d as F,ea as U,eo as A,E as I,e as L,g as W,f as V,aL as x,X as B,ah as K,u as a,o as y,Y as M,b as N,c as T,S as q,a0 as G}from"./index.2124e459.js";import{a as P}from"./asyncComputed.abd72052.js";import{u as h}from"./uuid.c522a11a.js";import{L as X}from"./CircularLoading.adf641b1.js";import"./url.f69aa6a3.js";import"./colorHelpers.6986d5a5.js";import"./Login.vue_vue_type_script_setup_true_lang.e6e09c4e.js";import"./Logo.9a25540a.js";import"./string.0a5e8599.js";import"./index.997dbb3b.js";import"./Steps.bc70cbcd.js";import"./index.54f53af1.js";import"./Watermark.5bd76686.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[n]="5047a4cd-c642-4d1a-b08d-9dad59b857ae",l._sentryDebugIdIdentifier="sentry-dbid-5047a4cd-c642-4d1a-b08d-9dad59b857ae")}catch{}})();const Y={key:0,class:"loading"},j=F({__name:"Form",setup(l){const n=U(),c=A(),p=I({playerKey:h()}),g=D(),u=L(null);W(n,()=>{n.name==="form"&&b()});const{loading:i,result:t,error:f,refetch:b}=P(async()=>{p.playerKey=h();const r=n.path.slice(1),e=await E(r);if(!e){c.push({name:"error",params:{status:"404"}});return}const o=new k({formRunnerData:e,logService:null,connectionManager:new R(e.id,"player",n.query),onRedirect:_,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:d=>u.value=d}),s=o.getState();return u.value=s.formState,{runnerData:e,controller:o}}),w=V(()=>{const r=!i,e=!!f,o=!t||u.value===null;return r&&(e||o)});x(()=>{var r,e,o,s,d;w.value&&c.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(d=(o=t.value)==null?void 0:o.runnerData.welcomeTitle)!=null?d:(s=t.value)==null?void 0:s.runnerData.title)});function _(r,e){window.removeEventListener("beforeunload",m),S("player",c,r,e)}B(async()=>{window.addEventListener("beforeunload",m)}),K(()=>{window.removeEventListener("beforeunload",m)});const m=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var o,s,d,v;return a(i)?(y(),M("div",Y,[N(X)])):a(t)&&a(t).runnerData&&u.value&&!a(f)&&!a(i)?(y(),T(C,{key:p.playerKey,"form-runner-data":a(t).runnerData,"form-state":u.value,"is-preview":!1,"user-email":a(g).email,onRedirect:_,onActionClicked:(o=a(t))==null?void 0:o.controller.handleActionClick,onUpdateWidgetErrors:(s=a(t))==null?void 0:s.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(d=a(t))==null?void 0:d.controller.updateWidgetValue,onAuthComplete:(v=a(t))==null?void 0:v.controller.handleAuthComplete},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAuthComplete"])):q("",!0)}}});const le=G(j,[["__scopeId","data-v-c3fd8bc9"]]);export{le as default};
//# sourceMappingURL=Form.fa5d76aa.js.map
