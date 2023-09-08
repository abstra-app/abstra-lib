import{d as y,ey as b,ex as C,F as _,b as g,u as w,bu as I}from"./registerWidgets.55c66c97.js";import{b as h}from"./index.a71e3fe0.js";import"./gateway.48b8bec6.js";import{C as s}from"./connector.855ae7d3.js";import{a as k}from"./asyncComputed.2e2eb416.js";import{f as x,q as D}from"./icons.72c5c561.js";import{C as E}from"./CrudView.b09ba0d2.js";import"./passwordlessManager.5c607310.js";import"./pubsub.48669cc6.js";import"./storage.669c69ab.js";import"./activeRecord.5a94debc.js";import"./DropdownMenu.856cc451.js";import"./Modal.5cccca6e.js";import"./LoadingIndicator.b6dc7eb6.js";import"./lottie.d83c20f2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="7d60b115-f42f-49d3-ad56-434504cd4c8d",o._sentryDebugIdIdentifier="sentry-dbid-7d60b115-f42f-49d3-ad56-434504cd4c8d")}catch{}})();const H=y({__name:"Connectors",setup(o){const n=b(),a=C(),c=n.params.projectId;async function i(e){const t=await s.create(c,e.name,e.type);a.push({name:"connectorEditor",params:{connectorId:t.id}})}const d=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:l,result:p,refetch:m}=k(()=>s.list(c)),u=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=p.value)==null?void 0:e.map(r=>({key:r.id,cells:[{text:r.name,classes:["centered"]},{text:r.type},{text:"Actions",classes:["centered"],actions:[{icon:x,label:"Edit",onClick({key:f}){a.push({name:"connectorEditor",params:{connectorId:f}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await r.delete(),m()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),w(E,{"entity-name":"connector",loading:I(l),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:d,"create-button-text":"Create connector",onCreate:i},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Connectors.049ec2d8.js.map
