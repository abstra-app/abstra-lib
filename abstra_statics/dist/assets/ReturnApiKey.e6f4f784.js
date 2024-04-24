import{N as Z}from"./Navbar.df1a9db5.js";import{m as H}from"./url.f3cfb285.js";import{d as G,J as v,r as E,u as a,b as s,c as u,w as n,bh as S,f as l,as as p,eH as _,f3 as i,af as C,cA as z,cB as j,ew as O,eF as R,aE as T,ey as b,bz as D,eL as Q,bG as $,eE as X,e as ee,cC as ae,x as te}from"./outputWidgets.7660cc17.js";import"./router.1803b2da.js";import"./index.ac81f499.js";import{A as ne}from"./apiKey.6858416b.js";import{P as B}from"./project.48c86c94.js";import{O as F}from"./organization.9e6183be.js";import{a as V}from"./asyncComputed.bc846f8e.js";import{A as oe}from"./Title.790040cf.js";import{A as w,F as re}from"./Form.baa7f19a.js";import{A as ie}from"./Paragraph.82ed3a6b.js";import{A as le}from"./Text.dea16e15.js";import{A as se}from"./index.bf16ad34.js";import{M as ue}from"./Modal.c7acf323.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.928d66f0.js";import"./index.6c06b92f.js";import"./index.647b4fea.js";import"./Base.a9efca67.js";import"./BookOutlined.ee78b7ad.js";import"./popupNotifcation.7434ba1b.js";import"./record.5dbbae90.js";import"./pubsub.fdbc5b64.js";import"./hasIn.77da09a2.js";(function(){try{var g=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(g._sentryDebugIds=g._sentryDebugIds||{},g._sentryDebugIds[c]="a3c23ba9-94d5-4ef0-a82b-0457449a66e5",g._sentryDebugIdIdentifier="sentry-dbid-a3c23ba9-94d5-4ef0-a82b-0457449a66e5")}catch{}})();const N="NEW_ORGANIZATION_KEY",A="NEW_PROJECT_KEY",ce=G({__name:"GetApiKey",emits:["done"],setup(g,{emit:c}){const{result:d,loading:k}=V(()=>F.list()),{result:f,loading:y,refetch:h}=V(async()=>{const t=e.value;return t.type!=="selected-organization"?[]:B.list(t.organizationId)}),x=v(()=>{var t,r;return(r=(t=d.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?r:[]}),K=v(()=>{var t,r;return(r=(t=f.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?r:[]}),M=v(()=>e.value.type==="initial"?!0:e.value.type==="new-organization"?!e.value.organizationName||!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="new"?!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="initial"),U=async t=>await F.create(t.name),P=async(t,r)=>await B.create({organizationId:r,name:t.name}),I=async t=>await ne.create({projectId:t,name:"default"}),e=E({type:"initial"}),Y=v(()=>{if(e.value.type!=="initial")return e.value.type==="new-organization"?N:e.value.organizationId}),W=v(()=>e.value.type==="selected-organization"&&e.value.project.type==="new"?A:e.value.type==="selected-organization"&&e.value.project.type==="selected"?e.value.project.projectId:void 0);function J(t){t||(e.value={type:"initial"}),t===N?e.value={type:"new-organization",organizationName:"",project:{type:"new",projectName:""}}:(e.value={type:"selected-organization",organizationId:String(t),project:{type:"initial"}},h())}function L(t){e.value.type==="selected-organization"&&(t||(e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"initial"}}),t===A?e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"new",projectName:""}}:e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"selected",projectId:String(t)}})}const m=E(!1);async function q(){if(!m.value){m.value=!0;try{if(e.value.type==="initial")return;if(e.value.type==="new-organization"){const t=await U({name:e.value.organizationName}),r=await P({name:e.value.project.projectName},t.id),o=await I(r.id);o.value&&c("done",o.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="new"){const t=await P({name:e.value.project.projectName},e.value.organizationId),r=await I(t.id);r.value&&c("done",r.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="selected"){const t=await I(e.value.project.projectId);t.value&&c("done",t.value)}}finally{m.value=!1}}}return(t,r)=>a(k)||!a(d)?(s(),u(a(S),{key:0})):(s(),u(a(re),{key:1,layout:"vertical"},{default:n(()=>[l(a(oe),{level:3},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_choose_organization_and_project")),1)]),_:1}),l(a(w),{label:a(i).translate("i18n_get_api_key_organization")},{default:n(()=>[l(a(C),{style:{width:"100%"},placeholder:a(i).translate("i18n_get_api_key_choose_organization"),size:"large",value:Y.value,"onUpdate:value":J},{default:n(()=>[l(a(z),{label:a(i).translate("i18n_get_api_key_new_organization")},{default:n(()=>[(s(),u(a(j),{key:N},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_create_new_organization")),1)]),_:1}))]),_:1},8,["label"]),x.value.length>0?(s(),u(a(z),{key:0,label:a(i).translate("i18n_get_api_key_existing_organizations")},{default:n(()=>[(s(!0),O(T,null,R(x.value,o=>(s(),u(a(j),{key:o.key},{default:n(()=>[p(_(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):b("",!0)]),_:1},8,["placeholder","value"])]),_:1},8,["label"]),e.value.type=="new-organization"?(s(),u(a(w),{key:0,label:a(i).translate("i18n_get_api_key_organization_name")},{default:n(()=>[l(a(D),{value:e.value.organizationName,"onUpdate:value":r[0]||(r[0]=o=>e.value.organizationName=o),placeholder:a(i).translate("i18n_get_api_key_choose_organization_name"),size:"large"},null,8,["value","placeholder"])]),_:1},8,["label"])):(s(),u(a(w),{key:1,label:a(i).translate("i18n_get_api_key_project")},{default:n(()=>[l(a(C),{style:{width:"100%"},disabled:e.value.type!="selected-organization",placeholder:a(i).translate("i18n_get_api_key_choose_project"),size:"large",value:W.value,"onUpdate:value":L},Q({default:n(()=>[a(y)?b("",!0):(s(),u(a(z),{key:0,label:a(i).translate("i18n_get_api_key_new_project")},{default:n(()=>[(s(),u(a(j),{key:A},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_create_new_project")),1)]),_:1}))]),_:1},8,["label"])),K.value.length>0&&!a(y)?(s(),u(a(z),{key:1,label:a(i).translate("i18n_get_api_key_existing_projects")},{default:n(()=>[(s(!0),O(T,null,R(K.value,o=>(s(),u(a(j),{key:o.key},{default:n(()=>[p(_(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):b("",!0)]),_:2},[a(y)?{name:"notFoundContent",fn:n(()=>[l(a(S),{size:"small"})]),key:"0"}:void 0]),1032,["disabled","placeholder","value"])]),_:1},8,["label"])),(e.value.type=="new-organization"||e.value.type=="selected-organization")&&e.value.project.type=="new"?(s(),u(a(w),{key:2,label:"Project name"},{default:n(()=>[l(a(D),{value:e.value.project.projectName,"onUpdate:value":r[1]||(r[1]=o=>e.value.project.projectName=o),placeholder:a(i).translate("i18n_get_api_key_choose_project_name"),size:"large"},null,8,["value","placeholder"])]),_:1})):b("",!0),l(a($),{type:"primary",disabled:M.value,loading:m.value,onClick:q},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_generate_key_button")),1)]),_:1},8,["disabled","loading"])]),_:1}))}}),pe={class:"container"},_e={class:"content"},de=G({__name:"ReturnApiKey",setup(g){const c=X(),d=E(null);async function k(f){if(c.query.redirect){const y=c.query.redirect;if(!y.match(/http:\/\/localhost:\d+/))throw new Error("Invalid redirect");const h=decodeURIComponent(y);location.href=H(h,{"api-key":f})}else d.value=f}return(f,y)=>(s(),O("div",pe,[l(Z),ee("div",_e,[l(ce,{class:"passwordless",onDone:k}),l(a(ue),{open:!!d.value,title:"Your generated API Key"},{footer:n(()=>[]),default:n(()=>[l(a(ae),{direction:"vertical"},{default:n(()=>[l(a(ie),null,{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_api_key_info")),1)]),_:1}),l(a(le),{copyable:"",code:"",style:{"font-size":"20px"}},{default:n(()=>[p(_(d.value),1)]),_:1}),l(a(se),{type:"warning","show-icon":""},{message:n(()=>[p(_(a(i).translate("i18n_get_api_key_api_key_warning")),1)]),_:1})]),_:1})]),_:1},8,["open"])])]))}});const Fe=te(de,[["__scopeId","data-v-c8ca3a0b"]]);export{Fe as default};
//# sourceMappingURL=ReturnApiKey.e6f4f784.js.map
