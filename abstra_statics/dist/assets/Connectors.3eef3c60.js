import{d as y,eA as b,ez as _,J as C,b as g,c as I,u as h}from"./outputWidgets.6d878336.js";import{b as k}from"./index.d3f5bc3d.js";import"./console.bb49fd7b.js";import{C as c}from"./connector.8bef4e2d.js";import{a as w}from"./asyncComputed.f4e8f601.js";import{e as x,q as E}from"./icons.31732537.js";import{_ as D}from"./CrudView.vue_vue_type_script_setup_true_lang.4ebf21bf.js";import"./index.9e0e45c6.js";import"./Form.9dbabc14.js";import"./Title.7777f40a.js";import"./CollapsePanel.e467f5eb.js";import"./index.48f0e3d4.js";import"./index.ec7066e1.js";import"./index.e1dcf4ff.js";import"./dayjs.52118055.js";import"./index.d8a13a23.js";import"./index.64e4975b.js";import"./TabPane.dac9512e.js";import"./index.f4029516.js";import"./index.ddda7671.js";import"./index.12ea9441.js";import"./index.21962144.js";import"./index.ab3edcb5.js";import"./index.defccd4f.js";import"./index.26308154.js";import"./index.40d5d1c1.js";import"./index.4179d6a8.js";import"./activeRecord.0d2b743a.js";import"./pubsub.7c8033ef.js";import"./gateway.04616128.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="e7552d46-64f4-4fb0-9c12-17f8b92afe60",o._sentryDebugIdIdentifier="sentry-dbid-e7552d46-64f4-4fb0-9c12-17f8b92afe60")}catch{}})();const ne=y({__name:"Connectors",setup(o){const r=b(),a=_(),i=r.params.projectId;async function s(e){const t=await c.create(i,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:m,result:l,refetch:d}=w(()=>c.list(i)),u=C(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=l.value)==null?void 0:e.map(n=>({key:n.id,cells:[{text:n.name,link:{name:"connectorEditor",params:{connectorId:n.id}}},{text:n.type},{text:"Actions",actions:[{icon:x,label:"Edit",onClick({key:f}){a.push({name:"connectorEditor",params:{connectorId:f}})}},{icon:E,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),I(D,{"entity-name":"connector",loading:h(m),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{ne as default};
//# sourceMappingURL=Connectors.3eef3c60.js.map
