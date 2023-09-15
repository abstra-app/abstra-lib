import{d as m,ex as y,F as _,b as g,u as J,bu as h}from"./registerWidgets.65ad7269.js";import{e as k,f as w,g as C}from"./icons.af1545d2.js";import{a as x}from"./asyncComputed.bc9bb426.js";import{J as l}from"./jobs.94a8b6f4.js";import{R as I}from"./RuntimeList.ac15a6e1.js";import"./activeRecord.7584f904.js";import"./pubsub.ae54b92c.js";import"./DropdownMenu.4f61f503.js";import"./CircularLoading.bb6b6696.js";import"./lottie.ac26577d.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="a1620f4c-01d4-4b42-9dbf-f29cadf26298",n._sentryDebugIdIdentifier="sentry-dbid-a1620f4c-01d4-4b42-9dbf-f29cadf26298")}catch{}})();const $=m({__name:"Jobs",setup(n){const i=y(),{loading:r,result:a,refetch:c}=x(()=>l.list()),d=({key:e})=>i.push({path:`/_editor/job/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.duplicate()),c()},f=async()=>{const e=await l.create();d({key:e.identifier})},b=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.delete()),c())},p=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:b,dangerous:!0},{icon:w,label:"Edit Job",onClick:d},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(g(),J(I,{loading:h(r),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:p.value,onCreate:f},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Jobs.43ac0c4b.js.map
