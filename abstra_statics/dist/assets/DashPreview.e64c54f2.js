import{d as _,ey as w,ex as g,F as D,b as n,c as b,bu as u,u as p,eu as d,bw as k,t as P}from"./registerWidgets.0d6f36c3.js";import{D as I,m as x}from"./DashPlayer.8053bece.js";import{L as B}from"./CircularLoading.c1ba3036.js";import{r as R}from"./index.d832b0e2.js";import{B as q}from"./BackButton.7eb3f856.js";import{a as l}from"./asyncComputed.f5c93ddf.js";import{D as C}from"./dashes.de6482f6.js";import{W as F}from"./workspaces.5ee373e9.js";import"./executeJs.0eeb9888.js";import"./PlayerNavbar.437d5d77.js";import"./icons.0e440585.js";import"./Steps.f9247165.js";import"./Modal.04b37ba8.js";import"./passwordlessManager.7ee1fbd9.js";import"./pubsub.c204a78d.js";import"./storage.674259be.js";import"./Passwordless.a68e6afc.js";import"./WidgetsFrame.20e6738d.js";import"./lottie.aa3f8e33.js";import"./activeRecord.43bccff7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="627319d2-5cc4-43d4-9e53-53ebaaf31ba9",t._sentryDebugIdIdentifier="sentry-dbid-627319d2-5cc4-43d4-9e53-53ebaaf31ba9")}catch{}})();const E=_({__name:"DashPreview",setup(t){const r=w(),s=g(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):s.push({name:"formPreview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:y}=l(()=>C.get(r.params.dashPath)),{result:i}=l(()=>F.get()),c=D(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=x(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:h})=>R("preview",s,o,h)),e});return(e,o)=>(n(),b(k,null,[u(v)||!u(a)?(n(),p(B,{key:0,class:"loading",justify:"center"})):d("",!0),c.value?(n(),p(I,{key:1,class:"player",dash:c.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":c.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):d("",!0),u(a)?(n(),p(q,{key:2,onExitFullscreenPreview:f})):d("",!0)],64))}});const Z=P(E,[["__scopeId","data-v-1172cf43"]]);export{Z as default};
//# sourceMappingURL=DashPreview.e64c54f2.js.map
