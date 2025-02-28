import{C as g}from"./CrudView.1cb15cb0.js";import{a as _}from"./ant-design.8057bbd7.js";import{a as k}from"./asyncComputed.542df48a.js";import{n as i}from"./string.a96ed1b2.js";import{G as C}from"./PhPencil.vue.014b2bc1.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.ffad9669.js";import"./gateway.7f468751.js";import{T as m}from"./tables.543c81f4.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.ad7386c0.js";import"./router.dc4ad174.js";import"./Badge.62b34e33.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ea29b734.js";import"./BookOutlined.99e6ce1c.js";import"./url.d8e49ad5.js";import"./PhDotsThreeVertical.vue.a8407267.js";import"./index.7e14794e.js";import"./index.7c21058f.js";import"./popupNotifcation.4d6e3c64.js";import"./record.94e1d052.js";import"./TabPane.ac7c9721.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="91c97783-5f49-4d38-a6e8-b9fb789d8814",a._sentryDebugIdIdentifier="sentry-dbid-91c97783-5f49-4d38-a6e8-b9fb789d8814")}catch{}})();const Z=T({__name:"Tables",setup(a){const o=w(),t=h().params.projectId,{loading:c,result:p,refetch:u}=k(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(c),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:y,"create-button-text":"Create Table",create:f},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.678eaa5a.js.map
