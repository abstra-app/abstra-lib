import{C as T}from"./CrudView.eac7e710.js";import{a as _}from"./asyncComputed.79783f87.js";import{n as i}from"./string.d437e31e.js";import{G as k}from"./PhPencil.vue.4e2a8ff9.js";import{d as w,eq as h,ed as I,f as x,c as N,w as l,u as d,o as D,b as E,aF as S,bP as q,er as v}from"./vue-router.69927c79.js";import"./gateway.f9464efe.js";import{T as m}from"./tables.1864cc0c.js";import{a as A}from"./ant-design.bf95effb.js";import"./router.9b93c9f2.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e411ad5d.js";import"./BookOutlined.e0e8a4cc.js";import"./url.35d2aa0d.js";import"./PhDotsThreeVertical.vue.cbff453d.js";import"./Badge.353bc515.js";import"./index.b5a1d35d.js";import"./popupNotifcation.e0f791bf.js";import"./record.2ebc220e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="ab8956e0-07dd-4ffe-98dc-a91d18b9f721",o._sentryDebugIdIdentifier="sentry-dbid-ab8956e0-07dd-4ffe-98dc-a91d18b9f721")}catch{}})();const Y=w({__name:"Tables",setup(o){const t=h(),a=I().params.projectId,{loading:p,result:u,refetch:f}=_(()=>m.list(a)),b=async e=>{const r=await m.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},y=()=>{t.push({name:"sql",params:{projectId:a}})},g=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:s}){t.push({name:"tableEditor",params:{tableId:s,projectId:a}})}},{icon:v,label:"Delete",dangerous:!0,async onClick(){!await A("Are you sure you want to delete this table and all its data?")||(await n.delete(a,n.id),f())}}]}]})))!=null?r:[]}}),C=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(D(),N(T,{"entity-name":"table",loading:d(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:g.value,fields:C,"create-button-text":"Create Table",create:b},{more:l(()=>[E(d(q),{onClick:y},{default:l(()=>[S("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Tables.8e84f80b.js.map
