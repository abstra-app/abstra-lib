import{d as b,r as v,K as A,o as V,eO as f,b as c,c as u,w as o,f as t,u as e,as as h,cC as x,e as s,eH as _,bA as C}from"./outputWidgets.65049c44.js";import{d as D}from"./vuedraggable.umd.e7e3665f.js";import{_ as S}from"./SaveButton.vue_vue_type_script_setup_true_lang.9ad36269.js";import{A as I}from"./Item.03a1c720.js";import{A as L}from"./index.d00a2359.js";import{A as w}from"./Title.a6310807.js";import{A as g}from"./index.e7a31063.js";import{A as y}from"./index.549d18ee.js";import{A as E,F}from"./Form.7baf356e.js";import{S as U}from"./SidebarPreview.9433534e.js";import{C as $}from"./ContentLayout.cfd5079d.js";import{L as B}from"./LoadingContainer.c0bb44dc.js";import{a as N}from"./asyncComputed.f574921c.js";import{W as T}from"./workspaces.6c41c636.js";import"./envVars.08186083.js";import"./UnsavedChangesHandler.e2a3c980.js";import"./ExclamationCircleOutlined.607b6c06.js";import"./Modal.291bf2b7.js";import"./Base.fee2c985.js";import"./Link.1fd640a3.js";import"./hasIn.0c24a40c.js";import"./PlayerNavbar.c6a27230.js";import"./PhKanban.vue.4f5334f5.js";import"./PhSignOut.vue.d7b64015.js";import"./Text.b5308c04.js";import"./index.2c66eb17.js";import"./Paragraph.1591b6ff.js";import"./index.5ec4a4c0.js";import"./WidgetsFrame.1c14694e.js";import"./runnerData.a573adef.js";import"./url.52ad6bd1.js";import"./HomeContent.33b48692.js";import"./PhArrowSquareOut.vue.de7fc556.js";import"./index.e0401720.js";import"./Card.801ebae7.js";import"./TabPane.d0b415cd.js";import"./record.13e1b387.js";import"./pubsub.f43ad40e.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="0484c9c5-31f3-4424-9089-6ec8c89c3732",r._sentryDebugIdIdentifier="sentry-dbid-0484c9c5-31f3-4424-9089-6ec8c89c3732")}catch{}})();const j=s("span",null,"Route",-1),M=s("span",null,"Title",-1),R=s("span",null,"Visible",-1),W={style:{flex:"1 0"}},q={style:{flex:"1 0"}},z=b({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(r,{emit:a}){const n=r,i=v([]),p=()=>a("update:modelValue",i.value);return A(()=>n.modelValue,(l,m)=>{f.exports.isEqual(l,m)||(i.value=f.exports.cloneDeep(l))}),V(()=>{i.value=f.exports.cloneDeep(n.modelValue)}),(l,m)=>(c(),u(e(E),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(g),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(S,{model:l.workspace},null,8,["model"])]),_:1}),t(e(L),{bordered:""},{header:o(()=>[t(e(x),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[j,t(e(y),{type:"vertical"}),M,t(e(y),{type:"vertical"}),R]),_:1})]),default:o(()=>[t(e(D),{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=d=>i.value=d),style:{width:"100%"},onChange:p},{item:o(({element:d})=>[t(e(I),{style:{cursor:"ns-resize"}},{default:o(()=>[s("span",W,"/"+_(d.path),1),s("span",q,_(d.name),1),t(e(C),{checked:d.visible,"onUpdate:checked":k=>d.visible=k,type:"checkbox",onChange:p},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),H={style:{width:"50%"}},K={style:{width:"50%"}},Le=b({__name:"SidebarEditor",setup(r){const{result:a,loading:n}=N(()=>T.get());return(i,p)=>(c(),u($,null,{default:o(()=>[e(n)||!e(a)?(c(),u(B,{key:0})):(c(),u(e(F),{key:1,style:{width:"100%"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(g),{gap:"40"},{default:o(()=>[s("div",H,[t(z,{modelValue:e(a).sidebar,"onUpdate:modelValue":p[0]||(p[0]=l=>e(a).sidebar=l),workspace:e(a)},null,8,["modelValue","workspace"])]),s("div",K,[t(U,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))]),_:1}))}});export{Le as default};
//# sourceMappingURL=SidebarEditor.076c0ee2.js.map
