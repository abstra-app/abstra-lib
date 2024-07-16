import{d as f,eA as b,eM as C,f as g,o as _,c as h,u as w,eN as I}from"./vue-router.77c5f93d.js";import{b as k}from"./tables.a0419c8b.js";import"./gateway.2e8cb9f1.js";import{C as i}from"./connector.1fcfdc6a.js";import{a as x}from"./asyncComputed.c4454290.js";import{G as E}from"./PhPencil.vue.0f72f21b.js";import{C as D}from"./CrudView.1f89b5ff.js";import"./record.c1f4c18d.js";import"./string.4b7add77.js";import"./popupNotifcation.10839d08.js";import"./router.315b4a57.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b7f25a67.js";import"./BookOutlined.70ee291f.js";import"./url.40922056.js";import"./index.4f031aa1.js";import"./index.08312de9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="e43d12d3-faf5-4e43-8651-83508b4d0872",o._sentryDebugIdIdentifier="sentry-dbid-e43d12d3-faf5-4e43-8651-83508b4d0872")}catch{}})();const H=f({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:d,result:l,refetch:m}=x(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:E,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:I,label:"Delete",dangerous:!0,async onClick(){await n.delete(),m()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),h(D,{"entity-name":"connector",loading:w(d),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Connectors.7cf46735.js.map
