import{C as g}from"./CrudView.73b246a5.js";import{a as _}from"./ant-design.062152ca.js";import{a as k}from"./asyncComputed.919e81fb.js";import{n as i}from"./string.29356842.js";import{G as C}from"./PhPencil.vue.03a4e6ee.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.5aecb583.js";import"./gateway.a0446a31.js";import{T as m}from"./tables.c30238b1.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.7081ff38.js";import"./router.187239be.js";import"./Badge.1d490ce7.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.1a4649a6.js";import"./BookOutlined.1b5c2f81.js";import"./url.d1aedda8.js";import"./PhDotsThreeVertical.vue.db9739bb.js";import"./index.71e3aaff.js";import"./index.07e90e85.js";import"./popupNotifcation.a70532ef.js";import"./record.7b9a0c18.js";import"./TabPane.1c765b36.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="f9dab9f1-e17c-4e01-aa54-a5fed6306401",a._sentryDebugIdIdentifier="sentry-dbid-f9dab9f1-e17c-4e01-aa54-a5fed6306401")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:c,result:p,refetch:u}=k(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:y,"create-button-text":"Create Table",create:f},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.58771117.js.map
