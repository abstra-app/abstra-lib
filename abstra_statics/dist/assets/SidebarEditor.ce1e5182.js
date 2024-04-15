import{d as y,r as v,J as V,o as x,eN as f,b as u,c,w as o,f as t,u as e,ar as h,cB as A,e as s,eG as _,bz as C}from"./outputWidgets.c813e1c0.js";import{d as D}from"./vuedraggable.umd.52b7afe0.js";import{_ as S}from"./SaveButton.vue_vue_type_script_setup_true_lang.285a3b44.js";import{A as I}from"./Item.dae55c63.js";import{A as L}from"./index.b39d762b.js";import{A as w}from"./Title.9ba346c5.js";import{A as g}from"./index.5910e014.js";import{A as b}from"./index.173cbd00.js";import{A as B,F as E}from"./Form.bae548d6.js";import{S as F}from"./SidebarPreview.045e99d0.js";import{C as N}from"./ContentLayout.e7bdea88.js";import{L as U}from"./LoadingContainer.7b83f5d9.js";import{a as $}from"./asyncComputed.d544976a.js";import{W as T}from"./workspaces.c62c7e4c.js";import"./envVars.619c8871.js";import"./UnsavedChangesHandler.7436fcc2.js";import"./ExclamationCircleOutlined.b0956782.js";import"./Modal.c08ae084.js";import"./Text.11a46b63.js";import"./Link.fad7fffa.js";import"./hasIn.a85ca19a.js";import"./PlayerNavbar.24dc9ef1.js";import"./PhKanban.vue.d7d81ae2.js";import"./PhSignOut.vue.8b47e2d9.js";import"./index.690756e5.js";import"./Paragraph.4bf06d46.js";import"./index.e6685eb1.js";import"./WidgetsFrame.bef5863e.js";import"./runnerData.17b52d89.js";import"./url.f874f1d0.js";import"./HomeContent.fbb6c402.js";import"./PhArrowSquareOut.vue.7fca856e.js";import"./index.7866fffb.js";import"./Card.bcdf295b.js";import"./TabPane.be860141.js";import"./record.f54668e3.js";import"./pubsub.e4fdbaee.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="4240de7f-3b48-45cc-89b1-ff7c7f016f95",r._sentryDebugIdIdentifier="sentry-dbid-4240de7f-3b48-45cc-89b1-ff7c7f016f95")}catch{}})();const j=s("span",null,"Route",-1),z=s("span",null,"Title",-1),M=s("span",null,"Visible",-1),R={style:{flex:"1 0"}},W={style:{flex:"1 0"}},q=y({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(r,{emit:a}){const n=r,i=v([]),p=()=>a("update:modelValue",i.value);return V(()=>n.modelValue,(d,m)=>{f.exports.isEqual(d,m)||(i.value=f.exports.cloneDeep(d))}),x(()=>{i.value=f.exports.cloneDeep(n.modelValue)}),(d,m)=>(u(),c(e(B),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(g),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(S,{model:d.workspace},null,8,["model"])]),_:1}),t(e(L),{bordered:""},{header:o(()=>[t(e(A),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[j,t(e(b),{type:"vertical"}),z,t(e(b),{type:"vertical"}),M]),_:1})]),default:o(()=>[t(e(D),{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=l=>i.value=l),style:{width:"100%"},onChange:p},{item:o(({element:l})=>[t(e(I),{style:{cursor:"ns-resize"}},{default:o(()=>[s("span",R,"/"+_(l.path),1),s("span",W,_(l.name),1),t(e(C),{checked:l.visible,"onUpdate:checked":k=>l.visible=k,type:"checkbox",onChange:p},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),G={style:{width:"50%"}},J={style:{width:"50%"}},Ie=y({__name:"SidebarEditor",setup(r){const{result:a,loading:n}=$(()=>T.get());return(i,p)=>(u(),c(N,null,{default:o(()=>[e(n)||!e(a)?(u(),c(U,{key:0})):(u(),c(e(E),{key:1,style:{width:"100%"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(g),{gap:"40"},{default:o(()=>[s("div",G,[t(q,{modelValue:e(a).sidebar,"onUpdate:modelValue":p[0]||(p[0]=d=>e(a).sidebar=d),workspace:e(a)},null,8,["modelValue","workspace"])]),s("div",J,[t(F,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))]),_:1}))}});export{Ie as default};
//# sourceMappingURL=SidebarEditor.ce1e5182.js.map
