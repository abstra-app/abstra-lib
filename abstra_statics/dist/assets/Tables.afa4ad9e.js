import{C as g}from"./CrudView.c74056d2.js";import{a as _}from"./ant-design.a3fa25dc.js";import{a as k}from"./asyncComputed.0a23ae67.js";import{n as i}from"./string.e1f81484.js";import{G as C}from"./PhPencil.vue.76b1de62.js";import{d as T,eF as w,ec as h,f as I,o as x,Y as E,b as l,u as D,aS as N,eq as S}from"./index.980da6b3.js";import"./gateway.5f4db8f8.js";import{T as m}from"./tables.ad294145.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.5a4f170d.js";import"./router.f27223eb.js";import"./Badge.8f347a42.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.acf242ba.js";import"./BookOutlined.7d4ce61a.js";import"./url.dba97c13.js";import"./PhDotsThreeVertical.vue.f6f2f29a.js";import"./index.af6481fc.js";import"./index.bf1417af.js";import"./popupNotifcation.3768cea6.js";import"./record.24c30899.js";import"./TabPane.bed663b0.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="4ba60b6a-3ad0-4b9c-ab1c-11034f7f49a0",a._sentryDebugIdIdentifier="sentry-dbid-4ba60b6a-3ad0-4b9c-ab1c-11034f7f49a0")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:d,result:p,refetch:u}=k(()=>m.list(t)),b=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},f=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(d),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:f.value,fields:y,"create-button-text":"Create Table",create:b},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.afa4ad9e.js.map
