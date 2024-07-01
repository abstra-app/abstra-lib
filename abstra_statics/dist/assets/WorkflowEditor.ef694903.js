import{L as D}from"./LoadingContainer.a30b13a6.js";import{S as h}from"./SaveButton.9b9a790f.js";import{C as x,W as A}from"./model.2b377913.js";import{E as C}from"./api.5db3b5f8.js";import{d as E,r as W,K as N,u as t,b as o,c as n,eu as _,ew as y,f as l,w as r,e as w,aD as B,eE as S,cQ as k,ar as m,eG as f,eF as V,cw as G,cV as F,S as L}from"./vue-router.67809441.js";import{w as T}from"./metadata.e61929fd.js";import{a as M}from"./asyncComputed.c6a51599.js";import{A as I}from"./index.31900902.js";import{A as K}from"./index.a5138b31.js";import"./ExclamationCircleOutlined.03b62ec5.js";import"./workspaces.dd24eaa9.js";import"./runnerData.5c6d9896.js";import"./url.bf0f022f.js";import"./record.79dce665.js";import"./validations.a5b90e84.js";import"./string.d96a9f97.js";import"./PhArrowSquareOut.vue.51dee3b0.js";import"./index.01001422.js";import"./Badge.13af2810.js";import"./isNumeric.75337b1e.js";import"./index.35943144.js";import"./Card.722a13de.js";import"./TabPane.f0c2dc5c.js";import"./uuid.eef07528.js";import"./fetch.df469531.js";import"./PhCheckCircle.vue.cf3f2492.js";import"./PhKanban.vue.d680969f.js";import"./PhScroll.vue.505180b1.js";import"./PhWebhooksLogo.vue.bae5126c.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[i]="2ff1cbb3-8701-484b-b720-013c8ae94a13",s._sentryDebugIdIdentifier="sentry-dbid-2ff1cbb3-8701-484b-b720-013c8ae94a13")}catch{}})();const P={key:1,class:"workflow-editor"},Q={class:"workflow-toolbar"},j=["onDragstart"],q=E({__name:"WorkflowEditor",setup(s){const i=W(null),u=N(()=>{var a;return(a=i.value)==null?void 0:a.gui}),v=new C,{result:d,loading:b}=M(()=>A.create(v)),g=(a,c)=>{var e,p;(e=c.dataTransfer)==null||e.setData("type",a),(p=u.value)==null||p.dragstart(a,c)};return(a,c)=>t(b)?(o(),n(D,{key:0})):(o(),_("div",P,[t(d)?(o(),n(x,{key:0,ref_key:"canvasGui",ref:i,model:t(d)},null,8,["model"])):y("",!0),l(t(F),null,{default:r(()=>[w("div",Q,[(o(!0),_(B,null,S(t(T).stages,e=>(o(),n(t(G),{key:e.typeName,placement:"top"},{title:r(()=>[l(t(I),null,{default:r(()=>[l(t(k),null,{default:r(()=>[m(f(e.title),1)]),_:2},1024),l(t(k),{keyboard:""},{default:r(()=>[m(f(e.key),1)]),_:2},1024)]),_:2},1024)]),content:r(()=>[m(f(e.description),1)]),default:r(()=>[w("span",{draggable:"true",onDragstart:p=>g(e.typeName,p)},[(o(),n(V(e.icon),{width:"18",height:"18",class:"toolbar-item"}))],40,j)]),_:2},1024))),128)),l(t(K),{type:"vertical"}),t(d)?(o(),n(h,{key:0,model:t(d),disabled:void 0,type:"primary"},null,8,["model"])):y("",!0)])]),_:1})]))}});const vt=L(q,[["__scopeId","data-v-4a26884a"]]);export{vt as default};
//# sourceMappingURL=WorkflowEditor.ef694903.js.map
