import{d as k,ex as y,F as b,b as h,u as g,bu as _}from"./registerWidgets.d31aafaf.js";import{e as H,f as w,g as C}from"./icons.f1f3c494.js";import{a as x}from"./asyncComputed.40d37d44.js";import{H as d}from"./hooks.ad6f9c90.js";import{R as I}from"./RuntimeList.76ae5af0.js";import"./activeRecord.ca632bbb.js";import"./pubsub.050a63c9.js";import"./DropdownMenu.97f7c1f3.js";import"./CircularLoading.78245968.js";import"./lottie.6e0a0fdf.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="70d9565b-9a08-4c22-bc77-3d78f8ca1e5a",a._sentryDebugIdIdentifier="sentry-dbid-70d9565b-9a08-4c22-bc77-3d78f8ca1e5a")}catch{}})();const $=k({__name:"Hooks",setup(a){const n=y(),{loading:r,result:s,refetch:c}=x(()=>d.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.duplicate()),c()},p=async()=>{const e=await d.create();l({key:e.path})},m=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this hook?")&&(await((t=(o=s.value)==null?void 0:o.find(i=>i.path===e))==null?void 0:t.delete()),c())},f=b(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Hook Actions"}],rows:(o=(e=s.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,classes:["title","centered"],link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",classes:["centered"],actions:[{icon:H,label:"Delete",onClick:m,dangerous:!0},{icon:w,label:"Edit Hook",onClick:l},{icon:C,label:"Duplicate",onClick:u}]}]})))!=null?o:[]}});return(e,o)=>(h(),g(I,{loading:_(r),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,onCreate:p},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Hooks.7809bfa0.js.map
