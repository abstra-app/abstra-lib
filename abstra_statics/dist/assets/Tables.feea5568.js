import{d as y,K as _,b as g,t as T,z as d,H as w}from"./registerWidgets.1590c05e.js";import{f as C,g as h,h as k}from"./icons.8b9604eb.js";import{a as D}from"./asyncComputed.0f7a44c1.js";import{T as u}from"./tables.fd340442.js";import{R as I}from"./RuntimeList.00496323.js";import"./activeRecord.e76d7c5c.js";import"./DropdownMenu.19ad0013.js";import"./CircularLoading.30b3ab43.js";import"./lottie.1e0c432a.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="9388ca68-b1b7-4103-9c02-9c6c59e4a258",n._sentryDebugIdIdentifier="sentry-dbid-9388ca68-b1b7-4103-9c02-9c6c59e4a258")}catch{}})();const z=y({__name:"Tables",setup(n){const o=w(),{loading:c,result:l,refetch:r}=D(()=>u.list()),i=({key:e})=>o.push({path:`/_editor/table/${encodeURIComponent(e)}`}),b=async({key:e})=>{var t,a;await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.duplicate()),r()},m=async()=>{const e=await u.create();i({key:e.name})},p=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this table?")&&(await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.delete()),r())},f=_(()=>{var e,t;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(t=(e=l.value)==null?void 0:e.map(a=>({key:a.name,cells:[{text:a.name,classes:["title","centered"],link:`/_editor/table/${encodeURIComponent(a.name)}`},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:p,dangerous:!0},{icon:h,label:"Edit Table",onClick:i},{icon:k,label:"Duplicate",onClick:b}]}]})))!=null?t:[]}});return(e,t)=>(g(),T(I,{loading:d(c),title:"Database Tables",description:"Create and manage your database tables here.","create-button-text":"Create Table","empty-title":"No tables here yet",table:d(f),onCreate:m},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Tables.feea5568.js.map
