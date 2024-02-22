import{d as T,eA as _,eB as k,H as w,b as h,c as I,w as i,u as l,f as x,ar as N,bV as S}from"./outputWidgets.8ec48dfb.js";import{H as v,i as D}from"./icons.8af878db.js";import{a as E}from"./asyncComputed.651931ab.js";import"./router.de744989.js";import{T as m}from"./tables.f75f07a9.js";import"./index.32a003ef.js";import{C as B}from"./CrudView.9e27ceef.js";import{n as d}from"./string.122d8801.js";import"./Form.1143d94a.js";import"./hasIn.3dcfb997.js";import"./record.15a0e029.js";import"./pubsub.3b8564a9.js";import"./index.cf4c23b9.js";import"./Paragraph.8b1783da.js";import"./Base.4b2bec2b.js";import"./Typography.9f380cec.js";import"./Modal.01099ac5.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d7522bf5.js";import"./url.e42a6f45.js";import"./index.bde9c8ce.js";import"./Title.c2f8fe08.js";import"./Text.b8bb224a.js";import"./index.76a070fc.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="0620a00e-db59-472d-9a1d-e401c431fb7b",o._sentryDebugIdIdentifier="sentry-dbid-0620a00e-db59-472d-9a1d-e401c431fb7b")}catch{}})();const oe=T({__name:"Tables",setup(o){const a=_(),t=k().params.projectId,{loading:p,result:b,refetch:u}=E(()=>m.list(t)),f=async e=>{const r=await m.create(t,e.name);a.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},s=()=>{a.push({name:"sql",params:{projectId:t}})},y=w(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=b.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:v,label:"Edit Table",onClick({key:C}){a.push({name:"tableEditor",params:{tableId:C,projectId:t}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),u()}}]}]})))!=null?r:[]}}),g=[{key:"name",label:"Table name",type:"text",format:e=>d(e,!0),blur:e=>d(e,!1)}];return(e,r)=>(h(),I(B,{"entity-name":"table",loading:l(p),"docs-path":"tables/overview",title:"Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:y.value,fields:g,"create-button-text":"Create Table",onCreate:f,onSecondaryClick:s},{more:i(()=>[x(l(S),{onClick:s},{default:i(()=>[N("Run SQL")]),_:1})]),_:1},8,["loading","table"]))}});export{oe as default};
//# sourceMappingURL=Tables.9ddf7c06.js.map
