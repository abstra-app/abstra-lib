import{d as f,ex as y,ey as _,F as g,b as I,u as T,bu as w}from"./registerWidgets.482ec09a.js";import{f as C,q as h}from"./icons.cba459d5.js";import{a as k}from"./asyncComputed.e7d9687c.js";import{C as x}from"./CrudView.f731de1b.js";import"./gateway.354c6af2.js";import"./index.ddf88090.js";import{T as r}from"./tables.f89e3606.js";import"./DropdownMenu.0a1a4220.js";import"./Modal.7161dfa2.js";import"./LoadingIndicator.7385bfa8.js";import"./lottie.44c9fd08.js";import"./passwordlessManager.687773fc.js";import"./pubsub.4545c70e.js";import"./activeRecord.287bc390.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0fda53da-84e1-47eb-9d01-586ebaa1d3c6",e._sentryDebugIdIdentifier="sentry-dbid-0fda53da-84e1-47eb-9d01-586ebaa1d3c6")}catch{}})();const H=f({__name:"Tables",setup(e){const t=y(),a=_().params.projectId,{loading:d,result:i,refetch:c}=k(()=>r.list(a)),m=async o=>{const s=await r.create(a,o.name);t.push({name:"tableEditor",params:{tableId:s.id,projectId:a}})},b=g(()=>{var o,s;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(s=(o=i.value)==null?void 0:o.map(n=>({key:n.id,cells:[{text:n.name,classes:["title","centered"]},{text:"Actions",classes:["centered"],actions:[{icon:C,label:"Edit Table",onClick({key:u}){t.push({name:"tableEditor",params:{tableId:u,projectId:a}})}},{icon:h,label:"Delete",dangerous:!0,async onClick(){await n.delete(a,n.id),c()}}]}]})))!=null?s:[]}}),p=[{key:"name",label:"Table name",type:"text"}];return(o,s)=>(I(),T(x,{"entity-name":"table",loading:w(d),title:"Database Tables",description:"Create and manage your database tables here.","empty-title":"No tables here yet",table:b.value,fields:p,"create-button-text":"Create Table",onCreate:m},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Tables.8da4d890.js.map
