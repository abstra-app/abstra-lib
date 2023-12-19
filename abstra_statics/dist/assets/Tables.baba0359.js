import{d as y,eA as g,eB as C,G as T,b as _,c as k,u as I}from"./outputWidgets.38a8ba6d.js";import{o as w,l as h}from"./icons.4ae4a9c5.js";import{a as x}from"./asyncComputed.41d10d8a.js";import"./authorManager.b6ced178.js";import{T as s}from"./tables.07f18c91.js";import"./index.56107642.js";import{C as D}from"./CrudView.ba56980c.js";import{n as i}from"./string.5879301e.js";import"./record.be73334f.js";import"./pubsub.23b14df7.js";import"./gateway.77dbab2f.js";import"./index.cf4c23b9.js";import"./Title.ecd0d354.js";import"./Text.1048f348.js";import"./FormItem.4673de87.js";import"./hasIn.29d88859.js";import"./Form.a08a590c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5eb5c38c.js";import"./router.558347d5.js";import"./index.8b3fd40e.js";import"./url.1a877628.js";import"./index.0c02607f.js";import"./index.91017c21.js";import"./index.df8e3842.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="dba1f575-5998-4098-b61f-122a50d7d07e",a._sentryDebugIdIdentifier="sentry-dbid-dba1f575-5998-4098-b61f-122a50d7d07e")}catch{}})();const $=y({__name:"Tables",setup(a){const o=g(),t=C().params.projectId,{loading:m,result:d,refetch:p}=x(()=>s.list(t)),c=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=T(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"Actions",align:"right"}],rows:(r=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{text:"Actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),p()}}]}]})))!=null?r:[]}}),u=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),k(D,{"entity-name":"table",loading:I(m),"docs-path":"tables/overview",title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:u,"create-button-text":"Create Table",onCreate:c},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Tables.baba0359.js.map
