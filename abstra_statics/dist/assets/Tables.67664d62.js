import{C as g}from"./CrudView.73c4b46b.js";import{a as _}from"./ant-design.cca18837.js";import{a as k}from"./asyncComputed.1ca3dd12.js";import{n as i}from"./string.83779ab9.js";import{G as C}from"./PhPencil.vue.5dee08f1.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.7c703ad7.js";import"./gateway.612a80a3.js";import{T as m}from"./tables.687439a9.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.a9dfa4ba.js";import"./router.4e032044.js";import"./Badge.37609be9.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.05c55a01.js";import"./BookOutlined.270e6879.js";import"./url.a7a2be43.js";import"./PhDotsThreeVertical.vue.04701e1e.js";import"./index.3eb83baf.js";import"./index.15c54538.js";import"./popupNotifcation.75bfda17.js";import"./record.9657a6e4.js";import"./TabPane.4a06eac3.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="b908ab83-12e0-4b88-a542-690866312da7",a._sentryDebugIdIdentifier="sentry-dbid-b908ab83-12e0-4b88-a542-690866312da7")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:c,result:p,refetch:u}=k(()=>m.list(t)),b=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},f=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:f.value,fields:y,"create-button-text":"Create Table",create:b},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.67664d62.js.map
