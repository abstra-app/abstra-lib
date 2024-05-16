import{f as r,eI as C,d as O,L as B,z as D,r as _,b as V,ew as A,w as l,e as I,u as d,as as f,bG as P,eA as k,eH as z,cA as E,cy as L,x as H}from"./outputWidgets.1ff7b577.js";import{U as j}from"./UnsavedChangesHandler.298b6b07.js";import{a as x}from"./Base.0a235eb2.js";import{A as N}from"./Link.2ff2f11a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="faaf61b1-33e1-4ebc-a6e6-4128a6529f5f",a._sentryDebugIdIdentifier="sentry-dbid-faaf61b1-33e1-4ebc-a6e6-4128a6529f5f")}catch{}})();var M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"};const U=M;function S(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},s=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),s.forEach(function(o){$(a,o,t[o])})}return a}function $(a,n,t){return n in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}var v=function(n,t){var s=S({},n,t.attrs);return r(C,S({},s,{icon:U}),null)};v.displayName="SaveOutlined";v.inheritAttrs=!1;const T=v,G={class:"popup-container"},Y={style:{padding:"0px 4px"}},q=O({__name:"SaveButton",props:{model:{},neverShowPopover:{type:Boolean}},emits:["save"],setup(a,{emit:n}){var h;const t=a,s=e=>{var i;return(i=e.parentElement)!=null?i:document.body},o=new B(D.boolean(),"dontShowUnsavedChanges"),p=_((h=o.get())!=null?h:!1),w=()=>{o.set(!0),p.value=!0},c=_(!1);async function g(){c.value=!0;try{await t.model.save(),n("save")}catch{L.error({message:"Error saving"})}finally{c.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),g())}),addEventListener("beforeunload",e=>{t.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,i)=>{var m;return V(),A("div",G,[r(d(E),{placement:"left",open:e.model.hasChanges()&&!p.value&&!e.neverShowPopover,"get-popup-container":s},{content:l(()=>[I("div",Y,[r(d(x),null,{default:l(()=>[f("You have unsaved changes")]),_:1}),r(d(N),{onClick:w},{default:l(()=>[f("Don't show this again")]),_:1})])]),default:l(()=>{var b,y;return[r(d(P),{class:k(["save-button",{changes:(b=e.model)==null?void 0:b.hasChanges()}]),loading:c.value,disabled:!((y=e.model)!=null&&y.hasChanges()),onClick:i[0]||(i[0]=u=>g())},{icon:l(()=>[r(d(T))]),default:l(()=>{var u;return[f(z((u=e.model)!=null&&u.hasChanges()?"Save":"Saved")+" ",1)]}),_:1},8,["class","loading","disabled"])]}),_:1},8,["open"]),r(j,{"has-changes":(m=e.model)==null?void 0:m.hasChanges()},null,8,["has-changes"])])}}});const R=H(q,[["__scopeId","data-v-3136ae90"]]);export{R as S};
//# sourceMappingURL=SaveButton.1d82a567.js.map
