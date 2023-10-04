import{d as k,ez as y,J as b,b as h,c as _,u as g}from"./outputWidgets.75a5b0b9.js";import{e as w,a as H,b as C}from"./icons.c04528be.js";import{a as I}from"./asyncComputed.c701d7b0.js";import{H as p}from"./hooks.1c8a8ebc.js";import{_ as x}from"./CrudView.vue_vue_type_script_setup_true_lang.ff628288.js";import{a as D}from"./ant-design.7c6678de.js";import"./activeRecord.115270b9.js";import"./pubsub.3fa240d3.js";import"./index.49e953af.js";import"./Title.b6c9692d.js";import"./Form.2c716183.js";import"./index.e24c456b.js";import"./index.5a67eb5f.js";import"./index.9c0809a0.js";import"./index.5e9c5434.js";import"./index.4598445f.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[n]="0e5db0e5-6ab8-4ca0-9c37-091cea6cf3eb",a._sentryDebugIdIdentifier="sentry-dbid-0e5db0e5-6ab8-4ca0-9c37-091cea6cf3eb")}catch{}})();const j=k({__name:"Hooks",setup(a){const n=y(),{loading:s,result:i,refetch:c}=I(()=>p.list()),l=({key:e})=>n.push({path:`/_editor/hook/${encodeURIComponent(e)}`}),d=async({key:e})=>{var o,t;await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await p.create();l({key:e.path})},m=async({key:e})=>{var o,t;await D("Are you sure you want to delete this hook?")&&(await((t=(o=i.value)==null?void 0:o.find(r=>r.path===e))==null?void 0:t.delete()),c())},f=b(()=>{var e,o;return{columns:[{name:"Hook Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=i.value)==null?void 0:e.map(t=>({key:t.path,cells:[{text:t.title,link:`/_editor/hook/${encodeURIComponent(t.path)}`},{text:t.path},{text:"",actions:[{icon:w,label:"Edit Hook",onClick:l},{icon:H,label:"Duplicate",onClick:d},{icon:C,label:"Delete",onClick:m,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(h(),_(x,{loading:g(s),title:"Python Hooks",description:"Trigger your Python scripts with a request.","create-button-text":"Create Hook","empty-title":"No hooks here yet",table:f.value,"entity-name":"Hook",onCreate:u},null,8,["loading","table"]))}});export{j as default};
//# sourceMappingURL=Hooks.55a07372.js.map
