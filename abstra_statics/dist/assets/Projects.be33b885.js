import{d as g,ey as P,ex as w,F as _,bu as i,b as k,u as C,eu as I}from"./registerWidgets.f95d7bbf.js";import{e as h,f as x}from"./icons.7adc7725.js";import{a as z}from"./asyncComputed.4154581e.js";import{P as d}from"./project.0a3763b3.js";import"./gateway.d227d468.js";import{O as D}from"./organization.cb1506df.js";import"./index.ac5c3710.js";import{C as v}from"./CrudView.7dcef43d.js";import"./activeRecord.31e205b1.js";import"./pubsub.b6a8ac54.js";import"./passwordlessManager.af4c7092.js";import"./storage.f52ebd8d.js";import"./DropdownMenu.ffb37e76.js";import"./Modal.17c23571.js";import"./LoadingIndicator.edbdbbf5.js";import"./lottie.8f48be34.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="84033444-37d7-499b-a8db-48fb42e14861",r._sentryDebugIdIdentifier="sentry-dbid-84033444-37d7-499b-a8db-48fb42e14861")}catch{}})();const K=g({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],s=P().params.organizationId,m=w(),{loading:u,result:n,refetch:p}=z(()=>Promise.all([d.list(s),D.get(s)]).then(([e,t])=>({projects:e,organization:t}))),c=({key:e})=>m.push({name:"project",params:{projectId:e}}),f=async e=>{const t=await d.create({organizationId:s,name:e.name});c({key:t.id})},b=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=n.value)==null?void 0:t.projects.find(j=>j.id===e))==null?void 0:o.delete()),p())},y=_(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Project Actions"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8),classes:["centered"]},{text:o.name,classes:["title"],link:`/projects/${encodeURIComponent(o.id)}`},{text:"",classes:["centered"],actions:[{icon:h,label:"Delete",onClick:b,dangerous:!0},{icon:x,label:"Edit Project",onClick:c}]}]})))!=null?t:[]}});return(e,t)=>i(n)?(k(),C(v,{key:0,"entity-name":"project",loading:i(u),title:`${i(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:y.value,fields:a,onCreate:f},null,8,["loading","title","table"])):I("",!0)}});export{K as default};
//# sourceMappingURL=Projects.be33b885.js.map
