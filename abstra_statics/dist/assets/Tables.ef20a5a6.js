import{C as g}from"./CrudView.3371c174.js";import{a as _}from"./ant-design.a6589efa.js";import{a as k}from"./asyncComputed.12aeb11c.js";import{n as i}from"./string.2d4a8451.js";import{G as C}from"./PhPencil.vue.620d3c62.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.fa78dbc3.js";import"./gateway.ae4a1089.js";import{T as m}from"./tables.b8cdb7fe.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.daa677fe.js";import"./router.00aed407.js";import"./Badge.fb885d78.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.16ee81e0.js";import"./BookOutlined.86c7be2a.js";import"./url.d89d37ba.js";import"./PhDotsThreeVertical.vue.33bf4e0e.js";import"./index.83e500e3.js";import"./index.112a2a7d.js";import"./popupNotifcation.42d265d2.js";import"./record.0f0973ec.js";import"./TabPane.c63c9eca.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="a84b8c94-735a-4afe-9aed-8130db914b19",a._sentryDebugIdIdentifier="sentry-dbid-a84b8c94-735a-4afe-9aed-8130db914b19")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:c,result:p,refetch:u}=k(()=>m.list(t)),b=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},f=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:f.value,fields:y,"create-button-text":"Create Table",create:b},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.ef20a5a6.js.map
