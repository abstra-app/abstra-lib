import{d as y,ey as g,ez as k,H as C,b as T,c as _,u as I}from"./outputWidgets.7bdcec0a.js";import{e as w,k as h}from"./icons.6934ad19.js";import{a as x}from"./asyncComputed.cfb98789.js";import"./router.3986149f.js";import"./columns.6b51fbf2.js";import{T as s}from"./tables.c9858cbf.js";import{C as D}from"./CrudView.82a1bc5a.js";import{n as i}from"./string.0ddb1147.js";import"./Title.9c0d0c5f.js";import"./index.15e46fc6.js";import"./gateway.f622b899.js";import"./activeRecord.84d52553.js";import"./pubsub.c455bec9.js";import"./index.f4ac7424.js";import"./Text.94a8ea41.js";import"./Form.f84b91b7.js";import"./url.5caacc63.js";import"./index.fa2fc691.js";import"./index.125aa6b3.js";import"./index.d2a75d88.js";import"./index.a9a6d5a2.js";import"./index.a2310446.js";import"./index.23129d61.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="067455a8-6d39-4a62-8947-81c11224dd1f",a._sentryDebugIdIdentifier="sentry-dbid-067455a8-6d39-4a62-8947-81c11224dd1f")}catch{}})();const Z=y({__name:"Tables",setup(a){const o=g(),t=k().params.projectId,{loading:m,result:d,refetch:c}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},u=C(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"Actions",align:"right"}],rows:(r=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{text:"Actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),c()}}]}]})))!=null?r:[]}}),b=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(T(),_(D,{"entity-name":"table",loading:I(m),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:u.value,fields:b,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{Z as default};
//# sourceMappingURL=Tables.b14c3c03.js.map
