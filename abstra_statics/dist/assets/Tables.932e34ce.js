import{d as y,eA as g,eB as C,G as T,b as _,c as k,u as I}from"./outputWidgets.49a82d72.js";import{u as w,o as h}from"./icons.2150c8c5.js";import{a as x}from"./asyncComputed.eabe06e7.js";import"./router.a6168245.js";import{T as s}from"./tables.74bc7b25.js";import"./index.21de586b.js";import{C as D}from"./CrudView.af71ec23.js";import{n as i}from"./string.155450f0.js";import"./FormItem.e4d1b0b2.js";import"./hasIn.fa4a0362.js";import"./index.5029967c.js";import"./record.ddefb071.js";import"./pubsub.6877ebe1.js";import"./index.cf4c23b9.js";import"./Title.d0eedb84.js";import"./Text.183f0e18.js";import"./Form.5245e582.js";import"./Modal.e7dfdcd9.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.9e950d61.js";import"./url.58ce58bc.js";import"./index.99c9b8c6.js";import"./index.8af0bb95.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="c9aec429-5bd9-4097-8f94-fbf304827def",a._sentryDebugIdIdentifier="sentry-dbid-c9aec429-5bd9-4097-8f94-fbf304827def")}catch{}})();const Y=y({__name:"Tables",setup(a){const o=g(),t=C().params.projectId,{loading:m,result:d,refetch:c}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=T(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),c()}}]}]})))!=null?r:[]}}),u=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),k(D,{"entity-name":"table",loading:I(m),"docs-path":"tables/overview",title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:u,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Tables.932e34ce.js.map
