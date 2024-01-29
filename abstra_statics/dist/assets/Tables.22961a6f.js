import{d as y,ey as g,ez as C,F as T,b as _,c as k,u as I}from"./outputWidgets.c5c8a98e.js";import{u as w,o as h}from"./icons.c36e1142.js";import{a as x}from"./asyncComputed.59067dba.js";import"./router.375da324.js";import"./jwt-decode.esm.74bd4619.js";import{T as s}from"./tables.77a718f6.js";import"./index.f5272de3.js";import{C as D}from"./CrudView.60d474c9.js";import{n as i}from"./string.d6b5a5cc.js";import"./FormItem.f1d468cb.js";import"./hasIn.ed8dd4db.js";import"./storage.8151d531.js";import"./index.f18a6c11.js";import"./record.200ef499.js";import"./pubsub.d6452375.js";import"./index.cf4c23b9.js";import"./Title.331da748.js";import"./Text.66218759.js";import"./Form.bb7cc650.js";import"./Modal.9293f7b0.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.be3f3054.js";import"./url.a19faa39.js";import"./index.0bcc8cc0.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="50dec56c-1784-4cec-91b5-f0ff100e5440",a._sentryDebugIdIdentifier="sentry-dbid-50dec56c-1784-4cec-91b5-f0ff100e5440")}catch{}})();const Z=y({__name:"Tables",setup(a){const o=g(),t=C().params.projectId,{loading:m,result:c,refetch:d}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},u=T(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"",align:"right"}],rows:(r=(e=c.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{type:"actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),d()}}]}]})))!=null?r:[]}}),b=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),k(D,{"entity-name":"table",loading:I(m),"docs-path":"tables/overview",title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:u.value,fields:b,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{Z as default};
//# sourceMappingURL=Tables.22961a6f.js.map
