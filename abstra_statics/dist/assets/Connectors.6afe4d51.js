import{d as b,eB as f,eA as C,G as g,b as _,c as I,u as w}from"./outputWidgets.44a09867.js";import{b as h}from"./index.98cf761b.js";import"./authorManager.406561e5.js";import{C as i}from"./connector.bf272ce7.js";import{a as k}from"./asyncComputed.ca8feacc.js";import{v as x,g as E}from"./icons.01b98633.js";import{C as v}from"./CrudView.d1bfe216.js";import"./index.cf4c23b9.js";import"./record.0114cd31.js";import"./pubsub.34ae9a92.js";import"./gateway.7f6d0dbc.js";import"./Text.99f50980.js";import"./Title.a43de87d.js";import"./FormItem.2b0a230d.js";import"./hasIn.f57609f6.js";import"./Form.a1b95086.js";import"./Modal.14e98cf1.js";import"./router.5925e187.js";import"./index.f53f6439.js";import"./url.71cf45ef.js";import"./index.bdceb8c6.js";import"./index.d8ad33d9.js";import"./index.39653f90.js";import"./index.ac850b0f.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="b4063051-f287-4a81-855e-7cb59a3422b0",o._sentryDebugIdIdentifier="sentry-dbid-b4063051-f287-4a81-855e-7cb59a3422b0")}catch{}})();const X=b({__name:"Connectors",setup(o){const r=f(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=k(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),I(v,{"entity-name":"connector",loading:w(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Connectors.6afe4d51.js.map
