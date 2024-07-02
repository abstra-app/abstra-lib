import{d as f,eC as b,eJ as C,K as g,b as _,c as h,u as w,eP as I}from"./vue-router.fc687082.js";import{b as k}from"./index.e361dc3b.js";import"./gateway.5824bb26.js";import{C as i}from"./connector.4de7c754.js";import{a as x}from"./asyncComputed.478ebb6d.js";import{G as E}from"./PhPencil.vue.c5086621.js";import{C as D}from"./CrudView.8101ee23.js";import"./record.ac7a7fc5.js";import"./string.3d4bbb65.js";import"./popupNotifcation.b636343e.js";import"./router.d59e333c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0cfd2273.js";import"./BookOutlined.a2844a5d.js";import"./url.468d83ce.js";import"./index.d35336db.js";import"./index.07b6c157.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="93121576-a8e5-40ea-9898-c0aa8aa81e48",o._sentryDebugIdIdentifier="sentry-dbid-93121576-a8e5-40ea-9898-c0aa8aa81e48")}catch{}})();const z=f({__name:"Connectors",setup(o){const a=b(),r=C(),c=a.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:l,result:m,refetch:d}=x(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=m.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:E,label:"Edit",onClick({key:y}){r.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:I,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),h(D,{"entity-name":"connector",loading:w(l),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Connectors.ac1bebc0.js.map
