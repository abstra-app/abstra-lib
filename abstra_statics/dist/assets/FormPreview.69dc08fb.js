import{d as x,ex as F,ey as R,E as B,r as I,F as E,b as i,c as m,bu as e,u as q,e as c,er as D,t as C}from"./registerWidgets.2f9e8ab4.js";import{L}from"./CircularLoading.a44c4841.js";import{E as N}from"./Error.54655fa7.js";import{F as M,R as V}from"./broker.446153f9.js";import{B as W}from"./BackButton.edca90e0.js";import{a as _}from"./asyncComputed.e6bb1d1a.js";import{F as H}from"./forms.06262578.js";import{W as S}from"./workspaces.4cb43726.js";import{r as U}from"./index.a0f1af93.js";import"./lottie.8b2214a6.js";import"./passwordlessManager.54083d16.js";import"./pubsub.3f4ddf21.js";import"./storage.57dbb7eb.js";import"./Passwordless.0fecac54.js";import"./icons.5a87815f.js";import"./executeJs.fa7933c4.js";import"./PlayerNavbar.b8adcab8.js";import"./Steps.c76222a3.js";import"./Modal.010d4614.js";import"./WidgetsFrame.d057d432.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.6972cc71.js";import"./activeRecord.4e6a5c29.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="0e2e73a0-8eec-4eaa-a6c2-0e7a5338ec39",a._sentryDebugIdIdentifier="sentry-dbid-0e2e73a0-8eec-4eaa-a6c2-0e7a5338ec39")}catch{}})();const $={class:"page"},j={key:1,class:"error"},z={key:2,style:{width:"100%",height:"100%",display:"flex"}},A={style:{width:"100%",height:"100%",display:"flex"}},G=x({__name:"FormPreview",setup(a){const t=F(),o=R(),s=B({started:!1});function y(r,n){U("preview",t,r,n)}const d=I(null),{loading:h,result:u,error:p,refetch:f}=_(()=>H.get(o.params.formPath)),{result:l}=_(()=>S.get()),v=E(()=>V.create({formPath:o.params.formPath})),g=async()=>{var r;if(!s.started){(r=d.value)==null||r.run();return}s.started=!1},w=({path:r,type:n})=>{n==="dash"?t.push({name:"dashPreview",params:{dashPath:r},query:o.query}):(t.push({name:"formPreview",params:{formPath:r},query:o.query}),f())},k=()=>{t.push(`/_editor/form/${encodeURIComponent(o.params.formPath)}`)},b=()=>{s.started=!0},P=()=>{s.started=!1};return(r,n)=>(i(),m("div",$,[e(h)||!e(u)||!e(l)?(i(),q(L,{key:0})):e(p)?(i(),m("div",j,[c(N,{error:e(p),onReload:e(f)},null,8,["error","onReload"])])):(i(),m("main",z,[D("div",A,[c(M,{ref_key:"runner",ref:d,form:e(u).makeRunnerData(e(l)),params:e(o).query,"is-preview":!0,"enable-auto-focus":!0,broker:v.value,style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:w,onLogout:g,onExit:P,onStart:b,onRedirect:y},null,8,["form","params","broker"]),c(W,{onExitFullscreenPreview:k})])]))]))}});const le=C(G,[["__scopeId","data-v-fa4f1951"]]);export{le as default};
//# sourceMappingURL=FormPreview.69dc08fb.js.map
