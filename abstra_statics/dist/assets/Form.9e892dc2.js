import{u as E}from"./index.8d22ed9c.js";import{d as I,eE as U,eK as C,I as F,r as w,K as R,ax as A,o as x,O as B,u as a,b as c,ew as f,f as L,c as W,eC as K,eD as V,e as d,x as M}from"./outputWidgets.47d6865e.js";import{b as P,r as q,c as T,d as N}from"./FormRunner.494a8ec2.js";import{a as O}from"./asyncComputed.893821fe.js";import{u as b}from"./uuid.a4be8ad1.js";import{L as j}from"./CircularLoading.eb9843f6.js";import{f as z}from"./api.50ebb289.js";import"./fetch.fb888dea.js";import"./pubsub.0a5fa8dc.js";import"./url.0a008d53.js";import"./Login.vue_vue_type_script_setup_true_lang.0ca0d336.js";import"./Link.b7c2788f.js";import"./Base.fbda1545.js";import"./index.99b78267.js";import"./PhArrowClockwise.vue.869668f2.js";import"./WidgetsFrame.fb3a2fef.js";import"./Steps.08b60de5.js";import"./PhInfo.vue.1dd94e58.js";import"./Card.25fc3944.js";import"./TabPane.ef9d004d.js";import"./hasIn.e9344704.js";import"./runnerData.499cdb99.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u=new Error().stack;u&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[u]="b539c965-3754-43a7-ac1c-e74bf1a852ea",r._sentryDebugIdIdentifier="sentry-dbid-b539c965-3754-43a7-ac1c-e74bf1a852ea")}catch{}})();const p=r=>(K("data-v-a6c34f73"),r=r(),V(),r),G={key:0,class:"loading"},H={key:1,class:"error"},J=p(()=>d("h1",null,"Oops! Something went wrong",-1)),Q=p(()=>d("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),X=[J,Q],Y={key:3,class:"error not-found",style:{height:"100vh"}},Z=p(()=>d("h1",null,"Page not found",-1)),$=p(()=>d("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],te=I({__name:"Form",setup(r){const u=U(),_=C(),h=F({playerKey:b()}),i=w(null),m=w(null);R(u,()=>S());const{loading:k,result:t,error:D,refetch:S}=O(async()=>{h.playerKey=b();const o=u.path.slice(1),e=await z(o);if(!e)return null;const s=new T({formRunnerData:e,queryParams:u.query,userManager:E,logService:null,connectionManager:new N(e.id,"player"),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:n=>m.value=n,onStackTraceUpdate:null,onStateUpdate:n=>i.value=n}),l=s.getState();return m.value=l.passwordlessUser,i.value=l.formState,{runnerData:e,controller:s}});A(()=>{var o,e,s,l,n;!((o=t.value)!=null&&o.runnerData)||(e=t.value)!=null&&e.runnerData&&(document.title=(n=(s=t.value)==null?void 0:s.runnerData.welcomeTitle)!=null?n:(l=t.value)==null?void 0:l.runnerData.title)});function v(o,e){q("player",_,o,e)}x(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",y)}),B(()=>{window.removeEventListener("beforeunload",y)});const y=o=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return o.preventDefault(),""};return(o,e)=>{var s,l,n,g;return a(k)?(c(),f("div",G,[L(j)])):a(D)||a(t)===null||i.value===null?(c(),f("div",H,X)):a(t)&&a(t).runnerData?(c(),W(P,{key:h.playerKey,"form-runner-data":a(t).runnerData,"form-state":i.value,"is-preview":!1,"user-email":(s=m.value)==null?void 0:s.claims.email,onRedirect:v,onActionClicked:(l=a(t))==null?void 0:l.controller.handleActionClick,onUpdateWidgetErrors:(n=a(t))==null?void 0:n.controller.updateWidgetFrontendErrors,onUpdateWidgetValue:(g=a(t))==null?void 0:g.controller.updateWidgetValue},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue"])):(c(),f("div",Y,ee))}}});const Se=M(te,[["__scopeId","data-v-a6c34f73"]]);export{Se as default};
//# sourceMappingURL=Form.9e892dc2.js.map
