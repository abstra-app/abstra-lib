import{d as _,ey as w,G as h,b as k,c as C,w as c,f as l,u as O}from"./outputWidgets.6f5f26c6.js";import{e as x,b as I}from"./icons.17e3d05e.js";import{a as v}from"./asyncComputed.e6af4336.js";import"./router.ccf20d25.js";import{O as d}from"./organization.fbd1e241.js";import"./columns.08ec7823.js";import{_ as D}from"./Navbar.vue_vue_type_script_setup_true_lang.08b02c70.js";import{C as A}from"./CrudView.e161df86.js";import{B}from"./BaseLayout.d0401d00.js";import{a as N}from"./ant-design.2afb3ce8.js";import"./Form.e86102d7.js";import"./Title.23178f3a.js";import"./transButton.d3ca6f8d.js";import"./Text.9c898266.js";import"./index.e5c6a10a.js";import"./gateway.6297223c.js";import"./activeRecord.dfc6ac31.js";import"./pubsub.25a587cf.js";import"./index.cf4c23b9.js";import"./logo.084e5d7c.js";import"./index.ec9a4cda.js";import"./index.ba59f963.js";import"./url.f9a6b661.js";import"./index.008cccf4.js";import"./index.8ccdcac3.js";import"./index.dd8eaea8.js";import"./index.d4840836.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="bbeb949e-b023-4e31-9e23-ffef90785a11",a._sentryDebugIdIdentifier="sentry-dbid-bbeb949e-b023-4e31-9e23-ffef90785a11")}catch{}})();const ie=_({__name:"Organizations",setup(a){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:f}=v(()=>d.list()),s=({key:e})=>{p.push({name:"organization",params:{organizationId:e}})},g=async e=>{const o=await d.create(e.name);s({key:o.id})},b=async({key:e})=>{var t,m;await N("Are you sure you want to delete this organization?")&&(await((m=(t=r.value)==null?void 0:t.find(z=>z.id===e))==null?void 0:m.delete()),f())},y=h(()=>{var e,o;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=r.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.name,link:`/organizations/${encodeURIComponent(t.id)}`},{text:t.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(k(),C(B,null,{navbar:c(()=>[l(D,{breadcrumb:n})]),content:c(()=>[l(A,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:y.value,fields:i,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{ie as default};
//# sourceMappingURL=Organizations.cf9f9304.js.map
