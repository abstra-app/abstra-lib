import{d as x,J as R,K as F,w as B,r as I,L as E,b as i,c,A as e,u as q,e as d,y as D,t as L}from"./registerWidgets.806e8dbb.js";import{L as C}from"./CircularLoading.2f3f2cf0.js";import{E as N}from"./Error.dd3d7d95.js";import{F as M,R as V}from"./broker.9b2359c9.js";import{B as W}from"./BackButton.a93587ad.js";import{a as _}from"./asyncComputed.587fb9ea.js";import{F as A}from"./forms.787df3ee.js";import{W as H}from"./workspaces.243ca3cc.js";import{r as J}from"./index.4bd1f8ed.js";import"./lottie.8997e02d.js";import"./passwordlessManager.374f37c6.js";import"./pubsub.82c690a5.js";import"./Passwordless.74b620fa.js";import"./icons.9934ec86.js";import"./executeJs.48423026.js";import"./PlayerNavbar.3a239cb2.js";import"./Steps.6d18d130.js";import"./Modal.52145fc7.js";import"./WidgetsFrame.9e55163a.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.0dd4e402.js";import"./activeRecord.6e695fda.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="b70c0dbb-23d5-43fc-a10f-7f72cef8fc14",s._sentryDebugIdIdentifier="sentry-dbid-b70c0dbb-23d5-43fc-a10f-7f72cef8fc14")}catch{}})();const K={class:"page"},S={key:1,class:"error"},U={key:2,style:{width:"100%",height:"100%",display:"flex"}},$={style:{width:"100%",height:"100%",display:"flex"}},j=x({__name:"FormPreview",setup(s){const t=R(),o=F(),a=B({started:!1});function y(r,n){J("preview",t,r,n)}const m=I(null),{loading:h,result:f,error:u,refetch:p}=_(()=>A.get(o.params.formPath)),{result:l}=_(()=>H.get()),v=E(()=>V.create({formPath:o.params.formPath})),w=async()=>{var r;if(!a.started){(r=m.value)==null||r.run();return}a.started=!1},b=({path:r,type:n})=>{n==="dash"?t.push({name:"dashPreview",params:{dashPath:r},query:o.query}):(t.push({name:"formPreview",params:{formPath:r},query:o.query}),p())},g=()=>{t.push(`/_editor/form/${encodeURIComponent(o.params.formPath)}`)},k=()=>{a.started=!0},P=()=>{a.started=!1};return(r,n)=>(i(),c("div",K,[e(h)||!e(f)||!e(l)?(i(),q(C,{key:0})):e(u)?(i(),c("div",S,[d(N,{error:e(u),onReload:e(p)},null,8,["error","onReload"])])):(i(),c("main",U,[D("div",$,[d(M,{ref_key:"runner",ref:m,form:e(f).makeRunnerData(e(l)),params:e(o).query,"is-preview":!0,"enable-auto-focus":!0,broker:v.value,style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:b,onLogout:w,onExit:P,onStart:k,onRedirect:y},null,8,["form","params","broker"]),d(W,{onExitFullscreenPreview:g})])]))]))}});const pe=L(j,[["__scopeId","data-v-fa4f1951"]]);export{pe as default};
//# sourceMappingURL=FormPreview.eb151b0d.js.map
