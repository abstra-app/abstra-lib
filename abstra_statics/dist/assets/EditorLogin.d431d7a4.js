import{N as de}from"./Navbar.f358afd4.js";import{a as P}from"./asyncComputed.8444b6d6.js";import{m as se}from"./url.ed3aee72.js";import{d as ue,f as g,e as x,ea as ce,o as r,Y as E,b as s,a as pe,u as a,c as d,w as o,by as q,aG as f,e9 as _,eO as i,df as fe,aB as F,cV as y,cW as m,aS as K,eb as M,S as c,cB as v,bL as C,eg as _e,bT as ge,cA as ve,a0 as ye}from"./index.b24b0be8.js";import{A as me}from"./apiKey.f4e6ca02.js";import{a as we}from"./gateway.5b2b2bc6.js";import{M as ze}from"./member.a1a19b02.js";import{O as Ie}from"./organization.62ac54bb.js";import{P as be}from"./project.51434c3d.js";import"./tables.b183d093.js";import{F as je}from"./folder.3ba4628c.js";import"./PhChats.vue.eef3eb6f.js";import"./PhSignOut.vue.a2f897a7.js";import"./router.0ab78250.js";import"./Badge.78b81bf9.js";import"./index.d8ea2ac2.js";import"./Avatar.3c461396.js";import"./index.819e467e.js";import"./index.d2960486.js";import"./BookOutlined.9bd991bf.js";import"./popupNotifcation.5870d19b.js";import"./record.45c57538.js";import"./string.9be7b1c9.js";(function(){try{var w=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p=new Error().stack;p&&(w._sentryDebugIds=w._sentryDebugIds||{},w._sentryDebugIds[p]="b2f4164f-ed88-48bb-9819-022b4fb84401",w._sentryDebugIdIdentifier="sentry-dbid-b2f4164f-ed88-48bb-9819-022b4fb84401")}catch{}})();const Ne={class:"container"},ke={class:"content"},S="NEW_ORGANIZATION_KEY",D="NEW_FOLDER_KEY",L="NEW_PROJECT_KEY",he=ue({__name:"EditorLogin",setup(w){const p=new je,O=new Ie,z=new be,Z=new ze,{result:R,loading:Q}=P(async()=>{const t=await O.list();return J(t.length>0?t[0].id:S),t}),{result:I,loading:b,refetch:V}=P(async()=>e.value.type==="loading-organizations"||e.value.type==="new-organization"?[]:z.list(e.value.organizationId)),{result:B,loading:T,refetch:H}=P(async()=>e.value.type==="loading-organizations"||e.value.type==="new-organization"?[]:p.list(e.value.organizationId)),U=g(()=>{var t,n;return(n=(t=R.value)==null?void 0:t.map(l=>({key:l.id,label:l.name})))!=null?n:[]}),W=g(()=>I.value?I.value.filter(t=>{switch(e.value.type){case"new-project":return t.folderId===e.value.folderId;case"selected-project":return t.folderId===e.value.folderId;case"loading-folder":return t.folderId===e.value.folderId;default:return!1}}).map(t=>({key:t.id,label:t.name})):[]),Y=g(()=>{var t,n;return(n=(t=B.value)==null?void 0:t.map(l=>({value:l.id,label:l.name})))!=null?n:[]}),X=g(()=>{switch(e.value.type){case"new-organization":return!e.value.organizationName;case"new-folder":return!e.value.folderName;case"new-project":return!e.value.projectName||!e.value.folderId;case"selected-project":return!1;case"loading-organization":case"loading-folder":return!0;default:throw new Error(`Invalid state ${JSON.stringify(e.value)}`)}}),j=async t=>await me.create({projectId:t,name:"default"}),e=x({type:"loading-organizations"}),ee=g(()=>e.value.type==="new-organization"||e.value.type==="loading-organizations"?S:e.value.organizationId),ae=g(()=>{if(e.value.type==="new-organization"||e.value.type==="new-folder"||e.value.type==="new-project"||e.value.type==="loading-organization"||e.value.type==="loading-folder"||e.value.type==="loading-organizations")return L;if(e.value.type==="selected-project")return e.value.projectId;throw new Error(`Invalid state ${JSON.stringify(e.value)}`)}),te=g(()=>e.value.type==="new-project"||e.value.type==="selected-project"?e.value.folderId:D);function le(t){return t.split("@")[1].split(".")[0]}async function J(t){var n,l;if(t===S)e.value={type:"new-organization",organizationName:le(we.getAuthor().claims.email),folderName:"My team folder",projectName:"My project"};else{e.value={type:"loading-organization",organizationId:String(t)},await Promise.all([V(),H()]);const u=(n=B.value)==null?void 0:n.find(A=>A.organizationId===String(t)),h=(l=I.value)==null?void 0:l.find(A=>A.folderId===(u==null?void 0:u.id));u?h?e.value={type:"selected-project",organizationId:String(t),folderId:u.id,projectId:h.id}:e.value={type:"new-project",organizationId:String(t),folderId:u.id,projectName:"My project"}:e.value={type:"new-folder",organizationId:String(t),folderName:"My team folder",projectName:"My project"}}}function ne(t){if(e.value.type==="new-organization"||e.value.type==="new-folder"||e.value.type==="loading-organization"||e.value.type==="loading-folder"||e.value.type==="loading-organizations")throw new Error(`Invalid state ${JSON.stringify(e.value)}`);t===L?e.value={type:"new-project",organizationId:e.value.organizationId,folderId:e.value.folderId,projectName:"New project"}:e.value={type:"selected-project",organizationId:e.value.organizationId,folderId:e.value.folderId,projectId:String(t)}}async function oe(t){var n;if(e.value.type==="new-organization"||e.value.type==="loading-organizations")throw new Error(`Invalid state ${JSON.stringify(e.value)}`);if(t===D)e.value={type:"new-folder",organizationId:e.value.organizationId,folderName:"New folder",projectName:"New project"};else{e.value={type:"loading-folder",organizationId:e.value.organizationId,folderId:String(t)},await V();const l=(n=I.value)==null?void 0:n.find(u=>u.folderId===String(t));l?e.value={type:"selected-project",organizationId:e.value.organizationId,folderId:String(t),projectId:l.id}:e.value={type:"new-project",organizationId:e.value.organizationId,folderId:String(t),projectName:"New project"}}}async function G(t){const n=await Z.list(t);return(await p.list(t)).length===0&&await p.create({name:"Default Folder",organizationId:t,memberIds:[...n.map(h=>h.id)]}),(await p.list(t))[0]}const N=x(!1);async function re(){if(!N.value){N.value=!0;try{if(e.value.type==="new-organization"){const t=await O.create({name:e.value.organizationName}),n=await G(t.id),l=await z.create({name:e.value.projectName,organizationId:t.id,folderId:n.id}),u=await j(l.id);u.value&&k(u.value)}else if(e.value.type==="new-folder"){const t=await p.create({name:e.value.folderName,organizationId:e.value.organizationId,memberIds:[]}),n=await z.create({name:e.value.projectName,organizationId:e.value.organizationId,folderId:t.id}),l=await j(n.id);l.value&&k(l.value)}else if(e.value.type==="new-project"){const t=await G(e.value.organizationId),n=await z.create({name:e.value.projectName,organizationId:e.value.organizationId,folderId:t.id}),l=await j(n.id);l.value&&k(l.value)}else if(e.value.type==="selected-project"){const t=await j(e.value.projectId);t.value&&k(t.value)}}finally{N.value=!1}}}const $=ce(),ie=x(null);async function k(t){if($.query.redirect){const n=$.query.redirect;if(!n.match(/http:\/\/localhost:\d+/))throw new Error("Invalid redirect");const l=decodeURIComponent(n);location.href=se(l,{"api-key":t})}else ie.value=t}return(t,n)=>(r(),E("div",Ne,[s(de),pe("div",ke,[a(Q)||!a(R)?(r(),d(a(q),{key:0})):(r(),d(a(ve),{key:1,layout:"vertical",class:"card"},{default:o(()=>[s(a(fe),{level:3,style:{padding:"0px",margin:"0px","margin-bottom":"30px"}},{default:o(()=>[f(_(a(i).translate("i18n_create_or_choose_project")),1)]),_:1}),s(a(v),{label:a(i).translate("i18n_get_api_key_organization")},{default:o(()=>[s(a(F),{style:{width:"100%"},placeholder:a(i).translate("i18n_get_api_key_choose_organization"),size:"large",value:ee.value,"onUpdate:value":J},{default:o(()=>[s(a(y),{label:a(i).translate("i18n_get_api_key_new_organization")},{default:o(()=>[(r(),d(a(m),{key:S},{default:o(()=>[f(_(a(i).translate("i18n_get_api_key_create_new_organization")),1)]),_:1}))]),_:1},8,["label"]),U.value.length>0?(r(),d(a(y),{key:0,label:a(i).translate("i18n_get_api_key_existing_organizations")},{default:o(()=>[(r(!0),E(K,null,M(U.value,l=>(r(),d(a(m),{key:l.key},{default:o(()=>[f(_(l.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):c("",!0)]),_:1},8,["placeholder","value"])]),_:1},8,["label"]),e.value.type=="new-organization"?(r(),d(a(v),{key:0,label:a(i).translate("i18n_get_api_key_organization_name")},{default:o(()=>[s(a(C),{value:e.value.organizationName,"onUpdate:value":n[0]||(n[0]=l=>e.value.organizationName=l),placeholder:a(i).translate("i18n_get_api_key_choose_organization_name"),size:"large"},null,8,["value","placeholder"])]),_:1},8,["label"])):c("",!0),e.value.type!=="new-organization"?(r(),d(a(v),{key:1,label:a(i).translate("i18n_get_api_key_folder")},{default:o(()=>[s(a(F),{disabled:a(T),value:te.value,loading:a(T),size:"large","onUpdate:value":oe},{default:o(()=>[s(a(y),{label:a(i).translate("i18n_get_api_key_new_folder")},{default:o(()=>[(r(),d(a(m),{key:D},{default:o(()=>[f(_(a(i).translate("i18n_get_api_key_create_new_folder")),1)]),_:1}))]),_:1},8,["label"]),Y.value.length>0?(r(),d(a(y),{key:0,label:a(i).translate("i18n_get_api_key_existing_folders")},{default:o(()=>[(r(!0),E(K,null,M(Y.value,l=>(r(),d(a(m),{key:l.value},{default:o(()=>[f(_(l.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):c("",!0)]),_:1},8,["disabled","value","loading"])]),_:1},8,["label"])):c("",!0),e.value.type==="new-organization"||e.value.type==="new-folder"?(r(),d(a(v),{key:2,label:a(i).translate("i18n_get_api_key_folder_name")},{default:o(()=>[s(a(C),{value:e.value.folderName,"onUpdate:value":n[1]||(n[1]=l=>e.value.folderName=l),placeholder:a(i).translate("i18n_get_api_key_choose_folder_name"),size:"large"},null,8,["value","placeholder"])]),_:1},8,["label"])):c("",!0),e.value.type!=="new-organization"&&e.value.type!=="new-folder"?(r(),d(a(v),{key:3,label:a(i).translate("i18n_get_api_key_project")},{default:o(()=>[s(a(F),{style:{width:"100%"},disabled:a(b),placeholder:a(i).translate("i18n_get_api_key_choose_project"),size:"large",value:ae.value,"onUpdate:value":ne},_e({default:o(()=>[a(b)?c("",!0):(r(),d(a(y),{key:0,label:a(i).translate("i18n_get_api_key_new_project")},{default:o(()=>[(r(),d(a(m),{key:L},{default:o(()=>[f(_(a(i).translate("i18n_get_api_key_create_new_project")),1)]),_:1}))]),_:1},8,["label"])),W.value.length>0&&!a(b)?(r(),d(a(y),{key:1,label:a(i).translate("i18n_get_api_key_existing_projects")},{default:o(()=>[(r(!0),E(K,null,M(W.value,l=>(r(),d(a(m),{key:l.key},{default:o(()=>[f(_(l.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):c("",!0)]),_:2},[a(b)?{name:"notFoundContent",fn:o(()=>[s(a(q),{size:"small"})]),key:"0"}:void 0]),1032,["disabled","placeholder","value"])]),_:1},8,["label"])):c("",!0),e.value.type==="new-organization"||e.value.type==="new-folder"||e.value.type==="new-project"?(r(),d(a(v),{key:4,label:"Project name"},{default:o(()=>[s(a(C),{value:e.value.projectName,"onUpdate:value":n[2]||(n[2]=l=>e.value.projectName=l),placeholder:a(i).translate("i18n_get_api_key_choose_project_name"),size:"large"},null,8,["value","placeholder"])]),_:1})):c("",!0),s(a(v),{style:{"margin-top":"40px"}},{default:o(()=>[s(a(ge),{type:"primary",disabled:X.value,loading:N.value,style:{width:"100%"},onClick:re},{default:o(()=>[f(_(a(i).translate("i18n_login_with_this_project")),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1}))])]))}});const Ze=ye(he,[["__scopeId","data-v-d0b4eb70"]]);export{Ze as default};
//# sourceMappingURL=EditorLogin.d431d7a4.js.map