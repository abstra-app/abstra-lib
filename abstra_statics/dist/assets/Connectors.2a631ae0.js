import{d as y,ey as b,ex as _,H as C,b as g,c as I,u as h}from"./registerWidgets.c9cb81ca.js";import{b as k}from"./index.bbf3666b.js";import"./gateway.1bb23155.js";import{C as i}from"./connector.b7eef7c8.js";import{a as w}from"./asyncComputed.04c0b652.js";import{e as x,p as E}from"./icons.384bef6a.js";import{_ as D}from"./CrudView.vue_vue_type_script_setup_true_lang.e0cbc717.js";import"./passwordlessManager.cc31c80c.js";import"./pubsub.9e830c37.js";import"./storage.2edf556f.js";import"./activeRecord.7003a0b9.js";import"./index.98aa4faf.js";import"./Title.e7a85260.js";import"./Form.2d54663d.js";import"./index.b46f3385.js";import"./index.6d755f48.js";import"./index.77d2ee92.js";import"./index.3f8a189d.js";import"./index.3cfe8499.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="e0fdc57f-83e9-4997-a37d-74e5e334ee3a",o._sentryDebugIdIdentifier="sentry-dbid-e0fdc57f-83e9-4997-a37d-74e5e334ee3a")}catch{}})();const P=y({__name:"Connectors",setup(o){const r=b(),a=_(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=w(()=>i.list(c)),u=C(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:f}){a.push({name:"connectorEditor",params:{connectorId:f}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),I(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Connectors.2a631ae0.js.map
