import{_ as A}from"./SaveButton.vue_vue_type_script_setup_true_lang.4fcff792.js";import{L as D}from"./LoadingContainer.79e8952a.js";import{C as x,W as E}from"./model.4f9e95d1.js";import{E as W}from"./api.6187ec1d.js";import{d as N,r as B,y as L,b as o,eq as c,u as t,c as p,es as y,f as s,w as a,aw as w,e as k,eA as V,cL as v,ak as f,eC as u,eB as G,cr as T,cQ as F,E as M}from"./outputWidgets.94ca2a88.js";import{w as S}from"./metadata.92f2a94f.js";import{a as U}from"./asyncComputed.cfb7c22a.js";import{U as q}from"./UnsavedChangesHandler.457da6ee.js";import{A as H}from"./index.c7b97287.js";import{A as I}from"./index.94d1687f.js";import"./workspaces.36896d70.js";import"./runnerData.5f955b01.js";import"./url.5d104764.js";import"./record.d98ba384.js";import"./pubsub.26933d99.js";import"./validations.2297a4b5.js";import"./string.ae3c25fe.js";import"./PhArrowSquareOut.vue.ff746d46.js";import"./index.ae0f2171.js";import"./Badge.375c34fb.js";import"./isNumeric.75337b1e.js";import"./index.2f3cb0a5.js";import"./Card.c98740b0.js";import"./TabPane.9ffbbc04.js";import"./uuid.6ef3e3e8.js";import"./fetch.ea7841ea.js";import"./PhCheckCircle.vue.9dc47a8d.js";import"./PhKanban.vue.b64c4f2f.js";import"./PhScroll.vue.48f82ff1.js";import"./PhWebhooksLogo.vue.6228304d.js";import"./ExclamationCircleOutlined.9e17f271.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="f41eaf3a-6d77-4a95-a733-409593b6fa33",n._sentryDebugIdIdentifier="sentry-dbid-f41eaf3a-6d77-4a95-a733-409593b6fa33")}catch{}})();const P={key:1,class:"workflow-editor"},Q={class:"workflow-toolbar"},$=["onDragstart"],j=N({__name:"WorkflowEditor",setup(n){const i=B(null),_=L(()=>{var r;return(r=i.value)==null?void 0:r.gui}),g=new W,{result:l,loading:h}=U(()=>E.create(g)),C=(r,m)=>{var d,e;(d=m.dataTransfer)==null||d.setData("type",r),(e=_.value)==null||e.dragstart(r,m)};return(r,m)=>{var d;return o(),c(w,null,[t(h)?(o(),p(D,{key:0})):(o(),c("div",P,[t(l)?(o(),p(x,{key:0,ref_key:"canvasGui",ref:i,model:t(l)},null,8,["model"])):y("",!0),s(t(F),null,{default:a(()=>[k("div",Q,[(o(!0),c(w,null,V(t(S).stages,e=>(o(),p(t(T),{key:e.typeName,placement:"top"},{title:a(()=>[s(t(H),null,{default:a(()=>[s(t(v),null,{default:a(()=>[f(u(e.title),1)]),_:2},1024),s(t(v),{keyboard:""},{default:a(()=>[f(u(e.key),1)]),_:2},1024)]),_:2},1024)]),content:a(()=>[f(u(e.description),1)]),default:a(()=>[k("span",{draggable:"true",onDragstart:b=>C(e.typeName,b)},[(o(),p(G(e.icon),{width:"18",height:"18",class:"toolbar-item"}))],40,$)]),_:2},1024))),128)),s(t(I),{type:"vertical"}),t(l)?(o(),p(A,{key:0,model:t(l),disabled:void 0,type:"primary"},null,8,["model"])):y("",!0)])]),_:1})])),s(q,{"has-changes":(d=t(l))==null?void 0:d.hasChanges()},null,8,["has-changes"])],64)}}});const bt=M(j,[["__scopeId","data-v-04ada247"]]);export{bt as default};
//# sourceMappingURL=WorkflowEditor.99a14990.js.map
