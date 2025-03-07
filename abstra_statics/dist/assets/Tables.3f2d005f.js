import{C as g}from"./CrudView.64a03fbc.js";import{a as _}from"./ant-design.3453ec0a.js";import{a as k}from"./asyncComputed.c1d9f8aa.js";import{n as i}from"./string.ac6f8dbb.js";import{G as C}from"./PhPencil.vue.27218d08.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.e5cf75e7.js";import"./gateway.8ba02615.js";import{T as m}from"./tables.9e9cc27b.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.87d5f8b4.js";import"./router.9976b342.js";import"./Badge.5bf0022c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.20b95009.js";import"./BookOutlined.c42e8408.js";import"./url.6f1c20ea.js";import"./PhDotsThreeVertical.vue.e36d910f.js";import"./index.1a36c8a8.js";import"./index.20b369bf.js";import"./popupNotifcation.ba106aab.js";import"./record.6c53cff1.js";import"./TabPane.93fa06c8.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="2ddd1854-40a4-49e9-958c-cc5bc22f1b9a",a._sentryDebugIdIdentifier="sentry-dbid-2ddd1854-40a4-49e9-958c-cc5bc22f1b9a")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:c,result:p,refetch:u}=k(()=>m.list(t)),b=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},f=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:f.value,fields:y,"create-button-text":"Create Table",create:b},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.3f2d005f.js.map
