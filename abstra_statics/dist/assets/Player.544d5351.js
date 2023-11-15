import{r as g,g as S}from"./executeJs.aa78fba7.js";import{d as x,eB as F,eA as E,F as K,H as m,G as f,u as c,b as s,eu as n,f as N,c as k,eE as L,eF as A,e as i,t as C}from"./outputWidgets.ba81a3ef.js";import{u as w}from"./uuid.a30f4eab.js";import{F as T,R as V}from"./FormRunner.1dadf560.js";import{D as G,m as H}from"./index.130ee0fa.js";import{a as O}from"./asyncComputed.07af8e5d.js";import{L as j}from"./CircularLoading.bbf10178.js";import"./runnerData.c0ae74af.js";import"./url.596dfd3e.js";import"./icons.7c2025d0.js";import"./index.fcaf3261.js";import"./pubsub.289ba836.js";import"./PlayerNavbar.596103bb.js";import"./Steps.6c20c4bd.js";import"./WidgetsFrame.f0576817.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.200fcf31.js";import"./geometryUtils.7bae0b89.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="2c992a93-32ab-490b-a93b-1d07751d6ff5",o._sentryDebugIdIdentifier="sentry-dbid-2c992a93-32ab-490b-a93b-1d07751d6ff5")}catch{}})();const d=o=>(L("data-v-b3aa3ca3"),o=o(),A(),o),z={key:0,class:"loading"},J={key:1,class:"error"},M=d(()=>i("h1",null,"Oops! Something went wrong",-1)),Q=d(()=>i("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[M,Q],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=d(()=>i("h1",null,"Page not found",-1)),$=d(()=>i("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],ae=x({__name:"Player",setup(o){const a=F(),l=E(),p=K({playerKey:w()});m(a,()=>D());function I(e,t){g("player",l,e,t)}const y=({path:e})=>{l.push({name:"player",query:a.query,params:{path:e.split("/")}})},_=async()=>{p.playerKey=w()};m([()=>a.path,()=>a.query],()=>_());const{loading:P,result:r,error:R,refetch:D}=O(()=>{var e;return S((e=a.path.slice(1))!=null?e:"")}),h=f(()=>u.value?V.create({formPath:u.value.path}):null),u=f(()=>{var e,t;return(t=(e=r.value)==null?void 0:e.form)!=null?t:null}),v=f(()=>{var t,b;if(!((t=r.value)!=null&&t.dash))return null;const e=H((b=r.value)==null?void 0:b.dash);return e.onRedirect(({url:q,queryParams:B})=>g("player",l,q,B)),e});return m(r,()=>{var e;!r.value||(r.value.form?document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(e,t)=>c(P)?(s(),n("div",z,[N(j)])):c(R)?(s(),n("div",J,U)):u.value&&h.value?(s(),n("div",W,[(s(),k(T,{key:p.playerKey,class:"player",form:u.value,"is-preview":!1,params:c(a).query,broker:h.value,"enable-auto-focus":!0,onNavigate:y,onLogout:_,onRedirect:I},null,8,["form","params","broker"]))])):v.value?(s(),n("div",X,[(s(),k(G,{key:p.playerKey,class:"player","is-preview":!1,params:c(a).query,"dash-player-service":v.value,onNavigate:y},null,8,["params","dash-player-service"]))])):(s(),n("div",Y,ee))}});const be=C(ae,[["__scopeId","data-v-b3aa3ca3"]]);export{be as default};
//# sourceMappingURL=Player.544d5351.js.map
