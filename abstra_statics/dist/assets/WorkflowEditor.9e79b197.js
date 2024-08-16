var V=Object.defineProperty;var z=(e,r,t)=>r in e?V(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var m=(e,r,t)=>(z(e,typeof r!="symbol"?r+"":r,t),t);import{w as M}from"./api.5da5ff80.js";import{u as W,a as F,W as R,b as O}from"./Workflow.bfdaa992.js";import{a as H}from"./asyncComputed.d365a226.js";import{d as D,c as k,w as i,u as a,o as u,W as K,e9 as j,cH as $,b as d,d4 as h,ax as y,e6 as w,d9 as _,a as G,ea as J,aJ as U,bL as X,$ as v,g as Z,V as q,e4 as Q,R as Y}from"./vue-router.717c9672.js";import{G as ee}from"./PhFloppyDisk.vue.cf114e9a.js";import{w as oe}from"./metadata.1c9a5cf9.js";import{A as te}from"./index.10f425f9.js";import"./fetch.aac5c8bf.js";import"./PhArrowClockwise.vue.b752145c.js";import"./PhArrowCounterClockwise.vue.0edb74ff.js";import"./validations.46a93afc.js";import"./string.570c2d93.js";import"./uuid.93cb814e.js";import"./workspaces.64d502c0.js";import"./workspaceStore.92f0d764.js";import"./url.e88fe7d5.js";import"./record.18236b7c.js";import"./index.3bb90242.js";import"./Badge.f8ec09a6.js";import"./isNumeric.75337b1e.js";import"./PhBug.vue.ae4b6dff.js";import"./PhCheckCircle.vue.9f1a6abc.js";import"./PhKanban.vue.2154c598.js";import"./PhWebhooksLogo.vue.dfc2e56a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="0a3deeff-dbde-40a0-b9a4-3171c019c987",e._sentryDebugIdIdentifier="sentry-dbid-0a3deeff-dbde-40a0-b9a4-3171c019c987")}catch{}})();class C{static get isMac(){return navigator.userAgent.includes("Mac OS X")}static get buildPlatform(){return{}.CURRENT_PLATFORM||"web"}}const p=e=>C.isMac?e.metaKey:e.ctrlKey,re=e=>e.altKey,A=e=>e.shiftKey,g={alt:re,"arrow-up":e=>e.code==="ArrowUp","arrow-down":e=>e.code==="ArrowDown","arrow-left":e=>e.code==="ArrowLeft","arrow-right":e=>e.code==="ArrowRight",ctrl:p,delete:e=>C.isMac?e.code==="Backspace":e.code==="Delete",enter:e=>e.code==="Enter",escape:e=>e.code==="Escape",shift:A,space:e=>e.code==="Space",a:e=>e.code==="KeyA",b:e=>e.code==="KeyB",c:e=>e.code==="KeyC",d:e=>e.code==="KeyD",f:e=>e.code==="KeyF",g:e=>e.code==="KeyG",h:e=>e.code==="KeyH",k:e=>e.code==="KeyK",p:e=>e.code==="KeyP",v:e=>e.code==="KeyV",x:e=>e.code==="KeyX",z:e=>e.code==="KeyZ",0:e=>e.code==="Digit0","[":e=>e.code==="BracketLeft","]":e=>e.code==="BracketRight"};class se{constructor(r){m(this,"pressedKeys");m(this,"evt");this.evt=r,this.pressedKeys={};const t=f=>l=>{Object.keys(g).forEach(s=>{g[s](l)&&this.setPressed(s,f)})};this.evt||(window.addEventListener("keydown",t(!0)),window.addEventListener("keyup",t(!1)))}setPressed(r,t){this.pressedKeys[r]=t}isPressed(r){var t;return this.evt?g[r](this.evt):(t=this.pressedKeys[r])!=null?t:!1}}new se;const ae=["onDragstart"],ne=D({__name:"BottomToolbar",props:{controller:{}},emits:["drag-start"],setup(e,{emit:r}){return(t,f)=>(u(),k(a(_),{class:"toolbar",align:"center"},{default:i(()=>[(u(!0),K(U,null,j(a(oe).stages,l=>(u(),k(a($),{key:l.key,placement:"top"},{title:i(()=>[d(a(_),{gap:"small"},{default:i(()=>[d(a(h),null,{default:i(()=>[y(w(l.title),1)]),_:2},1024),d(a(h),{keyboard:""},{default:i(()=>[y(w(l.key),1)]),_:2},1024)]),_:2},1024)]),content:i(()=>[y(w(l.description),1)]),default:i(()=>[G("div",{draggable:!0,class:"toolbar__item",onDragstart:s=>r("drag-start",s.dataTransfer,l.typeName)},[(u(),k(J(l.icon),{size:18}))],40,ae)]),_:2},1024))),128)),d(a(te),{type:"vertical"}),d(a(X),{disabled:!t.controller.hasChanges(),onClick:f[0]||(f[0]=l=>t.controller.save())},{default:i(()=>[d(a(_),{align:"center",gap:"small"},{default:i(()=>[d(a(ee),{size:16}),y(" Save ")]),_:1})]),_:1},8,["disabled"])]),_:1}))}});const le=v(ne,[["__scopeId","data-v-30fbc74e"]]),ie=D({__name:"WorkflowEditor",setup(e){const{init:r,onDragStart:t,onDrop:f,isDragging:l}=W(),{result:s}=H(()=>O.init(M,!0));Z(()=>s.value,()=>{s.value&&r(s.value)});const{onNodeDragStop:E,onNodesChange:S,onEdgesChange:B,getSelectedElements:I,getNodes:P,addSelectedNodes:x,zoomIn:N,fitView:T,zoomOut:L}=F();return E(c=>{var o;(o=s.value)==null||o.move(c.nodes.map(n=>({id:n.id,position:n.position})))}),S(c=>{var o;for(const n of c)n.type==="remove"&&((o=s.value)==null||o.delete([n.id]))}),B(c=>{var o;for(const n of c)n.type==="remove"&&((o=s.value)==null||o.delete([n.id]))}),q(()=>{const c=o=>{var n,b;!s.value||((o.key==="z"||o.key==="Z")&&p(o)&&(A(o)?s.value.history.redo():(n=s.value)==null||n.history.undo(),o.preventDefault()),!I.value.length&&(o.key==="f"||o.key==="F"?t(null,"forms"):o.key==="h"||o.key==="H"?t(null,"hooks"):o.key==="j"||o.key==="J"?t(null,"jobs"):o.key==="c"||o.key==="C"?t(null,"conditions"):o.key==="i"||o.key==="I"?t(null,"iterators"):o.key==="s"||o.key==="S"?p(o)?((b=s.value)==null||b.save(),o.preventDefault()):t(null,"scripts"):(o.key==="a"||o.key==="A")&&p(o)?(x(P.value),o.preventDefault()):o.key==="0"&&p(o)?(T(),o.preventDefault()):o.key==="="&&p(o)?(o.preventDefault(),N()):o.key==="-"&&p(o)&&(o.preventDefault(),L())))};window.addEventListener("keydown",c)}),(c,o)=>a(s)?(u(),K("div",{key:0,class:Q(["workflow-container",{dragging:a(l)}]),onDrop:o[0]||(o[0]=(...n)=>a(f)&&a(f)(...n))},[d(R,{workflow:a(s),editable:""},null,8,["workflow"]),d(le,{controller:a(s),onDragStart:a(t)},null,8,["controller","onDragStart"])],34)):Y("",!0)}});const Te=v(ie,[["__scopeId","data-v-6f3b93b0"]]);export{Te as default};
//# sourceMappingURL=WorkflowEditor.9e79b197.js.map
