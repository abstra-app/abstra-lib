import{d as f,K as y,b as D,t as b,z as c,H as w}from"./registerWidgets.bb4c7eff.js";import{f as C,g as _,h as k}from"./icons.e3de8035.js";import{a as g}from"./asyncComputed.0adffaf6.js";import{D as r}from"./dashes.c877f4ad.js";import{R as x}from"./RuntimeList.d9b613c2.js";import"./activeRecord.57c6bf02.js";import"./runnerData.e56dab20.js";import"./DropdownMenu.45ad2be4.js";import"./CircularLoading.8dab92fc.js";const $=f({__name:"Dashes",setup(R){const l=w(),{loading:p,result:o,refetch:n}=g(()=>r.list()),i=({key:e})=>l.push({path:`/_editor/dash/${encodeURIComponent(e)}`}),d=async({key:e})=>{var a,t;await((t=(a=o.value)==null?void 0:a.find(s=>s.path===e))==null?void 0:t.duplicate()),n()},h=async()=>{const e=await r.create();i({key:e.path})},u=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this dash?")&&(await((t=(a=o.value)==null?void 0:a.find(s=>s.path===e))==null?void 0:t.delete()),n())},m=y(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Dash Actions"}],rows:(a=(e=o.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:u,dangerous:!0},{icon:_,label:"Edit Dash",onClick:i},{icon:k,label:"Duplicate",onClick:d}]}]})))!=null?a:[]}});return(e,a)=>(D(),b(x,{loading:c(p),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:c(m),onCreate:h},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Dashes.1ed8ed7f.js.map
