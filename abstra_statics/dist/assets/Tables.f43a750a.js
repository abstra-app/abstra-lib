import{d as T,eA as _,eB as k,H as w,b as h,c as I,w as i,u as l,f as x,ar as N,bV as S}from"./outputWidgets.01471823.js";import{H as v,i as D}from"./icons.48f5dfba.js";import{a as E}from"./asyncComputed.f635b7ba.js";import"./router.02efbb01.js";import{T as m}from"./tables.e3a9e3b8.js";import"./index.cc750648.js";import{C as B}from"./CrudView.d1d4fd44.js";import{n as c}from"./string.96826c52.js";import"./Form.1ef3946c.js";import"./hasIn.c8a2f44a.js";import"./record.95c9087a.js";import"./pubsub.dfcbe334.js";import"./index.cf4c23b9.js";import"./Paragraph.4c895dde.js";import"./Base.da134e9e.js";import"./Typography.9c2baebf.js";import"./Modal.dc9812f6.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.56aa1d90.js";import"./url.55ddcb67.js";import"./index.067e03ed.js";import"./Title.33ae6b81.js";import"./Text.86524411.js";import"./index.370f71b9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="3f61851a-aa60-4d41-bccd-7ac9509b19e8",o._sentryDebugIdIdentifier="sentry-dbid-3f61851a-aa60-4d41-bccd-7ac9509b19e8")}catch{}})();const oe=T({__name:"Tables",setup(o){const a=_(),t=k().params.projectId,{loading:p,result:u,refetch:b}=E(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=w(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:v,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),b()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>c(e,!0),blur:e=>c(e,!1)}];return(e,r)=>(h(),I(B,{"entity-name":"table",loading:l(p),"docs-path":"tables/overview",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:i(()=>[x(l(S),{onClick:s},{default:i(()=>[N("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{oe as default};
//# sourceMappingURL=Tables.f43a750a.js.map
