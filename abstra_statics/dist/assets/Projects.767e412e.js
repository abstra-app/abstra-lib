import{d as w,ez as P,ey as k,H as C,u as c,b as _,c as h,ev as I,cC as x}from"./outputWidgets.d5738148.js";import{e as z,b as v}from"./icons.fc57d5d6.js";import{a as D}from"./asyncComputed.5b25749a.js";import{P as l}from"./project.24d4e1a8.js";import"./router.6dfa30a6.js";import{O as N}from"./organization.c2d3b0b1.js";import"./columns.0cf76977.js";import{C as O}from"./CrudView.1762d1c1.js";import{a as E}from"./ant-design.5238fdc0.js";import"./gateway.243c7c9e.js";import"./activeRecord.bb15dfc5.js";import"./pubsub.601f5d35.js";import"./Title.69748959.js";import"./index.f7210413.js";import"./index.f4ac7424.js";import"./index.a6d8d08b.js";import"./Form.45dee1c8.js";import"./url.d1f492ee.js";import"./index.faad752e.js";import"./index.f9a2f10c.js";import"./index.2791d1cb.js";import"./index.3bddf189.js";import"./index.ffe76733.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="d3b97225-6e03-4506-8e16-c4e040a6a02c",r._sentryDebugIdIdentifier="sentry-dbid-d3b97225-6e03-4506-8e16-c4e040a6a02c")}catch{}})();const oe=w({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],i=P().params.organizationId,u=k(),{loading:f,result:n,refetch:y}=D(()=>Promise.all([l.list(i),N.get(i)]).then(([e,t])=>({projects:e,organization:t}))),m=({key:e})=>u.push({name:"project",params:{projectId:e}}),g=async e=>{const t=await l.create({organizationId:i,name:e.name});m({key:t.id})},b=async({key:e})=>{var o,d;if(await E("Are you sure you want to delete this project?"))try{await((d=(o=n.value)==null?void 0:o.projects.find(s=>s.id===e))==null?void 0:d.delete())}catch(s){x.error({message:"Error deleting project",description:String(s)})}finally{await y()}},j=C(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Actions",align:"right"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8)},{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:z,label:"Edit Project",onClick:m},{icon:v,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>c(n)?(_(),h(O,{key:0,"entity-name":"project",loading:c(f),title:`${c(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:j.value,fields:a,onCreate:g},null,8,["loading","title","table"])):I("",!0)}});export{oe as default};
//# sourceMappingURL=Projects.767e412e.js.map
