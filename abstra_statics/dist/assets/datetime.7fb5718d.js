import{C as n}from"./gateway.76fd6d35.js";import"./index.45f399db.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="58249525-7703-4cad-b6a0-d2431ef1fe77",o._sentryDebugIdIdentifier="sentry-dbid-58249525-7703-4cad-b6a0-d2431ef1fe77")}catch{}})();class c{async list(t){return n.get(`projects/${t}/builds`)}async get(t){return n.get(`builds/${t}`)}async download(t){return n.get(`builds/${t}/download`)}}const d=new c;class l{constructor(t){this.dto=t}static async list(t){return(await d.list(t)).map(i=>new l(i))}get id(){return this.dto.id}get projectId(){return this.dto.projectId}get createdAt(){return new Date(this.dto.createdAt)}get status(){return this.dto.status}get log(){return this.dto.log}get latest(){return this.dto.latest}get abstraVersion(){return this.dto.abstraVersion}async download(){const t=await d.download(this.id);if(!t)throw new Error("Download failed");window.open(t.url,"_blank")}}class g{constructor(t,s,i,r){this.projectId=t,this.buildId=s,this.abstraVersion=i,this.project=r}static fromV0(t,s,i,r){const a={hooks:r.hooks.map(e=>({id:e.path,logQuery:{buildId:s,stageId:e.path,stageTitle:e.title},...e})),forms:r.forms.map(e=>({id:e.path,logQuery:{buildId:s,stageId:e.path,stageTitle:e.title},...e})),jobs:r.jobs.map(e=>({id:e.identifier,logQuery:{buildId:s,stageId:e.identifier,stageTitle:e.title},...e})),scripts:[]};return new g(t,s,i,a)}static fromDTO(t,s,i,r){const a={hooks:r.hooks.map(e=>({logQuery:{buildId:s,stageId:e.id,stageTitle:e.title},...e})),forms:r.forms.map(e=>({logQuery:{buildId:s,stageId:e.id,stageTitle:e.title},...e})),jobs:r.jobs.map(e=>({logQuery:{buildId:s,stageId:e.id,stageTitle:e.title},...e})),scripts:r.scripts.map(e=>({logQuery:{buildId:s,stageId:e.id,stageTitle:e.title},...e}))};return new g(t,s,i,a)}static async get(t){const s=await d.get(t);if(!s)throw new Error("Build not found");const{projectId:i,abstraJson:r,abstraVersion:a}=s;if(!r||!a)return null;const e=JSON.parse(r);if(!e.version)throw new Error("Version is invalid");return e.version==="0.1"?this.fromV0(i,t,a,e):this.fromDTO(i,t,a,e)}get runtimes(){return[...this.project.forms.map(t=>({...t,type:"form"})),...this.project.hooks.map(t=>({...t,type:"hook"})),...this.project.jobs.map(t=>({...t,type:"job"})),...this.project.scripts.map(t=>({...t,type:"script"}))]}}function f(o,t){return o.toLocaleString(void 0,{hour12:!1,timeZoneName:"short",day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",weekday:"long",...t})}export{l as B,g as a,c as b,f as g};
//# sourceMappingURL=datetime.7fb5718d.js.map
