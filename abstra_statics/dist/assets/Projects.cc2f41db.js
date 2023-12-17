import{d as w,eB as P,eA as k,G as C,u as c,b as _,c as h,ex as I,cw as x}from"./outputWidgets.44a09867.js";import{v,C as z}from"./icons.01b98633.js";import{a as D}from"./asyncComputed.ca8feacc.js";import"./authorManager.406561e5.js";import"./index.98cf761b.js";import{P as l}from"./project.f698c549.js";import{O as N}from"./organization.f1024fd7.js";import{C as O}from"./CrudView.d1bfe216.js";import{a as A}from"./ant-design.33e4bc75.js";import"./index.cf4c23b9.js";import"./record.0114cd31.js";import"./pubsub.34ae9a92.js";import"./gateway.7f6d0dbc.js";import"./Text.99f50980.js";import"./Title.a43de87d.js";import"./FormItem.2b0a230d.js";import"./hasIn.f57609f6.js";import"./Form.a1b95086.js";import"./Modal.14e98cf1.js";import"./router.5925e187.js";import"./index.f53f6439.js";import"./url.71cf45ef.js";import"./index.bdceb8c6.js";import"./index.d8ad33d9.js";import"./index.39653f90.js";import"./index.ac850b0f.js";import"./index.71a73ea9.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="62435a5c-2e9b-47d6-b7fb-8360a63b49b6",r._sentryDebugIdIdentifier="sentry-dbid-62435a5c-2e9b-47d6-b7fb-8360a63b49b6")}catch{}})();const ne=w({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],n=P().params.organizationId,u=k(),{loading:f,result:i,refetch:b}=D(()=>Promise.all([l.list(n),N.get(n)]).then(([e,t])=>({projects:e,organization:t}))),m=({key:e})=>u.push({name:"project",params:{projectId:e}}),y=async e=>{const t=await l.create({organizationId:n,name:e.name});m({key:t.id})},g=async({key:e})=>{var o,d;if(await A("Are you sure you want to delete this project?"))try{await((d=(o=i.value)==null?void 0:o.projects.find(s=>s.id===e))==null?void 0:d.delete())}catch(s){x.error({message:"Error deleting project",description:String(s)})}finally{await b()}},j=C(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Actions",align:"right"}],rows:(t=(e=i.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8)},{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:v,label:"Edit Project",onClick:m},{icon:z,label:"Delete",onClick:g,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>c(i)?(_(),h(O,{key:0,"entity-name":"project",loading:c(f),title:`${c(i).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:j.value,fields:a,onCreate:y},null,8,["loading","title","table"])):I("",!0)}});export{ne as default};
//# sourceMappingURL=Projects.cc2f41db.js.map
