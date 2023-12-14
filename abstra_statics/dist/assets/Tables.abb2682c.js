import{d as y,ez as g,eA as C,G as T,b as _,c as k,u as I}from"./outputWidgets.83063e9d.js";import{e as w,g as h}from"./icons.996017df.js";import{a as x}from"./asyncComputed.f2c25133.js";import"./router.3b004330.js";import{T as s,n as i}from"./tables.d6e5dd48.js";import"./index.60785ed8.js";import{C as D}from"./CrudView.efc40074.js";import"./Form.b4d537d1.js";import"./index.e1d1b17f.js";import"./record.e3dbd07d.js";import"./pubsub.76029b33.js";import"./gateway.43de96d6.js";import"./index.49c10c45.js";import"./Title.389f1e86.js";import"./url.6f4f0208.js";import"./index.853ae7ea.js";import"./index.d80dfd86.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="bca65d14-58e3-4b5b-91c3-5a08359c61d4",a._sentryDebugIdIdentifier="sentry-dbid-bca65d14-58e3-4b5b-91c3-5a08359c61d4")}catch{}})();const P=y({__name:"Tables",setup(a){const o=g(),t=C().params.projectId,{loading:m,result:c,refetch:d}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=T(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"Actions",align:"right"}],rows:(r=(e=c.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{text:"Actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),d()}}]}]})))!=null?r:[]}}),u=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),k(D,{"entity-name":"table",loading:I(m),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:u,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Tables.abb2682c.js.map
