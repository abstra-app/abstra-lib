import{C as g}from"./CrudView.3422d88e.js";import{a as _}from"./ant-design.09940bb5.js";import{a as k}from"./asyncComputed.4e6a0885.js";import{n as i}from"./string.0e6b5153.js";import{G as C}from"./PhPencil.vue.d79f5163.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.b3d93eb2.js";import"./gateway.7e591343.js";import{T as m}from"./tables.cb5e90ff.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.5f7587e1.js";import"./router.c8530583.js";import"./Badge.fcf06645.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c829cc61.js";import"./BookOutlined.235f6734.js";import"./url.f3e0f845.js";import"./PhDotsThreeVertical.vue.729ff780.js";import"./index.b3c6236c.js";import"./index.fcefb1f7.js";import"./popupNotifcation.4e78984c.js";import"./record.d3ff7b3d.js";import"./TabPane.1b0e3643.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="e3f2625d-2e43-4d7b-963e-cad30f323362",a._sentryDebugIdIdentifier="sentry-dbid-e3f2625d-2e43-4d7b-963e-cad30f323362")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:c,result:p,refetch:u}=k(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:y,"create-button-text":"Create Table",create:f},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.6d0fe13a.js.map
