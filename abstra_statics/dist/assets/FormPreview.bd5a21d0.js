import{d as x,v as P,r as F,K as R,b as n,c as d,z as e,t as B,e as i,x as I,H as q,J as E,q as D}from"./registerWidgets.d279c272.js";import{L as C}from"./CircularLoading.5f628841.js";import{E as L}from"./Error.4c21c2be.js";import{F as N,R as H}from"./broker.3d2c71bc.js";import{B as M}from"./BackButton.35ff5514.js";import{a as _}from"./asyncComputed.c73f1d65.js";import{F as V}from"./forms.ef94af24.js";import{W}from"./workspaces.f537a460.js";import"./lottie.2c315e16.js";import"./passwordlessManager.cdf1b7d9.js";import"./pubsub.8254a939.js";import"./icons.ba463d7d.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.55cce36d.js";import"./Passwordless.9be38972.js";import"./executeJs.c00acb5c.js";import"./PlayerNavbar.1cf6ce95.js";import"./index.d1b1e0eb.js";import"./WidgetsFrame.3944df1f.js";import"./colors.fcc8713a.js";import"./Modal.1aad69c5.js";import"./activeRecord.aa3f1ffe.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="f447b75c-534e-4b18-9bed-b68d2ebdfc76",s._sentryDebugIdIdentifier="sentry-dbid-f447b75c-534e-4b18-9bed-b68d2ebdfc76")}catch{}})();const z={class:"page"},J={key:1,class:"error"},K={key:2,style:{width:"100%",height:"100%",display:"flex"}},S={style:{width:"100%",height:"100%",display:"flex"}},U=x({__name:"FormPreview",setup(s){const t=q(),r=E(),a=P({started:!1}),m=F(null),{loading:h,result:c,error:u,refetch:p}=_(()=>V.get(r.params.formPath)),{result:f}=_(()=>W.get()),y=R(()=>H.create({formPath:r.params.formPath})),b=async()=>{var o;if(!a.started){(o=m.value)==null||o.run();return}a.started=!1},v=({path:o,type:l})=>{l==="dash"?t.push({name:"dashPreview",params:{dashPath:o},query:r.query}):(t.push({name:"form-preview",params:{formPath:o},query:r.query}),p())},g=()=>{t.push(`/_editor/form/${encodeURIComponent(r.params.formPath)}`)},w=()=>{a.started=!0},k=()=>{a.started=!1};return(o,l)=>(n(),d("div",z,[e(h)||!e(c)||!e(f)?(n(),B(C,{key:0})):e(u)?(n(),d("div",J,[i(L,{error:e(u),onReload:e(p)},null,8,["error","onReload"])])):(n(),d("main",K,[I("div",S,[i(N,{ref_key:"runner",ref:m,form:e(c).makeRunnerData(e(f)),params:e(r).query,"is-preview":!0,"enable-auto-focus":!0,broker:e(y),style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:v,onLogout:b,onExit:k,onStart:w},null,8,["form","params","broker"]),i(M,{onExitFullscreenPreview:g})])]))]))}});const ue=D(U,[["__scopeId","data-v-2cdbdd7a"]]);export{ue as default};
//# sourceMappingURL=FormPreview.bd5a21d0.js.map
