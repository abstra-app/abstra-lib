import{d as m,ex as y,F as _,b as g,u as J,bu as h}from"./registerWidgets.d31aafaf.js";import{e as k,f as w,g as C}from"./icons.f1f3c494.js";import{a as x}from"./asyncComputed.40d37d44.js";import{J as c}from"./jobs.5b5b88c4.js";import{R as I}from"./RuntimeList.76ae5af0.js";import"./activeRecord.ca632bbb.js";import"./pubsub.050a63c9.js";import"./DropdownMenu.97f7c1f3.js";import"./CircularLoading.78245968.js";import"./lottie.6e0a0fdf.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="b867278f-3841-4838-969b-27bb82dd8dfe",n._sentryDebugIdIdentifier="sentry-dbid-b867278f-3841-4838-969b-27bb82dd8dfe")}catch{}})();const $=m({__name:"Jobs",setup(n){const i=y(),{loading:r,result:a,refetch:d}=x(()=>c.list()),l=({key:e})=>i.push({path:`/_editor/job/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.duplicate()),d()},b=async()=>{const e=await c.create();l({key:e.identifier})},f=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(s=>s.identifier===e))==null?void 0:t.delete()),d())},p=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:f,dangerous:!0},{icon:w,label:"Edit Job",onClick:l},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(g(),J(I,{loading:h(r),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:p.value,onCreate:b},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Jobs.5a4fe481.js.map
