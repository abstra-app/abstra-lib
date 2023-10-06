import{r as b,m as S}from"./index.7c30bb7a.js";import{u as k}from"./uuid.339b60bd.js";import{F as B,R as K}from"./broker.a0a05ab5.js";import{d as E,eA as N,ez as F,H as L,K as m,J as f,u,b as s,et as n,f as A,c as w,eD as C,eE as T,e as i,x as V}from"./outputWidgets.17392370.js";import{D as z,m as H}from"./DashPlayer.c4d9aa5f.js";import{a as J}from"./asyncComputed.76849272.js";import{L as O}from"./CircularLoading.493040c9.js";import"./index.86e4aba0.js";import"./pubsub.fc739490.js";import"./executeJs.a0d1c16f.js";import"./icons.baa5f07a.js";import"./PlayerNavbar.84056dff.js";import"./Steps.7da7efa5.js";import"./Modal.3c911f54.js";import"./WidgetsFrame.36b12b34.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.ce89a8b9.js";import"./geometryUtils.20f74f8c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="5b03fc11-79af-46a1-9f80-4481c1dd1aa4",o._sentryDebugIdIdentifier="sentry-dbid-5b03fc11-79af-46a1-9f80-4481c1dd1aa4")}catch{}})();const d=o=>(C("data-v-b3aa3ca3"),o=o(),T(),o),j={key:0,class:"loading"},G={key:1,class:"error"},M=d(()=>i("h1",null,"Oops! Something went wrong",-1)),Q=d(()=>i("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[M,Q],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=d(()=>i("h1",null,"Page not found",-1)),$=d(()=>i("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],ae=E({__name:"Player",setup(o){const a=N(),l=F(),p=L({playerKey:k()});m(a,()=>R());function I(e,t){b("player",l,e,t)}const y=({path:e})=>{l.push({name:"player",query:a.query,params:{path:e.split("/")}})},_=async()=>{p.playerKey=k()};m([()=>a.path,()=>a.query],()=>_());const{loading:P,result:r,error:D,refetch:R}=J(()=>{var e;return S((e=a.path.slice(1))!=null?e:"")}),h=f(()=>c.value?K.create({formPath:c.value.path}):null),c=f(()=>{var e,t;return(t=(e=r.value)==null?void 0:e.form)!=null?t:null}),v=f(()=>{var t,g;if(!((t=r.value)!=null&&t.dash))return null;const e=H((g=r.value)==null?void 0:g.dash);return e.onRedirect(({url:q,queryParams:x})=>b("player",l,q,x)),e});return m(r,()=>{var e;!r.value||(r.value.form?document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(e,t)=>u(P)?(s(),n("div",j,[A(O)])):u(D)?(s(),n("div",G,U)):c.value&&h.value?(s(),n("div",W,[(s(),w(B,{key:p.playerKey,class:"player",form:c.value,"is-preview":!1,params:u(a).query,broker:h.value,"enable-auto-focus":!0,onNavigate:y,onLogout:_,onRedirect:I},null,8,["form","params","broker"]))])):v.value?(s(),n("div",X,[(s(),w(z,{key:p.playerKey,class:"player","is-preview":!1,params:u(a).query,"dash-player-service":v.value,onNavigate:y},null,8,["params","dash-player-service"]))])):(s(),n("div",Y,ee))}});const ge=V(ae,[["__scopeId","data-v-b3aa3ca3"]]);export{ge as default};
//# sourceMappingURL=Player.b38d7f6d.js.map
