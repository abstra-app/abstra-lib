import{d as v,F as A}from"./vuedraggable.umd.33117dda.js";import{d as y,r as V,O as x,o as C,B as f,b as u,c,w as o,f as t,u as e,au as h,cG as S,e as i,eJ as _,bC as D}from"./outputWidgets.b871b4c2.js";import{S as F}from"./SaveButton.5aa8fe00.js";import{a as I,A as L}from"./index.b25775f7.js";import{A as w}from"./Title.83084d03.js";import{A as k}from"./index.336feafc.js";import{A as b}from"./index.16c04906.js";import{A as B,F as E}from"./Form.698be632.js";import{S as U}from"./SidebarPreview.d7f0d7c2.js";import{C as N}from"./ContentLayout.987a2c9b.js";import{L as R}from"./LoadingContainer.401776b6.js";import{a as T}from"./asyncComputed.53a0782e.js";import{W as $}from"./envVars.9d716e7b.js";import"./UnsavedChangesHandler.d35f2330.js";import"./ExclamationCircleOutlined.405b7b74.js";import"./Modal.134b84f4.js";import"./Base.0bb5fa7a.js";import"./Link.74b84a0e.js";import"./hasIn.5b514812.js";import"./PlayerNavbar.12d84e35.js";import"./PhKanban.vue.9ec5a006.js";import"./PhSignOut.vue.6c8184b6.js";import"./index.9a3ab3be.js";import"./Text.48a7ca01.js";import"./Home.13bf49c4.js";import"./api.307d3f9f.js";import"./index.a0d1bb89.js";import"./fetch.78181002.js";import"./pubsub.0f4910dc.js";import"./runnerData.e8eb4ed0.js";import"./url.15a5742f.js";import"./PhArrowSquareOut.vue.b848a063.js";import"./index.98117316.js";import"./Paragraph.febd4fe1.js";import"./index.140930e5.js";import"./Card.3fe9e7ee.js";import"./TabPane.2be5e2bd.js";import"./WidgetsFrame.f7875180.js";import"./record.415ea43b.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="b2110066-d49f-406b-baf9-47705973d175",s._sentryDebugIdIdentifier="sentry-dbid-b2110066-d49f-406b-baf9-47705973d175")}catch{}})();const j=i("span",null,"Route",-1),M=i("span",null,"Title",-1),O=i("span",null,"Visible",-1),W={style:{flex:"1 0"}},q={style:{flex:"1 0"}},z=y({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(s,{emit:a}){const n=s,l=V([]),p=()=>a("update:modelValue",l.value);return x(()=>n.modelValue,(d,m)=>{f.exports.isEqual(d,m)||(l.value=f.exports.cloneDeep(d))}),C(()=>{l.value=f.exports.cloneDeep(n.modelValue)}),(d,m)=>(u(),c(e(B),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(k),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(F,{model:d.workspace},null,8,["model"])]),_:1}),t(e(L),{bordered:""},{header:o(()=>[t(e(S),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[j,t(e(b),{type:"vertical"}),M,t(e(b),{type:"vertical"}),O]),_:1})]),default:o(()=>[t(e(v),{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=r=>l.value=r),"force-fallback":e(A),style:{width:"100%"},"item-key":r=>r.path,onChange:p},{item:o(({element:r})=>[t(e(I),{style:{cursor:"ns-resize"}},{default:o(()=>[i("span",W,"/"+_(r.path),1),i("span",q,_(r.name),1),t(e(D),{checked:r.visible,"onUpdate:checked":g=>r.visible=g,type:"checkbox",onChange:p},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue","force-fallback","item-key"])]),_:1})]),_:1}))}}),G={style:{width:"50%"}},J={style:{width:"50%"}},Be=y({__name:"SidebarEditor",setup(s){const{result:a,loading:n}=T(()=>$.get());return(l,p)=>(u(),c(N,null,{default:o(()=>[e(n)||!e(a)?(u(),c(R,{key:0})):(u(),c(e(E),{key:1,style:{width:"100%"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(k),{gap:"40"},{default:o(()=>[i("div",G,[t(z,{modelValue:e(a).sidebar,"onUpdate:modelValue":p[0]||(p[0]=d=>e(a).sidebar=d),workspace:e(a)},null,8,["modelValue","workspace"])]),i("div",J,[t(U,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))]),_:1}))}});export{Be as default};
//# sourceMappingURL=SidebarEditor.e7e857c8.js.map
