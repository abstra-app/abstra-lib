import{a as A}from"./asyncComputed.3fd353c4.js";import{d as _,e as I,ei as B,f as m,c as C,w as a,u as e,o as g,b as t,ax as s,d5 as h,d3 as P,d4 as u,a as f,e6 as v,cs as D,bD as E,cr as F,e7 as T,W as x,R as N}from"./vue-router.3700fa1b.js";import"./gateway.bf4fcd6e.js";import{P as j}from"./project.e9da3122.js";import"./tables.275c939a.js";import{S as R}from"./SaveButton.e77ff3b1.js";import{a as b}from"./router.f6b851d7.js";import{A as U}from"./index.d7a725f3.js";import"./popupNotifcation.51da3131.js";import"./record.3b861102.js";import"./string.e2148cfd.js";import"./UnsavedChangesHandler.7b97b934.js";import"./ExclamationCircleOutlined.bd40c99d.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[r]="e8461615-a9f4-4dc0-a7e7-972b0ee93f92",n._sentryDebugIdIdentifier="sentry-dbid-e8461615-a9f4-4dc0-a7e7-972b0ee93f92")}catch{}})();const V=_({__name:"SubdomainEditor",props:{project:{}},setup(n){const r=n,o=I(void 0),i=B.exports.debounce(async()=>{try{const{available:l}=await r.project.checkSubdomain();o.value=l?"available":"unavailable"}catch{o.value=void 0}},500);function d(){r.project.subdomain?(o.value="loading",i()):o.value="invalid"}const c=m(()=>{switch(o.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),y=m(()=>{switch(o.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),k=()=>{r.project.subdomain=j.formatSubdomain(r.project.subdomain),d()};function w(){r.project.resetChanges(),o.value=void 0}return(l,p)=>(g(),C(e(U),{direction:"vertical"},{default:a(()=>[t(e(h),{level:2},{default:a(()=>[s("Subdomain")]),_:1}),t(e(P),null,{default:a(()=>[s(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(e(b),null,{default:a(()=>[t(e(u),null,{default:a(()=>[s("Forms available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[f("span",null,v(l.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(b),null,{default:a(()=>[t(e(u),null,{default:a(()=>[s("Hooks available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[f("span",null,v(l.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(e(F),null,{default:a(()=>[t(e(D),{"validate-status":c.value,help:y.value,"has-feedback":""},{default:a(()=>[t(e(E),{value:l.project.subdomain,"onUpdate:value":p[0]||(p[0]=S=>l.project.subdomain=S),type:"text",loading:o.value==="loading",onBlur:k},{addonBefore:a(()=>[s("https://")]),addonAfter:a(()=>[s(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),t(R,{model:l.project,disabled:o.value!=="available",onError:w},null,8,["model","disabled"])]),_:1})]),_:1}))}}),H={key:0,class:"project-settings"},Z=_({__name:"ProjectSettings",setup(n){const o=T().params.projectId,{result:i}=A(()=>j.get(o));return(d,c)=>e(i)?(g(),x("div",H,[t(e(h),null,{default:a(()=>[s("Project Settings")]),_:1}),t(V,{project:e(i)},null,8,["project"])])):N("",!0)}});export{Z as default};
//# sourceMappingURL=ProjectSettings.92a03ef4.js.map
