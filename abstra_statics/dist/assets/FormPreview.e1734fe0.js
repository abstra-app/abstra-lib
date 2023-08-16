import{d as x,v as P,r as F,K as R,b as n,c as i,z as e,t as B,e as d,x as I,H as q,J as E,q as D}from"./registerWidgets.92ed860b.js";import{L as C}from"./CircularLoading.1435f7ec.js";import{E as L}from"./Error.19f62304.js";import{F as N,R as H}from"./broker.bd137e1f.js";import{B as M}from"./BackButton.3d8e5b22.js";import{a as _}from"./asyncComputed.13be15a6.js";import{F as V}from"./forms.adb3a641.js";import{W}from"./workspaces.b7c14823.js";import"./lottie.7dca37a3.js";import"./passwordlessManager.63c7fadc.js";import"./pubsub.f2d2508d.js";import"./icons.b8b5d1f6.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.3ca491da.js";import"./Passwordless.ca04fd6e.js";import"./executeJs.fc58e689.js";import"./PlayerNavbar.f6b06a87.js";import"./index.e894f02b.js";import"./WidgetsFrame.6d5c1d36.js";import"./colors.59b645ba.js";import"./Modal.80d69340.js";import"./activeRecord.e849f28c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="a0e28a61-af22-4624-97c7-69de62ee8978",a._sentryDebugIdIdentifier="sentry-dbid-a0e28a61-af22-4624-97c7-69de62ee8978")}catch{}})();const z={class:"page"},J={key:1,class:"error"},K={key:2,style:{width:"100%",height:"100%",display:"flex"}},S={style:{width:"100%",height:"100%",display:"flex"}},U=x({__name:"FormPreview",setup(a){const t=q(),r=E(),s=P({started:!1}),m=F(null),{loading:h,result:c,error:u,refetch:p}=_(()=>V.get(r.params.formPath)),{result:f}=_(()=>W.get()),y=R(()=>H.create({formPath:r.params.formPath})),v=async()=>{var o;if(!s.started){(o=m.value)==null||o.run();return}s.started=!1},g=({path:o,type:l})=>{l==="dash"?t.push({name:"dashPreview",params:{dashPath:o},query:r.query}):(t.push({name:"form-preview",params:{formPath:o},query:r.query}),p())},w=()=>{t.push(`/_editor/form/${encodeURIComponent(r.params.formPath)}`)},k=()=>{s.started=!0},b=()=>{s.started=!1};return(o,l)=>(n(),i("div",z,[e(h)||!e(c)||!e(f)?(n(),B(C,{key:0})):e(u)?(n(),i("div",J,[d(L,{error:e(u),onReload:e(p)},null,8,["error","onReload"])])):(n(),i("main",K,[I("div",S,[d(N,{ref_key:"runner",ref:m,form:e(c).makeRunnerData(e(f)),params:e(r).query,"is-preview":!0,"enable-auto-focus":!0,broker:e(y),style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:g,onLogout:v,onExit:b,onStart:k},null,8,["form","params","broker"]),d(M,{onExitFullscreenPreview:w})])]))]))}});const ue=D(U,[["__scopeId","data-v-2cdbdd7a"]]);export{ue as default};
//# sourceMappingURL=FormPreview.e1734fe0.js.map
