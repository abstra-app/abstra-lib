var h=Object.defineProperty;var r=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>(r(s,typeof e!="symbol"?e+"":e,t),t);import{P as u}from"./pubsub.1ed2222f.js";import{F as g,eE as c,eF as l}from"./outputWidgets.85da7913.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="8568daaf-d7b8-4246-b3f1-e894b9f3fe8e",s._sentryDebugIdIdentifier="sentry-dbid-8568daaf-d7b8-4246-b3f1-e894b9f3fe8e")}catch{}})();class n{constructor(e,t,a){i(this,"initialState");i(this,"_changes");i(this,"api");i(this,"idKey");i(this,"pubsub");this.initialState=t,this._changes=g({}),this.api=e,this.idKey=a,this.pubsub=new u}static create(e,t,a=null){return c(new n(e,t,a))}get changes(){return this._changes.value}get(e){var t;return(t=this.changes[e])!=null?t:this.initialState[e]}set(e,t){this._changes.value={...this.changes,[e]:t}}async save(){if(Object.keys(this.changes).length===0)return;if(this.api.update===void 0)throw new Error("update not implemented");this.initialState=await this.api.update(this.idKey?this.initialState[this.idKey]:null,this.changes);const e={...this.changes};this._changes.value={},this.pubsub.publish("update",e)}hasChanges(e){return e?e in this.changes:Object.keys(this.changes).length>0}hasChangesDeep(e){return e in this.changes&&!l.exports.isEqual(this.initialState[e],this.changes[e])}get state(){return{...this.initialState,...this.changes}}resetChanges(){const e={...this.changes};this._changes.value={},this.pubsub.publish("update",e)}}export{n as A};
//# sourceMappingURL=activeRecord.f0bd1bcd.js.map
