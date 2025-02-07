import{b as D,i as E}from"./workspaceStore.37fc691c.js";import{a as C,r as S,c as k,d as R}from"./FormRunner.4c463bc7.js";import{d as F,ea as U,eo as A,E as I,e as L,g as W,f as V,aL as x,X as B,ah as K,u as o,o as y,Y as M,b as N,c as T,S as q,a0 as G}from"./index.5ea97cf1.js";import{a as P}from"./asyncComputed.d0c00c96.js";import{u as h}from"./uuid.10c2f46d.js";import{L as X}from"./CircularLoading.f56cd731.js";import"./url.68c2ef84.js";import"./colorHelpers.9bfe96cd.js";import"./Login.vue_vue_type_script_setup_true_lang.ad7989f8.js";import"./Logo.309ea5a3.js";import"./string.d30549f8.js";import"./index.5b98948d.js";import"./index.2745fa52.js";import"./Steps.e3c3e6bb.js";import"./index.ee990518.js";import"./Watermark.d795afa6.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[a]="52811df5-21b3-4b55-80a1-0a8b7eed54b6",u._sentryDebugIdIdentifier="sentry-dbid-52811df5-21b3-4b55-80a1-0a8b7eed54b6")}catch{}})();const Y={key:0,class:"loading"},j=F({__name:"Form",setup(u){const a=U(),d=A(),p=I({playerKey:h()}),b=D(),i=L(null);W(a,()=>{a.name==="form"&&g()});const{loading:c,result:t,error:f,refetch:g}=P(async()=>{p.playerKey=h();const r=a.path.slice(1),e=await E(r);if(!e){d.push({name:"error",params:{status:"404"}});return}const n=new k({formRunnerData:e,logService:null,connectionManager:new R(e.id,"player",a.query),onRedirect:_,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:l=>i.value=l}),s=n.getState();return i.value=s.formState,{runnerData:e,controller:n}}),w=V(()=>{const r=!c,e=!!f,n=!t||i.value===null;return r&&(e||n)});x(()=>{var r,e,n,s,l;w.value&&d.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(l=(n=t.value)==null?void 0:n.runnerData.welcomeTitle)!=null?l:(s=t.value)==null?void 0:s.runnerData.title)});function _(r,e){window.removeEventListener("beforeunload",m),S("player",d,r,e)}B(async()=>{window.addEventListener("beforeunload",m)}),K(()=>{window.removeEventListener("beforeunload",m)});const m=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var n,s,l,v;return o(c)?(y(),M("div",Y,[N(X)])):o(t)&&o(t).runnerData&&i.value&&!o(f)&&!o(c)?(y(),T(C,{key:p.playerKey,"form-runner-data":o(t).runnerData,"form-state":i.value,"is-preview":!1,"user-email":o(b).email,onRedirect:_,onActionClicked:(n=o(t))==null?void 0:n.controller.handleActionClick,onUpdateWidgetErrors:(s=o(t))==null?void 0:s.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(l=o(t))==null?void 0:l.controller.updateWidgetValue,onAuthComplete:(v=o(t))==null?void 0:v.controller.handleAuthComplete},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAuthComplete"])):q("",!0)}}});const ie=G(j,[["__scopeId","data-v-c3fd8bc9"]]);export{ie as default};
//# sourceMappingURL=Form.ee8e41c3.js.map
