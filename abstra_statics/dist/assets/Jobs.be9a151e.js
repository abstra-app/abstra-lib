import{d as f,ez as y,J as _,b as g,c as J,u as h}from"./outputWidgets.17392370.js";import{e as k,a as w,b as C}from"./icons.baa5f07a.js";import{a as I}from"./asyncComputed.76849272.js";import{J as d}from"./jobs.205fd41b.js";import{_ as v}from"./CrudView.vue_vue_type_script_setup_true_lang.c4e89a02.js";import{a as x}from"./ant-design.9c3ff8a2.js";import"./activeRecord.84b679f6.js";import"./pubsub.fc739490.js";import"./index.8d8985c7.js";import"./Title.bc3ff086.js";import"./Form.e398e550.js";import"./index.56ff0f0c.js";import"./index.fffd13c2.js";import"./index.8c91651f.js";import"./index.1fd97730.js";import"./index.ba0ff767.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[n]="1f9539b4-d996-4556-80be-100987e99a20",i._sentryDebugIdIdentifier="sentry-dbid-1f9539b4-d996-4556-80be-100987e99a20")}catch{}})();const q=f({__name:"Jobs",setup(i){const n=y(),{loading:s,result:a,refetch:l}=I(()=>d.list()),c=({key:e})=>n.push({path:`/_editor/job/${encodeURIComponent(e)}`}),m=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.duplicate()),l()},p=async()=>{const e=await d.create();c({key:e.identifier})},u=async({key:e})=>{var o,t;await x("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.delete()),l())},b=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",actions:[{icon:k,label:"Edit Job",onClick:c},{icon:w,label:"Duplicate",onClick:m},{icon:C,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(g(),J(v,{loading:h(s),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:b.value,"entity-name":"Job",onCreate:p},null,8,["loading","table"]))}});export{q as default};
//# sourceMappingURL=Jobs.be9a151e.js.map
