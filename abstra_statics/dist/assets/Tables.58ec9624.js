import{C as T}from"./CrudView.90fb2759.js";import{a as _}from"./asyncComputed.ef74e7ff.js";import{n as i}from"./string.85518bbc.js";import{G as k}from"./PhPencil.vue.1b48618c.js";import{d as h,f7 as w,f1 as I,y as x,b as N,c as S,w as l,u as m,fd as D,f as E,am as v,bF as B}from"./outputWidgets.cc9f46e3.js";import"./gateway.6c61dbda.js";import{T as d}from"./tables.7006f999.js";import"./index.3bf26d8a.js";import"./router.e9a880a1.js";import"./Form.b0451770.js";import"./hasIn.6aedfc9c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.682a9441.js";import"./BookOutlined.ee6e3608.js";import"./url.df80ee18.js";import"./Modal.6cc7bb19.js";import"./index.b44b166b.js";import"./popupNotifcation.574e2faa.js";import"./record.aab16969.js";import"./pubsub.d3e41e27.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="2026ed2e-8d2f-4843-9bf5-f3176db00c9a",o._sentryDebugIdIdentifier="sentry-dbid-2026ed2e-8d2f-4843-9bf5-f3176db00c9a")}catch{}})();const Z=h({__name:"Tables",setup(o){const a=w(),t=I().params.projectId,{loading:p,result:u,refetch:f}=_(()=>d.list(t)),b=async e=>{const r=await d.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),f()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(N(),S(T,{"entity-name":"table",loading:m(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:b,onSecondaryClick:s},{more:l(()=>[E(m(B),{onClick:s},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{Z as default};
//# sourceMappingURL=Tables.58ec9624.js.map
