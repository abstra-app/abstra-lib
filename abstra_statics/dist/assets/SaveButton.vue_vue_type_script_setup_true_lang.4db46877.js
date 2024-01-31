import{a as V}from"./ant-design.cc9d9cec.js";import{f as d,eE as B,d as S,eH as D,G as E,o as L,J as A,b as C,et as O,t as P,r as y,w as i,e as U,u,ao as h,bM as k,ex as H,eB as I,cw as z,bo as M,cu as $}from"./outputWidgets.bf51620f.js";import{S as _}from"./storage.675c7272.js";import{A as j}from"./Link.9f6b8f6e.js";import"./index.598200f7.js";import{a as N}from"./Text.1409296e.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="44b4e121-89f4-47d1-99bb-988b9742ffbc",n._sentryDebugIdIdentifier="sentry-dbid-44b4e121-89f4-47d1-99bb-988b9742ffbc")}catch{}})();var x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"};const F=x;function w(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),r.forEach(function(s){T(n,s,t[s])})}return n}function T(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var p=function(e,t){var r=w({},e,t.attrs);return d(B,w({},r,{icon:F}),null)};p.displayName="SaveOutlined";p.inheritAttrs=!1;const Y=p,G={class:"unsaved-changes-handler"},g="You have unsaved changes. Are you sure you want to leave?",J=S({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(n){const e=n,t=o=>(o=o||window.event,o&&(o.returnValue=g),g),r=()=>{window.addEventListener("beforeunload",t)};D(async(o,a,l)=>{if(!e.hasChanges)return l();await V(g)?l():l(!1)});const s=()=>window.removeEventListener("beforeunload",t),c=o=>o?r():s();return E(()=>e.hasChanges,c),L(()=>c(e.hasChanges)),A(s),(o,a)=>(C(),O("div",G))}});const R=P(J,[["__scopeId","data-v-fa94acdd"]]),q={style:{padding:"0px 4px"}},ne=S({__name:"SaveButton",props:{model:{},neverShowPopover:{type:Boolean}},setup(n){var o;const e=n,t=y((o=_.get("dontShowUnsavedChanges"))!=null?o:!1),r=()=>{_.set("dontShowUnsavedChanges",!0),t.value=!0},s=y(!1);async function c(){s.value=!0;try{await e.model.save()}catch{$.error({message:"Error saving"})}finally{s.value=!1}}return addEventListener("keydown",a=>{(a.metaKey||a.ctrlKey)&&a.key==="s"&&(a.preventDefault(),c())}),addEventListener("beforeunload",a=>{e.model.hasChanges()&&(a.preventDefault(),a.returnValue="")}),(a,l)=>{var f;return C(),O(M,null,[d(u(z),{placement:"left",visible:a.model.hasChanges()&&!t.value&&!a.neverShowPopover},{content:i(()=>[U("div",q,[d(u(N),null,{default:i(()=>[h("You have unsaved changes")]),_:1}),d(u(j),{onClick:r},{default:i(()=>[h("Don't show this again")]),_:1})])]),default:i(()=>{var m,b;return[d(u(k),{class:H(["save-button",{changes:(m=a.model)==null?void 0:m.hasChanges()}]),loading:s.value,disabled:!((b=a.model)!=null&&b.hasChanges()),onClick:l[0]||(l[0]=v=>c())},{icon:i(()=>[d(u(Y))]),default:i(()=>{var v;return[h(I((v=a.model)!=null&&v.hasChanges()?"Save":"Saved")+" ",1)]}),_:1},8,["class","loading","disabled"])]}),_:1},8,["visible"]),d(R,{"has-changes":(f=a.model)==null?void 0:f.hasChanges()},null,8,["has-changes"])],64)}}});export{ne as _};
//# sourceMappingURL=SaveButton.vue_vue_type_script_setup_true_lang.4db46877.js.map
