import{d as y,K as h,b,t as g,z as d,H as _}from"./registerWidgets.6ceeeb3e.js";import{f as H,g as w,h as C}from"./icons.485db9b0.js";import{a as I}from"./asyncComputed.269fb65a.js";import{H as p}from"./hooks.c4fac734.js";import{R as x}from"./RuntimeList.63be1a59.js";import"./activeRecord.89180b3a.js";import"./pubsub.763a2075.js";import"./DropdownMenu.f8d90797.js";import"./CircularLoading.8811b083.js";import"./lottie.a31f13a3.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="c7d710c6-58cc-436a-880a-96a9e461ff35",a._sentryDebugIdIdentifier="sentry-dbid-c7d710c6-58cc-436a-880a-96a9e461ff35")}catch{}})();const $=y({__name:"Hooks",setup(a){const n=_(),{loading:r,result:s,refetch:c}=I(()=>p.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},m=async()=>{const e=await p.create();l({key:e.path})},f=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this hook?")&&(await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.delete()),c())},k=h(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Hook Actions"}],rows:(o=(e=s.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:H,label:"Delete",onClick:f,dangerous:!0},{icon:w,label:"Edit Hook",onClick:l},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(b(),g(x,{loading:d(r),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:d(k),onCreate:m},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Hooks.7072e9fd.js.map
