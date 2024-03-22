import{d as y,eB as b,eA as C,H as g,b as _,c as I,u as h}from"./outputWidgets.809f1c57.js";import{b as w}from"./index.c651a706.js";import"./router.5b895db7.js";import{C as c}from"./connector.7c96c47c.js";import{a as k}from"./asyncComputed.466c4877.js";import{H as x,i as E}from"./icons.8975fdbd.js";import{C as D}from"./CrudView.4f9d2631.js";import"./index.cf4c23b9.js";import"./record.41a2948e.js";import"./pubsub.67132179.js";import"./Form.023148df.js";import"./hasIn.e1b15717.js";import"./popupNotifcation.0b39d2d3.js";import"./Paragraph.32fc6334.js";import"./Base.4c033746.js";import"./Typography.f29a9c7e.js";import"./Modal.ae5cc76f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a2ae9439.js";import"./url.638cfb3e.js";import"./index.ee508a43.js";import"./Title.f3656269.js";import"./Text.9d2b2621.js";import"./index.48e1252c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="41d2462e-27f7-4f93-b025-b37e4f92f345",o._sentryDebugIdIdentifier="sentry-dbid-41d2462e-27f7-4f93-b025-b37e4f92f345")}catch{}})();const W=y({__name:"Connectors",setup(o){const r=b(),a=C(),i=r.params.projectId;async function s(e){const t=await c.create(i,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(w.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=k(()=>c.list(i)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:x,label:"Edit",onClick({key:f}){a.push({name:"connectorEditor",params:{connectorId:f}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),I(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Connectors.da00cc25.js.map
