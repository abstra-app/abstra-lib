import{d as _,ez as w,ey as g,G as D,b as n,et as k,u,c as p,ev as l,b8 as b,t as P}from"./outputWidgets.0fb707c7.js";import{D as I,m as x}from"./index.e27d0d3f.js";import{L as B}from"./CircularLoading.1ef881a2.js";import{r as R}from"./executeJs.0928a564.js";import{B as q}from"./BackButton.0c9cf904.js";import{a as d}from"./asyncComputed.a0ca296c.js";import{D as C}from"./dashes.732fbcbe.js";import{W as E}from"./workspaces.3d9f34c7.js";import"./WidgetsFrame.06b01801.js";import"./icons.24a85994.js";import"./geometryUtils.488ad0bd.js";import"./runnerData.123d166f.js";import"./index.4da42521.js";import"./pubsub.7d8bce56.js";import"./url.d43b75f5.js";import"./PlayerNavbar.64dd8421.js";import"./Steps.4891f1c9.js";import"./activeRecord.204186f3.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="278e4e25-00fc-433f-93af-2196b37f935a",t._sentryDebugIdIdentifier="sentry-dbid-278e4e25-00fc-433f-93af-2196b37f935a")}catch{}})();const F=_({__name:"DashPreview",setup(t){const r=w(),s=g(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:y}=d(()=>C.get(r.params.dashPath)),{result:i}=d(()=>E.get()),c=D(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=x(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:h})=>R("preview",s,o,h)),e});return(e,o)=>(n(),k(b,null,[u(v)||!u(a)?(n(),p(B,{key:0,class:"loading",justify:"center"})):l("",!0),c.value?(n(),p(I,{key:1,class:"player",dash:c.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":c.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):l("",!0),u(a)?(n(),p(q,{key:2,onExitFullscreenPreview:f})):l("",!0)],64))}});const X=P(F,[["__scopeId","data-v-1172cf43"]]);export{X as default};
//# sourceMappingURL=DashPreview.689e6568.js.map
