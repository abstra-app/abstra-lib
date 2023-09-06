import{d as x,ex as F,ey as R,E as B,r as I,F as E,b as i,c as d,bu as e,u as q,e as m,er as D,t as C}from"./registerWidgets.751c4cc6.js";import{L}from"./CircularLoading.7ae0ffc2.js";import{E as N}from"./Error.199d7b3e.js";import{F as M,R as V}from"./broker.8bfd44f6.js";import{B as W}from"./BackButton.b97fc7df.js";import{a as _}from"./asyncComputed.4ba8b2d8.js";import{F as H}from"./forms.bb29688a.js";import{W as S}from"./workspaces.8821a1e7.js";import{r as U}from"./index.35c304ed.js";import"./lottie.2da9cd67.js";import"./passwordlessManager.8b22003c.js";import"./pubsub.87f27d54.js";import"./storage.fbef8aee.js";import"./Passwordless.5d103398.js";import"./icons.839289ff.js";import"./executeJs.264e8788.js";import"./PlayerNavbar.5bbcffdf.js";import"./Steps.2317232c.js";import"./Modal.2619bb1d.js";import"./WidgetsFrame.5ca14e96.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.f5e4856d.js";import"./activeRecord.91f4e05e.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="799b2471-0324-4d96-99d2-cbb60cf9e98e",s._sentryDebugIdIdentifier="sentry-dbid-799b2471-0324-4d96-99d2-cbb60cf9e98e")}catch{}})();const $={class:"page"},j={key:1,class:"error"},z={key:2,style:{width:"100%",height:"100%",display:"flex"}},A={style:{width:"100%",height:"100%",display:"flex"}},G=x({__name:"FormPreview",setup(s){const t=F(),o=R(),a=B({started:!1});function y(r,n){U("preview",t,r,n)}const c=I(null),{loading:h,result:u,error:f,refetch:p}=_(()=>H.get(o.params.formPath)),{result:l}=_(()=>S.get()),v=E(()=>V.create({formPath:o.params.formPath})),b=async()=>{var r;if(!a.started){(r=c.value)==null||r.run();return}a.started=!1},g=({path:r,type:n})=>{n==="dash"?t.push({name:"dashPreview",params:{dashPath:r},query:o.query}):(t.push({name:"formPreview",params:{formPath:r},query:o.query}),p())},w=()=>{t.push(`/_editor/form/${encodeURIComponent(o.params.formPath)}`)},k=()=>{a.started=!0},P=()=>{a.started=!1};return(r,n)=>(i(),d("div",$,[e(h)||!e(u)||!e(l)?(i(),q(L,{key:0})):e(f)?(i(),d("div",j,[m(N,{error:e(f),onReload:e(p)},null,8,["error","onReload"])])):(i(),d("main",z,[D("div",A,[m(M,{ref_key:"runner",ref:c,form:e(u).makeRunnerData(e(l)),params:e(o).query,"is-preview":!0,"enable-auto-focus":!0,broker:v.value,style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:g,onLogout:b,onExit:P,onStart:k,onRedirect:y},null,8,["form","params","broker"]),m(W,{onExitFullscreenPreview:w})])]))]))}});const le=C(G,[["__scopeId","data-v-fa4f1951"]]);export{le as default};
//# sourceMappingURL=FormPreview.d89e0d49.js.map
