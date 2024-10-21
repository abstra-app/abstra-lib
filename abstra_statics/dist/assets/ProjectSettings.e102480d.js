import{a as D}from"./asyncComputed.526ae0f6.js";import{b as t,eh as T,f5 as B,d as y,e as E,em as F,f as p,c as x,w as l,u as n,o as j,aF as u,d9 as S,d7 as N,d8 as c,a as v,ec as g,cv as V,dd as H,bH as R,aV as U,cu as $,ed as q,X as M,R as X}from"./vue-router.fd306bcf.js";import"./gateway.a8fe7f14.js";import{P as C}from"./project.76548650.js";import"./tables.ec6f6f36.js";import{S as z}from"./SaveButton.0d5811ff.js";import{a as h}from"./router.92e43b4f.js";import{A as G}from"./index.1153095a.js";import"./popupNotifcation.f58ac251.js";import"./record.4ea6e379.js";import"./string.ddc06473.js";import"./UnsavedChangesHandler.31288c3a.js";import"./ExclamationCircleOutlined.20f33f56.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[o]="f2a15e70-ebf7-4879-99bd-d1012a7a0989",r._sentryDebugIdIdentifier="sentry-dbid-f2a15e70-ebf7-4879-99bd-d1012a7a0989")}catch{}})();function _(r){for(var o=1;o<arguments.length;o++){var e=arguments[o]!=null?Object(arguments[o]):{},a=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(e).filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),a.forEach(function(i){J(r,i,e[i])})}return r}function J(r,o,e){return o in r?Object.defineProperty(r,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[o]=e,r}var m=function(o,e){var a=_({},o,e.attrs);return t(T,_({},a,{icon:B}),null)};m.displayName="CopyOutlined";m.inheritAttrs=!1;const L=m,Q=y({__name:"SubdomainEditor",props:{project:{}},emits:["change-subdomain"],setup(r,{emit:o}){const e=r,a=E(void 0),i=F.exports.debounce(async()=>{try{const{available:s}=await e.project.checkSubdomain();a.value=s?"available":"unavailable"}catch{a.value=void 0}},500);function d(){if(!e.project.hasChangesDeep("subdomain")){a.value=void 0;return}e.project.subdomain?(a.value="loading",i()):a.value="invalid"}const f=p(()=>a.value!=="available"||!e.project.hasChangesDeep("subdomain")),w=async()=>{await navigator.clipboard.writeText(e.project.getUrl())},A=p(()=>{switch(a.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),k=p(()=>{switch(a.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),O=()=>{const s=C.formatSubdomain(e.project.subdomain);o("change-subdomain",s),d()};function P(){e.project.resetChanges(),a.value=void 0}return(s,b)=>(j(),x(n(G),{direction:"vertical"},{default:l(()=>[t(n(S),{level:2},{default:l(()=>[u("Subdomain")]),_:1}),t(n(N),null,{default:l(()=>[u(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(n(h),null,{default:l(()=>[t(n(c),null,{default:l(()=>[u("Forms available at:")]),_:1}),t(n(c),{code:""},{default:l(()=>[v("span",null,g(s.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(n(h),null,{default:l(()=>[t(n(c),null,{default:l(()=>[u("Hooks available at:")]),_:1}),t(n(c),{code:""},{default:l(()=>[v("span",null,g(s.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(n($),null,{default:l(()=>[t(n(V),{"validate-status":A.value,help:k.value,"has-feedback":""},{default:l(()=>[t(n(H),{gap:"middle"},{default:l(()=>[t(n(R),{value:s.project.subdomain,type:"text",loading:a.value==="loading",onBlur:O,onChange:b[0]||(b[0]=I=>o("change-subdomain",I.target.value))},{addonBefore:l(()=>[u("https://")]),addonAfter:l(()=>[u(".abstra.app/")]),_:1},8,["value","loading"]),t(n(U),{placement:"top",title:"Copy"},{default:l(()=>[t(n(L),{color:"red",onClick:w})]),_:1})]),_:1})]),_:1},8,["validate-status","help"]),t(z,{model:s.project,disabled:f.value,onError:P},null,8,["model","disabled"])]),_:1})]),_:1}))}}),W={key:0,class:"project-settings"},de=y({__name:"ProjectSettings",setup(r){const e=q().params.projectId,{result:a}=D(()=>C.get(e)),i=d=>{a.value.subdomain=d};return(d,f)=>n(a)?(j(),M("div",W,[t(n(S),null,{default:l(()=>[u("Project Settings")]),_:1}),t(Q,{project:n(a),onChangeSubdomain:i},null,8,["project"])])):X("",!0)}});export{de as default};
//# sourceMappingURL=ProjectSettings.e102480d.js.map
