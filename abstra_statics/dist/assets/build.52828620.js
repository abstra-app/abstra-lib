import{C as o}from"./authorManager.c51bb24c.js";import"./outputWidgets.43a10844.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[e]="bc5ade52-9d78-4d69-8a7e-163ae6c0fd0a",i._sentryDebugIdIdentifier="sentry-dbid-bc5ade52-9d78-4d69-8a7e-163ae6c0fd0a")}catch{}})();class l{async list(e){return o.get(`projects/${e}/builds`)}async get(e){return o.get(`builds/${e}`)}async download(e){return o.get(`builds/${e}/download`)}}const a=new l;class u{constructor(e){this.dto=e}static async list(e){return(await a.list(e)).map(s=>new u(s))}get id(){return this.dto.id}get projectId(){return this.dto.projectId}get createdAt(){return new Date(this.dto.createdAt)}get status(){return this.dto.status}get log(){return this.dto.log}get latest(){return this.dto.latest}async download(){const e=await a.download(this.id);if(!e)throw new Error("Download failed");window.open(e.url,"_blank")}}class d{constructor(e,r,s){this.projectId=e,this.buildId=r,this.project=s}static fromV0(e,r,s){const n={hooks:s.hooks.map(t=>({id:t.path,logQuery:{buildId:r,runtimeId:t.path,runtimeTitle:t.title},...t})),forms:s.forms.map(t=>({id:t.path,logQuery:{buildId:r,runtimeId:t.path,runtimeTitle:t.title},...t})),jobs:s.jobs.map(t=>({id:t.identifier,logQuery:{buildId:r,runtimeId:t.identifier,runtimeTitle:t.title},...t})),scripts:[]};return new d(e,r,n)}static fromV1andV2(e,r,s){const n={hooks:s.hooks.map(t=>({logQuery:{buildId:r,runtimeId:t.id,runtimeTitle:t.title},...t})),forms:s.forms.map(t=>({logQuery:{buildId:r,runtimeId:t.id,runtimeTitle:t.title},...t})),jobs:s.jobs.map(t=>({logQuery:{buildId:r,runtimeId:t.id,runtimeTitle:t.title},...t})),scripts:s.scripts.map(t=>({logQuery:{buildId:r,runtimeId:t.id,runtimeTitle:t.title},...t}))};return new d(e,r,n)}static async get(e){const r=await a.get(e);if(!r)throw new Error("Build not found");const{projectId:s,abstraJson:n}=r,t=JSON.parse(n);if(!t.version)throw new Error("Version is invalid");if(t.version==="0.1")return this.fromV0(s,e,t);if(t.version==="1.0")return this.fromV1andV2(s,e,t);if(t.version==="2.0")return this.fromV1andV2(s,e,t);throw new Error(`Unsupported project version: ${t.version}`)}get runtimes(){return[...this.project.forms.map(e=>({...e,type:"form"})),...this.project.hooks.map(e=>({...e,type:"hook"})),...this.project.jobs.map(e=>({...e,type:"job"}))]}}export{u as B,d as a};
//# sourceMappingURL=build.52828620.js.map
