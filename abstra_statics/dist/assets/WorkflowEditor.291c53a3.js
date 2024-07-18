import{L as D}from"./LoadingContainer.d789860f.js";import{S as h}from"./SaveButton.d6a9a3d9.js";import{C,W as x}from"./model.8aacd28c.js";import{E as A}from"./api.a2966b31.js";import{d as E,e as W,f as N,u as e,o,c as i,et as _,ev as y,b as d,w as r,a as w,aD as B,eC as V,cQ as k,ar as m,ez as f,eD as S,cw as T,cV as G,R as L}from"./vue-router.dc261a27.js";import{w as F}from"./metadata.91634a8a.js";import{a as M}from"./asyncComputed.bcaaa984.js";import{A as z}from"./index.897a5e3c.js";import{A as I}from"./index.fa1e976a.js";import"./ExclamationCircleOutlined.45ecb391.js";import"./workspaces.f05359a3.js";import"./runnerData.be2ae27a.js";import"./url.be4bebd5.js";import"./record.26d79905.js";import"./validations.c8d2c697.js";import"./string.50e7dceb.js";import"./PhArrowSquareOut.vue.6476059c.js";import"./index.36c0d369.js";import"./Badge.1d11bb47.js";import"./isNumeric.75337b1e.js";import"./index.ac84a20a.js";import"./Card.62f9333e.js";import"./TabPane.1c33bc4a.js";import"./uuid.5dd2ed5a.js";import"./fetch.8e35e554.js";import"./PhCheckCircle.vue.c4796891.js";import"./PhKanban.vue.891779a2.js";import"./PhWebhooksLogo.vue.f86e7ad1.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="eaeb7979-d997-418e-b264-2e6f38e54135",s._sentryDebugIdIdentifier="sentry-dbid-eaeb7979-d997-418e-b264-2e6f38e54135")}catch{}})();const P={key:1,class:"workflow-editor"},Q={class:"workflow-toolbar"},R=["onDragstart"],j=E({__name:"WorkflowEditor",setup(s){const n=W(null),u=N(()=>{var a;return(a=n.value)==null?void 0:a.gui}),v=new A,{result:l,loading:g}=M(()=>x.create(v)),b=(a,c)=>{var t,p;(t=c.dataTransfer)==null||t.setData("type",a),(p=u.value)==null||p.dragstart(a,c)};return(a,c)=>e(g)?(o(),i(D,{key:0})):(o(),_("div",P,[e(l)?(o(),i(C,{key:0,ref_key:"canvasGui",ref:n,model:e(l)},null,8,["model"])):y("",!0),d(e(G),null,{default:r(()=>[w("div",Q,[(o(!0),_(B,null,V(e(F).stages,t=>(o(),i(e(T),{key:t.typeName,placement:"top"},{title:r(()=>[d(e(z),null,{default:r(()=>[d(e(k),null,{default:r(()=>[m(f(t.title),1)]),_:2},1024),d(e(k),{keyboard:""},{default:r(()=>[m(f(t.key),1)]),_:2},1024)]),_:2},1024)]),content:r(()=>[m(f(t.description),1)]),default:r(()=>[w("span",{draggable:"true",onDragstart:p=>b(t.typeName,p)},[(o(),i(S(t.icon),{width:"18",height:"18",class:"toolbar-item"}))],40,R)]),_:2},1024))),128)),d(e(I),{type:"vertical"}),e(l)?(o(),i(h,{key:0,model:e(l),disabled:void 0,type:"primary"},null,8,["model"])):y("",!0)])]),_:1})]))}});const ke=L(j,[["__scopeId","data-v-de9c06f6"]]);export{ke as default};
//# sourceMappingURL=WorkflowEditor.291c53a3.js.map
