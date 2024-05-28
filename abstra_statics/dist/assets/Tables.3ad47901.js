import{C as T}from"./CrudView.f2babfb3.js";import{a as _}from"./asyncComputed.7e77424d.js";import{n as i}from"./string.0198203e.js";import{G as k}from"./PhPencil.vue.5cf74703.js";import{d as h,eM as w,eG as I,D as x,b as S,c as D,w as l,u as m,eS as N,f as E,au as v,bI as B}from"./outputWidgets.7aa0f858.js";import"./router.0980c5a8.js";import{T as d}from"./tables.e99d8737.js";import"./index.00e349f6.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e91283d6.js";import"./BookOutlined.15a78ea7.js";import"./url.7852244e.js";import"./Paragraph.90e96315.js";import"./Base.646c79a8.js";import"./Form.62fee2d9.js";import"./hasIn.b37c452b.js";import"./Modal.551f5bca.js";import"./index.7d2f58ee.js";import"./Title.024e8dc5.js";import"./Text.ebdbaf90.js";import"./index.bc93e816.js";import"./popupNotifcation.043c8115.js";import"./record.6f82be67.js";import"./pubsub.ebfbeb7d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="e21913d4-9657-467a-9021-6065d5203ea3",o._sentryDebugIdIdentifier="sentry-dbid-e21913d4-9657-467a-9021-6065d5203ea3")}catch{}})();const oe=h({__name:"Tables",setup(o){const a=w(),t=I().params.projectId,{loading:c,result:u,refetch:b}=_(()=>d.list(t)),f=async e=>{const r=await d.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:N,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(S(),D(T,{"entity-name":"table",loading:m(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[E(m(B),{onClick:s},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{oe as default};
//# sourceMappingURL=Tables.3ad47901.js.map
