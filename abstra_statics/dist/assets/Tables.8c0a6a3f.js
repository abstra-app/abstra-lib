import{d as y,eA as g,eB as C,G as T,b as _,c as k,u as I}from"./outputWidgets.9950002f.js";import{e as w,g as h}from"./icons.569fc936.js";import{a as x}from"./asyncComputed.dd93214c.js";import"./router.0739d4c1.js";import{T as s,n as i}from"./tables.7d815f84.js";import"./index.cdb83fce.js";import{C as D}from"./CrudView.7e0f0093.js";import"./Base.0185167f.js";import"./transButton.e0c01097.js";import"./Text.7adc7978.js";import"./Title.929a8d22.js";import"./index.6590e753.js";import"./record.971a3a14.js";import"./pubsub.e4d3c2ae.js";import"./gateway.087bdcc3.js";import"./url.01b0f0d2.js";import"./index.216dbdab.js";import"./index.17d8c1dc.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="c04312f0-abd8-4423-9e53-1b26a0335538",a._sentryDebugIdIdentifier="sentry-dbid-c04312f0-abd8-4423-9e53-1b26a0335538")}catch{}})();const Q=y({__name:"Tables",setup(a){const o=g(),t=C().params.projectId,{loading:m,result:d,refetch:c}=x(()=>s.list(t)),p=async e=>{const r=await s.create(t,e.name);o.push({name:"tableEditor",params:{tableId:r.id,projectId:t}})},b=T(()=>{var e,r;return{columns:[{name:"Table Name"},{name:"Actions",align:"right"}],rows:(r=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"tableEditor",params:{tableId:n.id,projectId:t}}},{text:"Actions",actions:[{icon:w,label:"Edit Table",onClick({key:f}){o.push({name:"tableEditor",params:{tableId:f,projectId:t}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(t,n.id),c()}}]}]})))!=null?r:[]}}),u=[{key:"name",label:"Table name",type:"text",format:e=>i(e,!0),blur:e=>i(e,!1)}];return(e,r)=>(_(),k(D,{"entity-name":"table",loading:I(m),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:u,"create-button-text":"Create Table",onCreate:p},null,8,["loading","table"]))}});export{Q as default};
//# sourceMappingURL=Tables.8c0a6a3f.js.map
