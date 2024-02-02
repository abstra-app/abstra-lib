import{d as b,eB as f,eA as C,H as g,b as _,c as I,u as h}from"./outputWidgets.274d1699.js";import{b as w}from"./index.1658f610.js";import"./router.b47ff2c4.js";import{C as i}from"./connector.37fb747b.js";import{a as k}from"./asyncComputed.a16b1311.js";import{t as x,o as E}from"./icons.ca292280.js";import{C as D}from"./CrudView.f5855a48.js";import"./index.cf4c23b9.js";import"./record.f41c7001.js";import"./pubsub.2ce77d5f.js";import"./FormItem.fcd730a7.js";import"./hasIn.2daf6d7d.js";import"./Paragraph.1a80a99a.js";import"./Base.9e61dda1.js";import"./Form.9d0775d8.js";import"./Modal.e450ce2f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.911dee6a.js";import"./url.a5dfefd8.js";import"./index.0fc7b76e.js";import"./Title.75d1eb5b.js";import"./Text.01c64a30.js";import"./index.2d24656d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="bcddd5a8-3cc4-464b-b587-21d653547630",o._sentryDebugIdIdentifier="sentry-dbid-bcddd5a8-3cc4-464b-b587-21d653547630")}catch{}})();const U=b({__name:"Connectors",setup(o){const r=f(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(w.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:d,refetch:l}=k(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:x,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),l()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),I(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Connectors.c395cf99.js.map
