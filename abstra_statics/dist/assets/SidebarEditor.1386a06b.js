import{d as v,F as A}from"./vuedraggable.umd.91373cdb.js";import{d as y,r as V,K as x,o as C,eN as f,b as u,c,w as o,f as t,u as e,as as h,cE as S,e as i,eH as _,bA as D}from"./outputWidgets.a2070fd1.js";import{S as F}from"./SaveButton.c46c53ef.js";import{a as I,A as L}from"./index.7dc9a83b.js";import{A as w}from"./Title.32900c16.js";import{A as k}from"./index.6d7ec150.js";import{A as b}from"./index.36189686.js";import{A as E,F as B}from"./Form.f180dc07.js";import{S as N}from"./SidebarPreview.66a948a2.js";import{C as U}from"./ContentLayout.7c8e9e2d.js";import{L as R}from"./LoadingContainer.340e0896.js";import{a as T}from"./asyncComputed.63c85e11.js";import{W as $}from"./workspaces.fb31eea1.js";import"./envVars.1e98bc40.js";import"./UnsavedChangesHandler.30409eeb.js";import"./ExclamationCircleOutlined.5babd4c1.js";import"./Modal.a39cc3c8.js";import"./Base.5833bba8.js";import"./Link.29b01793.js";import"./hasIn.1dccb3e1.js";import"./PlayerNavbar.09acfebd.js";import"./PhKanban.vue.40820051.js";import"./PhSignOut.vue.34040fae.js";import"./index.85ebf667.js";import"./Text.16f42a64.js";import"./Home.3a02a3d0.js";import"./api.c6bb2432.js";import"./index.fb9777e5.js";import"./fetch.617d5fb9.js";import"./pubsub.c41f1f61.js";import"./runnerData.191dd524.js";import"./url.4cc10c52.js";import"./PhArrowSquareOut.vue.e11e3bbb.js";import"./index.f948db18.js";import"./Paragraph.584fc23c.js";import"./index.ab2fec0b.js";import"./Card.ecbf5654.js";import"./TabPane.79dd8c3f.js";import"./WidgetsFrame.f836c36d.js";import"./record.b0fdd3c6.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="22371285-193a-458a-a17b-9f7d9275eded",s._sentryDebugIdIdentifier="sentry-dbid-22371285-193a-458a-a17b-9f7d9275eded")}catch{}})();const j=i("span",null,"Route",-1),K=i("span",null,"Title",-1),M=i("span",null,"Visible",-1),W={style:{flex:"1 0"}},q={style:{flex:"1 0"}},z=y({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(s,{emit:a}){const n=s,d=V([]),p=()=>a("update:modelValue",d.value);return x(()=>n.modelValue,(l,m)=>{f.exports.isEqual(l,m)||(d.value=f.exports.cloneDeep(l))}),C(()=>{d.value=f.exports.cloneDeep(n.modelValue)}),(l,m)=>(u(),c(e(E),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(k),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(F,{model:l.workspace},null,8,["model"])]),_:1}),t(e(L),{bordered:""},{header:o(()=>[t(e(S),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[j,t(e(b),{type:"vertical"}),K,t(e(b),{type:"vertical"}),M]),_:1})]),default:o(()=>[t(e(v),{modelValue:d.value,"onUpdate:modelValue":m[0]||(m[0]=r=>d.value=r),"force-fallback":e(A),style:{width:"100%"},"item-key":r=>r.path,onChange:p},{item:o(({element:r})=>[t(e(I),{style:{cursor:"ns-resize"}},{default:o(()=>[i("span",W,"/"+_(r.path),1),i("span",q,_(r.name),1),t(e(D),{checked:r.visible,"onUpdate:checked":g=>r.visible=g,type:"checkbox",onChange:p},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue","force-fallback","item-key"])]),_:1})]),_:1}))}}),H={style:{width:"50%"}},O={style:{width:"50%"}},Be=y({__name:"SidebarEditor",setup(s){const{result:a,loading:n}=T(()=>$.get());return(d,p)=>(u(),c(U,null,{default:o(()=>[e(n)||!e(a)?(u(),c(R,{key:0})):(u(),c(e(B),{key:1,style:{width:"100%"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(k),{gap:"40"},{default:o(()=>[i("div",H,[t(z,{modelValue:e(a).sidebar,"onUpdate:modelValue":p[0]||(p[0]=l=>e(a).sidebar=l),workspace:e(a)},null,8,["modelValue","workspace"])]),i("div",O,[t(N,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))]),_:1}))}});export{Be as default};
//# sourceMappingURL=SidebarEditor.1386a06b.js.map
