import{u as k}from"./index.4f9a3624.js";import{d as E,f1 as R,f7 as U,N as C,r as h,O as F,y as S,ar as A,o as I,R as L,u as n,b as g,eV as V,f as W,c as B,eX as x,E as M}from"./outputWidgets.ee3c0009.js";import{b as N,r as K,c as T,d as q}from"./FormRunner.e2c7dd9f.js";import{a as G}from"./asyncComputed.22f2d2f6.js";import{u as b}from"./uuid.c6bd29ce.js";import{L as O}from"./CircularLoading.afdbbaed.js";import{f as P}from"./api.474c49ee.js";import"./fetch.8b490a2c.js";import"./pubsub.e0ba7a2d.js";import"./url.762fcede.js";import"./Login.vue_vue_type_script_setup_true_lang.fc864cf6.js";import"./index.31d446a0.js";import"./PhArrowClockwise.vue.edd94149.js";import"./WidgetsFrame.0be7c065.js";import"./Steps.f1bba861.js";import"./Card.7b1a29b4.js";import"./TabPane.133f759e.js";import"./hasIn.d37c72ab.js";import"./PlusOutlined.cf52d035.js";import"./runnerData.2910960d.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u=new Error().stack;u&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[u]="6192b3e5-61fb-4ee0-8e74-bb3e45a39ce6",l._sentryDebugIdIdentifier="sentry-dbid-6192b3e5-61fb-4ee0-8e74-bb3e45a39ce6")}catch{}})();const X={key:0,class:"loading"},j=E({__name:"Form",setup(l){const u=R(),d=U(),p=C({playerKey:b()}),i=h(null),c=h(null);F(u,()=>w());const{loading:m,result:r,error:f,refetch:w}=G(async()=>{p.playerKey=b();const t=u.path.slice(1),e=await P(t);if(!e){d.push({name:"error",params:{status:"404"}});return}const o=new T({formRunnerData:e,userManager:k,logService:null,connectionManager:new q(e.id,"player",u.query),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:a=>c.value=a,onStackTraceUpdate:null,onStateUpdate:a=>i.value=a}),s=o.getState();return c.value=s.passwordlessUser,i.value=s.formState,{runnerData:e,controller:o}}),D=S(()=>{const t=!m,e=!!f,o=!r||i.value===null;return t&&(e||o)});A(()=>{var t,e,o,s,a;D.value&&d.push({name:"error",params:{status:"500"}}),!!((t=r.value)!=null&&t.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(a=(o=r.value)==null?void 0:o.runnerData.welcomeTitle)!=null?a:(s=r.value)==null?void 0:s.runnerData.title)});function v(t,e){K("player",d,t,e)}I(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",_)}),L(()=>{window.removeEventListener("beforeunload",_)});const _=t=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return t.preventDefault(),""};return(t,e)=>{var o,s,a,y;return n(m)?(g(),V("div",X,[W(O)])):n(r)&&n(r).runnerData&&i.value&&!n(f)&&!n(m)?(g(),B(N,{key:p.playerKey,"form-runner-data":n(r).runnerData,"form-state":i.value,"is-preview":!1,"user-email":(o=c.value)==null?void 0:o.claims.email,onRedirect:v,onActionClicked:(s=n(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(a=n(r))==null?void 0:a.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(y=n(r))==null?void 0:y.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):x("",!0)}}});const pe=M(j,[["__scopeId","data-v-1020d95f"]]);export{pe as default};
//# sourceMappingURL=Form.6ff897d8.js.map
