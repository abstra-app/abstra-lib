import{d as k,eA as y,G as b,b as h,c as g,u as _}from"./outputWidgets.d96d8339.js";import{e as w,d as C,a as H}from"./icons.bad5ea5a.js";import{a as I}from"./asyncComputed.b5402712.js";import{H as p}from"./hooks.ac422217.js";import{C as x}from"./CrudView.574d25b2.js";import{a as D}from"./ant-design.6de06532.js";import"./activeRecord.2be45119.js";import"./pubsub.bf2d764d.js";import"./Text.566a0688.js";import"./Base.bcebef10.js";import"./transButton.d2c74eca.js";import"./router.68333996.js";import"./Title.77c2e5df.js";import"./index.2d565ddc.js";import"./url.3523cb32.js";import"./index.e157f2bc.js";import"./index.fde70b9c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="1a223bc7-c929-4baa-8a06-822eba7f3ac5",a._sentryDebugIdIdentifier="sentry-dbid-1a223bc7-c929-4baa-8a06-822eba7f3ac5")}catch{}})();const z=k({__name:"Hooks",setup(a){const n=y(),{loading:s,result:i,refetch:c}=I(()=>p.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),d=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await p.create();l({key:e.path})},m=async({key:e})=>{var o,t;await D("Are you sure you want to delete this hook?")&&(await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.delete()),c())},f=b(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:w,label:"Edit Hook",onClick:l},{icon:C,label:"Duplicate",onClick:d},{icon:H,label:"Delete",onClick:m,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(h(),g(x,{loading:_(s),title:"Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,"entity-name":"Hook",onCreate:u},null,8,["loading","table"]))}});export{z as default};
//# sourceMappingURL=Hooks.799bab91.js.map
