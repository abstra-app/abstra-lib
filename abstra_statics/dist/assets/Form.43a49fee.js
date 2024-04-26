import{u as E}from"./index.c32bd4e1.js";import{d as I,eE as U,eK as C,I as F,r as g,K as R,ax as A,o as L,O as x,u as n,b as d,ew as c,f as B,c as W,eC as q,eD as K,e as p,x as V}from"./outputWidgets.90bea826.js";import{b as M,r as P,c as N,d as T}from"./FormRunner.8f3d5a3b.js";import{a as O}from"./asyncComputed.49586886.js";import{u as w}from"./uuid.ef0c9479.js";import{L as j}from"./CircularLoading.85924fc0.js";import{f as z}from"./api.11022cbf.js";import"./fetch.c885714b.js";import"./pubsub.fa46f282.js";import"./url.730e166b.js";import"./Login.vue_vue_type_script_setup_true_lang.c1120a70.js";import"./Link.5f421869.js";import"./Base.f7101ed8.js";import"./index.42e73454.js";import"./PlayerNavbar.9ab799c1.js";import"./PhKanban.vue.8d08f5eb.js";import"./PhSignOut.vue.f7aeaf40.js";import"./Text.1739e9f1.js";import"./index.4be29bb4.js";import"./Paragraph.adfb7fbd.js";import"./Title.359f569d.js";import"./index.ddd3e42e.js";import"./WidgetsFrame.e41cbbaa.js";import"./Steps.6f5fd166.js";import"./PhInfo.vue.1000ad42.js";import"./Card.58ecbe23.js";import"./TabPane.8611683f.js";import"./hasIn.82c95578.js";import"./runnerData.3e639e3f.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="0cd1d206-e695-45e8-9412-83cc92d4027d",r._sentryDebugIdIdentifier="sentry-dbid-0cd1d206-e695-45e8-9412-83cc92d4027d")}catch{}})();const m=r=>(q("data-v-f61ea327"),r=r(),K(),r),G={key:0,class:"loading"},H={key:1,class:"error"},J=m(()=>p("h1",null,"Oops! Something went wrong",-1)),Q=m(()=>p("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),X=[J,Q],Y={key:2,class:"form"},Z={key:3,class:"error not-found",style:{height:"100vh"}},$=m(()=>p("h1",null,"Page not found",-1)),ee=m(()=>p("p",null,"The page you requested could not be found.",-1)),te=[$,ee],oe=I({__name:"Form",setup(r){const l=U(),f=C(),h=F({playerKey:w()}),u=g(null),_=g(null);R(l,()=>b());const{loading:k,result:t,error:D,refetch:b}=O(async()=>{h.playerKey=w();const o=l.path.slice(1),e=await z(o);if(!e)return null;const a=new N({formRunnerData:e,queryParams:l.query,userManager:E,logService:null,connectionManager:new T(e.id),onRedirect:v,onFormStart:()=>{},onFormEnd:()=>{},onAuthUpdate:i=>_.value=i,onStackTraceUpdate:null,onStateUpdate:i=>u.value=i}),s=a.getState();return _.value=s.passwordlessUser,u.value=s.formState,{runnerData:e,controller:a}});A(()=>{var o,e,a,s,i;!((o=t.value)!=null&&o.runnerData)||(e=t.value)!=null&&e.runnerData&&(document.title=(i=(a=t.value)==null?void 0:a.runnerData.welcomeTitle)!=null?i:(s=t.value)==null?void 0:s.runnerData.title)});function v(o,e){P("player",f,o,e)}const S=({path:o})=>{f.push({name:"form",query:l.query,params:{path:o.split("/")}})};L(async()=>{var e;!((e=window.should_ask_before_leave)==null||e)||window.addEventListener("beforeunload",y)}),x(()=>{window.removeEventListener("beforeunload",y)});const y=o=>{var e;if((e=t.value)!=null&&e.controller.handleCloseAttempt())return o.preventDefault(),""};return(o,e)=>{var a,s;return n(k)?(d(),c("div",G,[B(j)])):n(D)||n(t)===null||u.value===null?(d(),c("div",H,X)):(a=n(t))!=null&&a.runnerData?(d(),c("div",Y,[(d(),W(M,{key:h.playerKey,"form-runner-data":n(t).runnerData,"form-state":u.value,"is-preview":!1,"user-email":(s=_.value)==null?void 0:s.claims.email,class:"player",onNavigate:S,onRedirect:v,onActionClicked:n(t).controller.handleActionClick,onUpdateWidgetErrors:n(t).controller.updateWidgetFrontendErrors,onUpdateWidgetValue:n(t).controller.updateWidgetValue,onLogout:n(t).controller.logout},null,8,["form-runner-data","form-state","user-email","onActionClicked","onUpdateWidgetErrors","onUpdateWidgetValue","onLogout"]))])):(d(),c("div",Z,te))}}});const Le=V(oe,[["__scopeId","data-v-f61ea327"]]);export{Le as default};
//# sourceMappingURL=Form.43a49fee.js.map
