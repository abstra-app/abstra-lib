import{d as b,eB as f,eA as C,G as _,b as g,c as I,u as w}from"./outputWidgets.d96d8339.js";import{b as h}from"./columns.ed2457b8.js";import"./router.68333996.js";import{C as i}from"./connector.63496e9e.js";import{a as k}from"./asyncComputed.b5402712.js";import{e as x,i as E}from"./icons.bad5ea5a.js";import{C as D}from"./CrudView.574d25b2.js";import"./gateway.30331439.js";import"./activeRecord.2be45119.js";import"./pubsub.bf2d764d.js";import"./Base.bcebef10.js";import"./transButton.d2c74eca.js";import"./Text.566a0688.js";import"./Title.77c2e5df.js";import"./index.2d565ddc.js";import"./url.3523cb32.js";import"./index.e157f2bc.js";import"./index.fde70b9c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="80d2e11d-b42c-43d8-8e50-6e273442bcb2",o._sentryDebugIdIdentifier="sentry-dbid-80d2e11d-b42c-43d8-8e50-6e273442bcb2")}catch{}})();const L=b({__name:"Connectors",setup(o){const r=f(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:d,result:m,refetch:l}=k(()=>i.list(c)),u=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=m.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),l()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),I(D,{"entity-name":"connector",loading:w(d),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{L as default};
//# sourceMappingURL=Connectors.6e2b9acd.js.map
