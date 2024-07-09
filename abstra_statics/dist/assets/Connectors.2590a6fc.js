import{d as f,eB as b,eM as C,f as g,o as _,c as h,u as w,eN as I}from"./vue-router.35df483d.js";import{b as k}from"./index.e9ce12a8.js";import"./gateway.d1efc3eb.js";import{C as i}from"./connector.2d61981d.js";import{a as x}from"./asyncComputed.fa6138b7.js";import{G as E}from"./PhPencil.vue.a31338a2.js";import{C as D}from"./CrudView.c23e18cf.js";import"./record.52252ab3.js";import"./string.65b1c4d4.js";import"./popupNotifcation.ea4acdc5.js";import"./router.d933c1d5.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0ce3af23.js";import"./BookOutlined.44917d48.js";import"./url.3860831f.js";import"./index.8fc2feae.js";import"./index.8614479b.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="a1eb1834-93d0-463c-b64f-c7a910f0ae16",o._sentryDebugIdIdentifier="sentry-dbid-a1eb1834-93d0-463c-b64f-c7a910f0ae16")}catch{}})();const H=f({__name:"Connectors",setup(o){const a=b(),r=C(),c=a.params.projectId;async function s(e){const t=await i.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(k.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:l,result:m,refetch:d}=x(()=>i.list(c)),u=g(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"",align:"right"}],rows:(t=(e=m.value)==null?void 0:e.map(n=>({key:n.id,cells:[{type:"link",text:n.name,to:{name:"connectorEditor",params:{connectorId:n.id}}},{type:"text",text:n.type},{type:"actions",actions:[{icon:E,label:"Edit",onClick({key:y}){r.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:I,label:"Delete",dangerous:!0,async onClick(){await n.delete(),d()}}]}]})))!=null?t:[]}});return(e,t)=>(_(),h(D,{"entity-name":"connector",loading:w(l),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:p,"create-button-text":"Create connector",onCreate:s},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Connectors.2590a6fc.js.map
