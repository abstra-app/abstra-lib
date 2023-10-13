import{d as _,ez as w,J as h,b as k,c as C,w as c,f as d,u as O}from"./outputWidgets.f120b477.js";import{e as x,b as I}from"./icons.c367c256.js";import{a as v}from"./asyncComputed.5ccd4614.js";import"./router.e3ecb487.js";import{O as l}from"./organization.70da67ff.js";import"./index.81859a03.js";import{_ as D}from"./Navbar.vue_vue_type_script_setup_true_lang.e49d6f27.js";import{C as A}from"./CrudView.87b341af.js";import{B}from"./BaseLayout.90c0229e.js";import{a as N}from"./ant-design.13a5e655.js";import"./Title.3dc4e32d.js";import"./index.5818bfb2.js";import"./gateway.a36b7b3a.js";import"./activeRecord.d87d7ef2.js";import"./pubsub.4681462f.js";import"./logo.084e5d7c.js";import"./index.3ab4f365.js";import"./index.54e8798a.js";import"./index.2ac0b4db.js";import"./Form.ec892c10.js";import"./url.8af07297.js";import"./index.b96fbbd8.js";import"./index.3801d49d.js";import"./index.de46e6db.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="b47e8525-6ee7-4306-8b47-f41af0e3df0c",a._sentryDebugIdIdentifier="sentry-dbid-b47e8525-6ee7-4306-8b47-f41af0e3df0c")}catch{}})();const oe=_({__name:"Organizations",setup(a){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],p=w(),{loading:u,result:r,refetch:f}=v(()=>l.list()),s=({key:e})=>{p.push({name:"organization",params:{organizationId:e}})},g=async e=>{const o=await l.create(e.name);s({key:o.id})},b=async({key:e})=>{var t,m;await N("Are you sure you want to delete this organization?")&&(await((m=(t=r.value)==null?void 0:t.find(z=>z.id===e))==null?void 0:m.delete()),f())},y=h(()=>{var e,o;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=r.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.name,link:`/organizations/${encodeURIComponent(t.id)}`},{text:t.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(k(),C(B,null,{navbar:c(()=>[d(D,{breadcrumb:n})]),content:c(()=>[d(A,{"entity-name":"organization",loading:O(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:y.value,fields:i,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{oe as default};
//# sourceMappingURL=Organizations.319d496e.js.map
