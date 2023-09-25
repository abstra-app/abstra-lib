import{d as g,ey as _,ex as P,H as w,u as s,b as k,c as I,eu as h}from"./registerWidgets.ca57da3e.js";import{e as C,b as x}from"./icons.1efe7950.js";import{a as z}from"./asyncComputed.ae0b6a3c.js";import{P as d}from"./project.d234b1a7.js";import"./gateway.b88d532a.js";import{O as D}from"./organization.ac190c20.js";import"./index.27945116.js";import{_ as v}from"./CrudView.vue_vue_type_script_setup_true_lang.7b5510ae.js";import"./activeRecord.f8743cd4.js";import"./pubsub.277d05a3.js";import"./passwordlessManager.8d47b009.js";import"./storage.2a7aac1e.js";import"./Modal.db45c3f3.js";import"./Title.e5d7f1b0.js";import"./transButton.a2961478.js";import"./index.b0c465bd.js";import"./Text.1f2709b6.js";import"./index.e15362b2.js";import"./index.9943ced7.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="82908ea2-28df-45ed-a43d-28fa55349e84",r._sentryDebugIdIdentifier="sentry-dbid-82908ea2-28df-45ed-a43d-28fa55349e84")}catch{}})();const S=g({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],i=_().params.organizationId,l=P(),{loading:p,result:n,refetch:u}=z(()=>Promise.all([d.list(i),D.get(i)]).then(([e,t])=>({projects:e,organization:t}))),c=({key:e})=>l.push({name:"project",params:{projectId:e}}),f=async e=>{const t=await d.create({organizationId:i,name:e.name});c({key:t.id})},y=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=n.value)==null?void 0:t.projects.find(b=>b.id===e))==null?void 0:o.delete()),u())},j=w(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Project Actions"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8)},{text:o.name,link:`/projects/${encodeURIComponent(o.id)}`},{text:"",actions:[{icon:C,label:"Edit Project",onClick:c},{icon:x,label:"Delete",onClick:y,dangerous:!0}]}]})))!=null?t:[]}});return(e,t)=>s(n)?(k(),I(v,{key:0,"entity-name":"project",loading:s(p),title:`${s(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:j.value,fields:a,onCreate:f},null,8,["loading","title","table"])):h("",!0)}});export{S as default};
//# sourceMappingURL=Projects.57ad689d.js.map
