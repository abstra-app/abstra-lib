import{d as _,ez as w,ey as g,H as D,b as n,et as k,u,c as p,ev as c,bf as P,v as I}from"./outputWidgets.0ece0846.js";import{D as b,m as x}from"./DashPlayer.dafe90c6.js";import{L as B}from"./CircularLoading.6b2b9f0f.js";import"./index.8f7b5e8b.js";import{r as R}from"./executeJs.8b7649d8.js";import{B as q}from"./BackButton.ccb31344.js";import{a as l}from"./asyncComputed.b17b5cdf.js";import{D as C}from"./dashes.42088004.js";import{W as E}from"./workspaces.5e470fa6.js";import"./geometryUtils.6c3bcdc2.js";import"./runnerData.d0edd432.js";import"./index.a14736e9.js";import"./pubsub.36f7c3dd.js";import"./WidgetsFrame.7f002a09.js";import"./icons.0c5e4294.js";import"./url.88345ece.js";import"./PlayerNavbar.7ac83764.js";import"./Steps.83bc6723.js";import"./activeRecord.f46f579b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="3fd935aa-9dac-4855-973e-15ef262710ed",t._sentryDebugIdIdentifier="sentry-dbid-3fd935aa-9dac-4855-973e-15ef262710ed")}catch{}})();const F=_({__name:"DashPreview",setup(t){const r=w(),s=g(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:y}=l(()=>C.get(r.params.dashPath)),{result:i}=l(()=>E.get()),d=D(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=x(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:h})=>R("preview",s,o,h)),e});return(e,o)=>(n(),k(P,null,[u(v)||!u(a)?(n(),p(B,{key:0,class:"loading",justify:"center"})):c("",!0),d.value?(n(),p(b,{key:1,class:"player",dash:d.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":d.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):c("",!0),u(a)?(n(),p(q,{key:2,onExitFullscreenPreview:f})):c("",!0)],64))}});const Y=I(F,[["__scopeId","data-v-1172cf43"]]);export{Y as default};
//# sourceMappingURL=DashPreview.9a3782ad.js.map
