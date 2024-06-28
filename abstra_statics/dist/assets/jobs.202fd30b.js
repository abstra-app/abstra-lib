var w=Object.defineProperty;var g=(a,t,e)=>t in a?w(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var h=(a,t,e)=>(g(a,typeof t!="symbol"?t+"":t,e),e);import{A as y}from"./record.b374d8c0.js";import"./vue-router.68023fee.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="ab3f5fff-ceea-46fc-a824-7937ce7b4760",a._sentryDebugIdIdentifier="sentry-dbid-ab3f5fff-ceea-46fc-a824-7937ce7b4760")}catch{}})();class f{async list(){return await(await fetch("/_editor/api/hooks")).json()}async create(t,e,s){return await(await fetch("/_editor/api/hooks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,file:e,position:s})})).json()}async get(t){return await(await fetch(`/_editor/api/hooks/${t}`)).json()}async update(t,e){return await(await fetch(`/_editor/api/hooks/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async delete(t,e){const s=e?"?remove_file=true":"",r=`/_editor/api/hooks/${t}`+s;await fetch(r,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async run(t,e){const s=new URLSearchParams(e.query),r=await fetch(`/_editor/api/hooks/${t}/run?${s.toString()}`,{method:e.method,headers:{"Content-Type":"application/json",...e.headers},body:e.method==="GET"?void 0:e.body}),{status:i,headers:u,body:p,output:l}=await r.json();return{status:i,headers:u,body:p,output:l}}async test(t,e){const s=new URLSearchParams(e.query),r=await fetch(`/_editor/api/hooks/${t}/test?${s.toString()}`,{method:e.method,headers:{"Content-Type":"application/json",...e.headers},body:e.method==="GET"?void 0:e.body}),{status:i,headers:u,body:p,output:l}=await r.json();return{status:i,headers:u,body:p,output:l}}}const n=new f;class c{constructor(t){h(this,"record");this.record=y.create(n,t)}static async list(){return(await n.list()).map(e=>new c(e))}static async create(t,e,s){const r=await n.create(t,e,s);return new c(r)}static async get(t){const e=await n.get(t);return new c(e)}async delete(t){await n.delete(this.id,t)}async duplicate(){return this}async save(t){const e=this.codeContent;await this.record.save(t),this.record.updateInitialState("code_content",e)}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(t){return this.record.hasChanges(t)}getInitialState(t){return this.record.getInitialState(t)}updateInitialState(t,e){this.record.updateInitialState(t,e)}get id(){return this.record.get("id")}get type(){return"hook"}get path(){return this.record.get("path")}set path(t){this.record.set("path",t)}get title(){return this.record.get("title")}set title(t){this.record.set("title",t)}get codeContent(){return this.record.get("code_content")}set codeContent(t){this.record.set("code_content",t)}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}async run(t){return n.run(this.id,t)}async test(t){return n.test(this.id,t)}get position(){const[t,e]=this.record.get("workflow_position");return{x:t,y:e,referential:"world"}}get isInitial(){return this.record.get("is_initial")}static from(t){return new c(t)}}class b{async list(){return await(await fetch("/_editor/api/jobs")).json()}async create(t,e,s){return await(await fetch("/_editor/api/jobs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,file:e,position:s})})).json()}async get(t){return await(await fetch(`/_editor/api/jobs/${t}`)).json()}async update(t,e){return await(await fetch(`/_editor/api/jobs/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async delete(t,e){const s=e?"?remove_file=true":"",r=`/_editor/api/jobs/${t}`+s;await fetch(r,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async run(t){return(await fetch(`/_editor/api/jobs/${t}/run`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async test(t){return(await fetch(`/_editor/api/jobs/${t}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}}const o=new b;class d{constructor(t){h(this,"record");h(this,"isInitial",!0);this.record=y.create(o,t)}static async list(){return(await o.list()).map(e=>new d(e))}static async create(t,e,s){const r=await o.create(t,e,s);return new d(r)}static async get(t){const e=await o.get(t);return new d(e)}async delete(t){await o.delete(this.id,t)}async duplicate(){return this}async save(t){const e=this.codeContent;await this.record.save(t),this.record.updateInitialState("code_content",e)}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(t){return this.record.hasChanges(t)}getInitialState(t){return this.record.getInitialState(t)}updateInitialState(t,e){this.record.updateInitialState(t,e)}get schedule(){return this.record.get("schedule")}set schedule(t){this.record.set("schedule",t)}get type(){return"job"}get title(){return this.record.get("title")}set title(t){this.record.set("title",t)}get codeContent(){return this.record.get("code_content")}set codeContent(t){this.record.set("code_content",t)}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}get id(){return this.record.get("id")}async test(){return o.test(this.id)}async run(){return o.run(this.id)}get position(){const[t,e]=this.record.get("workflow_position");return{x:t,y:e,referential:"world"}}static from(t){return new d(t)}hasChangesDeep(t){return this.record.hasChangesDeep(t)}}export{c as H,d as J};
//# sourceMappingURL=jobs.202fd30b.js.map
