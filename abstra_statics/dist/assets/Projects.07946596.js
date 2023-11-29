import{d as w,eB as P,eA as k,G as _,u as c,b as h,c as C,ew as I,cz as x}from"./outputWidgets.5836624b.js";import{e as z,d as D}from"./icons.715dfb53.js";import{a as v}from"./asyncComputed.134d378f.js";import{P as l}from"./project.07df296b.js";import"./router.6746eb60.js";import{O as N}from"./organization.5280e42d.js";import"./columns.4caf6e41.js";import{C as O}from"./CrudView.31db109e.js";import{a as A}from"./ant-design.26339c10.js";import"./gateway.681b899a.js";import"./record.07dfd257.js";import"./pubsub.a82123ee.js";import"./Base.e549b429.js";import"./transButton.c5f8a15c.js";import"./Text.f4671d75.js";import"./Title.5e396b16.js";import"./index.ba80cfa7.js";import"./url.3b0a0ce2.js";import"./index.636b5d6d.js";import"./index.8d4f5f15.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="bbf0ff42-f806-44fc-9408-a6a1c5527a73",r._sentryDebugIdIdentifier="sentry-dbid-bbf0ff42-f806-44fc-9408-a6a1c5527a73")}catch{}})();const Z=w({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],i=P().params.organizationId,f=k(),{loading:u,result:n,refetch:y}=v(()=>Promise.all([l.list(i),N.get(i)]).then(([e,t])=>({projects:e,organization:t}))),m=({key:e})=>f.push({name:"project",params:{projectId:e}}),g=async e=>{const t=await l.create({organizationId:i,name:e.name});m({key:t.id})},b=async({key:e})=>{var o,d;if(await A("Are you sure you want to delete this project?"))try{await((d=(o=n.value)==null?void 0:o.projects.find(s=>s.id===e))==null?void 0:d.delete())}catch(s){x.error({message:"Error deleting project",description:String(s)})}finally{await y()}},j=_(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Actions",align:"right"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8)},{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:z,label:"Edit Project",onClick:m},{icon:D,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>c(n)?(h(),C(O,{key:0,"entity-name":"project",loading:c(u),title:`${c(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:j.value,fields:a,onCreate:g},null,8,["loading","title","table"])):I("",!0)}});export{Z as default};
//# sourceMappingURL=Projects.07946596.js.map
