import{N as Z}from"./Navbar.9133f608.js";import{m as Q}from"./url.873dab98.js";import{d as G,I as f,r as K,u as a,b as s,c,w as n,bg as S,f as l,ar as p,eG as d,f3 as i,ae as C,cz as z,cA as j,ev as O,eE as D,aD as R,ex as b,by as T,eK as $,bF as H,eD as X,e as ee,cB as ae,v as te}from"./outputWidgets.65744ed0.js";import"./router.2b802b19.js";import"./index.ce1da4b1.js";import{A as ne}from"./apiKey.50e334ce.js";import{P as B}from"./project.1fc06158.js";import{O as F}from"./organization.2f154c0c.js";import{a as V}from"./asyncComputed.150ba6d4.js";import{A as oe}from"./Title.9a138151.js";import{A as k,F as re}from"./Form.fec6ea0c.js";import{A as ie}from"./Paragraph.5e52f285.js";import{A as le}from"./Text.9e44794c.js";import{A as se}from"./index.df838a51.js";import{M as ce}from"./Modal.b5c448c3.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.544d02cb.js";import"./index.a0a8111e.js";import"./index.c01f19dd.js";import"./BookOutlined.0ab01bee.js";import"./popupNotifcation.572a98ed.js";import"./record.172839ee.js";import"./pubsub.4ac834a7.js";import"./hasIn.5464a049.js";(function(){try{var g=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u=new Error().stack;u&&(g._sentryDebugIds=g._sentryDebugIds||{},g._sentryDebugIds[u]="71a308c2-5fb9-43d7-97dc-bd6ced6dedfa",g._sentryDebugIdIdentifier="sentry-dbid-71a308c2-5fb9-43d7-97dc-bd6ced6dedfa")}catch{}})();const N="NEW_ORGANIZATION_KEY",A="NEW_PROJECT_KEY",ue=G({__name:"GetApiKey",emits:["done"],setup(g,{emit:u}){const{result:_,loading:w}=V(()=>F.list()),{result:v,loading:y,refetch:h}=V(async()=>{const t=e.value;return t.type!=="selected-organization"?[]:B.list(t.organizationId)}),x=f(()=>{var t,r;return(r=(t=_.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?r:[]}),E=f(()=>{var t,r;return(r=(t=v.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?r:[]}),M=f(()=>e.value.type==="initial"?!0:e.value.type==="new-organization"?!e.value.organizationName||!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="new"?!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="initial"),U=async t=>await F.create(t.name),P=async(t,r)=>await B.create({organizationId:r,name:t.name}),I=async t=>await ne.create({projectId:t,name:"default"}),e=K({type:"initial"}),Y=f(()=>{if(e.value.type!=="initial")return e.value.type==="new-organization"?N:e.value.organizationId}),W=f(()=>e.value.type==="selected-organization"&&e.value.project.type==="new"?A:e.value.type==="selected-organization"&&e.value.project.type==="selected"?e.value.project.projectId:void 0);function q(t){t||(e.value={type:"initial"}),t===N?e.value={type:"new-organization",organizationName:"",project:{type:"new",projectName:""}}:(e.value={type:"selected-organization",organizationId:String(t),project:{type:"initial"}},h())}function J(t){e.value.type==="selected-organization"&&(t||(e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"initial"}}),t===A?e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"new",projectName:""}}:e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"selected",projectId:String(t)}})}const m=K(!1);async function L(){if(!m.value){m.value=!0;try{if(e.value.type==="initial")return;if(e.value.type==="new-organization"){const t=await U({name:e.value.organizationName}),r=await P({name:e.value.project.projectName},t.id),o=await I(r.id);o.value&&u("done",o.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="new"){const t=await P({name:e.value.project.projectName},e.value.organizationId),r=await I(t.id);r.value&&u("done",r.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="selected"){const t=await I(e.value.project.projectId);t.value&&u("done",t.value)}}finally{m.value=!1}}}return(t,r)=>a(w)||!a(_)?(s(),c(a(S),{key:0})):(s(),c(a(re),{key:1,layout:"vertical"},{default:n(()=>[l(a(oe),{level:3},{default:n(()=>[p(d(a(i).translate("i18n_get_api_key_choose_organization_and_project")),1)]),_:1}),l(a(k),{label:a(i).translate("i18n_get_api_key_organization")},{default:n(()=>[l(a(C),{style:{width:"100%"},placeholder:a(i).translate("i18n_get_api_key_choose_organization"),size:"large",value:Y.value,"onUpdate:value":q},{default:n(()=>[l(a(z),{label:a(i).translate("i18n_get_api_key_new_organization")},{default:n(()=>[(s(),c(a(j),{key:N},{default:n(()=>[p(d(a(i).translate("i18n_get_api_key_create_new_organization")),1)]),_:1}))]),_:1},8,["label"]),x.value.length>0?(s(),c(a(z),{key:0,label:a(i).translate("i18n_get_api_key_existing_organizations")},{default:n(()=>[(s(!0),O(R,null,D(x.value,o=>(s(),c(a(j),{key:o.key},{default:n(()=>[p(d(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):b("",!0)]),_:1},8,["placeholder","value"])]),_:1},8,["label"]),e.value.type=="new-organization"?(s(),c(a(k),{key:0,label:a(i).translate("i18n_get_api_key_organization_name")},{default:n(()=>[l(a(T),{value:e.value.organizationName,"onUpdate:value":r[0]||(r[0]=o=>e.value.organizationName=o),placeholder:a(i).translate("i18n_get_api_key_choose_organization_name"),size:"large"},null,8,["value","placeholder"])]),_:1},8,["label"])):(s(),c(a(k),{key:1,label:a(i).translate("i18n_get_api_key_project")},{default:n(()=>[l(a(C),{style:{width:"100%"},disabled:e.value.type!="selected-organization",placeholder:a(i).translate("i18n_get_api_key_choose_project"),size:"large",value:W.value,"onUpdate:value":J},$({default:n(()=>[a(y)?b("",!0):(s(),c(a(z),{key:0,label:a(i).translate("i18n_get_api_key_new_project")},{default:n(()=>[(s(),c(a(j),{key:A},{default:n(()=>[p(d(a(i).translate("i18n_get_api_key_create_new_project")),1)]),_:1}))]),_:1},8,["label"])),E.value.length>0&&!a(y)?(s(),c(a(z),{key:1,label:a(i).translate("i18n_get_api_key_existing_projects")},{default:n(()=>[(s(!0),O(R,null,D(E.value,o=>(s(),c(a(j),{key:o.key},{default:n(()=>[p(d(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):b("",!0)]),_:2},[a(y)?{name:"notFoundContent",fn:n(()=>[l(a(S),{size:"small"})]),key:"0"}:void 0]),1032,["disabled","placeholder","value"])]),_:1},8,["label"])),(e.value.type=="new-organization"||e.value.type=="selected-organization")&&e.value.project.type=="new"?(s(),c(a(k),{key:2,label:"Project name"},{default:n(()=>[l(a(T),{value:e.value.project.projectName,"onUpdate:value":r[1]||(r[1]=o=>e.value.project.projectName=o),placeholder:a(i).translate("i18n_get_api_key_choose_project_name"),size:"large"},null,8,["value","placeholder"])]),_:1})):b("",!0),l(a(H),{type:"primary",disabled:M.value,loading:m.value,onClick:L},{default:n(()=>[p(d(a(i).translate("i18n_get_api_key_generate_key_button")),1)]),_:1},8,["disabled","loading"])]),_:1}))}}),pe={class:"container"},de={class:"content"},_e=G({__name:"ReturnApiKey",setup(g){const u=X(),_=K(null);async function w(v){if(u.query.redirect){const y=u.query.redirect;if(!y.match(/http:\/\/localhost:\d+/))throw new Error("Invalid redirect");const h=decodeURIComponent(y);location.href=Q(h,{"api-key":v})}else _.value=v}return(v,y)=>(s(),O("div",pe,[l(Z),ee("div",de,[l(ue,{class:"passwordless",onDone:w}),l(a(ce),{open:!!_.value,title:"Your generated API Key"},{footer:n(()=>[]),default:n(()=>[l(a(ae),{direction:"vertical"},{default:n(()=>[l(a(ie),null,{default:n(()=>[p(d(a(i).translate("i18n_get_api_key_api_key_info")),1)]),_:1}),l(a(le),{copyable:"",code:"",style:{"font-size":"20px"}},{default:n(()=>[p(d(_.value),1)]),_:1}),l(a(se),{type:"warning","show-icon":""},{message:n(()=>[p(d(a(i).translate("i18n_get_api_key_api_key_warning")),1)]),_:1})]),_:1})]),_:1},8,["open"])])]))}});const Be=te(_e,[["__scopeId","data-v-c8ca3a0b"]]);export{Be as default};
//# sourceMappingURL=ReturnApiKey.a923570e.js.map
