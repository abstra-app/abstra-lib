import{N as Z}from"./Navbar.fd4cfd6b.js";import{m as Q}from"./url.3a6cd3b5.js";import{d as G,I as f,r as K,u as a,b as s,c as u,w as n,bg as S,f as l,ar as p,eG as _,f3 as i,ae as C,cz as z,cA as j,ev as O,eE as D,aD as R,ex as b,by as T,eK as $,bF as H,eD as X,e as ee,cB as ae,v as te}from"./outputWidgets.0112c29a.js";import"./router.baccdf57.js";import"./index.01d20c53.js";import{A as ne}from"./apiKey.046a1826.js";import{P as B}from"./project.1337f9c2.js";import{O as F}from"./organization.37da7702.js";import{a as V}from"./asyncComputed.7a4cd8c0.js";import{A as oe}from"./Title.06b9fc65.js";import{A as k,F as re}from"./Form.f084c7e0.js";import{A as ie}from"./Paragraph.a79b7e0d.js";import{A as le}from"./Text.7fd7d6e4.js";import{A as se}from"./index.dea2e84d.js";import{M as ue}from"./Modal.4672b2be.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.66e233e9.js";import"./index.47282251.js";import"./index.bbb31f91.js";import"./BookOutlined.cb11abba.js";import"./popupNotifcation.b5f4e167.js";import"./record.63beb4c2.js";import"./pubsub.bc9264fd.js";import"./hasIn.9ed92b42.js";(function(){try{var g=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(g._sentryDebugIds=g._sentryDebugIds||{},g._sentryDebugIds[c]="367dfadb-f80a-4811-a1c3-473bdd4e8eb3",g._sentryDebugIdIdentifier="sentry-dbid-367dfadb-f80a-4811-a1c3-473bdd4e8eb3")}catch{}})();const N="NEW_ORGANIZATION_KEY",A="NEW_PROJECT_KEY",ce=G({__name:"GetApiKey",emits:["done"],setup(g,{emit:c}){const{result:d,loading:w}=V(()=>F.list()),{result:v,loading:y,refetch:h}=V(async()=>{const t=e.value;return t.type!=="selected-organization"?[]:B.list(t.organizationId)}),x=f(()=>{var t,r;return(r=(t=d.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?r:[]}),E=f(()=>{var t,r;return(r=(t=v.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?r:[]}),M=f(()=>e.value.type==="initial"?!0:e.value.type==="new-organization"?!e.value.organizationName||!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="new"?!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="initial"),U=async t=>await F.create(t.name),P=async(t,r)=>await B.create({organizationId:r,name:t.name}),I=async t=>await ne.create({projectId:t,name:"default"}),e=K({type:"initial"}),Y=f(()=>{if(e.value.type!=="initial")return e.value.type==="new-organization"?N:e.value.organizationId}),W=f(()=>e.value.type==="selected-organization"&&e.value.project.type==="new"?A:e.value.type==="selected-organization"&&e.value.project.type==="selected"?e.value.project.projectId:void 0);function q(t){t||(e.value={type:"initial"}),t===N?e.value={type:"new-organization",organizationName:"",project:{type:"new",projectName:""}}:(e.value={type:"selected-organization",organizationId:String(t),project:{type:"initial"}},h())}function J(t){e.value.type==="selected-organization"&&(t||(e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"initial"}}),t===A?e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"new",projectName:""}}:e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"selected",projectId:String(t)}})}const m=K(!1);async function L(){if(!m.value){m.value=!0;try{if(e.value.type==="initial")return;if(e.value.type==="new-organization"){const t=await U({name:e.value.organizationName}),r=await P({name:e.value.project.projectName},t.id),o=await I(r.id);o.value&&c("done",o.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="new"){const t=await P({name:e.value.project.projectName},e.value.organizationId),r=await I(t.id);r.value&&c("done",r.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="selected"){const t=await I(e.value.project.projectId);t.value&&c("done",t.value)}}finally{m.value=!1}}}return(t,r)=>a(w)||!a(d)?(s(),u(a(S),{key:0})):(s(),u(a(re),{key:1,layout:"vertical"},{default:n(()=>[l(a(oe),{level:3},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_choose_organization_and_project")),1)]),_:1}),l(a(k),{label:a(i).translate("i18n_get_api_key_organization")},{default:n(()=>[l(a(C),{style:{width:"100%"},placeholder:a(i).translate("i18n_get_api_key_choose_organization"),size:"large",value:Y.value,"onUpdate:value":q},{default:n(()=>[l(a(z),{label:a(i).translate("i18n_get_api_key_new_organization")},{default:n(()=>[(s(),u(a(j),{key:N},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_create_new_organization")),1)]),_:1}))]),_:1},8,["label"]),x.value.length>0?(s(),u(a(z),{key:0,label:a(i).translate("i18n_get_api_key_existing_organizations")},{default:n(()=>[(s(!0),O(R,null,D(x.value,o=>(s(),u(a(j),{key:o.key},{default:n(()=>[p(_(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):b("",!0)]),_:1},8,["placeholder","value"])]),_:1},8,["label"]),e.value.type=="new-organization"?(s(),u(a(k),{key:0,label:a(i).translate("i18n_get_api_key_organization_name")},{default:n(()=>[l(a(T),{value:e.value.organizationName,"onUpdate:value":r[0]||(r[0]=o=>e.value.organizationName=o),placeholder:a(i).translate("i18n_get_api_key_choose_organization_name"),size:"large"},null,8,["value","placeholder"])]),_:1},8,["label"])):(s(),u(a(k),{key:1,label:a(i).translate("i18n_get_api_key_project")},{default:n(()=>[l(a(C),{style:{width:"100%"},disabled:e.value.type!="selected-organization",placeholder:a(i).translate("i18n_get_api_key_choose_project"),size:"large",value:W.value,"onUpdate:value":J},$({default:n(()=>[a(y)?b("",!0):(s(),u(a(z),{key:0,label:a(i).translate("i18n_get_api_key_new_project")},{default:n(()=>[(s(),u(a(j),{key:A},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_create_new_project")),1)]),_:1}))]),_:1},8,["label"])),E.value.length>0&&!a(y)?(s(),u(a(z),{key:1,label:a(i).translate("i18n_get_api_key_existing_projects")},{default:n(()=>[(s(!0),O(R,null,D(E.value,o=>(s(),u(a(j),{key:o.key},{default:n(()=>[p(_(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):b("",!0)]),_:2},[a(y)?{name:"notFoundContent",fn:n(()=>[l(a(S),{size:"small"})]),key:"0"}:void 0]),1032,["disabled","placeholder","value"])]),_:1},8,["label"])),(e.value.type=="new-organization"||e.value.type=="selected-organization")&&e.value.project.type=="new"?(s(),u(a(k),{key:2,label:"Project name"},{default:n(()=>[l(a(T),{value:e.value.project.projectName,"onUpdate:value":r[1]||(r[1]=o=>e.value.project.projectName=o),placeholder:a(i).translate("i18n_get_api_key_choose_project_name"),size:"large"},null,8,["value","placeholder"])]),_:1})):b("",!0),l(a(H),{type:"primary",disabled:M.value,loading:m.value,onClick:L},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_generate_key_button")),1)]),_:1},8,["disabled","loading"])]),_:1}))}}),pe={class:"container"},_e={class:"content"},de=G({__name:"ReturnApiKey",setup(g){const c=X(),d=K(null);async function w(v){if(c.query.redirect){const y=c.query.redirect;if(!y.match(/http:\/\/localhost:\d+/))throw new Error("Invalid redirect");const h=decodeURIComponent(y);location.href=Q(h,{"api-key":v})}else d.value=v}return(v,y)=>(s(),O("div",pe,[l(Z),ee("div",_e,[l(ce,{class:"passwordless",onDone:w}),l(a(ue),{open:!!d.value,title:"Your generated API Key"},{footer:n(()=>[]),default:n(()=>[l(a(ae),{direction:"vertical"},{default:n(()=>[l(a(ie),null,{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_api_key_info")),1)]),_:1}),l(a(le),{copyable:"",code:"",style:{"font-size":"20px"}},{default:n(()=>[p(_(d.value),1)]),_:1}),l(a(se),{type:"warning","show-icon":""},{message:n(()=>[p(_(a(i).translate("i18n_get_api_key_api_key_warning")),1)]),_:1})]),_:1})]),_:1},8,["open"])])]))}});const Be=te(de,[["__scopeId","data-v-c8ca3a0b"]]);export{Be as default};
//# sourceMappingURL=ReturnApiKey.45f7ba09.js.map
