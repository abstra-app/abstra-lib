import{d as y,ey as g,ez as C,H as T,b as _,c as k,u as I}from"./outputWidgets.f4de17f7.js";import{e as w,q as h}from"./icons.0f3b4022.js";import{a as x}from"./asyncComputed.fa71fe61.js";import"./router.c9a435eb.js";import"./columns.5e35155a.js";import{T as s}from"./tables.58814a84.js";import{C as D}from"./CrudView.fcf5e700.js";import{n as i}from"./string.ec0cb8cb.js";import"./Title.289b0fc7.js";import"./index.9e25a95e.js";import"./gateway.37954070.js";import"./activeRecord.c929782f.js";import"./pubsub.5aa8c360.js";import"./index.f4ac7424.js";import"./index.1f2284af.js";import"./Form.072610c2.js";import"./url.c4798fbe.js";import"./index.44e2aeda.js";import"./index.18370ef4.js";import"./index.d1e42202.js";import"./index.1b2e7cff.js";import"./index.0ce368d1.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="abdc7432-c476-4c20-b9f4-c21400d44364",a._sentryDebugIdIdentifier="sentry-dbid-abdc7432-c476-4c20-b9f4-c21400d44364")}catch{}})();const Y=y({__name:"Tables",setup(a){const o=g(),t=C().params.projectId,{loading:m,result:c,refetch:d}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=T(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"Actions",align:"right"}],rows:(r=(e=c.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{text:"Actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),d()}}]}]})))!=null?r:[]}}),u=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),k(D,{"entity-name":"table",loading:I(m),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:u,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Tables.5d859339.js.map
