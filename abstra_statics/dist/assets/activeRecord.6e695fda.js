var h=Object.defineProperty;var c=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var a=(s,e,t)=>(c(s,typeof e!="symbol"?e+"":e,t),t);import{P as r}from"./pubsub.82c690a5.js";import{S as u,U as g}from"./registerWidgets.806e8dbb.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="2ec3ae47-eccf-4ea9-aa1c-244d5f539701",s._sentryDebugIdIdentifier="sentry-dbid-2ec3ae47-eccf-4ea9-aa1c-244d5f539701")}catch{}})();class n{constructor(e,t,i){a(this,"initialState");a(this,"_changes");a(this,"api");a(this,"idKey");a(this,"pubsub");this.initialState=t,this._changes=u({}),this.api=e,this.idKey=i,this.pubsub=new r}static create(e,t,i=null){return g(new n(e,t,i))}get changes(){return this._changes.value}get(e){var t;return(t=this.changes[e])!=null?t:this.initialState[e]}set(e,t){this._changes.value={...this.changes,[e]:t}}async save(){if(Object.keys(this.changes).length===0)return;this.initialState=await this.api.update(this.idKey?this.initialState[this.idKey]:null,this.changes);const e={...this.changes};this._changes.value={},this.pubsub.publish("update",e)}hasChanges(){return Object.keys(this.changes).length>0}get state(){return{...this.initialState,...this.changes}}}export{n as A};
//# sourceMappingURL=activeRecord.6e695fda.js.map
