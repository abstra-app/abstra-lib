import{a as E}from"./asyncComputed.cfb98789.js";import{P as D}from"./project.25c0ecc3.js";import"./router.3986149f.js";import{d as k,r as y,b as _,c as S,w as a,aI as r,ex as T,u as e,c0 as P,cC as F,eF as H,H as w,f as t,e as m,eB as f,bV as U,et as I,ev as B,ez as V}from"./outputWidgets.7bdcec0a.js";import"./columns.6b51fbf2.js";import{c as j,A as N}from"./Title.9c0d0c5f.js";import{A as C,a as u}from"./Text.94a8ea41.js";import{A as h}from"./index.a9a6d5a2.js";import{F as $}from"./Form.f84b91b7.js";import{A as R}from"./index.23129d61.js";import"./gateway.f622b899.js";import"./activeRecord.84d52553.js";import"./pubsub.c455bec9.js";import"./index.15e46fc6.js";import"./index.f4ac7424.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[s]="dcd97e0d-d9b8-496d-9a3f-ec5807f36cc0",d._sentryDebugIdIdentifier="sentry-dbid-dcd97e0d-d9b8-496d-9a3f-ec5807f36cc0")}catch{}})();const z=k({__name:"SaveButton",props:{model:{},disabled:{type:Boolean}},emits:["error"],setup(d,{emit:s}){const l=d,i=y(!1),v=y(null);async function c(){i.value=!0;try{await l.model.save()}catch(o){o instanceof Error&&(s("error",o),F.error({message:"Error",description:o.message}),v.value=o)}finally{i.value=!1}}return addEventListener("keydown",o=>{(o.metaKey||o.ctrlKey)&&o.key==="s"&&(o.preventDefault(),c())}),addEventListener("beforeunload",o=>{l.model.hasChanges()&&(o.preventDefault(),o.returnValue="")}),(o,b)=>{var g,n,p;return _(),S(e(P),{class:T(["save-button",{changes:(g=o.model)==null?void 0:g.hasChanges()}]),loading:i.value,disabled:(p=o.disabled)!=null?p:!((n=o.model)!=null&&n.hasChanges()),onClick:b[0]||(b[0]=A=>c())},{default:a(()=>[r(" Save ")]),_:1},8,["class","loading","disabled"])}}}),K={key:0},L=k({__name:"SubdomainEditor",props:{project:{}},setup(d){const s=d,l=y(void 0),i=H.exports.debounce(async()=>{try{const{available:n}=await s.project.checkSubdomain();l.value=n?"available":"unavailable"}catch{l.value=void 0}},500);function v(){s.project.subdomain?(l.value="loading",i()):l.value="invalid"}const c=w(()=>{switch(l.value){case"invalid":return"error";case"loading":return"validating";case"available":return"success";case"unavailable":return"error";default:return}}),o=w(()=>{switch(l.value){case"loading":return"Checking availability...";case"available":return"Available";case"unavailable":return"Unavailable";case"invalid":return"Invalid subdomain";default:return}}),b=()=>{s.project.subdomain=D.formatSubdomain(s.project.subdomain),v()};function g(){s.project.resetChanges(),l.value=void 0}return(n,p)=>(_(),S(e(R),{direction:"vertical"},{default:a(()=>[t(e(j),{level:2},{default:a(()=>[r("Subdomain")]),_:1}),t(e(C),null,{default:a(()=>[r(" Every project in Abstra Cloud comes with a default subdomain, which will appear on all shared project links. ")]),_:1}),t(e(h),null,{default:a(()=>[t(e(u),null,{default:a(()=>[r("Forms and Dashes available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[m("span",null,f(n.project.getUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(h),null,{default:a(()=>[t(e(u),null,{default:a(()=>[r("Hooks available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[m("span",null,f(n.project.getUrl("_hooks/[PATH]")),1)]),_:1})]),_:1}),t(e($),null,{default:a(()=>[t(e(N),{"validate-status":c.value,help:o.value,"has-feedback":""},{default:a(()=>[t(e(U),{value:n.project.subdomain,"onUpdate:value":p[0]||(p[0]=A=>n.project.subdomain=A),type:"text",loading:l.value==="loading",onBlur:b},{addonBefore:a(()=>[r("https://")]),addonAfter:a(()=>[r(".abstra.app")]),_:1},8,["value","loading"])]),_:1},8,["validate-status","help"]),t(z,{model:n.project,disabled:l.value!=="available",onError:g},null,8,["model","disabled"])]),_:1}),n.project.customDomain?(_(),I("div",K,[t(e(j),{level:2},{default:a(()=>[r("Custom Domain")]),_:1}),t(e(C),null,{default:a(()=>[r(" Your project also has a custom domain: "),t(e(u),{code:""},{default:a(()=>[m("span",null,f(n.project.customDomain),1)]),_:1})]),_:1}),t(e(h),null,{default:a(()=>[t(e(u),null,{default:a(()=>[r("Forms and Dashes available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[m("span",null,f(n.project.getCustomDomainUrl("[PATH]")),1)]),_:1})]),_:1}),t(e(h),null,{default:a(()=>[t(e(u),null,{default:a(()=>[r("Hooks available at:")]),_:1}),t(e(u),{code:""},{default:a(()=>[m("span",null,f(n.project.getCustomDomainUrl("_hooks/[PATH]")),1)]),_:1})]),_:1})])):B("",!0)]),_:1}))}}),q={key:0,class:"project-settings"},ne=k({__name:"ProjectSettings",setup(d){const l=V().params.projectId,{result:i}=E(()=>D.get(l));return(v,c)=>e(i)?(_(),I("div",q,[t(e(j),null,{default:a(()=>[r("Project Settings")]),_:1}),t(L,{project:e(i)},null,8,["project"])])):B("",!0)}});export{ne as default};
//# sourceMappingURL=ProjectSettings.85ace68c.js.map
