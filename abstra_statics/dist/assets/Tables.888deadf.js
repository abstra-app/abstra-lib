import{d as T,eA as _,eB as k,H as w,b as h,c as I,w as i,u as l,f as x,ar as N,bV as S}from"./outputWidgets.f4f8fd75.js";import{H as v,i as D}from"./icons.2ffdeb1d.js";import{a as E}from"./asyncComputed.28d6a0e8.js";import"./router.80664542.js";import{T as m}from"./tables.180c947b.js";import"./index.fd73aac8.js";import{C as B}from"./CrudView.a7fdf3f9.js";import{n as d}from"./string.6449fbf6.js";import"./Form.cbefc663.js";import"./hasIn.641a4d68.js";import"./record.7a0af46e.js";import"./pubsub.db1a1016.js";import"./index.cf4c23b9.js";import"./Paragraph.0ac0a61c.js";import"./Base.7f327c7e.js";import"./Typography.049c59ac.js";import"./Modal.cbed1604.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.fd26e598.js";import"./url.a6a9b3e6.js";import"./index.aba92d88.js";import"./Title.e836aa1c.js";import"./Text.010cf31d.js";import"./index.06a0d44e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="b0120ad1-573e-46f4-8efe-0a2cfd63133e",o._sentryDebugIdIdentifier="sentry-dbid-b0120ad1-573e-46f4-8efe-0a2cfd63133e")}catch{}})();const oe=T({__name:"Tables",setup(o){const a=_(),t=k().params.projectId,{loading:p,result:u,refetch:b}=E(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=w(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:v,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>d(e,!0),blur:e=>d(e,!1)}];return(e,r)=>(h(),I(B,{"entity-name":"table",loading:l(p),"docs-path":"tables/overview",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:i(()=>[x(l(S),{onClick:s},{default:i(()=>[N("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{oe as default};
//# sourceMappingURL=Tables.888deadf.js.map
