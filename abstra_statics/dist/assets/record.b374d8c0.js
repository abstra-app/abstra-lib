var l=Object.defineProperty;var o=(e,t,s)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var n=(e,t,s)=>(o(e,typeof t!="symbol"?t+"":t,s),s);import{v as c,Q as g,R as b}from"./vue-router.68023fee.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d8549808-3d8b-4c17-8875-6cea196c7f2b",e._sentryDebugIdIdentifier="sentry-dbid-d8549808-3d8b-4c17-8875-6cea196c7f2b")}catch{}})();class p{constructor(){n(this,"topics");n(this,"subUid");this.topics={},this.subUid=-1}subscribe(t,s){const i=(++this.subUid).toString();return this.topics[t]||(this.topics[t]=[]),this.topics[t].push({token:i,func:s}),i}async wait(t){return new Promise(s=>{const i=this.subscribe(t,a=>{this.unsubscribe(i),s(a)})})}async publish(t,...s){if(!this.topics[t])return!1;const i=this.topics[t];let a=i?i.length:0;for(;a--;)await i[a].func(s[0]);return!0}unsubscribe(t){for(const s in this.topics)if(this.topics[s]){for(let i=0,a=this.topics[s].length;i<a;i++)if(this.topics[s][i].token===t)return this.topics[s].splice(i,1),t}return!1}reset(){this.topics={},this.subUid=-1}}class h{constructor(t){n(this,"initialState");n(this,"pubsub");n(this,"_changes");this.initialState=t,this.pubsub=new p,this._changes=g({})}static from(t){return c(new h(t))}get changes(){return this._changes.value}get(t){var s;return(s=this.changes[t])!=null?s:this.initialState[t]}set(t,s){this._changes.value={...this.changes,[t]:s}}hasChanges(t){return t?t in this.changes:Object.keys(this.changes).length>0}hasChangesDeep(t){return t in this.changes&&!b.exports.isEqual(this.initialState[t],this.changes[t])}get state(){return{...this.initialState,...this.changes}}resetChanges(){const t={...this.changes};this._changes.value={},this.pubsub.publish("update",t)}onUpdate(t){this.pubsub.subscribe("update",t)}commit(){this.initialState=this.state,this._changes.value={}}toDTO(){return{...this.state,...this._changes.value}}update(t){this._changes.value={...this.changes,...t}}}class r extends h{constructor(s,i){super(i);n(this,"api");this.api=s}static create(s,i){return c(new r(s,i))}getInitialState(s){return this.initialState[s]}updateInitialState(s,i){this.initialState[s]=i,delete this._changes.value[s]}async save(s){if(Object.keys(this.changes).length===0||s&&!(s in this.changes))return;if(s){const a={[s]:this.changes[s]},u=await this.api.update(this.initialState.id,a);this.initialState={...this.initialState,...u},delete this._changes.value[s];return}this.initialState=await this.api.update(this.initialState.id,this.changes);const i={...this.changes};this._changes.value={},this.pubsub.publish("update",i)}}export{r as A,h as E};
//# sourceMappingURL=record.b374d8c0.js.map
