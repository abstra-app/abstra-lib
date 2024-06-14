import{d as f,f1 as b,f7 as C,y as g,b as _,c as h,u as w,fd as I}from"./outputWidgets.f4cec438.js";import{b as k}from"./index.5eef9504.js";import"./gateway.d254d1c4.js";import{C as i}from"./connector.fbdcc2e5.js";import{a as x}from"./asyncComputed.2d627b56.js";import{G as E}from"./PhPencil.vue.0287c7ad.js";import{C as D}from"./CrudView.e6af44c9.js";import"./record.2b50b479.js";import"./pubsub.d177beea.js";import"./string.50ad36a9.js";import"./popupNotifcation.aee17107.js";import"./router.b603db0a.js";import"./Form.494320ac.js";import"./hasIn.f768b788.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.33d587a6.js";import"./BookOutlined.6caf0f37.js";import"./url.4035cbd8.js";import"./Modal.5b685d80.js";import"./index.e9d1a280.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="589249d9-f5bc-40a0-9080-1f055427b919",o._sentryDebugIdIdentifier="sentry-dbid-589249d9-f5bc-40a0-9080-1f055427b919")}catch{}})();const L=f({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=x(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:E,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:I,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),h(D,{"entity-name":"connector",loading:w(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{L as default};
//# sourceMappingURL=Connectors.ca063a14.js.map
