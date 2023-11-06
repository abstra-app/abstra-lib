import{d as x,ez as B,ey as K,G as N,J as m,H as y,u,b as s,et as n,f as C,c as g,eC as E,eD as F,e as i,v as L}from"./outputWidgets.3a1a3161.js";import"./index.62bc48c6.js";import{r as k,g as T}from"./executeJs.dd9ee0fd.js";import{u as w}from"./uuid.d5a19964.js";import{F as V,R as z}from"./FormRunner.c4be366b.js";import{D as A,m as G}from"./index.4d8d646c.js";import{a as H}from"./asyncComputed.3068c2f0.js";import{L as J}from"./CircularLoading.ad65c002.js";import"./runnerData.f0cfba63.js";import"./url.8abf1d81.js";import"./icons.d8ed105c.js";import"./index.708dd591.js";import"./pubsub.2dc7d89a.js";import"./PlayerNavbar.ee3d8f66.js";import"./Steps.24c62716.js";import"./WidgetsFrame.1b51b23f.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.2cee2bbd.js";import"./geometryUtils.9c5d5f04.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="12e79d24-8c98-49c1-8db8-768abe75bba4",o._sentryDebugIdIdentifier="sentry-dbid-12e79d24-8c98-49c1-8db8-768abe75bba4")}catch{}})();const d=o=>(E("data-v-b3aa3ca3"),o=o(),F(),o),O={key:0,class:"loading"},j={key:1,class:"error"},M=d(()=>i("h1",null,"Oops! Something went wrong",-1)),Q=d(()=>i("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[M,Q],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=d(()=>i("h1",null,"Page not found",-1)),$=d(()=>i("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],ae=x({__name:"Player",setup(o){const a=B(),l=K(),p=N({playerKey:w()});m(a,()=>R());function I(e,t){k("player",l,e,t)}const _=({path:e})=>{l.push({name:"player",query:a.query,params:{path:e.split("/")}})},f=async()=>{p.playerKey=w()};m([()=>a.path,()=>a.query],()=>f());const{loading:P,result:r,error:D,refetch:R}=H(()=>{var e;return T((e=a.path.slice(1))!=null?e:"")}),h=y(()=>c.value?z.create({formPath:c.value.path}):null),c=y(()=>{var e,t;return(t=(e=r.value)==null?void 0:e.form)!=null?t:null}),v=y(()=>{var t,b;if(!((t=r.value)!=null&&t.dash))return null;const e=G((b=r.value)==null?void 0:b.dash);return e.onRedirect(({url:q,queryParams:S})=>k("player",l,q,S)),e});return m(r,()=>{var e;!r.value||(r.value.form?document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(e,t)=>u(P)?(s(),n("div",O,[C(J)])):u(D)?(s(),n("div",j,U)):c.value&&h.value?(s(),n("div",W,[(s(),g(V,{key:p.playerKey,class:"player",form:c.value,"is-preview":!1,params:u(a).query,broker:h.value,"enable-auto-focus":!0,onNavigate:_,onLogout:f,onRedirect:I},null,8,["form","params","broker"]))])):v.value?(s(),n("div",X,[(s(),g(A,{key:p.playerKey,class:"player","is-preview":!1,params:u(a).query,"dash-player-service":v.value,onNavigate:_},null,8,["params","dash-player-service"]))])):(s(),n("div",Y,ee))}});const ge=L(ae,[["__scopeId","data-v-b3aa3ca3"]]);export{ge as default};
//# sourceMappingURL=Player.b43a7fdc.js.map
