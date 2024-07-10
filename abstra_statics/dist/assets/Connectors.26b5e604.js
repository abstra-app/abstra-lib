import{d as f,eB as b,eM as C,f as g,o as _,c as h,u as w,eN as I}from"./vue-router.9bf66a84.js";import{b as k}from"./index.2ac927c6.js";import"./gateway.d3799208.js";import{C as i}from"./connector.c3eafbad.js";import{a as x}from"./asyncComputed.5eb84b4c.js";import{G as E}from"./PhPencil.vue.246d9753.js";import{C as D}from"./CrudView.e591e838.js";import"./record.daed7147.js";import"./string.e84d8699.js";import"./popupNotifcation.e9df6672.js";import"./router.40dea0c9.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.98de7561.js";import"./BookOutlined.455f1518.js";import"./url.e644cab5.js";import"./index.5c4793f3.js";import"./index.8c1189a0.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="3ece54f5-0eec-4564-9fb4-8880547d2697",o._sentryDebugIdIdentifier="sentry-dbid-3ece54f5-0eec-4564-9fb4-8880547d2697")}catch{}})();const H=f({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:l,result:m,refetch:d}=x(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=m.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:E,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:I,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),h(D,{"entity-name":"connector",loading:w(l),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Connectors.26b5e604.js.map
