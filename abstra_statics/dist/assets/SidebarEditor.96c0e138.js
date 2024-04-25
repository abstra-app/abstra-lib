import{d as y,r as v,K as A,o as V,eO as f,b as u,c,w as o,f as t,u as e,as as h,cC as x,e as s,eH as _,bA as C}from"./outputWidgets.931faf2f.js";import{d as D}from"./vuedraggable.umd.0f0d49d8.js";import{_ as S}from"./SaveButton.vue_vue_type_script_setup_true_lang.6753b12f.js";import{A as I}from"./Item.72274fad.js";import{A as L}from"./index.9527284b.js";import{A as w}from"./Title.3fb3b02a.js";import{A as g}from"./index.d7ad9072.js";import{A as b}from"./index.15f89fb0.js";import{A as E,F}from"./Form.291b3028.js";import{S as U}from"./SidebarPreview.d862ba5f.js";import{C as $}from"./ContentLayout.424f36c4.js";import{L as B}from"./LoadingContainer.e93a09d4.js";import{a as N}from"./asyncComputed.9fb20d20.js";import{W as T}from"./workspaces.71b5aa16.js";import"./envVars.96b5be28.js";import"./UnsavedChangesHandler.38fbcb79.js";import"./ExclamationCircleOutlined.19078426.js";import"./Modal.6b208395.js";import"./Base.e5a5c027.js";import"./Link.3a8fa941.js";import"./hasIn.b28c97a7.js";import"./PlayerNavbar.02deaea6.js";import"./PhKanban.vue.9c89b144.js";import"./PhSignOut.vue.f08f422b.js";import"./Text.8c5bf397.js";import"./index.348e7585.js";import"./Paragraph.4d22326b.js";import"./index.762f490e.js";import"./WidgetsFrame.5bd6bbd8.js";import"./runnerData.f2b08765.js";import"./url.bf66e82e.js";import"./HomeContent.26822d76.js";import"./PhArrowSquareOut.vue.295e5864.js";import"./index.61b0ff45.js";import"./Card.63605602.js";import"./TabPane.cc359a69.js";import"./record.4df6a389.js";import"./pubsub.b629d308.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="ea580564-1ea4-4306-b5ed-cfda96030431",r._sentryDebugIdIdentifier="sentry-dbid-ea580564-1ea4-4306-b5ed-cfda96030431")}catch{}})();const j=s("span",null,"Route",-1),M=s("span",null,"Title",-1),R=s("span",null,"Visible",-1),W={style:{flex:"1 0"}},q={style:{flex:"1 0"}},z=y({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(r,{emit:a}){const n=r,i=v([]),p=()=>a("update:modelValue",i.value);return A(()=>n.modelValue,(d,m)=>{f.exports.isEqual(d,m)||(i.value=f.exports.cloneDeep(d))}),V(()=>{i.value=f.exports.cloneDeep(n.modelValue)}),(d,m)=>(u(),c(e(E),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(g),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(S,{model:d.workspace},null,8,["model"])]),_:1}),t(e(L),{bordered:""},{header:o(()=>[t(e(x),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[j,t(e(b),{type:"vertical"}),M,t(e(b),{type:"vertical"}),R]),_:1})]),default:o(()=>[t(e(D),{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=l=>i.value=l),style:{width:"100%"},onChange:p},{item:o(({element:l})=>[t(e(I),{style:{cursor:"ns-resize"}},{default:o(()=>[s("span",W,"/"+_(l.path),1),s("span",q,_(l.name),1),t(e(C),{checked:l.visible,"onUpdate:checked":k=>l.visible=k,type:"checkbox",onChange:p},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),H={style:{width:"50%"}},K={style:{width:"50%"}},Le=y({__name:"SidebarEditor",setup(r){const{result:a,loading:n}=N(()=>T.get());return(i,p)=>(u(),c($,null,{default:o(()=>[e(n)||!e(a)?(u(),c(B,{key:0})):(u(),c(e(F),{key:1,style:{width:"100%"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(g),{gap:"40"},{default:o(()=>[s("div",H,[t(z,{modelValue:e(a).sidebar,"onUpdate:modelValue":p[0]||(p[0]=d=>e(a).sidebar=d),workspace:e(a)},null,8,["modelValue","workspace"])]),s("div",K,[t(U,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))]),_:1}))}});export{Le as default};
//# sourceMappingURL=SidebarEditor.96c0e138.js.map
