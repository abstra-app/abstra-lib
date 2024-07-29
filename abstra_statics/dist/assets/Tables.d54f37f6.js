import{C as T}from"./CrudView.de06ef16.js";import{a as _}from"./asyncComputed.dbc17028.js";import{n as i}from"./string.6ff93c99.js";import{G as k}from"./PhPencil.vue.32f711dd.js";import{d as h,eH as w,eu as I,f as x,c as N,w as l,u as c,eI as S,o as D,b as E,ax as v,bL as B}from"./vue-router.88367c7f.js";import"./gateway.ff7a4ea8.js";import{T as m}from"./tables.fb71fc22.js";import"./router.b35adee2.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.fd4c4a5f.js";import"./BookOutlined.a54c8b6e.js";import"./url.39c88540.js";import"./PhDotsThree.vue.80bf175a.js";import"./index.bc13f82a.js";import"./index.c2e1b680.js";import"./popupNotifcation.229fc1a8.js";import"./record.961e868a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="c646b125-a3a1-47c0-9fd8-d55071cc0276",o._sentryDebugIdIdentifier="sentry-dbid-c646b125-a3a1-47c0-9fd8-d55071cc0276")}catch{}})();const W=h({__name:"Tables",setup(o){const t=w(),a=I().params.projectId,{loading:p,result:u,refetch:b}=_(()=>m.list(a)),f=async e=>{const r=await m.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},s=()=>{t.push({name:"sql",params:{projectId:a}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(D(),N(T,{"entity-name":"table",loading:c(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[E(c(B),{onClick:s},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Tables.d54f37f6.js.map
