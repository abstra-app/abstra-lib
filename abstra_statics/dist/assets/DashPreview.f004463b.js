import{d as _,eA as w,ez as b,J as g,b as n,et as D,u,c as d,ew as l,bq as k,x as P}from"./outputWidgets.bb3f51db.js";import{D as I,m as x}from"./DashPlayer.ca6de561.js";import{L as q}from"./CircularLoading.893ea285.js";import{r as B}from"./index.3783ccb5.js";import{B as R}from"./BackButton.dfe5b77c.js";import{a as c}from"./asyncComputed.2cd59694.js";import{D as C}from"./dashes.94428951.js";import{W as E}from"./workspaces.ab246843.js";import"./executeJs.74fefbcf.js";import"./icons.897a5c09.js";import"./index.7ee89b04.js";import"./pubsub.40a68d95.js";import"./PlayerNavbar.80d024be.js";import"./Steps.de8f2638.js";import"./Modal.abeeaf70.js";import"./geometryUtils.749351de.js";import"./WidgetsFrame.089ae92c.js";import"./activeRecord.c79010ff.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="692473be-25d0-465a-a11a-40baaba3abe8",t._sentryDebugIdIdentifier="sentry-dbid-692473be-25d0-465a-a11a-40baaba3abe8")}catch{}})();const F=_({__name:"DashPreview",setup(t){const a=w(),s=b(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:a.query}),h()):s.push({name:"formPreview",params:{formId:e},query:a.query})},f=()=>{var e;!((e=r.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(r.value.path)}`)},{loading:v,result:r,refetch:h}=c(()=>C.get(a.params.dashPath)),{result:i}=c(()=>E.get()),p=g(()=>{if(!r.value||!i.value||!r.value.makeRunnerData(i.value))return null;const e=x(r.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:y})=>B("preview",s,o,y)),e});return(e,o)=>(n(),D(k,null,[u(v)||!u(r)?(n(),d(q,{key:0,class:"loading",justify:"center"})):l("",!0),p.value?(n(),d(I,{key:1,class:"player",dash:p.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(a).query,"dash-player-service":p.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):l("",!0),u(r)?(n(),d(R,{key:2,onExitFullscreenPreview:f})):l("",!0)],64))}});const X=P(F,[["__scopeId","data-v-1172cf43"]]);export{X as default};
//# sourceMappingURL=DashPreview.f004463b.js.map
