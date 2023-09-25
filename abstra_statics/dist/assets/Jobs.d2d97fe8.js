import{d as f,ex as y,H as _,b as J,c as g,u as h}from"./registerWidgets.d207d3d8.js";import{e as k,a as w,b as C}from"./icons.4cf3c6e7.js";import{a as x}from"./asyncComputed.9245c077.js";import{J as l}from"./jobs.7da71109.js";import{_ as I}from"./CrudView.vue_vue_type_script_setup_true_lang.892f2f1d.js";import"./activeRecord.3ac0bec0.js";import"./pubsub.a025efb1.js";import"./Modal.c3922cf6.js";import"./Title.db9c20f2.js";import"./transButton.c5e342ac.js";import"./index.ed3f099d.js";import"./Text.df3bd99f.js";import"./index.a3599972.js";import"./index.ce572c42.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="01999099-6bcd-449b-af33-45bab6bcbd1f",n._sentryDebugIdIdentifier="sentry-dbid-01999099-6bcd-449b-af33-45bab6bcbd1f")}catch{}})();const S=f({__name:"Jobs",setup(n){const i=y(),{loading:s,result:a,refetch:c}=x(()=>l.list()),d=({key:e})=>i.push({path:`/_editor/job/${encodeURIComponent(e)}`}),b=async({key:e})=>{var o,t;await((t=(o=a.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.duplicate()),c()},u=async()=>{const e=await l.create();d({key:e.identifier})},p=async({key:e})=>{var o,t;confirm("Are you sure you want to delete this job?")&&(await((t=(o=a.value)==null?void 0:o.find(r=>r.identifier===e))==null?void 0:t.delete()),c())},m=_(()=>{var e,o;return{columns:[{name:"Job Name"},{name:"Path"},{name:"Job Actions"}],rows:(o=(e=a.value)==null?void 0:e.map(t=>({key:t.identifier,cells:[{text:t.title,link:`/_editor/job/${encodeURIComponent(t.identifier)}`},{text:t.identifier},{text:"",actions:[{icon:k,label:"Edit Job",onClick:d},{icon:w,label:"Duplicate",onClick:b},{icon:C,label:"Delete",onClick:p,dangerous:!0}]}]})))!=null?o:[]}});return(e,o)=>(J(),g(I,{loading:h(s),title:"Python Jobs",description:"Schedule Python scripts like events on a calendar","create-button-text":"Create Job","empty-title":"No jobs here yet",table:m.value,"entity-name":"Job",onCreate:u},null,8,["loading","table"]))}});export{S as default};
//# sourceMappingURL=Jobs.d2d97fe8.js.map
