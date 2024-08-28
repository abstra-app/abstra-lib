import{d as w,L as S,N as C,e as y,o as k,X as B,b as n,w as s,a as D,u as o,d7 as E,aF as r,d8 as I,bS as L,Z as c,cN as N,cL as $,$ as A}from"./vue-router.4fdc4d50.js";import{G as V,U as P}from"./UnsavedChangesHandler.27b2ac5a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[d]="42c2b949-4070-4835-9b4b-fd14bf4169a0",a._sentryDebugIdIdentifier="sentry-dbid-42c2b949-4070-4835-9b4b-fd14bf4169a0")}catch{}})();const U={class:"popup-container"},z={style:{padding:"0px 4px"}},K=w({__name:"SaveButton",props:{model:{},neverShowPopover:{type:Boolean}},emits:["save"],setup(a,{emit:d}){var h;const l=a,m=e=>{var t;return(t=e.parentElement)!=null?t:document.body},p=new S(C.boolean(),"dontShowUnsavedChanges"),v=y((h=p.get())!=null?h:!1),_=()=>{p.set(!0),v.value=!0},u=y(!1);async function f(){u.value=!0;try{await l.model.save(),d("save")}catch{$.error({message:"Error saving"})}finally{u.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),f())}),addEventListener("beforeunload",e=>{l.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,t)=>{var g;return k(),B("div",U,[n(o(N),{placement:"left",open:e.model.hasChanges()&&!v.value&&!e.neverShowPopover,"get-popup-container":m},{content:s(()=>[D("div",z,[n(o(E),null,{default:s(()=>[r("You have unsaved changes")]),_:1}),n(o(I),{onClick:_},{default:s(()=>[r("Don't show this again")]),_:1})])]),default:s(()=>{var b;return[n(o(L),{class:"save-button",loading:u.value,disabled:!((b=e.model)!=null&&b.hasChanges()),onClick:t[0]||(t[0]=i=>f())},{icon:s(()=>[c(e.$slots,"icon",{},()=>[n(o(V),{size:"18"})],!0)]),default:s(()=>{var i;return[(i=e.model)!=null&&i.hasChanges()?c(e.$slots,"with-changes",{key:0},()=>[r(" Save ")],!0):c(e.$slots,"without-changes",{key:1},()=>[r(" Saved ")],!0)]}),_:3},8,["loading","disabled"])]}),_:3},8,["open"]),n(P,{"has-changes":(g=e.model)==null?void 0:g.hasChanges()},null,8,["has-changes"])])}}});const G=A(K,[["__scopeId","data-v-e79e182b"]]);export{G as S};
//# sourceMappingURL=SaveButton.49d4b162.js.map
