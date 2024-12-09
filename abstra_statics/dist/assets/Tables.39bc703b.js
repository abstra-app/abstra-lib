import{C}from"./CrudView.9b729966.js";import{a as _}from"./ant-design.1cd6a8bb.js";import{a as k}from"./asyncComputed.0ac38fbf.js";import{n as i}from"./string.4fd72ea7.js";import{G as w}from"./PhPencil.vue.299a8b3a.js";import{d as h,eo as I,ea as x,f as N,o as D,c as E,w as l,u as d,b as S,aG as v,bT as A,ep as B}from"./index.ee12c226.js";import"./gateway.32d98351.js";import{T as m}from"./tables.a6ec71ee.js";import"./router.591be02b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c909c77f.js";import"./BookOutlined.b52582f6.js";import"./url.b6ea79b9.js";import"./PhDotsThreeVertical.vue.0c536287.js";import"./Badge.080ce0bb.js";import"./index.dcf06fdd.js";import"./popupNotifcation.979d530f.js";import"./record.0ff5158f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="5fba7df7-bfd3-4593-ad31-75524e02d192",o._sentryDebugIdIdentifier="sentry-dbid-5fba7df7-bfd3-4593-ad31-75524e02d192")}catch{}})();const Y=h({__name:"Tables",setup(o){const a=I(),t=x().params.projectId,{loading:p,result:u,refetch:f}=k(()=>m.list(t)),b=async e=>{const r=await m.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},y=()=>{a.push({name:"sql",params:{projectId:t}})},g=N(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(s=>({key:s.id,cells:[{type:"link",text:s.name,to:{name:"tableEditor",params:{tableId:s.id,projectId:t}}},{type:"actions",actions:[{icon:w,label:"Edit Table",onClick({key:n}){a.push({name:"tableEditor",params:{tableId:n,projectId:t}})}},{icon:B,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await s.delete(t,s.id),f())}}]}]})))!=null?r:[]}}),T=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(D(),E(C,{"entity-name":"table",loading:d(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:g.value,fields:T,"create-button-text":"Create Table",create:b},{more:l(()=>[S(d(A),{onClick:y},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Tables.39bc703b.js.map
