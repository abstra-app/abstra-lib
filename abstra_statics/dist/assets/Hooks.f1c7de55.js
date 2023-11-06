import{d as k,ey as y,H as h,b,c as g,u as _}from"./outputWidgets.3a1a3161.js";import{e as w,a as H,b as C}from"./icons.d8ed105c.js";import{a as I}from"./asyncComputed.3068c2f0.js";import{H as p}from"./hooks.83b588ef.js";import{C as x}from"./CrudView.3b8ef4e3.js";import{a as D}from"./ant-design.58442a38.js";import"./activeRecord.8f2918d8.js";import"./pubsub.2dc7d89a.js";import"./Text.499f5d9d.js";import"./Title.875549d8.js";import"./Form.58fb677e.js";import"./router.a09ce7b4.js";import"./index.62bc48c6.js";import"./url.8abf1d81.js";import"./index.4d93ecb2.js";import"./index.930d127f.js";import"./index.c9ce22b0.js";import"./index.46bd6cba.js";import"./index.1f4629a2.js";import"./index.0d5ed1d0.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="96998a35-9ecc-4dbd-a5bc-0e7957804041",a._sentryDebugIdIdentifier="sentry-dbid-96998a35-9ecc-4dbd-a5bc-0e7957804041")}catch{}})();const L=k({__name:"Hooks",setup(a){const n=y(),{loading:s,result:i,refetch:c}=I(()=>p.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),d=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.duplicate()),c()},m=async()=>{const e=await p.create();l({key:e.path})},u=async({key:e})=>{var o,t;await D("Are you sure you want to delete this hook?")&&(await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.delete()),c())},f=h(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:w,label:"Edit Hook",onClick:l},{icon:H,label:"Duplicate",onClick:d},{icon:C,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(b(),g(x,{loading:_(s),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,"entity-name":"Hook",onCreate:m},null,8,["loading","table"]))}});export{L as default};
//# sourceMappingURL=Hooks.f1c7de55.js.map
