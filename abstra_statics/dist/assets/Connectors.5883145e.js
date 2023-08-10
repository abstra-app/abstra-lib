import{d as b,K as C,b as g,t as _,z as s,J as w,H as I}from"./registerWidgets.6b985ae3.js";import{b as h}from"./index.49f550b6.js";import"./gateway.dce6b10e.js";import{C as i}from"./connector.649eecf8.js";import{a as k}from"./asyncComputed.c09cd499.js";import{g as x,t as D}from"./icons.d11f56c4.js";import{C as E}from"./CrudView.bc1bbd45.js";import"./passwordlessManager.426afe51.js";import"./pubsub.f8c17d6a.js";import"./activeRecord.2d62b323.js";import"./DropdownMenu.d53e18c0.js";import"./Modal.0ced715c.js";import"./LoadingIndicator.889a2062.js";import"./lottie.7867235e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="c0b74151-12e1-4614-9246-538eface12f5",o._sentryDebugIdIdentifier="sentry-dbid-c0b74151-12e1-4614-9246-538eface12f5")}catch{}})();const Y=b({__name:"Connectors",setup(o){const n=w(),a=I(),c=n.params.projectId;async function l(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:d,result:m,refetch:u}=k(()=>i.list(c)),f=C(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=m.value)==null?void 0:e.map(r=>({key:r.id,cells:[{text:r.name,classes:["centered"]},{text:r.type},{text:"Actions",classes:["centered"],actions:[{icon:x,label:"Edit",onClick({key:y}){a.push({name:"connectorEditor",params:{connectorId:y}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await r.delete(),u()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),_(E,{"entity-name":"connector",loading:s(d),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:s(f),fields:p,"create-button-text":"Create connector",onCreate:l},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Connectors.5883145e.js.map
