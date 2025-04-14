import{C as g}from"./CrudView.8ae81be5.js";import{a as _}from"./ant-design.9bfa2fc3.js";import{a as k}from"./asyncComputed.fb9b9eb6.js";import{n as i}from"./string.1fa787b5.js";import{G as C}from"./PhPencil.vue.2e787385.js";import{d as T,eF as w,ec as h,f as I,o as x,Y as E,b as l,u as D,aS as N,eq as S}from"./index.da417b99.js";import"./gateway.a4d537f1.js";import{T as m}from"./tables.54d1f89b.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.0da46d2c.js";import"./router.769dc5e1.js";import"./Badge.21841776.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.840ac515.js";import"./BookOutlined.c7f79ca1.js";import"./url.330ee082.js";import"./PhDotsThreeVertical.vue.f7c79090.js";import"./index.5f4f5a16.js";import"./index.92e66df2.js";import"./popupNotifcation.5b07742c.js";import"./record.97ca3951.js";import"./TabPane.65204d1a.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="4efc7b2d-7164-4c79-a6a0-ae13df058e17",a._sentryDebugIdIdentifier="sentry-dbid-4efc7b2d-7164-4c79-a6a0-ae13df058e17")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:c,result:p,refetch:u}=k(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:y,"create-button-text":"Create Table",create:f},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.b3090a89.js.map
