import{C as _}from"./CrudView.222abd54.js";import{a as T}from"./asyncComputed.9591aaeb.js";import{n as i}from"./string.a0fac23b.js";import{G as k}from"./PhPencil.vue.fc017d2f.js";import{d as h,f8 as w,f3 as I,H as x,b as N,c as S,w as l,u as c,fc as D,f as E,aV as V,b_ as v}from"./outputWidgets.e0cab0b1.js";import"./gateway.ca617e04.js";import{T as m}from"./index.590dc5ab.js";import"./router.9e382b56.js";import"./Form.4814546b.js";import"./index.4fc8d409.js";import"./hasIn.e554bf6c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c5f9bc55.js";import"./BookOutlined.8af1bb55.js";import"./url.f577caba.js";import"./Modal.04ca91b3.js";import"./index.bc71baca.js";import"./popupNotifcation.cb76d4ae.js";import"./record.6d9bb424.js";import"./pubsub.ea2d400f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="bc919b14-16c2-451b-8bcc-4b42a861e7d5",o._sentryDebugIdIdentifier="sentry-dbid-bc919b14-16c2-451b-8bcc-4b42a861e7d5")}catch{}})();const Z=h({__name:"Tables",setup(o){const a=w(),t=I().params.projectId,{loading:p,result:b,refetch:u}=T(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=b.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),u()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(N(),S(_,{"entity-name":"table",loading:c(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[E(c(v),{onClick:s},{default:l(()=>[V("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{Z as default};
//# sourceMappingURL=Tables.20964782.js.map
