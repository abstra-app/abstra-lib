import{d as b,K as C,b as g,t as _,z as s,J as w,H as I}from"./registerWidgets.c1da2b93.js";import{b as h}from"./index.a3927ba7.js";import"./gateway.c457f9d6.js";import{C as i}from"./connector.6587e073.js";import{a as k}from"./asyncComputed.519c40eb.js";import{g as x,r as D}from"./icons.de44105b.js";import{C as E}from"./CrudView.c21fdfa3.js";import"./passwordlessManager.4d2f4653.js";import"./pubsub.c7dd30c2.js";import"./activeRecord.2664e76c.js";import"./DropdownMenu.2652eaca.js";import"./Modal.5655879a.js";import"./LoadingIndicator.8f360a48.js";import"./lottie.1c237c41.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="6777b1cd-2036-4992-b16c-554c9984f414",o._sentryDebugIdIdentifier="sentry-dbid-6777b1cd-2036-4992-b16c-554c9984f414")}catch{}})();const Y=b({__name:"Connectors",setup(o){const n=w(),a=I(),c=n.params.projectId;async function l(e){const t=await i.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const p=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:d,result:m,refetch:u}=k(()=>i.list(c)),y=C(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=m.value)==null?void 0:e.map(r=>({key:r.id,cells:[{text:r.name,classes:["centered"]},{text:r.type},{text:"Actions",classes:["centered"],actions:[{icon:x,label:"Edit",onClick({key:f}){a.push({name:"connectorEditor",params:{connectorId:f}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await r.delete(),u()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),_(E,{"entity-name":"connector",loading:s(d),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:s(y),fields:p,"create-button-text":"Create connector",onCreate:l},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Connectors.f8f931ea.js.map
