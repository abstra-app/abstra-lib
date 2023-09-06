import{d as y,ey as b,ex as C,F as _,b as g,u as w,bu as I}from"./registerWidgets.0e440875.js";import{b as h}from"./index.095a51b1.js";import"./gateway.dd0f6075.js";import{C as s}from"./connector.9a2ba42a.js";import{a as k}from"./asyncComputed.8678d980.js";import{f as x,q as D}from"./icons.ec86d93d.js";import{C as E}from"./CrudView.1bea560c.js";import"./passwordlessManager.78e50ed3.js";import"./pubsub.3f22547d.js";import"./storage.f319f6a5.js";import"./activeRecord.a7f077c5.js";import"./DropdownMenu.b7d3c372.js";import"./Modal.9db32832.js";import"./LoadingIndicator.c6cb327c.js";import"./lottie.1b91379a.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[n]="c7b45a24-7961-407f-836f-13f922990dfa",o._sentryDebugIdIdentifier="sentry-dbid-c7b45a24-7961-407f-836f-13f922990dfa")}catch{}})();const H=y({__name:"Connectors",setup(o){const n=b(),r=C(),c=n.params.projectId;async function i(e){const t=await s.create(c,e.name,e.type);r.push({name:"connectorEditor",params:{connectorId:t.id}})}const l=[{key:"name",label:"Connector name",type:"text"},{key:"type",label:"Connector type",type:Object.entries(h.schema).map(([e,t])=>({value:e,label:t.label}))}],{loading:p,result:d,refetch:m}=k(()=>s.list(c)),u=_(()=>{var e,t;return{columns:[{name:"Name"},{name:"Type"},{name:"actions"}],rows:(t=(e=d.value)==null?void 0:e.map(a=>({key:a.id,cells:[{text:a.name,classes:["centered"]},{text:a.type},{text:"Actions",classes:["centered"],actions:[{icon:x,label:"Edit",onClick({key:f}){r.push({name:"connectorEditor",params:{connectorId:f}})}},{icon:D,label:"Delete",dangerous:!0,async onClick(){await a.delete(),m()}}]}]})))!=null?t:[]}});return(e,t)=>(g(),w(E,{"entity-name":"connector",loading:I(p),title:"Connectors",description:"Each connector is a version of your app. You can create a new connector by deploying your app from the local editor.","empty-title":"No connectors here yet",table:u.value,fields:l,"create-button-text":"Create connector",onCreate:i},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Connectors.2b8de68c.js.map
