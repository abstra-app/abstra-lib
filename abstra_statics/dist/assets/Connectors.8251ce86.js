import{d as f,eB as b,eA as C,H as g,b as _,c as I,u as h}from"./outputWidgets.a313d7bb.js";import{b as w}from"./index.f92e0bbc.js";import"./router.f6835f15.js";import{C as i}from"./connector.eab84e6a.js";import{a as k}from"./asyncComputed.406915d3.js";import{t as x,o as E}from"./icons.ef464e95.js";import{C as D}from"./CrudView.0f97ce31.js";import"./index.cf4c23b9.js";import"./record.fe3de598.js";import"./pubsub.371a5a5b.js";import"./FormItem.97044a76.js";import"./hasIn.7b35fbd0.js";import"./Paragraph.894f4ef1.js";import"./Base.b4f5920a.js";import"./Form.5e404c4d.js";import"./Modal.1bb1a9b9.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.66fc1798.js";import"./url.0e0499a0.js";import"./index.b1d86ae5.js";import"./Title.86e73542.js";import"./Text.c0f20880.js";import"./index.2ceec9d2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="1226b45a-915b-4ae2-a798-84fd02435111",o._sentryDebugIdIdentifier="sentry-dbid-1226b45a-915b-4ae2-a798-84fd02435111")}catch{}})();const U=f({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(w.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=k(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:x,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),I(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Connectors.8251ce86.js.map
