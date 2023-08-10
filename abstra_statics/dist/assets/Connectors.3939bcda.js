import{d as y,K as C,b as g,t as _,z as s,J as w,H as I}from"./registerWidgets.b581b882.js";import{b as h}from"./index.2816490e.js";import"./gateway.ace4e6ef.js";import{C as i}from"./connector.98aa7d7a.js";import{a as k}from"./asyncComputed.d5ac46d6.js";import{g as x,t as D}from"./icons.5e5a9af6.js";import{C as E}from"./CrudView.bbdeef54.js";import"./passwordlessManager.202da07d.js";import"./pubsub.e8d7f2be.js";import"./activeRecord.d86e77f4.js";import"./DropdownMenu.cfe14248.js";import"./Modal.b2162631.js";import"./LoadingIndicator.84650e8d.js";import"./lottie.11a8eda8.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="afb6af4b-a438-4b8a-8b21-580899feadaf",o._sentryDebugIdIdentifier="sentry-dbid-afb6af4b-a438-4b8a-8b21-580899feadaf")}catch{}})();const Y=y({__name:"Connectors",setup(o){const n=w(),r=I(),c=n.params.projectId;async function l(e){const t=await i.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:d,result:m,refetch:u}=k(()=>i.list(c)),f=C(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=m.value)==null?void 0:e.map(a=>({key:a.id,cells:[{text:a.name,classes:["centered"]},{text:a.type},{text:"Actions",classes:["centered"],actions:[{icon:x,label:"Edit",onClick({key:b}){r.push({name:"connectorEditor",params:{connectorId:b}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await a.delete(),u()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),_(E,{"entity-name":"connector",loading:s(d),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:s(f),fields:p,"create-button-text":"Create connector",onCreate:l},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Connectors.3939bcda.js.map
