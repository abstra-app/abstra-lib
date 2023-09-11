import{d as f,ex as b,F as y,b as D,u as w,bu as g}from"./registerWidgets.cd0230b6.js";import{e as _,f as k,g as C}from"./icons.79c2c142.js";import{a as x}from"./asyncComputed.d5643777.js";import{D as l}from"./dashes.9a9e723c.js";import{R as v}from"./RuntimeList.423f12c5.js";import"./activeRecord.87f5172c.js";import"./pubsub.acd37fe2.js";import"./index.880d8f1c.js";import"./DropdownMenu.43cd71e8.js";import"./CircularLoading.a808730a.js";import"./lottie.3848dff9.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[s]="4021f16d-1011-48b6-921c-cc8b7d44d037",o._sentryDebugIdIdentifier="sentry-dbid-4021f16d-1011-48b6-921c-cc8b7d44d037")}catch{}})();const Q=f({__name:"Dashes",setup(o){const s=b(),{loading:r,result:n,refetch:c}=x(()=>l.list()),d=({key:e})=>s.push({name:"dashEditor",params:{dashPath:e}}),u=async({key:e})=>{var a,t;await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},p=async()=>{const e=await l.create();d({key:e.path})},h=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this dash?")&&(await((t=(a=n.value)==null?void 0:a.find(i=>i.path===e))==null?void 0:t.delete()),c())},m=y(()=>{var e,a;return{columns:[{name:"Dash Name"},{name:"Path"},{name:"Dash Actions"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/dash/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:_,label:"Delete",onClick:h,dangerous:!0},{icon:k,label:"Edit Dash",onClick:d},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?a:[]}});return(e,a)=>(D(),w(v,{loading:g(r),title:"Python Dashes",description:"Create a dashboard page with charts and inputs interacting with your python code.","create-button-text":"Create Dash","empty-title":"No dashes here yet","video-url":"https://www.youtube.com/embed/oYMptrk7QNE",table:m.value,onCreate:p},null,8,["loading","table"]))}});export{Q as default};
//# sourceMappingURL=Dashes.6fac3813.js.map
