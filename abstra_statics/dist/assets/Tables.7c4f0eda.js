import{C as g}from"./CrudView.4f2b02e7.js";import{a as _}from"./ant-design.61ba3bc2.js";import{a as k}from"./asyncComputed.712812a6.js";import{n as i}from"./string.3d7f75ed.js";import{G as C}from"./PhPencil.vue.565dd490.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.c78b0055.js";import"./gateway.1b51fb20.js";import{T as m}from"./tables.050aa3e9.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.524e680e.js";import"./router.e3bee28f.js";import"./Badge.3562fa5b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c3f0cedd.js";import"./BookOutlined.b724d739.js";import"./url.7ae3401b.js";import"./PhDotsThreeVertical.vue.0dee2529.js";import"./index.4919b26e.js";import"./index.87177814.js";import"./popupNotifcation.435b88e0.js";import"./record.a5fa5fdb.js";import"./TabPane.c1b160f0.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="0189a7c0-a59f-4956-b9dc-b3295fc93261",a._sentryDebugIdIdentifier="sentry-dbid-0189a7c0-a59f-4956-b9dc-b3295fc93261")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:d,result:p,refetch:u}=k(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(d),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:y,"create-button-text":"Create Table",create:f},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.7c4f0eda.js.map
