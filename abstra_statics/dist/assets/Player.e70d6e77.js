import{F as I,r as R,R as B}from"./FormRunner.2e2448bf.js";import{d as P,eB as q,eA as x,G as D,J as p,H as y,u as d,b as s,ev as i,f as E,c as F,eE as S,eF as K,e as c,v as L}from"./outputWidgets.bb2f46e4.js";import{u as h}from"./uuid.256217c5.js";import{a as N}from"./asyncComputed.8bd59622.js";import{a as A}from"./api.e72304fd.js";import{L as C}from"./CircularLoading.25972084.js";import"./url.1b83203f.js";import"./Passwordless.9f672d31.js";import"./index.43167b0d.js";import"./pubsub.9e4f8bfd.js";import"./icons.94ad51fe.js";import"./PlayerNavbar.4f2f7033.js";import"./ActionButton.dd373f26.js";import"./WidgetsFrame.113f7141.js";import"./index.2fc0d039.js";import"./Base.3e5c9785.js";import"./Link.b478c0f2.js";import"./Paragraph.c54bf5b6.js";import"./Text.3cea9169.js";import"./Title.85b45f4d.js";import"./Card.37a856a7.js";import"./TabPane.cc681b73.js";import"./hasIn.9a8a8af5.js";import"./runnerData.94af0e51.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="4457f453-f046-4cf0-8a76-8ad7cacb4193",o._sentryDebugIdIdentifier="sentry-dbid-4457f453-f046-4cf0-8a76-8ad7cacb4193")}catch{}})();const u=o=>(S("data-v-485e3719"),o=o(),K(),o),T={key:0,class:"loading"},V={key:1,class:"error"},G=u(()=>c("h1",null,"Oops! Something went wrong",-1)),H=u(()=>c("p",null,"An unknown error ocurred. Please try again or contact support.",-1)),J=[G,H],O={key:2,class:"form"},j={key:3,class:"error not-found",style:{height:"100vh"}},z=u(()=>c("h1",null,"Page not found",-1)),M=u(()=>c("p",null,"The page you requested could not be found.",-1)),Q=[z,M],U=P({__name:"Player",setup(o){const t=q(),l=x(),m=D({playerKey:h()});p(t,()=>w());function v(e,a){R("player",l,e,a)}const g=({path:e})=>{l.push({name:"player",query:t.query,params:{path:e.split("/")}})},f=async()=>{m.playerKey=h()};p([()=>t.path,()=>t.query],()=>f());const{loading:b,result:r,error:k,refetch:w}=N(()=>{var e;return A((e=t.path.slice(1))!=null?e:"")}),_=y(()=>n.value?B.create(n.value.id):null),n=y(()=>{var e,a;return(a=(e=r.value)==null?void 0:e.form)!=null?a:null});return p(r,()=>{var e;!r.value||r.value.form&&(document.title=(e=r.value.form.welcomeTitle)!=null?e:r.value.form.title)}),(e,a)=>d(b)?(s(),i("div",T,[E(C)])):d(k)?(s(),i("div",V,J)):n.value&&_.value?(s(),i("div",O,[(s(),F(I,{key:m.playerKey,class:"player",form:n.value,"is-preview":!1,params:d(t).query,broker:_.value,"enable-auto-focus":!0,onNavigate:g,onLogout:f,onRedirect:v},null,8,["form","params","broker"]))])):(s(),i("div",j,Q))}});const ge=L(U,[["__scopeId","data-v-485e3719"]]);export{ge as default};
//# sourceMappingURL=Player.e70d6e77.js.map
