import{d as y,r as v,I as x,o as A,eM as c,b as u,c as f,w as o,f as t,u as e,aq as h,cA as V,e as s,eD as _,by as D}from"./outputWidgets.8f35e76b.js";import{d as I}from"./vuedraggable.umd.6098fdf5.js";import{_ as S}from"./SaveButton.vue_vue_type_script_setup_true_lang.b29b7a8e.js";import{A as C}from"./Item.9984d699.js";import{A as E}from"./index.fa6a5310.js";import{A as w}from"./Title.984d5105.js";import{A as g}from"./index.30032ec4.js";import{A as b}from"./index.c56951cc.js";import{A as F,F as L}from"./Form.357810f8.js";import{W as U}from"./workspaces.afd4edf2.js";import{a as $}from"./asyncComputed.b2c7682e.js";import"./envVars.04759b67.js";import{L as B}from"./CircularLoading.cdfdf5ef.js";import{S as M}from"./SidebarPreview.5916d91a.js";import"./ant-design.5e6d66d7.js";import"./index.01563854.js";import"./Modal.3cec70ce.js";import"./Text.cb1b4ad4.js";import"./Link.453a8ef1.js";import"./hasIn.38270313.js";import"./runnerData.6e315e3e.js";import"./url.99f1e379.js";import"./record.56272af3.js";import"./pubsub.aac2ae7d.js";import"./PlayerNavbar.2eec09a3.js";import"./PhKanban.vue.c924b5ce.js";import"./PhSignOut.vue.2543e2c9.js";import"./index.8416d0cc.js";import"./Paragraph.5b35e944.js";import"./index.31b873d2.js";import"./WidgetsFrame.87b1c2ad.js";import"./HomeContent.685266e7.js";import"./PhArrowSquareOut.vue.eae4d0a1.js";import"./index.d94e180a.js";import"./Card.05a66930.js";import"./index.1b34424f.js";import"./TabPane.385f8290.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="6ebe17e4-ccca-44f0-8f61-ca2ea2065763",r._sentryDebugIdIdentifier="sentry-dbid-6ebe17e4-ccca-44f0-8f61-ca2ea2065763")}catch{}})();const N=s("span",null,"Route",-1),T=s("span",null,"Title",-1),j=s("span",null,"Visible",-1),q={style:{flex:"1 0"}},R={style:{flex:"1 0"}},W=y({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(r,{emit:a}){const p=r,i=v([]),n=()=>a("update:modelValue",i.value);return x(()=>p.modelValue,(d,m)=>{c.exports.isEqual(d,m)||(i.value=c.exports.cloneDeep(d))}),A(()=>{i.value=c.exports.cloneDeep(p.modelValue)}),(d,m)=>(u(),f(e(F),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(g),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(S,{model:d.workspace},null,8,["model"])]),_:1}),t(e(E),{bordered:""},{header:o(()=>[t(e(V),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[N,t(e(b),{type:"vertical"}),T,t(e(b),{type:"vertical"}),j]),_:1})]),default:o(()=>[t(e(I),{modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=l=>i.value=l),style:{width:"100%"},onChange:n},{item:o(({element:l})=>[t(e(C),{style:{cursor:"ns-resize"}},{default:o(()=>[s("span",q,"/"+_(l.path),1),s("span",R,_(l.name),1),t(e(D),{checked:l.visible,"onUpdate:checked":k=>l.visible=k,type:"checkbox",onChange:n},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),z={style:{width:"50%"}},P={style:{width:"50%"}},Se=y({__name:"SidebarEditor",setup(r){const{result:a,loading:p}=$(()=>U.get());return(i,n)=>e(p)||!e(a)?(u(),f(B,{key:0})):(u(),f(e(L),{key:1,style:{width:"100%",padding:"40px 120px"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(g),{gap:"40"},{default:o(()=>[s("div",z,[t(W,{modelValue:e(a).sidebar,"onUpdate:modelValue":n[0]||(n[0]=d=>e(a).sidebar=d),workspace:e(a)},null,8,["modelValue","workspace"])]),s("div",P,[t(M,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))}});export{Se as default};
//# sourceMappingURL=SidebarEditor.176a32b9.js.map
