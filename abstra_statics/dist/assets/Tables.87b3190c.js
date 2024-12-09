import{C}from"./CrudView.c43806e6.js";import{a as _}from"./ant-design.71c7985c.js";import{a as k}from"./asyncComputed.4a020410.js";import{n as i}from"./string.204ed19d.js";import{G as w}from"./PhPencil.vue.7ba4efc2.js";import{d as h,eo as I,ea as x,f as N,o as D,c as E,w as l,u as c,b as S,aG as v,bT as A,ep as B}from"./index.8e6956bf.js";import"./gateway.c86527a2.js";import{T as d}from"./tables.81df3871.js";import"./router.afdce2d7.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.18fad650.js";import"./BookOutlined.0651da25.js";import"./url.d3e72b06.js";import"./PhDotsThreeVertical.vue.f43ecf6e.js";import"./Badge.e2cf8e2c.js";import"./index.00cc798f.js";import"./popupNotifcation.7713ed40.js";import"./record.8e84f05f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="e4700a51-fcbf-434e-92ec-cb35e903ad9d",o._sentryDebugIdIdentifier="sentry-dbid-e4700a51-fcbf-434e-92ec-cb35e903ad9d")}catch{}})();const Y=h({__name:"Tables",setup(o){const a=I(),t=x().params.projectId,{loading:p,result:u,refetch:b}=k(()=>d.list(t)),f=async e=>{const r=await d.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},y=()=>{a.push({name:"sql",params:{projectId:t}})},g=N(()=>{var e,r;return{columns:[{title:"Table Name"},{title:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(s=>({key:s.id,cells:[{type:"link",text:s.name,to:{name:"tableEditor",params:{tableId:s.id,projectId:t}}},{type:"actions",actions:[{icon:w,label:"Edit Table",onClick({key:n}){a.push({name:"tableEditor",params:{tableId:n,projectId:t}})}},{icon:B,label:"Delete",dangerous:!0,async onClick(){!await _("Are you sure you want to delete this table and all its data?")||(await s.delete(t,s.id),b())}}]}]})))!=null?r:[]}}),T=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(D(),E(C,{"entity-name":"table",loading:c(p),"docs-path":"cloud/tables",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:g.value,fields:T,"create-button-text":"Create Table",create:f},{more:l(()=>[S(c(A),{onClick:y},{default:l(()=>[v("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Tables.87b3190c.js.map
