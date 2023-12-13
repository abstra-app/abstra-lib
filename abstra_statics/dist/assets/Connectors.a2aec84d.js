import{d as f,eA as b,ez as C,G as g,b as _,c as I,u as w}from"./outputWidgets.723dbd35.js";import{b as h}from"./index.f80aedcf.js";import"./router.c09623bf.js";import{C as s}from"./connector.91c1ab6a.js";import{a as k}from"./asyncComputed.6087fd05.js";import{e as x,g as E}from"./icons.d199659e.js";import{C as D}from"./CrudView.ca2cf6ee.js";import"./record.c3c42720.js";import"./pubsub.97441533.js";import"./gateway.ed2ccaa3.js";import"./Form.71a7af16.js";import"./index.b41dfd0a.js";import"./index.d0473694.js";import"./Title.ad9727d9.js";import"./url.c8598ea1.js";import"./index.4913d787.js";import"./index.f91ebf4c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="e6dcc387-abf7-40cb-aaea-7d9a2e615ad5",o._sentryDebugIdIdentifier="sentry-dbid-e6dcc387-abf7-40cb-aaea-7d9a2e615ad5")}catch{}})();const K=f({__name:"Connectors",setup(o){const a=b(),r=C(),c=a.params.projectId;async function i(e){const t=await s.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const d=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:p,result:l,refetch:m}=k(()=>s.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:y}){r.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),m()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),I(D,{"entity-name":"connector",loading:w(p),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:d,"create-button-text":"Create connector",onCreate:i},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Connectors.a2aec84d.js.map
