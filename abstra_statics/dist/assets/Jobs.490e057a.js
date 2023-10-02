import{d as f,ez as y,J as _,b as g,c as J,u as h}from"./outputWidgets.a8117a96.js";import{e as k,a as w,b as C}from"./icons.a2f55d3f.js";import{a as I}from"./asyncComputed.9056df98.js";import{J as d}from"./jobs.c9c8a120.js";import{_ as v}from"./CrudView.vue_vue_type_script_setup_true_lang.e1025716.js";import{a as x}from"./ant-design.58ebbfd0.js";import"./activeRecord.835da29b.js";import"./pubsub.839e4d56.js";import"./index.d04c8459.js";import"./Title.37c465f2.js";import"./Form.d7531664.js";import"./index.3b67682a.js";import"./index.9449310d.js";import"./index.1243b379.js";import"./index.45c97bc2.js";import"./index.afc81c0a.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[n]="e3874da7-bf63-41b0-b287-2656132c431b",i._sentryDebugIdIdentifier="sentry-dbid-e3874da7-bf63-41b0-b287-2656132c431b")}catch{}})();const q=f({__name:"Jobs",setup(i){const n=y(),{loading:s,result:a,refetch:l}=I(()=>d.list()),c=({key:e})=>n.push({path:`/_editor/job/${encodeURIComponent(e)}`}),m=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.duplicate()),l()},p=async()=>{const e=await d.create();c({key:e.identifier})},u=async({key:e})=>{var o,t;await x("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.delete()),l())},b=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",actions:[{icon:k,label:"Edit Job",onClick:c},{icon:w,label:"Duplicate",onClick:m},{icon:C,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(g(),J(v,{loading:h(s),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:b.value,"entity-name":"Job",onCreate:p},null,8,["loading","table"]))}});export{q as default};
//# sourceMappingURL=Jobs.490e057a.js.map
