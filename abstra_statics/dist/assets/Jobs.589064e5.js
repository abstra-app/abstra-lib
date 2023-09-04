import{d as m,ex as y,F as _,b as g,u as J,bu as h}from"./registerWidgets.f19e2bf7.js";import{e as k,f as w,g as C}from"./icons.0f934f2b.js";import{a as x}from"./asyncComputed.e329b09e.js";import{J as d}from"./jobs.d65dfa92.js";import{R as I}from"./RuntimeList.ffd3c175.js";import"./activeRecord.05dbc88c.js";import"./pubsub.e0e377e9.js";import"./DropdownMenu.7619c5d9.js";import"./CircularLoading.436414d1.js";import"./lottie.be9dd415.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="97f32410-999c-4970-af27-18dd220b4cc3",n._sentryDebugIdIdentifier="sentry-dbid-97f32410-999c-4970-af27-18dd220b4cc3")}catch{}})();const $=m({__name:"Jobs",setup(n){const i=y(),{loading:r,result:a,refetch:c}=x(()=>d.list()),l=({key:e})=>i.push({path:`/_editor/job/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.duplicate()),c()},f=async()=>{const e=await d.create();l({key:e.identifier})},p=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.delete()),c())},b=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:p,dangerous:!0},{icon:w,label:"Edit Job",onClick:l},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(g(),J(I,{loading:h(r),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:b.value,onCreate:f},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Jobs.589064e5.js.map
