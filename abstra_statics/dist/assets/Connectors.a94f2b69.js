import{d as y,eA as b,eM as C,f as g,o as _,c as h,u as w,eN as I}from"./vue-router.8bd2564b.js";import{b as k}from"./tables.fae4490c.js";import"./gateway.a1fa7681.js";import{C as i}from"./connector.ac683422.js";import{a as x}from"./asyncComputed.60c4c047.js";import{G as E}from"./PhPencil.vue.3414ec80.js";import{C as D}from"./CrudView.876a7a3f.js";import"./record.e607203c.js";import"./string.2224516e.js";import"./popupNotifcation.1c20c35c.js";import"./router.dfaed674.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.9b8bc223.js";import"./BookOutlined.097a199d.js";import"./url.c822b33f.js";import"./index.c872f7cd.js";import"./index.6b67d3fd.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="8bfce44d-2037-44e4-9ddd-f888749df57c",o._sentryDebugIdIdentifier="sentry-dbid-8bfce44d-2037-44e4-9ddd-f888749df57c")}catch{}})();const H=y({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const d=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:p,result:l,refetch:m}=x(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:E,label:"Edit",onClick({key:f}){a.push({name:"connectorEditor",params:{connectorId:f}})}},{icon:I,label:"Delete",dangerous:!0,async onClick(){await n.delete(),m()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),h(D,{"entity-name":"connector",loading:w(p),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:d,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Connectors.a94f2b69.js.map
