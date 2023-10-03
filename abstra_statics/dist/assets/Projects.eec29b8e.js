import{d as w,eA as _,ez as P,J as k,u as c,b as h,c as I,ew as C,cN as x}from"./outputWidgets.9c7319a3.js";import{e as z,b as D}from"./icons.7f922924.js";import{a as N}from"./asyncComputed.4f211e9a.js";import{P as p}from"./project.b915243e.js";import"./console.ddba2fe3.js";import{O as v}from"./organization.f1580af4.js";import"./index.7182c077.js";import{_ as O}from"./CrudView.vue_vue_type_script_setup_true_lang.046f4489.js";import{a as A}from"./ant-design.01c29d21.js";import"./gateway.11574985.js";import"./activeRecord.fbece2b1.js";import"./pubsub.e71c2c71.js";import"./index.dd3ea531.js";import"./Form.c2ad178d.js";import"./Title.a4aa2216.js";import"./index.1801313b.js";import"./index.3196c263.js";import"./index.de5b115c.js";import"./dayjs.9be4d7c4.js";import"./index.e648c4b1.js";import"./index.72aeeab4.js";import"./TabPane.24647498.js";import"./index.e9144277.js";import"./index.1d2afde3.js";import"./index.b14da916.js";import"./index.6ef86d25.js";import"./index.a386f7d7.js";import"./index.38074075.js";import"./index.1825541b.js";import"./index.dc9577ba.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="87a02295-c951-4679-a895-bc12fde874d7",r._sentryDebugIdIdentifier="sentry-dbid-87a02295-c951-4679-a895-bc12fde874d7")}catch{}})();const me=w({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],n=_().params.organizationId,u=P(),{loading:f,result:i,refetch:y}=N(()=>Promise.all([p.list(n),v.get(n)]).then(([e,t])=>({projects:e,organization:t}))),m=({key:e})=>u.push({name:"project",params:{projectId:e}}),g=async e=>{const t=await p.create({organizationId:n,name:e.name});m({key:t.id})},b=async({key:e})=>{var o,d;if(await A("Are you sure you want to delete this project?"))try{await((d=(o=i.value)==null?void 0:o.projects.find(s=>s.id===e))==null?void 0:d.delete())}catch(s){x.error({message:"Error deleting project",description:String(s)})}finally{await y()}},j=k(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Actions",align:"right"}],rows:(t=(e=i.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8)},{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:z,label:"Edit Project",onClick:m},{icon:D,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>c(i)?(h(),I(O,{key:0,"entity-name":"project",loading:c(f),title:`${c(i).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:j.value,fields:a,onCreate:g},null,8,["loading","title","table"])):C("",!0)}});export{me as default};
//# sourceMappingURL=Projects.eec29b8e.js.map
