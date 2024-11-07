import{C as T}from"./CrudView.0433d32e.js";import{a as _}from"./asyncComputed.d69c6172.js";import{n as i}from"./string.f160c72c.js";import{G as k}from"./PhPencil.vue.179137de.js";import{d as w,eo as h,ea as I,f as x,o as N,c as D,w as l,u as d,b as E,aF as S,bP as v,ep as A}from"./vue-router.a82eee9a.js";import"./gateway.554377b8.js";import{T as m}from"./tables.635fb1e4.js";import{a as B}from"./ant-design.dc1d374c.js";import"./router.9fc045f7.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.72aebfd8.js";import"./BookOutlined.f119600b.js";import"./url.11d64bd6.js";import"./PhDotsThreeVertical.vue.194b390f.js";import"./Badge.7f565671.js";import"./index.b518806a.js";import"./popupNotifcation.34412d68.js";import"./record.3d326602.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="c34584c9-08d6-4f3d-83dd-a9e97f7ee2f7",o._sentryDebugIdIdentifier="sentry-dbid-c34584c9-08d6-4f3d-83dd-a9e97f7ee2f7")}catch{}})();const Y=w({__name:"Tables",setup(o){const a=h(),t=I().params.projectId,{loading:p,result:u,refetch:f}=_(()=>m.list(t)),b=async e=>{const r=await m.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},y=()=>{a.push({name:"sql",params:{projectId:t}})},g=x(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:k,label:"Edit Table",onClick({key:s}){a.push({name:"tableEditor",params:{tableId:s,projectId:t}})}},{icon:A,label:"Delete",dangerous:!0,async onClick(){!await B("Are you sure you want to delete this table and all its data?")||(await n.delete(t,n.id),f())}}]}]})))!=null?r:[]}}),C=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(N(),D(T,{"entity-name":"table",loading:d(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:g.value,fields:C,"create-button-text":"Create Table",create:b},{more:l(()=>[E(d(v),{onClick:y},{default:l(()=>[S("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Tables.53380a99.js.map
