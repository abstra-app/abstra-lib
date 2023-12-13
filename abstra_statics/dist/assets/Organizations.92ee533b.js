import{d as _,eA as w,G as h,b as k,c as C,w as m,f as c,u as O}from"./outputWidgets.e4740a46.js";import{e as x,d as I}from"./icons.1f2085e1.js";import{a as v}from"./asyncComputed.d2f778f6.js";import"./router.793abf88.js";import"./index.58baa9c3.js";import{O as l}from"./organization.69bffed0.js";import{_ as A}from"./Navbar.vue_vue_type_script_setup_true_lang.c25ee1cb.js";import{C as D}from"./CrudView.9de9712d.js";import{B}from"./BaseLayout.227f899b.js";import{a as N}from"./ant-design.6e7474f5.js";import"./Base.242f9d87.js";import"./transButton.237bb9ef.js";import"./Text.27a734ce.js";import"./Title.8b2b3cfc.js";import"./index.234b04f7.js";import"./record.69f74dba.js";import"./pubsub.5fca0d09.js";import"./gateway.185e1a22.js";import"./logo.084e5d7c.js";import"./index.de07fc0e.js";import"./url.13324fb6.js";import"./index.c445bb3f.js";import"./index.4f0fd1e2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="64f6d943-ec18-42d0-928d-8db383f72a36",o._sentryDebugIdIdentifier="sentry-dbid-64f6d943-ec18-42d0-928d-8db383f72a36")}catch{}})();const et=_({__name:"Organizations",setup(o){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:f}=v(()=>l.list()),s=({key:t})=>{p.push({name:"organization",params:{organizationId:t}})},g=async t=>{const a=await l.create(t.name);s({key:a.id})},y=async({key:t})=>{var e,d;await N("Are you sure you want to delete this organization?")&&(await((d=(e=r.value)==null?void 0:e.find(z=>z.id===t))==null?void 0:d.delete()),f())},b=h(()=>{var t,a;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(t=r.value)==null?void 0:t.map(e=>({key:e.id,cells:[{text:e.name,link:`/organizations/${encodeURIComponent(e.id)}`},{text:e.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:y,dangerous:!0}]}]})))!=null?a:[]}});return(t,a)=>(k(),C(B,null,{navbar:m(()=>[c(A,{breadcrumb:n})]),content:m(()=>[c(D,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:i,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{et as default};
//# sourceMappingURL=Organizations.92ee533b.js.map
