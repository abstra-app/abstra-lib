import{d as y,eu as f,eH as C,f as g,c as _,u as I,eI as h,o as w}from"./vue-router.364debaa.js";import{b as k}from"./tables.54c187a9.js";import"./gateway.3b9ccabd.js";import{C as i}from"./connector.f56e5d22.js";import{a as x}from"./asyncComputed.f065b2cf.js";import{G as E}from"./PhPencil.vue.0fe9b452.js";import{C as D}from"./CrudView.613ef3f8.js";import"./record.b865c14c.js";import"./string.bdbbe29f.js";import"./popupNotifcation.5b2e3617.js";import"./router.f7c08c4c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c1d10c52.js";import"./BookOutlined.0e1f5876.js";import"./url.375724b9.js";import"./PhDotsThree.vue.45a73ae1.js";import"./index.157b9ada.js";import"./index.248d08ba.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="b42bfea3-b658-44b0-a207-490fdbdb83c4",o._sentryDebugIdIdentifier="sentry-dbid-b42bfea3-b658-44b0-a207-490fdbdb83c4")}catch{}})();const J=y({__name:"Connectors",setup(o){const r=f(),a=C(),c=r.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:l,result:m,refetch:d}=x(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=m.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:E,label:"Edit",onClick({key:b}){a.push({name:"connectorEditor",params:{connectorId:b}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(w(),_(D,{"entity-name":"connector",loading:I(l),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{J as default};
//# sourceMappingURL=Connectors.883bcd91.js.map
