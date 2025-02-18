import{C as g}from"./CrudView.b1fce853.js";import{a as _}from"./ant-design.d228230e.js";import{a as k}from"./asyncComputed.c4b13b6a.js";import{n as i}from"./string.94d2bc3d.js";import{G as C}from"./PhPencil.vue.057e6875.js";import{d as T,eo as w,ea as h,f as I,o as x,Y as E,b as l,u as D,aS as N,ep as S}from"./index.ec1d74da.js";import"./gateway.970c8ed7.js";import{T as m}from"./tables.15737104.js";import{_ as v}from"./TablesTabs.vue_vue_type_script_setup_true_lang.7b88af45.js";import"./router.57e54139.js";import"./Badge.eb3b7487.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6e888134.js";import"./BookOutlined.8b80ccd8.js";import"./url.20223e2a.js";import"./PhDotsThreeVertical.vue.f5426f25.js";import"./index.e06e6261.js";import"./index.6779c4a6.js";import"./popupNotifcation.ee32ceb0.js";import"./record.7c6e7244.js";import"./TabPane.56574bcc.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="31b77251-3a89-4578-a93b-a718aeacfca3",t._sentryDebugIdIdentifier="sentry-dbid-31b77251-3a89-4578-a93b-a718aeacfca3")}catch{}})();const Z=T({__name:"Tables",setup(t){const o=w(),a=h().params.projectId,{loading:d,result:p,refetch:u}=k(()=>m.list(a)),b=async e=>{const r=await m.create(a,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},f=I(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=p.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:C,label:"Edit Table",onClick({key:s}){o.push({name:"tableEditor",params:{tableId:s,projectId:a}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await n.delete(a,n.id),u())}}]}]})))!=null?r:[]}}),y=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(x(),E(N,null,[l(v),l(g,{"entity-name":"table",loading:D(d),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:f.value,fields:y,"create-button-text":"Create Table",create:b},null,8,["loading","table"])],64))}});export{Z as default};
//# sourceMappingURL=Tables.21f4b5e6.js.map
