import{N as J}from"./Navbar.06f2e295.js";import{m as L}from"./url.66876857.js";import{d as F,H as v,r as O,u as a,b as s,c as u,w as n,bH as S,f as l,aV as p,f6 as _,fp as i,d9 as Q,aQ as C,cT as z,cU as j,eX as K,f4 as R,b3 as T,eZ as b,bU as D,f9 as X,b_ as $,f3 as ee,e as ae,cW as te,d7 as ne,d8 as oe,at as re}from"./outputWidgets.3f3d2696.js";import"./gateway.3fe338e2.js";import"./index.b123c950.js";import{A as ie}from"./apiKey.df27125f.js";import{P as U}from"./project.cd1c12d0.js";import{O as V}from"./organization.eb4d9e8a.js";import{a as B}from"./asyncComputed.35b55909.js";import{A as k,F as le}from"./Form.f244b960.js";import{A as se}from"./index.d1a46f77.js";import{M as ue}from"./Modal.1a6e3eab.js";import"./logo.084e5d7c.js";import"./PhChats.vue.859f6589.js";import"./PhSignOut.vue.79dc2414.js";import"./router.e0ea9aad.js";import"./index.de1971f4.js";import"./index.675c4b2b.js";import"./BookOutlined.e414dd1d.js";import"./popupNotifcation.d3f60023.js";import"./index.33e498ec.js";import"./record.1d843e2c.js";import"./pubsub.d28d7b1f.js";import"./string.87c5f088.js";import"./hasIn.065301c4.js";(function(){try{var f=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c=new Error().stack;c&&(f._sentryDebugIds=f._sentryDebugIds||{},f._sentryDebugIds[c]="9cb48817-a5ef-4144-802a-7f2410447fe4",f._sentryDebugIdIdentifier="sentry-dbid-9cb48817-a5ef-4144-802a-7f2410447fe4")}catch{}})();const N="NEW_ORGANIZATION_KEY",A="NEW_PROJECT_KEY",ce=F({__name:"GetApiKey",emits:["done"],setup(f,{emit:c}){const{result:d,loading:w}=B(()=>V.list()),{result:g,loading:y,refetch:h}=B(async()=>{const t=e.value;return t.type!=="selected-organization"?[]:U.list(t.organizationId)}),P=v(()=>{var t,r;return(r=(t=d.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?r:[]}),x=v(()=>{var t,r;return(r=(t=g.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?r:[]}),M=v(()=>e.value.type==="initial"?!0:e.value.type==="new-organization"?!e.value.organizationName||!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="new"?!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="initial"),W=async t=>await V.create(t.name),E=async(t,r)=>await U.create({organizationId:r,name:t.name}),I=async t=>await ie.create({projectId:t,name:"default"}),e=O({type:"initial"}),Y=v(()=>{if(e.value.type!=="initial")return e.value.type==="new-organization"?N:e.value.organizationId}),G=v(()=>e.value.type==="selected-organization"&&e.value.project.type==="new"?A:e.value.type==="selected-organization"&&e.value.project.type==="selected"?e.value.project.projectId:void 0);function Z(t){t||(e.value={type:"initial"}),t===N?e.value={type:"new-organization",organizationName:"",project:{type:"new",projectName:""}}:(e.value={type:"selected-organization",organizationId:String(t),project:{type:"initial"}},h())}function q(t){e.value.type==="selected-organization"&&(t||(e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"initial"}}),t===A?e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"new",projectName:""}}:e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"selected",projectId:String(t)}})}const m=O(!1);async function H(){if(!m.value){m.value=!0;try{if(e.value.type==="initial")return;if(e.value.type==="new-organization"){const t=await W({name:e.value.organizationName}),r=await E({name:e.value.project.projectName},t.id),o=await I(r.id);o.value&&c("done",o.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="new"){const t=await E({name:e.value.project.projectName},e.value.organizationId),r=await I(t.id);r.value&&c("done",r.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="selected"){const t=await I(e.value.project.projectId);t.value&&c("done",t.value)}}finally{m.value=!1}}}return(t,r)=>a(w)||!a(d)?(s(),u(a(S),{key:0})):(s(),u(a(le),{key:1,layout:"vertical"},{default:n(()=>[l(a(Q),{level:3},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_choose_organization_and_project")),1)]),_:1}),l(a(k),{label:a(i).translate("i18n_get_api_key_organization")},{default:n(()=>[l(a(C),{style:{width:"100%"},placeholder:a(i).translate("i18n_get_api_key_choose_organization"),size:"large",value:Y.value,"onUpdate:value":Z},{default:n(()=>[l(a(z),{label:a(i).translate("i18n_get_api_key_new_organization")},{default:n(()=>[(s(),u(a(j),{key:N},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_create_new_organization")),1)]),_:1}))]),_:1},8,["label"]),P.value.length>0?(s(),u(a(z),{key:0,label:a(i).translate("i18n_get_api_key_existing_organizations")},{default:n(()=>[(s(!0),K(T,null,R(P.value,o=>(s(),u(a(j),{key:o.key},{default:n(()=>[p(_(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):b("",!0)]),_:1},8,["placeholder","value"])]),_:1},8,["label"]),e.value.type=="new-organization"?(s(),u(a(k),{key:0,label:a(i).translate("i18n_get_api_key_organization_name")},{default:n(()=>[l(a(D),{value:e.value.organizationName,"onUpdate:value":r[0]||(r[0]=o=>e.value.organizationName=o),placeholder:a(i).translate("i18n_get_api_key_choose_organization_name"),size:"large"},null,8,["value","placeholder"])]),_:1},8,["label"])):(s(),u(a(k),{key:1,label:a(i).translate("i18n_get_api_key_project")},{default:n(()=>[l(a(C),{style:{width:"100%"},disabled:e.value.type!="selected-organization",placeholder:a(i).translate("i18n_get_api_key_choose_project"),size:"large",value:G.value,"onUpdate:value":q},X({default:n(()=>[a(y)?b("",!0):(s(),u(a(z),{key:0,label:a(i).translate("i18n_get_api_key_new_project")},{default:n(()=>[(s(),u(a(j),{key:A},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_create_new_project")),1)]),_:1}))]),_:1},8,["label"])),x.value.length>0&&!a(y)?(s(),u(a(z),{key:1,label:a(i).translate("i18n_get_api_key_existing_projects")},{default:n(()=>[(s(!0),K(T,null,R(x.value,o=>(s(),u(a(j),{key:o.key},{default:n(()=>[p(_(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):b("",!0)]),_:2},[a(y)?{name:"notFoundContent",fn:n(()=>[l(a(S),{size:"small"})]),key:"0"}:void 0]),1032,["disabled","placeholder","value"])]),_:1},8,["label"])),(e.value.type=="new-organization"||e.value.type=="selected-organization")&&e.value.project.type=="new"?(s(),u(a(k),{key:2,label:"Project name"},{default:n(()=>[l(a(D),{value:e.value.project.projectName,"onUpdate:value":r[1]||(r[1]=o=>e.value.project.projectName=o),placeholder:a(i).translate("i18n_get_api_key_choose_project_name"),size:"large"},null,8,["value","placeholder"])]),_:1})):b("",!0),l(a($),{type:"primary",disabled:M.value,loading:m.value,onClick:H},{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_generate_key_button")),1)]),_:1},8,["disabled","loading"])]),_:1}))}}),pe={class:"container"},_e={class:"content"},de=F({__name:"ReturnApiKey",setup(f){const c=ee(),d=O(null);async function w(g){if(c.query.redirect){const y=c.query.redirect;if(!y.match(/http:\/\/localhost:\d+/))throw new Error("Invalid redirect");const h=decodeURIComponent(y);location.href=L(h,{"api-key":g})}else d.value=g}return(g,y)=>(s(),K("div",pe,[l(J),ae("div",_e,[l(ce,{class:"passwordless",onDone:w}),l(a(ue),{open:!!d.value,title:"Your generated API Key"},{footer:n(()=>[]),default:n(()=>[l(a(te),{direction:"vertical"},{default:n(()=>[l(a(ne),null,{default:n(()=>[p(_(a(i).translate("i18n_get_api_key_api_key_info")),1)]),_:1}),l(a(oe),{copyable:"",code:"",style:{"font-size":"20px"}},{default:n(()=>[p(_(d.value),1)]),_:1}),l(a(se),{type:"warning","show-icon":""},{message:n(()=>[p(_(a(i).translate("i18n_get_api_key_api_key_warning")),1)]),_:1})]),_:1})]),_:1},8,["open"])])]))}});const Ve=re(de,[["__scopeId","data-v-c8ca3a0b"]]);export{Ve as default};
//# sourceMappingURL=ReturnApiKey.b4c4e0c1.js.map
