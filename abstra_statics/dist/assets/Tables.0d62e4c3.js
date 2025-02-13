import{C as g}from"./CrudView.81ab71a6.js";import{a as _}from"./ant-design.72d4f11b.js";import{a as k}from"./asyncComputed.4467697c.js";import{n as i}from"./string.42378387.js";import{G as C}from"./PhPencil.vue.bb3ccc28.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.b466b20d.js";import"./gateway.973a0055.js";import{T as m}from"./tables.1fa225bd.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.61f8e193.js";import"./router.3cd4b4c4.js";import"./Badge.4eadbb30.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.47b5b5cb.js";import"./BookOutlined.948f0a8b.js";import"./url.0fe255f2.js";import"./PhDotsThreeVertical.vue.d63caaa3.js";import"./index.a02e478f.js";import"./index.12405f10.js";import"./popupNotifcation.d1201e83.js";import"./record.fd6fbc29.js";import"./TabPane.83921cd6.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="7d66143c-0fc7-41c7-b855-0d059a53ab63",a._sentryDebugIdIdentifier="sentry-dbid-7d66143c-0fc7-41c7-b855-0d059a53ab63")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:c,result:p,refetch:u}=k(()=>m.list(t)),b=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},f=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:f.value,fields:y,"create-button-text":"Create Table",create:b},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.0d62e4c3.js.map
