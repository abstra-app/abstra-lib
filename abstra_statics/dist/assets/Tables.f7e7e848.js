import{C as T}from"./CrudView.b54f8919.js";import{a as _}from"./asyncComputed.7c597b8d.js";import{n as l}from"./string.1e2cbf23.js";import{G as k}from"./PhPencil.vue.3d2d5fb5.js";import{d as h,eM as w,eA as I,f as x,o as N,c as S,w as i,u as d,eN as D,b as E,ar as v,bG as A}from"./vue-router.3dfb4832.js";import"./gateway.30e7396f.js";import{T as c}from"./tables.413eb558.js";import"./router.c56069e1.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.16f1fc31.js";import"./BookOutlined.809ab9b2.js";import"./url.16f7c68b.js";import"./index.c04a2fe8.js";import"./index.9265b839.js";import"./popupNotifcation.07d009fa.js";import"./record.a0ec50e9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="21cb00cb-8040-4e4d-aded-2941de9da389",o._sentryDebugIdIdentifier="sentry-dbid-21cb00cb-8040-4e4d-aded-2941de9da389")}catch{}})();const U=h({__name:"Tables",setup(o){const t=w(),a=I().params.projectId,{loading:p,result:u,refetch:b}=_(()=>c.list(a)),f=async e=>{const r=await c.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},s=()=>{t.push({name:"sql",params:{projectId:a}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>l(e,!0),blur:e=>l(e,!1)}];return(e,r)=>(N(),S(T,{"entity-name":"table",loading:d(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:i(()=>[E(d(A),{onClick:s},{default:i(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Tables.f7e7e848.js.map
