import{d as _,ey as w,H as h,b as k,c as C,w as c,f as d,u as O}from"./outputWidgets.7bdcec0a.js";import{e as x,b as I}from"./icons.6934ad19.js";import{a as v}from"./asyncComputed.cfb98789.js";import"./router.3986149f.js";import{O as l}from"./organization.1abe688b.js";import"./columns.6b51fbf2.js";import{_ as D}from"./Navbar.vue_vue_type_script_setup_true_lang.6957df43.js";import{C as A}from"./CrudView.82a1bc5a.js";import{B}from"./BaseLayout.8a75f5c8.js";import{a as N}from"./ant-design.b9d9c398.js";import"./Title.9c0d0c5f.js";import"./index.15e46fc6.js";import"./gateway.f622b899.js";import"./activeRecord.84d52553.js";import"./pubsub.c455bec9.js";import"./index.f4ac7424.js";import"./logo.084e5d7c.js";import"./Text.94a8ea41.js";import"./index.23129d61.js";import"./index.daee6445.js";import"./Form.f84b91b7.js";import"./url.5caacc63.js";import"./index.fa2fc691.js";import"./index.125aa6b3.js";import"./index.d2a75d88.js";import"./index.a9a6d5a2.js";import"./index.a2310446.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="9f66237d-31e7-421a-b050-13a89d4198a7",o._sentryDebugIdIdentifier="sentry-dbid-9f66237d-31e7-421a-b050-13a89d4198a7")}catch{}})();const it=_({__name:"Organizations",setup(o){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:g}=v(()=>l.list()),s=({key:t})=>{p.push({name:"organization",params:{organizationId:t}})},f=async t=>{const a=await l.create(t.name);s({key:a.id})},y=async({key:t})=>{var e,m;await N("Are you sure you want to delete this organization?")&&(await((m=(e=r.value)==null?void 0:e.find(z=>z.id===t))==null?void 0:m.delete()),g())},b=h(()=>{var t,a;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(t=r.value)==null?void 0:t.map(e=>({key:e.id,cells:[{text:e.name,link:`/organizations/${encodeURIComponent(e.id)}`},{text:e.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:y,dangerous:!0}]}]})))!=null?a:[]}});return(t,a)=>(k(),C(B,null,{navbar:c(()=>[d(D,{breadcrumb:n})]),content:c(()=>[d(A,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:i,onCreate:f},null,8,["loading","table"])]),_:1}))}});export{it as default};
//# sourceMappingURL=Organizations.24ef97fd.js.map
