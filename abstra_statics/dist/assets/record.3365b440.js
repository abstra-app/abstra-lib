var u=Object.defineProperty;var c=(s,e,t)=>e in s?u(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var a=(s,e,t)=>(c(s,typeof e!="symbol"?e+"":e,t),t);import{E as g,eJ as h,eK as b}from"./outputWidgets.333243b5.js";import{P as l}from"./pubsub.6843f3da.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="b9962f0e-e64f-41bc-bee0-13f4f247bf3a",s._sentryDebugIdIdentifier="sentry-dbid-b9962f0e-e64f-41bc-bee0-13f4f247bf3a")}catch{}})();class n{constructor(e){a(this,"initialState");a(this,"pubsub");a(this,"_changes");this.initialState=e,this.pubsub=new l,this._changes=g({})}static from(e){return h(new n(e))}get changes(){return this._changes.value}get(e){var t;return(t=this.changes[e])!=null?t:this.initialState[e]}set(e,t){this._changes.value={...this.changes,[e]:t}}hasChanges(e){return e?e in this.changes:Object.keys(this.changes).length>0}hasChangesDeep(e){return e in this.changes&&!b.exports.isEqual(this.initialState[e],this.changes[e])}get state(){return{...this.initialState,...this.changes}}resetChanges(){const e={...this.changes};this._changes.value={},this.pubsub.publish("update",e)}}class r extends n{constructor(t,i){super(i);a(this,"api");this.api=t}static create(t,i){return h(new r(t,i))}async save(){if(Object.keys(this.changes).length===0)return;this.initialState=await this.api.update(this.initialState.id,this.changes);const t={...this.changes};this._changes.value={},this.pubsub.publish("update",t)}}export{r as A,n as E};
//# sourceMappingURL=record.3365b440.js.map
