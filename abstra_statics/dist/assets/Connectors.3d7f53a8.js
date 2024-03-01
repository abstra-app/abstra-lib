import{d as f,eB as b,eA as C,H as g,b as I,c as _,u as h}from"./outputWidgets.b4e7bc36.js";import{b as w}from"./index.d2ed8ff0.js";import"./router.ba23848c.js";import{C as i}from"./connector.b9b19e6e.js";import{a as k}from"./asyncComputed.63222e21.js";import{I as x,i as E}from"./icons.ed8a375d.js";import{C as D}from"./CrudView.e9cca4fd.js";import"./index.cf4c23b9.js";import"./record.8841a42c.js";import"./pubsub.f377b08c.js";import"./Form.a935b6d6.js";import"./hasIn.068878da.js";import"./Paragraph.dc776558.js";import"./Base.b036cd53.js";import"./Typography.a2975dec.js";import"./Modal.0bce1eaa.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ddce1127.js";import"./url.efacade2.js";import"./index.bc81c9a3.js";import"./Title.87d4b9b2.js";import"./Text.480840c4.js";import"./index.1b6f6e06.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="64569360-7660-4cad-a40c-0cbc937bfd23",o._sentryDebugIdIdentifier="sentry-dbid-64569360-7660-4cad-a40c-0cbc937bfd23")}catch{}})();const U=f({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(w.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=k(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:x,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(I(),_(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Connectors.3d7f53a8.js.map
