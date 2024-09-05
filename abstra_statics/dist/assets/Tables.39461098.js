import{C as T}from"./CrudView.2db3b5ad.js";import{a as _}from"./asyncComputed.341490ec.js";import{n as i}from"./string.b705bc56.js";import{G as k}from"./PhPencil.vue.b90015d3.js";import{d as w,eq as h,ed as I,f as x,c as N,w as l,u as d,o as S,b as D,aF as E,bS as q,er as v}from"./vue-router.3ce6ce00.js";import"./gateway.eca95f81.js";import{T as m}from"./tables.961675b7.js";import{a as A}from"./ant-design.30b9831f.js";import"./router.c61fd684.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.3c541b52.js";import"./BookOutlined.e5856534.js";import"./url.359c2d8e.js";import"./PhDotsThreeVertical.vue.f14a669f.js";import"./index.bce6bf08.js";import"./popupNotifcation.34028c2a.js";import"./record.e208104d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="391ded41-25cc-433d-b227-6a554fa1eb8a",o._sentryDebugIdIdentifier="sentry-dbid-391ded41-25cc-433d-b227-6a554fa1eb8a")}catch{}})();const X=w({__name:"Tables",setup(o){const t=h(),a=I().params.projectId,{loading:u,result:p,refetch:b}=_(()=>m.list(a)),f=async e=>{const r=await m.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},y=()=>{t.push({name:"sql",params:{projectId:a}})},g=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:s}){t.push({name:"tableEditor",params:{tableId:s,projectId:a}})}},{icon:v,label:"Delete",dangerous:!0,async onClick(){!await A("Are you sure you want to delete this table and all its data?")||(await n.delete(a,n.id),b())}}]}]})))!=null?r:[]}}),C=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(S(),N(T,{"entity-name":"table",loading:d(u),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:g.value,fields:C,"create-button-text":"Create Table",onCreate:f},{more:l(()=>[D(d(q),{onClick:y},{default:l(()=>[E("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Tables.39461098.js.map
