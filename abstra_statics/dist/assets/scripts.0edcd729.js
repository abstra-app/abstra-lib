var m=Object.defineProperty;var _=(a,t,e)=>t in a?m(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var i=(a,t,e)=>(_(a,typeof t!="symbol"?t+"":t,e),e);import{A as w}from"./record.57192485.js";import"./index.9f6b07f8.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="79b80d28-b84b-4e17-b6a4-73afc5a4a06d",a._sentryDebugIdIdentifier="sentry-dbid-79b80d28-b84b-4e17-b6a4-73afc5a4a06d")}catch{}})();class b{async list(){return await(await fetch("/_editor/api/forms")).json()}async create(t,e,r){return await(await fetch("/_editor/api/forms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,file:e,position:r})})).json()}async get(t){return await(await fetch(`/_editor/api/forms/${t}`)).json()}async update(t,e){return await(await fetch(`/_editor/api/forms/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async delete(t,e){const r=e?"?remove_file=true":"",s=`/_editor/api/forms/${t}`+r;await fetch(s,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async duplicate(t){return await(await fetch(`/_editor/api/forms/${t}/duplicate`,{method:"POST"})).json()}}const n=new b;class h{constructor(t){i(this,"record");this.record=w.create(n,t)}static async list(){return(await n.list()).map(e=>new h(e))}static async create(t,e,r){const s=await n.create(t,e,r);return new h(s)}static async get(t){const e=await n.get(t);return new h(e)}get id(){return this.record.get("id")}get type(){return"form"}get allowRestart(){return this.record.get("allow_restart")}set allowRestart(t){this.record.set("allow_restart",t)}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}get autoStart(){return this.record.get("auto_start")}set autoStart(t){this.record.set("auto_start",t)}get endMessage(){return this.record.get("end_message")}set endMessage(t){this.record.set("end_message",t)}get errorMessage(){return this.record.get("error_message")}set errorMessage(t){this.record.set("error_message",t)}get path(){return this.record.get("path")}set path(t){this.record.set("path",t)}get restartButtonText(){return this.record.get("restart_button_text")}set restartButtonText(t){this.record.set("restart_button_text",t)}get startButtonText(){return this.record.get("start_button_text")}set startButtonText(t){this.record.set("start_button_text",t)}get startMessage(){return this.record.get("start_message")}set startMessage(t){this.record.set("start_message",t)}get timeoutMessage(){return this.record.get("timeout_message")}set timeoutMessage(t){this.record.set("timeout_message",t)}get notificationTrigger(){return new Proxy(this.record.get("notification_trigger"),{set:(t,e,r)=>(this.record.set("notification_trigger",{...t,[e]:r}),!0)})}set notificationTrigger(t){this.record.set("notification_trigger",t)}get(t){return this.record.get(t)}set(t,e){this.record.set(t,e)}get title(){return this.record.get("title")}set title(t){this.record.set("title",t)}get codeContent(){return this.record.get("code_content")}set codeContent(t){this.record.set("code_content",t)}get welcomeTitle(){return this.record.get("welcome_title")}set welcomeTitle(t){this.record.set("welcome_title",t)}async save(t){const e=this.codeContent;await this.record.save(t),this.record.updateInitialState("code_content",e)}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(t){return this.record.hasChanges(t)}hasChangesDeep(t){return this.record.hasChangesDeep(t)}getInitialState(t){return this.record.getInitialState(t)}updateInitialState(t,e){this.record.updateInitialState(t,e)}async delete(t){await n.delete(this.id,t)}async duplicate(){const t=await n.duplicate(this.id);return new h(t)}makeRunnerData(t){return{...t.makeRunnerData(),id:this.id,isLocal:!0,path:this.path,title:this.title,isInitial:this.isInitial,runtimeType:"form",autoStart:this.autoStart,endMessage:this.endMessage,errorMessage:this.errorMessage,allowRestart:this.allowRestart,welcomeTitle:this.welcomeTitle,startMessage:this.startMessage,timeoutMessage:this.timeoutMessage,startButtonText:this.startButtonText,restartButtonText:this.restartButtonText}}get position(){const[t,e]=this.record.get("workflow_position");return{x:t,y:e}}get isInitial(){return this.record.get("is_initial")}static from(t){return new h(t)}}class T{async list(){return await(await fetch("/_editor/api/hooks")).json()}async create(t,e,r){return await(await fetch("/_editor/api/hooks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,file:e,position:r})})).json()}async get(t){return await(await fetch(`/_editor/api/hooks/${t}`)).json()}async update(t,e){return await(await fetch(`/_editor/api/hooks/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async delete(t,e){const r=e?"?remove_file=true":"",s=`/_editor/api/hooks/${t}`+r;await fetch(s,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async run(t,e){const r=new URLSearchParams(e.query),s=await fetch(`/_editor/api/hooks/${t}/run?${r.toString()}`,{method:e.method,headers:{"Content-Type":"application/json",...e.headers},body:e.method==="GET"?void 0:e.body}),{status:l,headers:y,body:f}=await s.json();return{status:l,headers:y,body:f}}}const o=new T;class u{constructor(t){i(this,"record");this.record=w.create(o,t)}static async list(){return(await o.list()).map(e=>new u(e))}static async create(t,e,r){const s=await o.create(t,e,r);return new u(s)}static async get(t){const e=await o.get(t);return new u(e)}async delete(t){await o.delete(this.id,t)}async duplicate(){return this}async save(t){const e=this.codeContent;await this.record.save(t),this.record.updateInitialState("code_content",e)}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(t){return this.record.hasChanges(t)}getInitialState(t){return this.record.getInitialState(t)}updateInitialState(t,e){this.record.updateInitialState(t,e)}get id(){return this.record.get("id")}get type(){return"hook"}get path(){return this.record.get("path")}set path(t){this.record.set("path",t)}get title(){return this.record.get("title")}set title(t){this.record.set("title",t)}get codeContent(){return this.record.get("code_content")}set codeContent(t){this.record.set("code_content",t)}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}async run(t){return o.run(this.id,t)}get position(){const[t,e]=this.record.get("workflow_position");return{x:t,y:e}}get isInitial(){return this.record.get("is_initial")}static from(t){return new u(t)}}class C{async list(){return await(await fetch("/_editor/api/jobs")).json()}async create(t,e,r){return await(await fetch("/_editor/api/jobs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,file:e,position:r})})).json()}async get(t){return await(await fetch(`/_editor/api/jobs/${t}`)).json()}async update(t,e){return await(await fetch(`/_editor/api/jobs/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async delete(t,e){const r=e?"?remove_file=true":"",s=`/_editor/api/jobs/${t}`+r;await fetch(s,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async run(t){return(await fetch(`/_editor/api/jobs/${t}/run`,{method:"POST",headers:{"Content-Type":"application/json"}})).ok}}const c=new C;class p{constructor(t){i(this,"record");i(this,"isInitial",!0);this.record=w.create(c,t)}static async list(){return(await c.list()).map(e=>new p(e))}static async create(t,e,r){const s=await c.create(t,e,r);return new p(s)}static async get(t){const e=await c.get(t);return new p(e)}async delete(t){await c.delete(this.id,t)}async duplicate(){return this}async save(t){const e=this.codeContent;await this.record.save(t),this.record.updateInitialState("code_content",e)}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(t){return this.record.hasChanges(t)}getInitialState(t){return this.record.getInitialState(t)}updateInitialState(t,e){this.record.updateInitialState(t,e)}get schedule(){return this.record.get("schedule")}set schedule(t){this.record.set("schedule",t)}get type(){return"job"}get title(){return this.record.get("title")}set title(t){this.record.set("title",t)}get codeContent(){return this.record.get("code_content")}set codeContent(t){this.record.set("code_content",t)}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}get id(){return this.record.get("id")}async run(){return c.run(this.id)}get position(){const[t,e]=this.record.get("workflow_position");return{x:t,y:e}}static from(t){return new p(t)}hasChangesDeep(t){return this.record.hasChangesDeep(t)}}class S{async list(){return await(await fetch("/_editor/api/scripts")).json()}async create(t,e,r){return await(await fetch("/_editor/api/scripts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,file:e,position:r})})).json()}async get(t){return await(await fetch(`/_editor/api/scripts/${t}`)).json()}async update(t,e){return await(await fetch(`/_editor/api/scripts/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async delete(t,e){const r=e?"?remove_file=true":"",s=`/_editor/api/scripts/${t}`+r;await fetch(s,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async run(t,e){return(await fetch(`/_editor/api/scripts/${t}/run`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({task_id:e})})).ok}}const d=new S;class g{constructor(t){i(this,"record");this.record=w.create(d,t)}static async list(){return(await d.list()).map(e=>new g(e))}static async create(t,e,r){const s=await d.create(t,e,r);return new g(s)}static async get(t){const e=await d.get(t);return new g(e)}async delete(t){await d.delete(this.id,t)}async duplicate(){return this}async save(t){const e=this.codeContent;await this.record.save(t),this.record.updateInitialState("code_content",e)}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(t){return this.record.hasChanges(t)}getInitialState(t){return this.record.getInitialState(t)}updateInitialState(t,e){this.record.updateInitialState(t,e)}get id(){return this.record.get("id")}get codeContent(){return this.record.get("code_content")}set codeContent(t){this.record.set("code_content",t)}get title(){return this.record.get("title")}set title(t){this.record.set("title",t)}get type(){return"on task"}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}get path(){return this.record.get("path")}set path(t){this.record.set("path",t)}async run(t){return d.run(this.id,t)}get position(){const[t,e]=this.record.get("workflow_position");return{x:t,y:e}}get isInitial(){return!1}static from(t){return new g(t)}}export{h as F,u as H,p as J,g as S};
//# sourceMappingURL=scripts.0edcd729.js.map