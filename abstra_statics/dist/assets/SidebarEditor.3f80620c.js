import{d as v,F as A}from"./vuedraggable.umd.8ed3015f.js";import{d as y,r as V,K as x,o as C,eN as f,b as u,c,w as o,f as t,u as e,as as h,cE as S,e as i,eH as _,bA as D}from"./outputWidgets.f5599d6d.js";import{S as F}from"./SaveButton.51a4429a.js";import{a as I,A as L}from"./index.ff746398.js";import{A as w}from"./Title.4459664d.js";import{A as k}from"./index.dcd01b68.js";import{A as b}from"./index.7489ed5f.js";import{A as E,F as B}from"./Form.3dd55fa4.js";import{S as N}from"./SidebarPreview.cbcc3d33.js";import{C as U}from"./ContentLayout.1a4d2418.js";import{L as R}from"./LoadingContainer.f6039b40.js";import{a as T}from"./asyncComputed.0b3f4bef.js";import{W as $}from"./workspaces.15ffdff6.js";import"./envVars.bdb8c7ff.js";import"./UnsavedChangesHandler.3afd83a7.js";import"./ExclamationCircleOutlined.528ce26b.js";import"./Modal.aad2bb70.js";import"./Base.c7cfe534.js";import"./Link.a00053a5.js";import"./hasIn.c9c1044c.js";import"./PlayerNavbar.239b3b96.js";import"./PhKanban.vue.54b1d779.js";import"./PhSignOut.vue.ef2db1e4.js";import"./index.1d2fd132.js";import"./Text.bbce04f5.js";import"./Home.f89265fa.js";import"./api.9da4cf09.js";import"./index.5ed4082f.js";import"./fetch.e96fea5e.js";import"./pubsub.68f00680.js";import"./runnerData.87651221.js";import"./url.d6de7391.js";import"./PhArrowSquareOut.vue.77768352.js";import"./index.01175646.js";import"./Paragraph.0daf6b7c.js";import"./index.0e08c866.js";import"./Card.070ab2bd.js";import"./TabPane.03c542fd.js";import"./WidgetsFrame.90f0fcfc.js";import"./record.91f82bfb.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="85ad299b-76ec-4a81-813a-477e4560fea8",s._sentryDebugIdIdentifier="sentry-dbid-85ad299b-76ec-4a81-813a-477e4560fea8")}catch{}})();const j=i("span",null,"Route",-1),K=i("span",null,"Title",-1),M=i("span",null,"Visible",-1),W={style:{flex:"1 0"}},q={style:{flex:"1 0"}},z=y({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(s,{emit:a}){const n=s,l=V([]),p=()=>a("update:modelValue",l.value);return x(()=>n.modelValue,(d,m)=>{f.exports.isEqual(d,m)||(l.value=f.exports.cloneDeep(d))}),C(()=>{l.value=f.exports.cloneDeep(n.modelValue)}),(d,m)=>(u(),c(e(E),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(k),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(F,{model:d.workspace},null,8,["model"])]),_:1}),t(e(L),{bordered:""},{header:o(()=>[t(e(S),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[j,t(e(b),{type:"vertical"}),K,t(e(b),{type:"vertical"}),M]),_:1})]),default:o(()=>[t(e(v),{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=r=>l.value=r),"force-fallback":e(A),style:{width:"100%"},"item-key":r=>r.path,onChange:p},{item:o(({element:r})=>[t(e(I),{style:{cursor:"ns-resize"}},{default:o(()=>[i("span",W,"/"+_(r.path),1),i("span",q,_(r.name),1),t(e(D),{checked:r.visible,"onUpdate:checked":g=>r.visible=g,type:"checkbox",onChange:p},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue","force-fallback","item-key"])]),_:1})]),_:1}))}}),H={style:{width:"50%"}},O={style:{width:"50%"}},Be=y({__name:"SidebarEditor",setup(s){const{result:a,loading:n}=T(()=>$.get());return(l,p)=>(u(),c(U,null,{default:o(()=>[e(n)||!e(a)?(u(),c(R,{key:0})):(u(),c(e(B),{key:1,style:{width:"100%"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(k),{gap:"40"},{default:o(()=>[i("div",H,[t(z,{modelValue:e(a).sidebar,"onUpdate:modelValue":p[0]||(p[0]=d=>e(a).sidebar=d),workspace:e(a)},null,8,["modelValue","workspace"])]),i("div",O,[t(N,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))]),_:1}))}});export{Be as default};
//# sourceMappingURL=SidebarEditor.3f80620c.js.map
