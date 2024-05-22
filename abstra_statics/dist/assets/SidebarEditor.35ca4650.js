import{d as v,F as A}from"./vuedraggable.umd.7a2b1cdb.js";import{d as y,r as V,K as x,o as C,eN as c,b as u,c as f,w as o,f as t,u as e,as as h,cE as S,e as i,eH as _,bA as D}from"./outputWidgets.fc0873ad.js";import{S as F}from"./SaveButton.4a017c39.js";import{a as I,A as L}from"./index.522ed2ed.js";import{A as w}from"./Title.17d91f19.js";import{A as k}from"./index.ae45239b.js";import{A as b}from"./index.3fe0ab0e.js";import{A as E,F as B}from"./Form.2275924f.js";import{S as N}from"./SidebarPreview.2c21d600.js";import{C as U}from"./ContentLayout.b3bda4ae.js";import{L as R}from"./LoadingContainer.f2415533.js";import{a as T}from"./asyncComputed.79c1eb73.js";import{W as $}from"./workspaces.472afeff.js";import"./envVars.247270c5.js";import"./UnsavedChangesHandler.ca52f340.js";import"./ExclamationCircleOutlined.26dd443f.js";import"./Modal.d36dabcc.js";import"./Base.b08344d0.js";import"./Link.a8501bbe.js";import"./hasIn.560b190f.js";import"./PlayerNavbar.30019e8d.js";import"./PhKanban.vue.7b38e8ad.js";import"./PhSignOut.vue.56aba12b.js";import"./index.47c85e21.js";import"./Text.409fb94a.js";import"./Home.b73dc32d.js";import"./api.92a28a15.js";import"./index.ddadd07a.js";import"./fetch.0d11fd9b.js";import"./pubsub.fbb4bb72.js";import"./runnerData.6681fc07.js";import"./url.782267ec.js";import"./PhArrowSquareOut.vue.faf41e3e.js";import"./index.0103a010.js";import"./Paragraph.7d2c2042.js";import"./index.a871344e.js";import"./Card.9619cad7.js";import"./TabPane.659948ce.js";import"./WidgetsFrame.5a607d70.js";import"./record.6077d06c.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="7a70fb88-8b66-47e6-807d-fdf55545f015",s._sentryDebugIdIdentifier="sentry-dbid-7a70fb88-8b66-47e6-807d-fdf55545f015")}catch{}})();const j=i("span",null,"Route",-1),K=i("span",null,"Title",-1),M=i("span",null,"Visible",-1),W={style:{flex:"1 0"}},q={style:{flex:"1 0"}},z=y({__name:"SidebarEditor",props:{modelValue:{},workspace:{}},emits:["update:modelValue"],setup(s,{emit:a}){const n=s,l=V([]),p=()=>a("update:modelValue",l.value);return x(()=>n.modelValue,(d,m)=>{c.exports.isEqual(d,m)||(l.value=c.exports.cloneDeep(d))}),C(()=>{l.value=c.exports.cloneDeep(n.modelValue)}),(d,m)=>(u(),f(e(E),{help:"Change your sidebar items position and visibility by dragging them up and down"},{default:o(()=>[t(e(k),{justify:"space-between",style:{margin:"0 0 12px 0"}},{default:o(()=>[t(e(w),{level:4,style:{margin:"0"}},{default:o(()=>[h("Sidebar items")]),_:1}),t(F,{model:d.workspace},null,8,["model"])]),_:1}),t(e(L),{bordered:""},{header:o(()=>[t(e(S),{style:{width:"100%","justify-content":"space-between"}},{default:o(()=>[j,t(e(b),{type:"vertical"}),K,t(e(b),{type:"vertical"}),M]),_:1})]),default:o(()=>[t(e(v),{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=r=>l.value=r),"force-fallback":e(A),style:{width:"100%"},"item-key":r=>r.path,onChange:p},{item:o(({element:r})=>[t(e(I),{style:{cursor:"ns-resize"}},{default:o(()=>[i("span",W,"/"+_(r.path),1),i("span",q,_(r.name),1),t(e(D),{checked:r.visible,"onUpdate:checked":g=>r.visible=g,type:"checkbox",onChange:p},null,8,["checked","onUpdate:checked"])]),_:2},1024)]),_:1},8,["modelValue","force-fallback","item-key"])]),_:1})]),_:1}))}}),H={style:{width:"50%"}},O={style:{width:"50%"}},Be=y({__name:"SidebarEditor",setup(s){const{result:a,loading:n}=T(()=>$.get());return(l,p)=>(u(),f(U,null,{default:o(()=>[e(n)||!e(a)?(u(),f(R,{key:0})):(u(),f(e(B),{key:1,style:{width:"100%"}},{default:o(()=>[t(e(w),null,{default:o(()=>[h("Sidebar")]),_:1}),t(e(k),{gap:"40"},{default:o(()=>[i("div",H,[t(z,{modelValue:e(a).sidebar,"onUpdate:modelValue":p[0]||(p[0]=d=>e(a).sidebar=d),workspace:e(a)},null,8,["modelValue","workspace"])]),i("div",O,[t(N,{workspace:e(a),"widgets-visible":!1},null,8,["workspace"])])]),_:1})]),_:1}))]),_:1}))}});export{Be as default};
//# sourceMappingURL=SidebarEditor.35ca4650.js.map
