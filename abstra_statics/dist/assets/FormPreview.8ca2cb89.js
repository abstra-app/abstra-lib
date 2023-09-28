import{d as b,H as w,b as d,er as c,e as s,eA as p,eB as q,eC as D,v as k,ex as $,ey as C,G as S,r as L,u as t,c as M,f as m}from"./registerWidgets.c9cb81ca.js";import{L as N}from"./CircularLoading.47657dcf.js";import{F as A,R as H}from"./broker.a69ab221.js";import{B as O}from"./BackButton.193c7036.js";import{a as g}from"./asyncComputed.04c0b652.js";import{F as V}from"./forms.6c921403.js";import{W}from"./workspaces.2ed55fa0.js";import{r as j}from"./index.e7da3dee.js";import"./passwordlessManager.cc31c80c.js";import"./pubsub.9e830c37.js";import"./storage.2edf556f.js";import"./Passwordless.48a21a6e.js";import"./icons.384bef6a.js";import"./executeJs.e4b87a84.js";import"./PlayerNavbar.2ce39d34.js";import"./Steps.bdbecb68.js";import"./Modal.d9ab8493.js";import"./WidgetsFrame.d22a3854.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.76ceff70.js";import"./activeRecord.7003a0b9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="58bd0f62-e9da-4181-b6d6-3f26d1bd9efa",e._sentryDebugIdIdentifier="sentry-dbid-58bd0f62-e9da-4181-b6d6-3f26d1bd9efa")}catch{}})();const x=e=>(q("data-v-d3846761"),e=e(),D(),e),G={class:"error"},T=x(()=>s("h1",{class:"error-header"},"Error",-1)),U={class:"error-body"},z={class:"error-message"},J={class:"error-details"},K=x(()=>s("span",null,"Reload",-1)),Q=[K],X=b({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:r}){const o=e,n=w(()=>o.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function l(){r("reload")}return(u,_)=>(d(),c("div",G,[T,s("div",U,[s("div",z,[s("p",null,p(n.value),1),s("p",J,p(e.error.name)+": "+p(e.error.message),1)]),s("div",{class:"error-actions"},[s("button",{class:"btn btn-primary",onClick:l},Q)])])]))}});const Y=k(X,[["__scopeId","data-v-d3846761"]]),Z={class:"page"},ee={key:1,class:"error"},re={key:2,style:{width:"100%",height:"100%",display:"flex"}},oe={style:{width:"100%",height:"100%",display:"flex"}},te=b({__name:"FormPreview",setup(e){const r=$(),o=C(),n=S({started:!1});function l(a,i){j("preview",r,a,i)}const u=L(null),{loading:_,result:f,error:h,refetch:y}=g(()=>V.get(o.params.formPath)),{result:v}=g(()=>W.get()),P=w(()=>H.create({formPath:o.params.formPath})),I=async()=>{var a;if(!n.started){(a=u.value)==null||a.run();return}n.started=!1},R=({path:a,type:i})=>{i==="dash"?r.push({name:"dashPreview",params:{dashPath:a},query:o.query}):(r.push({name:"formPreview",params:{formPath:a},query:o.query}),y())},B=()=>{r.push(`/_editor/form/${encodeURIComponent(o.params.formPath)}`)},E=()=>{n.started=!0},F=()=>{n.started=!1};return(a,i)=>(d(),c("div",Z,[t(_)||!t(f)||!t(v)?(d(),M(N,{key:0})):t(h)?(d(),c("div",ee,[m(Y,{error:t(h),onReload:t(y)},null,8,["error","onReload"])])):(d(),c("main",re,[s("div",oe,[m(A,{ref_key:"runner",ref:u,form:t(f).makeRunnerData(t(v)),params:t(o).query,"is-preview":!0,"enable-auto-focus":!0,broker:P.value,style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:R,onLogout:I,onExit:F,onStart:E,onRedirect:l},null,8,["form","params","broker"]),m(O,{onExitFullscreenPreview:B})])]))]))}});const Pe=k(te,[["__scopeId","data-v-fa4f1951"]]);export{Pe as default};
//# sourceMappingURL=FormPreview.8ca2cb89.js.map
