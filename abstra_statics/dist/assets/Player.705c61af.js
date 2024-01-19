import{F as I,r as R,g as B,R as P}from"./FormRunner.b858bd2b.js";import{d as q,eB as x,eA as F,F as D,H as d,G as y,u as p,b as s,ev as c,f as E,c as S,eE as K,eF as L,e as u,v as N}from"./outputWidgets.ed48fa42.js";import{u as h}from"./uuid.9378b107.js";import{a as A}from"./asyncComputed.bb2b1403.js";import{L as C}from"./CircularLoading.96c0f42c.js";import"./url.c9588410.js";import"./index.5862db76.js";import"./pubsub.90864e85.js";import"./icons.92b5bc38.js";import"./PlayerNavbar.0d011448.js";import"./ActionButton.b159bd41.js";import"./WidgetsFrame.f4b304c3.js";import"./index.882ef74f.js";import"./Card.b7ee28eb.js";import"./TabPane.9d812117.js";import"./hasIn.a220eabf.js";import"./index.4f8bb347.js";import"./Text.b5b9d884.js";import"./Link.dd1c00bc.js";import"./Title.89d211e5.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="2496addc-c505-4e14-9ea9-dbca956697c3",o._sentryDebugIdIdentifier="sentry-dbid-2496addc-c505-4e14-9ea9-dbca956697c3")}catch{}})();const i=o=>(K("data-v-485e3719"),o=o(),L(),o),T={key:0,class:"loading"},V={key:1,class:"error"},G=i(()=>u("h1",null,"Oops! Something went wrong",-1)),H=i(()=>u("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),O=[G,H],j={key:2,class:"form"},z={key:3,class:"error not-found",style:{height:"100vh"}},J=i(()=>u("h1",null,"Page not found",-1)),M=i(()=>u("p",null,"The page you requested could not be found.",-1)),Q=[J,M],U=q({__name:"Player",setup(o){const t=x(),l=F(),m=D({playerKey:h()});d(t,()=>w());function v(e,a){R("player",l,e,a)}const g=({path:e})=>{l.push({name:"player",query:t.query,params:{path:e.split("/")}})},_=async()=>{m.playerKey=h()};d([()=>t.path,()=>t.query],()=>_());const{loading:b,result:r,error:k,refetch:w}=A(()=>{var e;return B((e=t.path.slice(1))!=null?e:"")}),f=y(()=>n.value?P.create(n.value.id):null),n=y(()=>{var e,a;return(a=(e=r.value)==null?void 0:e.form)!=null?a:null});return d(r,()=>{var e;!r.value||r.value.form&&(document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title)}),(e,a)=>p(b)?(s(),c("div",T,[E(C)])):p(k)?(s(),c("div",V,O)):n.value&&f.value?(s(),c("div",j,[(s(),S(I,{key:m.playerKey,class:"player",form:n.value,"is-preview":!1,params:p(t).query,broker:f.value,"enable-auto-focus":!0,onNavigate:g,onLogout:_,onRedirect:v},null,8,["form","params","broker"]))])):(s(),c("div",z,Q))}});const fe=N(U,[["__scopeId","data-v-485e3719"]]);export{fe as default};
//# sourceMappingURL=Player.705c61af.js.map
