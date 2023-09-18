import{d as m,ex as y,F as _,b as g,u as J,bu as h}from"./registerWidgets.fbede4e9.js";import{e as k,f as w,g as C}from"./icons.9ea484f9.js";import{a as x}from"./asyncComputed.ded4e064.js";import{J as l}from"./jobs.8fda85a0.js";import{R as I}from"./RuntimeList.0d397471.js";import"./activeRecord.4cd28aae.js";import"./pubsub.9639d873.js";import"./DropdownMenu.db99a3d3.js";import"./CircularLoading.1684a417.js";import"./lottie.af5deb23.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="6b5d4ad5-cc8c-4a74-a9be-0ea0d6e15df1",n._sentryDebugIdIdentifier="sentry-dbid-6b5d4ad5-cc8c-4a74-a9be-0ea0d6e15df1")}catch{}})();const $=m({__name:"Jobs",setup(n){const a=y(),{loading:r,result:i,refetch:c}=x(()=>l.list()),d=({key:e})=>a.push({path:`/_editor/job/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.duplicate()),c()},b=async()=>{const e=await l.create();d({key:e.identifier})},f=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=i.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.delete()),c())},p=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:f,dangerous:!0},{icon:w,label:"Edit Job",onClick:d},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(g(),J(I,{loading:h(r),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:p.value,onCreate:b},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Jobs.ca94f945.js.map
