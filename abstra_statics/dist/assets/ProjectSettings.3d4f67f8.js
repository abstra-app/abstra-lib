import{a as A}from"./asyncComputed.4b2a24b4.js";import"./gateway.1fc7330e.js";import{d as _,e as I,eF as B,f as m,c as C,w as a,u as e,o as g,b as t,ax as s,cY as h,cW as P,cX as d,a as v,et as f,co as D,bD as E,cn as F,eu as T,W as x,R as N}from"./vue-router.967882c8.js";import{P as j}from"./project.c4805af5.js";import"./tables.784ba641.js";import{S as R}from"./SaveButton.e9222f9c.js";import{a as b}from"./router.b1ab1f0b.js";import{A as U}from"./index.1d0b7068.js";import"./popupNotifcation.a1aa96a2.js";import"./record.b0f25f8f.js";import"./string.76ce519c.js";import"./ExclamationCircleOutlined.46f64215.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[r]="3f83e5c3-6656-4de2-8aa9-c7e7761a5d4d",n._sentryDebugIdIdentifier="sentry-dbid-3f83e5c3-6656-4de2-8aa9-c7e7761a5d4d")}catch{}})();const V=_({__name:"SubdomainEditor",props:{project:{}},setup(n){const r=n,o=I(void 0),u=B.exports.debounce(async()=>{try{const{available:l}=await r.project.checkSubdomain();o.value=l?"available":"unavailable"}catch{o.value=void 0}},500);function i(){r.project.subdomain?(o.value="loading",u()):o.value="invalid"}const c=m(()=>{switch(o.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),y=m(()=>{switch(o.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),k=()=>{r.project.subdomain=j.formatSubdomain(r.project.subdomain),i()};function w(){r.project.resetChanges(),o.value=void 0}return(l,p)=>(g(),C(e(U),{direction:"vertical"},{default:a(()=>[t(e(h),{level:2},{default:a(()=>[s("Subdomain")]),_:1}),t(e(P),null,{default:a(()=>[s(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(e(b),null,{default:a(()=>[t(e(d),null,{default:a(()=>[s("Forms available at:")]),_:1}),t(e(d),{code:""},{default:a(()=>[v("span",null,f(l.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(b),null,{default:a(()=>[t(e(d),null,{default:a(()=>[s("Hooks available at:")]),_:1}),t(e(d),{code:""},{default:a(()=>[v("span",null,f(l.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(e(F),null,{default:a(()=>[t(e(D),{"validate-status":c.value,help:y.value,"has-feedback":""},{default:a(()=>[t(e(E),{value:l.project.subdomain,"onUpdate:value":p[0]||(p[0]=S=>l.project.subdomain=S),type:"text",loading:o.value==="loading",onBlur:k},{addonBefore:a(()=>[s("https://")]),addonAfter:a(()=>[s(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),t(R,{model:l.project,disabled:o.value!=="available",onError:w},null,8,["model","disabled"])]),_:1})]),_:1}))}}),H={key:0,class:"project-settings"},Q=_({__name:"ProjectSettings",setup(n){const o=T().params.projectId,{result:u}=A(()=>j.get(o));return(i,c)=>e(u)?(g(),x("div",H,[t(e(h),null,{default:a(()=>[s("Project Settings")]),_:1}),t(V,{project:e(u)},null,8,["project"])])):N("",!0)}});export{Q as default};
//# sourceMappingURL=ProjectSettings.3d4f67f8.js.map
