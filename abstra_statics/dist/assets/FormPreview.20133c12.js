import{d as g,J as w,b as d,et as c,e as s,eC as p,eD as q,eE as D,x as k,ez as $,eA as C,H as S,r as L,u as t,c as M,f as m}from"./outputWidgets.d6897520.js";import{L as N}from"./CircularLoading.74c5b113.js";import{F as A,R as H}from"./broker.2631cbda.js";import{B as O}from"./BackButton.7d607c57.js";import{a as b}from"./asyncComputed.2c363ccc.js";import{F as V}from"./forms.346cb6b2.js";import{W}from"./workspaces.fb65e732.js";import{r as j}from"./index.40bea6c2.js";import"./index.3b692b6d.js";import"./pubsub.e0b33cd4.js";import"./executeJs.8211d702.js";import"./icons.20b5fc8a.js";import"./PlayerNavbar.582e448c.js";import"./Steps.1d151ab5.js";import"./Modal.1a4e3f2f.js";import"./WidgetsFrame.b500b4a0.js";import"./ActionButton.vue_vue_type_script_setup_true_lang.f720947f.js";import"./activeRecord.e97440b4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="a169417f-bba1-49ba-8665-58bd7457bd01",e._sentryDebugIdIdentifier="sentry-dbid-a169417f-bba1-49ba-8665-58bd7457bd01")}catch{}})();const x=e=>(q("data-v-d3846761"),e=e(),D(),e),z={class:"error"},J=x(()=>s("h1",{class:"error-header"},"Error",-1)),T={class:"error-body"},U={class:"error-message"},G={class:"error-details"},K=x(()=>s("span",null,"Reload",-1)),Q=[K],X=g({__name:"Error",props:{error:{type:Object,required:!0},repeated:{type:Boolean,required:!1}},emits:["reload"],setup(e,{emit:r}){const o=e,n=w(()=>o.repeated?"Ooops. The same error occured, please try again later.":"An error occurred while loading.");function l(){r("reload")}return(u,_)=>(d(),c("div",z,[J,s("div",T,[s("div",U,[s("p",null,p(n.value),1),s("p",G,p(e.error.name)+": "+p(e.error.message),1)]),s("div",{class:"error-actions"},[s("button",{class:"btn btn-primary",onClick:l},Q)])])]))}});const Y=k(X,[["__scopeId","data-v-d3846761"]]),Z={class:"page"},ee={key:1,class:"error"},re={key:2,style:{width:"100%",height:"100%",display:"flex"}},oe={style:{width:"100%",height:"100%",display:"flex"}},te=g({__name:"FormPreview",setup(e){const r=$(),o=C(),n=S({started:!1});function l(a,i){j("preview",r,a,i)}const u=L(null),{loading:_,result:f,error:h,refetch:y}=b(()=>V.get(o.params.formPath)),{result:v}=b(()=>W.get()),P=w(()=>H.create({formPath:o.params.formPath})),I=async()=>{var a;if(!n.started){(a=u.value)==null||a.run();return}n.started=!1},R=({path:a,type:i})=>{i==="dash"?r.push({name:"dashPreview",params:{dashPath:a},query:o.query}):(r.push({name:"formPreview",params:{formPath:a},query:o.query}),y())},E=()=>{r.push(`/_editor/form/${encodeURIComponent(o.params.formPath)}`)},B=()=>{n.started=!0},F=()=>{n.started=!1};return(a,i)=>(d(),c("div",Z,[t(_)||!t(f)||!t(v)?(d(),M(N,{key:0})):t(h)?(d(),c("div",ee,[m(Y,{error:t(h),onReload:t(y)},null,8,["error","onReload"])])):(d(),c("main",re,[s("div",oe,[m(A,{ref_key:"runner",ref:u,form:t(f).makeRunnerData(t(v)),params:t(o).query,"is-preview":!0,"enable-auto-focus":!0,broker:P.value,style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:R,onLogout:I,onExit:F,onStart:B,onRedirect:l},null,8,["form","params","broker"]),m(O,{onExitFullscreenPreview:E})])]))]))}});const ke=k(te,[["__scopeId","data-v-fa4f1951"]]);export{ke as default};
//# sourceMappingURL=FormPreview.20133c12.js.map
