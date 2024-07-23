import{L as D}from"./LoadingContainer.4fe32c53.js";import{S as h}from"./SaveButton.698ae4d9.js";import{C as x,W as A}from"./model.5bf04ef8.js";import{E as C}from"./api.a72b0438.js";import{d as E,e as W,f as B,u as t,o as e,c as i,W as _,R as y,b as d,w as r,a as w,aJ as N,eD as V,cV as k,ax as m,eA as f,eE as S,cB as T,c_ as G,$ as L}from"./vue-router.1fa35404.js";import{w as F}from"./metadata.f41ad8ee.js";import{a as M}from"./asyncComputed.8db624a6.js";import{A as I}from"./index.3b8c53f0.js";import{A as J}from"./index.eb942e36.js";import"./ExclamationCircleOutlined.a39460d2.js";import"./workspaces.57a3053e.js";import"./runnerData.ced7c9eb.js";import"./url.3c9d9694.js";import"./record.7a025b12.js";import"./validations.ffcaef3c.js";import"./string.c4a42915.js";import"./PhArrowSquareOut.vue.daff67dc.js";import"./index.400708bc.js";import"./Badge.f0d0a199.js";import"./isNumeric.75337b1e.js";import"./index.46b55d16.js";import"./Card.16919718.js";import"./TabPane.01c8da03.js";import"./uuid.c14d271a.js";import"./fetch.7ea36cf9.js";import"./PhCheckCircle.vue.e1291a34.js";import"./PhKanban.vue.a0dcb41e.js";import"./PhWebhooksLogo.vue.a1f8bc14.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="2fd1dbaa-8007-42d1-a0a3-1134b0d8ae82",s._sentryDebugIdIdentifier="sentry-dbid-2fd1dbaa-8007-42d1-a0a3-1134b0d8ae82")}catch{}})();const P={key:1,class:"workflow-editor"},R={class:"workflow-toolbar"},$=["onDragstart"],j=E({__name:"WorkflowEditor",setup(s){const n=W(null),u=B(()=>{var a;return(a=n.value)==null?void 0:a.gui}),v=new C,{result:l,loading:g}=M(()=>A.create(v)),b=(a,c)=>{var o,p;(o=c.dataTransfer)==null||o.setData("type",a),(p=u.value)==null||p.dragstart(a,c)};return(a,c)=>t(g)?(e(),i(D,{key:0})):(e(),_("div",P,[t(l)?(e(),i(x,{key:0,ref_key:"canvasGui",ref:n,model:t(l)},null,8,["model"])):y("",!0),d(t(G),null,{default:r(()=>[w("div",R,[(e(!0),_(N,null,V(t(F).stages,o=>(e(),i(t(T),{key:o.typeName,placement:"top"},{title:r(()=>[d(t(I),null,{default:r(()=>[d(t(k),null,{default:r(()=>[m(f(o.title),1)]),_:2},1024),d(t(k),{keyboard:""},{default:r(()=>[m(f(o.key),1)]),_:2},1024)]),_:2},1024)]),content:r(()=>[m(f(o.description),1)]),default:r(()=>[w("span",{draggable:"true",onDragstart:p=>b(o.typeName,p)},[(e(),i(S(o.icon),{width:"18",height:"18",class:"toolbar-item"}))],40,$)]),_:2},1024))),128)),d(t(J),{type:"vertical"}),t(l)?(e(),i(h,{key:0,model:t(l),disabled:void 0,type:"primary"},null,8,["model"])):y("",!0)])]),_:1})]))}});const kt=L(j,[["__scopeId","data-v-de9c06f6"]]);export{kt as default};
//# sourceMappingURL=WorkflowEditor.7eca37d6.js.map
