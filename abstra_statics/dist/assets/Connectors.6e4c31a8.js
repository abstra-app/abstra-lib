import{d as f,eA as y,ez as C,J as _,b as g,c as I,u as w}from"./outputWidgets.5987cc3b.js";import{b as h}from"./index.d06e6125.js";import"./router.115298bb.js";import{C as i}from"./connector.171baf8f.js";import{a as k}from"./asyncComputed.730f2680.js";import{e as x,q as E}from"./icons.06eae926.js";import{C as D}from"./CrudView.b4d867b7.js";import"./Title.876e7d7d.js";import"./index.c755aadb.js";import"./activeRecord.bafb6282.js";import"./pubsub.0d1e285f.js";import"./gateway.86be4d41.js";import"./index.7b9ba9a3.js";import"./Form.f653de90.js";import"./url.2286ea20.js";import"./index.3c5ed71c.js";import"./index.27a9566e.js";import"./index.b3e59598.js";import"./index.89a3ff81.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="c3916b68-27de-452d-b92d-2abf0f3bbbe4",o._sentryDebugIdIdentifier="sentry-dbid-c3916b68-27de-452d-b92d-2abf0f3bbbe4")}catch{}})();const P=f({__name:"Connectors",setup(o){const r=y(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:d,result:m,refetch:l}=k(()=>i.list(c)),u=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=m.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:b}){a.push({name:"connectorEditor",params:{connectorId:b}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),l()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),I(D,{"entity-name":"connector",loading:w(d),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Connectors.6e4c31a8.js.map
