import{d as j,K as P,z as s,b as w,t as _,D as k,J as C,H as I}from"./registerWidgets.c1da2b93.js";import{f as h,g as x}from"./icons.de44105b.js";import{a as z}from"./asyncComputed.519c40eb.js";import{P as d}from"./project.8d8f3167.js";import"./gateway.c457f9d6.js";import{O as D}from"./organization.7d09c7e1.js";import"./index.a3927ba7.js";import{C as N}from"./CrudView.c21fdfa3.js";import"./activeRecord.2664e76c.js";import"./pubsub.c7dd30c2.js";import"./passwordlessManager.4d2f4653.js";import"./DropdownMenu.2652eaca.js";import"./Modal.5655879a.js";import"./LoadingIndicator.8f360a48.js";import"./lottie.1c237c41.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="0c651d05-c6d6-4516-90ed-b3a859bf24a3",r._sentryDebugIdIdentifier="sentry-dbid-0c651d05-c6d6-4516-90ed-b3a859bf24a3")}catch{}})();const F=j({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],i=C().params.organizationId,m=I(),{loading:p,result:n,refetch:u}=z(()=>Promise.all([d.list(i),D.get(i)]).then(([e,t])=>({projects:e,organization:t}))),c=({key:e})=>m.push({name:"project",params:{projectId:e}}),f=async e=>{const t=await d.create({organizationId:i,name:e.name});c({key:t.id})},y=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=n.value)==null?void 0:t.projects.find(g=>g.id===e))==null?void 0:o.delete()),u())},b=P(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Project Actions"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8),classes:["centered"]},{text:o.name,classes:["title"],link:`/projects/${encodeURIComponent(o.id)}`},{text:"",classes:["centered"],actions:[{icon:h,label:"Delete",onClick:y,dangerous:!0},{icon:x,label:"Edit Project",onClick:c}]}]})))!=null?t:[]}});return(e,t)=>s(n)?(w(),_(N,{key:0,"entity-name":"project",loading:s(p),title:`${s(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:s(b),fields:a,onCreate:f},null,8,["loading","title","table"])):k("",!0)}});export{F as default};
//# sourceMappingURL=Projects.f5e75c1e.js.map
