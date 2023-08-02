import{d as P,v as x,r as F,K as R,b as n,c as i,z as e,t as B,e as d,x as I,H as q,J as E,q as D}from"./registerWidgets.726232df.js";import{L}from"./CircularLoading.4a9d4906.js";import{E as C}from"./Error.7f8fecfd.js";import{F as N,R as H}from"./broker.89bb4800.js";import{B as M}from"./BackButton.cc22a97e.js";import{a as _}from"./asyncComputed.638ec138.js";import{F as V}from"./forms.19c0f1ba.js";import{W}from"./workspaces.400dc385.js";import"./lottie.1c3b7cde.js";import"./passwordlessManager.3b0f9bd3.js";import"./icons.f7969917.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.7cbe573f.js";import"./Passwordless.72b053f6.js";import"./executeJs.209fa4e7.js";import"./PlayerNavbar.1086bae4.js";import"./index.bbe106e1.js";import"./WidgetsFrame.76941521.js";import"./colors.ad792a0e.js";import"./Modal.bd7677ba.js";import"./log.bef1eaa6.js";import"./activeRecord.acbdb8bc.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="d53f95e3-8a42-493a-958d-fbe8210346f1",s._sentryDebugIdIdentifier="sentry-dbid-d53f95e3-8a42-493a-958d-fbe8210346f1")}catch{}})();const z={class:"page"},J={key:1,class:"error"},K={key:2,style:{width:"100%",height:"100%",display:"flex"}},S={style:{width:"100%",height:"100%",display:"flex"}},U=P({__name:"FormPreview",setup(s){const t=q(),r=E(),a=x({started:!1}),m=F(null),{loading:h,result:c,error:f,refetch:u}=_(()=>V.get(r.params.formPath)),{result:p}=_(()=>W.get()),y=R(()=>H.create({isLocal:!1,formPath:r.params.formPath,isPreview:!0})),v=async()=>{var o;if(!a.started){(o=m.value)==null||o.run();return}a.started=!1},g=({path:o,type:l})=>{l==="dash"?t.push({name:"dashPreview",params:{dashPath:o},query:r.query}):(t.push({name:"form-preview",params:{formPath:o},query:r.query}),u())},w=()=>{t.push(`/_editor/form/${encodeURIComponent(r.params.formPath)}`)},b=()=>{a.started=!0},k=()=>{a.started=!1};return(o,l)=>(n(),i("div",z,[e(h)||!e(c)||!e(p)?(n(),B(L,{key:0})):e(f)?(n(),i("div",J,[d(C,{error:e(f),onReload:e(u)},null,8,["error","onReload"])])):(n(),i("main",K,[I("div",S,[d(N,{ref_key:"runner",ref:m,form:e(c).makeRunnerData(e(p)),params:e(r).query,"is-preview":!0,"enable-auto-focus":!0,broker:e(y),style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:g,onLogout:v,onExit:k,onStart:b},null,8,["form","params","broker"]),d(M,{onExitFullscreenPreview:w})])]))]))}});const fe=D(U,[["__scopeId","data-v-f7c2ba13"]]);export{fe as default};
//# sourceMappingURL=FormPreview.4fa5e7be.js.map
