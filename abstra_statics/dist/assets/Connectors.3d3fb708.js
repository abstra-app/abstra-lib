import{d as f,eB as b,eM as C,f as g,o as _,c as h,u as w,eN as I}from"./vue-router.a156205c.js";import{b as k}from"./index.97c74e81.js";import"./gateway.7c68a4ee.js";import{C as i}from"./connector.567fe6f7.js";import{a as x}from"./asyncComputed.abf19365.js";import{G as E}from"./PhPencil.vue.916d632a.js";import{C as D}from"./CrudView.0f7802de.js";import"./record.97ef946e.js";import"./string.956c94ec.js";import"./popupNotifcation.76fe7706.js";import"./router.176ae56c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.8510d7f6.js";import"./BookOutlined.afd9e6bb.js";import"./url.23551c69.js";import"./index.57b009c9.js";import"./index.0dce840c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="7f8801d1-9ce4-4c75-9192-da7d3fde5a1a",o._sentryDebugIdIdentifier="sentry-dbid-7f8801d1-9ce4-4c75-9192-da7d3fde5a1a")}catch{}})();const H=f({__name:"Connectors",setup(o){const a=b(),r=C(),c=a.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:d,result:l,refetch:m}=x(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:E,label:"Edit",onClick({key:y}){r.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:I,label:"Delete",dangerous:!0,async onClick(){await n.delete(),m()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),h(D,{"entity-name":"connector",loading:w(d),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Connectors.3d3fb708.js.map
