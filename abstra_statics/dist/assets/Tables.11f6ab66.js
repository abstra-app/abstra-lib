import{d as f,ex as y,ey as _,F as g,b as I,u as T,bu as w}from"./registerWidgets.ce5f9e65.js";import{f as C,q as h}from"./icons.3f254762.js";import{a as k}from"./asyncComputed.225e3d7a.js";import{C as x}from"./CrudView.5e0fb3f0.js";import"./gateway.9aac05ff.js";import"./index.df239007.js";import{T as n}from"./tables.0fb24e93.js";import"./DropdownMenu.c386a8d0.js";import"./Modal.a3505e8b.js";import"./LoadingIndicator.c55cb37d.js";import"./lottie.a2200bf1.js";import"./passwordlessManager.2133f51e.js";import"./pubsub.4ee72047.js";import"./storage.18190b76.js";import"./activeRecord.e78d60ff.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d1c751a5-84dc-464b-9026-e82f48a1b423",e._sentryDebugIdIdentifier="sentry-dbid-d1c751a5-84dc-464b-9026-e82f48a1b423")}catch{}})();const J=f({__name:"Tables",setup(e){const t=y(),a=_().params.projectId,{loading:i,result:c,refetch:d}=k(()=>n.list(a)),m=async o=>{const s=await n.create(a,o.name);t.push({name:"tableEditor",params:{tableId:s.id,projectId:a}})},b=g(()=>{var o,s;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(s=(o=c.value)==null?void 0:o.map(r=>({key:r.id,cells:[{text:r.name,classes:["title","centered"]},{text:"Actions",classes:["centered"],actions:[{icon:C,label:"Edit Table",onClick({key:u}){t.push({name:"tableEditor",params:{tableId:u,projectId:a}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await r.delete(a,r.id),d()}}]}]})))!=null?s:[]}}),p=[{key:"name",label:"Table name",type:"text"}];return(o,s)=>(I(),T(x,{"entity-name":"table",loading:w(i),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:p,"create-button-text":"Create Table",onCreate:m},null,8,["loading","table"]))}});export{J as default};
//# sourceMappingURL=Tables.11f6ab66.js.map
