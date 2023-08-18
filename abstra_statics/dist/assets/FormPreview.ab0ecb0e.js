import{d as x,v as P,r as F,K as R,b as n,c as i,z as e,t as B,e as d,x as I,H as q,J as E,q as D}from"./registerWidgets.194bb28e.js";import{L as C}from"./CircularLoading.0c248797.js";import{E as L}from"./Error.aac8c172.js";import{F as N,R as H}from"./broker.d88af4be.js";import{B as M}from"./BackButton.8ce85d07.js";import{a as _}from"./asyncComputed.5b4ff5f7.js";import{F as V}from"./forms.fdebe1bc.js";import{W}from"./workspaces.07607ec9.js";import"./lottie.7115e13e.js";import"./passwordlessManager.b64a3693.js";import"./pubsub.14ac09f3.js";import"./icons.9391b66a.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.b89a0375.js";import"./Passwordless.b77f4d9f.js";import"./executeJs.bf4f7b97.js";import"./PlayerNavbar.68f6931a.js";import"./index.547cc014.js";import"./WidgetsFrame.5443ea14.js";import"./colors.29791486.js";import"./Modal.fcf8087e.js";import"./activeRecord.039d2aa7.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="94222f2a-481d-4f68-a2cb-322be107adb0",a._sentryDebugIdIdentifier="sentry-dbid-94222f2a-481d-4f68-a2cb-322be107adb0")}catch{}})();const z={class:"page"},J={key:1,class:"error"},K={key:2,style:{width:"100%",height:"100%",display:"flex"}},S={style:{width:"100%",height:"100%",display:"flex"}},U=x({__name:"FormPreview",setup(a){const t=q(),r=E(),s=P({started:!1}),m=F(null),{loading:h,result:c,error:u,refetch:p}=_(()=>V.get(r.params.formPath)),{result:f}=_(()=>W.get()),y=R(()=>H.create({formPath:r.params.formPath})),v=async()=>{var o;if(!s.started){(o=m.value)==null||o.run();return}s.started=!1},b=({path:o,type:l})=>{l==="dash"?t.push({name:"dashPreview",params:{dashPath:o},query:r.query}):(t.push({name:"form-preview",params:{formPath:o},query:r.query}),p())},g=()=>{t.push(`/_editor/form/${encodeURIComponent(r.params.formPath)}`)},w=()=>{s.started=!0},k=()=>{s.started=!1};return(o,l)=>(n(),i("div",z,[e(h)||!e(c)||!e(f)?(n(),B(C,{key:0})):e(u)?(n(),i("div",J,[d(L,{error:e(u),onReload:e(p)},null,8,["error","onReload"])])):(n(),i("main",K,[I("div",S,[d(N,{ref_key:"runner",ref:m,form:e(c).makeRunnerData(e(f)),params:e(r).query,"is-preview":!0,"enable-auto-focus":!0,broker:e(y),style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:b,onLogout:v,onExit:k,onStart:w},null,8,["form","params","broker"]),d(M,{onExitFullscreenPreview:g})])]))]))}});const ue=D(U,[["__scopeId","data-v-2cdbdd7a"]]);export{ue as default};
//# sourceMappingURL=FormPreview.ab0ecb0e.js.map
