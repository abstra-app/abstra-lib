import{b as D,i as E}from"./workspaceStore.38d723a3.js";import{a as C,r as S,c as k,d as R}from"./FormRunner.634cc4cc.js";import{d as F,ea as U,eo as A,E as I,e as L,g as W,f as V,aL as x,X as B,ah as K,u as o,o as y,Y as M,b as N,c as T,S as q,a0 as G}from"./index.b1912cd6.js";import{a as P}from"./asyncComputed.55706e46.js";import{u as h}from"./uuid.5eeab72a.js";import{L as X}from"./OTPInput.97458013.js";import"./url.98d5bbfc.js";import"./colorHelpers.4f5d4af1.js";import"./Login.vue_vue_type_script_setup_true_lang.2fc84e75.js";import"./Logo.f0fd9d2b.js";import"./string.b7533bb9.js";import"./index.8dc17d47.js";import"./Steps.a1936d75.js";import"./index.73bc3fce.js";import"./Watermark.05b9a431.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[a]="35d7f4ed-fe91-4ebc-8092-7108b9ec9e40",u._sentryDebugIdIdentifier="sentry-dbid-35d7f4ed-fe91-4ebc-8092-7108b9ec9e40")}catch{}})();const Y={key:0,class:"loading"},j=F({__name:"Form",setup(u){const a=U(),i=A(),f=I({playerKey:h()}),g=D(),c=L(null);W(a,()=>{a.name==="form"&&b()});const{loading:d,result:t,error:p,refetch:b}=P(async()=>{f.playerKey=h();const r=a.path.slice(1),e=await E(r);if(!e){i.push({name:"error",params:{status:"404"}});return}const n=new k({formRunnerData:e,logService:null,connectionManager:new R(e.id,"player",a.query),onRedirect:_,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:l=>c.value=l}),s=n.getState();return c.value=s.formState,{runnerData:e,controller:n}}),w=V(()=>{const r=!d,e=!!p,n=!t||c.value===null;return r&&(e||n)});x(()=>{var r,e,n,s,l;w.value&&i.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(l=(n=t.value)==null?void 0:n.runnerData.welcomeTitle)!=null?l:(s=t.value)==null?void 0:s.runnerData.title)});function _(r,e){window.removeEventListener("beforeunload",m),S("player",i,r,e)}B(async()=>{window.addEventListener("beforeunload",m)}),K(()=>{window.removeEventListener("beforeunload",m)});const m=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var n,s,l,v;return o(d)?(y(),M("div",Y,[N(X)])):o(t)&&o(t).runnerData&&c.value&&!o(p)&&!o(d)?(y(),T(C,{key:f.playerKey,"form-runner-data":o(t).runnerData,"form-state":c.value,"is-preview":!1,"user-email":o(g).email,onRedirect:_,onActionClicked:(n=o(t))==null?void 0:n.controller.handleActionClick,onUpdateWidgetErrors:(s=o(t))==null?void 0:s.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(l=o(t))==null?void 0:l.controller.updateWidgetValue,onAuthComplete:(v=o(t))==null?void 0:v.controller.handleAuthComplete},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAuthComplete"])):q("",!0)}}});const ue=G(j,[["__scopeId","data-v-c3fd8bc9"]]);export{ue as default};
//# sourceMappingURL=Form.c6309db7.js.map
