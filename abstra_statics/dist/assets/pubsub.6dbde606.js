var r=Object.defineProperty;var o=(e,s,t)=>s in e?r(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var n=(e,s,t)=>(o(e,typeof s!="symbol"?s+"":s,t),t);import"./registerWidgets.3fe3e574.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="3a18594c-c65e-40b8-9637-1c15313cc725",e._sentryDebugIdIdentifier="sentry-dbid-3a18594c-c65e-40b8-9637-1c15313cc725")}catch{}})();class h{constructor(){n(this,"topics");n(this,"subUid");this.topics={},this.subUid=-1}subscribe(s,t){const i=(++this.subUid).toString();return this.topics[s]||(this.topics[s]=[]),this.topics[s].push({token:i,func:t}),i}async wait(s){return new Promise(t=>{const i=this.subscribe(s,c=>{this.unsubscribe(i),t(c)})})}async publish(s,...t){if(!this.topics[s])return!1;const i=this.topics[s];let c=i?i.length:0;for(;c--;)await i[c].func(t[0]);return!0}unsubscribe(s){for(const t in this.topics)if(this.topics[t]){for(let i=0,c=this.topics[t].length;i<c;i++)if(this.topics[t][i].token===s)return this.topics[t].splice(i,1),s}return!1}reset(){this.topics={},this.subUid=-1}}export{h as P};
//# sourceMappingURL=pubsub.6dbde606.js.map
