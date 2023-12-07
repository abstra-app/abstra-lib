import{d as b,eB as f,eA as C,G as g,b as _,c as I,u as w}from"./outputWidgets.84fd06fb.js";import{b as h}from"./index.0bfee40a.js";import"./router.a59cab44.js";import{C as i}from"./connector.c72f2869.js";import{a as k}from"./asyncComputed.da204aa5.js";import{e as x,g as E}from"./icons.3869c437.js";import{C as D}from"./CrudView.500d5f8a.js";import"./record.f0008bb4.js";import"./pubsub.8883f68b.js";import"./gateway.82cdc40d.js";import"./Base.67ffff63.js";import"./transButton.64565967.js";import"./Text.9dbcc31d.js";import"./Title.564982df.js";import"./index.a606b6d8.js";import"./url.53969469.js";import"./index.6b6af4b4.js";import"./index.02fdeca3.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="27c94f7b-071b-471b-a575-1902104d7352",o._sentryDebugIdIdentifier="sentry-dbid-27c94f7b-071b-471b-a575-1902104d7352")}catch{}})();const L=b({__name:"Connectors",setup(o){const r=f(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=k(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),I(D,{"entity-name":"connector",loading:w(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{L as default};
//# sourceMappingURL=Connectors.a95f0340.js.map
