var i=Object.defineProperty;var n=(s,t,e)=>t in s?i(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var o=(s,t,e)=>(n(s,typeof t!="symbol"?t+"":t,e),e);import{A as c}from"./activeRecord.57c6bf02.js";class h{async list(){return await(await fetch("/_editor/api/forms")).json()}async create(){return await(await fetch("/_editor/api/forms",{method:"POST",headers:{"Content-Type":"application/json"}})).json()}async get(t){return await(await fetch(`/_editor/api/forms/${t}`)).json()}async update(t,e){return await(await fetch(`/_editor/api/forms/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async delete(t){await fetch(`/_editor/api/forms/${t}`,{method:"DELETE"})}async duplicate(t){return await(await fetch(`/_editor/api/forms/${t}/duplicate`,{method:"POST"})).json()}}const r=new h;class a{constructor(t){o(this,"record");this.record=new c(r,t,"path")}static async list(){return(await r.list()).map(e=>new a(e))}static async create(){const t=await r.create();return new a(t)}static async get(t){const e=await r.get(t);return new a(e)}get allowRestart(){return this.record.get("allow_restart")}set allowRestart(t){this.record.set("allow_restart",t)}get file(){return this.record.get("file")}set file(t){this.record.set("file",t)}get autoStart(){return this.record.get("auto_start")}set autoStart(t){this.record.set("auto_start",t)}get endMessage(){return this.record.get("end_message")}set endMessage(t){this.record.set("end_message",t)}get errorMessage(){return this.record.get("error_message")}set errorMessage(t){this.record.set("error_message",t)}get path(){return this.record.get("path")}set path(t){this.record.set("path",t)}get restartButtonText(){return this.record.get("restart_button_text")}set restartButtonText(t){this.record.set("restart_button_text",t)}get startButtonText(){return this.record.get("start_button_text")}set startButtonText(t){this.record.set("start_button_text",t)}get startMessage(){return this.record.get("start_message")}set startMessage(t){this.record.set("start_message",t)}get timeoutMessage(){return this.record.get("timeout_message")}set timeoutMessage(t){this.record.set("timeout_message",t)}get title(){return this.record.get("title")}set title(t){this.record.set("title",t)}get welcomeTitle(){return this.record.get("welcome_title")}set welcomeTitle(t){this.record.set("welcome_title",t)}async save(){await this.record.save()}onUpdate(t){this.record.pubsub.subscribe("update",t)}hasChanges(){return this.record.hasChanges()}async delete(){await r.delete(this.path)}async duplicate(){const t=await r.duplicate(this.path);return new a(t)}makeRunnerData(t){return{runtimeType:"form",sidebar:t.sidebar,path:this.path,allowRestart:this.allowRestart,autoStart:this.autoStart,brandName:t.brandName,endMessage:this.endMessage,errorMessage:this.errorMessage,fontFamily:t.fontFamily,logoUrl:t.logoUrl,mainColor:t.mainColor,restartButtonText:this.restartButtonText,startButtonText:this.startButtonText,startMessage:this.startMessage,theme:t.theme,timeoutMessage:this.timeoutMessage,title:this.title,welcomeTitle:this.welcomeTitle}}get routeName(){return"form"}}export{a as F};
//# sourceMappingURL=forms.7fa52191.js.map
