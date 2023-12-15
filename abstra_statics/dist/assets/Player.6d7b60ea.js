import{F as I,r as R,g as B,R as P}from"./FormRunner.835904f8.js";import{d as q,eB as x,eA as F,F as D,H as d,G as y,u as p,b as s,ev as u,f as E,c as S,eE as K,eF as L,e as c,v as N}from"./outputWidgets.b70b72c1.js";import{u as v}from"./uuid.f777b00a.js";import{a as A}from"./asyncComputed.c614e26c.js";import{L as C}from"./CircularLoading.d65427b4.js";import"./url.e25f7878.js";import"./index.151e1899.js";import"./pubsub.d6047a30.js";import"./icons.5208d8fc.js";import"./PlayerNavbar.a1ef0657.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.b979489b.js";import"./WidgetsFrame.eabe18f2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="abaeafd0-155e-466b-987b-1f4640854661",o._sentryDebugIdIdentifier="sentry-dbid-abaeafd0-155e-466b-987b-1f4640854661")}catch{}})();const l=o=>(K("data-v-1e2a2c24"),o=o(),L(),o),T={key:0,class:"loading"},V={key:1,class:"error"},G=l(()=>c("h1",null,"Oops! Something went wrong",-1)),H=l(()=>c("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),O=[G,H],j={key:2,class:"form"},z={key:3,class:"error not-found"},J=l(()=>c("h1",null,"Page not found",-1)),M=l(()=>c("p",null,"The page you requested could not be found.",-1)),Q=[J,M],U=q({__name:"Player",setup(o){const t=x(),i=F(),_=D({playerKey:v()});d(t,()=>w());function h(e,a){R("player",i,e,a)}const g=({path:e})=>{i.push({name:"player",query:t.query,params:{path:e.split("/")}})},f=async()=>{_.playerKey=v()};d([()=>t.path,()=>t.query],()=>f());const{loading:b,result:r,error:k,refetch:w}=A(()=>{var e;return B((e=t.path.slice(1))!=null?e:"")}),m=y(()=>n.value?P.create(n.value.id):null),n=y(()=>{var e,a;return(a=(e=r.value)==null?void 0:e.form)!=null?a:null});return d(r,()=>{var e;!r.value||r.value.form&&(document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title)}),(e,a)=>p(b)?(s(),u("div",T,[E(C)])):p(k)?(s(),u("div",V,O)):n.value&&m.value?(s(),u("div",j,[(s(),S(I,{key:_.playerKey,class:"player",form:n.value,"is-preview":!1,params:p(t).query,broker:m.value,"enable-auto-focus":!0,onNavigate:g,onLogout:f,onRedirect:h},null,8,["form","params","broker"]))])):(s(),u("div",z,Q))}});const ue=N(U,[["__scopeId","data-v-1e2a2c24"]]);export{ue as default};
//# sourceMappingURL=Player.6d7b60ea.js.map
