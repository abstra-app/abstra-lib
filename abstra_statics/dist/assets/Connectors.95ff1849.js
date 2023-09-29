import{d as y,ey as b,ex as _,H as C,b as g,c as I,u as h}from"./registerWidgets.9fce82a0.js";import{b as k}from"./index.75e03e08.js";import"./gateway.6deb8468.js";import{C as i}from"./connector.a5b18a81.js";import{a as w}from"./asyncComputed.a4b709a3.js";import{e as x,p as E}from"./icons.1992e13b.js";import{_ as D}from"./CrudView.vue_vue_type_script_setup_true_lang.ac5a77d6.js";import"./passwordlessManager.eda842b8.js";import"./pubsub.025cc397.js";import"./storage.ae287dfa.js";import"./activeRecord.872f4269.js";import"./index.2c964e80.js";import"./Title.26974edb.js";import"./Form.413853c0.js";import"./index.eed9c711.js";import"./index.30c35b37.js";import"./index.c9f7f8f0.js";import"./index.db5cf0e6.js";import"./index.e8158c16.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="6f099fb9-0aaf-45b4-88fa-d81f7ee948c5",o._sentryDebugIdIdentifier="sentry-dbid-6f099fb9-0aaf-45b4-88fa-d81f7ee948c5")}catch{}})();const P=y({__name:"Connectors",setup(o){const a=b(),r=_(),c=a.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=w(()=>i.list(c)),u=C(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:f}){r.push({name:"connectorEditor",params:{connectorId:f}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),I(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Connectors.95ff1849.js.map
