import{u as k}from"./index.9b3c5a9d.js";import{d as E,f1 as R,f7 as U,N as C,r as h,O as F,y as S,ar as A,o as I,R as L,u as n,b as g,eV as V,f as W,c as B,eX as x,E as M}from"./outputWidgets.86836a5b.js";import{b as N,r as K,c as T,d as q}from"./FormRunner.0327e492.js";import{a as G}from"./asyncComputed.9b0e08d2.js";import{u as w}from"./uuid.09099dc2.js";import{L as O}from"./CircularLoading.3041e773.js";import{f as P}from"./api.a0a6d525.js";import"./fetch.02325c3e.js";import"./pubsub.6638b425.js";import"./url.941df304.js";import"./Login.vue_vue_type_script_setup_true_lang.3826a9ef.js";import"./index.5d5671f6.js";import"./PhArrowClockwise.vue.0a4f3ab9.js";import"./WidgetsFrame.3b3e3e4f.js";import"./Steps.98c21772.js";import"./PhInfo.vue.5be5b982.js";import"./Card.809d62ef.js";import"./TabPane.1a6b4d1a.js";import"./hasIn.13b5b847.js";import"./PlusOutlined.cf52d035.js";import"./runnerData.8d12464e.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u=new Error().stack;u&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[u]="849db4ae-4735-493f-930a-92ccc7507279",l._sentryDebugIdIdentifier="sentry-dbid-849db4ae-4735-493f-930a-92ccc7507279")}catch{}})();const X={key:0,class:"loading"},j=E({__name:"Form",setup(l){const u=R(),d=U(),p=C({playerKey:w()}),i=h(null),c=h(null);F(u,()=>b());const{loading:m,result:r,error:f,refetch:b}=G(async()=>{p.playerKey=w();const t=u.path.slice(1),e=await P(t);if(!e){d.push({name:"error",params:{status:"404"}});return}const o=new T({formRunnerData:e,userManager:k,logService:null,connectionManager:new q(e.id,"player",u.query),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:a=>c.value=a,onStackTraceUpdate:null,onStateUpdate:a=>i.value=a}),s=o.getState();return c.value=s.passwordlessUser,i.value=s.formState,{runnerData:e,controller:o}}),D=S(()=>{const t=!m,e=!!f,o=!r||i.value===null;return t&&(e||o)});A(()=>{var t,e,o,s,a;D.value&&d.push({name:"error",params:{status:"500"}}),!!((t=r.value)!=null&&t.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(a=(o=r.value)==null?void 0:o.runnerData.welcomeTitle)!=null?a:(s=r.value)==null?void 0:s.runnerData.title)});function v(t,e){K("player",d,t,e)}I(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",_)}),L(()=>{window.removeEventListener("beforeunload",_)});const _=t=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return t.preventDefault(),""};return(t,e)=>{var o,s,a,y;return n(m)?(g(),V("div",X,[W(O)])):n(r)&&n(r).runnerData&&i.value&&!n(f)&&!n(m)?(g(),B(N,{key:p.playerKey,"form-runner-data":n(r).runnerData,"form-state":i.value,"is-preview":!1,"user-email":(o=c.value)==null?void 0:o.claims.email,onRedirect:v,onActionClicked:(s=n(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(a=n(r))==null?void 0:a.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(y=n(r))==null?void 0:y.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):x("",!0)}}});const fe=M(j,[["__scopeId","data-v-1020d95f"]]);export{fe as default};
//# sourceMappingURL=Form.5a9e7f22.js.map
