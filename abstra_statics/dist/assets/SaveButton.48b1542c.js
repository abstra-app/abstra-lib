import{f as r,f5 as C,d as O,L as B,z as V,r as _,b as D,eV as z,w as l,e as E,u as d,cS as P,am as v,cT as k,bF as I,eZ as A,f4 as L,cB as j,cz as H,E as N}from"./outputWidgets.250fb051.js";import{U as x}from"./UnsavedChangesHandler.88eb5a1b.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="91ba4c93-6642-4ae3-8792-71c9095a1954",a._sentryDebugIdIdentifier="sentry-dbid-91ba4c93-6642-4ae3-8792-71c9095a1954")}catch{}})();var M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"};const T=M;function S(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?Object(arguments[n]):{},s=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),s.forEach(function(o){U(a,o,t[o])})}return a}function U(a,n,t){return n in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}var f=function(n,t){var s=S({},n,t.attrs);return r(C,S({},s,{icon:T}),null)};f.displayName="SaveOutlined";f.inheritAttrs=!1;const $=f,F={class:"popup-container"},Y={style:{padding:"0px 4px"}},Z=O({__name:"SaveButton",props:{model:{},neverShowPopover:{type:Boolean}},emits:["save"],setup(a,{emit:n}){var h;const t=a,s=e=>{var c;return(c=e.parentElement)!=null?c:document.body},o=new B(V.boolean(),"dontShowUnsavedChanges"),p=_((h=o.get())!=null?h:!1),w=()=>{o.set(!0),p.value=!0},i=_(!1);async function g(){i.value=!0;try{await t.model.save(),n("save")}catch{H.error({message:"Error saving"})}finally{i.value=!1}}return addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&e.key==="s"&&(e.preventDefault(),g())}),addEventListener("beforeunload",e=>{t.model.hasChanges()&&(e.preventDefault(),e.returnValue="")}),(e,c)=>{var m;return D(),z("div",F,[r(d(j),{placement:"left",open:e.model.hasChanges()&&!p.value&&!e.neverShowPopover,"get-popup-container":s},{content:l(()=>[E("div",Y,[r(d(P),null,{default:l(()=>[v("You have unsaved changes")]),_:1}),r(d(k),{onClick:w},{default:l(()=>[v("Don't show this again")]),_:1})])]),default:l(()=>{var y,b;return[r(d(I),{class:A(["save-button",{changes:(y=e.model)==null?void 0:y.hasChanges()}]),loading:i.value,disabled:!((b=e.model)!=null&&b.hasChanges()),onClick:c[0]||(c[0]=u=>g())},{icon:l(()=>[r(d($))]),default:l(()=>{var u;return[v(L((u=e.model)!=null&&u.hasChanges()?"Save":"Saved")+" ",1)]}),_:1},8,["class","loading","disabled"])]}),_:1},8,["open"]),r(x,{"has-changes":(m=e.model)==null?void 0:m.hasChanges()},null,8,["has-changes"])])}}});const J=N(Z,[["__scopeId","data-v-3136ae90"]]);export{J as S};
//# sourceMappingURL=SaveButton.48b1542c.js.map
