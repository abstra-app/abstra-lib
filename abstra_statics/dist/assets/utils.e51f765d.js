var h=Object.defineProperty;var c=(s,t,e)=>t in s?h(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>(c(s,typeof t!="symbol"?t+"":t,e),e);import{u}from"./registerWidgets.7452ec0b.js";import{p as r}from"./passwordlessManager.abb9ad15.js";import{P as p}from"./pubsub.a0411919.js";const o=u("cloud-api");class b{static async get(t){const a=await(await fetch(`${o}/console/${t}`,{headers:{...r.getUserHeaders("Author-Authorization")}})).text();return a?JSON.parse(a):null}static async post(t,e){const n=await(await fetch(`${o}/console/${t}`,{method:"POST",headers:{"Content-Type":"application/json",...r.getUserHeaders("Author-Authorization")},body:JSON.stringify(e)})).text();return n?JSON.parse(n):null}static async patch(t,e){const n=await(await fetch(`${o}/console/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json",...r.getUserHeaders("Author-Authorization")},body:JSON.stringify(e)})).text();return n?JSON.parse(n):null}static async delete(t){await fetch(`${o}/console/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",...r.getUserHeaders("Author-Authorization")}})}}class f{constructor(t,e,a){i(this,"initialState");i(this,"changes");i(this,"api");i(this,"idKey");i(this,"pubsub");this.initialState=e,this.changes={},this.api=t,this.idKey=a,this.pubsub=new p}get(t){var e;return(e=this.changes[t])!=null?e:this.initialState[t]}set(t,e){this.changes[t]=e}async save(){Object.keys(this.changes).length!==0&&(this.initialState=await this.api.update(this.initialState[this.idKey],this.changes),this.changes={},this.pubsub.publish("update"))}hasChanges(){return Object.keys(this.changes).length>0}get state(){return{...this.initialState,...this.changes}}}export{f as A,b as C};
//# sourceMappingURL=utils.e51f765d.js.map
