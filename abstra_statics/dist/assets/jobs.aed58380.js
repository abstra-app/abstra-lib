var c=Object.defineProperty;var d=(s,t,e)=>t in s?c(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>(d(s,typeof t!="symbol"?t+"":t,e),e);import{A as h}from"./record.f0008bb4.js";import"./outputWidgets.84fd06fb.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="560f14ef-71b0-4b83-8a8b-21e2ff2c1853",s._sentryDebugIdIdentifier="sentry-dbid-560f14ef-71b0-4b83-8a8b-21e2ff2c1853")}catch{}})();class u{async list(){return await(await fetch("/_editor/api/jobs")).json()}async create(){return await(await fetch("/_editor/api/jobs",{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async get(t){return await(await fetch(`/_editor/api/jobs/${t}`)).json()}async update(t,e){return await(await fetch(`/_editor/api/jobs/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async delete(t,e){const n=e?"?remove_file=true":"",o=`/_editor/api/jobs/${t}`+n;await fetch(o,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async test(t){return(await fetch(`/_editor/api/jobs/${t}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}}const r=new u;class a{constructor(t){i(this,"record");i(this,"isInitial",!0);this.record=h.create(r,t)}static async list(){return(await r.list()).map(e=>new a(e))}static async create(){const t=await r.create();return new a(t)}static async get(t){const e=await r.get(t);return new a(e)}async delete(t){await r.delete(this.id,t)}async duplicate(){return this}async save(){await this.record.save()}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(t){return this.record.hasChanges(t)}get schedule(){return this.record.get("schedule")}set schedule(t){this.record.set("schedule",t)}get title(){return this.record.get("title")}set title(t){this.record.set("title",t)}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}get id(){return this.record.get("id")}async test(){return r.test(this.id)}get position(){const[t,e]=this.record.get("workflow_position");return{x:t,y:e,referential:"world"}}}export{a as J};
//# sourceMappingURL=jobs.aed58380.js.map
