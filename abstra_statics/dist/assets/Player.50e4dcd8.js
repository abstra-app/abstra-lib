import{d as x,ez as B,ey as K,G as N,J as m,H as y,u as c,b as s,et as n,f as C,c as g,eC as E,eD as F,e as i,v as L}from"./outputWidgets.7bdcec0a.js";import"./index.15e46fc6.js";import{r as k,g as T}from"./executeJs.4c06c20d.js";import{u as w}from"./uuid.d3821bce.js";import{F as V,R as z}from"./FormRunner.5c24c21a.js";import{D as A,m as G}from"./index.9ac09fcc.js";import{a as H}from"./asyncComputed.cfb98789.js";import{L as J}from"./CircularLoading.724accbb.js";import"./runnerData.9bca67ea.js";import"./url.5caacc63.js";import"./icons.6934ad19.js";import"./index.bf6ee632.js";import"./pubsub.c455bec9.js";import"./PlayerNavbar.bfe2d6d4.js";import"./Steps.b1376ce3.js";import"./WidgetsFrame.63ba4d68.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.23feb2a8.js";import"./geometryUtils.2ac81865.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="b4ed4b44-26d0-4229-a7f5-a4aa892ab520",o._sentryDebugIdIdentifier="sentry-dbid-b4ed4b44-26d0-4229-a7f5-a4aa892ab520")}catch{}})();const d=o=>(E("data-v-b3aa3ca3"),o=o(),F(),o),O={key:0,class:"loading"},j={key:1,class:"error"},M=d(()=>i("h1",null,"Oops! Something went wrong",-1)),Q=d(()=>i("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[M,Q],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=d(()=>i("h1",null,"Page not found",-1)),$=d(()=>i("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],ae=x({__name:"Player",setup(o){const a=B(),l=K(),p=N({playerKey:w()});m(a,()=>R());function I(e,t){k("player",l,e,t)}const _=({path:e})=>{l.push({name:"player",query:a.query,params:{path:e.split("/")}})},f=async()=>{p.playerKey=w()};m([()=>a.path,()=>a.query],()=>f());const{loading:P,result:r,error:D,refetch:R}=H(()=>{var e;return T((e=a.path.slice(1))!=null?e:"")}),h=y(()=>u.value?z.create({formPath:u.value.path}):null),u=y(()=>{var e,t;return(t=(e=r.value)==null?void 0:e.form)!=null?t:null}),v=y(()=>{var t,b;if(!((t=r.value)!=null&&t.dash))return null;const e=G((b=r.value)==null?void 0:b.dash);return e.onRedirect(({url:q,queryParams:S})=>k("player",l,q,S)),e});return m(r,()=>{var e;!r.value||(r.value.form?document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(e,t)=>c(P)?(s(),n("div",O,[C(J)])):c(D)?(s(),n("div",j,U)):u.value&&h.value?(s(),n("div",W,[(s(),g(V,{key:p.playerKey,class:"player",form:u.value,"is-preview":!1,params:c(a).query,broker:h.value,"enable-auto-focus":!0,onNavigate:_,onLogout:f,onRedirect:I},null,8,["form","params","broker"]))])):v.value?(s(),n("div",X,[(s(),g(A,{key:p.playerKey,class:"player","is-preview":!1,params:c(a).query,"dash-player-service":v.value,onNavigate:_},null,8,["params","dash-player-service"]))])):(s(),n("div",Y,ee))}});const ge=L(ae,[["__scopeId","data-v-b3aa3ca3"]]);export{ge as default};
//# sourceMappingURL=Player.50e4dcd8.js.map
