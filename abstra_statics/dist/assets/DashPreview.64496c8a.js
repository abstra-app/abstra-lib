import{d as _,ez as w,ey as g,H as D,b as n,et as k,u,c as p,ev as l,b9 as b,v as P}from"./outputWidgets.e1ef7566.js";import{D as I,m as x}from"./index.fa55747a.js";import{L as B}from"./CircularLoading.29bfc17b.js";import"./index.48a00a36.js";import{r as R}from"./executeJs.fdfe2d8e.js";import{B as q}from"./BackButton.2e2ef24f.js";import{a as m}from"./asyncComputed.7df7ace6.js";import{D as C}from"./dashes.53b424a5.js";import{W as E}from"./workspaces.8db5b540.js";import"./WidgetsFrame.31629907.js";import"./icons.c5a201f5.js";import"./geometryUtils.221d99a2.js";import"./runnerData.90836231.js";import"./index.4ddfda79.js";import"./pubsub.c47edaa0.js";import"./url.8a9eed68.js";import"./PlayerNavbar.8a9eeb2d.js";import"./Steps.7ec910bf.js";import"./activeRecord.4c9e636d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="7390cee5-0f90-4b2f-99a6-410af1c3fe21",t._sentryDebugIdIdentifier="sentry-dbid-7390cee5-0f90-4b2f-99a6-410af1c3fe21")}catch{}})();const F=_({__name:"DashPreview",setup(t){const r=w(),s=g(),d=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:y}=m(()=>C.get(r.params.dashPath)),{result:i}=m(()=>E.get()),c=D(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=x(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:h})=>R("preview",s,o,h)),e});return(e,o)=>(n(),k(b,null,[u(v)||!u(a)?(n(),p(B,{key:0,class:"loading",justify:"center"})):l("",!0),c.value?(n(),p(I,{key:1,class:"player",dash:c.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":c.value,onNavigate:d},null,8,["dash","params","dash-player-service"])):l("",!0),u(a)?(n(),p(q,{key:2,onExitFullscreenPreview:f})):l("",!0)],64))}});const Y=P(F,[["__scopeId","data-v-1172cf43"]]);export{Y as default};
//# sourceMappingURL=DashPreview.64496c8a.js.map
