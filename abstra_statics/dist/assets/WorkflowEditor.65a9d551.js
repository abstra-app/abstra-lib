import{L as h}from"./LoadingContainer.a5e71cda.js";import{S as C}from"./SaveButton.27f1d35e.js";import{C as x,W as A}from"./model.6abf994a.js";import{E as b}from"./api.c6cb42f7.js";import{d as E,e as W,f as N,u as t,o,c as i,et as _,ev as y,b as d,w as r,a as w,aD as B,eC as V,cQ as k,ar as m,ez as f,eD as S,cw as T,cV as G,R as L}from"./vue-router.930a7a3c.js";import{w as F}from"./metadata.bb759776.js";import{a as M}from"./asyncComputed.c9d8887b.js";import{A as z}from"./index.6fddf522.js";import{A as I}from"./index.2d7c2719.js";import"./ExclamationCircleOutlined.7d5003fe.js";import"./workspaces.69a6ec99.js";import"./runnerData.9b4d7cb0.js";import"./url.e8dc983f.js";import"./record.13441543.js";import"./validations.e5c7e78a.js";import"./string.96b6cb22.js";import"./PhArrowSquareOut.vue.a7cfea43.js";import"./index.a4eaf61e.js";import"./Badge.7a9826ec.js";import"./isNumeric.75337b1e.js";import"./index.1e76b9ff.js";import"./Card.1bf32054.js";import"./TabPane.64c79eca.js";import"./uuid.dc315e93.js";import"./fetch.4c0c69ad.js";import"./PhCheckCircle.vue.8404395d.js";import"./PhKanban.vue.87e6f7aa.js";import"./PhWebhooksLogo.vue.a3dd7c64.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="6fddd9d1-247c-4777-9329-d1aed6c70f02",s._sentryDebugIdIdentifier="sentry-dbid-6fddd9d1-247c-4777-9329-d1aed6c70f02")}catch{}})();const P={key:1,class:"workflow-editor"},Q={class:"workflow-toolbar"},R=["onDragstart"],j=E({__name:"WorkflowEditor",setup(s){const n=W(null),u=N(()=>{var a;return(a=n.value)==null?void 0:a.gui}),v=new b,{result:l,loading:g}=M(()=>A.create(v)),D=(a,c)=>{var e,p;(e=c.dataTransfer)==null||e.setData("type",a),(p=u.value)==null||p.dragstart(a,c)};return(a,c)=>t(g)?(o(),i(h,{key:0})):(o(),_("div",P,[t(l)?(o(),i(x,{key:0,ref_key:"canvasGui",ref:n,model:t(l)},null,8,["model"])):y("",!0),d(t(G),null,{default:r(()=>[w("div",Q,[(o(!0),_(B,null,V(t(F).stages,e=>(o(),i(t(T),{key:e.typeName,placement:"top"},{title:r(()=>[d(t(z),null,{default:r(()=>[d(t(k),null,{default:r(()=>[m(f(e.title),1)]),_:2},1024),d(t(k),{keyboard:""},{default:r(()=>[m(f(e.key),1)]),_:2},1024)]),_:2},1024)]),content:r(()=>[m(f(e.description),1)]),default:r(()=>[w("span",{draggable:"true",onDragstart:p=>D(e.typeName,p)},[(o(),i(S(e.icon),{width:"18",height:"18",class:"toolbar-item"}))],40,R)]),_:2},1024))),128)),d(t(I),{type:"vertical"}),t(l)?(o(),i(C,{key:0,model:t(l),disabled:void 0,type:"primary"},null,8,["model"])):y("",!0)])]),_:1})]))}});const kt=L(j,[["__scopeId","data-v-de9c06f6"]]);export{kt as default};
//# sourceMappingURL=WorkflowEditor.65a9d551.js.map
