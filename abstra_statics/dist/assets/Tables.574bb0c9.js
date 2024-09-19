import{C as T}from"./CrudView.9bf6aa7a.js";import{a as _}from"./asyncComputed.34109a20.js";import{n as i}from"./string.248b53d0.js";import{G as k}from"./PhPencil.vue.21ff9d78.js";import{d as w,eq as h,ed as I,f as x,c as N,w as l,u as c,o as D,b as E,aF as S,bP as q,er as v}from"./vue-router.4fba0dae.js";import"./gateway.f8e28908.js";import{T as m}from"./tables.3b91993c.js";import{a as A}from"./ant-design.37646e5d.js";import"./router.a89a88ef.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.08b61b5c.js";import"./BookOutlined.ed6b94cc.js";import"./url.f947dc74.js";import"./PhDotsThreeVertical.vue.c4732760.js";import"./index.f0a0e524.js";import"./popupNotifcation.dafc05db.js";import"./record.72e4345c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="75571e11-fcbf-46ea-bebc-12c48bcf49aa",o._sentryDebugIdIdentifier="sentry-dbid-75571e11-fcbf-46ea-bebc-12c48bcf49aa")}catch{}})();const X=w({__name:"Tables",setup(o){const t=h(),a=I().params.projectId,{loading:u,result:p,refetch:b}=_(()=>m.list(a)),f=async e=>{const r=await m.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},y=()=>{t.push({name:"sql",params:{projectId:a}})},g=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:s}){t.push({name:"tableEditor",params:{tableId:s,projectId:a}})}},{icon:v,label:"Delete",dangerous:!0,async onClick(){!await A("Are you sure you want to delete this table and all its data?")||(await n.delete(a,n.id),b())}}]}]})))!=null?r:[]}}),C=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(D(),N(T,{"entity-name":"table",loading:c(u),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:g.value,fields:C,"create-button-text":"Create Table",create:f},{more:l(()=>[E(c(q),{onClick:y},{default:l(()=>[S("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Tables.574bb0c9.js.map
