import{d as f,eB as b,eA as C,H as g,b as _,c as I,u as h}from"./outputWidgets.25aedb6c.js";import{b as w}from"./index.5fe21fd3.js";import"./router.32a42d3e.js";import{C as i}from"./connector.ae44cdaf.js";import{a as k}from"./asyncComputed.df165b68.js";import{H as x,i as E}from"./icons.75a26e06.js";import{C as D}from"./CrudView.1a3af7a4.js";import"./index.cf4c23b9.js";import"./record.dbf7e2bc.js";import"./pubsub.9dd42f99.js";import"./Form.f75e8569.js";import"./hasIn.bba14f06.js";import"./popupNotifcation.79ec6380.js";import"./Paragraph.d2ed1437.js";import"./Base.c8372259.js";import"./Typography.1bd4960c.js";import"./Modal.1f1faf04.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f1c84ad8.js";import"./url.9e9b125e.js";import"./index.4173d240.js";import"./Title.7d9e3a42.js";import"./Text.1c2b46e0.js";import"./index.39e488f3.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="0a20a78d-ce2e-4d3a-af15-aa5ab90d4c92",o._sentryDebugIdIdentifier="sentry-dbid-0a20a78d-ce2e-4d3a-af15-aa5ab90d4c92")}catch{}})();const W=f({__name:"Connectors",setup(o){const a=b(),r=C(),c=a.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(w.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:d,refetch:l}=k(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:x,label:"Edit",onClick({key:y}){r.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),l()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),I(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Connectors.b2ef52ba.js.map
