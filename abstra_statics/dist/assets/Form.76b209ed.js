import{u as S}from"./index.eff14e0f.js";import{d as E,eA as U,eI as F,G as A,r as g,I as R,av as C,o as L,K as B,u as n,b as d,eu as c,f as W,c as q,eE as V,eF as x,e as p,v as K}from"./outputWidgets.ee4285cb.js";import{b as M,r as P,c as N,d as T}from"./FormRunner.2e0c03b7.js";import{a as G}from"./asyncComputed.092d2b62.js";import{u as w}from"./uuid.cda9ad6d.js";import{L as O}from"./CircularLoading.315f22e5.js";import{f as j}from"./api.5f84ce4d.js";import"./pubsub.b41a6ead.js";import"./fetch.8d052b9a.js";import"./url.b1eca2cd.js";import"./Passwordless.c132909e.js";import"./index.906585f5.js";import"./PhArrowClockwise.vue.af96b521.js";import"./PlayerNavbar.0dc83677.js";import"./PhKanban.vue.05028159.js";import"./PhSignOut.vue.a0de0697.js";import"./Text.a86ec181.js";import"./index.df8571d0.js";import"./Link.c624e368.js";import"./Paragraph.2423987a.js";import"./Title.4d7de464.js";import"./index.c811ba96.js";import"./WidgetsFrame.2593d3b1.js";import"./Steps.9877b95a.js";import"./PhInfo.vue.5c75306d.js";import"./Card.5cff9fcc.js";import"./index.5f463ece.js";import"./TabPane.db315ff0.js";import"./hasIn.b845201d.js";import"./runnerData.dde95c73.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[i]="447d7c6a-dcc2-45cd-9cf0-d0c6156262e1",r._sentryDebugIdIdentifier="sentry-dbid-447d7c6a-dcc2-45cd-9cf0-d0c6156262e1")}catch{}})();const m=r=>(V("data-v-f61ea327"),r=r(),x(),r),z={key:0,class:"loading"},H={key:1,class:"error"},J=m(()=>p("h1",null,"Oops! Something went wrong",-1)),Q=m(()=>p("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),X=[J,Q],Y={key:2,class:"form"},Z={key:3,class:"error not-found",style:{height:"100vh"}},$=m(()=>p("h1",null,"Page not found",-1)),ee=m(()=>p("p",null,"The page you requested could not be found.",-1)),te=[$,ee],oe=E({__name:"Form",setup(r){const i=U(),f=F(),h=A({playerKey:w()}),u=g(null),_=g(null);R(i,()=>b());const{loading:k,result:t,error:D,refetch:b}=G(async()=>{h.playerKey=w();const o=i.path.slice(1),e=await j(o);if(!e)return null;const a=new N({formRunnerData:e,queryParams:i.query,userManager:S,logService:null,connectionManager:new T(e.id),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:l=>_.value=l,onStackTraceUpdate:null,onStateUpdate:l=>u.value=l}),s=a.getState();return _.value=s.passwordlessUser,u.value=s.formState,{runnerData:e,controller:a}});C(()=>{var o,e,a,s,l;!((o=t.value)!=null&&o.runnerData)||(e=t.value)!=null&&e.runnerData&&(document.title=(l=(a=t.value)==null?void 0:a.runnerData.welcomeTitle)!=null?l:(s=t.value)==null?void 0:s.runnerData.title)});function v(o,e){P("player",f,o,e)}const I=({path:o})=>{f.push({name:"form",query:i.query,params:{path:o.split("/")}})};L(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",y)}),B(()=>{window.removeEventListener("beforeunload",y)});const y=o=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return o.preventDefault(),""};return(o,e)=>{var a,s;return n(k)?(d(),c("div",z,[W(O)])):n(D)||n(t)===null||u.value===null?(d(),c("div",H,X)):(a=n(t))!=null&&a.runnerData?(d(),c("div",Y,[(d(),q(M,{key:h.playerKey,"form-runner-data":n(t).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(s=_.value)==null?void 0:s.claims.email,class:"player",onNavigate:I,onRedirect:v,onActionClicked:n(t).controller.handleActionClick,onUpdateWidgetErrors:n(t).controller.updateWidgetFrontendErrors,onUpdateWidgetValue:n(t).controller.updateWidgetValue,onLogout:n(t).controller.logout},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onLogout"]))])):(d(),c("div",Z,te))}}});const Be=K(oe,[["__scopeId","data-v-f61ea327"]]);export{Be as default};
//# sourceMappingURL=Form.76b209ed.js.map
