import{F as I,r as R,g as B,R as P}from"./FormRunner.4fcacf70.js";import{d as q,eB as x,eA as F,F as D,H as d,G as y,u as p,b as s,ev as c,f as E,c as S,eE as K,eF as L,e as u,v as N}from"./outputWidgets.dd4991ea.js";import{u as v}from"./uuid.c49f2f15.js";import{a as A}from"./asyncComputed.b0684120.js";import{L as C}from"./CircularLoading.7530df21.js";import"./url.7f3e79bf.js";import"./index.d214dea3.js";import"./pubsub.5df81d64.js";import"./icons.2f78ad8b.js";import"./PlayerNavbar.72d47126.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.a2809316.js";import"./WidgetsFrame.8b393e58.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="fc6a30ed-a974-42f3-bb05-453005718669",o._sentryDebugIdIdentifier="sentry-dbid-fc6a30ed-a974-42f3-bb05-453005718669")}catch{}})();const l=o=>(K("data-v-1e2a2c24"),o=o(),L(),o),T={key:0,class:"loading"},V={key:1,class:"error"},G=l(()=>u("h1",null,"Oops! Something went wrong",-1)),H=l(()=>u("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),O=[G,H],j={key:2,class:"form"},z={key:3,class:"error not-found"},J=l(()=>u("h1",null,"Page not found",-1)),M=l(()=>u("p",null,"The page you requested could not be found.",-1)),Q=[J,M],U=q({__name:"Player",setup(o){const t=x(),i=F(),_=D({playerKey:v()});d(t,()=>w());function h(e,a){R("player",i,e,a)}const g=({path:e})=>{i.push({name:"player",query:t.query,params:{path:e.split("/")}})},f=async()=>{_.playerKey=v()};d([()=>t.path,()=>t.query],()=>f());const{loading:b,result:r,error:k,refetch:w}=A(()=>{var e;return B((e=t.path.slice(1))!=null?e:"")}),m=y(()=>n.value?P.create(n.value.id):null),n=y(()=>{var e,a;return(a=(e=r.value)==null?void 0:e.form)!=null?a:null});return d(r,()=>{var e;!r.value||r.value.form&&(document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title)}),(e,a)=>p(b)?(s(),c("div",T,[E(C)])):p(k)?(s(),c("div",V,O)):n.value&&m.value?(s(),c("div",j,[(s(),S(I,{key:_.playerKey,class:"player",form:n.value,"is-preview":!1,params:p(t).query,broker:m.value,"enable-auto-focus":!0,onNavigate:g,onLogout:f,onRedirect:h},null,8,["form","params","broker"]))])):(s(),c("div",z,Q))}});const ce=N(U,[["__scopeId","data-v-1e2a2c24"]]);export{ce as default};
//# sourceMappingURL=Player.27b958d2.js.map
