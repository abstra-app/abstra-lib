import{L as D}from"./LoadingContainer.e1d4609d.js";import{S as h}from"./SaveButton.aa452031.js";import{C,W as x}from"./model.4ca6158f.js";import{E as A}from"./api.cdc1f24f.js";import{d as E,e as W,f as N,u as e,o,c as i,et as _,ev as y,b as d,w as r,a as w,aD as B,eC as V,cQ as k,ar as m,ez as f,eD as S,cw as T,cV as G,R as L}from"./vue-router.f3519154.js";import{w as F}from"./metadata.682a00fd.js";import{a as M}from"./asyncComputed.1d798485.js";import{A as z}from"./index.fc10cf6e.js";import{A as I}from"./index.49038ef1.js";import"./ExclamationCircleOutlined.16f928cc.js";import"./workspaces.d579f4fc.js";import"./runnerData.442c0238.js";import"./url.22f9c685.js";import"./record.2326b55d.js";import"./validations.8effebad.js";import"./string.de479eff.js";import"./PhArrowSquareOut.vue.f9c8d9b7.js";import"./index.403c2523.js";import"./Badge.fb2b6788.js";import"./isNumeric.75337b1e.js";import"./index.ff1df01d.js";import"./Card.b53b3889.js";import"./TabPane.b37c6920.js";import"./uuid.f71bb9cc.js";import"./fetch.88e7436b.js";import"./PhCheckCircle.vue.4ee29adb.js";import"./PhKanban.vue.2077fb93.js";import"./PhWebhooksLogo.vue.bbb92d9b.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="5bb790bb-bf39-447e-a169-08e84f06934e",s._sentryDebugIdIdentifier="sentry-dbid-5bb790bb-bf39-447e-a169-08e84f06934e")}catch{}})();const P={key:1,class:"workflow-editor"},Q={class:"workflow-toolbar"},R=["onDragstart"],j=E({__name:"WorkflowEditor",setup(s){const n=W(null),u=N(()=>{var a;return(a=n.value)==null?void 0:a.gui}),v=new A,{result:l,loading:b}=M(()=>x.create(v)),g=(a,c)=>{var t,p;(t=c.dataTransfer)==null||t.setData("type",a),(p=u.value)==null||p.dragstart(a,c)};return(a,c)=>e(b)?(o(),i(D,{key:0})):(o(),_("div",P,[e(l)?(o(),i(C,{key:0,ref_key:"canvasGui",ref:n,model:e(l)},null,8,["model"])):y("",!0),d(e(G),null,{default:r(()=>[w("div",Q,[(o(!0),_(B,null,V(e(F).stages,t=>(o(),i(e(T),{key:t.typeName,placement:"top"},{title:r(()=>[d(e(z),null,{default:r(()=>[d(e(k),null,{default:r(()=>[m(f(t.title),1)]),_:2},1024),d(e(k),{keyboard:""},{default:r(()=>[m(f(t.key),1)]),_:2},1024)]),_:2},1024)]),content:r(()=>[m(f(t.description),1)]),default:r(()=>[w("span",{draggable:"true",onDragstart:p=>g(t.typeName,p)},[(o(),i(S(t.icon),{width:"18",height:"18",class:"toolbar-item"}))],40,R)]),_:2},1024))),128)),d(e(I),{type:"vertical"}),e(l)?(o(),i(h,{key:0,model:e(l),disabled:void 0,type:"primary"},null,8,["model"])):y("",!0)])]),_:1})]))}});const ke=L(j,[["__scopeId","data-v-de9c06f6"]]);export{ke as default};
//# sourceMappingURL=WorkflowEditor.5a7e1bcc.js.map
