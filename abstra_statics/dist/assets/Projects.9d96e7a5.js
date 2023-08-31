import{d as g,K as P,J as w,L as _,A as i,b as k,u as C,E as I}from"./registerWidgets.a9b9c198.js";import{e as h,f as x}from"./icons.e4ff78f2.js";import{a as z}from"./asyncComputed.380e0794.js";import{P as d}from"./project.f1bf73fa.js";import"./gateway.ff7b2acd.js";import{O as D}from"./organization.bd8b615c.js";import"./index.6965b89d.js";import{C as v}from"./CrudView.17d5ced2.js";import"./activeRecord.ded96690.js";import"./pubsub.d6cf90d7.js";import"./passwordlessManager.18e9d509.js";import"./DropdownMenu.cf7e2976.js";import"./Modal.0c783a31.js";import"./LoadingIndicator.32e0b7e2.js";import"./lottie.cb2a87b3.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="950e9b11-6d1e-4a5b-983f-a087c6777963",r._sentryDebugIdIdentifier="sentry-dbid-950e9b11-6d1e-4a5b-983f-a087c6777963")}catch{}})();const F=g({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],s=P().params.organizationId,m=w(),{loading:u,result:n,refetch:p}=z(()=>Promise.all([d.list(s),D.get(s)]).then(([e,t])=>({projects:e,organization:t}))),c=({key:e})=>m.push({name:"project",params:{projectId:e}}),f=async e=>{const t=await d.create({organizationId:s,name:e.name});c({key:t.id})},y=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=n.value)==null?void 0:t.projects.find(j=>j.id===e))==null?void 0:o.delete()),p())},b=_(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Project Actions"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8),classes:["centered"]},{text:o.name,classes:["title"],link:`/projects/${encodeURIComponent(o.id)}`},{text:"",classes:["centered"],actions:[{icon:h,label:"Delete",onClick:y,dangerous:!0},{icon:x,label:"Edit Project",onClick:c}]}]})))!=null?t:[]}});return(e,t)=>i(n)?(k(),C(v,{key:0,"entity-name":"project",loading:i(u),title:`${i(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:b.value,fields:a,onCreate:f},null,8,["loading","title","table"])):I("",!0)}});export{F as default};
//# sourceMappingURL=Projects.9d96e7a5.js.map
