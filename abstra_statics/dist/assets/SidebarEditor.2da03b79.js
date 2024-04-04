import{d as y,r as v,I as x,o as A,eM as c,b as u,c as f,w as o,f as t,u as e,aq as h,cA as V,e as s,eD as _,by as D}from"./outputWidgets.a2cb859a.js";import{d as I}from"./vuedraggable.umd.647e7c04.js";import{_ as S}from"./SaveButton.vue_vue_type_script_setup_true_lang.0511da3e.js";import{A as C}from"./Item.99ae4a29.js";import{A as E}from"./index.986d0125.js";import{A as w}from"./Title.3743ca34.js";import{A as g}from"./index.cbf5db4d.js";import{A as b}from"./index.0cc4760d.js";import{A as F,F as L}from"./Form.39814ec1.js";import{W as U}from"./workspaces.8d71ce76.js";import{a as $}from"./asyncComputed.7f6ea228.js";import"./envVars.b68edddf.js";import{L as B}from"./CircularLoading.96923245.js";import{S as M}from"./SidebarPreview.e4ac50ab.js";import"./ant-design.568b4963.js";import"./index.aacb321e.js";import"./Modal.d4ab2177.js";import"./Text.c857a52e.js";import"./Link.3a7fc5f8.js";import"./hasIn.16f0ccac.js";import"./runnerData.f77af4da.js";import"./url.722655b0.js";import"./record.50e662d1.js";import"./pubsub.d2194df9.js";import"./PlayerNavbar.0b53bb42.js";import"./PhKanban.vue.c65c47b8.js";import"./PhSignOut.vue.679ec0be.js";import"./index.237d43c9.js";import"./Paragraph.1adc096e.js";import"./index.48cb8c58.js";import"./WidgetsFrame.bd4b0c59.js";import"./HomeContent.e677882c.js";import"./PhArrowSquareOut.vue.775dcafd.js";import"./index.62927e84.js";import"./Card.14c15dd2.js";import"./index.684a5a19.js";import"./TabPane.d4ba041a.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="d3a456a0-9442-4f0b-87fc-f1e3efafaccb",r._sentryDebugIdIdentifier="sentry-dbid-d3a456a0-9442-4f0b-87fc-f1e3efafaccb")}catch{}})();const N=s("span",null,"Route",-1),T=s("span",null,"Title",-1),j=s("span",null,"Visible",-1),q={style:{flex:"1 0"}},R={style:{flex:"1 0"}},W=y({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(r,{emit:a}){const p=r,i=v([]),n=()=>a("update:modelValue",i.value);return x(()=>p.modelValue,(d,m)=>{c.exports.isEqual(d,m)||(i.value=c.exports.cloneDeep(d))}),A(()=>{i.value=c.exports.cloneDeep(p.modelValue)}),(d,m)=>(u(),f(e(F),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(g),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(S,{model:d.workspace},null,8,["model"])]),_:1}),t(e(E),{bordered:""},{header:o(()=>[t(e(V),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[N,t(e(b),{type:"vertical"}),T,t(e(b),{type:"vertical"}),j]),_:1})]),default:o(()=>[t(e(I),{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=l=>i.value=l),style:{width:"100%"},onChange:n},{item:o(({element:l})=>[t(e(C),{style:{cursor:"ns-resize"}},{default:o(()=>[s("span",q,"/"+_(l.path),1),s("span",R,_(l.name),1),t(e(D),{checked:l.visible,"onUpdate:checked":k=>l.visible=k,type:"checkbox",onChange:n},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),z={style:{width:"50%"}},P={style:{width:"50%"}},Se=y({__name:"SidebarEditor",setup(r){const{result:a,loading:p}=$(()=>U.get());return(i,n)=>e(p)||!e(a)?(u(),f(B,{key:0})):(u(),f(e(L),{key:1,style:{width:"100%",padding:"40px 120px"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(g),{gap:"40"},{default:o(()=>[s("div",z,[t(W,{modelValue:e(a).sidebar,"onUpdate:modelValue":n[0]||(n[0]=d=>e(a).sidebar=d),workspace:e(a)},null,8,["modelValue","workspace"])]),s("div",P,[t(M,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))}});export{Se as default};
//# sourceMappingURL=SidebarEditor.2da03b79.js.map
