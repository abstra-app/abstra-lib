import{d as y,r as v,K as A,o as V,eO as f,b as u,c,w as o,f as t,u as e,as as h,cC as x,e as s,eH as _,bA as C}from"./outputWidgets.899c2ba6.js";import{d as D}from"./vuedraggable.umd.2c112b1d.js";import{_ as S}from"./SaveButton.vue_vue_type_script_setup_true_lang.3b36d9aa.js";import{A as I}from"./Item.2f8df97b.js";import{A as L}from"./index.11a736f4.js";import{A as w}from"./Title.170ebf83.js";import{A as g}from"./index.1e01f451.js";import{A as b}from"./index.033c7283.js";import{A as E,F}from"./Form.63ea0853.js";import{S as U}from"./SidebarPreview.b1403b45.js";import{C as $}from"./ContentLayout.ca6e18ae.js";import{L as B}from"./LoadingContainer.2a93a56a.js";import{a as N}from"./asyncComputed.af5dc7e5.js";import{W as T}from"./workspaces.4a2bedc3.js";import"./envVars.af130388.js";import"./UnsavedChangesHandler.7b1ef431.js";import"./ExclamationCircleOutlined.bb2808e4.js";import"./Modal.0eb526d9.js";import"./Base.ddd59c02.js";import"./Link.16820cf2.js";import"./hasIn.35ca7acb.js";import"./PlayerNavbar.2f29c76b.js";import"./PhKanban.vue.b4b31b6b.js";import"./PhSignOut.vue.3deb34fb.js";import"./Text.b13957eb.js";import"./index.a9b59819.js";import"./Paragraph.9297eb2d.js";import"./index.fde9dc0c.js";import"./WidgetsFrame.a484c132.js";import"./runnerData.ce8e1422.js";import"./url.89e8212d.js";import"./HomeContent.03e59895.js";import"./PhArrowSquareOut.vue.77997bbf.js";import"./index.4c123317.js";import"./Card.d83f826a.js";import"./TabPane.b033e337.js";import"./record.11af8056.js";import"./pubsub.ccef1214.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="160628fa-1d0d-4c34-96cd-16c0b8c59f62",r._sentryDebugIdIdentifier="sentry-dbid-160628fa-1d0d-4c34-96cd-16c0b8c59f62")}catch{}})();const j=s("span",null,"Route",-1),M=s("span",null,"Title",-1),R=s("span",null,"Visible",-1),W={style:{flex:"1 0"}},q={style:{flex:"1 0"}},z=y({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(r,{emit:a}){const n=r,i=v([]),p=()=>a("update:modelValue",i.value);return A(()=>n.modelValue,(d,m)=>{f.exports.isEqual(d,m)||(i.value=f.exports.cloneDeep(d))}),V(()=>{i.value=f.exports.cloneDeep(n.modelValue)}),(d,m)=>(u(),c(e(E),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(g),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(S,{model:d.workspace},null,8,["model"])]),_:1}),t(e(L),{bordered:""},{header:o(()=>[t(e(x),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[j,t(e(b),{type:"vertical"}),M,t(e(b),{type:"vertical"}),R]),_:1})]),default:o(()=>[t(e(D),{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=l=>i.value=l),style:{width:"100%"},onChange:p},{item:o(({element:l})=>[t(e(I),{style:{cursor:"ns-resize"}},{default:o(()=>[s("span",W,"/"+_(l.path),1),s("span",q,_(l.name),1),t(e(C),{checked:l.visible,"onUpdate:checked":k=>l.visible=k,type:"checkbox",onChange:p},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),H={style:{width:"50%"}},K={style:{width:"50%"}},Le=y({__name:"SidebarEditor",setup(r){const{result:a,loading:n}=N(()=>T.get());return(i,p)=>(u(),c($,null,{default:o(()=>[e(n)||!e(a)?(u(),c(B,{key:0})):(u(),c(e(F),{key:1,style:{width:"100%"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(g),{gap:"40"},{default:o(()=>[s("div",H,[t(z,{modelValue:e(a).sidebar,"onUpdate:modelValue":p[0]||(p[0]=d=>e(a).sidebar=d),workspace:e(a)},null,8,["modelValue","workspace"])]),s("div",K,[t(U,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))]),_:1}))}});export{Le as default};
//# sourceMappingURL=SidebarEditor.b8979811.js.map
