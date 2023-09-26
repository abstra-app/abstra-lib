import{d as z,ex as _,H as O,b as w,c as k,w as c,f as m,u as h}from"./registerWidgets.586d7870.js";import{e as x,b as C}from"./icons.ebb09c51.js";import{a as I}from"./asyncComputed.74bef820.js";import"./gateway.e8ec98c7.js";import{O as d}from"./organization.1b717219.js";import"./index.7572e3cb.js";import{_ as v}from"./Navbar.vue_vue_type_script_setup_true_lang.bf95f7d3.js";import{_ as D}from"./CrudView.vue_vue_type_script_setup_true_lang.c29d3a09.js";import{B as M}from"./BaseLayout.2f088047.js";import{M as A}from"./index.e0b770b1.js";import"./passwordlessManager.f0ac9605.js";import"./pubsub.ac7c64c1.js";import"./storage.35447a43.js";import"./activeRecord.7782e0d2.js";import"./logo.084e5d7c.js";import"./Text.766194be.js";import"./Title.6b7dd81b.js";import"./transButton.53b2ba2d.js";import"./index.aaaa7cc4.js";import"./index.047f88fc.js";import"./Modal.3308386a.js";import"./index.1d32f0ef.js";import"./index.5e73b889.js";import"./index.7ed81ebc.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="6cb04226-845f-45bd-9f12-dcd6377f4377",a._sentryDebugIdIdentifier="sentry-dbid-6cb04226-845f-45bd-9f12-dcd6377f4377")}catch{}})();const et=z({__name:"Organizations",setup(a){const n=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],l=_(),{loading:p,result:r,refetch:u}=I(()=>d.list()),s=({key:t})=>{l.push({name:"organization",params:{organizationId:t}})},f=async t=>{const e=await d.create(t.name);s({key:e.id})},g=async({key:t})=>{A.confirm({title:"Are you sure you want to delete this organization?",onOk:async()=>{var e,o;await((o=(e=r.value)==null?void 0:e.find(b=>b.id===t))==null?void 0:o.delete()),u()}})},y=O(()=>{var t,e;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Organization Actions"}],rows:(e=(t=r.value)==null?void 0:t.map(o=>({key:o.id,cells:[{text:o.name,link:`/organizations/${encodeURIComponent(o.id)}`},{text:o.id},{text:"",actions:[{icon:x,label:"Edit Organization",onClick:s},{icon:C,label:"Delete",onClick:g,dangerous:!0}]}]})))!=null?e:[]}});return(t,e)=>(w(),k(M,null,{navbar:c(()=>[m(v,{breadcrumb:n})]),content:c(()=>[m(D,{"entity-name":"organization",loading:h(p),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:y.value,fields:i,onCreate:f},null,8,["loading","table"])]),_:1}))}});export{et as default};
//# sourceMappingURL=Organizations.0cd526bb.js.map
