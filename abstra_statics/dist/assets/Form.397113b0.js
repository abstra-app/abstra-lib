import{u as E}from"./index.a0e47c81.js";import{d as U,eB as F,eA as I,G as A,r as g,J as L,aw as R,o as C,L as B,u as n,b as u,ev as c,f as W,c as q,eE as V,eF as x,e as p,v as M}from"./outputWidgets.b3823c49.js";import{b as P,r as K,c as N,d as T}from"./FormRunner.5c7dbfd2.js";import{a as G}from"./asyncComputed.e54c53d6.js";import{u as w}from"./uuid.9b548a4b.js";import{L as J}from"./CircularLoading.e4fbd3a1.js";import{f as O}from"./api.24d7f9d1.js";import"./pubsub.00fe8053.js";import"./url.43c37c0e.js";import"./Passwordless.5fb76ccc.js";import"./icons.093cb5ec.js";import"./PlayerNavbar.2ffa5699.js";import"./WidgetsFrame.69f1a18b.js";import"./Steps.c7f02518.js";import"./Card.9109ce9c.js";import"./TabPane.75433029.js";import"./hasIn.3c2b4d6b.js";import"./Typography.b5a4ab95.js";import"./runnerData.6ec10891.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="ce156815-18f3-4024-8f20-d50d1cdbe34d",r._sentryDebugIdIdentifier="sentry-dbid-ce156815-18f3-4024-8f20-d50d1cdbe34d")}catch{}})();const f=r=>(V("data-v-f61ea327"),r=r(),x(),r),j={key:0,class:"loading"},z={key:1,class:"error"},H=f(()=>p("h1",null,"Oops! Something went wrong",-1)),Q=f(()=>p("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),X=[H,Q],Y={key:2,class:"form"},Z={key:3,class:"error not-found",style:{height:"100vh"}},$=f(()=>p("h1",null,"Page not found",-1)),ee=f(()=>p("p",null,"The page you requested could not be found.",-1)),te=[$,ee],oe=U({__name:"Form",setup(r){const l=F(),m=I(),h=A({playerKey:w()}),i=g(null),_=g(null);L(l,()=>D());const{loading:k,result:t,error:b,refetch:D}=G(async()=>{h.playerKey=w();const o=l.path.slice(1),e=await O(o);if(!e)return null;const a=new N({formRunnerData:e,queryParams:l.query,userManager:E,logService:null,connectionManager:new T(e.id),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:d=>_.value=d,onStackTraceUpdate:null,onStateUpdate:d=>i.value=d}),s=a.getState();return _.value=s.passwordlessUser,i.value=s.formState,{runnerData:e,controller:a}});R(()=>{var o,e,a,s,d;!((o=t.value)!=null&&o.runnerData)||(e=t.value)!=null&&e.runnerData&&(document.title=(d=(a=t.value)==null?void 0:a.runnerData.welcomeTitle)!=null?d:(s=t.value)==null?void 0:s.runnerData.title)});function v(o,e){K("player",m,o,e)}const S=({path:o})=>{m.push({name:"form",query:l.query,params:{path:o.split("/")}})};C(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",y)}),B(()=>{window.removeEventListener("beforeunload",y)});const y=o=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return o.preventDefault(),""};return(o,e)=>{var a,s;return n(k)?(u(),c("div",j,[W(J)])):n(b)||n(t)===null||i.value===null?(u(),c("div",z,X)):(a=n(t))!=null&&a.runnerData?(u(),c("div",Y,[(u(),q(P,{key:h.playerKey,"form-runner-data":n(t).runnerData,"form-state":i.value,"is-preview":!1,"user-email":(s=_.value)==null?void 0:s.claims.email,class:"player",onNavigate:S,onRedirect:v,onActionClicked:n(t).controller.handleActionClick,onUpdateWidgetErrors:n(t).controller.updateWidgetFrontendErrors,onUpdateWidgetValue:n(t).controller.updateWidgetValue,onLogout:n(t).controller.logout},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onLogout"]))])):(u(),c("div",Z,te))}}});const be=M(oe,[["__scopeId","data-v-f61ea327"]]);export{be as default};
//# sourceMappingURL=Form.397113b0.js.map
