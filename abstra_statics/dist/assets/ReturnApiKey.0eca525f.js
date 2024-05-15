import{N as Z}from"./Navbar.3ee33ca8.js";import{m as H}from"./url.25ef260e.js";import{d as G,J as v,r as E,u as a,b as s,c,w as n,bh as S,f as l,as as p,eH as _,f3 as i,af as C,cC as z,cD as b,ew as O,eF as R,aE as D,ey as j,bz as T,eL as Q,bG as $,eE as X,e as ee,cE as ae,x as te}from"./outputWidgets.456f91fe.js";import"./router.3f9a5280.js";import"./index.d03863d1.js";import{A as ne}from"./apiKey.3c81289e.js";import{P as F}from"./project.44c2a316.js";import{O as V}from"./organization.4c13bca1.js";import{a as B}from"./asyncComputed.40ccc1a0.js";import{A as oe}from"./Title.e2ac9093.js";import{A as w,F as re}from"./Form.5725f9a2.js";import{A as ie}from"./Paragraph.40860d19.js";import{A as le}from"./Text.45bbb15e.js";import{A as se}from"./index.aeba8546.js";import{M as ce}from"./Modal.7e5e37b6.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.628a1e7a.js";import"./index.7d06f3dc.js";import"./index.ade497e6.js";import"./Base.32dca6a0.js";import"./BookOutlined.7cb20358.js";import"./popupNotifcation.a3dda4d3.js";import"./record.f036d116.js";import"./pubsub.c5b25f3b.js";import"./hasIn.73fe7ed5.js";(function(){try{var g=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u=new Error().stack;u&&(g._sentryDebugIds=g._sentryDebugIds||{},g._sentryDebugIds[u]="cebbb1b2-6c37-43d2-b2ef-231ae4d042c0",g._sentryDebugIdIdentifier="sentry-dbid-cebbb1b2-6c37-43d2-b2ef-231ae4d042c0")}catch{}})();const N="NEW_ORGANIZATION_KEY",A="NEW_PROJECT_KEY",ue=G({__name:"GetApiKey",emits:["done"],setup(g,{emit:u}){const{result:d,loading:k}=B(()=>V.list()),{result:f,loading:y,refetch:h}=B(async()=>{const t=e.value;return t.type!=="selected-organization"?[]:F.list(t.organizationId)}),x=v(()=>{var t,r;return(r=(t=d.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?r:[]}),K=v(()=>{var t,r;return(r=(t=f.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?r:[]}),M=v(()=>e.value.type==="initial"?!0:e.value.type==="new-organization"?!e.value.organizationName||!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="new"?!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="initial"),U=async t=>await V.create(t.name),P=async(t,r)=>await F.create({organizationId:r,name:t.name}),I=async t=>await ne.create({projectId:t,name:"default"}),e=E({type:"initial"}),Y=v(()=>{if(e.value.type!=="initial")return e.value.type==="new-organization"?N:e.value.organizationId}),W=v(()=>e.value.type==="selected-organization"&&e.value.project.type==="new"?A:e.value.type==="selected-organization"&&e.value.project.type==="selected"?e.value.project.projectId:void 0);function J(t){t||(e.value={type:"initial"}),t===N?e.value={type:"new-organization",organizationName:"",project:{type:"new",projectName:""}}:(e.value={type:"selected-organization",organizationId:String(t),project:{type:"initial"}},h())}function L(t){e.value.type==="selected-organization"&&(t||(e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"initial"}}),t===A?e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"new",projectName:""}}:e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"selected",projectId:String(t)}})}const m=E(!1);async function q(){if(!m.value){m.value=!0;try{if(e.value.type==="initial")return;if(e.value.type==="new-organization"){const t=await U({name:e.value.organizationName}),r=await P({name:e.value.project.projectName},t.id),o=await I(r.id);o.value&&u("done",o.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="new"){const t=await P({name:e.value.project.projectName},e.value.organizationId),r=await I(t.id);r.value&&u("done",r.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="selected"){const t=await I(e.value.project.projectId);t.value&&u("done",t.value)}}finally{m.value=!1}}}return(t,r)=>a(k)||!a(d)?(s(),c(a(S),{key:0})):(s(),c(a(re),{key:1,layout:"vertical"},{default:n(()=>[l(a(oe),{level:3},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_choose_organization_and_project")),1)]),_:1}),l(a(w),{label:a(i).translate("i18n_get_api_key_organization")},{default:n(()=>[l(a(C),{style:{width:"100%"},placeholder:a(i).translate("i18n_get_api_key_choose_organization"),size:"large",value:Y.value,"onUpdate:value":J},{default:n(()=>[l(a(z),{label:a(i).translate("i18n_get_api_key_new_organization")},{default:n(()=>[(s(),c(a(b),{key:N},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_create_new_organization")),1)]),_:1}))]),_:1},8,["label"]),x.value.length>0?(s(),c(a(z),{key:0,label:a(i).translate("i18n_get_api_key_existing_organizations")},{default:n(()=>[(s(!0),O(D,null,R(x.value,o=>(s(),c(a(b),{key:o.key},{default:n(()=>[p(_(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):j("",!0)]),_:1},8,["placeholder","value"])]),_:1},8,["label"]),e.value.type=="new-organization"?(s(),c(a(w),{key:0,label:a(i).translate("i18n_get_api_key_organization_name")},{default:n(()=>[l(a(T),{value:e.value.organizationName,"onUpdate:value":r[0]||(r[0]=o=>e.value.organizationName=o),placeholder:a(i).translate("i18n_get_api_key_choose_organization_name"),size:"large"},null,8,["value","placeholder"])]),_:1},8,["label"])):(s(),c(a(w),{key:1,label:a(i).translate("i18n_get_api_key_project")},{default:n(()=>[l(a(C),{style:{width:"100%"},disabled:e.value.type!="selected-organization",placeholder:a(i).translate("i18n_get_api_key_choose_project"),size:"large",value:W.value,"onUpdate:value":L},Q({default:n(()=>[a(y)?j("",!0):(s(),c(a(z),{key:0,label:a(i).translate("i18n_get_api_key_new_project")},{default:n(()=>[(s(),c(a(b),{key:A},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_create_new_project")),1)]),_:1}))]),_:1},8,["label"])),K.value.length>0&&!a(y)?(s(),c(a(z),{key:1,label:a(i).translate("i18n_get_api_key_existing_projects")},{default:n(()=>[(s(!0),O(D,null,R(K.value,o=>(s(),c(a(b),{key:o.key},{default:n(()=>[p(_(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):j("",!0)]),_:2},[a(y)?{name:"notFoundContent",fn:n(()=>[l(a(S),{size:"small"})]),key:"0"}:void 0]),1032,["disabled","placeholder","value"])]),_:1},8,["label"])),(e.value.type=="new-organization"||e.value.type=="selected-organization")&&e.value.project.type=="new"?(s(),c(a(w),{key:2,label:"Project name"},{default:n(()=>[l(a(T),{value:e.value.project.projectName,"onUpdate:value":r[1]||(r[1]=o=>e.value.project.projectName=o),placeholder:a(i).translate("i18n_get_api_key_choose_project_name"),size:"large"},null,8,["value","placeholder"])]),_:1})):j("",!0),l(a($),{type:"primary",disabled:M.value,loading:m.value,onClick:q},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_generate_key_button")),1)]),_:1},8,["disabled","loading"])]),_:1}))}}),pe={class:"container"},_e={class:"content"},de=G({__name:"ReturnApiKey",setup(g){const u=X(),d=E(null);async function k(f){if(u.query.redirect){const y=u.query.redirect;if(!y.match(/http:\/\/localhost:\d+/))throw new Error("Invalid redirect");const h=decodeURIComponent(y);location.href=H(h,{"api-key":f})}else d.value=f}return(f,y)=>(s(),O("div",pe,[l(Z),ee("div",_e,[l(ue,{class:"passwordless",onDone:k}),l(a(ce),{open:!!d.value,title:"Your generated API Key"},{footer:n(()=>[]),default:n(()=>[l(a(ae),{direction:"vertical"},{default:n(()=>[l(a(ie),null,{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_api_key_info")),1)]),_:1}),l(a(le),{copyable:"",code:"",style:{"font-size":"20px"}},{default:n(()=>[p(_(d.value),1)]),_:1}),l(a(se),{type:"warning","show-icon":""},{message:n(()=>[p(_(a(i).translate("i18n_get_api_key_api_key_warning")),1)]),_:1})]),_:1})]),_:1},8,["open"])])]))}});const Ve=te(de,[["__scopeId","data-v-c8ca3a0b"]]);export{Ve as default};
//# sourceMappingURL=ReturnApiKey.0eca525f.js.map
