import{C as T}from"./CrudView.3b429544.js";import{a as _}from"./asyncComputed.fed46f8e.js";import{n as i}from"./string.6ce11571.js";import{G as k}from"./PhPencil.vue.b72f10d6.js";import{d as h,eH as w,eu as I,f as x,c as N,w as l,u as m,eI as S,o as D,b as E,ax as v,bL as B}from"./vue-router.de8f207b.js";import"./gateway.ae1282fa.js";import{T as c}from"./tables.e96ebb00.js";import"./router.c92212f4.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e7c20358.js";import"./BookOutlined.d21cf2e0.js";import"./url.ec552cf2.js";import"./PhDotsThree.vue.4e44f51d.js";import"./index.f200267f.js";import"./index.169daad3.js";import"./popupNotifcation.b1381938.js";import"./record.bcdcc1d8.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="b5165e83-fde3-4547-9328-a680043bbc19",o._sentryDebugIdIdentifier="sentry-dbid-b5165e83-fde3-4547-9328-a680043bbc19")}catch{}})();const W=h({__name:"Tables",setup(o){const a=w(),t=I().params.projectId,{loading:p,result:u,refetch:b}=_(()=>c.list(t)),f=async e=>{const r=await c.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(D(),N(T,{"entity-name":"table",loading:m(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[E(m(B),{onClick:s},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Tables.dec6b58c.js.map
