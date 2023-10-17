import{d as b,ez as y,J as _,b as g,c as J,u as h}from"./outputWidgets.d94fff8c.js";import{e as w,a as C,b as k}from"./icons.fec42461.js";import{a as I}from"./asyncComputed.6da48dd7.js";import{J as l}from"./jobs.314c73b6.js";import{C as v}from"./CrudView.e6c5592c.js";import{a as x}from"./ant-design.b0e50c8b.js";import"./activeRecord.4bb9e983.js";import"./pubsub.39314a92.js";import"./index.7d7e00b1.js";import"./Title.c70c7e79.js";import"./Form.57801503.js";import"./router.4a188c48.js";import"./index.3dad0da1.js";import"./url.596d80c9.js";import"./index.e7f021ad.js";import"./index.3709b59d.js";import"./index.0f14f01f.js";import"./index.209f6c1c.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[a]="a13b489b-5fa2-451a-9cdb-472dfa20f1c7",i._sentryDebugIdIdentifier="sentry-dbid-a13b489b-5fa2-451a-9cdb-472dfa20f1c7")}catch{}})();const G=b({__name:"Jobs",setup(i){const a=y(),{loading:s,result:n,refetch:c}=I(()=>l.list()),d=({key:e})=>a.push({path:`/_editor/job/${encodeURIComponent(e)}`}),p=async({key:e})=>{var o,t;await((t=(o=n.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.duplicate()),c()},m=async()=>{const e=await l.create();d({key:e.identifier})},u=async({key:e})=>{var o,t;await x("Are you sure you want to delete this job?")&&(await((t=(o=n.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.delete()),c())},f=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=n.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",actions:[{icon:w,label:"Edit Job",onClick:d},{icon:C,label:"Duplicate",onClick:p},{icon:k,label:"Delete",onClick:u,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(g(),J(v,{loading:h(s),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:f.value,"entity-name":"Job",onCreate:m},null,8,["loading","table"]))}});export{G as default};
//# sourceMappingURL=Jobs.1ab409dd.js.map
