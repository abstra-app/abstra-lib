import{d as w,N as C,O as S,e as b,o as k,Y as B,b as n,w as s,a as D,u as o,d9 as E,aG as r,da as I,bT as $,$ as c,cO as A,cM as L,a0 as N}from"./index.4b0f7fd1.js";import{G as V,U as P}from"./UnsavedChangesHandler.81e2eded.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[d]="58098a4c-2ff1-4256-8aaa-7b52c20745ed",a._sentryDebugIdIdentifier="sentry-dbid-58098a4c-2ff1-4256-8aaa-7b52c20745ed")}catch{}})();const T={class:"popup-container"},U={style:{padding:"0px 4px"}},z=w({__name:"SaveButton",props:{model:{},neverShowPopover:{type:Boolean},disabled:{type:Boolean}},emits:["save"],setup(a,{emit:d}){var h;const l=a,m=e=>{var t;return(t=e.parentElement)!=null?t:document.body},p=new C(S.boolean(),"dontShowUnsavedChanges"),v=b((h=p.get())!=null?h:!1),_=()=>{p.set(!0),v.value=!0},i=b(!1);async function f(){i.value=!0;try{await l.model.save(),d("save")}catch{L.error({message:"Error saving"})}finally{i.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),f())}),addEventListener("beforeunload",e=>{l.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,t)=>{var g;return k(),B("div",T,[n(o(A),{placement:"left",open:e.model.hasChanges()&&!v.value&&!e.neverShowPopover,"get-popup-container":m},{content:s(()=>[D("div",U,[n(o(E),null,{default:s(()=>[r("You have unsaved changes")]),_:1}),n(o(I),{onClick:_},{default:s(()=>[r("Don't show this again")]),_:1})])]),default:s(()=>{var y;return[n(o($),{class:"save-button",loading:i.value,disabled:!((y=e.model)!=null&&y.hasChanges())||e.disabled,onClick:t[0]||(t[0]=u=>f())},{icon:s(()=>[c(e.$slots,"icon",{},()=>[n(o(V),{size:"18"})],!0)]),default:s(()=>{var u;return[(u=e.model)!=null&&u.hasChanges()?c(e.$slots,"with-changes",{key:0},()=>[r(" Save ")],!0):c(e.$slots,"without-changes",{key:1},()=>[r(" Saved ")],!0)]}),_:3},8,["loading","disabled"])]}),_:3},8,["open"]),n(P,{"has-changes":(g=e.model)==null?void 0:g.hasChanges()},null,8,["has-changes"])])}}});const O=N(z,[["__scopeId","data-v-b886e845"]]);export{O as S};
//# sourceMappingURL=SaveButton.1b93b69b.js.map
