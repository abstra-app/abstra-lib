import{d as w,N as C,O as S,e as m,o as k,Y as B,b as n,w as s,a as D,u as t,d9 as E,aG as r,da as I,bT as $,$ as f,cO as A,cM as L,a0 as N}from"./index.ed5876d6.js";import{G as V,U as P}from"./UnsavedChangesHandler.5605092a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d=new Error().stack;d&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[d]="763d7a2d-2df6-4d6e-8280-42da86ff03d2",a._sentryDebugIdIdentifier="sentry-dbid-763d7a2d-2df6-4d6e-8280-42da86ff03d2")}catch{}})();const T={class:"popup-container"},U={style:{padding:"0px 4px"}},z=w({__name:"SaveButton",props:{model:{},neverShowPopover:{type:Boolean},disabled:{type:Boolean}},emits:["save"],setup(a,{emit:d}){var h;const l=a,_=e=>{var o;return(o=e.parentElement)!=null?o:document.body},c=new C(S.boolean(),"dontShowUnsavedChanges"),p=m((h=c.get())!=null?h:!1),b=()=>{c.set(!0),p.value=!0},i=m(!1);async function v(){i.value=!0;try{await l.model.save(),d("save")}catch(e){console.error(e),L.error({message:"Error saving"})}finally{i.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),v())}),addEventListener("beforeunload",e=>{l.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,o)=>{var g;return k(),B("div",T,[n(t(A),{placement:"left",open:e.model.hasChanges()&&!p.value&&!e.neverShowPopover,"get-popup-container":_},{content:s(()=>[D("div",U,[n(t(E),null,{default:s(()=>[r("You have unsaved changes")]),_:1}),n(t(I),{onClick:b},{default:s(()=>[r("Don't show this again")]),_:1})])]),default:s(()=>{var y;return[n(t($),{class:"save-button",loading:i.value,disabled:!((y=e.model)!=null&&y.hasChanges())||e.disabled,onClick:o[0]||(o[0]=u=>v())},{icon:s(()=>[f(e.$slots,"icon",{},()=>[n(t(V),{size:"18"})],!0)]),default:s(()=>{var u;return[(u=e.model)!=null&&u.hasChanges()?f(e.$slots,"with-changes",{key:0},()=>[r(" Save ")],!0):f(e.$slots,"without-changes",{key:1},()=>[r(" Saved ")],!0)]}),_:3},8,["loading","disabled"])]}),_:3},8,["open"]),n(P,{"has-changes":(g=e.model)==null?void 0:g.hasChanges()},null,8,["has-changes"])])}}});const O=N(z,[["__scopeId","data-v-80b2ff4e"]]);export{O as S};
//# sourceMappingURL=SaveButton.7f99fb6e.js.map
