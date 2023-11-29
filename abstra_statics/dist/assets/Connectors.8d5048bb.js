import{d as y,eB as f,eA as C,G as g,b as _,c as I,u as w}from"./outputWidgets.04a14374.js";import{b as h}from"./columns.19f4f485.js";import"./router.4677d467.js";import{C as i}from"./connector.226699ba.js";import{a as k}from"./asyncComputed.53598080.js";import{e as x,g as E}from"./icons.dee9dbe8.js";import{C as D}from"./CrudView.a6f509b7.js";import"./record.b64a41e6.js";import"./pubsub.bb759777.js";import"./gateway.f7d4a0c5.js";import"./Base.0c1843db.js";import"./transButton.772cc0ed.js";import"./Text.84d5ffc7.js";import"./Title.9beb186f.js";import"./index.5d9ba614.js";import"./url.311573c2.js";import"./index.9bdc1e6b.js";import"./index.90d3343e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="6af235d0-18e8-4625-8bbe-92b9e6bb09dc",o._sentryDebugIdIdentifier="sentry-dbid-6af235d0-18e8-4625-8bbe-92b9e6bb09dc")}catch{}})();const L=y({__name:"Connectors",setup(o){const r=f(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:d,refetch:l}=k(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:b}){a.push({name:"connectorEditor",params:{connectorId:b}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),l()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),I(D,{"entity-name":"connector",loading:w(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{L as default};
//# sourceMappingURL=Connectors.8d5048bb.js.map
