import{L as D}from"./LoadingContainer.52569e84.js";import{S as h}from"./SaveButton.9e326ad9.js";import{C,W as x}from"./model.9e62b22b.js";import{E as A}from"./api.fb2155e2.js";import{d as E,e as W,f as N,u as e,o,c as i,et as _,ev as y,b as d,w as r,a as w,aD as B,eC as V,cQ as k,ar as m,ez as f,eD as S,cw as T,cV as G,R as L}from"./vue-router.637ad36e.js";import{w as F}from"./metadata.9cd5a8e3.js";import{a as M}from"./asyncComputed.0b7f3eaf.js";import{A as z}from"./index.faf7cd82.js";import{A as I}from"./index.5388dc8c.js";import"./ExclamationCircleOutlined.b054d85e.js";import"./workspaces.29615a64.js";import"./runnerData.8e7195b2.js";import"./url.c1cbace3.js";import"./record.833ab838.js";import"./validations.2be13234.js";import"./string.876500c9.js";import"./PhArrowSquareOut.vue.69153380.js";import"./index.292db4f5.js";import"./Badge.7cdb210c.js";import"./isNumeric.75337b1e.js";import"./index.13a24099.js";import"./Card.6af2f5b2.js";import"./TabPane.db2c1289.js";import"./uuid.9a0cf3c3.js";import"./fetch.a7f25938.js";import"./PhCheckCircle.vue.92a8a97d.js";import"./PhKanban.vue.0ae2296c.js";import"./PhWebhooksLogo.vue.3f87c53c.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="f7ec94ea-9b07-45de-900b-236225602919",s._sentryDebugIdIdentifier="sentry-dbid-f7ec94ea-9b07-45de-900b-236225602919")}catch{}})();const P={key:1,class:"workflow-editor"},Q={class:"workflow-toolbar"},R=["onDragstart"],j=E({__name:"WorkflowEditor",setup(s){const n=W(null),u=N(()=>{var a;return(a=n.value)==null?void 0:a.gui}),v=new A,{result:l,loading:g}=M(()=>x.create(v)),b=(a,c)=>{var t,p;(t=c.dataTransfer)==null||t.setData("type",a),(p=u.value)==null||p.dragstart(a,c)};return(a,c)=>e(g)?(o(),i(D,{key:0})):(o(),_("div",P,[e(l)?(o(),i(C,{key:0,ref_key:"canvasGui",ref:n,model:e(l)},null,8,["model"])):y("",!0),d(e(G),null,{default:r(()=>[w("div",Q,[(o(!0),_(B,null,V(e(F).stages,t=>(o(),i(e(T),{key:t.typeName,placement:"top"},{title:r(()=>[d(e(z),null,{default:r(()=>[d(e(k),null,{default:r(()=>[m(f(t.title),1)]),_:2},1024),d(e(k),{keyboard:""},{default:r(()=>[m(f(t.key),1)]),_:2},1024)]),_:2},1024)]),content:r(()=>[m(f(t.description),1)]),default:r(()=>[w("span",{draggable:"true",onDragstart:p=>b(t.typeName,p)},[(o(),i(S(t.icon),{width:"18",height:"18",class:"toolbar-item"}))],40,R)]),_:2},1024))),128)),d(e(I),{type:"vertical"}),e(l)?(o(),i(h,{key:0,model:e(l),disabled:void 0,type:"primary"},null,8,["model"])):y("",!0)])]),_:1})]))}});const ke=L(j,[["__scopeId","data-v-de9c06f6"]]);export{ke as default};
//# sourceMappingURL=WorkflowEditor.dc254d30.js.map
