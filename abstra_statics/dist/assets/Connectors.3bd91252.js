import{d as f,ez as b,ey as C,H as _,b as g,c as I,u as w}from"./outputWidgets.17e2270d.js";import{b as h}from"./columns.1320dbbc.js";import"./router.845058a4.js";import{C as i}from"./connector.f44d561f.js";import{a as k}from"./asyncComputed.c8589796.js";import{e as x,q as E}from"./icons.ae606380.js";import{C as D}from"./CrudView.0a7d7224.js";import"./gateway.deb7dadd.js";import"./activeRecord.1230459a.js";import"./pubsub.52f6192d.js";import"./index.f4ac7424.js";import"./Title.7b6ce571.js";import"./index.4787064b.js";import"./index.23cb8791.js";import"./Form.0e9953f6.js";import"./url.6c73df07.js";import"./index.29151007.js";import"./index.4b3be88e.js";import"./index.cfd05648.js";import"./index.bedec2c6.js";import"./index.34b7172c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="b3ca3fd5-5e68-4e1b-89cd-c84fa14074b9",o._sentryDebugIdIdentifier="sentry-dbid-b3ca3fd5-5e68-4e1b-89cd-c84fa14074b9")}catch{}})();const S=f({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:d,refetch:l}=k(()=>i.list(c)),u=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),l()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),I(D,{"entity-name":"connector",loading:w(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{S as default};
//# sourceMappingURL=Connectors.3bd91252.js.map
