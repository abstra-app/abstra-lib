import{a as A}from"./asyncComputed.b8a2ba99.js";import"./gateway.bf2cabe4.js";import{d as _,e as I,eM as B,f,c as C,w as a,u as e,o as g,b as t,ax as s,cW as h,cU as P,cV as i,a as m,eA as v,co as D,bD as E,cn as F,eB as T,W as U,R as V}from"./vue-router.c2ee0e91.js";import"./tables.f86a0e1f.js";import{P as j}from"./project.50655e27.js";import{S as x}from"./SaveButton.d63329cd.js";import{a as b}from"./router.8cbc8b5b.js";import{A as N}from"./index.00707700.js";import"./popupNotifcation.34667eaf.js";import"./record.7ac8200f.js";import"./string.187ed685.js";import"./ExclamationCircleOutlined.3acf4d6f.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[r]="7b21c66c-faff-4c39-88f3-0c0f07efe2d2",n._sentryDebugIdIdentifier="sentry-dbid-7b21c66c-faff-4c39-88f3-0c0f07efe2d2")}catch{}})();const R=_({__name:"SubdomainEditor",props:{project:{}},setup(n){const r=n,o=I(void 0),u=B.exports.debounce(async()=>{try{const{available:l}=await r.project.checkSubdomain();o.value=l?"available":"unavailable"}catch{o.value=void 0}},500);function d(){r.project.subdomain?(o.value="loading",u()):o.value="invalid"}const c=f(()=>{switch(o.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),y=f(()=>{switch(o.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),k=()=>{r.project.subdomain=j.formatSubdomain(r.project.subdomain),d()};function w(){r.project.resetChanges(),o.value=void 0}return(l,p)=>(g(),C(e(N),{direction:"vertical"},{default:a(()=>[t(e(h),{level:2},{default:a(()=>[s("Subdomain")]),_:1}),t(e(P),null,{default:a(()=>[s(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(e(b),null,{default:a(()=>[t(e(i),null,{default:a(()=>[s("Forms available at:")]),_:1}),t(e(i),{code:""},{default:a(()=>[m("span",null,v(l.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(b),null,{default:a(()=>[t(e(i),null,{default:a(()=>[s("Hooks available at:")]),_:1}),t(e(i),{code:""},{default:a(()=>[m("span",null,v(l.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(e(F),null,{default:a(()=>[t(e(D),{"validate-status":c.value,help:y.value,"has-feedback":""},{default:a(()=>[t(e(E),{value:l.project.subdomain,"onUpdate:value":p[0]||(p[0]=S=>l.project.subdomain=S),type:"text",loading:o.value==="loading",onBlur:k},{addonBefore:a(()=>[s("https://")]),addonAfter:a(()=>[s(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),t(x,{model:l.project,disabled:o.value!=="available",onError:w},null,8,["model","disabled"])]),_:1})]),_:1}))}}),H={key:0,class:"project-settings"},Y=_({__name:"ProjectSettings",setup(n){const o=T().params.projectId,{result:u}=A(()=>j.get(o));return(d,c)=>e(u)?(g(),U("div",H,[t(e(h),null,{default:a(()=>[s("Project Settings")]),_:1}),t(R,{project:e(u)},null,8,["project"])])):V("",!0)}});export{Y as default};
//# sourceMappingURL=ProjectSettings.2ab10806.js.map
