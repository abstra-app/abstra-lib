import{u as E}from"./index.2328afac.js";import{d as I,eE as U,eK as C,I as F,r as w,K as R,ax as A,o as x,O as B,u as a,b as i,ew as f,f as L,c as W,eC as K,eD as V,e as c,x as M}from"./outputWidgets.74e9892d.js";import{b as P,r as q,c as T,d as N}from"./FormRunner.9e013090.js";import{a as O}from"./asyncComputed.fc38f086.js";import{u as k}from"./uuid.3e22aba8.js";import{L as j}from"./CircularLoading.48cb4801.js";import{f as z}from"./api.dfdc8eb5.js";import"./fetch.5e323554.js";import"./pubsub.e11c9ea9.js";import"./url.9a913f57.js";import"./Login.vue_vue_type_script_setup_true_lang.c5fd7f5f.js";import"./Link.b3800fcc.js";import"./Base.95b485c5.js";import"./index.1ebf68ba.js";import"./PhArrowClockwise.vue.7b0d4a00.js";import"./WidgetsFrame.c602191b.js";import"./Steps.a3b8f639.js";import"./PhInfo.vue.58e7cd68.js";import"./Card.01db1e5a.js";import"./TabPane.d574ff5c.js";import"./hasIn.abae920f.js";import"./runnerData.200dfb98.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[d]="2d4c8e6f-4f7d-4499-ae87-a503e94e13a2",r._sentryDebugIdIdentifier="sentry-dbid-2d4c8e6f-4f7d-4499-ae87-a503e94e13a2")}catch{}})();const p=r=>(K("data-v-a6c34f73"),r=r(),V(),r),G={key:0,class:"loading"},H={key:1,class:"error"},J=p(()=>c("h1",null,"Oops! Something went wrong",-1)),Q=p(()=>c("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),X=[J,Q],Y={key:3,class:"error not-found",style:{height:"100vh"}},Z=p(()=>c("h1",null,"Page not found",-1)),$=p(()=>c("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],te=I({__name:"Form",setup(r){const d=U(),_=C(),h=F({playerKey:k()}),u=w(null),m=w(null);R(d,()=>S());const{loading:D,result:t,error:b,refetch:S}=O(async()=>{h.playerKey=k();const o=d.path.slice(1),e=await z(o);if(!e)return null;const s=new T({formRunnerData:e,queryParams:d.query,userManager:E,logService:null,connectionManager:new N(e.id,"player"),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:n=>m.value=n,onStackTraceUpdate:null,onStateUpdate:n=>u.value=n}),l=s.getState();return m.value=l.passwordlessUser,u.value=l.formState,{runnerData:e,controller:s}});A(()=>{var o,e,s,l,n;!((o=t.value)!=null&&o.runnerData)||(e=t.value)!=null&&e.runnerData&&(document.title=(n=(s=t.value)==null?void 0:s.runnerData.welcomeTitle)!=null?n:(l=t.value)==null?void 0:l.runnerData.title)});function v(o,e){q("player",_,o,e)}x(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",y)}),B(()=>{window.removeEventListener("beforeunload",y)});const y=o=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return o.preventDefault(),""};return(o,e)=>{var s,l,n,g;return a(D)?(i(),f("div",G,[L(j)])):a(b)||a(t)===null||u.value===null?(i(),f("div",H,X)):a(t)&&a(t).runnerData?(i(),W(P,{key:h.playerKey,"form-runner-data":a(t).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(s=m.value)==null?void 0:s.claims.email,onRedirect:v,onActionClicked:(l=a(t))==null?void 0:l.controller.handleActionClick,onUpdateWidgetErrors:(n=a(t))==null?void 0:n.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(g=a(t))==null?void 0:g.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):(i(),f("div",Y,ee))}}});const Se=M(te,[["__scopeId","data-v-a6c34f73"]]);export{Se as default};
//# sourceMappingURL=Form.31d59ba8.js.map
