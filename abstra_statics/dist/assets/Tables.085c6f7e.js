import{d as y,ey as g,ez as k,H as C,b as T,c as _,u as I}from"./outputWidgets.7e22a81c.js";import{e as w,k as h}from"./icons.34c7d70a.js";import{a as x}from"./asyncComputed.4fd79706.js";import"./router.c3fe425c.js";import"./columns.6c6e180f.js";import{T as s}from"./tables.dc3c9546.js";import{C as D}from"./CrudView.d01f2ba5.js";import{n as i}from"./string.72c05bac.js";import"./Title.3610f13f.js";import"./index.3d760a92.js";import"./gateway.47c257b9.js";import"./activeRecord.b1f61263.js";import"./pubsub.c7fb5d16.js";import"./index.f4ac7424.js";import"./Text.ff06de09.js";import"./Form.2a1d75bb.js";import"./url.b9100446.js";import"./index.85ece4a7.js";import"./index.ca0f4f38.js";import"./index.0991827d.js";import"./index.0ffefa2b.js";import"./index.05b49e71.js";import"./index.66e077c3.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="acaa90d0-d423-4355-b246-3c0782729bf3",a._sentryDebugIdIdentifier="sentry-dbid-acaa90d0-d423-4355-b246-3c0782729bf3")}catch{}})();const Z=y({__name:"Tables",setup(a){const o=g(),t=k().params.projectId,{loading:m,result:d,refetch:c}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=C(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"Actions",align:"right"}],rows:(r=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{text:"Actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),c()}}]}]})))!=null?r:[]}}),u=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(T(),_(D,{"entity-name":"table",loading:I(m),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:u,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{Z as default};
//# sourceMappingURL=Tables.085c6f7e.js.map
