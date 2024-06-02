import{a as S}from"./asyncComputed.e188c84d.js";import"./gateway.e5c93921.js";import{d as _,r as I,D as C,y as m,b as g,c as P,w as a,u as e,f as t,am as s,cW as h,cU as B,cV as u,e as f,f4 as b,bx as D,cH as E,f1 as F,eV as V,eX as T}from"./outputWidgets.abde7be7.js";import"./index.2e366912.js";import{P as j}from"./project.0d7f508d.js";import{_ as U}from"./SaveButton.vue_vue_type_script_setup_true_lang.a245bdba.js";import{a as v}from"./router.aff593c1.js";import{A as x,F as H}from"./Form.8489fb6d.js";import"./popupNotifcation.51a8836c.js";import"./record.4adc9d27.js";import"./pubsub.7f579dee.js";import"./hasIn.b8f131ab.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[r]="ea94fb19-6515-4572-91ad-8caf4657b3e8",n._sentryDebugIdIdentifier="sentry-dbid-ea94fb19-6515-4572-91ad-8caf4657b3e8")}catch{}})();const N=_({__name:"SubdomainEditor",props:{project:{}},setup(n){const r=n,o=I(void 0),i=C.exports.debounce(async()=>{try{const{available:l}=await r.project.checkSubdomain();o.value=l?"available":"unavailable"}catch{o.value=void 0}},500);function d(){r.project.subdomain?(o.value="loading",i()):o.value="invalid"}const c=m(()=>{switch(o.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),y=m(()=>{switch(o.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),k=()=>{r.project.subdomain=j.formatSubdomain(r.project.subdomain),d()};function w(){r.project.resetChanges(),o.value=void 0}return(l,p)=>(g(),P(e(E),{direction:"vertical"},{default:a(()=>[t(e(h),{level:2},{default:a(()=>[s("Subdomain")]),_:1}),t(e(B),null,{default:a(()=>[s(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(e(v),null,{default:a(()=>[t(e(u),null,{default:a(()=>[s("Forms available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[f("span",null,b(l.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(v),null,{default:a(()=>[t(e(u),null,{default:a(()=>[s("Hooks available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[f("span",null,b(l.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(e(H),null,{default:a(()=>[t(e(x),{"validate-status":c.value,help:y.value,"has-feedback":""},{default:a(()=>[t(e(D),{value:l.project.subdomain,"onUpdate:value":p[0]||(p[0]=A=>l.project.subdomain=A),type:"text",loading:o.value==="loading",onBlur:k},{addonBefore:a(()=>[s("https://")]),addonAfter:a(()=>[s(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),t(U,{model:l.project,disabled:o.value!=="available",onError:w},null,8,["model","disabled"])]),_:1})]),_:1}))}}),R={key:0,class:"project-settings"},Y=_({__name:"ProjectSettings",setup(n){const o=F().params.projectId,{result:i}=S(()=>j.get(o));return(d,c)=>e(i)?(g(),V("div",R,[t(e(h),null,{default:a(()=>[s("Project Settings")]),_:1}),t(N,{project:e(i)},null,8,["project"])])):T("",!0)}});export{Y as default};
//# sourceMappingURL=ProjectSettings.5e162391.js.map
