import{d as _,J as g,H as w,K as D,b as n,c as b,z as u,t as d,D as p,F as k,q as I}from"./registerWidgets.91711800.js";import{D as P,m as q}from"./DashPlayer.d4436868.js";import{L as x}from"./CircularLoading.79da0b2a.js";import{r as B}from"./index.f3370ed8.js";import{B as R}from"./BackButton.637d8b98.js";import{a as l}from"./asyncComputed.bed33ce4.js";import{D as C}from"./dashes.6843e978.js";import{W as F}from"./workspaces.9832b510.js";import"./executeJs.e1c3429b.js";import"./PlayerNavbar.8497a978.js";import"./icons.3067ab21.js";import"./Steps.39941eb5.js";import"./Modal.14cb56b3.js";import"./runnerData.2d38aead.js";import"./passwordlessManager.c522cdd8.js";import"./pubsub.310de7b9.js";import"./Passwordless.ceab27ca.js";import"./WidgetsFrame.c7fe8fc8.js";import"./lottie.629e6b5b.js";import"./activeRecord.deee46c4.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="cd752f39-7fb8-4b03-9717-c6b755ca1aa0",t._sentryDebugIdIdentifier="sentry-dbid-cd752f39-7fb8-4b03-9717-c6b755ca1aa0")}catch{}})();const E=_({__name:"DashPreview",setup(t){const r=g(),s=w(),m=({id:e,type:o})=>{o==="dash"?(s.push({name:"dashPreview",params:{dashId:e},query:r.query}),h()):s.push({name:"form-preview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||s.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:v,result:a,refetch:h}=l(()=>C.get(r.params.dashPath)),{result:i}=l(()=>F.get()),c=D(()=>{if(!a.value||!i.value||!a.value.makeRunnerData(i.value))return null;const e=q(a.value.makeRunnerData(i.value));return e.onRedirect(({url:o,queryParams:y})=>B(s,o,y)),e});return(e,o)=>(n(),b(k,null,[u(v)||!u(a)?(n(),d(x,{key:0,class:"loading",justify:"center"})):p("",!0),c.value?(n(),d(P,{key:1,class:"player",dash:c.value.runnerData,"widgets-with-errors":[],"is-preview":!0,params:u(r).query,"dash-player-service":c.value,onNavigate:m},null,8,["dash","params","dash-player-service"])):p("",!0),u(a)?(n(),d(R,{key:2,onExitFullscreenPreview:f})):p("",!0)],64))}});const Z=I(E,[["__scopeId","data-v-7fc555dd"]]);export{Z as default};
//# sourceMappingURL=DashPreview.311e45a0.js.map
