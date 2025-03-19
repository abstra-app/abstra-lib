import{b as D,i as E}from"./workspaceStore.26e825e1.js";import{a as C,r as S,c as k,d as R}from"./FormRunner.c425b376.js";import{d as F,ea as U,eo as A,E as I,e as L,g as W,f as V,aL as x,X as B,ah as K,u as o,o as y,Y as M,b as N,c as T,S as q,a0 as G}from"./index.f34a21df.js";import{a as P}from"./asyncComputed.398aef1d.js";import{u as h}from"./uuid.da246deb.js";import{L as X}from"./OTPInput.e7a16c6b.js";import"./url.6d3c9ba6.js";import"./colorHelpers.2d661043.js";import"./Login.vue_vue_type_script_setup_true_lang.0e75553f.js";import"./Logo.06f9e686.js";import"./string.258cabc4.js";import"./index.1ed88b5f.js";import"./Steps.4f2e7132.js";import"./index.d4ca7d54.js";import"./Watermark.4216f337.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[a]="9cecb757-215f-4b64-af29-8b31f3f4779a",u._sentryDebugIdIdentifier="sentry-dbid-9cecb757-215f-4b64-af29-8b31f3f4779a")}catch{}})();const Y={key:0,class:"loading"},j=F({__name:"Form",setup(u){const a=U(),i=A(),f=I({playerKey:h()}),g=D(),c=L(null);W(a,()=>{a.name==="form"&&b()});const{loading:d,result:t,error:p,refetch:b}=P(async()=>{f.playerKey=h();const r=a.path.slice(1),e=await E(r);if(!e){i.push({name:"error",params:{status:"404"}});return}const n=new k({formRunnerData:e,logService:null,connectionManager:new R(e.id,"player",a.query),onRedirect:_,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:l=>c.value=l}),s=n.getState();return c.value=s.formState,{runnerData:e,controller:n}}),w=V(()=>{const r=!d,e=!!p,n=!t||c.value===null;return r&&(e||n)});x(()=>{var r,e,n,s,l;w.value&&i.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(l=(n=t.value)==null?void 0:n.runnerData.welcomeTitle)!=null?l:(s=t.value)==null?void 0:s.runnerData.title)});function _(r,e){window.removeEventListener("beforeunload",m),S("player",i,r,e)}B(async()=>{window.addEventListener("beforeunload",m)}),K(()=>{window.removeEventListener("beforeunload",m)});const m=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var n,s,l,v;return o(d)?(y(),M("div",Y,[N(X)])):o(t)&&o(t).runnerData&&c.value&&!o(p)&&!o(d)?(y(),T(C,{key:f.playerKey,"form-runner-data":o(t).runnerData,"form-state":c.value,"is-preview":!1,"user-email":o(g).email,onRedirect:_,onActionClicked:(n=o(t))==null?void 0:n.controller.handleActionClick,onUpdateWidgetErrors:(s=o(t))==null?void 0:s.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(l=o(t))==null?void 0:l.controller.updateWidgetValue,onAuthComplete:(v=o(t))==null?void 0:v.controller.handleAuthComplete},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAuthComplete"])):q("",!0)}}});const ue=G(j,[["__scopeId","data-v-c3fd8bc9"]]);export{ue as default};
//# sourceMappingURL=Form.b874480d.js.map
