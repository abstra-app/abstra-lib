import{d as y,ey as g,H as _,b as h,c as w,w as C,u as J,aI as d,e as k}from"./outputWidgets.90e6e058.js";import{e as x,a as I,b as v}from"./icons.c312238c.js";import{a as D}from"./asyncComputed.7f2daf83.js";import{J as p}from"./jobs.7c53246e.js";import{C as N}from"./CrudView.2d890130.js";import{a as P}from"./ant-design.3d151fb4.js";import"./activeRecord.cc3d068e.js";import"./pubsub.80dfc1ff.js";import"./index.2999430f.js";import"./Title.25e5f53e.js";import"./Form.8195c49f.js";import"./router.b77dd044.js";import"./index.9bc2e13c.js";import"./url.02d2e294.js";import"./index.c12149e6.js";import"./index.3a2cb23d.js";import"./index.7d2ead74.js";import"./index.29490a3d.js";import"./index.166847b9.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[i]="ec8e1604-8a7e-494e-ac50-82f3aa386b9c",a._sentryDebugIdIdentifier="sentry-dbid-ec8e1604-8a7e-494e-ac50-82f3aa386b9c")}catch{}})();const V=k("a",{href:"https://abstra.io/pricing",target:"_blank"},"Pricing page",-1),W=y({__name:"Jobs",setup(a){const i=g(),{loading:s,result:n,refetch:c}=D(()=>p.list()),l=({key:e})=>i.push({path:`/_editor/job/${encodeURIComponent(e)}`}),m=async({key:e})=>{var o,t;await((t=(o=n.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await p.create();l({key:e.identifier})},b=async({key:e})=>{var o,t;await P("Are you sure you want to delete this job?")&&(await((t=(o=n.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.delete()),c())},f=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Actions",align:"right"}],rows:(o=(e=n.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",actions:[{icon:x,label:"Edit Job",onClick:l},{icon:I,label:"Duplicate",onClick:m},{icon:v,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(h(),w(N,{loading:J(s),title:"Python Jobs","create-button-text":"Create Job",description:"Schedule Python scripts like events on a calendar.","empty-title":"No jobs here yet",table:f.value,"entity-name":"Job",onCreate:u},{warning:C(()=>[d(" Jobs are exclusive to Cloud plans. Visit our "),V,d(" to learn more. ")]),_:1},8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Jobs.8d68cedc.js.map
