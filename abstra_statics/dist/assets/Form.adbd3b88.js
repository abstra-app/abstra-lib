import{u as E}from"./index.293b3c30.js";import{d as I,eE as U,eK as C,I as F,r as w,K as R,ax as A,o as x,O as B,u as a,b as i,ew as m,f as L,c as W,eC as K,eD as V,e as c,x as M}from"./outputWidgets.1ff7b577.js";import{b as P,r as q,c as T,d as N}from"./FormRunner.5aa822d9.js";import{a as O}from"./asyncComputed.5609aa3f.js";import{u as b}from"./uuid.efd7ec55.js";import{L as j}from"./CircularLoading.9c0f526b.js";import{f as z}from"./api.db8ecdab.js";import"./fetch.c323dfee.js";import"./pubsub.ee33ae91.js";import"./url.7c48a780.js";import"./Login.vue_vue_type_script_setup_true_lang.fdae133d.js";import"./Link.2ff2f11a.js";import"./Base.0a235eb2.js";import"./index.b53d270d.js";import"./PhArrowClockwise.vue.704a15f3.js";import"./WidgetsFrame.e6517f23.js";import"./Steps.7256464e.js";import"./PhInfo.vue.5e6bf2f9.js";import"./Card.37050228.js";import"./TabPane.bd1ea767.js";import"./hasIn.487becea.js";import"./runnerData.8e8ec3b4.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[d]="d508fa4b-4ae1-496f-86b1-97d8af40ea2b",r._sentryDebugIdIdentifier="sentry-dbid-d508fa4b-4ae1-496f-86b1-97d8af40ea2b")}catch{}})();const p=r=>(K("data-v-a6c34f73"),r=r(),V(),r),G={key:0,class:"loading"},H={key:1,class:"error"},J=p(()=>c("h1",null,"Oops! Something went wrong",-1)),Q=p(()=>c("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),X=[J,Q],Y={key:3,class:"error not-found",style:{height:"100vh"}},Z=p(()=>c("h1",null,"Page not found",-1)),$=p(()=>c("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],te=I({__name:"Form",setup(r){const d=U(),_=C(),h=F({playerKey:b()}),u=w(null),f=w(null);R(d,()=>S());const{loading:k,result:t,error:D,refetch:S}=O(async()=>{h.playerKey=b();const o=d.path.slice(1),e=await z(o);if(!e)return null;const s=new T({formRunnerData:e,queryParams:d.query,userManager:E,logService:null,connectionManager:new N(e.id,"player"),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:n=>f.value=n,onStackTraceUpdate:null,onStateUpdate:n=>u.value=n}),l=s.getState();return f.value=l.passwordlessUser,u.value=l.formState,{runnerData:e,controller:s}});A(()=>{var o,e,s,l,n;!((o=t.value)!=null&&o.runnerData)||(e=t.value)!=null&&e.runnerData&&(document.title=(n=(s=t.value)==null?void 0:s.runnerData.welcomeTitle)!=null?n:(l=t.value)==null?void 0:l.runnerData.title)});function v(o,e){q("player",_,o,e)}x(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",y)}),B(()=>{window.removeEventListener("beforeunload",y)});const y=o=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return o.preventDefault(),""};return(o,e)=>{var s,l,n,g;return a(k)?(i(),m("div",G,[L(j)])):a(D)||a(t)===null||u.value===null?(i(),m("div",H,X)):a(t)&&a(t).runnerData?(i(),W(P,{key:h.playerKey,"form-runner-data":a(t).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(s=f.value)==null?void 0:s.claims.email,onRedirect:v,onActionClicked:(l=a(t))==null?void 0:l.controller.handleActionClick,onUpdateWidgetErrors:(n=a(t))==null?void 0:n.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(g=a(t))==null?void 0:g.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):(i(),m("div",Y,ee))}}});const Se=M(te,[["__scopeId","data-v-a6c34f73"]]);export{Se as default};
//# sourceMappingURL=Form.adbd3b88.js.map
