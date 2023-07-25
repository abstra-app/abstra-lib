import{d as y,K as _,b as g,t as T,z as d,H as w}from"./registerWidgets.eddc32f4.js";import{f as C,g as h,h as k}from"./icons.54ab2234.js";import{a as D}from"./asyncComputed.562c187e.js";import{T as u}from"./tables.e7f1b9c2.js";import{R as I}from"./RuntimeList.368e500b.js";import"./activeRecord.ed4e0294.js";import"./DropdownMenu.07e05b99.js";import"./CircularLoading.c96bd1c9.js";import"./lottie.6d443700.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="dca88877-7ed5-4ea8-9a71-c8ac89a9041f",n._sentryDebugIdIdentifier="sentry-dbid-dca88877-7ed5-4ea8-9a71-c8ac89a9041f")}catch{}})();const z=y({__name:"Tables",setup(n){const o=w(),{loading:r,result:l,refetch:c}=D(()=>u.list()),i=({key:e})=>o.push({path:`/_editor/table/${encodeURIComponent(e)}`}),m=async({key:e})=>{var t,a;await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.duplicate()),c()},b=async()=>{const e=await u.create();i({key:e.name})},p=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this table?")&&(await((a=(t=l.value)==null?void 0:t.find(s=>s.name===e))==null?void 0:a.delete()),c())},f=_(()=>{var e,t;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(t=(e=l.value)==null?void 0:e.map(a=>({key:a.name,cells:[{text:a.name,classes:["title","centered"],link:`/_editor/table/${encodeURIComponent(a.name)}`},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:p,dangerous:!0},{icon:h,label:"Edit Table",onClick:i},{icon:k,label:"Duplicate",onClick:m}]}]})))!=null?t:[]}});return(e,t)=>(g(),T(I,{loading:d(r),title:"Database Tables",description:"Create and manage your database tables here.","create-button-text":"Create Table","empty-title":"No tables here yet",table:d(f),onCreate:b},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Tables.ee004403.js.map
