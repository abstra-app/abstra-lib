import{d as m,ex as y,H as _,b as J,c as g,u as h}from"./registerWidgets.7c26f935.js";import{e as k,a as w,b as C}from"./icons.d315d375.js";import{a as x}from"./asyncComputed.cfc29dee.js";import{J as d}from"./jobs.dad8f341.js";import{_ as I}from"./CrudView.vue_vue_type_script_setup_true_lang.7813a1ae.js";import"./activeRecord.d07557d8.js";import"./pubsub.c3a63076.js";import"./index.315bc9f8.js";import"./index.01e54af7.js";import"./Title.9a021125.js";import"./Form.ac091445.js";import"./index.611607c8.js";import"./index.9a7a96c9.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="7a54820c-25bf-4b38-9698-67d0afc70b00",n._sentryDebugIdIdentifier="sentry-dbid-7a54820c-25bf-4b38-9698-67d0afc70b00")}catch{}})();const O=m({__name:"Jobs",setup(n){const i=y(),{loading:s,result:a,refetch:c}=x(()=>d.list()),l=({key:e})=>i.push({path:`/_editor/job/${encodeURIComponent(e)}`}),u=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.duplicate()),c()},b=async()=>{const e=await d.create();l({key:e.identifier})},p=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.delete()),c())},f=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",actions:[{icon:k,label:"Edit Job",onClick:l},{icon:w,label:"Duplicate",onClick:u},{icon:C,label:"Delete",onClick:p,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(J(),g(I,{loading:h(s),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:f.value,"entity-name":"Job",onCreate:b},null,8,["loading","table"]))}});export{O as default};
//# sourceMappingURL=Jobs.c1f37c20.js.map
