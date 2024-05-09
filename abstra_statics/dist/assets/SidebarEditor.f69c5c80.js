import{d as v,F as A}from"./vuedraggable.umd.e0b1e45b.js";import{d as y,r as V,K as x,o as C,eN as f,b as u,c,w as o,f as t,u as e,as as h,cE as S,e as i,eH as _,bA as D}from"./outputWidgets.47d6865e.js";import{S as F}from"./SaveButton.95a76f48.js";import{A as I}from"./Item.7503a5ff.js";import{A as L}from"./index.66dc1434.js";import{A as w}from"./Title.4d84784a.js";import{A as k}from"./index.330caafe.js";import{A as b}from"./index.91f86ebb.js";import{A as E,F as B}from"./Form.fadc3724.js";import{S as N}from"./SidebarPreview.24fd1094.js";import{C as U}from"./ContentLayout.8bdceb21.js";import{L as R}from"./LoadingContainer.8d2c1a6f.js";import{a as T}from"./asyncComputed.893821fe.js";import{W as $}from"./workspaces.a77258e3.js";import"./envVars.0ea7ac11.js";import"./UnsavedChangesHandler.3311663f.js";import"./ExclamationCircleOutlined.69b52e3f.js";import"./Modal.c45489bf.js";import"./Base.fbda1545.js";import"./Link.b7c2788f.js";import"./hasIn.e9344704.js";import"./PlayerNavbar.123e5bca.js";import"./PhKanban.vue.de27c066.js";import"./PhSignOut.vue.006fe1c8.js";import"./index.36731e66.js";import"./Text.596639de.js";import"./Home.ed2964ad.js";import"./api.50ebb289.js";import"./index.8d22ed9c.js";import"./fetch.fb888dea.js";import"./pubsub.0a5fa8dc.js";import"./runnerData.499cdb99.js";import"./url.0a008d53.js";import"./PhArrowSquareOut.vue.0c5f26cc.js";import"./index.99f018ff.js";import"./Paragraph.a40a25db.js";import"./index.0bf66b0e.js";import"./Card.25fc3944.js";import"./TabPane.ef9d004d.js";import"./WidgetsFrame.fb3a2fef.js";import"./record.ab298d17.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="b393520a-6e93-40a1-996e-ba1c75420dbe",s._sentryDebugIdIdentifier="sentry-dbid-b393520a-6e93-40a1-996e-ba1c75420dbe")}catch{}})();const j=i("span",null,"Route",-1),K=i("span",null,"Title",-1),M=i("span",null,"Visible",-1),W={style:{flex:"1 0"}},q={style:{flex:"1 0"}},z=y({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(s,{emit:a}){const p=s,l=V([]),n=()=>a("update:modelValue",l.value);return x(()=>p.modelValue,(d,m)=>{f.exports.isEqual(d,m)||(l.value=f.exports.cloneDeep(d))}),C(()=>{l.value=f.exports.cloneDeep(p.modelValue)}),(d,m)=>(u(),c(e(E),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(k),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(F,{model:d.workspace},null,8,["model"])]),_:1}),t(e(L),{bordered:""},{header:o(()=>[t(e(S),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[j,t(e(b),{type:"vertical"}),K,t(e(b),{type:"vertical"}),M]),_:1})]),default:o(()=>[t(e(v),{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=r=>l.value=r),"force-fallback":e(A),style:{width:"100%"},"item-key":r=>r.path,onChange:n},{item:o(({element:r})=>[t(e(I),{style:{cursor:"ns-resize"}},{default:o(()=>[i("span",W,"/"+_(r.path),1),i("span",q,_(r.name),1),t(e(D),{checked:r.visible,"onUpdate:checked":g=>r.visible=g,type:"checkbox",onChange:n},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue","force-fallback","item-key"])]),_:1})]),_:1}))}}),H={style:{width:"50%"}},O={style:{width:"50%"}},Ne=y({__name:"SidebarEditor",setup(s){const{result:a,loading:p}=T(()=>$.get());return(l,n)=>(u(),c(U,null,{default:o(()=>[e(p)||!e(a)?(u(),c(R,{key:0})):(u(),c(e(B),{key:1,style:{width:"100%"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(k),{gap:"40"},{default:o(()=>[i("div",H,[t(z,{modelValue:e(a).sidebar,"onUpdate:modelValue":n[0]||(n[0]=d=>e(a).sidebar=d),workspace:e(a)},null,8,["modelValue","workspace"])]),i("div",O,[t(N,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))]),_:1}))}});export{Ne as default};
//# sourceMappingURL=SidebarEditor.f69c5c80.js.map
