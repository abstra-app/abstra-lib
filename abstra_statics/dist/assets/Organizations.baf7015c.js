import{d as _,ez as w,J as h,b as k,c as O,w as c,f as p,u as C}from"./outputWidgets.cdd73ae7.js";import{e as x,b as I}from"./icons.5a4d121b.js";import{a as v}from"./asyncComputed.1e379dfc.js";import"./console.da68e7a5.js";import{O as d}from"./organization.8280b807.js";import"./index.3432358a.js";import{_ as D}from"./Navbar.vue_vue_type_script_setup_true_lang.fd9e03e3.js";import{_ as A}from"./CrudView.vue_vue_type_script_setup_true_lang.d70fb4a4.js";import{B}from"./BaseLayout.d9f67ad3.js";import{a as N}from"./ant-design.12b97206.js";import"./index.bb21662d.js";import"./Form.989d9f34.js";import"./Title.a585f3b7.js";import"./CollapsePanel.b3533acc.js";import"./index.3a1041eb.js";import"./index.23699d9e.js";import"./index.0ff4e9e1.js";import"./dayjs.8c54e3e0.js";import"./index.74f12426.js";import"./index.d0d1a721.js";import"./TabPane.df53a43e.js";import"./index.4b8538be.js";import"./index.08f7b30c.js";import"./index.2eef836d.js";import"./index.2a1509cb.js";import"./index.165bdf52.js";import"./index.1d69d182.js";import"./index.2ae175da.js";import"./index.71dc62b0.js";import"./index.5d73eb3d.js";import"./gateway.701cfd2d.js";import"./activeRecord.7c91f6d1.js";import"./pubsub.f5d6db77.js";import"./logo.084e5d7c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[i]="ed5b30b5-e35c-4cb3-8154-63ff3f69c51d",a._sentryDebugIdIdentifier="sentry-dbid-ed5b30b5-e35c-4cb3-8154-63ff3f69c51d")}catch{}})();const lt=_({__name:"Organizations",setup(a){const i=[{label:"My organizations",path:"/organizations"}],n=[{key:"name",label:"Organization Name"}],l=w(),{loading:u,result:r,refetch:f}=v(()=>d.list()),s=({key:t})=>{l.push({name:"organization",params:{organizationId:t}})},g=async t=>{const e=await d.create(t.name);s({key:e.id})},b=async({key:t})=>{var o,m;await N("Are you sure you want to delete this organization?")&&(await((m=(o=r.value)==null?void 0:o.find(z=>z.id===t))==null?void 0:m.delete()),f())},y=h(()=>{var t,e;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.map(o=>({key:o.id,cells:[{text:o.name,link:`/organizations/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?e:[]}});return(t,e)=>(k(),O(B,null,{navbar:c(()=>[p(D,{breadcrumb:i})]),content:c(()=>[p(A,{"entity-name":"organization",loading:C(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:y.value,fields:n,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{lt as default};
//# sourceMappingURL=Organizations.baf7015c.js.map
