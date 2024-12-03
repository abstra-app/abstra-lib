import{N as Q}from"./Navbar.1cdba1b7.js";import{a as A}from"./asyncComputed.52df22ec.js";import{m as H}from"./url.95376bbe.js";import{d as X,f as y,e as k,ea as $,o as r,Y as h,b as c,a as ee,u as a,c as s,w as i,by as C,aG as u,e9 as p,eV as l,dd as ae,aB as K,cT as f,cU as m,aS as T,eb as V,S as z,cz as g,bL as B,eg as te,bT as ne,cy as oe,a0 as ie}from"./index.4b0f7fd1.js";import{A as re}from"./apiKey.4facc9ee.js";import"./gateway.c8bc89d0.js";import{O as D}from"./organization.7cbd9070.js";import{P as L}from"./project.cc711c85.js";import"./tables.81ce6152.js";import"./PhChats.vue.78a7a0c4.js";import"./PhSignOut.vue.8d5017f2.js";import"./router.4f07c66a.js";import"./index.079212f3.js";import"./Avatar.b4bb5f21.js";import"./index.b4d69d1a.js";import"./index.f06ef9f1.js";import"./BookOutlined.60159d4d.js";import"./popupNotifcation.18b065a0.js";import"./record.76453a95.js";import"./string.b08713fc.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_=new Error().stack;_&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[_]="85cd3da0-413a-45f5-9d66-0e8ca219c7cb",d._sentryDebugIdIdentifier="sentry-dbid-85cd3da0-413a-45f5-9d66-0e8ca219c7cb")}catch{}})();const le={class:"container"},se={class:"content"},N="NEW_ORGANIZATION_KEY",I="NEW_PROJECT_KEY",ce=X({__name:"EditorLogin",setup(d){const{result:_,loading:E}=A(()=>D.list()),{result:R,loading:j,refetch:U}=A(async()=>{const t=e.value;return t.type!=="selected-organization"?[]:L.list(t.organizationId)}),O=y(()=>{var t,n;return(n=(t=_.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?n:[]}),x=y(()=>{var t,n;return(n=(t=R.value)==null?void 0:t.map(o=>({key:o.id,label:o.name})))!=null?n:[]}),Y=y(()=>e.value.type==="initial"?!0:e.value.type==="new-organization"?!e.value.organizationName||!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="new"?!e.value.project.projectName:e.value.type==="selected-organization"&&e.value.project.type==="initial"),F=async t=>await D.create(t.name),S=async(t,n)=>await L.create({organizationId:n,name:t.name}),w=async t=>await re.create({projectId:t,name:"default"}),e=k({type:"initial"}),G=y(()=>{if(e.value.type!=="initial")return e.value.type==="new-organization"?N:e.value.organizationId}),W=y(()=>e.value.type==="selected-organization"&&e.value.project.type==="new"?I:e.value.type==="selected-organization"&&e.value.project.type==="selected"?e.value.project.projectId:void 0);function M(t){t||(e.value={type:"initial"}),t===N?e.value={type:"new-organization",organizationName:"",project:{type:"new",projectName:""}}:(e.value={type:"selected-organization",organizationId:String(t),project:{type:"initial"}},U())}function q(t){e.value.type==="selected-organization"&&(t||(e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"initial"}}),t===I?e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"new",projectName:""}}:e.value={type:"selected-organization",organizationId:e.value.organizationId,project:{type:"selected",projectId:String(t)}})}const v=k(!1);async function J(){if(!v.value){v.value=!0;try{if(e.value.type==="initial")return;if(e.value.type==="new-organization"){const t=await F({name:e.value.organizationName}),n=await S({name:e.value.project.projectName},t.id),o=await w(n.id);o.value&&b(o.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="new"){const t=await S({name:e.value.project.projectName},e.value.organizationId),n=await w(t.id);n.value&&b(n.value)}if(e.value.type==="selected-organization"&&e.value.project.type==="selected"){const t=await w(e.value.project.projectId);t.value&&b(t.value)}}finally{v.value=!1}}}const P=$(),Z=k(null);async function b(t){if(P.query.redirect){const n=P.query.redirect;if(!n.match(/http:\/\/localhost:\d+/))throw new Error("Invalid redirect");const o=decodeURIComponent(n);location.href=H(o,{"api-key":t})}else Z.value=t}return(t,n)=>(r(),h("div",le,[c(Q),ee("div",se,[a(E)||!a(_)?(r(),s(a(C),{key:0})):(r(),s(a(oe),{key:1,layout:"vertical",class:"card"},{default:i(()=>[c(a(ae),{level:3,style:{padding:"0px",margin:"0px","margin-bottom":"30px"}},{default:i(()=>[u(p(a(l).translate("i18n_create_or_choose_project")),1)]),_:1}),c(a(g),{label:a(l).translate("i18n_get_api_key_organization")},{default:i(()=>[c(a(K),{style:{width:"100%"},placeholder:a(l).translate("i18n_get_api_key_choose_organization"),size:"large",value:G.value,"onUpdate:value":M},{default:i(()=>[c(a(f),{label:a(l).translate("i18n_get_api_key_new_organization")},{default:i(()=>[(r(),s(a(m),{key:N},{default:i(()=>[u(p(a(l).translate("i18n_get_api_key_create_new_organization")),1)]),_:1}))]),_:1},8,["label"]),O.value.length>0?(r(),s(a(f),{key:0,label:a(l).translate("i18n_get_api_key_existing_organizations")},{default:i(()=>[(r(!0),h(T,null,V(O.value,o=>(r(),s(a(m),{key:o.key},{default:i(()=>[u(p(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):z("",!0)]),_:1},8,["placeholder","value"])]),_:1},8,["label"]),e.value.type=="new-organization"?(r(),s(a(g),{key:0,label:a(l).translate("i18n_get_api_key_organization_name")},{default:i(()=>[c(a(B),{value:e.value.organizationName,"onUpdate:value":n[0]||(n[0]=o=>e.value.organizationName=o),placeholder:a(l).translate("i18n_get_api_key_choose_organization_name"),size:"large"},null,8,["value","placeholder"])]),_:1},8,["label"])):(r(),s(a(g),{key:1,label:a(l).translate("i18n_get_api_key_project")},{default:i(()=>[c(a(K),{style:{width:"100%"},disabled:e.value.type!="selected-organization",placeholder:a(l).translate("i18n_get_api_key_choose_project"),size:"large",value:W.value,"onUpdate:value":q},te({default:i(()=>[a(j)?z("",!0):(r(),s(a(f),{key:0,label:a(l).translate("i18n_get_api_key_new_project")},{default:i(()=>[(r(),s(a(m),{key:I},{default:i(()=>[u(p(a(l).translate("i18n_get_api_key_create_new_project")),1)]),_:1}))]),_:1},8,["label"])),x.value.length>0&&!a(j)?(r(),s(a(f),{key:1,label:a(l).translate("i18n_get_api_key_existing_projects")},{default:i(()=>[(r(!0),h(T,null,V(x.value,o=>(r(),s(a(m),{key:o.key},{default:i(()=>[u(p(o.label),1)]),_:2},1024))),128))]),_:1},8,["label"])):z("",!0)]),_:2},[a(j)?{name:"notFoundContent",fn:i(()=>[c(a(C),{size:"small"})]),key:"0"}:void 0]),1032,["disabled","placeholder","value"])]),_:1},8,["label"])),(e.value.type=="new-organization"||e.value.type=="selected-organization")&&e.value.project.type=="new"?(r(),s(a(g),{key:2,label:"Project name"},{default:i(()=>[c(a(B),{value:e.value.project.projectName,"onUpdate:value":n[1]||(n[1]=o=>e.value.project.projectName=o),placeholder:a(l).translate("i18n_get_api_key_choose_project_name"),size:"large"},null,8,["value","placeholder"])]),_:1})):z("",!0),c(a(g),{style:{"margin-top":"40px"}},{default:i(()=>[c(a(ne),{type:"primary",disabled:Y.value,loading:v.value,style:{width:"100%"},onClick:J},{default:i(()=>[u(p(a(l).translate("i18n_login_with_this_project")),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1}))])]))}});const Se=ie(ce,[["__scopeId","data-v-11f078da"]]);export{Se as default};
//# sourceMappingURL=EditorLogin.3391c516.js.map
