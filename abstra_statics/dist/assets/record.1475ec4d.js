var c=Object.defineProperty;var u=(e,t,s)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var a=(e,t,s)=>(u(e,typeof t!="symbol"?t+"":t,s),s);import{E as g,eJ as h,eK as l}from"./outputWidgets.57362b1f.js";import{P as o}from"./pubsub.3eb3f3c1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="53358406-041d-4a8c-938f-38b708aa80c3",e._sentryDebugIdIdentifier="sentry-dbid-53358406-041d-4a8c-938f-38b708aa80c3")}catch{}})();class n{constructor(t){a(this,"initialState");a(this,"pubsub");a(this,"_changes");this.initialState=t,this.pubsub=new o,this._changes=g({})}static from(t){return h(new n(t))}get changes(){return this._changes.value}get(t){var s;return(s=this.changes[t])!=null?s:this.initialState[t]}set(t,s){this._changes.value={...this.changes,[t]:s}}hasChanges(t){return t?t in this.changes:Object.keys(this.changes).length>0}hasChangesDeep(t){return t in this.changes&&!l.exports.isEqual(this.initialState[t],this.changes[t])}get state(){return{...this.initialState,...this.changes}}resetChanges(){const t={...this.changes};this._changes.value={},this.pubsub.publish("update",t)}}class r extends n{constructor(s,i){super(i);a(this,"api");this.api=s}static create(s,i){return h(new r(s,i))}async save(){if(Object.keys(this.changes).length===0)return;this.initialState=await this.api.update(this.initialState.id,this.changes);const s={...this.changes};this._changes.value={},this.pubsub.publish("update",s)}}export{r as A,n as E};
//# sourceMappingURL=record.1475ec4d.js.map
