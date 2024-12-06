import{N as te}from"./Navbar.0f33435e.js";import{a as h}from"./asyncComputed.665b48a1.js";import{m as ae}from"./url.a6d37e80.js";import{d as ne,f as c,e as N,ea as oe,o as r,Y as A,b as u,a as le,u as t,c as s,w as l,by as F,aG as p,e9 as d,eV as i,dd as re,aB as E,cT as m,cU as z,aS as T,eb as V,S as y,cz as _,bL as L,eg as ie,bT as se,cy as ue,a0 as ce}from"./index.a2b3ce50.js";import{A as pe}from"./apiKey.3e55b2fd.js";import"./gateway.72e5ec71.js";import{O as de}from"./organization.6d2ba4d9.js";import{P as _e}from"./project.a09faedf.js";import"./tables.8d988ffa.js";import{F as ve}from"./folder.ebb89a30.js";import"./PhChats.vue.cad730e1.js";import"./PhSignOut.vue.d4f1ba7b.js";import"./router.d7f56f1d.js";import"./index.79b75c2a.js";import"./Avatar.a7221dea.js";import"./index.b0a7de0d.js";import"./index.2572380b.js";import"./BookOutlined.d0bf48c6.js";import"./popupNotifcation.723cb4de.js";import"./record.3ef62f4c.js";import"./string.191404ad.js";(function(){try{var v=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g=new Error().stack;g&&(v._sentryDebugIds=v._sentryDebugIds||{},v._sentryDebugIds[g]="cd2d0280-8858-4841-98a2-bf28de5e2561",v._sentryDebugIdIdentifier="sentry-dbid-cd2d0280-8858-4841-98a2-bf28de5e2561")}catch{}})();const ye={class:"container"},ge={class:"content"},S="NEW_ORGANIZATION_KEY",O="NEW_PROJECT_KEY",fe=ne({__name:"EditorLogin",setup(v){const g=new ve,j=new de,w=new _e,{result:x,loading:U}=h(()=>j.list()),{result:B,loading:b,refetch:D}=h(async()=>{const a=e.value;return a.type!=="selected-organization"?[]:w.list(a.organizationId)}),{result:R,loading:Y,refetch:G}=h(async()=>e.value.type!=="selected-organization"?[]:g.list(e.value.organizationId)),P=c(()=>{var a,o;return(o=(a=x.value)==null?void 0:a.map(n=>({key:n.id,label:n.name})))!=null?o:[]}),C=c(()=>{var a,o;return(o=(a=B.value)==null?void 0:a.map(n=>({key:n.id,label:n.name})))!=null?o:[]}),W=c(()=>{var a,o;return(o=(a=R.value)==null?void 0:a.map(n=>({value:n.id,label:n.name})))!=null?o:[]}),q=c(()=>e.value.type==="initial"?!0:e.value.type==="new-organization"?!e.value.organizationName||!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="new"?!e.value.project.projectName||!e.value.project.folderId:e.value.type==="selected-organization"&&e.value.project.type==="initial"),I=async a=>await pe.create({projectId:a,name:"default"}),e=N({type:"initial"}),J=c(()=>{if(e.value.type!=="initial")return e.value.type==="new-organization"?S:e.value.organizationId}),Z=c(()=>e.value.type==="selected-organization"&&e.value.project.type==="new"?O:e.value.type==="selected-organization"&&e.value.project.type==="selected"?e.value.project.projectId:void 0),M=c(()=>{if(e.value.type==="selected-organization"&&e.value.project.type==="new")return e.value.project.folderId});function Q(a){a||(e.value={type:"initial"}),a===S?e.value={type:"new-organization",organizationName:"",project:{type:"new",projectName:"",folderId:""}}:(e.value={type:"selected-organization",organizationId:String(a),project:{type:"initial"}},D(),G())}function H(a){e.value.type==="selected-organization"&&(a||(e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"initial"}}),a===O?e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"new",projectName:"",folderId:""}}:e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"selected",projectId:String(a)}})}function X(a){e.value.type!=="selected-organization"||e.value.project.type!=="new"||typeof a=="string"&&(e.value={...e.value,project:{...e.value.project,folderId:a}})}const f=N(!1);async function $(){if(!f.value){f.value=!0;try{if(e.value.type==="initial")return;if(e.value.type==="new-organization"){const a=await j.create({name:e.value.organizationName}),o=await w.create({name:e.value.project.projectName,organizationId:a.id,folderId:e.value.project.folderId}),n=await I(o.id);n.value&&k(n.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="new"){const a=await w.create({name:e.value.project.projectName,organizationId:e.value.organizationId,folderId:e.value.project.folderId}),o=await I(a.id);o.value&&k(o.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="selected"){const a=await I(e.value.project.projectId);a.value&&k(a.value)}}finally{f.value=!1}}}const K=oe(),ee=N(null);async function k(a){if(K.query.redirect){const o=K.query.redirect;if(!o.match(/http:\/\/localhost:\d+/))throw new Error("Invalid redirect");const n=decodeURIComponent(o);location.href=ae(n,{"api-key":a})}else ee.value=a}return(a,o)=>(r(),A("div",ye,[u(te),le("div",ge,[t(U)||!t(x)?(r(),s(t(F),{key:0})):(r(),s(t(ue),{key:1,layout:"vertical",class:"card"},{default:l(()=>[u(t(re),{level:3,style:{padding:"0px",margin:"0px","margin-bottom":"30px"}},{default:l(()=>[p(d(t(i).translate("i18n_create_or_choose_project")),1)]),_:1}),u(t(_),{label:t(i).translate("i18n_get_api_key_organization")},{default:l(()=>[u(t(E),{style:{width:"100%"},placeholder:t(i).translate("i18n_get_api_key_choose_organization"),size:"large",value:J.value,"onUpdate:value":Q},{default:l(()=>[u(t(m),{label:t(i).translate("i18n_get_api_key_new_organization")},{default:l(()=>[(r(),s(t(z),{key:S},{default:l(()=>[p(d(t(i).translate("i18n_get_api_key_create_new_organization")),1)]),_:1}))]),_:1},8,["label"]),P.value.length>0?(r(),s(t(m),{key:0,label:t(i).translate("i18n_get_api_key_existing_organizations")},{default:l(()=>[(r(!0),A(T,null,V(P.value,n=>(r(),s(t(z),{key:n.key},{default:l(()=>[p(d(n.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):y("",!0)]),_:1},8,["placeholder","value"])]),_:1},8,["label"]),e.value.type=="new-organization"?(r(),s(t(_),{key:0,label:t(i).translate("i18n_get_api_key_organization_name")},{default:l(()=>[u(t(L),{value:e.value.organizationName,"onUpdate:value":o[0]||(o[0]=n=>e.value.organizationName=n),placeholder:t(i).translate("i18n_get_api_key_choose_organization_name"),size:"large"},null,8,["value","placeholder"])]),_:1},8,["label"])):(r(),s(t(_),{key:1,label:t(i).translate("i18n_get_api_key_project")},{default:l(()=>[u(t(E),{style:{width:"100%"},disabled:e.value.type!="selected-organization",placeholder:t(i).translate("i18n_get_api_key_choose_project"),size:"large",value:Z.value,"onUpdate:value":H},ie({default:l(()=>[t(b)?y("",!0):(r(),s(t(m),{key:0,label:t(i).translate("i18n_get_api_key_new_project")},{default:l(()=>[(r(),s(t(z),{key:O},{default:l(()=>[p(d(t(i).translate("i18n_get_api_key_create_new_project")),1)]),_:1}))]),_:1},8,["label"])),C.value.length>0&&!t(b)?(r(),s(t(m),{key:1,label:t(i).translate("i18n_get_api_key_existing_projects")},{default:l(()=>[(r(!0),A(T,null,V(C.value,n=>(r(),s(t(z),{key:n.key},{default:l(()=>[p(d(n.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):y("",!0)]),_:2},[t(b)?{name:"notFoundContent",fn:l(()=>[u(t(F),{size:"small"})]),key:"0"}:void 0]),1032,["disabled","placeholder","value"])]),_:1},8,["label"])),(e.value.type=="new-organization"||e.value.type=="selected-organization")&&e.value.project.type=="new"?(r(),s(t(_),{key:2,label:"Project name"},{default:l(()=>[u(t(L),{value:e.value.project.projectName,"onUpdate:value":o[1]||(o[1]=n=>e.value.project.projectName=n),placeholder:t(i).translate("i18n_get_api_key_choose_project_name"),size:"large"},null,8,["value","placeholder"])]),_:1})):y("",!0),(e.value.type=="new-organization"||e.value.type=="selected-organization")&&e.value.project.type=="new"?(r(),s(t(_),{key:3,label:"Select folder"},{default:l(()=>[u(t(E),{value:M.value,options:W.value,loading:t(Y),size:"large","onUpdate:value":X},null,8,["value","options","loading"])]),_:1})):y("",!0),u(t(_),{style:{"margin-top":"40px"}},{default:l(()=>[u(t(se),{type:"primary",disabled:q.value,loading:f.value,style:{width:"100%"},onClick:$},{default:l(()=>[p(d(t(i).translate("i18n_login_with_this_project")),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1}))])]))}});const Ue=ce(fe,[["__scopeId","data-v-07d3d723"]]);export{Ue as default};
//# sourceMappingURL=EditorLogin.926f99eb.js.map
