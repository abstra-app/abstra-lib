import{d as _,ez as w,ey as g,H as D,b as n,et as k,u,c as p,ev as c,bf as P,v as I}from"./outputWidgets.8a1294ac.js";import{D as b,m as x}from"./DashPlayer.be990d0e.js";import{L as B}from"./CircularLoading.51eae7f9.js";import"./index.04ab96ef.js";import{r as R}from"./executeJs.af47093a.js";import{B as q}from"./BackButton.05d35c95.js";import{a as l}from"./asyncComputed.3699cd44.js";import{D as C}from"./dashes.20f3fde0.js";import{W as E}from"./workspaces.744a8260.js";import"./geometryUtils.ec3ac4ff.js";import"./runnerData.9cd8b9cf.js";import"./index.ab2f1daa.js";import"./pubsub.5ff7800d.js";import"./WidgetsFrame.e6aa905a.js";import"./icons.25b21aee.js";import"./url.9a5c0e6d.js";import"./PlayerNavbar.2ca54895.js";import"./Steps.e4aad2cd.js";import"./activeRecord.4f50a80e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="1dfffd4a-458a-4268-9e59-1acd2960e0ff",t._sentryDebugIdIdentifier="sentry-dbid-1dfffd4a-458a-4268-9e59-1acd2960e0ff")}catch{}})();const F=_({__name:"DashPreview",setup(t){const r=w(),s=g(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:y}=l(()=>C.get(r.params.dashPath)),{result:i}=l(()=>E.get()),d=D(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=x(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:h})=>R("preview",s,o,h)),e});return(e,o)=>(n(),k(P,null,[u(v)||!u(a)?(n(),p(B,{key:0,class:"loading",justify:"center"})):c("",!0),d.value?(n(),p(b,{key:1,class:"player",dash:d.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":d.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):c("",!0),u(a)?(n(),p(q,{key:2,onExitFullscreenPreview:f})):c("",!0)],64))}});const Y=I(F,[["__scopeId","data-v-1172cf43"]]);export{Y as default};
//# sourceMappingURL=DashPreview.e2926e1f.js.map
