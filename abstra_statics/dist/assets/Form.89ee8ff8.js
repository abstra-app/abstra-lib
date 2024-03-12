import{u as E}from"./index.c7c46fa1.js";import{d as U,eB as F,eA as I,G as A,r as g,J as L,aw as R,o as C,L as B,u as a,b as i,ev as c,f as W,c as q,eE as V,eF as x,e as p,v as M}from"./outputWidgets.930261a2.js";import{b as P,r as K,c as N,d as T}from"./FormRunner.9b6fa032.js";import{a as G}from"./asyncComputed.f393bf23.js";import{u as w}from"./uuid.e32fed33.js";import{L as J}from"./CircularLoading.9136d486.js";import{f as O}from"./api.a46d439d.js";import"./pubsub.cb12d51c.js";import"./url.7abd79b4.js";import"./Passwordless.176bd060.js";import"./index.c69863b4.js";import"./icons.90446bd5.js";import"./PlayerNavbar.5261e13f.js";import"./WidgetsFrame.36c0c62a.js";import"./Steps.8a3d49fc.js";import"./Card.4e641580.js";import"./TabPane.61c81103.js";import"./hasIn.b1eb2850.js";import"./Typography.4474700c.js";import"./runnerData.7e97e2bb.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="e784da8a-0af6-4f8a-a014-f96e463fe577",r._sentryDebugIdIdentifier="sentry-dbid-e784da8a-0af6-4f8a-a014-f96e463fe577")}catch{}})();const f=r=>(V("data-v-f61ea327"),r=r(),x(),r),j={key:0,class:"loading"},z={key:1,class:"error"},H=f(()=>p("h1",null,"Oops! Something went wrong",-1)),Q=f(()=>p("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),X=[H,Q],Y={key:2,class:"form"},Z={key:3,class:"error not-found",style:{height:"100vh"}},$=f(()=>p("h1",null,"Page not found",-1)),ee=f(()=>p("p",null,"The page you requested could not be found.",-1)),te=[$,ee],oe=U({__name:"Form",setup(r){const l=F(),m=I(),h=A({playerKey:w()}),d=g(null),_=g(null);L(l,()=>b());const{loading:k,result:t,error:D,refetch:b}=G(async()=>{h.playerKey=w();const o=l.path.slice(1),e=await O(o);if(!e)return null;const n=new N({formRunnerData:e,queryParams:l.query,userManager:E,logService:null,connectionManager:new T(e.id),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:u=>_.value=u,onStackTraceUpdate:null,onStateUpdate:u=>d.value=u}),s=n.getState();return _.value=s.passwordlessUser,d.value=s.formState,{runnerData:e,controller:n}});R(()=>{var o,e,n,s,u;!((o=t.value)!=null&&o.runnerData)||(e=t.value)!=null&&e.runnerData&&(document.title=(u=(n=t.value)==null?void 0:n.runnerData.welcomeTitle)!=null?u:(s=t.value)==null?void 0:s.runnerData.title)});function v(o,e){K("player",m,o,e)}const S=({path:o})=>{m.push({name:"form",query:l.query,params:{path:o.split("/")}})};C(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",y)}),B(()=>{window.removeEventListener("beforeunload",y)});const y=o=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return o.preventDefault(),""};return(o,e)=>{var n,s;return a(k)?(i(),c("div",j,[W(J)])):a(D)||a(t)===null||d.value===null?(i(),c("div",z,X)):(n=a(t))!=null&&n.runnerData?(i(),c("div",Y,[(i(),q(P,{key:h.playerKey,"form-runner-data":a(t).runnerData,"form-state":d.value,"is-preview":!1,"user-email":(s=_.value)==null?void 0:s.claims.email,class:"player",onNavigate:S,onRedirect:v,onActionClicked:a(t).controller.handleActionClick,onUpdateWidgetErrors:a(t).controller.updateWidgetFrontendErrors,onUpdateWidgetValue:a(t).controller.updateWidgetValue,onLogout:a(t).controller.logout},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onLogout"]))])):(i(),c("div",Z,te))}}});const be=M(oe,[["__scopeId","data-v-f61ea327"]]);export{be as default};
//# sourceMappingURL=Form.89ee8ff8.js.map
