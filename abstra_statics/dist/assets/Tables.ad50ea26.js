import{d as T,eA as _,eB as k,H as w,b as h,c as I,w as i,u as l,f as x,ar as N,bG as S}from"./outputWidgets.fa273483.js";import{H as v,i as D}from"./icons.8e66d1ed.js";import{a as E}from"./asyncComputed.3bfc3665.js";import"./router.d93691ed.js";import{T as d}from"./tables.d3cb3584.js";import"./index.bcef4f25.js";import{C as B}from"./CrudView.b3b73588.js";import{n as m}from"./string.b4a8ce02.js";import"./Form.20c99ca2.js";import"./hasIn.cadc81e7.js";import"./popupNotifcation.f4cd2f02.js";import"./record.1ab10f02.js";import"./pubsub.05b4d18d.js";import"./index.cf4c23b9.js";import"./Paragraph.b5554e2e.js";import"./Base.8bad4dde.js";import"./Typography.7db0e945.js";import"./Modal.bbd459a3.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d6a4af44.js";import"./url.ab660f42.js";import"./index.c5944464.js";import"./Title.eecf740e.js";import"./Text.04e3f6cf.js";import"./index.46d9dbec.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="6a35ffea-40f1-4146-91d2-6dd360d4edd1",o._sentryDebugIdIdentifier="sentry-dbid-6a35ffea-40f1-4146-91d2-6dd360d4edd1")}catch{}})();const re=T({__name:"Tables",setup(o){const a=_(),t=k().params.projectId,{loading:c,result:u,refetch:f}=E(()=>d.list(t)),b=async e=>{const r=await d.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=w(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:v,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),f()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>m(e,!0),blur:e=>m(e,!1)}];return(e,r)=>(h(),I(B,{"entity-name":"table",loading:l(c),"docs-path":"tables/overview",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:b,onSecondaryClick:s},{more:i(()=>[x(l(S),{onClick:s},{default:i(()=>[N("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{re as default};
//# sourceMappingURL=Tables.ad50ea26.js.map
