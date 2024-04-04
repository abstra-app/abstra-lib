import{d as f,eA as b,eI as C,H as g,b as _,c as I,u as h,eP as w}from"./outputWidgets.3d5619ad.js";import{b as k}from"./index.a54bc491.js";import"./router.08aab85c.js";import{C as i}from"./connector.b84897b4.js";import{a as x}from"./asyncComputed.cc7b1589.js";import{G as E}from"./PhPencil.vue.d558b34b.js";import{C as D}from"./CrudView.0068fdb2.js";import"./index.cf4c23b9.js";import"./record.835fcdff.js";import"./pubsub.10afa862.js";import"./Form.be701021.js";import"./hasIn.0386b140.js";import"./popupNotifcation.09cf30ee.js";import"./Paragraph.8363f717.js";import"./Text.e765430e.js";import"./Modal.7a17aa61.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.522437b8.js";import"./BookOutlined.b93080c0.js";import"./url.f8beadaf.js";import"./index.99f8a53d.js";import"./Title.b3ab4882.js";import"./index.0c246290.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="9206a95f-daa1-42ef-af3a-295a52b215c0",o._sentryDebugIdIdentifier="sentry-dbid-9206a95f-daa1-42ef-af3a-295a52b215c0")}catch{}})();const S=f({__name:"Connectors",setup(o){const a=b(),r=C(),c=a.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=x(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:E,label:"Edit",onClick({key:y}){r.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:w,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),I(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{S as default};
//# sourceMappingURL=Connectors.46f4a4bc.js.map
