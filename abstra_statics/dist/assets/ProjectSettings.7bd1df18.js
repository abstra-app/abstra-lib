import{a as A}from"./asyncComputed.fad8f51c.js";import"./gateway.128eaa3b.js";import{d as _,e as I,eK as P,f as m,o as g,c as B,w as a,u as e,b as t,ar as s,cR as h,cP as C,cQ as u,a as v,ez as b,cj as E,bx as T,ci as D,eA as F,et as x,ev as N}from"./vue-router.9a569e12.js";import"./tables.fcec39cf.js";import{P as j}from"./project.c065b85b.js";import{S as R}from"./SaveButton.f3a2055c.js";import{a as f}from"./router.2d63c697.js";import{A as U}from"./index.20cb03ef.js";import"./popupNotifcation.580a98fd.js";import"./record.8d8aa9ae.js";import"./string.90825693.js";import"./ExclamationCircleOutlined.3bc24177.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[r]="d4fec124-65be-4ccb-8402-5c4906e92570",n._sentryDebugIdIdentifier="sentry-dbid-d4fec124-65be-4ccb-8402-5c4906e92570")}catch{}})();const V=_({__name:"SubdomainEditor",props:{project:{}},setup(n){const r=n,o=I(void 0),i=P.exports.debounce(async()=>{try{const{available:l}=await r.project.checkSubdomain();o.value=l?"available":"unavailable"}catch{o.value=void 0}},500);function d(){r.project.subdomain?(o.value="loading",i()):o.value="invalid"}const c=m(()=>{switch(o.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),y=m(()=>{switch(o.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),k=()=>{r.project.subdomain=j.formatSubdomain(r.project.subdomain),d()};function w(){r.project.resetChanges(),o.value=void 0}return(l,p)=>(g(),B(e(U),{direction:"vertical"},{default:a(()=>[t(e(h),{level:2},{default:a(()=>[s("Subdomain")]),_:1}),t(e(C),null,{default:a(()=>[s(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(e(f),null,{default:a(()=>[t(e(u),null,{default:a(()=>[s("Forms available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[v("span",null,b(l.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(f),null,{default:a(()=>[t(e(u),null,{default:a(()=>[s("Hooks available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[v("span",null,b(l.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(e(D),null,{default:a(()=>[t(e(E),{"validate-status":c.value,help:y.value,"has-feedback":""},{default:a(()=>[t(e(T),{value:l.project.subdomain,"onUpdate:value":p[0]||(p[0]=S=>l.project.subdomain=S),type:"text",loading:o.value==="loading",onBlur:k},{addonBefore:a(()=>[s("https://")]),addonAfter:a(()=>[s(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),t(R,{model:l.project,disabled:o.value!=="available",onError:w},null,8,["model","disabled"])]),_:1})]),_:1}))}}),H={key:0,class:"project-settings"},Y=_({__name:"ProjectSettings",setup(n){const o=F().params.projectId,{result:i}=A(()=>j.get(o));return(d,c)=>e(i)?(g(),x("div",H,[t(e(h),null,{default:a(()=>[s("Project Settings")]),_:1}),t(V,{project:e(i)},null,8,["project"])])):N("",!0)}});export{Y as default};
//# sourceMappingURL=ProjectSettings.7bd1df18.js.map
