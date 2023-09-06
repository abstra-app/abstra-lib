import{d as m,ex as y,F as _,b as g,u as J,bu as h}from"./registerWidgets.0e440875.js";import{e as k,f as w,g as C}from"./icons.ec86d93d.js";import{a as x}from"./asyncComputed.8678d980.js";import{J as d}from"./jobs.4e9e61c1.js";import{R as I}from"./RuntimeList.43596a2e.js";import"./activeRecord.a7f077c5.js";import"./pubsub.3f22547d.js";import"./DropdownMenu.b7d3c372.js";import"./CircularLoading.ff49d5b5.js";import"./lottie.1b91379a.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="12e202a9-7153-4c04-b203-e0aee9cdbc91",n._sentryDebugIdIdentifier="sentry-dbid-12e202a9-7153-4c04-b203-e0aee9cdbc91")}catch{}})();const $=m({__name:"Jobs",setup(n){const i=y(),{loading:r,result:a,refetch:c}=x(()=>d.list()),l=({key:e})=>i.push({path:`/_editor/job/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.duplicate()),c()},b=async()=>{const e=await d.create();l({key:e.identifier})},p=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.delete()),c())},f=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:p,dangerous:!0},{icon:w,label:"Edit Job",onClick:l},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(g(),J(I,{loading:h(r),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:f.value,onCreate:b},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Jobs.5bd18021.js.map
