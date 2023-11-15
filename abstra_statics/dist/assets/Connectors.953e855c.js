import{d as y,eB as f,eA as C,G as _,b as g,c as I,u as k}from"./outputWidgets.ba81a3ef.js";import{b as w}from"./columns.2c7a1cef.js";import"./router.177e3284.js";import{C as i}from"./connector.4d28f0a7.js";import{a as h}from"./asyncComputed.07af8e5d.js";import{e as x,k as E}from"./icons.7c2025d0.js";import{C as D}from"./CrudView.bb477737.js";import"./gateway.673663d5.js";import"./activeRecord.13581c7e.js";import"./pubsub.289ba836.js";import"./index.cf4c23b9.js";import"./Base.69cdcef5.js";import"./FormItem.8d721992.js";import"./transButton.5784faac.js";import"./Text.e1135566.js";import"./Title.ecf022a9.js";import"./index.621a4b4e.js";import"./url.596dfd3e.js";import"./index.aeb580dd.js";import"./index.a32f071e.js";import"./index.f346daf7.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="74291884-7479-4e12-9b2b-242a80b5d1b3",o._sentryDebugIdIdentifier="sentry-dbid-74291884-7479-4e12-9b2b-242a80b5d1b3")}catch{}})();const S=y({__name:"Connectors",setup(o){const r=f(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(w.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=h(()=>i.list(c)),u=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:b}){a.push({name:"connectorEditor",params:{connectorId:b}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),I(D,{"entity-name":"connector",loading:k(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{S as default};
//# sourceMappingURL=Connectors.953e855c.js.map
