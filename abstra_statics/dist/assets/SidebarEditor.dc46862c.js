import{d as v,F as A}from"./vuedraggable.umd.3211cd38.js";import{d as b,r as V,K as x,o as C,eN as f,b as u,c,w as o,f as t,u as e,as as h,cE as S,e as i,eH as _,bA as D}from"./outputWidgets.0bd628c7.js";import{S as F}from"./SaveButton.e7000c1f.js";import{a as I,A as L}from"./index.f7ff6b9b.js";import{A as w}from"./Title.5179f9d3.js";import{A as k}from"./index.15d90771.js";import{A as y}from"./index.31a3eca9.js";import{A as E,F as B}from"./Form.97ee1a66.js";import{S as N}from"./SidebarPreview.e0ad8a2c.js";import{C as U}from"./ContentLayout.b9cceb3f.js";import{L as R}from"./LoadingContainer.7e8f45fe.js";import{a as T}from"./asyncComputed.fa3754be.js";import{W as $}from"./workspaces.87622bc3.js";import"./envVars.93634bf3.js";import"./UnsavedChangesHandler.9f2c81f9.js";import"./ExclamationCircleOutlined.51ce1dfa.js";import"./Modal.2682d548.js";import"./Base.d7e05c36.js";import"./Link.a99f8a0d.js";import"./hasIn.0ae3b12f.js";import"./PlayerNavbar.d7ade07a.js";import"./PhKanban.vue.e9f5c909.js";import"./PhSignOut.vue.b0ef901c.js";import"./index.c4dbb7a2.js";import"./Text.a58c50fc.js";import"./Home.2be70ecf.js";import"./api.3b384f52.js";import"./index.eeefb8ff.js";import"./fetch.05264cf9.js";import"./pubsub.3b71be5b.js";import"./runnerData.5d5e9aea.js";import"./url.6146fcd4.js";import"./PhArrowSquareOut.vue.bafeba6c.js";import"./index.c1171f8b.js";import"./Paragraph.7d8b9a9e.js";import"./index.33933275.js";import"./Card.a7e91768.js";import"./TabPane.4f09bdcd.js";import"./WidgetsFrame.6e61351d.js";import"./record.a3fecdb0.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="6027a132-e742-42ee-85f4-d8f237ac319a",s._sentryDebugIdIdentifier="sentry-dbid-6027a132-e742-42ee-85f4-d8f237ac319a")}catch{}})();const j=i("span",null,"Route",-1),K=i("span",null,"Title",-1),M=i("span",null,"Visible",-1),W={style:{flex:"1 0"}},q={style:{flex:"1 0"}},z=b({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(s,{emit:a}){const n=s,l=V([]),p=()=>a("update:modelValue",l.value);return x(()=>n.modelValue,(d,m)=>{f.exports.isEqual(d,m)||(l.value=f.exports.cloneDeep(d))}),C(()=>{l.value=f.exports.cloneDeep(n.modelValue)}),(d,m)=>(u(),c(e(E),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(k),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(F,{model:d.workspace},null,8,["model"])]),_:1}),t(e(L),{bordered:""},{header:o(()=>[t(e(S),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[j,t(e(y),{type:"vertical"}),K,t(e(y),{type:"vertical"}),M]),_:1})]),default:o(()=>[t(e(v),{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=r=>l.value=r),"force-fallback":e(A),style:{width:"100%"},"item-key":r=>r.path,onChange:p},{item:o(({element:r})=>[t(e(I),{style:{cursor:"ns-resize"}},{default:o(()=>[i("span",W,"/"+_(r.path),1),i("span",q,_(r.name),1),t(e(D),{checked:r.visible,"onUpdate:checked":g=>r.visible=g,type:"checkbox",onChange:p},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue","force-fallback","item-key"])]),_:1})]),_:1}))}}),H={style:{width:"50%"}},O={style:{width:"50%"}},Be=b({__name:"SidebarEditor",setup(s){const{result:a,loading:n}=T(()=>$.get());return(l,p)=>(u(),c(U,null,{default:o(()=>[e(n)||!e(a)?(u(),c(R,{key:0})):(u(),c(e(B),{key:1,style:{width:"100%"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(k),{gap:"40"},{default:o(()=>[i("div",H,[t(z,{modelValue:e(a).sidebar,"onUpdate:modelValue":p[0]||(p[0]=d=>e(a).sidebar=d),workspace:e(a)},null,8,["modelValue","workspace"])]),i("div",O,[t(N,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))]),_:1}))}});export{Be as default};
//# sourceMappingURL=SidebarEditor.dc46862c.js.map
