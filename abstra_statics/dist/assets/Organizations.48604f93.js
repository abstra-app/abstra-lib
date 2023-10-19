import{d as _,ey as w,H as h,b as k,c as C,w as c,f as d,u as O}from"./outputWidgets.efa87d6e.js";import{e as x,b as I}from"./icons.f3403e08.js";import{a as v}from"./asyncComputed.f1be5732.js";import"./router.922aeec9.js";import{O as l}from"./organization.f0ea5c7c.js";import"./columns.c72a0acd.js";import{_ as D}from"./Navbar.vue_vue_type_script_setup_true_lang.8ae22ccf.js";import{C as A}from"./CrudView.0bd07e47.js";import{B}from"./BaseLayout.ab6e2573.js";import{a as N}from"./ant-design.8ec5dfa4.js";import"./Title.293c67f6.js";import"./index.1d529394.js";import"./gateway.000b1710.js";import"./activeRecord.61cacedc.js";import"./pubsub.2b1473fd.js";import"./index.f4ac7424.js";import"./logo.084e5d7c.js";import"./index.a0e42192.js";import"./index.a8adb0b1.js";import"./index.2882bc4a.js";import"./Form.814dac5d.js";import"./url.7a63b530.js";import"./index.95401f03.js";import"./index.40035680.js";import"./index.9ec07c88.js";import"./index.7e284f0a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="3ad02cee-48d5-461e-9208-d196150b1949",a._sentryDebugIdIdentifier="sentry-dbid-3ad02cee-48d5-461e-9208-d196150b1949")}catch{}})();const nt=_({__name:"Organizations",setup(a){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:g}=v(()=>l.list()),s=({key:t})=>{p.push({name:"organization",params:{organizationId:t}})},f=async t=>{const o=await l.create(t.name);s({key:o.id})},y=async({key:t})=>{var e,m;await N("Are you sure you want to delete this organization?")&&(await((m=(e=r.value)==null?void 0:e.find(z=>z.id===t))==null?void 0:m.delete()),g())},b=h(()=>{var t,o;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(t=r.value)==null?void 0:t.map(e=>({key:e.id,cells:[{text:e.name,link:`/organizations/${encodeURIComponent(e.id)}`},{text:e.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:y,dangerous:!0}]}]})))!=null?o:[]}});return(t,o)=>(k(),C(B,null,{navbar:c(()=>[d(D,{breadcrumb:n})]),content:c(()=>[d(A,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:i,onCreate:f},null,8,["loading","table"])]),_:1}))}});export{nt as default};
//# sourceMappingURL=Organizations.48604f93.js.map
