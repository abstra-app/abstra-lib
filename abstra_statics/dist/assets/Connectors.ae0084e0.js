import{d as y,eE as b,eK as C,J as g,b as _,c as h,u as w,eS as I}from"./outputWidgets.e96ae777.js";import{b as k}from"./index.3067bca0.js";import"./router.02703dbf.js";import{C as i}from"./connector.850ef09c.js";import{a as x}from"./asyncComputed.9e0c8a41.js";import{G as E}from"./PhPencil.vue.7260dc01.js";import{C as D}from"./CrudView.266d1db2.js";import"./record.97f1db0c.js";import"./pubsub.780e91bb.js";import"./Form.8a04defb.js";import"./hasIn.ad84c1e7.js";import"./popupNotifcation.143e6bc8.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.3bf38e15.js";import"./BookOutlined.19f678a3.js";import"./url.abb30f1b.js";import"./Paragraph.1efad55d.js";import"./Base.2ebb0198.js";import"./Modal.ead7c614.js";import"./index.4551969a.js";import"./Title.d5efda58.js";import"./Text.8691a2b2.js";import"./index.3385a1bc.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="43d734bf-bf98-4ecf-a40c-bc63d358dfb8",o._sentryDebugIdIdentifier="sentry-dbid-43d734bf-bf98-4ecf-a40c-bc63d358dfb8")}catch{}})();const Q=y({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:d,refetch:l}=x(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=d.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:E,label:"Edit",onClick({key:f}){a.push({name:"connectorEditor",params:{connectorId:f}})}},{icon:I,label:"Delete",dangerous:!0,async onClick(){await n.delete(),l()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),h(D,{"entity-name":"connector",loading:w(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{Q as default};
//# sourceMappingURL=Connectors.ae0084e0.js.map
