import{d as g,eA as C,eB as T,H as k,b as _,c as I,u as h}from"./outputWidgets.a6c14bb0.js";import{t as w,o as x}from"./icons.3498a6ac.js";import{a as S}from"./asyncComputed.bae8b581.js";import"./router.ad341272.js";import{T as s}from"./tables.e44da42b.js";import"./index.8f853c5b.js";import{C as v}from"./CrudView.c6255cb7.js";import{n as i}from"./string.450f7458.js";import"./FormItem.3743dec7.js";import"./hasIn.31cf4469.js";import"./record.de8591a8.js";import"./pubsub.d39f9ac5.js";import"./index.cf4c23b9.js";import"./Paragraph.b637aabd.js";import"./Base.68876783.js";import"./Form.feb47a45.js";import"./Modal.35fb246f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.429d1e54.js";import"./url.eb66f4da.js";import"./index.3ee9aef2.js";import"./Title.3ce337aa.js";import"./Text.31581685.js";import"./index.b3679757.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="204208ca-421b-43d5-93ab-6ef6b8020f8f",o._sentryDebugIdIdentifier="sentry-dbid-204208ca-421b-43d5-93ab-6ef6b8020f8f")}catch{}})();const $=g({__name:"Tables",setup(o){const a=C(),t=T().params.projectId,{loading:m,result:d,refetch:p}=S(()=>s.list(t)),c=async e=>{const r=await s.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=()=>{a.push({name:"sql",params:{projectId:t}})},u=k(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:w,label:"Edit Table",onClick({key:y}){a.push({name:"tableEditor",params:{tableId:y,projectId:t}})}},{icon:x,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),p()}}]}]})))!=null?r:[]}}),f=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),I(v,{"entity-name":"table",loading:h(m),"docs-path":"tables/overview",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:u.value,fields:f,"create-button-text":"Create Table","secondary-button-text":"Run SQL",onCreate:c,onSecondaryClick:b},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Tables.a297f63b.js.map
