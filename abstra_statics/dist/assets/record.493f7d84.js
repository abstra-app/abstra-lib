var c=Object.defineProperty;var u=(s,t,e)=>t in s?c(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var a=(s,t,e)=>(u(s,typeof t!="symbol"?t+"":t,e),e);import{E as g,eG as h,eH as l}from"./outputWidgets.df68f70a.js";import{P as b}from"./pubsub.26abae80.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="a3e223ec-8248-4fbf-9a8b-a39fc877fc0d",s._sentryDebugIdIdentifier="sentry-dbid-a3e223ec-8248-4fbf-9a8b-a39fc877fc0d")}catch{}})();class n{constructor(t){a(this,"initialState");a(this,"pubsub");a(this,"_changes");this.initialState=t,this.pubsub=new b,this._changes=g({})}static from(t){return h(new n(t))}get changes(){return this._changes.value}get(t){var e;return(e=this.changes[t])!=null?e:this.initialState[t]}set(t,e){this._changes.value={...this.changes,[t]:e}}hasChanges(t){return t?t in this.changes:Object.keys(this.changes).length>0}hasChangesDeep(t){return t in this.changes&&!l.exports.isEqual(this.initialState[t],this.changes[t])}get state(){return{...this.initialState,...this.changes}}resetChanges(){const t={...this.changes};this._changes.value={},this.pubsub.publish("update",t)}}class r extends n{constructor(e,i){super(i);a(this,"api");this.api=e}static create(e,i){return h(new r(e,i))}async save(){if(Object.keys(this.changes).length===0)return;this.initialState=await this.api.update(this.initialState.id,this.changes);const e={...this.changes};this._changes.value={},this.pubsub.publish("update",e)}}export{r as A,n as E};
//# sourceMappingURL=record.493f7d84.js.map
