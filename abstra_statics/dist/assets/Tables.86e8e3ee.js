import{d as y,ey as g,ez as C,F as T,b as _,c as k,u as I}from"./outputWidgets.427273b8.js";import{u as w,o as h}from"./icons.6552134e.js";import{a as x}from"./asyncComputed.0c579c2b.js";import"./router.85e945f1.js";import"./jwt-decode.esm.74bd4619.js";import{T as s}from"./tables.49239d27.js";import"./index.f1c1cb83.js";import{C as D}from"./CrudView.2fce1bfb.js";import{n as i}from"./string.d4b61c20.js";import"./FormItem.8e12718f.js";import"./hasIn.9b75da57.js";import"./storage.bc391793.js";import"./index.3d2dc6af.js";import"./record.6362517a.js";import"./pubsub.e079f8e1.js";import"./index.cf4c23b9.js";import"./Title.8e3eb460.js";import"./Text.d8c58083.js";import"./Form.36bc9848.js";import"./Modal.05c87e5d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.3adfc2ec.js";import"./url.6379a791.js";import"./index.7400ec36.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="fea32bde-ab04-4217-95ad-dd5dd336d015",a._sentryDebugIdIdentifier="sentry-dbid-fea32bde-ab04-4217-95ad-dd5dd336d015")}catch{}})();const Z=y({__name:"Tables",setup(a){const o=g(),t=C().params.projectId,{loading:d,result:m,refetch:p}=x(()=>s.list(t)),c=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=T(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=m.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),p()}}]}]})))!=null?r:[]}}),u=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),k(D,{"entity-name":"table",loading:I(d),"docs-path":"tables/overview",title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:u,"create-button-text":"Create Table",onCreate:c},null,8,["loading","table"]))}});export{Z as default};
//# sourceMappingURL=Tables.86e8e3ee.js.map
