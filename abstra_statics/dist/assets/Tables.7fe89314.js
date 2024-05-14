import{C as T}from"./CrudView.f5d22758.js";import{a as _}from"./asyncComputed.04f1f53e.js";import{n as i}from"./string.61e81d29.js";import{G as k}from"./PhPencil.vue.1c7fdec6.js";import{d as h,eK as w,eE as I,J as x,b as S,c as E,w as l,u as m,eS as N,f as D,as as v,bG as B}from"./outputWidgets.563f2053.js";import"./router.c34e6dc6.js";import{T as d}from"./tables.255473e6.js";import"./index.0c6c0109.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.9b6e4e0c.js";import"./BookOutlined.4cde4243.js";import"./url.30768ad3.js";import"./Paragraph.91bc3cfe.js";import"./Base.0aec5967.js";import"./Form.b8268a8d.js";import"./hasIn.26907291.js";import"./Modal.21534b9e.js";import"./index.cb9a00aa.js";import"./Title.8c1a7c3d.js";import"./Text.abce6fcf.js";import"./index.8230ce98.js";import"./popupNotifcation.c0b3a138.js";import"./record.040bfab6.js";import"./pubsub.93107509.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="6eae31b7-1169-4bfd-ab83-49763f3c6d83",o._sentryDebugIdIdentifier="sentry-dbid-6eae31b7-1169-4bfd-ab83-49763f3c6d83")}catch{}})();const oe=h({__name:"Tables",setup(o){const a=w(),t=I().params.projectId,{loading:p,result:u,refetch:b}=_(()=>d.list(t)),f=async e=>{const r=await d.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:N,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(S(),E(T,{"entity-name":"table",loading:m(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[D(m(B),{onClick:s},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{oe as default};
//# sourceMappingURL=Tables.7fe89314.js.map
