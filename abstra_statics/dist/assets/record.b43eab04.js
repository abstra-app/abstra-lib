var g=Object.defineProperty;var l=(s,t,e)=>t in s?g(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>(l(s,typeof t!="symbol"?t+"":t,e),e);import{eK as h,F as d,eL as b}from"./outputWidgets.aff95ef3.js";import{P as o}from"./pubsub.3b8860eb.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="6f9de85b-4a5a-4ab6-aa10-c2c1069dbc4c",s._sentryDebugIdIdentifier="sentry-dbid-6f9de85b-4a5a-4ab6-aa10-c2c1069dbc4c")}catch{}})();class n{constructor(t){i(this,"initialState");i(this,"pubsub");i(this,"_changes");this.initialState=t,this.pubsub=new o,this._changes=d({})}static from(t){return h(new n(t))}get changes(){return this._changes.value}get(t){var e;return(e=this.changes[t])!=null?e:this.initialState[t]}set(t,e){this._changes.value={...this.changes,[t]:e}}hasChanges(t){return t?t in this.changes:Object.keys(this.changes).length>0}hasChangesDeep(t){return t in this.changes&&!b.exports.isEqual(this.initialState[t],this.changes[t])}get state(){return{...this.initialState,...this.changes}}resetChanges(){const t={...this.changes};this._changes.value={},this.pubsub.publish("update",t)}}class r extends n{constructor(e,a){super(a);i(this,"api");this.api=e}static create(e,a){return h(new r(e,a))}getInitialState(e){return this.initialState[e]}updateInitialState(e,a){this.initialState[e]=a,delete this._changes.value[e]}async save(e){if(Object.keys(this.changes).length===0||e&&!(e in this.changes))return;if(e){const c={[e]:this.changes[e]},u=await this.api.update(this.initialState.id,c);this.initialState={...this.initialState,...u},delete this._changes.value[e];return}this.initialState=await this.api.update(this.initialState.id,this.changes);const a={...this.changes};this._changes.value={},this.pubsub.publish("update",a)}}export{r as A,n as E};
//# sourceMappingURL=record.b43eab04.js.map
