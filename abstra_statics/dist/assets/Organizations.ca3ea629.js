import{d as z,ex as _,H as O,b as w,c as k,w as c,f as m,u as h}from"./registerWidgets.aa99a257.js";import{e as x,b as C}from"./icons.28b8a025.js";import{a as I}from"./asyncComputed.0fe9c7ca.js";import"./gateway.f016ddd8.js";import{O as l}from"./organization.94743aaa.js";import"./index.736fba6e.js";import{_ as v}from"./Navbar.vue_vue_type_script_setup_true_lang.be5fccab.js";import{_ as D}from"./CrudView.vue_vue_type_script_setup_true_lang.28754d4f.js";import{B as M}from"./BaseLayout.7727a5c7.js";import{M as A}from"./index.a431d18c.js";import"./passwordlessManager.16d17276.js";import"./pubsub.1c962ca1.js";import"./storage.140ce577.js";import"./activeRecord.a0fab812.js";import"./logo.084e5d7c.js";import"./index.782ff7c7.js";import"./Title.6e572405.js";import"./index.3dca4144.js";import"./Form.edded16b.js";import"./index.4fae01ae.js";import"./index.7dfbdbc1.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="3bf169e9-a42d-4557-bb49-683fd317f3ec",o._sentryDebugIdIdentifier="sentry-dbid-3bf169e9-a42d-4557-bb49-683fd317f3ec")}catch{}})();const Y=z({__name:"Organizations",setup(o){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],d=_(),{loading:p,result:r,refetch:u}=I(()=>l.list()),s=({key:t})=>{d.push({name:"organization",params:{organizationId:t}})},f=async t=>{const e=await l.create(t.name);s({key:e.id})},g=async({key:t})=>{A.confirm({title:"Are you sure you want to delete this organization?",onOk:async()=>{var e,a;await((a=(e=r.value)==null?void 0:e.find(y=>y.id===t))==null?void 0:a.delete()),u()}})},b=O(()=>{var t,e;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Organization Actions"}],rows:(e=(t=r.value)==null?void 0:t.map(a=>({key:a.id,cells:[{text:a.name,link:`/organizations/${encodeURIComponent(a.id)}`},{text:a.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:C,label:"Delete",onClick:g,dangerous:!0}]}]})))!=null?e:[]}});return(t,e)=>(w(),k(M,null,{navbar:c(()=>[m(v,{breadcrumb:n})]),content:c(()=>[m(D,{"entity-name":"organization",loading:h(p),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:b.value,fields:i,onCreate:f},null,8,["loading","table"])]),_:1}))}});export{Y as default};
//# sourceMappingURL=Organizations.ca3ea629.js.map
