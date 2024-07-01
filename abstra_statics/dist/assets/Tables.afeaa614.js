import{C as T}from"./CrudView.6a433a98.js";import{a as _}from"./asyncComputed.c6a51599.js";import{n as l}from"./string.d96a9f97.js";import{G as k}from"./PhPencil.vue.b433ceda.js";import{d as h,eJ as w,eC as I,K as x,b as N,c as S,w as i,u as m,eP as D,f as E,ar as v,bG as B}from"./vue-router.67809441.js";import"./gateway.e3e12758.js";import{T as c}from"./index.faf1d629.js";import"./router.f4c6c59f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.30df229c.js";import"./BookOutlined.aea72855.js";import"./url.bf0f022f.js";import"./index.bad8e5d7.js";import"./index.31900902.js";import"./popupNotifcation.c8631a6a.js";import"./record.79dce665.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="495e232b-2bfa-453b-a6d9-43c7a104f34a",o._sentryDebugIdIdentifier="sentry-dbid-495e232b-2bfa-453b-a6d9-43c7a104f34a")}catch{}})();const U=h({__name:"Tables",setup(o){const t=w(),a=I().params.projectId,{loading:p,result:u,refetch:b}=_(()=>c.list(a)),f=async e=>{const r=await c.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},s=()=>{t.push({name:"sql",params:{projectId:a}})},y=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>l(e,!0),blur:e=>l(e,!1)}];return(e,r)=>(N(),S(T,{"entity-name":"table",loading:m(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:i(()=>[E(m(B),{onClick:s},{default:i(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Tables.afeaa614.js.map
