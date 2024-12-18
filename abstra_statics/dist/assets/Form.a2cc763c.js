import{b as D,i as E}from"./workspaceStore.385f5238.js";import{a as C,r as S,c as k,d as R}from"./FormRunner.aed8431f.js";import{d as F,ea as U,eo as A,E as I,e as L,g as W,f as V,aL as x,X as B,ah as K,u as o,o as y,Y as M,b as N,c as T,S as q,a0 as G}from"./index.7c49643a.js";import{a as P}from"./asyncComputed.2796248f.js";import{u as h}from"./uuid.8d039188.js";import{L as X}from"./CircularLoading.8337d13c.js";import"./url.e054570b.js";import"./colorHelpers.9a5b970d.js";import"./Login.vue_vue_type_script_setup_true_lang.5440a221.js";import"./Logo.ef9d963f.js";import"./string.c55e0779.js";import"./index.e91c4284.js";import"./index.2cb7e344.js";import"./Steps.75cf44f3.js";import"./index.88b8fa69.js";import"./Watermark.5dfee95d.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[a]="541cc8f6-d760-4e27-98aa-c4367655cfed",l._sentryDebugIdIdentifier="sentry-dbid-541cc8f6-d760-4e27-98aa-c4367655cfed")}catch{}})();const Y={key:0,class:"loading"},j=F({__name:"Form",setup(l){const a=U(),i=A(),f=I({playerKey:h()}),g=D(),u=L(null);W(a,()=>{a.name==="form"&&w()});const{loading:d,result:t,error:p,refetch:w}=P(async()=>{f.playerKey=h();const r=a.path.slice(1),e=await E(r);if(!e){i.push({name:"error",params:{status:"404"}});return}const n=new k({formRunnerData:e,logService:null,connectionManager:new R(e.id,"player",a.query),onRedirect:_,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:c=>u.value=c}),s=n.getState();return u.value=s.formState,{runnerData:e,controller:n}}),b=V(()=>{const r=!d,e=!!p,n=!t||u.value===null;return r&&(e||n)});x(()=>{var r,e,n,s,c;b.value&&i.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(c=(n=t.value)==null?void 0:n.runnerData.welcomeTitle)!=null?c:(s=t.value)==null?void 0:s.runnerData.title)});function _(r,e){window.removeEventListener("beforeunload",m),S("player",i,r,e)}B(async()=>{window.addEventListener("beforeunload",m)}),K(()=>{window.removeEventListener("beforeunload",m)});const m=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var n,s,c,v;return o(d)?(y(),M("div",Y,[N(X)])):o(t)&&o(t).runnerData&&u.value&&!o(p)&&!o(d)?(y(),T(C,{key:f.playerKey,"form-runner-data":o(t).runnerData,"form-state":u.value,"is-preview":!1,"user-email":o(g).email,onRedirect:_,onActionClicked:(n=o(t))==null?void 0:n.controller.handleActionClick,onUpdateWidgetErrors:(s=o(t))==null?void 0:s.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(c=o(t))==null?void 0:c.controller.updateWidgetValue,onAuthComplete:(v=o(t))==null?void 0:v.controller.handleAuthComplete},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAuthComplete"])):q("",!0)}}});const ue=G(j,[["__scopeId","data-v-c3fd8bc9"]]);export{ue as default};
//# sourceMappingURL=Form.a2cc763c.js.map
