import{r as q}from"./index.85711985.js";import{u as k}from"./uuid.11577f75.js";import{F as x,R as S}from"./broker.46c16d62.js";import{d as B,v as K,a2 as m,K as f,z as a,b as s,c as u,e as E,t as w,J as N,H as O,O as T,Q as F,x as d,q as L}from"./registerWidgets.deaf8486.js";import{D as C,m as V}from"./DashPlayer.b598b1e8.js";import{a as j}from"./asyncComputed.aede4aef.js";import{r as z,n as A}from"./runnerData.9caac0c9.js";import{L as H}from"./CircularLoading.e5ab82ad.js";import"./passwordlessManager.6fe3b008.js";import"./pubsub.39b0446c.js";import"./icons.e2e89521.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.9aada108.js";import"./Passwordless.8c03f2df.js";import"./executeJs.492db764.js";import"./PlayerNavbar.31196aae.js";import"./WidgetsFrame.aec00b29.js";import"./colors.3c27c4d6.js";import"./Modal.64cb459c.js";import"./lottie.b5b96505.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="a75f32cc-7628-4689-8f4c-c433564672d4",r._sentryDebugIdIdentifier="sentry-dbid-a75f32cc-7628-4689-8f4c-c433564672d4")}catch{}})();async function J(r){const e=await fetch(`/_api/${r}`);if(e.status==404)return null;if(!e.ok)throw new Error(await e.text());const{form:n,dash:c}=await e.json();return{form:n&&z(n),dash:c&&A(c)}}const p=r=>(T("data-v-5d17475b"),r=r(),F(),r),Q={key:0,class:"loading"},$={key:1,class:"error"},G=p(()=>d("h1",null,"Oops! Something went wrong",-1)),M=p(()=>d("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),U=[G,M],W={key:2,class:"form"},X={key:3,class:"dash-wrapper"},Y={key:4,class:"error not-found"},Z=p(()=>d("h1",null,"Page not found",-1)),ee=p(()=>d("p",null,"The page you requested could not be found.",-1)),te=[Z,ee],re=B({__name:"Player",setup(r){const e=N(),n=O(),c=K({playerKey:k()});m(e,()=>I());const _=({path:t})=>{n.push({name:"player",query:e.query,params:{path:t.split("/")}})},y=async()=>{c.playerKey=k()};m([()=>e.path,()=>e.query],()=>y());const{loading:b,result:o,error:D,refetch:I}=j(()=>{var t;return J((t=e.path.slice(1))!=null?t:"")}),h=f(()=>l.value?S.create({formPath:l.value.path}):null),l=f(()=>{var t,i;return(i=(t=o.value)==null?void 0:t.form)!=null?i:null}),v=f(()=>{var i,g;if(!((i=o.value)!=null&&i.dash))return null;const t=V((g=o.value)==null?void 0:g.dash);return t.onRedirect(({url:P,queryParams:R})=>q(n,P,R)),t});return m(o,()=>{var t;!o.value||(o.value.form?document.title=(t=o.value.form.welcomeTitle)!=null?t:o.value.form.title:o.value.dash&&(document.title=o.value.dash.title))}),(t,i)=>a(b)?(s(),u("div",Q,[E(H)])):a(D)?(s(),u("div",$,U)):a(l)&&a(h)?(s(),u("div",W,[(s(),w(x,{key:c.playerKey,class:"player",form:a(l),params:a(e).query,broker:a(h),"enable-auto-focus":!0,onNavigate:_,onLogout:y},null,8,["form","params","broker"]))])):a(v)?(s(),u("div",X,[(s(),w(C,{key:c.playerKey,class:"player","is-preview":!1,params:a(e).query,"dash-player-service":a(v),onNavigate:_},null,8,["params","dash-player-service"]))])):(s(),u("div",Y,te))}});const be=L(re,[["__scopeId","data-v-5d17475b"]]);export{be as default};
//# sourceMappingURL=Player.9ea9ea98.js.map
