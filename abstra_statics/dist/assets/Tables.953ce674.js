import{C as T}from"./CrudView.69983f0e.js";import{a as _}from"./asyncComputed.dbecd2e7.js";import{n as l}from"./string.9547d5e6.js";import{G as k}from"./PhPencil.vue.fe9e684c.js";import{d as w,eN as h,eB as I,f as x,o as N,c as S,w as i,u as c,eO as D,b as E,aw as B,bL as v}from"./vue-router.daf730b9.js";import"./gateway.faf99777.js";import{T as m}from"./tables.3c807115.js";import"./router.fad3973f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.bd7e6518.js";import"./BookOutlined.3743d196.js";import"./url.983ca4b1.js";import"./index.a8fe7320.js";import"./index.38f6259e.js";import"./popupNotifcation.6d7fce62.js";import"./record.4629e88e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="31bd33f9-03c8-4703-a0e2-a62cf5a0f811",o._sentryDebugIdIdentifier="sentry-dbid-31bd33f9-03c8-4703-a0e2-a62cf5a0f811")}catch{}})();const U=w({__name:"Tables",setup(o){const t=h(),a=I().params.projectId,{loading:p,result:u,refetch:b}=_(()=>m.list(a)),f=async e=>{const r=await m.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},s=()=>{t.push({name:"sql",params:{projectId:a}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>l(e,!0),blur:e=>l(e,!1)}];return(e,r)=>(N(),S(T,{"entity-name":"table",loading:c(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:i(()=>[E(c(v),{onClick:s},{default:i(()=>[B("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Tables.953ce674.js.map
