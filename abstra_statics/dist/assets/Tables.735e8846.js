import{C as T}from"./CrudView.a77d7927.js";import{a as _}from"./asyncComputed.878f25c7.js";import{n as i}from"./string.9badaa4a.js";import{G as k}from"./PhPencil.vue.96d6fc08.js";import{d as h,eH as w,eu as I,f as x,c as N,w as l,u as m,eI as S,o as D,b as E,ax as v,bL as B}from"./vue-router.3bace696.js";import"./gateway.c7a3e9a1.js";import{T as c}from"./tables.36d99bf6.js";import"./router.90582754.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.8e4ec7f2.js";import"./BookOutlined.c2fb0fb3.js";import"./url.7f97d8cd.js";import"./PhDotsThree.vue.b7e8a644.js";import"./index.09167459.js";import"./index.3892882a.js";import"./popupNotifcation.0df7d8b9.js";import"./record.3f2f17ef.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="6225a5a1-7390-4e4b-9730-14f8fa9ea23f",o._sentryDebugIdIdentifier="sentry-dbid-6225a5a1-7390-4e4b-9730-14f8fa9ea23f")}catch{}})();const W=h({__name:"Tables",setup(o){const t=w(),a=I().params.projectId,{loading:p,result:u,refetch:b}=_(()=>c.list(a)),f=async e=>{const r=await c.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},s=()=>{t.push({name:"sql",params:{projectId:a}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(D(),N(T,{"entity-name":"table",loading:m(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[E(m(B),{onClick:s},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Tables.735e8846.js.map
