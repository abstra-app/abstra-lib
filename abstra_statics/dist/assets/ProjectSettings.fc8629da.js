import{a as S}from"./asyncComputed.1d5bfff0.js";import{a as m}from"./router.6e7fd32b.js";import{d as _,r as I,eN as B,I as f,b as g,c as C,w as a,u as e,f as t,ar as s,e as b,eG as v,by as P,cB as D,eD as E,ev as F,ex as T}from"./outputWidgets.0b665cc7.js";import"./index.608103f2.js";import{P as h}from"./project.f77c51ea.js";import{_ as N}from"./SaveButton.vue_vue_type_script_setup_true_lang.af906482.js";import{A as j}from"./Title.08b5828d.js";import{A as x}from"./Paragraph.f6e4bd5c.js";import{A as u}from"./Text.b24e4288.js";import{A as U,F as V}from"./Form.ac4ccba7.js";import"./popupNotifcation.84d6e93b.js";import"./record.9fd09cc1.js";import"./pubsub.16b0f787.js";import"./hasIn.8e8e9839.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[r]="04d1cd43-5bff-40ea-ae7a-f87e7e0aa04b",n._sentryDebugIdIdentifier="sentry-dbid-04d1cd43-5bff-40ea-ae7a-f87e7e0aa04b")}catch{}})();const H=_({__name:"SubdomainEditor",props:{project:{}},setup(n){const r=n,o=I(void 0),i=B.exports.debounce(async()=>{try{const{available:l}=await r.project.checkSubdomain();o.value=l?"available":"unavailable"}catch{o.value=void 0}},500);function d(){r.project.subdomain?(o.value="loading",i()):o.value="invalid"}const c=f(()=>{switch(o.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),y=f(()=>{switch(o.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),k=()=>{r.project.subdomain=h.formatSubdomain(r.project.subdomain),d()};function A(){r.project.resetChanges(),o.value=void 0}return(l,p)=>(g(),C(e(D),{direction:"vertical"},{default:a(()=>[t(e(j),{level:2},{default:a(()=>[s("Subdomain")]),_:1}),t(e(x),null,{default:a(()=>[s(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(e(m),null,{default:a(()=>[t(e(u),null,{default:a(()=>[s("Forms available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[b("span",null,v(l.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(m),null,{default:a(()=>[t(e(u),null,{default:a(()=>[s("Hooks available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[b("span",null,v(l.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(e(V),null,{default:a(()=>[t(e(U),{"validate-status":c.value,help:y.value,"has-feedback":""},{default:a(()=>[t(e(P),{value:l.project.subdomain,"onUpdate:value":p[0]||(p[0]=w=>l.project.subdomain=w),type:"text",loading:o.value==="loading",onBlur:k},{addonBefore:a(()=>[s("https://")]),addonAfter:a(()=>[s(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),t(N,{model:l.project,disabled:o.value!=="available",onError:A},null,8,["model","disabled"])]),_:1})]),_:1}))}}),R={key:0,class:"project-settings"},ee=_({__name:"ProjectSettings",setup(n){const o=E().params.projectId,{result:i}=S(()=>h.get(o));return(d,c)=>e(i)?(g(),F("div",R,[t(e(j),null,{default:a(()=>[s("Project Settings")]),_:1}),t(H,{project:e(i)},null,8,["project"])])):T("",!0)}});export{ee as default};
//# sourceMappingURL=ProjectSettings.fc8629da.js.map
