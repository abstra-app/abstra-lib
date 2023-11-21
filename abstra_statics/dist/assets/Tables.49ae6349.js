import{d as y,eA as g,eB as C,G as T,b as _,c as k,u as I}from"./outputWidgets.4bfd26d4.js";import{e as w,i as h}from"./icons.a2f3d017.js";import{a as x}from"./asyncComputed.962039e2.js";import"./router.ae4cad94.js";import"./columns.4a0c260c.js";import{T as s}from"./tables.01321154.js";import{C as D}from"./CrudView.a6e1961b.js";import{n as i}from"./string.44adb0e9.js";import"./Base.e0f0653c.js";import"./transButton.4fa41b3f.js";import"./Text.451ebbbf.js";import"./Title.7be9864d.js";import"./index.9f4940c9.js";import"./gateway.9498db54.js";import"./activeRecord.063a729a.js";import"./pubsub.1fff0dea.js";import"./url.8e2f7e6d.js";import"./index.a83ac764.js";import"./index.b2e57df4.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="070cdf42-7a36-4947-9be5-6ef498f5fd0a",a._sentryDebugIdIdentifier="sentry-dbid-070cdf42-7a36-4947-9be5-6ef498f5fd0a")}catch{}})();const U=y({__name:"Tables",setup(a){const o=g(),t=C().params.projectId,{loading:m,result:d,refetch:c}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},u=T(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"Actions",align:"right"}],rows:(r=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{text:"Actions",actions:[{icon:w,label:"Edit Table",onClick({key:b}){o.push({name:"tableEditor",params:{tableId:b,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),c()}}]}]})))!=null?r:[]}}),f=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),k(D,{"entity-name":"table",loading:I(m),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:u.value,fields:f,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Tables.49ae6349.js.map
