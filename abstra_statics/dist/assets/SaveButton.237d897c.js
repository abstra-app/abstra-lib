import{f as r,eI as C,d as O,L as B,z as D,r as _,b as V,ew as A,w as l,e as I,u as i,as as v,bG as P,eA as k,eH as z,cA as E,cy as L,x as H}from"./outputWidgets.c3b247ee.js";import{U as j}from"./UnsavedChangesHandler.005876c4.js";import{a as x}from"./Base.dad7ed30.js";import{A as N}from"./Link.cd78ff76.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="15ccc4b4-2894-449c-b979-c509e4eb32bb",n._sentryDebugIdIdentifier="sentry-dbid-15ccc4b4-2894-449c-b979-c509e4eb32bb")}catch{}})();var M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"};const U=M;function S(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},s=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable}))),s.forEach(function(o){$(n,o,a[o])})}return n}function $(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}var p=function(t,a){var s=S({},t,a.attrs);return r(C,S({},s,{icon:U}),null)};p.displayName="SaveOutlined";p.inheritAttrs=!1;const T=p,G={class:"popup-container"},Y={style:{padding:"0px 4px"}},q=O({__name:"SaveButton",props:{model:{},neverShowPopover:{type:Boolean}},emits:["save"],setup(n,{emit:t}){var h;const a=n,s=e=>{var c;return(c=e.parentElement)!=null?c:document.body},o=new B(D.boolean(),"dontShowUnsavedChanges"),f=_((h=o.get())!=null?h:!1),w=()=>{o.set(!0),f.value=!0},d=_(!1);async function g(){d.value=!0;try{await a.model.save(),t("save")}catch{L.error({message:"Error saving"})}finally{d.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),g())}),addEventListener("beforeunload",e=>{a.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,c)=>{var m;return V(),A("div",G,[r(i(E),{placement:"left",open:e.model.hasChanges()&&!f.value&&!e.neverShowPopover,"get-popup-container":s},{content:l(()=>[I("div",Y,[r(i(x),null,{default:l(()=>[v("You have unsaved changes")]),_:1}),r(i(N),{onClick:w},{default:l(()=>[v("Don't show this again")]),_:1})])]),default:l(()=>{var b,y;return[r(i(P),{class:k(["save-button",{changes:(b=e.model)==null?void 0:b.hasChanges()}]),loading:d.value,disabled:!((y=e.model)!=null&&y.hasChanges()),onClick:c[0]||(c[0]=u=>g())},{icon:l(()=>[r(i(T))]),default:l(()=>{var u;return[v(z((u=e.model)!=null&&u.hasChanges()?"Save":"Saved")+" ",1)]}),_:1},8,["class","loading","disabled"])]}),_:1},8,["open"]),r(j,{"has-changes":(m=e.model)==null?void 0:m.hasChanges()},null,8,["has-changes"])])}}});const R=H(q,[["__scopeId","data-v-3136ae90"]]);export{R as S};
//# sourceMappingURL=SaveButton.237d897c.js.map
