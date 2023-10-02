import{d as w,eA as _,ez as P,J as k,u as s,b as h,c as I,ew as C,cN as x}from"./outputWidgets.a732e2ee.js";import{e as z,b as D}from"./icons.2907d45a.js";import{a as N}from"./asyncComputed.8c09123d.js";import{P as d}from"./project.af81bb65.js";import"./console.3916321d.js";import{O as v}from"./organization.72411666.js";import"./index.3c51f3cb.js";import{_ as O}from"./CrudView.vue_vue_type_script_setup_true_lang.a3eb188e.js";import{a as A}from"./ant-design.0f77a967.js";import"./gateway.702e8be9.js";import"./activeRecord.30e3101b.js";import"./pubsub.e674f7d3.js";import"./index.503b52e5.js";import"./Form.810575f7.js";import"./Title.227355c5.js";import"./index.23256117.js";import"./index.d4ebf13a.js";import"./index.150bd0fa.js";import"./dayjs.28342a14.js";import"./index.386264ce.js";import"./index.b5d54032.js";import"./TabPane.7aaf8dd4.js";import"./index.fade4b0b.js";import"./index.ea2bcc93.js";import"./index.3d1baf20.js";import"./index.d731347d.js";import"./index.cf1c4484.js";import"./index.119d5c1a.js";import"./index.32eb63a2.js";import"./index.0d75f9f4.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[i]="5edfc647-57f2-42e0-9c7c-2c1e6c51382e",r._sentryDebugIdIdentifier="sentry-dbid-5edfc647-57f2-42e0-9c7c-2c1e6c51382e")}catch{}})();const me=w({__name:"Projects",setup(r){const i=[{key:"name",label:"Project Name"}],n=_().params.organizationId,u=P(),{loading:f,result:a,refetch:y}=N(()=>Promise.all([d.list(n),v.get(n)]).then(([e,t])=>({projects:e,organization:t}))),m=({key:e})=>u.push({name:"project",params:{projectId:e}}),g=async e=>{const t=await d.create({organizationId:n,name:e.name});m({key:t.id})},j=async({key:e})=>{var o,p;if(await A("Are you sure you want to delete this project?"))try{await((p=(o=a.value)==null?void 0:o.projects.find(c=>c.id===e))==null?void 0:p.delete())}catch(c){x.error({message:"Error deleting project",description:String(c)})}finally{await y()}},b=k(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Actions",align:"right"}],rows:(t=(e=a.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8)},{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:z,label:"Edit Project",onClick:m},{icon:D,label:"Delete",onClick:j,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>s(a)?(h(),I(O,{key:0,"entity-name":"project",loading:s(f),title:`${s(a).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:b.value,fields:i,onCreate:g},null,8,["loading","title","table"])):C("",!0)}});export{me as default};
//# sourceMappingURL=Projects.2d471a84.js.map
