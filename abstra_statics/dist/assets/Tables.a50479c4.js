import{C as T}from"./CrudView.00a81c21.js";import{a as _}from"./asyncComputed.ccd46ad1.js";import{n as l}from"./string.a468ec7d.js";import{G as k}from"./PhPencil.vue.5346c661.js";import{d as w,eN as h,eB as I,f as x,o as N,c as S,w as i,u as d,eO as D,b as E,aw as B,bL as v}from"./vue-router.59ab4117.js";import"./gateway.33fafe8f.js";import{T as c}from"./tables.f169a4cc.js";import"./router.0edf3255.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a03a6173.js";import"./BookOutlined.8621a474.js";import"./url.18d7bdc6.js";import"./index.f1f8f815.js";import"./index.428fd4e8.js";import"./popupNotifcation.c4513107.js";import"./record.1905335b.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="76e352e4-d80a-41ba-94db-4ea12c1ac8d4",o._sentryDebugIdIdentifier="sentry-dbid-76e352e4-d80a-41ba-94db-4ea12c1ac8d4")}catch{}})();const U=w({__name:"Tables",setup(o){const t=h(),a=I().params.projectId,{loading:p,result:u,refetch:b}=_(()=>c.list(a)),f=async e=>{const r=await c.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},s=()=>{t.push({name:"sql",params:{projectId:a}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>l(e,!0),blur:e=>l(e,!1)}];return(e,r)=>(N(),S(T,{"entity-name":"table",loading:d(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:i(()=>[E(d(v),{onClick:s},{default:i(()=>[B("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Tables.a50479c4.js.map
