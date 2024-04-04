import{a as S}from"./asyncComputed.1f5635fb.js";import{a as m}from"./router.22df13b6.js";import{d as _,r as I,eM as C,H as f,b as g,c as P,w as a,u as e,f as t,aq as s,e as v,eD as b,bx as B,cA as D,eA as E,eu as F,ew as T}from"./outputWidgets.48c25cd2.js";import"./index.797e008c.js";import{P as h}from"./project.d48800a2.js";import{_ as x}from"./SaveButton.vue_vue_type_script_setup_true_lang.2ec512b1.js";import{A as j}from"./Title.e40b8473.js";import{A as H}from"./Paragraph.66687a77.js";import{A as u}from"./Text.40bc87e8.js";import{A as N,F as U}from"./Form.92bcbf89.js";import"./popupNotifcation.dc59f99f.js";import"./index.cf4c23b9.js";import"./record.57e84bfe.js";import"./pubsub.8d59f894.js";import"./hasIn.f2551375.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[r]="a53df117-a7f1-4ec7-8ecd-9e360e15436a",n._sentryDebugIdIdentifier="sentry-dbid-a53df117-a7f1-4ec7-8ecd-9e360e15436a")}catch{}})();const V=_({__name:"SubdomainEditor",props:{project:{}},setup(n){const r=n,o=I(void 0),i=C.exports.debounce(async()=>{try{const{available:l}=await r.project.checkSubdomain();o.value=l?"available":"unavailable"}catch{o.value=void 0}},500);function d(){r.project.subdomain?(o.value="loading",i()):o.value="invalid"}const c=f(()=>{switch(o.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),y=f(()=>{switch(o.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),A=()=>{r.project.subdomain=h.formatSubdomain(r.project.subdomain),d()};function k(){r.project.resetChanges(),o.value=void 0}return(l,p)=>(g(),P(e(D),{direction:"vertical"},{default:a(()=>[t(e(j),{level:2},{default:a(()=>[s("Subdomain")]),_:1}),t(e(H),null,{default:a(()=>[s(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(e(m),null,{default:a(()=>[t(e(u),null,{default:a(()=>[s("Forms available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[v("span",null,b(l.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(m),null,{default:a(()=>[t(e(u),null,{default:a(()=>[s("Hooks available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[v("span",null,b(l.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(e(U),null,{default:a(()=>[t(e(N),{"validate-status":c.value,help:y.value,"has-feedback":""},{default:a(()=>[t(e(B),{value:l.project.subdomain,"onUpdate:value":p[0]||(p[0]=w=>l.project.subdomain=w),type:"text",loading:o.value==="loading",onBlur:A},{addonBefore:a(()=>[s("https://")]),addonAfter:a(()=>[s(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),t(x,{model:l.project,disabled:o.value!=="available",onError:k},null,8,["model","disabled"])]),_:1})]),_:1}))}}),R={key:0,class:"project-settings"},ae=_({__name:"ProjectSettings",setup(n){const o=E().params.projectId,{result:i}=S(()=>h.get(o));return(d,c)=>e(i)?(g(),F("div",R,[t(e(j),null,{default:a(()=>[s("Project Settings")]),_:1}),t(V,{project:e(i)},null,8,["project"])])):T("",!0)}});export{ae as default};
//# sourceMappingURL=ProjectSettings.4407396a.js.map
