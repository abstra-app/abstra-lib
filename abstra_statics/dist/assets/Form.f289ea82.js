import{u as k}from"./index.24ac0521.js";import{d as E,eE as U,eK as R,I as C,r as h,K as F,J as I,ax as S,o as A,O as L,u as n,b as g,ew as x,f as W,c as B,ey as K,x as V}from"./outputWidgets.08b42066.js";import{b as M,r as N,c as T,d as q}from"./FormRunner.b3b5f173.js";import{a as G}from"./asyncComputed.ea2ee994.js";import{u as w}from"./uuid.146b51f9.js";import{L as J}from"./CircularLoading.ccb6b6b5.js";import{f as O}from"./api.2deae15f.js";import"./fetch.def76c12.js";import"./pubsub.1c93332b.js";import"./url.cc277faf.js";import"./Login.vue_vue_type_script_setup_true_lang.a75a5fe4.js";import"./Link.579ff369.js";import"./Base.c4ee6843.js";import"./index.ecedd424.js";import"./PhArrowClockwise.vue.52870620.js";import"./WidgetsFrame.374bc4ba.js";import"./Steps.597a99c4.js";import"./PhInfo.vue.3beec418.js";import"./Card.8a1e710f.js";import"./TabPane.8ab10f17.js";import"./hasIn.469a9285.js";import"./runnerData.015773ec.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u=new Error().stack;u&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[u]="60659a3d-278d-4383-bdf8-28baf0aca140",l._sentryDebugIdIdentifier="sentry-dbid-60659a3d-278d-4383-bdf8-28baf0aca140")}catch{}})();const P={key:0,class:"loading"},j=E({__name:"Form",setup(l){const u=U(),d=R(),p=C({playerKey:w()}),i=h(null),c=h(null);F(u,()=>b());const{loading:m,result:r,error:f,refetch:b}=G(async()=>{p.playerKey=w();const t=u.path.slice(1),e=await O(t);if(!e){d.push({name:"error",params:{status:"404"}});return}const a=new T({formRunnerData:e,userManager:k,logService:null,connectionManager:new q(e.id,"player",u.query),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:o=>c.value=o,onStackTraceUpdate:null,onStateUpdate:o=>i.value=o}),s=a.getState();return c.value=s.passwordlessUser,i.value=s.formState,{runnerData:e,controller:a}}),D=I(()=>{const t=!m,e=!!f,a=!r||i.value===null;return t&&(e||a)});S(()=>{var t,e,a,s,o;D.value&&d.push({name:"error",params:{status:"500"}}),!!((t=r.value)!=null&&t.runnerData)&&(e=r.value)!=null&&e.runnerData&&(document.title=(o=(a=r.value)==null?void 0:a.runnerData.welcomeTitle)!=null?o:(s=r.value)==null?void 0:s.runnerData.title)});function v(t,e){N("player",d,t,e)}A(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",_)}),L(()=>{window.removeEventListener("beforeunload",_)});const _=t=>{var e;if((e=r.value)!=null&&e.controller.handleCloseAttempt())return t.preventDefault(),""};return(t,e)=>{var a,s,o,y;return n(m)?(g(),x("div",P,[W(J)])):n(r)&&n(r).runnerData&&i.value&&!n(f)&&!n(m)?(g(),B(M,{key:p.playerKey,"form-runner-data":n(r).runnerData,"form-state":i.value,"is-preview":!1,"user-email":(a=c.value)==null?void 0:a.claims.email,onRedirect:v,onActionClicked:(s=n(r))==null?void 0:s.controller.handleActionClick,onUpdateWidgetErrors:(o=n(r))==null?void 0:o.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(y=n(r))==null?void 0:y.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):K("",!0)}}});const ve=V(j,[["__scopeId","data-v-1020d95f"]]);export{ve as default};
//# sourceMappingURL=Form.f289ea82.js.map
