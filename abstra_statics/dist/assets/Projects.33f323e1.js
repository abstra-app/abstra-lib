import{d as w,eA as P,ez as k,G as _,u as c,b as h,c as C,ew as I,cA as x}from"./outputWidgets.83063e9d.js";import{e as z,d as D}from"./icons.996017df.js";import{a as v}from"./asyncComputed.f2c25133.js";import"./router.3b004330.js";import"./index.60785ed8.js";import{P as l}from"./project.6af31c46.js";import{O as A}from"./organization.84d6f480.js";import{C as N}from"./CrudView.efc40074.js";import{a as O}from"./ant-design.ca0fbd0a.js";import"./Form.b4d537d1.js";import"./index.e1d1b17f.js";import"./record.e3dbd07d.js";import"./pubsub.76029b33.js";import"./gateway.43de96d6.js";import"./index.49c10c45.js";import"./Title.389f1e86.js";import"./url.6f4f0208.js";import"./index.853ae7ea.js";import"./index.d80dfd86.js";import"./index.2f72f386.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="7f380bd5-39bf-4f42-aaab-24aff6e424e2",r._sentryDebugIdIdentifier="sentry-dbid-7f380bd5-39bf-4f42-aaab-24aff6e424e2")}catch{}})();const Z=w({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],i=P().params.organizationId,f=k(),{loading:u,result:n,refetch:y}=v(()=>Promise.all([l.list(i),A.get(i)]).then(([e,t])=>({projects:e,organization:t}))),m=({key:e})=>f.push({name:"project",params:{projectId:e}}),b=async e=>{const t=await l.create({organizationId:i,name:e.name});m({key:t.id})},g=async({key:e})=>{var o,d;if(await O("Are you sure you want to delete this project?"))try{await((d=(o=n.value)==null?void 0:o.projects.find(s=>s.id===e))==null?void 0:d.delete())}catch(s){x.error({message:"Error deleting project",description:String(s)})}finally{await y()}},j=_(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Actions",align:"right"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8)},{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:z,label:"Edit Project",onClick:m},{icon:D,label:"Delete",onClick:g,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>c(n)?(h(),C(N,{key:0,"entity-name":"project",loading:c(u),title:`${c(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:j.value,fields:a,onCreate:b},null,8,["loading","title","table"])):I("",!0)}});export{Z as default};
//# sourceMappingURL=Projects.33f323e1.js.map
