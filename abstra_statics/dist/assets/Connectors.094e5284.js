import{d as y,eA as f,eI as C,H as g,b as _,c as I,u as h,eP as w}from"./outputWidgets.8f3067aa.js";import{b as k}from"./index.7635976c.js";import"./router.3acfc4c2.js";import{C as i}from"./connector.20434460.js";import{a as x}from"./asyncComputed.4d483d33.js";import{G as E}from"./PhPencil.vue.051bc6b8.js";import{C as D}from"./CrudView.41701831.js";import"./index.cf4c23b9.js";import"./record.f9b9b8f9.js";import"./pubsub.3bb0bf81.js";import"./Form.5823cff9.js";import"./hasIn.16d5e59b.js";import"./popupNotifcation.294f8041.js";import"./Paragraph.f4630d40.js";import"./Text.c06dc834.js";import"./Modal.47702bc0.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.04ce18ab.js";import"./BookOutlined.a026a36f.js";import"./url.f24b5f05.js";import"./index.cd7b83a2.js";import"./Title.c87d8893.js";import"./index.18f554a0.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="6b76f7bf-ba99-4284-9879-cbe8c6f7b94e",o._sentryDebugIdIdentifier="sentry-dbid-6b76f7bf-ba99-4284-9879-cbe8c6f7b94e")}catch{}})();const S=y({__name:"Connectors",setup(o){const r=f(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=x(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:E,label:"Edit",onClick({key:b}){a.push({name:"connectorEditor",params:{connectorId:b}})}},{icon:w,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),I(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{S as default};
//# sourceMappingURL=Connectors.094e5284.js.map
