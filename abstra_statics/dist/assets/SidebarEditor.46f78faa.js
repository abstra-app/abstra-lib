import{d as v,F as A}from"./vuedraggable.umd.8e07f640.js";import{d as y,r as V,K as x,o as C,eN as f,b as u,c,w as o,f as t,u as e,as as h,cE as S,e as i,eH as b,bA as D}from"./outputWidgets.3684b02e.js";import{S as F}from"./SaveButton.2d117722.js";import{a as I,A as L}from"./index.9dab3703.js";import{A as w}from"./Title.bbdcc9ae.js";import{A as k}from"./index.29d826c7.js";import{A as _}from"./index.7d77457c.js";import{A as E,F as B}from"./Form.d0db370f.js";import{S as N}from"./SidebarPreview.ecfab292.js";import{C as U}from"./ContentLayout.d2a2c2dc.js";import{L as R}from"./LoadingContainer.64410f5c.js";import{a as T}from"./asyncComputed.0b5889fd.js";import{W as $}from"./workspaces.a5b73d30.js";import"./envVars.1ffaa13c.js";import"./UnsavedChangesHandler.c18b2ae6.js";import"./ExclamationCircleOutlined.525f560d.js";import"./Modal.1dcf8df8.js";import"./Base.bd471b11.js";import"./Link.4b7e85fb.js";import"./hasIn.11c840ae.js";import"./PlayerNavbar.71838220.js";import"./PhKanban.vue.b4d61102.js";import"./PhSignOut.vue.0ae182e0.js";import"./index.93b91c69.js";import"./Text.5dac8cf1.js";import"./Home.b6ab5ecf.js";import"./api.2563df59.js";import"./index.48e773a1.js";import"./fetch.93c6ea0d.js";import"./pubsub.b5f35f9d.js";import"./runnerData.b419b5b2.js";import"./url.c248eb9f.js";import"./PhArrowSquareOut.vue.d4a8f7c9.js";import"./index.0dd4b55d.js";import"./Paragraph.9e2afa41.js";import"./index.56b538d1.js";import"./Card.443d8bdb.js";import"./TabPane.c89f20d8.js";import"./WidgetsFrame.5e268dec.js";import"./record.61319bc5.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="3b74a1df-1bda-4db8-ae8c-7f9d964f13be",s._sentryDebugIdIdentifier="sentry-dbid-3b74a1df-1bda-4db8-ae8c-7f9d964f13be")}catch{}})();const j=i("span",null,"Route",-1),K=i("span",null,"Title",-1),M=i("span",null,"Visible",-1),W={style:{flex:"1 0"}},q={style:{flex:"1 0"}},z=y({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(s,{emit:a}){const n=s,d=V([]),p=()=>a("update:modelValue",d.value);return x(()=>n.modelValue,(l,m)=>{f.exports.isEqual(l,m)||(d.value=f.exports.cloneDeep(l))}),C(()=>{d.value=f.exports.cloneDeep(n.modelValue)}),(l,m)=>(u(),c(e(E),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(k),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(F,{model:l.workspace},null,8,["model"])]),_:1}),t(e(L),{bordered:""},{header:o(()=>[t(e(S),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[j,t(e(_),{type:"vertical"}),K,t(e(_),{type:"vertical"}),M]),_:1})]),default:o(()=>[t(e(v),{modelValue:d.value,"onUpdate:modelValue":m[0]||(m[0]=r=>d.value=r),"force-fallback":e(A),style:{width:"100%"},"item-key":r=>r.path,onChange:p},{item:o(({element:r})=>[t(e(I),{style:{cursor:"ns-resize"}},{default:o(()=>[i("span",W,"/"+b(r.path),1),i("span",q,b(r.name),1),t(e(D),{checked:r.visible,"onUpdate:checked":g=>r.visible=g,type:"checkbox",onChange:p},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue","force-fallback","item-key"])]),_:1})]),_:1}))}}),H={style:{width:"50%"}},O={style:{width:"50%"}},Be=y({__name:"SidebarEditor",setup(s){const{result:a,loading:n}=T(()=>$.get());return(d,p)=>(u(),c(U,null,{default:o(()=>[e(n)||!e(a)?(u(),c(R,{key:0})):(u(),c(e(B),{key:1,style:{width:"100%"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(k),{gap:"40"},{default:o(()=>[i("div",H,[t(z,{modelValue:e(a).sidebar,"onUpdate:modelValue":p[0]||(p[0]=l=>e(a).sidebar=l),workspace:e(a)},null,8,["modelValue","workspace"])]),i("div",O,[t(N,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))]),_:1}))}});export{Be as default};
//# sourceMappingURL=SidebarEditor.46f78faa.js.map
