import{a as A}from"./asyncComputed.c3c2c9b7.js";import"./gateway.93d564a3.js";import{d as _,e as I,R as B,f,o as g,c as C,w as a,u as e,b as t,as as s,cS as j,cQ as P,cR as i,a as m,eA as b,ck as E,by as D,cj as F,eB as R,eu as T,ew as N}from"./vue-router.7730510e.js";import"./index.b96bfbea.js";import{P as h}from"./project.6e2c8f5f.js";import{S as U}from"./SaveButton.81c30359.js";import{a as v}from"./router.84deed41.js";import{A as V}from"./index.dec0903c.js";import"./popupNotifcation.1478bc39.js";import"./record.6f75ac39.js";import"./string.3e8f4f7c.js";import"./ExclamationCircleOutlined.ab7a9852.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[r]="2a94d513-5a6f-4f03-ab76-b20f54625608",n._sentryDebugIdIdentifier="sentry-dbid-2a94d513-5a6f-4f03-ab76-b20f54625608")}catch{}})();const x=_({__name:"SubdomainEditor",props:{project:{}},setup(n){const r=n,o=I(void 0),u=B.exports.debounce(async()=>{try{const{available:l}=await r.project.checkSubdomain();o.value=l?"available":"unavailable"}catch{o.value=void 0}},500);function d(){r.project.subdomain?(o.value="loading",u()):o.value="invalid"}const c=f(()=>{switch(o.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),y=f(()=>{switch(o.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),k=()=>{r.project.subdomain=h.formatSubdomain(r.project.subdomain),d()};function w(){r.project.resetChanges(),o.value=void 0}return(l,p)=>(g(),C(e(V),{direction:"vertical"},{default:a(()=>[t(e(j),{level:2},{default:a(()=>[s("Subdomain")]),_:1}),t(e(P),null,{default:a(()=>[s(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(e(v),null,{default:a(()=>[t(e(i),null,{default:a(()=>[s("Forms available at:")]),_:1}),t(e(i),{code:""},{default:a(()=>[m("span",null,b(l.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(v),null,{default:a(()=>[t(e(i),null,{default:a(()=>[s("Hooks available at:")]),_:1}),t(e(i),{code:""},{default:a(()=>[m("span",null,b(l.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(e(F),null,{default:a(()=>[t(e(E),{"validate-status":c.value,help:y.value,"has-feedback":""},{default:a(()=>[t(e(D),{value:l.project.subdomain,"onUpdate:value":p[0]||(p[0]=S=>l.project.subdomain=S),type:"text",loading:o.value==="loading",onBlur:k},{addonBefore:a(()=>[s("https://")]),addonAfter:a(()=>[s(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),t(U,{model:l.project,disabled:o.value!=="available",onError:w},null,8,["model","disabled"])]),_:1})]),_:1}))}}),H={key:0,class:"project-settings"},Y=_({__name:"ProjectSettings",setup(n){const o=R().params.projectId,{result:u}=A(()=>h.get(o));return(d,c)=>e(u)?(g(),T("div",H,[t(e(j),null,{default:a(()=>[s("Project Settings")]),_:1}),t(x,{project:e(u)},null,8,["project"])])):N("",!0)}});export{Y as default};
//# sourceMappingURL=ProjectSettings.ff6dac3a.js.map
