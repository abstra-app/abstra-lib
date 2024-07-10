import{a as A}from"./asyncComputed.3fd67146.js";import"./gateway.6c31c921.js";import{d as _,e as I,R as B,f,o as g,c as C,w as a,u as e,b as t,as as s,cS as j,cQ as P,cR as d,a as m,eA as v,ck as E,by as D,cj as F,eB as R,eu as T,ew as N}from"./vue-router.cfcddb21.js";import"./index.69e4954f.js";import{P as h}from"./project.8b9abc32.js";import{S as U}from"./SaveButton.a1c98e21.js";import{a as b}from"./router.179118fa.js";import{A as V}from"./index.f86e7e78.js";import"./popupNotifcation.7dda7c90.js";import"./record.771a6a5c.js";import"./string.5a5fd55b.js";import"./ExclamationCircleOutlined.b124b8c4.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[r]="9b275ad4-7c5a-48fe-a765-d1f9ffd48020",n._sentryDebugIdIdentifier="sentry-dbid-9b275ad4-7c5a-48fe-a765-d1f9ffd48020")}catch{}})();const x=_({__name:"SubdomainEditor",props:{project:{}},setup(n){const r=n,o=I(void 0),u=B.exports.debounce(async()=>{try{const{available:l}=await r.project.checkSubdomain();o.value=l?"available":"unavailable"}catch{o.value=void 0}},500);function i(){r.project.subdomain?(o.value="loading",u()):o.value="invalid"}const c=f(()=>{switch(o.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),y=f(()=>{switch(o.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),k=()=>{r.project.subdomain=h.formatSubdomain(r.project.subdomain),i()};function w(){r.project.resetChanges(),o.value=void 0}return(l,p)=>(g(),C(e(V),{direction:"vertical"},{default:a(()=>[t(e(j),{level:2},{default:a(()=>[s("Subdomain")]),_:1}),t(e(P),null,{default:a(()=>[s(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(e(b),null,{default:a(()=>[t(e(d),null,{default:a(()=>[s("Forms available at:")]),_:1}),t(e(d),{code:""},{default:a(()=>[m("span",null,v(l.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(b),null,{default:a(()=>[t(e(d),null,{default:a(()=>[s("Hooks available at:")]),_:1}),t(e(d),{code:""},{default:a(()=>[m("span",null,v(l.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(e(F),null,{default:a(()=>[t(e(E),{"validate-status":c.value,help:y.value,"has-feedback":""},{default:a(()=>[t(e(D),{value:l.project.subdomain,"onUpdate:value":p[0]||(p[0]=S=>l.project.subdomain=S),type:"text",loading:o.value==="loading",onBlur:k},{addonBefore:a(()=>[s("https://")]),addonAfter:a(()=>[s(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),t(U,{model:l.project,disabled:o.value!=="available",onError:w},null,8,["model","disabled"])]),_:1})]),_:1}))}}),H={key:0,class:"project-settings"},Y=_({__name:"ProjectSettings",setup(n){const o=R().params.projectId,{result:u}=A(()=>h.get(o));return(i,c)=>e(u)?(g(),T("div",H,[t(e(j),null,{default:a(()=>[s("Project Settings")]),_:1}),t(x,{project:e(u)},null,8,["project"])])):N("",!0)}});export{Y as default};
//# sourceMappingURL=ProjectSettings.c7c2ef61.js.map
