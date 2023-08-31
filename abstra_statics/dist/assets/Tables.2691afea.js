import{d as f,ex as y,ey as _,F as g,b as I,u as T,bu as w}from"./registerWidgets.037943b9.js";import{f as C,q as h}from"./icons.516a3236.js";import{a as k}from"./asyncComputed.b7f7c5d0.js";import{C as x}from"./CrudView.322136e0.js";import"./gateway.bfe2516a.js";import"./index.aa1ba97d.js";import{T as r}from"./tables.6c3e8d55.js";import"./DropdownMenu.b03c9dd3.js";import"./Modal.0adead07.js";import"./LoadingIndicator.b20cd41d.js";import"./lottie.e4babf01.js";import"./passwordlessManager.bfd1c2b2.js";import"./pubsub.8e672830.js";import"./activeRecord.1c8b5c12.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="32e2facf-2feb-4983-9611-28156360bbc0",e._sentryDebugIdIdentifier="sentry-dbid-32e2facf-2feb-4983-9611-28156360bbc0")}catch{}})();const H=f({__name:"Tables",setup(e){const t=y(),a=_().params.projectId,{loading:i,result:c,refetch:d}=k(()=>r.list(a)),m=async o=>{const s=await r.create(a,o.name);t.push({name:"tableEditor",params:{tableId:s.id,projectId:a}})},b=g(()=>{var o,s;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(s=(o=c.value)==null?void 0:o.map(n=>({key:n.id,cells:[{text:n.name,classes:["title","centered"]},{text:"Actions",classes:["centered"],actions:[{icon:C,label:"Edit Table",onClick({key:u}){t.push({name:"tableEditor",params:{tableId:u,projectId:a}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),d()}}]}]})))!=null?s:[]}}),p=[{key:"name",label:"Table name",type:"text"}];return(o,s)=>(I(),T(x,{"entity-name":"table",loading:w(i),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:p,"create-button-text":"Create Table",onCreate:m},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Tables.2691afea.js.map
