var c=Object.defineProperty;var d=(s,t,e)=>t in s?c(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var o=(s,t,e)=>(d(s,typeof t!="symbol"?t+"":t,e),e);import{A as p}from"./record.220fa006.js";import"./outputWidgets.3681a2a5.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="8f18bd04-b144-4b47-9894-29efca4aa551",s._sentryDebugIdIdentifier="sentry-dbid-8f18bd04-b144-4b47-9894-29efca4aa551")}catch{}})();class h{async list(){return await(await fetch("/_editor/api/scripts")).json()}async create(t,e,r){return await(await fetch("/_editor/api/scripts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,file:e,position:r})})).json()}async get(t){return await(await fetch(`/_editor/api/scripts/${t}`)).json()}async update(t,e){return await(await fetch(`/_editor/api/scripts/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async delete(t,e){const r=e?"?remove_file=true":"",i=`/_editor/api/scripts/${t}`+r;await fetch(i,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async run(t,e){return(await fetch(`/_editor/api/scripts/${t}/run`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stage_run_id:e})})).json()}async test(t){return(await fetch(`/_editor/api/scripts/${t}/test`,{method:"POST",headers:{"Content-Type":"application/json"}})).json()}}const a=new h;class n{constructor(t){o(this,"record");this.record=p.create(a,t)}static async list(){return(await a.list()).map(e=>new n(e))}static async create(t,e,r){const i=await a.create(t,e,r);return new n(i)}static async get(t){const e=await a.get(t);return new n(e)}async delete(t){await a.delete(this.id,t)}async duplicate(){return this}async save(t){await this.record.save(t)}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(t){return this.record.hasChanges(t)}getInitialState(t){return this.record.getInitialState(t)}updateInitialState(t,e){this.record.updateInitialState(t,e)}get id(){return this.record.get("id")}get codeContent(){return this.record.get("code_content")}set codeContent(t){this.record.set("code_content",t)}get title(){return this.record.get("title")}set title(t){this.record.set("title",t)}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}get path(){return this.record.get("path")}set path(t){this.record.set("path",t)}async test(){return a.test(this.id)}async run(t){return a.run(this.id,t)}get position(){const[t,e]=this.record.get("workflow_position");return{x:t,y:e,referential:"world"}}get isInitial(){return!1}static from(t){return new n(t)}}export{n as S};
//# sourceMappingURL=scripts.f41807a9.js.map
