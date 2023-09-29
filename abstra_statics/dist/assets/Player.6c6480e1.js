import{r as b,m as B}from"./index.9df32b45.js";import{u as k}from"./uuid.f77225ce.js";import{F as S,R as K}from"./broker.640b7bc7.js";import{d as N,ey as C,ex as E,G as F,J as m,H as f,u as c,b as s,er as n,f as L,c as w,eB as T,eC as V,e as i,v as A}from"./registerWidgets.9fce82a0.js";import{D as G,m as H}from"./DashPlayer.79123606.js";import{a as J}from"./asyncComputed.a4b709a3.js";import{L as O}from"./CircularLoading.45bdfef7.js";import"./passwordlessManager.eda842b8.js";import"./pubsub.025cc397.js";import"./storage.ae287dfa.js";import"./Passwordless.0badc2f2.js";import"./icons.1992e13b.js";import"./executeJs.0cb26839.js";import"./PlayerNavbar.80abf434.js";import"./Steps.a44e7d48.js";import"./Modal.3e57b15b.js";import"./WidgetsFrame.28239fa9.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.f47e89b8.js";import"./geometryUtils.22d60cf9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="3b0930e4-e971-48f3-9722-1ff41edaa69c",o._sentryDebugIdIdentifier="sentry-dbid-3b0930e4-e971-48f3-9722-1ff41edaa69c")}catch{}})();const d=o=>(T("data-v-b3aa3ca3"),o=o(),V(),o),j={key:0,class:"loading"},z={key:1,class:"error"},M=d(()=>i("h1",null,"Oops! Something went wrong",-1)),Q=d(()=>i("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[M,Q],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=d(()=>i("h1",null,"Page not found",-1)),$=d(()=>i("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],ae=N({__name:"Player",setup(o){const a=C(),l=E(),p=F({playerKey:k()});m(a,()=>D());function I(e,t){b("player",l,e,t)}const y=({path:e})=>{l.push({name:"player",query:a.query,params:{path:e.split("/")}})},_=async()=>{p.playerKey=k()};m([()=>a.path,()=>a.query],()=>_());const{loading:P,result:r,error:R,refetch:D}=J(()=>{var e;return B((e=a.path.slice(1))!=null?e:"")}),h=f(()=>u.value?K.create({formPath:u.value.path}):null),u=f(()=>{var e,t;return(t=(e=r.value)==null?void 0:e.form)!=null?t:null}),v=f(()=>{var t,g;if(!((t=r.value)!=null&&t.dash))return null;const e=H((g=r.value)==null?void 0:g.dash);return e.onRedirect(({url:q,queryParams:x})=>b("player",l,q,x)),e});return m(r,()=>{var e;!r.value||(r.value.form?document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(e,t)=>c(P)?(s(),n("div",j,[L(O)])):c(R)?(s(),n("div",z,U)):u.value&&h.value?(s(),n("div",W,[(s(),w(S,{key:p.playerKey,class:"player",form:u.value,"is-preview":!1,params:c(a).query,broker:h.value,"enable-auto-focus":!0,onNavigate:y,onLogout:_,onRedirect:I},null,8,["form","params","broker"]))])):v.value?(s(),n("div",X,[(s(),w(G,{key:p.playerKey,class:"player","is-preview":!1,params:c(a).query,"dash-player-service":v.value,onNavigate:y},null,8,["params","dash-player-service"]))])):(s(),n("div",Y,ee))}});const ke=A(ae,[["__scopeId","data-v-b3aa3ca3"]]);export{ke as default};
//# sourceMappingURL=Player.6c6480e1.js.map
