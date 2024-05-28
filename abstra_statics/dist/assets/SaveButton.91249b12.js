import{f as r,eK as C,d as O,L as B,z as D,r as _,b as V,ey as A,w as l,e as E,u as d,au as v,bI as I,eC as P,eJ as k,cC as z,cA as L,E as j}from"./outputWidgets.7aa0f858.js";import{U as H}from"./UnsavedChangesHandler.f8402cdb.js";import{a as N}from"./Base.646c79a8.js";import{A as x}from"./Link.d67967d1.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="db0bac2c-c491-4180-8c7f-84cbc87e0174",n._sentryDebugIdIdentifier="sentry-dbid-db0bac2c-c491-4180-8c7f-84cbc87e0174")}catch{}})();var M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"};const U=M;function S(n){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?Object(arguments[a]):{},s=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),s.forEach(function(o){$(n,o,t[o])})}return n}function $(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}var f=function(a,t){var s=S({},a,t.attrs);return r(C,S({},s,{icon:U}),null)};f.displayName="SaveOutlined";f.inheritAttrs=!1;const T=f,J={class:"popup-container"},K={style:{padding:"0px 4px"}},Y=O({__name:"SaveButton",props:{model:{},neverShowPopover:{type:Boolean}},emits:["save"],setup(n,{emit:a}){var h;const t=n,s=e=>{var c;return(c=e.parentElement)!=null?c:document.body},o=new B(D.boolean(),"dontShowUnsavedChanges"),p=_((h=o.get())!=null?h:!1),w=()=>{o.set(!0),p.value=!0},i=_(!1);async function g(){i.value=!0;try{await t.model.save(),a("save")}catch{L.error({message:"Error saving"})}finally{i.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),g())}),addEventListener("beforeunload",e=>{t.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,c)=>{var m;return V(),A("div",J,[r(d(z),{placement:"left",open:e.model.hasChanges()&&!p.value&&!e.neverShowPopover,"get-popup-container":s},{content:l(()=>[E("div",K,[r(d(N),null,{default:l(()=>[v("You have unsaved changes")]),_:1}),r(d(x),{onClick:w},{default:l(()=>[v("Don't show this again")]),_:1})])]),default:l(()=>{var b,y;return[r(d(I),{class:P(["save-button",{changes:(b=e.model)==null?void 0:b.hasChanges()}]),loading:i.value,disabled:!((y=e.model)!=null&&y.hasChanges()),onClick:c[0]||(c[0]=u=>g())},{icon:l(()=>[r(d(T))]),default:l(()=>{var u;return[v(k((u=e.model)!=null&&u.hasChanges()?"Save":"Saved")+" ",1)]}),_:1},8,["class","loading","disabled"])]}),_:1},8,["open"]),r(H,{"has-changes":(m=e.model)==null?void 0:m.hasChanges()},null,8,["has-changes"])])}}});const R=j(Y,[["__scopeId","data-v-3136ae90"]]);export{R as S};
//# sourceMappingURL=SaveButton.91249b12.js.map
