import{C as g}from"./CrudView.5df74fb6.js";import{a as _}from"./ant-design.0e0cca4b.js";import{a as k}from"./asyncComputed.abd72052.js";import{n as i}from"./string.0a5e8599.js";import{G as C}from"./PhPencil.vue.b70cecb7.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.2124e459.js";import"./gateway.e64f2418.js";import{T as m}from"./tables.f1d48881.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.31fd19da.js";import"./router.b1e3b2e6.js";import"./Badge.77ee3d6b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f25e7488.js";import"./BookOutlined.5dcae57e.js";import"./url.f69aa6a3.js";import"./PhDotsThreeVertical.vue.1a3ac477.js";import"./index.df926ee0.js";import"./index.1fba9f0c.js";import"./popupNotifcation.f65bb2d1.js";import"./record.4a534864.js";import"./TabPane.ebfe6098.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="b057e479-31e2-403b-acdb-18dd7ce961d9",a._sentryDebugIdIdentifier="sentry-dbid-b057e479-31e2-403b-acdb-18dd7ce961d9")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:c,result:p,refetch:u}=k(()=>m.list(t)),b=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},f=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:f.value,fields:y,"create-button-text":"Create Table",create:b},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.c94906e6.js.map
