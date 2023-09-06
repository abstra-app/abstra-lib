import{r as b,m as B}from"./index.35c304ed.js";import{u as k}from"./uuid.e6796fb6.js";import{F as S,R as E}from"./broker.8bfd44f6.js";import{d as F,ey as K,ex as N,E as C,G as m,F as y,bu as u,b as s,c as n,e as L,u as w,eB as T,eC as V,er as i,t as A}from"./registerWidgets.751c4cc6.js";import{D as G,m as O}from"./DashPlayer.00e50aa1.js";import{a as j}from"./asyncComputed.4ba8b2d8.js";import{L as z}from"./CircularLoading.7ae0ffc2.js";import"./passwordlessManager.8b22003c.js";import"./pubsub.87f27d54.js";import"./storage.fbef8aee.js";import"./Passwordless.5d103398.js";import"./icons.839289ff.js";import"./executeJs.264e8788.js";import"./PlayerNavbar.5bbcffdf.js";import"./Steps.2317232c.js";import"./Modal.2619bb1d.js";import"./WidgetsFrame.5ca14e96.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.f5e4856d.js";import"./lottie.2da9cd67.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="53fcc043-dd56-4527-9d52-b7046877351c",o._sentryDebugIdIdentifier="sentry-dbid-53fcc043-dd56-4527-9d52-b7046877351c")}catch{}})();const d=o=>(T("data-v-b3aa3ca3"),o=o(),V(),o),H={key:0,class:"loading"},J={key:1,class:"error"},M=d(()=>i("h1",null,"Oops! Something went wrong",-1)),Q=d(()=>i("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[M,Q],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=d(()=>i("h1",null,"Page not found",-1)),$=d(()=>i("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],re=F({__name:"Player",setup(o){const r=K(),c=N(),p=C({playerKey:k()});m(r,()=>D());function I(e,t){b("player",c,e,t)}const _=({path:e})=>{c.push({name:"player",query:r.query,params:{path:e.split("/")}})},f=async()=>{p.playerKey=k()};m([()=>r.path,()=>r.query],()=>f());const{loading:P,result:a,error:R,refetch:D}=j(()=>{var e;return B((e=r.path.slice(1))!=null?e:"")}),h=y(()=>l.value?E.create({formPath:l.value.path}):null),l=y(()=>{var e,t;return(t=(e=a.value)==null?void 0:e.form)!=null?t:null}),v=y(()=>{var t,g;if(!((t=a.value)!=null&&t.dash))return null;const e=O((g=a.value)==null?void 0:g.dash);return e.onRedirect(({url:q,queryParams:x})=>b("player",c,q,x)),e});return m(a,()=>{var e;!a.value||(a.value.form?document.title=(e=a.value.form.welcomeTitle)!=null?e:a.value.form.title:a.value.dash&&(document.title=a.value.dash.title))}),(e,t)=>u(P)?(s(),n("div",H,[L(z)])):u(R)?(s(),n("div",J,U)):l.value&&h.value?(s(),n("div",W,[(s(),w(S,{key:p.playerKey,class:"player",form:l.value,"is-preview":!1,params:u(r).query,broker:h.value,"enable-auto-focus":!0,onNavigate:_,onLogout:f,onRedirect:I},null,8,["form","params","broker"]))])):v.value?(s(),n("div",X,[(s(),w(G,{key:p.playerKey,class:"player","is-preview":!1,params:u(r).query,"dash-player-service":v.value,onNavigate:_},null,8,["params","dash-player-service"]))])):(s(),n("div",Y,ee))}});const ke=A(re,[["__scopeId","data-v-b3aa3ca3"]]);export{ke as default};
//# sourceMappingURL=Player.cbe5b3c1.js.map
