import{d as _,K as g,b as i,c as w,z as t,t as c,D as p,F as D,J as k,H as b,q as I}from"./registerWidgets.0e006b6f.js";import{D as P,m as q}from"./DashPlayer.f125dd11.js";import{L as x}from"./CircularLoading.091208e5.js";import{r as B}from"./index.cad410b6.js";import{B as R}from"./BackButton.e64ece86.js";import{a as m}from"./asyncComputed.62aacf33.js";import{D as C}from"./dashes.282c732f.js";import{W as F}from"./workspaces.48d692e9.js";import"./runnerData.dc6d3f24.js";import"./executeJs.64987f61.js";import"./PlayerNavbar.a41a317c.js";import"./icons.6bb7a228.js";import"./WidgetsFrame.58e774c2.js";import"./colors.7dccb471.js";import"./Modal.d54926bb.js";import"./passwordlessManager.4cf24a2b.js";import"./pubsub.13db2123.js";import"./Passwordless.11ab8892.js";import"./lottie.b974d0b6.js";import"./activeRecord.d399634f.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[r]="2e038c2e-c68d-49ef-a993-e763bed978fc",s._sentryDebugIdIdentifier="sentry-dbid-2e038c2e-c68d-49ef-a993-e763bed978fc")}catch{}})();const E=_({__name:"DashPreview",setup(s){const r=k(),o=b(),l=({id:e,type:n})=>{n==="dash"?(o.push({name:"dashPreview",params:{dashId:e},query:r.query}),y()):o.push({name:"form-preview",params:{formId:e},query:r.query})},f=()=>{var e;!((e=a.value)!=null&&e.path)||o.push(`/_editor/dash/${encodeURIComponent(a.value.path)}`)},{loading:h,result:a,refetch:y}=m(()=>C.get(r.params.dashPath)),{result:u}=m(()=>F.get()),d=g(()=>{if(!a.value||!u.value||!a.value.makeRunnerData(u.value))return null;const e=q(a.value.makeRunnerData(u.value));return e.onRedirect(({url:n,queryParams:v})=>B(o,n,v)),e});return(e,n)=>(i(),w(D,null,[t(h)||!t(a)?(i(),c(x,{key:0,class:"loading",justify:"center"})):p("",!0),t(d)?(i(),c(P,{key:1,class:"player",dash:t(d).runnerData,"widgets-with-errors":[],"is-preview":!0,params:t(r).query,"dash-player-service":t(d),onNavigate:l},null,8,["dash","params","dash-player-service"])):p("",!0),t(a)?(i(),c(R,{key:2,onExitFullscreenPreview:f})):p("",!0)],64))}});const Z=I(E,[["__scopeId","data-v-7fc555dd"]]);export{Z as default};
//# sourceMappingURL=DashPreview.b3d37799.js.map
