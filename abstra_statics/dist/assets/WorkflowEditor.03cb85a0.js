import{L as D}from"./LoadingContainer.c9cb0994.js";import{S as x}from"./SaveButton.728e8ef8.js";import{C as A,W as E}from"./model.8870bf26.js";import{E as h}from"./api.c76de498.js";import{d as C,e as W,f as N,u as t,o,c as i,eu as _,ew as y,b as d,w as r,a as w,aE as B,eD as S,cR as k,as as f,eA as m,eE as V,cx as G,cW as L,S as T}from"./vue-router.8760ac40.js";import{w as F}from"./metadata.5a052c0c.js";import{a as M}from"./asyncComputed.1b7d88a2.js";import{A as I}from"./index.bb401560.js";import{A as P}from"./index.6e4cac6b.js";import"./ExclamationCircleOutlined.8e1fa6b5.js";import"./workspaces.c3abe834.js";import"./runnerData.4c5a1274.js";import"./url.3e79afda.js";import"./record.98279886.js";import"./validations.a3b9d044.js";import"./string.42023565.js";import"./PhArrowSquareOut.vue.f71e328d.js";import"./index.5b30ef03.js";import"./Badge.6d2c19fa.js";import"./isNumeric.75337b1e.js";import"./index.62897914.js";import"./Card.0dc16fc1.js";import"./TabPane.93d78eb2.js";import"./uuid.3c784955.js";import"./fetch.17888d6e.js";import"./PhCheckCircle.vue.ab11551a.js";import"./PhKanban.vue.7be33c28.js";import"./PhWebhooksLogo.vue.39b94421.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="4470cf8b-7fd1-46d2-9475-6566562f0f2b",s._sentryDebugIdIdentifier="sentry-dbid-4470cf8b-7fd1-46d2-9475-6566562f0f2b")}catch{}})();const R={key:1,class:"workflow-editor"},j={class:"workflow-toolbar"},q=["onDragstart"],z=C({__name:"WorkflowEditor",setup(s){const n=W(null),u=N(()=>{var a;return(a=n.value)==null?void 0:a.gui}),v=new h,{result:l,loading:b}=M(()=>E.create(v)),g=(a,c)=>{var e,p;(e=c.dataTransfer)==null||e.setData("type",a),(p=u.value)==null||p.dragstart(a,c)};return(a,c)=>t(b)?(o(),i(D,{key:0})):(o(),_("div",R,[t(l)?(o(),i(A,{key:0,ref_key:"canvasGui",ref:n,model:t(l)},null,8,["model"])):y("",!0),d(t(L),null,{default:r(()=>[w("div",j,[(o(!0),_(B,null,S(t(F).stages,e=>(o(),i(t(G),{key:e.typeName,placement:"top"},{title:r(()=>[d(t(I),null,{default:r(()=>[d(t(k),null,{default:r(()=>[f(m(e.title),1)]),_:2},1024),d(t(k),{keyboard:""},{default:r(()=>[f(m(e.key),1)]),_:2},1024)]),_:2},1024)]),content:r(()=>[f(m(e.description),1)]),default:r(()=>[w("span",{draggable:"true",onDragstart:p=>g(e.typeName,p)},[(o(),i(V(e.icon),{width:"18",height:"18",class:"toolbar-item"}))],40,q)]),_:2},1024))),128)),d(t(P),{type:"vertical"}),t(l)?(o(),i(x,{key:0,model:t(l),disabled:void 0,type:"primary"},null,8,["model"])):y("",!0)])]),_:1})]))}});const kt=T(z,[["__scopeId","data-v-de9c06f6"]]);export{kt as default};
//# sourceMappingURL=WorkflowEditor.03cb85a0.js.map
