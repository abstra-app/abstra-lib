import{u as E}from"./index.b4f76b50.js";import{d as I,eE as U,eK as C,I as F,r as w,K as R,ax as A,o as x,O as B,u as a,b as d,ew as f,f as L,c as W,eC as K,eD as V,e as c,x as M}from"./outputWidgets.2208ae87.js";import{b as P,r as q,c as T,d as N}from"./FormRunner.66b7f0ba.js";import{a as O}from"./asyncComputed.7588efbe.js";import{u as b}from"./uuid.3d04ac19.js";import{L as j}from"./CircularLoading.94b466be.js";import{f as z}from"./api.dd0eef71.js";import"./fetch.7989f7bd.js";import"./pubsub.410cbf14.js";import"./url.00f6d79f.js";import"./Login.vue_vue_type_script_setup_true_lang.e23f68b6.js";import"./Link.4f08686f.js";import"./Base.62b44f98.js";import"./index.d45b2b14.js";import"./PhArrowClockwise.vue.4d77a71b.js";import"./WidgetsFrame.6bf309a7.js";import"./Steps.01f36e90.js";import"./PhInfo.vue.49ce7d1c.js";import"./Card.a2275c8a.js";import"./TabPane.5c493c7b.js";import"./hasIn.0340e096.js";import"./runnerData.10291852.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u=new Error().stack;u&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[u]="70b48786-a671-43b0-b806-4294170c1e5f",r._sentryDebugIdIdentifier="sentry-dbid-70b48786-a671-43b0-b806-4294170c1e5f")}catch{}})();const p=r=>(K("data-v-a6c34f73"),r=r(),V(),r),G={key:0,class:"loading"},H={key:1,class:"error"},J=p(()=>c("h1",null,"Oops! Something went wrong",-1)),Q=p(()=>c("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),X=[J,Q],Y={key:3,class:"error not-found",style:{height:"100vh"}},Z=p(()=>c("h1",null,"Page not found",-1)),$=p(()=>c("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],te=I({__name:"Form",setup(r){const u=U(),_=C(),h=F({playerKey:b()}),i=w(null),m=w(null);R(u,()=>S());const{loading:k,result:t,error:D,refetch:S}=O(async()=>{h.playerKey=b();const o=u.path.slice(1),e=await z(o);if(!e)return null;const s=new T({formRunnerData:e,queryParams:u.query,userManager:E,logService:null,connectionManager:new N(e.id,"player"),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:n=>m.value=n,onStackTraceUpdate:null,onStateUpdate:n=>i.value=n}),l=s.getState();return m.value=l.passwordlessUser,i.value=l.formState,{runnerData:e,controller:s}});A(()=>{var o,e,s,l,n;!((o=t.value)!=null&&o.runnerData)||(e=t.value)!=null&&e.runnerData&&(document.title=(n=(s=t.value)==null?void 0:s.runnerData.welcomeTitle)!=null?n:(l=t.value)==null?void 0:l.runnerData.title)});function v(o,e){q("player",_,o,e)}x(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",y)}),B(()=>{window.removeEventListener("beforeunload",y)});const y=o=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return o.preventDefault(),""};return(o,e)=>{var s,l,n,g;return a(k)?(d(),f("div",G,[L(j)])):a(D)||a(t)===null||i.value===null?(d(),f("div",H,X)):a(t)&&a(t).runnerData?(d(),W(P,{key:h.playerKey,"form-runner-data":a(t).runnerData,"form-state":i.value,"is-preview":!1,"user-email":(s=m.value)==null?void 0:s.claims.email,onRedirect:v,onActionClicked:(l=a(t))==null?void 0:l.controller.handleActionClick,onUpdateWidgetErrors:(n=a(t))==null?void 0:n.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(g=a(t))==null?void 0:g.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):(d(),f("div",Y,ee))}}});const Se=M(te,[["__scopeId","data-v-a6c34f73"]]);export{Se as default};
//# sourceMappingURL=Form.607f3007.js.map
