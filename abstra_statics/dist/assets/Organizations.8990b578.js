import{d as _,ez as w,J as h,b as k,c as O,w as c,f as p,u as C}from"./outputWidgets.52de64cd.js";import{e as x,b as I}from"./icons.bf6505eb.js";import{a as v}from"./asyncComputed.00e76dd1.js";import"./console.4411c7a7.js";import{O as l}from"./organization.c1c9ebf3.js";import"./index.8361ad88.js";import{_ as D}from"./Navbar.vue_vue_type_script_setup_true_lang.af414718.js";import{_ as A}from"./CrudView.vue_vue_type_script_setup_true_lang.70304edb.js";import{B}from"./BaseLayout.c2f90625.js";import{a as N}from"./ant-design.20ade584.js";import"./index.a07ffcc5.js";import"./Form.09072055.js";import"./Title.baba2b21.js";import"./index.7800af0b.js";import"./index.c0e74c90.js";import"./index.e5d92658.js";import"./dayjs.7ad6aa6d.js";import"./index.5718341d.js";import"./index.3ed5d65c.js";import"./TabPane.c3c2f5a1.js";import"./index.396ff1b5.js";import"./CollapsePanel.d756b861.js";import"./index.9b3c2ba8.js";import"./index.f6c308cc.js";import"./index.f7915957.js";import"./index.1ebdd57a.js";import"./index.7fdb6bd8.js";import"./index.693f4596.js";import"./index.5a37ef67.js";import"./index.19e4a065.js";import"./gateway.e1457457.js";import"./activeRecord.ebcbfc07.js";import"./pubsub.6e9aa6f2.js";import"./logo.084e5d7c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[i]="33e8a4b4-8eb6-487a-822c-1f7df32855e1",a._sentryDebugIdIdentifier="sentry-dbid-33e8a4b4-8eb6-487a-822c-1f7df32855e1")}catch{}})();const dt=_({__name:"Organizations",setup(a){const i=[{label:"My organizations",path:"/organizations"}],n=[{key:"name",label:"Organization Name"}],d=w(),{loading:u,result:r,refetch:f}=v(()=>l.list()),s=({key:t})=>{d.push({name:"organization",params:{organizationId:t}})},g=async t=>{const e=await l.create(t.name);s({key:e.id})},b=async({key:t})=>{var o,m;await N("Are you sure you want to delete this organization?")&&(await((m=(o=r.value)==null?void 0:o.find(z=>z.id===t))==null?void 0:m.delete()),f())},y=h(()=>{var t,e;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(e=(t=r.value)==null?void 0:t.map(o=>({key:o.id,cells:[{text:o.name,link:`/organizations/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:I,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?e:[]}});return(t,e)=>(k(),O(B,null,{navbar:c(()=>[p(D,{breadcrumb:i})]),content:c(()=>[p(A,{"entity-name":"organization",loading:C(u),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:y.value,fields:n,onCreate:g},null,8,["loading","table"])]),_:1}))}});export{dt as default};
//# sourceMappingURL=Organizations.8990b578.js.map
