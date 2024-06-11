import{u as k}from"./index.db651dd8.js";import{d as E,f1 as R,f7 as U,N as C,r as h,O as F,y as S,ar as A,o as I,R as L,u as n,b as g,eV as V,f as W,c as B,eX as x,E as M}from"./outputWidgets.ebb9dc3f.js";import{b as N,r as K,c as T,d as q}from"./FormRunner.f0c84e74.js";import{a as G}from"./asyncComputed.0cb7aad7.js";import{u as w}from"./uuid.9a09d639.js";import{L as O}from"./CircularLoading.adac289b.js";import{f as P}from"./api.eaccf0ba.js";import"./fetch.976c6f1b.js";import"./pubsub.5478cedc.js";import"./url.f808e39f.js";import"./Login.vue_vue_type_script_setup_true_lang.b127403b.js";import"./index.4cc60584.js";import"./PhArrowClockwise.vue.de952e35.js";import"./WidgetsFrame.e4f34a36.js";import"./Steps.eab9021f.js";import"./Card.4abaac71.js";import"./TabPane.b358f1e2.js";import"./hasIn.3d4a7cb6.js";import"./PlusOutlined.cf52d035.js";import"./runnerData.9ef49090.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u=new Error().stack;u&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[u]="0c84f4eb-bfbd-4a8c-9aa1-e21c23733712",l._sentryDebugIdIdentifier="sentry-dbid-0c84f4eb-bfbd-4a8c-9aa1-e21c23733712")}catch{}})();const X={key:0,class:"loading"},j=E({__name:"Form",setup(l){const u=R(),c=U(),f=C({playerKey:w()}),i=h(null),d=h(null);F(u,()=>{u.name==="form"&&b()});const{loading:m,result:r,error:p,refetch:b}=G(async()=>{f.playerKey=w();const t=u.path.slice(1),e=await P(t);if(!e){c.push({name:"error",params:{status:"404"}});return}const a=new T({formRunnerData:e,userManager:k,logService:null,connectionManager:new q(e.id,"player",u.query),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:o=>d.value=o,onStackTraceUpdate:null,onStateUpdate:o=>i.value=o}),s=a.getState();return d.value=s.passwordlessUser,i.value=s.formState,{runnerData:e,controller:a}}),D=S(()=>{const t=!m,e=!!p,a=!r||i.value===null;return t&&(e||a)});A(()=>{var t,e,a,s,o;D.value&&c.push({name:"error",params:{status:"500"}}),!!((t=r.value)!=null&&t.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(o=(a=r.value)==null?void 0:a.runnerData.welcomeTitle)!=null?o:(s=r.value)==null?void 0:s.runnerData.title)});function v(t,e){K("player",c,t,e)}I(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",_)}),L(()=>{window.removeEventListener("beforeunload",_)});const _=t=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return t.preventDefault(),""};return(t,e)=>{var a,s,o,y;return n(m)?(g(),V("div",X,[W(O)])):n(r)&&n(r).runnerData&&i.value&&!n(p)&&!n(m)?(g(),B(N,{key:f.playerKey,"form-runner-data":n(r).runnerData,"form-state":i.value,"is-preview":!1,"user-email":(a=d.value)==null?void 0:a.claims.email,onRedirect:v,onActionClicked:(s=n(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(o=n(r))==null?void 0:o.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(y=n(r))==null?void 0:y.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):x("",!0)}}});const fe=M(j,[["__scopeId","data-v-445f692c"]]);export{fe as default};
//# sourceMappingURL=Form.d5b66e00.js.map
