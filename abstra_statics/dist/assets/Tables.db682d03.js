import{C as T}from"./CrudView.87760a19.js";import{a as _}from"./asyncComputed.7255b4a1.js";import{n as i}from"./string.1f1b592d.js";import{G as k}from"./PhPencil.vue.ccbd58dc.js";import{d as h,f7 as w,f1 as I,y as x,b as N,c as S,w as l,u as m,fd as D,f as E,am as v,bF as B}from"./outputWidgets.8862456b.js";import"./gateway.6e901cf3.js";import{T as c}from"./tables.d5d7e8ee.js";import"./index.9e42efce.js";import"./router.528a8be3.js";import"./Form.2f22a521.js";import"./hasIn.1129d3c0.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.de7c10d5.js";import"./BookOutlined.c8b10c2f.js";import"./url.c1f81b2f.js";import"./Modal.07d748fc.js";import"./index.92b3c624.js";import"./popupNotifcation.896d53ea.js";import"./record.ade9d772.js";import"./pubsub.fa4944b9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="c888dac4-280a-4722-be21-aabcf0a535dc",o._sentryDebugIdIdentifier="sentry-dbid-c888dac4-280a-4722-be21-aabcf0a535dc")}catch{}})();const Z=h({__name:"Tables",setup(o){const t=w(),a=I().params.projectId,{loading:p,result:u,refetch:b}=_(()=>c.list(a)),f=async e=>{const r=await c.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},s=()=>{t.push({name:"sql",params:{projectId:a}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(N(),S(T,{"entity-name":"table",loading:m(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[E(m(B),{onClick:s},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{Z as default};
//# sourceMappingURL=Tables.db682d03.js.map
