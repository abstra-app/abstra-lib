import{L as D}from"./LoadingContainer.26507f7d.js";import{S as x}from"./SaveButton.dac16894.js";import{C as A,W as E}from"./model.5ccac4e0.js";import{E as h}from"./api.529f32ad.js";import{d as C,e as W,f as N,u as t,o,c as n,eu as _,ew as y,b as d,w as r,a as w,aE as B,eD as S,cR as k,as as c,eA as f,eE as V,cx as G,cW as L,S as T}from"./vue-router.dc17f8e9.js";import{w as F}from"./metadata.4543979a.js";import{a as M}from"./asyncComputed.5dbb7d1c.js";import{A as I}from"./index.96f8dcbf.js";import{A as P}from"./index.78149dc7.js";import"./ExclamationCircleOutlined.b51e668f.js";import"./workspaces.ee40d96b.js";import"./runnerData.5603e01b.js";import"./url.dc2f16e6.js";import"./record.958ee9cc.js";import"./validations.f0985fe7.js";import"./string.3d8d9f19.js";import"./PhArrowSquareOut.vue.1f643d8c.js";import"./index.86eba91d.js";import"./Badge.1192622b.js";import"./isNumeric.75337b1e.js";import"./index.6fdf15e2.js";import"./Card.080e57de.js";import"./TabPane.4968db27.js";import"./uuid.f9ff3dc3.js";import"./fetch.66187f0e.js";import"./PhCheckCircle.vue.d438291c.js";import"./PhKanban.vue.cad529ed.js";import"./PhScroll.vue.2dffcfb5.js";import"./PhWebhooksLogo.vue.c7f6d15c.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[i]="8af06ecb-393f-433e-ae73-275d32a2b2f6",s._sentryDebugIdIdentifier="sentry-dbid-8af06ecb-393f-433e-ae73-275d32a2b2f6")}catch{}})();const R={key:1,class:"workflow-editor"},j={class:"workflow-toolbar"},q=["onDragstart"],z=C({__name:"WorkflowEditor",setup(s){const i=W(null),u=N(()=>{var a;return(a=i.value)==null?void 0:a.gui}),v=new h,{result:l,loading:b}=M(()=>E.create(v)),g=(a,m)=>{var e,p;(e=m.dataTransfer)==null||e.setData("type",a),(p=u.value)==null||p.dragstart(a,m)};return(a,m)=>t(b)?(o(),n(D,{key:0})):(o(),_("div",R,[t(l)?(o(),n(A,{key:0,ref_key:"canvasGui",ref:i,model:t(l)},null,8,["model"])):y("",!0),d(t(L),null,{default:r(()=>[w("div",j,[(o(!0),_(B,null,S(t(F).stages,e=>(o(),n(t(G),{key:e.typeName,placement:"top"},{title:r(()=>[d(t(I),null,{default:r(()=>[d(t(k),null,{default:r(()=>[c(f(e.title),1)]),_:2},1024),d(t(k),{keyboard:""},{default:r(()=>[c(f(e.key),1)]),_:2},1024)]),_:2},1024)]),content:r(()=>[c(f(e.description),1)]),default:r(()=>[w("span",{draggable:"true",onDragstart:p=>g(e.typeName,p)},[(o(),n(V(e.icon),{width:"18",height:"18",class:"toolbar-item"}))],40,q)]),_:2},1024))),128)),d(t(P),{type:"vertical"}),t(l)?(o(),n(x,{key:0,model:t(l),disabled:void 0,type:"primary"},null,8,["model"])):y("",!0)])]),_:1})]))}});const vt=T(z,[["__scopeId","data-v-4a26884a"]]);export{vt as default};
//# sourceMappingURL=WorkflowEditor.87ad35bb.js.map
