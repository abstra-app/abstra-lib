import{d as g,J as P,H as w,K as _,z as i,b as k,t as C,D as I}from"./registerWidgets.32e538e0.js";import{e as h,f as x}from"./icons.193c287e.js";import{a as z}from"./asyncComputed.475e48d8.js";import{P as d}from"./project.a91d9490.js";import"./gateway.648b83c3.js";import{O as D}from"./organization.b8d9fde0.js";import"./index.5be9ac38.js";import{C as v}from"./CrudView.b2b9e10a.js";import"./activeRecord.836423a5.js";import"./pubsub.9fbafc27.js";import"./passwordlessManager.7ac387f4.js";import"./DropdownMenu.18fac813.js";import"./Modal.5431fc7d.js";import"./LoadingIndicator.7c371011.js";import"./lottie.82abd3f0.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[n]="1987ff80-69d6-47df-8b03-008d676c21e9",r._sentryDebugIdIdentifier="sentry-dbid-1987ff80-69d6-47df-8b03-008d676c21e9")}catch{}})();const F=g({__name:"Projects",setup(r){const n=[{key:"name",label:"Project Name"}],s=P().params.organizationId,m=w(),{loading:u,result:a,refetch:p}=z(()=>Promise.all([d.list(s),D.get(s)]).then(([e,t])=>({projects:e,organization:t}))),c=({key:e})=>m.push({name:"project",params:{projectId:e}}),f=async e=>{const t=await d.create({organizationId:s,name:e.name});c({key:t.id})},y=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=a.value)==null?void 0:t.projects.find(j=>j.id===e))==null?void 0:o.delete()),p())},b=_(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Project Actions"}],rows:(t=(e=a.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8),classes:["centered"]},{text:o.name,classes:["title"],link:`/projects/${encodeURIComponent(o.id)}`},{text:"",classes:["centered"],actions:[{icon:h,label:"Delete",onClick:y,dangerous:!0},{icon:x,label:"Edit Project",onClick:c}]}]})))!=null?t:[]}});return(e,t)=>i(a)?(k(),C(v,{key:0,"entity-name":"project",loading:i(u),title:`${i(a).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:b.value,fields:n,onCreate:f},null,8,["loading","title","table"])):I("",!0)}});export{F as default};
//# sourceMappingURL=Projects.fc2eb611.js.map
