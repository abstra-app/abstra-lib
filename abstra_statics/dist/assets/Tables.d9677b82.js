import{C as T}from"./CrudView.4095bf10.js";import{a as _}from"./asyncComputed.59056117.js";import{n as i}from"./string.441534de.js";import{G as k}from"./PhPencil.vue.9ba9b681.js";import{d as h,eO as w,eB as x,f as I,c as N,w as l,u as d,eP as S,o as D,b as E,ax as B,bL as v}from"./vue-router.70e693dc.js";import"./gateway.90873574.js";import{T as m}from"./tables.f3742496.js";import"./router.84750da7.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.02c0246b.js";import"./BookOutlined.c95635a1.js";import"./url.275f2272.js";import"./PhDotsThree.vue.edb3e473.js";import"./index.5c561278.js";import"./index.22d982fc.js";import"./popupNotifcation.f60dcc22.js";import"./record.4a1b1905.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="45750e8a-d497-4d34-980d-8c1d0c39df2a",o._sentryDebugIdIdentifier="sentry-dbid-45750e8a-d497-4d34-980d-8c1d0c39df2a")}catch{}})();const W=h({__name:"Tables",setup(o){const t=w(),a=x().params.projectId,{loading:p,result:u,refetch:b}=_(()=>m.list(a)),f=async e=>{const r=await m.create(a,e.name);t.push({name:"tableEditor",params:{tableId:r.id,projectId:a}})},s=()=>{t.push({name:"sql",params:{projectId:a}})},y=I(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:a}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:C}){t.push({name:"tableEditor",params:{tableId:C,projectId:a}})}},{icon:S,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(D(),N(T,{"entity-name":"table",loading:d(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:l(()=>[E(d(v),{onClick:s},{default:l(()=>[B("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Tables.d9677b82.js.map
