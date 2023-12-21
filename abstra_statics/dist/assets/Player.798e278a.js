import{F as I,r as R,g as B,R as P}from"./FormRunner.12a48892.js";import{d as q,eB as x,eA as F,F as D,H as d,G as y,u as p,b as s,ev as c,f as E,c as S,eE as K,eF as L,e as u,v as N}from"./outputWidgets.bf3b4f42.js";import{u as h}from"./uuid.db38b54c.js";import{a as A}from"./asyncComputed.46383282.js";import{L as C}from"./CircularLoading.3dd720b8.js";import"./url.ddd8c688.js";import"./index.cbc70b90.js";import"./pubsub.44e453af.js";import"./icons.1d8f5d41.js";import"./PlayerNavbar.6b24e924.js";import"./ActionButton.d6e337fa.js";import"./WidgetsFrame.654e62ba.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="f596448c-0a2f-4db9-8cb2-939a3c55db85",o._sentryDebugIdIdentifier="sentry-dbid-f596448c-0a2f-4db9-8cb2-939a3c55db85")}catch{}})();const l=o=>(K("data-v-485e3719"),o=o(),L(),o),T={key:0,class:"loading"},V={key:1,class:"error"},G=l(()=>u("h1",null,"Oops! Something went wrong",-1)),H=l(()=>u("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),O=[G,H],j={key:2,class:"form"},z={key:3,class:"error not-found",style:{height:"100vh"}},J=l(()=>u("h1",null,"Page not found",-1)),M=l(()=>u("p",null,"The page you requested could not be found.",-1)),Q=[J,M],U=q({__name:"Player",setup(o){const t=x(),i=F(),_=D({playerKey:h()});d(t,()=>w());function v(e,a){R("player",i,e,a)}const g=({path:e})=>{i.push({name:"player",query:t.query,params:{path:e.split("/")}})},f=async()=>{_.playerKey=h()};d([()=>t.path,()=>t.query],()=>f());const{loading:b,result:r,error:k,refetch:w}=A(()=>{var e;return B((e=t.path.slice(1))!=null?e:"")}),m=y(()=>n.value?P.create(n.value.id):null),n=y(()=>{var e,a;return(a=(e=r.value)==null?void 0:e.form)!=null?a:null});return d(r,()=>{var e;!r.value||r.value.form&&(document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title)}),(e,a)=>p(b)?(s(),c("div",T,[E(C)])):p(k)?(s(),c("div",V,O)):n.value&&m.value?(s(),c("div",j,[(s(),S(I,{key:_.playerKey,class:"player",form:n.value,"is-preview":!1,params:p(t).query,broker:m.value,"enable-auto-focus":!0,onNavigate:g,onLogout:f,onRedirect:v},null,8,["form","params","broker"]))])):(s(),c("div",z,Q))}});const ce=N(U,[["__scopeId","data-v-485e3719"]]);export{ce as default};
//# sourceMappingURL=Player.798e278a.js.map
