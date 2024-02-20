import{a as D}from"./ant-design.6dd1fdf4.js";import{f as d,eG as B,d as C,eJ as L,J as E,o as z,L as A,b as O,ev as V,v as P,r as _,S as w,w as i,e as U,u as c,ar as h,bV as k,ez as I,eD as H,cB as $,a$ as j,cz as M}from"./outputWidgets.59990c05.js";import{T as N}from"./Typography.164def35.js";import{A as T}from"./Link.010d33fe.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="cfaf4e82-bc3b-46fa-826a-dbbee1cbbe24",n._sentryDebugIdIdentifier="sentry-dbid-cfaf4e82-bc3b-46fa-826a-dbbee1cbbe24")}catch{}})();var x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"};const F=x;function S(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.forEach(function(r){J(n,r,t[r])})}return n}function J(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var p=function(e,t){var o=S({},e,t.attrs);return d(B,S({},o,{icon:F}),null)};p.displayName="SaveOutlined";p.inheritAttrs=!1;const Y=p,G={class:"unsaved-changes-handler"},g="You have unsaved changes. Are you sure you want to leave?",R=C({__name:"UnsavedChangesHandler",props:{hasChanges:{type:Boolean}},setup(n){const e=n,t=s=>(s=s||window.event,s&&(s.returnValue=g),g),o=()=>{window.addEventListener("beforeunload",t)};L(async(s,u,a)=>{if(!e.hasChanges)return a();await D(g)?a():a(!1)});const r=()=>window.removeEventListener("beforeunload",t),l=s=>s?o():r();return E(()=>e.hasChanges,l),z(()=>l(e.hasChanges)),A(r),(s,u)=>(O(),V("div",G))}});const q=P(R,[["__scopeId","data-v-fa94acdd"]]),K={style:{padding:"0px 4px"}},ee=C({__name:"SaveButton",props:{model:{},neverShowPopover:{type:Boolean}},emits:["save"],setup(n,{emit:e}){var u;const t=n,o=_((u=w.get("dontShowUnsavedChanges"))!=null?u:!1),r=()=>{w.set("dontShowUnsavedChanges",!0),o.value=!0},l=_(!1);async function s(){l.value=!0;try{await t.model.save(),e("save")}catch{M.error({message:"Error saving"})}finally{l.value=!1}}return addEventListener("keydown",a=>{(a.metaKey||a.ctrlKey)&&a.key==="s"&&(a.preventDefault(),s())}),addEventListener("beforeunload",a=>{t.model.hasChanges()&&(a.preventDefault(),a.returnValue="")}),(a,f)=>{var m;return O(),V(j,null,[d(c($),{placement:"left",visible:a.model.hasChanges()&&!o.value&&!a.neverShowPopover},{content:i(()=>[U("div",K,[d(c(N),null,{default:i(()=>[h("You have unsaved changes")]),_:1}),d(c(T),{onClick:r},{default:i(()=>[h("Don't show this again")]),_:1})])]),default:i(()=>{var b,y;return[d(c(k),{class:I(["save-button",{changes:(b=a.model)==null?void 0:b.hasChanges()}]),loading:l.value,disabled:!((y=a.model)!=null&&y.hasChanges()),onClick:f[0]||(f[0]=v=>s())},{icon:i(()=>[d(c(Y))]),default:i(()=>{var v;return[h(H((v=a.model)!=null&&v.hasChanges()?"Save":"Saved")+" ",1)]}),_:1},8,["class","loading","disabled"])]}),_:1},8,["visible"]),d(q,{"has-changes":(m=a.model)==null?void 0:m.hasChanges()},null,8,["has-changes"])],64)}}});export{ee as _};
//# sourceMappingURL=SaveButton.vue_vue_type_script_setup_true_lang.033f2866.js.map
