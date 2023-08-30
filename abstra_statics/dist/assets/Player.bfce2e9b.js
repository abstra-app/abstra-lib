import{r as b,m as x}from"./index.d2b139a4.js";import{u as k}from"./uuid.216f8ba6.js";import{F as B,R as K}from"./broker.02f9ba67.js";import{d as L,K as N,J as E,w as F,a1 as m,L as f,A as u,b as s,c as n,e as A,u as w,Q as C,R as T,y as i,t as V}from"./registerWidgets.f8dfb33f.js";import{D as J,m as O}from"./DashPlayer.53ab9cfb.js";import{a as Q}from"./asyncComputed.a78c0f7f.js";import{L as j}from"./CircularLoading.fb5be9eb.js";import"./passwordlessManager.e17ec9bd.js";import"./pubsub.4b58e722.js";import"./Passwordless.7e4ecc5c.js";import"./icons.074088c2.js";import"./executeJs.95fae432.js";import"./PlayerNavbar.76c6ee55.js";import"./Steps.5db1e50f.js";import"./Modal.b37564e2.js";import"./WidgetsFrame.cdf1adec.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.8e142d0a.js";import"./lottie.c7ecbe32.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="11ce49e6-c0ff-428e-9def-b0464c7dc97a",o._sentryDebugIdIdentifier="sentry-dbid-11ce49e6-c0ff-428e-9def-b0464c7dc97a")}catch{}})();const d=o=>(C("data-v-b3aa3ca3"),o=o(),T(),o),z={key:0,class:"loading"},G={key:1,class:"error"},H=d(()=>i("h1",null,"Oops! Something went wrong",-1)),M=d(()=>i("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[H,M],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=d(()=>i("h1",null,"Page not found",-1)),$=d(()=>i("p",null,"The page you requested could not be found.",-1)),ee=[Z,$],ae=L({__name:"Player",setup(o){const a=N(),c=E(),p=F({playerKey:k()});m(a,()=>D());function I(e,t){b("player",c,e,t)}const y=({path:e})=>{c.push({name:"player",query:a.query,params:{path:e.split("/")}})},_=async()=>{p.playerKey=k()};m([()=>a.path,()=>a.query],()=>_());const{loading:P,result:r,error:R,refetch:D}=Q(()=>{var e;return x((e=a.path.slice(1))!=null?e:"")}),h=f(()=>l.value?K.create({formPath:l.value.path}):null),l=f(()=>{var e,t;return(t=(e=r.value)==null?void 0:e.form)!=null?t:null}),v=f(()=>{var t,g;if(!((t=r.value)!=null&&t.dash))return null;const e=O((g=r.value)==null?void 0:g.dash);return e.onRedirect(({url:q,queryParams:S})=>b("player",c,q,S)),e});return m(r,()=>{var e;!r.value||(r.value.form?document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title:r.value.dash&&(document.title=r.value.dash.title))}),(e,t)=>u(P)?(s(),n("div",z,[A(j)])):u(R)?(s(),n("div",G,U)):l.value&&h.value?(s(),n("div",W,[(s(),w(B,{key:p.playerKey,class:"player",form:l.value,"is-preview":!1,params:u(a).query,broker:h.value,"enable-auto-focus":!0,onNavigate:y,onLogout:_,onRedirect:I},null,8,["form","params","broker"]))])):v.value?(s(),n("div",X,[(s(),w(J,{key:p.playerKey,class:"player","is-preview":!1,params:u(a).query,"dash-player-service":v.value,onNavigate:y},null,8,["params","dash-player-service"]))])):(s(),n("div",Y,ee))}});const be=V(ae,[["__scopeId","data-v-b3aa3ca3"]]);export{be as default};
//# sourceMappingURL=Player.bfce2e9b.js.map
