import{d as b,ey as k,H as y,b as h,c as g,u as _}from"./outputWidgets.d5738148.js";import{e as w,a as H,b as C}from"./icons.fc57d5d6.js";import{a as I}from"./asyncComputed.5b25749a.js";import{H as p}from"./hooks.52b998fc.js";import{C as x}from"./CrudView.1762d1c1.js";import{a as D}from"./ant-design.5238fdc0.js";import"./activeRecord.bb15dfc5.js";import"./pubsub.601f5d35.js";import"./index.a6d8d08b.js";import"./Title.69748959.js";import"./Form.45dee1c8.js";import"./router.6dfa30a6.js";import"./index.f7210413.js";import"./url.d1f492ee.js";import"./index.faad752e.js";import"./index.f9a2f10c.js";import"./index.2791d1cb.js";import"./index.3bddf189.js";import"./index.ffe76733.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="8fbfe128-6256-4b66-82bb-fc27b8d949f9",a._sentryDebugIdIdentifier="sentry-dbid-8fbfe128-6256-4b66-82bb-fc27b8d949f9")}catch{}})();const K=b({__name:"Hooks",setup(a){const n=k(),{loading:s,result:i,refetch:l}=I(()=>p.list()),c=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),d=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.duplicate()),l()},m=async()=>{const e=await p.create();c({key:e.path})},u=async({key:e})=>{var o,t;await D("Are you sure you want to delete this hook?")&&(await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.delete()),l())},f=y(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:w,label:"Edit Hook",onClick:c},{icon:H,label:"Duplicate",onClick:d},{icon:C,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(h(),g(x,{loading:_(s),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,"entity-name":"Hook",onCreate:m},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Hooks.88994a02.js.map
