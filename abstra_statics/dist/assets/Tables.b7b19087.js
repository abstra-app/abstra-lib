import{d as y,eA as g,eB as C,G as T,b as _,c as k,u as I}from"./outputWidgets.43a10844.js";import{u as w,o as h}from"./icons.b8f11d3f.js";import{a as x}from"./asyncComputed.a8de6d19.js";import"./authorManager.c51bb24c.js";import{T as s}from"./tables.616e2919.js";import"./index.05bcfc39.js";import{C as D}from"./CrudView.a2b0a2c5.js";import{n as i}from"./string.0ce1e8c0.js";import"./record.7e194615.js";import"./pubsub.3150c359.js";import"./index.cf4c23b9.js";import"./Title.9aa21771.js";import"./Text.3354e3aa.js";import"./FormItem.8f4fe404.js";import"./hasIn.a0c37d44.js";import"./Form.e1a8556a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5deb230d.js";import"./router.5e19a38a.js";import"./index.5048bdd1.js";import"./url.56d7b114.js";import"./index.9124e7c4.js";import"./index.cc255ed7.js";import"./index.fa7907db.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="8ba84efd-1a79-421a-a1c6-bb964b34beb6",a._sentryDebugIdIdentifier="sentry-dbid-8ba84efd-1a79-421a-a1c6-bb964b34beb6")}catch{}})();const Z=y({__name:"Tables",setup(a){const o=g(),t=C().params.projectId,{loading:m,result:d,refetch:c}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=T(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"Actions",align:"right"}],rows:(r=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{text:"Actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),c()}}]}]})))!=null?r:[]}}),u=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),k(D,{"entity-name":"table",loading:I(m),"docs-path":"tables/overview",title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:u,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{Z as default};
//# sourceMappingURL=Tables.b7b19087.js.map
