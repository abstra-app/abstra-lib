import{d as w,eA as _,ez as P,J as k,u as c,b as h,c as I,ew as C,cG as x}from"./outputWidgets.6d878336.js";import{e as z,b as D}from"./icons.31732537.js";import{a as v}from"./asyncComputed.f4e8f601.js";import{P as d}from"./project.f8c69002.js";import"./console.bb49fd7b.js";import{O as N}from"./organization.21980a6e.js";import"./index.d3f5bc3d.js";import{_ as O}from"./CrudView.vue_vue_type_script_setup_true_lang.4ebf21bf.js";import{a as A}from"./ant-design.99b06c77.js";import"./gateway.04616128.js";import"./activeRecord.0d2b743a.js";import"./pubsub.7c8033ef.js";import"./index.9e0e45c6.js";import"./Form.9dbabc14.js";import"./Title.7777f40a.js";import"./CollapsePanel.e467f5eb.js";import"./index.48f0e3d4.js";import"./index.ec7066e1.js";import"./index.e1dcf4ff.js";import"./dayjs.52118055.js";import"./index.d8a13a23.js";import"./index.64e4975b.js";import"./TabPane.dac9512e.js";import"./index.f4029516.js";import"./index.ddda7671.js";import"./index.12ea9441.js";import"./index.21962144.js";import"./index.ab3edcb5.js";import"./index.defccd4f.js";import"./index.26308154.js";import"./index.40d5d1c1.js";import"./index.4179d6a8.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="39880fa8-1a51-4eb4-9da6-2607d1b3ec80",r._sentryDebugIdIdentifier="sentry-dbid-39880fa8-1a51-4eb4-9da6-2607d1b3ec80")}catch{}})();const de=w({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],n=_().params.organizationId,u=P(),{loading:f,result:i,refetch:y}=v(()=>Promise.all([d.list(n),N.get(n)]).then(([e,t])=>({projects:e,organization:t}))),m=({key:e})=>u.push({name:"project",params:{projectId:e}}),g=async e=>{const t=await d.create({organizationId:n,name:e.name});m({key:t.id})},b=async({key:e})=>{var o,p;if(await A("Are you sure you want to delete this project?"))try{await((p=(o=i.value)==null?void 0:o.projects.find(s=>s.id===e))==null?void 0:p.delete())}catch(s){x.error({message:"Error deleting project",description:String(s)})}finally{await y()}},j=k(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Actions",align:"right"}],rows:(t=(e=i.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8)},{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:z,label:"Edit Project",onClick:m},{icon:D,label:"Delete",onClick:b,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>c(i)?(h(),I(O,{key:0,"entity-name":"project",loading:c(f),title:`${c(i).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:j.value,fields:a,onCreate:g},null,8,["loading","title","table"])):C("",!0)}});export{de as default};
//# sourceMappingURL=Projects.e9598880.js.map
