import{L as x}from"./LoadingContainer.3dd836dc.js";import{S as D}from"./SaveButton.b03e7682.js";import{C as h,W as A}from"./model.c584b5bb.js";import{E as C}from"./api.c16618bc.js";import{d as W,e as E,f as N,u as t,c as n,W as _,R as y,b as d,w as e,o as r,a as w,aJ as B,e9 as S,d4 as k,ax as c,e6 as f,ea as V,cH as G,d9 as L,$ as T}from"./vue-router.9c5b69de.js";import{w as F}from"./metadata.0d073dc0.js";import{a as M}from"./asyncComputed.605a774f.js";import{A as H}from"./index.40666b55.js";import{A as I}from"./index.58fa20a7.js";import"./ExclamationCircleOutlined.f30752c5.js";import"./workspaces.f0c6d295.js";import"./workspaceStore.61e569df.js";import"./url.b35f521f.js";import"./record.74c948b0.js";import"./validations.4445387f.js";import"./string.66d49383.js";import"./PhArrowSquareOut.vue.c8c58615.js";import"./index.f23cbb95.js";import"./Badge.e085c49d.js";import"./isNumeric.75337b1e.js";import"./index.3e129a04.js";import"./Card.c976c8ca.js";import"./TabPane.0a32c9a2.js";import"./uuid.d7c2b45c.js";import"./fetch.0ad3aaa9.js";import"./PhBug.vue.ff7b9f80.js";import"./PhCheckCircle.vue.3ef44a85.js";import"./PhKanban.vue.f1c027c5.js";import"./PhWebhooksLogo.vue.6f4b9e22.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[i]="e8d89339-c88d-4bf8-8209-7f5560276a3a",s._sentryDebugIdIdentifier="sentry-dbid-e8d89339-c88d-4bf8-8209-7f5560276a3a")}catch{}})();const J={key:1,class:"workflow-editor"},P={class:"workflow-toolbar"},R=["onDragstart"],$=W({__name:"WorkflowEditor",setup(s){const i=E(null),u=N(()=>{var a;return(a=i.value)==null?void 0:a.gui}),v=new C,{result:l,loading:g}=M(()=>A.create(v)),b=(a,m)=>{var o,p;(o=m.dataTransfer)==null||o.setData("type",a),(p=u.value)==null||p.dragstart(a,m)};return(a,m)=>t(g)?(r(),n(x,{key:0})):(r(),_("div",J,[t(l)?(r(),n(h,{key:0,ref_key:"canvasGui",ref:i,model:t(l)},null,8,["model"])):y("",!0),d(t(L),null,{default:e(()=>[w("div",P,[(r(!0),_(B,null,S(t(F).stages,o=>(r(),n(t(G),{key:o.typeName,placement:"top"},{title:e(()=>[d(t(H),null,{default:e(()=>[d(t(k),null,{default:e(()=>[c(f(o.title),1)]),_:2},1024),d(t(k),{keyboard:""},{default:e(()=>[c(f(o.key),1)]),_:2},1024)]),_:2},1024)]),content:e(()=>[c(f(o.description),1)]),default:e(()=>[w("span",{draggable:"true",onDragstart:p=>b(o.typeName,p)},[(r(),n(V(o.icon),{width:"18",height:"18",class:"toolbar-item"}))],40,R)]),_:2},1024))),128)),d(t(I),{type:"vertical"}),t(l)?(r(),n(D,{key:0,model:t(l),disabled:void 0,type:"primary"},null,8,["model"])):y("",!0)])]),_:1})]))}});const vt=T($,[["__scopeId","data-v-de9c06f6"]]);export{vt as default};
//# sourceMappingURL=WorkflowEditor.e8f18f1d.js.map
