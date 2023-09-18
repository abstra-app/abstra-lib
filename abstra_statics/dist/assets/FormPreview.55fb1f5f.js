import{d as x,ex as F,ey as R,E as B,r as I,F as E,b as i,c as m,bu as e,u as q,e as d,er as D,t as C}from"./registerWidgets.fbede4e9.js";import{L}from"./CircularLoading.1684a417.js";import{E as N}from"./Error.9df84ed6.js";import{F as M,R as V}from"./broker.6e19529c.js";import{B as W}from"./BackButton.6bb66766.js";import{a as _}from"./asyncComputed.ded4e064.js";import{F as H}from"./forms.21e90a92.js";import{W as S}from"./workspaces.33fab7b8.js";import{r as U}from"./index.1acdc6c8.js";import"./lottie.af5deb23.js";import"./passwordlessManager.fc9080ef.js";import"./pubsub.9639d873.js";import"./storage.953471f2.js";import"./Passwordless.7d9518f7.js";import"./icons.9ea484f9.js";import"./executeJs.76d54fa4.js";import"./PlayerNavbar.fa360232.js";import"./Steps.8479d0f0.js";import"./Modal.2d0c3e5e.js";import"./WidgetsFrame.d9759077.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.88ea9609.js";import"./activeRecord.4cd28aae.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="e14bb97b-6ee9-40f1-834f-8785c11a9fdb",s._sentryDebugIdIdentifier="sentry-dbid-e14bb97b-6ee9-40f1-834f-8785c11a9fdb")}catch{}})();const $={class:"page"},j={key:1,class:"error"},z={key:2,style:{width:"100%",height:"100%",display:"flex"}},A={style:{width:"100%",height:"100%",display:"flex"}},G=x({__name:"FormPreview",setup(s){const t=F(),o=R(),a=B({started:!1});function y(r,n){U("preview",t,r,n)}const c=I(null),{loading:h,result:f,error:u,refetch:p}=_(()=>H.get(o.params.formPath)),{result:l}=_(()=>S.get()),v=E(()=>V.create({formPath:o.params.formPath})),b=async()=>{var r;if(!a.started){(r=c.value)==null||r.run();return}a.started=!1},g=({path:r,type:n})=>{n==="dash"?t.push({name:"dashPreview",params:{dashPath:r},query:o.query}):(t.push({name:"formPreview",params:{formPath:r},query:o.query}),p())},w=()=>{t.push(`/_editor/form/${encodeURIComponent(o.params.formPath)}`)},k=()=>{a.started=!0},P=()=>{a.started=!1};return(r,n)=>(i(),m("div",$,[e(h)||!e(f)||!e(l)?(i(),q(L,{key:0})):e(u)?(i(),m("div",j,[d(N,{error:e(u),onReload:e(p)},null,8,["error","onReload"])])):(i(),m("main",z,[D("div",A,[d(M,{ref_key:"runner",ref:c,form:e(f).makeRunnerData(e(l)),params:e(o).query,"is-preview":!0,"enable-auto-focus":!0,broker:v.value,style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:g,onLogout:b,onExit:P,onStart:k,onRedirect:y},null,8,["form","params","broker"]),d(W,{onExitFullscreenPreview:w})])]))]))}});const le=C(G,[["__scopeId","data-v-fa4f1951"]]);export{le as default};
//# sourceMappingURL=FormPreview.55fb1f5f.js.map
