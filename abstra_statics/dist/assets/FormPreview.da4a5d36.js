import{d as g,v as x,r as F,K as R,b as a,c as n,z as e,t as B,e as i,x as b,H as q,J as E,q as L}from"./registerWidgets.bb4c7eff.js";import{L as C}from"./CircularLoading.8dab92fc.js";import{E as I}from"./Error.93dd1e5c.js";import{F as N,R as H}from"./broker.b3c467d4.js";import{B as M}from"./BackButton.0c30933e.js";import{a as f}from"./asyncComputed.0adffaf6.js";import{F as V}from"./forms.f3239392.js";import{W}from"./workspaces.4c177a35.js";import"./passwordlessManager.a806df6a.js";import"./icons.e3de8035.js";import"./Passwordless.dd440ef2.js";import"./WidgetsFrame.382b3d2e.js";import"./PlayerNavbar.ebd805aa.js";import"./index.82e1a6b3.js";import"./Modal.bf534f7d.js";import"./log.6e68571d.js";import"./utils.95f0e9e8.js";import"./pubsub.a0411919.js";const z={class:"page"},D={key:1,class:"error"},J={key:2,style:{width:"100%",height:"100%",display:"flex"}},K={style:{width:"100%",height:"100%",display:"flex"}},S=g({__name:"FormPreview",setup(U){const s=q(),r=E(),o=x({started:!1}),m=F(null),{loading:_,result:c,error:u,refetch:p}=f(()=>V.get(r.params.formPath)),{result:d}=f(()=>W.get()),h=R(()=>H.create({isLocal:!1,formPath:r.params.formPath,isPreview:!0})),v=async()=>{var t;if(!o.started){(t=m.value)==null||t.run();return}o.started=!1},y=({path:t,type:l})=>{l==="dash"?s.push({name:"dashPreview",params:{dashPath:t},query:r.query}):(s.push({name:"form-preview",params:{formPath:t},query:r.query}),p())},k=()=>{s.push(`/_editor/form/${encodeURIComponent(r.params.formPath)}`)},w=()=>{o.started=!0},P=()=>{o.started=!1};return(t,l)=>(a(),n("div",z,[e(_)||!e(c)||!e(d)?(a(),B(C,{key:0})):e(u)?(a(),n("div",D,[i(I,{error:e(u),onReload:e(p)},null,8,["error","onReload"])])):(a(),n("main",J,[b("div",K,[i(N,{ref_key:"runner",ref:m,form:e(c).makeRunnerData(e(d)),params:e(r).query,"is-preview":!0,"enable-auto-focus":!0,broker:e(h),style:{height:"unset",flex:1,overflow:"hidden"},onNavigate:y,onLogout:v,onExit:P,onStart:w},null,8,["form","params","broker"]),i(M,{onExitFullscreenPreview:k})])]))]))}});const me=L(S,[["__scopeId","data-v-f7c2ba13"]]);export{me as default};
//# sourceMappingURL=FormPreview.da4a5d36.js.map
