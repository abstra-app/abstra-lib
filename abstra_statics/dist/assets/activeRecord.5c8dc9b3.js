var h=Object.defineProperty;var u=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>(u(s,typeof e!="symbol"?e+"":e,t),t);import{P as r}from"./pubsub.1eec455f.js";import{D as c,eD as g}from"./registerWidgets.f16d9611.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="5717eeb1-925d-4786-a978-b6fcaed59474",s._sentryDebugIdIdentifier="sentry-dbid-5717eeb1-925d-4786-a978-b6fcaed59474")}catch{}})();class n{constructor(e,t,a){i(this,"initialState");i(this,"_changes");i(this,"api");i(this,"idKey");i(this,"pubsub");this.initialState=t,this._changes=c({}),this.api=e,this.idKey=a,this.pubsub=new r}static create(e,t,a=null){return g(new n(e,t,a))}get changes(){return this._changes.value}get(e){var t;return(t=this.changes[e])!=null?t:this.initialState[e]}set(e,t){this._changes.value={...this.changes,[e]:t}}async save(){if(Object.keys(this.changes).length===0)return;this.initialState=await this.api.update(this.idKey?this.initialState[this.idKey]:null,this.changes);const e={...this.changes};this._changes.value={},this.pubsub.publish("update",e)}hasChanges(){return Object.keys(this.changes).length>0}get state(){return{...this.initialState,...this.changes}}resetChanges(){const e={...this.changes};this._changes.value={},this.pubsub.publish("update",e)}}export{n as A};
//# sourceMappingURL=activeRecord.5c8dc9b3.js.map
