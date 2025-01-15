import{C as g}from"./CrudView.0dff295d.js";import{a as _}from"./ant-design.207f2617.js";import{a as k}from"./asyncComputed.33302c2e.js";import{n as i}from"./string.a56a2ab5.js";import{G as C}from"./PhPencil.vue.98661782.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.04707aff.js";import"./gateway.53d460e8.js";import{T as m}from"./tables.501cf9ac.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.67b9df53.js";import"./router.8b5f5c74.js";import"./Badge.e58a7d81.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.8112050d.js";import"./BookOutlined.64a005d6.js";import"./url.3f14985d.js";import"./PhDotsThreeVertical.vue.8cb109c4.js";import"./index.c287fdbd.js";import"./index.88a036a6.js";import"./popupNotifcation.cd5fdda6.js";import"./record.07044085.js";import"./TabPane.3cb66e51.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="797c968f-ac12-4f9d-a042-66aa400e0061",a._sentryDebugIdIdentifier="sentry-dbid-797c968f-ac12-4f9d-a042-66aa400e0061")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:c,result:p,refetch:u}=k(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:y,"create-button-text":"Create Table",create:f},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.5be207e7.js.map
