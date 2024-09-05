import{a as A}from"./asyncComputed.ced33776.js";import{d as _,e as I,em as B,f as m,c as C,w as a,u as e,o as g,b as t,aF as s,db as h,d9 as P,da as u,a as b,ec as f,cy as E,bK as F,cx as D,ed as T,X as x,R as N}from"./vue-router.e3485c53.js";import"./gateway.a69e1b10.js";import{P as j}from"./project.3a16f5f9.js";import"./tables.d5a2513a.js";import{S as R}from"./SaveButton.79e54e04.js";import{a as v}from"./router.58633c75.js";import{A as U}from"./index.eebe051d.js";import"./popupNotifcation.e37d2ee2.js";import"./record.c83c38fa.js";import"./string.77472381.js";import"./UnsavedChangesHandler.0b40626d.js";import"./ExclamationCircleOutlined.e54268b6.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[r]="f9320b50-af37-4ec7-818b-0ac86a577c6c",n._sentryDebugIdIdentifier="sentry-dbid-f9320b50-af37-4ec7-818b-0ac86a577c6c")}catch{}})();const V=_({__name:"SubdomainEditor",props:{project:{}},setup(n){const r=n,o=I(void 0),i=B.exports.debounce(async()=>{try{const{available:l}=await r.project.checkSubdomain();o.value=l?"available":"unavailable"}catch{o.value=void 0}},500);function d(){r.project.subdomain?(o.value="loading",i()):o.value="invalid"}const c=m(()=>{switch(o.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),y=m(()=>{switch(o.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),k=()=>{r.project.subdomain=j.formatSubdomain(r.project.subdomain),d()};function w(){r.project.resetChanges(),o.value=void 0}return(l,p)=>(g(),C(e(U),{direction:"vertical"},{default:a(()=>[t(e(h),{level:2},{default:a(()=>[s("Subdomain")]),_:1}),t(e(P),null,{default:a(()=>[s(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(e(v),null,{default:a(()=>[t(e(u),null,{default:a(()=>[s("Forms available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[b("span",null,f(l.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(v),null,{default:a(()=>[t(e(u),null,{default:a(()=>[s("Hooks available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[b("span",null,f(l.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(e(D),null,{default:a(()=>[t(e(E),{"validate-status":c.value,help:y.value,"has-feedback":""},{default:a(()=>[t(e(F),{value:l.project.subdomain,"onUpdate:value":p[0]||(p[0]=S=>l.project.subdomain=S),type:"text",loading:o.value==="loading",onBlur:k},{addonBefore:a(()=>[s("https://")]),addonAfter:a(()=>[s(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),t(R,{model:l.project,disabled:o.value!=="available",onError:w},null,8,["model","disabled"])]),_:1})]),_:1}))}}),H={key:0,class:"project-settings"},Z=_({__name:"ProjectSettings",setup(n){const o=T().params.projectId,{result:i}=A(()=>j.get(o));return(d,c)=>e(i)?(g(),x("div",H,[t(e(h),null,{default:a(()=>[s("Project Settings")]),_:1}),t(V,{project:e(i)},null,8,["project"])])):N("",!0)}});export{Z as default};
//# sourceMappingURL=ProjectSettings.3c233bd8.js.map
