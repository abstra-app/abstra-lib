import{b as D,i as E}from"./workspaceStore.63e90c7b.js";import{a as C,r as S,c as k,d as R}from"./FormRunner.8ab9ba05.js";import{d as F,ea as U,eo as A,E as I,e as L,g as W,f as V,aL as x,X as B,ah as K,u as o,o as y,Y as M,b as N,c as T,S as q,a0 as G}from"./index.0396e68e.js";import{a as P}from"./asyncComputed.fdf54570.js";import{u as h}from"./uuid.1da3d59d.js";import{L as X}from"./CircularLoading.11766de6.js";import"./url.892c62bd.js";import"./colorHelpers.1afbbca5.js";import"./Login.vue_vue_type_script_setup_true_lang.5433a29e.js";import"./Logo.008d40fa.js";import"./string.dc823a05.js";import"./index.cfde0a4b.js";import"./index.445b73ea.js";import"./Steps.52b2090d.js";import"./index.5b78f4f3.js";import"./Watermark.6291ef57.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[a]="dcd76a87-ebde-463f-a3ef-2c2c64044cc6",l._sentryDebugIdIdentifier="sentry-dbid-dcd76a87-ebde-463f-a3ef-2c2c64044cc6")}catch{}})();const Y={key:0,class:"loading"},j=F({__name:"Form",setup(l){const a=U(),i=A(),f=I({playerKey:h()}),g=D(),u=L(null);W(a,()=>{a.name==="form"&&w()});const{loading:d,result:t,error:p,refetch:w}=P(async()=>{f.playerKey=h();const r=a.path.slice(1),e=await E(r);if(!e){i.push({name:"error",params:{status:"404"}});return}const n=new k({formRunnerData:e,logService:null,connectionManager:new R(e.id,"player",a.query),onRedirect:_,onFormStart:()=>{},onFormEnd:()=>{},onStackTraceUpdate:null,onStateUpdate:c=>u.value=c}),s=n.getState();return u.value=s.formState,{runnerData:e,controller:n}}),b=V(()=>{const r=!d,e=!!p,n=!t||u.value===null;return r&&(e||n)});x(()=>{var r,e,n,s,c;b.value&&i.push({name:"error",params:{status:"500"}}),!!((r=t.value)!=null&&r.runnerData)&&(e=t.value)!=null&&e.runnerData&&(document.title=(c=(n=t.value)==null?void 0:n.runnerData.welcomeTitle)!=null?c:(s=t.value)==null?void 0:s.runnerData.title)});function _(r,e){window.removeEventListener("beforeunload",m),S("player",i,r,e)}B(async()=>{window.addEventListener("beforeunload",m)}),K(()=>{window.removeEventListener("beforeunload",m)});const m=r=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return r.preventDefault(),""};return(r,e)=>{var n,s,c,v;return o(d)?(y(),M("div",Y,[N(X)])):o(t)&&o(t).runnerData&&u.value&&!o(p)&&!o(d)?(y(),T(C,{key:f.playerKey,"form-runner-data":o(t).runnerData,"form-state":u.value,"is-preview":!1,"user-email":o(g).email,onRedirect:_,onActionClicked:(n=o(t))==null?void 0:n.controller.handleActionClick,onUpdateWidgetErrors:(s=o(t))==null?void 0:s.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(c=o(t))==null?void 0:c.controller.updateWidgetValue,onAuthComplete:(v=o(t))==null?void 0:v.controller.handleAuthComplete},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onAuthComplete"])):q("",!0)}}});const ue=G(j,[["__scopeId","data-v-c3fd8bc9"]]);export{ue as default};
//# sourceMappingURL=Form.3ddc1ad9.js.map
