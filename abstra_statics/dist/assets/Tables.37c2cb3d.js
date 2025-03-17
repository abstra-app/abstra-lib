import{C as g}from"./CrudView.96a91179.js";import{a as _}from"./ant-design.86f31cb9.js";import{a as k}from"./asyncComputed.d727f45f.js";import{n as i}from"./string.f3bdc3d2.js";import{G as C}from"./PhPencil.vue.19f72bc6.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.af5935c5.js";import"./gateway.080706ea.js";import{T as m}from"./tables.cbcf274c.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.664967de.js";import"./router.d78f9794.js";import"./Badge.698eb2df.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0102844c.js";import"./BookOutlined.dc21b6f8.js";import"./url.6ea417ff.js";import"./PhDotsThreeVertical.vue.25910ae8.js";import"./index.68bbd184.js";import"./index.327f331f.js";import"./popupNotifcation.d7845d1b.js";import"./record.f7d8f659.js";import"./TabPane.1ece305b.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="f7eb2d9d-be1f-43e1-84e1-71175a9d1475",a._sentryDebugIdIdentifier="sentry-dbid-f7eb2d9d-be1f-43e1-84e1-71175a9d1475")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:c,result:p,refetch:u}=k(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:y,"create-button-text":"Create Table",create:f},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.37c2cb3d.js.map
