import{u as E}from"./index.97d2d50d.js";import{d as b,f1 as R,f7 as U,N as C,r as h,O as F,y as S,ar as A,o as I,R as L,u as n,b as g,eV as V,f as W,c as B,eX as x,E as M}from"./outputWidgets.73c505ca.js";import{b as N,r as K,c as T,d as q}from"./FormRunner.bf4d68dc.js";import{a as G}from"./asyncComputed.158f340f.js";import{u as w}from"./uuid.2aea7a84.js";import{L as O}from"./CircularLoading.a1f76095.js";import{f as P}from"./api.ac49453c.js";import"./fetch.c746645c.js";import"./pubsub.8105eb2b.js";import"./url.92163e49.js";import"./Login.vue_vue_type_script_setup_true_lang.03811d9b.js";import"./index.2ac2bcab.js";import"./PhArrowClockwise.vue.639ebdc1.js";import"./WidgetsFrame.a21a342f.js";import"./Steps.f6992607.js";import"./PhInfo.vue.c0268087.js";import"./Card.fe6dede7.js";import"./TabPane.05823b98.js";import"./hasIn.a2cc6da3.js";import"./PlusOutlined.cf52d035.js";import"./runnerData.1521d087.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u=new Error().stack;u&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[u]="44d5d9f0-3896-4142-9da3-07e60ea713ed",l._sentryDebugIdIdentifier="sentry-dbid-44d5d9f0-3896-4142-9da3-07e60ea713ed")}catch{}})();const X={key:0,class:"loading"},j=b({__name:"Form",setup(l){const u=R(),i=U(),p=C({playerKey:w()}),d=h(null),c=h(null);F(u,()=>D());const{loading:m,result:r,error:f,refetch:D}=G(async()=>{p.playerKey=w();const t=u.path.slice(1),e=await P(t);if(!e){i.push({name:"error",params:{status:"404"}});return}const o=new T({formRunnerData:e,userManager:E,logService:null,connectionManager:new q(e.id,"player",u.query),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:a=>c.value=a,onStackTraceUpdate:null,onStateUpdate:a=>d.value=a}),s=o.getState();return c.value=s.passwordlessUser,d.value=s.formState,{runnerData:e,controller:o}}),k=S(()=>{const t=!m,e=!!f,o=!r||d.value===null;return t&&(e||o)});A(()=>{var t,e,o,s,a;k.value&&i.push({name:"error",params:{status:"500"}}),!!((t=r.value)!=null&&t.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(a=(o=r.value)==null?void 0:o.runnerData.welcomeTitle)!=null?a:(s=r.value)==null?void 0:s.runnerData.title)});function v(t,e){K("player",i,t,e)}I(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",_)}),L(()=>{window.removeEventListener("beforeunload",_)});const _=t=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return t.preventDefault(),""};return(t,e)=>{var o,s,a,y;return n(m)?(g(),V("div",X,[W(O)])):n(r)&&n(r).runnerData&&d.value&&!n(f)&&!n(m)?(g(),B(N,{key:p.playerKey,"form-runner-data":n(r).runnerData,"form-state":d.value,"is-preview":!1,"user-email":(o=c.value)==null?void 0:o.claims.email,onRedirect:v,onActionClicked:(s=n(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(a=n(r))==null?void 0:a.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(y=n(r))==null?void 0:y.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):x("",!0)}}});const fe=M(j,[["__scopeId","data-v-1020d95f"]]);export{fe as default};
//# sourceMappingURL=Form.8ec90d48.js.map
