import{r as g,m as B}from"./index.9779cdc8.js";import{u as k}from"./uuid.77839399.js";import{F as S,R as K}from"./broker.0927a43d.js";import{d as N,ey as C,ex as E,G as F,J as m,H as f,u as c,b as s,er as n,f as L,c as w,eB as T,eC as V,e as i,v as A}from"./registerWidgets.586d7870.js";import{D as G,m as H}from"./DashPlayer.e8d24b6d.js";import{a as J}from"./asyncComputed.74bef820.js";import{L as O}from"./CircularLoading.1e307023.js";import"./passwordlessManager.f0ac9605.js";import"./pubsub.ac7c64c1.js";import"./storage.35447a43.js";import"./Passwordless.a7f16074.js";import"./icons.ebb09c51.js";import"./executeJs.97fdd758.js";import"./PlayerNavbar.31fe93a9.js";import"./Steps.60011eb0.js";import"./Modal.3308386a.js";import"./WidgetsFrame.abe09d3e.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.9b760861.js";import"./geometryUtils.3d5742d2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="42fb8524-2b4f-402f-b5e3-bee42f9e1211",o._sentryDebugIdIdentifier="sentry-dbid-42fb8524-2b4f-402f-b5e3-bee42f9e1211")}catch{}})();const p=o=>(T("data-v-b3aa3ca3"),o=o(),V(),o),j={key:0,class:"loading"},z={key:1,class:"error"},M=p(()=>i("h1",null,"Oops! Something went wrong",-1)),Q=p(()=>i("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[M,Q],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=p(()=>i("h1",null,"Page not found",-1)),$=p(()=>i("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],re=N({__name:"Player",setup(o){const r=C(),l=E(),d=F({playerKey:k()});m(r,()=>D());function I(e,t){g("player",l,e,t)}const y=({path:e})=>{l.push({name:"player",query:r.query,params:{path:e.split("/")}})},_=async()=>{d.playerKey=k()};m([()=>r.path,()=>r.query],()=>_());const{loading:P,result:a,error:R,refetch:D}=J(()=>{var e;return B((e=r.path.slice(1))!=null?e:"")}),h=f(()=>u.value?K.create({formPath:u.value.path}):null),u=f(()=>{var e,t;return(t=(e=a.value)==null?void 0:e.form)!=null?t:null}),v=f(()=>{var t,b;if(!((t=a.value)!=null&&t.dash))return null;const e=H((b=a.value)==null?void 0:b.dash);return e.onRedirect(({url:q,queryParams:x})=>g("player",l,q,x)),e});return m(a,()=>{var e;!a.value||(a.value.form?document.title=(e=a.value.form.welcomeTitle)!=null?e:a.value.form.title:a.value.dash&&(document.title=a.value.dash.title))}),(e,t)=>c(P)?(s(),n("div",j,[L(O)])):c(R)?(s(),n("div",z,U)):u.value&&h.value?(s(),n("div",W,[(s(),w(S,{key:d.playerKey,class:"player",form:u.value,"is-preview":!1,params:c(r).query,broker:h.value,"enable-auto-focus":!0,onNavigate:y,onLogout:_,onRedirect:I},null,8,["form","params","broker"]))])):v.value?(s(),n("div",X,[(s(),w(G,{key:d.playerKey,class:"player","is-preview":!1,params:c(r).query,"dash-player-service":v.value,onNavigate:y},null,8,["params","dash-player-service"]))])):(s(),n("div",Y,ee))}});const ke=A(re,[["__scopeId","data-v-b3aa3ca3"]]);export{ke as default};
//# sourceMappingURL=Player.ccb662f7.js.map
