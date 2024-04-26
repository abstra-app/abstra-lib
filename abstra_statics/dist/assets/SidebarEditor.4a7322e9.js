import{d as y,r as v,K as A,o as V,eO as f,b as u,c,w as o,f as t,u as e,as as h,cC as x,e as s,eH as _,bA as C}from"./outputWidgets.eb498848.js";import{d as D}from"./vuedraggable.umd.398c0f07.js";import{_ as S}from"./SaveButton.vue_vue_type_script_setup_true_lang.bb6c6868.js";import{A as I}from"./Item.0b978aea.js";import{A as L}from"./index.758d1a49.js";import{A as w}from"./Title.ef0a0830.js";import{A as g}from"./index.60acdd5f.js";import{A as b}from"./index.23dbc6cf.js";import{A as E,F}from"./Form.bd9a7b94.js";import{S as U}from"./SidebarPreview.f7149a3b.js";import{C as $}from"./ContentLayout.e6c532b6.js";import{L as B}from"./LoadingContainer.69fcb6ae.js";import{a as N}from"./asyncComputed.6b2a5298.js";import{W as T}from"./workspaces.04f3ac75.js";import"./envVars.a4215f23.js";import"./UnsavedChangesHandler.74706656.js";import"./ExclamationCircleOutlined.1bc01160.js";import"./Modal.19adabd3.js";import"./Base.60455d70.js";import"./Link.32e09244.js";import"./hasIn.ceb11556.js";import"./PlayerNavbar.f03d8458.js";import"./PhKanban.vue.7f700aad.js";import"./PhSignOut.vue.91be2cfd.js";import"./Text.c3630863.js";import"./index.9769729d.js";import"./Paragraph.82d8120c.js";import"./index.c6702b27.js";import"./WidgetsFrame.81c1eb3e.js";import"./runnerData.c01bfcd7.js";import"./url.1d686ce1.js";import"./HomeContent.dd59cea5.js";import"./PhArrowSquareOut.vue.97dcf740.js";import"./index.f10dc7f9.js";import"./Card.70a00c39.js";import"./TabPane.73c86943.js";import"./record.7cc6fca0.js";import"./pubsub.1ca1fb40.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="3ca861a4-a970-4045-a091-b45476bfa9fb",r._sentryDebugIdIdentifier="sentry-dbid-3ca861a4-a970-4045-a091-b45476bfa9fb")}catch{}})();const j=s("span",null,"Route",-1),M=s("span",null,"Title",-1),R=s("span",null,"Visible",-1),W={style:{flex:"1 0"}},q={style:{flex:"1 0"}},z=y({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(r,{emit:a}){const n=r,i=v([]),p=()=>a("update:modelValue",i.value);return A(()=>n.modelValue,(l,m)=>{f.exports.isEqual(l,m)||(i.value=f.exports.cloneDeep(l))}),V(()=>{i.value=f.exports.cloneDeep(n.modelValue)}),(l,m)=>(u(),c(e(E),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(g),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(S,{model:l.workspace},null,8,["model"])]),_:1}),t(e(L),{bordered:""},{header:o(()=>[t(e(x),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[j,t(e(b),{type:"vertical"}),M,t(e(b),{type:"vertical"}),R]),_:1})]),default:o(()=>[t(e(D),{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=d=>i.value=d),style:{width:"100%"},onChange:p},{item:o(({element:d})=>[t(e(I),{style:{cursor:"ns-resize"}},{default:o(()=>[s("span",W,"/"+_(d.path),1),s("span",q,_(d.name),1),t(e(C),{checked:d.visible,"onUpdate:checked":k=>d.visible=k,type:"checkbox",onChange:p},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),H={style:{width:"50%"}},K={style:{width:"50%"}},Le=y({__name:"SidebarEditor",setup(r){const{result:a,loading:n}=N(()=>T.get());return(i,p)=>(u(),c($,null,{default:o(()=>[e(n)||!e(a)?(u(),c(B,{key:0})):(u(),c(e(F),{key:1,style:{width:"100%"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(g),{gap:"40"},{default:o(()=>[s("div",H,[t(z,{modelValue:e(a).sidebar,"onUpdate:modelValue":p[0]||(p[0]=l=>e(a).sidebar=l),workspace:e(a)},null,8,["modelValue","workspace"])]),s("div",K,[t(U,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))]),_:1}))}});export{Le as default};
//# sourceMappingURL=SidebarEditor.4a7322e9.js.map
