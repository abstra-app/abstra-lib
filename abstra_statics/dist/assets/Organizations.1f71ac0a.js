import{d as _,ez as w,J as h,b as k,c as C,w as c,f as d,u as O}from"./outputWidgets.e02beef6.js";import{e as x,b as I}from"./icons.3483124d.js";import{a as v}from"./asyncComputed.8a8eb5ed.js";import"./router.7d65ad37.js";import{O as l}from"./organization.7d88b959.js";import"./index.839163de.js";import{_ as D}from"./Navbar.vue_vue_type_script_setup_true_lang.54e4b29e.js";import{C as A}from"./CrudView.19dbd3f9.js";import{B}from"./BaseLayout.ffb7a75d.js";import{a as N}from"./ant-design.a4a654ba.js";import"./Title.e22e1fa6.js";import"./index.912df764.js";import"./gateway.0489454f.js";import"./activeRecord.11465593.js";import"./pubsub.9c3ab07b.js";import"./logo.084e5d7c.js";import"./index.ead1f18e.js";import"./index.d6c33de7.js";import"./index.78a5283a.js";import"./Form.245db243.js";import"./url.1be78005.js";import"./index.8f611a19.js";import"./index.abad8141.js";import"./index.d3576ea4.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="47d5a778-98a9-4687-9a95-4f43af9d0175",o._sentryDebugIdIdentifier="sentry-dbid-47d5a778-98a9-4687-9a95-4f43af9d0175")}catch{}})();const et=_({__name:"Organizations",setup(o){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:f}=v(()=>l.list()),s=({key:t})=>{p.push({name:"organization",params:{organizationId:t}})},g=async t=>{const e=await l.create(t.name);s({key:e.id})},y=async({key:t})=>{var a,m;await N("Are you sure you want to delete this organization?")&&(await((m=(a=r.value)==null?void 0:a.find(z=>z.id===t))==null?void 0:m.delete()),f())},b=h(()=>{var t,e;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.map(a=>({key:a.id,cells:[{text:a.name,link:`/organizations/${encodeURIComponent(a.id)}`},{text:a.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:y,dangerous:!0}]}]})))!=null?e:[]}});return(t,e)=>(k(),C(B,null,{navbar:c(()=>[d(D,{breadcrumb:n})]),content:c(()=>[d(A,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:i,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{et as default};
//# sourceMappingURL=Organizations.1f71ac0a.js.map
