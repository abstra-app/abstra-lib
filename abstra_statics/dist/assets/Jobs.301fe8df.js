import{d as y,K as _,b as g,t as h,z as l,H as J}from"./registerWidgets.d279c272.js";import{f as k,g as w,h as C}from"./icons.ba463d7d.js";import{a as I}from"./asyncComputed.c73f1d65.js";import{J as u}from"./jobs.f3d64041.js";import{R as x}from"./RuntimeList.8554cc46.js";import"./activeRecord.aa3f1ffe.js";import"./pubsub.8254a939.js";import"./DropdownMenu.99b20b8e.js";import"./CircularLoading.5f628841.js";import"./lottie.2c315e16.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="966e9c28-1bb9-46ec-9c5c-d83d4e972071",n._sentryDebugIdIdentifier="sentry-dbid-966e9c28-1bb9-46ec-9c5c-d83d4e972071")}catch{}})();const $=y({__name:"Jobs",setup(n){const i=J(),{loading:r,result:a,refetch:c}=I(()=>u.list()),d=({key:e})=>i.push({path:`/_editor/job/${encodeURIComponent(e)}`}),b=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.duplicate()),c()},p=async()=>{const e=await u.create();d({key:e.identifier})},f=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.delete()),c())},m=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:f,dangerous:!0},{icon:w,label:"Edit Job",onClick:d},{icon:C,label:"Duplicate",onClick:b}]}]})))!=null?o:[]}});return(e,o)=>(g(),h(x,{loading:l(r),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:l(m),onCreate:p},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Jobs.301fe8df.js.map
