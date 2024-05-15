import{d as v,F as A}from"./vuedraggable.umd.3bc303cc.js";import{d as b,r as V,K as x,o as C,eN as f,b as u,c,w as o,f as t,u as e,as as h,cE as S,e as i,eH as _,bA as D}from"./outputWidgets.0667e48c.js";import{S as F}from"./SaveButton.de9e13cf.js";import{A as I}from"./Item.6c7c60e8.js";import{A as L}from"./index.d0815798.js";import{A as w}from"./Title.95df57ba.js";import{A as k}from"./index.2c556bd4.js";import{A as y}from"./index.0a7a0d17.js";import{A as E,F as B}from"./Form.2d3d9370.js";import{S as N}from"./SidebarPreview.e037231a.js";import{C as U}from"./ContentLayout.21ca12c3.js";import{L as R}from"./LoadingContainer.5eba65e7.js";import{a as T}from"./asyncComputed.014b59b2.js";import{W as $}from"./workspaces.7c82a8c7.js";import"./envVars.a636afef.js";import"./UnsavedChangesHandler.2e2d1498.js";import"./ExclamationCircleOutlined.2586e615.js";import"./Modal.4cd24584.js";import"./Base.f655980f.js";import"./Link.29528afc.js";import"./hasIn.bf0e7b1e.js";import"./PlayerNavbar.a79593c9.js";import"./PhKanban.vue.2d738db9.js";import"./PhSignOut.vue.9da21ad7.js";import"./index.8eed30f8.js";import"./Text.49b42065.js";import"./Home.2fc94b3c.js";import"./api.dca82865.js";import"./index.e8115b20.js";import"./fetch.0e525297.js";import"./pubsub.c96de954.js";import"./runnerData.07091cf7.js";import"./url.3b1dfe5a.js";import"./PhArrowSquareOut.vue.8beb2c1e.js";import"./index.326f267a.js";import"./Paragraph.3090005d.js";import"./index.58b27050.js";import"./Card.3eaf10d8.js";import"./TabPane.07f16b8d.js";import"./WidgetsFrame.a0f14bc3.js";import"./record.4f47485c.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="48fe1c0e-7d46-4e20-a724-25fa1cea1fda",s._sentryDebugIdIdentifier="sentry-dbid-48fe1c0e-7d46-4e20-a724-25fa1cea1fda")}catch{}})();const j=i("span",null,"Route",-1),K=i("span",null,"Title",-1),M=i("span",null,"Visible",-1),W={style:{flex:"1 0"}},q={style:{flex:"1 0"}},z=b({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(s,{emit:a}){const p=s,l=V([]),n=()=>a("update:modelValue",l.value);return x(()=>p.modelValue,(d,m)=>{f.exports.isEqual(d,m)||(l.value=f.exports.cloneDeep(d))}),C(()=>{l.value=f.exports.cloneDeep(p.modelValue)}),(d,m)=>(u(),c(e(E),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(k),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(F,{model:d.workspace},null,8,["model"])]),_:1}),t(e(L),{bordered:""},{header:o(()=>[t(e(S),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[j,t(e(y),{type:"vertical"}),K,t(e(y),{type:"vertical"}),M]),_:1})]),default:o(()=>[t(e(v),{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=r=>l.value=r),"force-fallback":e(A),style:{width:"100%"},"item-key":r=>r.path,onChange:n},{item:o(({element:r})=>[t(e(I),{style:{cursor:"ns-resize"}},{default:o(()=>[i("span",W,"/"+_(r.path),1),i("span",q,_(r.name),1),t(e(D),{checked:r.visible,"onUpdate:checked":g=>r.visible=g,type:"checkbox",onChange:n},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue","force-fallback","item-key"])]),_:1})]),_:1}))}}),H={style:{width:"50%"}},O={style:{width:"50%"}},Ne=b({__name:"SidebarEditor",setup(s){const{result:a,loading:p}=T(()=>$.get());return(l,n)=>(u(),c(U,null,{default:o(()=>[e(p)||!e(a)?(u(),c(R,{key:0})):(u(),c(e(B),{key:1,style:{width:"100%"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(k),{gap:"40"},{default:o(()=>[i("div",H,[t(z,{modelValue:e(a).sidebar,"onUpdate:modelValue":n[0]||(n[0]=d=>e(a).sidebar=d),workspace:e(a)},null,8,["modelValue","workspace"])]),i("div",O,[t(N,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))]),_:1}))}});export{Ne as default};
//# sourceMappingURL=SidebarEditor.f4882796.js.map
