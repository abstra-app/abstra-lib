import{d as _,ex as w,H as h,b as k,c as O,w as c,f as l,u as C}from"./registerWidgets.ca9618c6.js";import{e as x,b as I}from"./icons.71da0300.js";import{a as v}from"./asyncComputed.f26ab310.js";import"./gateway.f5df01e9.js";import{O as d}from"./organization.98c0f97e.js";import"./index.eb434d5a.js";import{_ as D}from"./Navbar.vue_vue_type_script_setup_true_lang.60f4b74c.js";import{_ as A}from"./CrudView.vue_vue_type_script_setup_true_lang.0535df40.js";import{B}from"./BaseLayout.f93a7179.js";import{a as N}from"./ant-design.c8da8814.js";import"./passwordlessManager.91e53713.js";import"./pubsub.197ceb4e.js";import"./storage.a502fdce.js";import"./activeRecord.fa727ba5.js";import"./logo.084e5d7c.js";import"./index.6cc8ffe0.js";import"./Title.f740cc19.js";import"./index.6a4df70c.js";import"./index.980eab3b.js";import"./Form.fac64e0c.js";import"./index.11818713.js";import"./index.b013a4c0.js";import"./index.c0bd1022.js";import"./index.7c566b28.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="97e3049a-42e5-4fc7-b997-d527e3a23427",o._sentryDebugIdIdentifier="sentry-dbid-97e3049a-42e5-4fc7-b997-d527e3a23427")}catch{}})();const at=_({__name:"Organizations",setup(o){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:f}=v(()=>d.list()),s=({key:t})=>{p.push({name:"organization",params:{organizationId:t}})},g=async t=>{const a=await d.create(t.name);s({key:a.id})},y=async({key:t})=>{var e,m;await N("Are you sure you want to delete this organization?")&&(await((m=(e=r.value)==null?void 0:e.find(z=>z.id===t))==null?void 0:m.delete()),f())},b=h(()=>{var t,a;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(t=r.value)==null?void 0:t.map(e=>({key:e.id,cells:[{text:e.name,link:`/organizations/${encodeURIComponent(e.id)}`},{text:e.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:y,dangerous:!0}]}]})))!=null?a:[]}});return(t,a)=>(k(),O(B,null,{navbar:c(()=>[l(D,{breadcrumb:n})]),content:c(()=>[l(A,{"entity-name":"organization",loading:C(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:i,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{at as default};
//# sourceMappingURL=Organizations.059c9bf6.js.map
