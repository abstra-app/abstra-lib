import{d as y,r as v,J as V,o as x,eN as f,b as c,c as u,w as o,f as t,u as e,ar as h,cB as A,e as s,eG as _,bz as C}from"./outputWidgets.67b8e105.js";import{d as D}from"./vuedraggable.umd.adf0224f.js";import{_ as S}from"./SaveButton.vue_vue_type_script_setup_true_lang.9e2221df.js";import{A as I}from"./Item.ae020df8.js";import{A as L}from"./index.6d4ddb8e.js";import{A as w}from"./Title.0e9e3995.js";import{A as g}from"./index.d4fea73d.js";import{A as b}from"./index.9466716e.js";import{A as B,F as E}from"./Form.81f9f85b.js";import{S as F}from"./SidebarPreview.2dd5035b.js";import{C as N}from"./ContentLayout.eaab81ce.js";import{L as U}from"./LoadingContainer.c953d853.js";import{a as $}from"./asyncComputed.b94b69d8.js";import{W as T}from"./workspaces.48ca9908.js";import"./envVars.59602ef8.js";import"./UnsavedChangesHandler.7c435ce0.js";import"./ExclamationCircleOutlined.17de2d51.js";import"./Modal.7fa04887.js";import"./Text.e34a34a6.js";import"./Link.345009d7.js";import"./hasIn.f1db44aa.js";import"./PlayerNavbar.82526c49.js";import"./PhKanban.vue.af4f1390.js";import"./PhSignOut.vue.7451eeb1.js";import"./index.41a7cb05.js";import"./Paragraph.c16301cc.js";import"./index.2161b4a8.js";import"./WidgetsFrame.dfc98628.js";import"./runnerData.64c9bd9d.js";import"./url.84ff0cda.js";import"./HomeContent.fc556aac.js";import"./PhArrowSquareOut.vue.c06542f0.js";import"./index.182f0826.js";import"./Card.6729de56.js";import"./index.d0e11752.js";import"./TabPane.203fda84.js";import"./record.4962cb12.js";import"./pubsub.5efd0588.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="3dcd7afa-e68d-43c8-bb5c-0b8c10cb4bd5",r._sentryDebugIdIdentifier="sentry-dbid-3dcd7afa-e68d-43c8-bb5c-0b8c10cb4bd5")}catch{}})();const j=s("span",null,"Route",-1),z=s("span",null,"Title",-1),M=s("span",null,"Visible",-1),R={style:{flex:"1 0"}},W={style:{flex:"1 0"}},q=y({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(r,{emit:a}){const n=r,i=v([]),p=()=>a("update:modelValue",i.value);return V(()=>n.modelValue,(d,m)=>{f.exports.isEqual(d,m)||(i.value=f.exports.cloneDeep(d))}),x(()=>{i.value=f.exports.cloneDeep(n.modelValue)}),(d,m)=>(c(),u(e(B),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(g),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(S,{model:d.workspace},null,8,["model"])]),_:1}),t(e(L),{bordered:""},{header:o(()=>[t(e(A),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[j,t(e(b),{type:"vertical"}),z,t(e(b),{type:"vertical"}),M]),_:1})]),default:o(()=>[t(e(D),{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=l=>i.value=l),style:{width:"100%"},onChange:p},{item:o(({element:l})=>[t(e(I),{style:{cursor:"ns-resize"}},{default:o(()=>[s("span",R,"/"+_(l.path),1),s("span",W,_(l.name),1),t(e(C),{checked:l.visible,"onUpdate:checked":k=>l.visible=k,type:"checkbox",onChange:p},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),G={style:{width:"50%"}},J={style:{width:"50%"}},Le=y({__name:"SidebarEditor",setup(r){const{result:a,loading:n}=$(()=>T.get());return(i,p)=>(c(),u(N,null,{default:o(()=>[e(n)||!e(a)?(c(),u(U,{key:0})):(c(),u(e(E),{key:1,style:{width:"100%"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(g),{gap:"40"},{default:o(()=>[s("div",G,[t(q,{modelValue:e(a).sidebar,"onUpdate:modelValue":p[0]||(p[0]=d=>e(a).sidebar=d),workspace:e(a)},null,8,["modelValue","workspace"])]),s("div",J,[t(F,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))]),_:1}))}});export{Le as default};
//# sourceMappingURL=SidebarEditor.fa028af8.js.map
