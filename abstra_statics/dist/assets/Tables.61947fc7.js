import{C as T}from"./CrudView.d8b2dabb.js";import{a as _}from"./asyncComputed.609c9010.js";import{n as i}from"./string.0a8edefa.js";import{G as k}from"./PhPencil.vue.87722fe1.js";import{d as h,eM as w,eG as I,D as x,b as S,c as D,w as l,u as m,eS as N,f as E,au as v,bI as B}from"./outputWidgets.bf420cfc.js";import"./router.ed9d6605.js";import{T as c}from"./tables.6f2d6d44.js";import"./index.4c775618.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.85d86a33.js";import"./BookOutlined.cb06e262.js";import"./url.484d3a29.js";import"./Paragraph.a5b3b15b.js";import"./Base.71da3116.js";import"./Form.047bc96f.js";import"./hasIn.465ef8c2.js";import"./Modal.0e2b0a23.js";import"./index.e4f3e62e.js";import"./Title.e483d25d.js";import"./Text.2b6f61f8.js";import"./index.b7bd6107.js";import"./popupNotifcation.89d9ec45.js";import"./record.80621348.js";import"./pubsub.a5d3a405.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="1c53e2cf-b552-445c-aa11-1b27330cb08f",o._sentryDebugIdIdentifier="sentry-dbid-1c53e2cf-b552-445c-aa11-1b27330cb08f")}catch{}})();const oe=h({__name:"Tables",setup(o){const a=w(),t=I().params.projectId,{loading:d,result:u,refetch:b}=_(()=>c.list(t)),f=async e=>{const r=await c.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:N,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(S(),D(T,{"entity-name":"table",loading:m(d),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[E(m(B),{onClick:s},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{oe as default};
//# sourceMappingURL=Tables.61947fc7.js.map
