import{d as f,eG as b,eM as C,y as g,b as _,c as h,u as w,eS as I}from"./outputWidgets.d33a61bd.js";import{b as k}from"./index.06532aec.js";import"./gateway.30b21540.js";import{C as i}from"./connector.436d8283.js";import{a as x}from"./asyncComputed.4657309e.js";import{G as E}from"./PhPencil.vue.ba7c220c.js";import{C as D}from"./CrudView.184e6512.js";import"./record.4dc67282.js";import"./pubsub.b428bf0f.js";import"./popupNotifcation.dd994e4f.js";import"./router.bfd42852.js";import"./Form.41dae759.js";import"./hasIn.657bf603.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b8f40ee0.js";import"./BookOutlined.258e4769.js";import"./url.8c754a91.js";import"./Paragraph.6e3c34f9.js";import"./Base.d60172c6.js";import"./Modal.3a17d8d4.js";import"./index.5d628308.js";import"./Title.51239574.js";import"./Text.7588bb7f.js";import"./index.789baac6.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="f54c7bd4-96e7-4b0e-aac2-9e6f53164023",o._sentryDebugIdIdentifier="sentry-dbid-f54c7bd4-96e7-4b0e-aac2-9e6f53164023")}catch{}})();const U=f({__name:"Connectors",setup(o){const r=b(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=x(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:E,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:I,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),h(D,{"entity-name":"connector",loading:w(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{U as default};
//# sourceMappingURL=Connectors.ab6326b7.js.map
