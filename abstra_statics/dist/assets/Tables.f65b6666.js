import{C as T}from"./CrudView.f04f853e.js";import{a as _}from"./asyncComputed.95993e52.js";import{n as i}from"./string.b574f1fa.js";import{G as k}from"./PhPencil.vue.50044340.js";import{d as h,eO as w,eB as x,f as I,c as N,w as l,u as c,eP as S,o as D,b as E,ax as B,bL as v}from"./vue-router.78d58ff0.js";import"./gateway.3d93841d.js";import{T as m}from"./tables.aed54935.js";import"./router.ce687edb.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c6ea29d9.js";import"./BookOutlined.238416cb.js";import"./url.f92f4d36.js";import"./PhDotsThree.vue.4c71ca22.js";import"./index.8e2351ec.js";import"./index.e96c19f7.js";import"./popupNotifcation.466d80c0.js";import"./record.6c05e3f5.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="4408452c-bffd-4b47-a5e4-fc6329268d7c",o._sentryDebugIdIdentifier="sentry-dbid-4408452c-bffd-4b47-a5e4-fc6329268d7c")}catch{}})();const W=h({__name:"Tables",setup(o){const a=w(),t=x().params.projectId,{loading:p,result:u,refetch:b}=_(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=I(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(D(),N(T,{"entity-name":"table",loading:c(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[E(c(v),{onClick:s},{default:l(()=>[B("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Tables.f65b6666.js.map
