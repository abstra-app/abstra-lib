import{C as T}from"./CrudView.ef1410b5.js";import{a as _}from"./asyncComputed.7bd05b92.js";import{n as i}from"./string.1336f283.js";import{G as k}from"./PhPencil.vue.2b5abff9.js";import{d as h,f7 as w,f1 as I,y as x,b as N,c as S,w as l,u as m,fd as D,f as E,am as v,bF as B}from"./outputWidgets.1789f8c8.js";import"./gateway.1c21f93b.js";import{T as c}from"./index.9b281827.js";import"./router.21b46f4e.js";import"./Form.8f9fa73b.js";import"./hasIn.d99e5ace.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.8fd5d86e.js";import"./BookOutlined.d2dfaea6.js";import"./url.14e350e0.js";import"./Modal.1346a243.js";import"./index.afabd9f5.js";import"./popupNotifcation.809a9bf1.js";import"./record.cc64da4a.js";import"./pubsub.6b578d09.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="73ba3490-d27a-4f5a-b2c5-1925c234eb93",o._sentryDebugIdIdentifier="sentry-dbid-73ba3490-d27a-4f5a-b2c5-1925c234eb93")}catch{}})();const Y=h({__name:"Tables",setup(o){const t=w(),a=I().params.projectId,{loading:p,result:u,refetch:b}=_(()=>c.list(a)),f=async e=>{const r=await c.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},s=()=>{t.push({name:"sql",params:{projectId:a}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(N(),S(T,{"entity-name":"table",loading:m(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[E(m(B),{onClick:s},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Tables.95b2f813.js.map
