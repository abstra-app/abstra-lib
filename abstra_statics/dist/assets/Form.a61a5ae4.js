import{u as E}from"./index.d3c08eba.js";import{d as I,eE as U,eK as C,I as F,r as w,K as R,ax as A,o as x,O as B,u as a,b as i,ew as f,f as L,c as W,eC as K,eD as V,e as c,x as M}from"./outputWidgets.f4ff73cb.js";import{b as P,r as q,c as T,d as N}from"./FormRunner.1b40e4b4.js";import{a as O}from"./asyncComputed.1c2e733f.js";import{u as b}from"./uuid.13a8210c.js";import{L as j}from"./CircularLoading.2e718102.js";import{f as z}from"./api.47f2b83e.js";import"./fetch.94c8b741.js";import"./pubsub.f8e50115.js";import"./url.f4aa4fed.js";import"./Login.vue_vue_type_script_setup_true_lang.ef7fc0e0.js";import"./Link.58a56401.js";import"./Base.2cf6cca2.js";import"./index.efd7a444.js";import"./PhArrowClockwise.vue.389e5739.js";import"./WidgetsFrame.d26e64d1.js";import"./Steps.aa07fcb9.js";import"./PhInfo.vue.6a00ee90.js";import"./Card.c86b7818.js";import"./TabPane.12230f18.js";import"./hasIn.c05f2ad3.js";import"./runnerData.f9578373.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u=new Error().stack;u&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[u]="8b468109-854a-42fe-8893-ac35f9db6a83",r._sentryDebugIdIdentifier="sentry-dbid-8b468109-854a-42fe-8893-ac35f9db6a83")}catch{}})();const p=r=>(K("data-v-a6c34f73"),r=r(),V(),r),G={key:0,class:"loading"},H={key:1,class:"error"},J=p(()=>c("h1",null,"Oops! Something went wrong",-1)),Q=p(()=>c("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),X=[J,Q],Y={key:3,class:"error not-found",style:{height:"100vh"}},Z=p(()=>c("h1",null,"Page not found",-1)),$=p(()=>c("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],te=I({__name:"Form",setup(r){const u=U(),_=C(),h=F({playerKey:b()}),d=w(null),m=w(null);R(u,()=>S());const{loading:k,result:t,error:D,refetch:S}=O(async()=>{h.playerKey=b();const o=u.path.slice(1),e=await z(o);if(!e)return null;const s=new T({formRunnerData:e,queryParams:u.query,userManager:E,logService:null,connectionManager:new N(e.id,"player"),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:n=>m.value=n,onStackTraceUpdate:null,onStateUpdate:n=>d.value=n}),l=s.getState();return m.value=l.passwordlessUser,d.value=l.formState,{runnerData:e,controller:s}});A(()=>{var o,e,s,l,n;!((o=t.value)!=null&&o.runnerData)||(e=t.value)!=null&&e.runnerData&&(document.title=(n=(s=t.value)==null?void 0:s.runnerData.welcomeTitle)!=null?n:(l=t.value)==null?void 0:l.runnerData.title)});function v(o,e){q("player",_,o,e)}x(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",y)}),B(()=>{window.removeEventListener("beforeunload",y)});const y=o=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return o.preventDefault(),""};return(o,e)=>{var s,l,n,g;return a(k)?(i(),f("div",G,[L(j)])):a(D)||a(t)===null||d.value===null?(i(),f("div",H,X)):a(t)&&a(t).runnerData?(i(),W(P,{key:h.playerKey,"form-runner-data":a(t).runnerData,"form-state":d.value,"is-preview":!1,"user-email":(s=m.value)==null?void 0:s.claims.email,onRedirect:v,onActionClicked:(l=a(t))==null?void 0:l.controller.handleActionClick,onUpdateWidgetErrors:(n=a(t))==null?void 0:n.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(g=a(t))==null?void 0:g.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):(i(),f("div",Y,ee))}}});const Se=M(te,[["__scopeId","data-v-a6c34f73"]]);export{Se as default};
//# sourceMappingURL=Form.a61a5ae4.js.map
