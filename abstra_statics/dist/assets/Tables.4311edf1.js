import{C as T}from"./CrudView.bdb5ece3.js";import{a as _}from"./asyncComputed.875a004e.js";import{n as i}from"./string.ae746ffb.js";import{G as k}from"./PhPencil.vue.f548aa68.js";import{d as w,eo as h,ea as I,f as x,o as N,c as D,w as l,u as c,b as E,aF as S,bP as v,ep as A}from"./vue-router.7caacf0a.js";import"./gateway.3906a78b.js";import{T as m}from"./tables.579949e1.js";import{a as B}from"./ant-design.b0612a0c.js";import"./router.d3ba1dfc.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.bd536c46.js";import"./BookOutlined.6d576360.js";import"./url.6080e1e1.js";import"./PhDotsThreeVertical.vue.336ef134.js";import"./Badge.464fd250.js";import"./index.cca0f259.js";import"./popupNotifcation.51b14751.js";import"./record.8fabbc49.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="c84bcb07-aa5f-4cc1-ad2f-8853143a71d9",o._sentryDebugIdIdentifier="sentry-dbid-c84bcb07-aa5f-4cc1-ad2f-8853143a71d9")}catch{}})();const Y=w({__name:"Tables",setup(o){const t=h(),a=I().params.projectId,{loading:p,result:u,refetch:b}=_(()=>m.list(a)),f=async e=>{const r=await m.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},y=()=>{t.push({name:"sql",params:{projectId:a}})},g=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:s}){t.push({name:"tableEditor",params:{tableId:s,projectId:a}})}},{icon:A,label:"Delete",dangerous:!0,async onClick(){!await B("Are you sure you want to delete this table and all its data?")||(await n.delete(a,n.id),b())}}]}]})))!=null?r:[]}}),C=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(N(),D(T,{"entity-name":"table",loading:c(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:g.value,fields:C,"create-button-text":"Create Table",create:f},{more:l(()=>[E(c(v),{onClick:y},{default:l(()=>[S("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Tables.4311edf1.js.map
