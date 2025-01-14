import{C as g}from"./CrudView.ba6b5174.js";import{a as _}from"./ant-design.9ff19ea6.js";import{a as k}from"./asyncComputed.be98d509.js";import{n as i}from"./string.dca533ee.js";import{G as C}from"./PhPencil.vue.95b382fe.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.a6a7b83e.js";import"./gateway.17d3cf08.js";import{T as m}from"./tables.1cab6cbf.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.74c817e3.js";import"./router.fe855602.js";import"./Badge.38815321.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b374f260.js";import"./BookOutlined.c8edde23.js";import"./url.078190f9.js";import"./PhDotsThreeVertical.vue.9fafa9c0.js";import"./index.8e7db9f8.js";import"./index.1fdfc53d.js";import"./popupNotifcation.725f4ac9.js";import"./record.08a1b386.js";import"./TabPane.3bb968e9.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="7b428488-7e66-4629-9b01-3652dd664298",a._sentryDebugIdIdentifier="sentry-dbid-7b428488-7e66-4629-9b01-3652dd664298")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:c,result:p,refetch:u}=k(()=>m.list(t)),b=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},f=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:f.value,fields:y,"create-button-text":"Create Table",create:b},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.a0e65c56.js.map
