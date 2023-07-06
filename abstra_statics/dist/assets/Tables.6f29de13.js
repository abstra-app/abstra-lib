import{d as f,K as T,b as y,t as C,z as i,H as _}from"./registerWidgets.7452ec0b.js";import{f as h,g as k,h as g}from"./icons.97625e56.js";import{a as w}from"./asyncComputed.23d75013.js";import{T as c}from"./tables.0812fe41.js";import{R as x}from"./RuntimeList.9384f45c.js";import"./utils.95f0e9e8.js";import"./pubsub.a0411919.js";import"./DropdownMenu.e6caac19.js";import"./CircularLoading.6725993e.js";const E=f({__name:"Tables",setup(R){const r=_(),{loading:m,result:o,refetch:l}=w(()=>c.list()),s=({key:e})=>r.push({path:`/_editor/table/${encodeURIComponent(e)}`}),d=async({key:e})=>{var t,a;await((a=(t=o.value)==null?void 0:t.find(n=>n.name===e))==null?void 0:a.duplicate()),l()},u=async()=>{const e=await c.create();s({key:e.name})},p=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this table?")&&(await((a=(t=o.value)==null?void 0:t.find(n=>n.name===e))==null?void 0:a.delete()),l())},b=T(()=>{var e,t;return{columns:[{name:"Table Name"},{name:"Table Actions"}],rows:(t=(e=o.value)==null?void 0:e.map(a=>({key:a.name,cells:[{text:a.name,classes:["title","centered"],link:`/_editor/table/${encodeURIComponent(a.name)}`},{text:"",classes:["centered"],actions:[{icon:h,label:"Delete",onClick:p,dangerous:!0},{icon:k,label:"Edit Table",onClick:s},{icon:g,label:"Duplicate",onClick:d}]}]})))!=null?t:[]}});return(e,t)=>(y(),C(x,{loading:i(m),title:"Database Tables",description:"Create and manage your database tables here.","create-button-text":"Create Table","empty-title":"No tables here yet",table:i(b),onCreate:u},null,8,["loading","table"]))}});export{E as default};
//# sourceMappingURL=Tables.6f29de13.js.map
