import{d as g,ey as P,ex as w,F as _,bu as i,b as k,u as C,eu as I}from"./registerWidgets.fbede4e9.js";import{e as h,f as x}from"./icons.9ea484f9.js";import{a as z}from"./asyncComputed.ded4e064.js";import{P as d}from"./project.3b7dcaa7.js";import"./gateway.6dfda10a.js";import{O as D}from"./organization.ad8b042a.js";import"./index.7df6535c.js";import{C as v}from"./CrudView.b195b458.js";import"./activeRecord.4cd28aae.js";import"./pubsub.9639d873.js";import"./passwordlessManager.fc9080ef.js";import"./storage.953471f2.js";import"./DropdownMenu.db99a3d3.js";import"./Modal.2d0c3e5e.js";import"./LoadingIndicator.d9107e25.js";import"./lottie.af5deb23.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[a]="2c74b384-5e8d-48f4-8f1f-72256e362d5a",r._sentryDebugIdIdentifier="sentry-dbid-2c74b384-5e8d-48f4-8f1f-72256e362d5a")}catch{}})();const K=g({__name:"Projects",setup(r){const a=[{key:"name",label:"Project Name"}],s=P().params.organizationId,m=w(),{loading:u,result:n,refetch:p}=z(()=>Promise.all([d.list(s),D.get(s)]).then(([e,t])=>({projects:e,organization:t}))),c=({key:e})=>m.push({name:"project",params:{projectId:e}}),f=async e=>{const t=await d.create({organizationId:s,name:e.name});c({key:t.id})},y=async({key:e})=>{var t,o;confirm("Are you sure you want to delete this project?")&&(await((o=(t=n.value)==null?void 0:t.projects.find(j=>j.id===e))==null?void 0:o.delete()),p())},b=_(()=>{var e,t;return{columns:[{name:"Id"},{name:"Project Name"},{name:"Project Actions"}],rows:(t=(e=n.value)==null?void 0:e.projects.map(o=>({key:o.id,cells:[{text:o.id.slice(0,8),classes:["centered"]},{text:o.name,classes:["title"],link:`/projects/${encodeURIComponent(o.id)}`},{text:"",classes:["centered"],actions:[{icon:h,label:"Delete",onClick:y,dangerous:!0},{icon:x,label:"Edit Project",onClick:c}]}]})))!=null?t:[]}});return(e,t)=>i(n)?(k(),C(v,{key:0,"entity-name":"project",loading:i(u),title:`${i(n).organization.name}'s Projects`,description:"Organize your team's work into different Projects, each with it's own subdomain.","create-button-text":"Create Project","empty-title":"No projects here yet",table:b.value,fields:a,onCreate:f},null,8,["loading","title","table"])):I("",!0)}});export{K as default};
//# sourceMappingURL=Projects.3ce39778.js.map
