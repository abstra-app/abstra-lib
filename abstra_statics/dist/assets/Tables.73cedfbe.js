import{d as y,K as _,b as g,t as T,z as d,H as w}from"./registerWidgets.b581b882.js";import{f as C,g as h,h as k}from"./icons.5e5a9af6.js";import{a as D}from"./asyncComputed.d5ac46d6.js";import{T as b}from"./tables.74278f57.js";import{R as I}from"./RuntimeList.9830ae1d.js";import"./activeRecord.d86e77f4.js";import"./pubsub.e8d7f2be.js";import"./DropdownMenu.cfe14248.js";import"./CircularLoading.187bc0bb.js";import"./lottie.11a8eda8.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="7d899b27-5bf2-4df3-9f87-0c1251fbc6f0",n._sentryDebugIdIdentifier="sentry-dbid-7d899b27-5bf2-4df3-9f87-0c1251fbc6f0")}catch{}})();const H=y({__name:"Tables",setup(n){const o=w(),{loading:r,result:l,refetch:i}=D(()=>b.list()),c=({key:e})=>o.push({path:`/_editor/table/${encodeURIComponent(e)}`}),u=async({key:e})=>{var t,a;await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.duplicate()),i()},m=async()=>{const e=await b.create();c({key:e.name})},f=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this table?")&&(await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.delete()),i())},p=_(()=>{var e,t;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(t=(e=l.value)==null?void 0:e.map(a=>({key:a.name,cells:[{text:a.name,classes:["title","centered"],link:`/_editor/table/${encodeURIComponent(a.name)}`},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:f,dangerous:!0},{icon:h,label:"Edit Table",onClick:c},{icon:k,label:"Duplicate",onClick:u}]}]})))!=null?t:[]}});return(e,t)=>(g(),T(I,{loading:d(r),title:"Database Tables",description:"Create and manage your database tables here.","create-button-text":"Create Table","empty-title":"No tables here yet",table:d(p),onCreate:m},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Tables.73cedfbe.js.map
