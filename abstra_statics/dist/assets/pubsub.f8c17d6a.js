var o=Object.defineProperty;var u=(i,s,t)=>s in i?o(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t;var b=(i,s,t)=>(u(i,typeof s!="symbol"?s+"":s,t),t);import"./registerWidgets.6b985ae3.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[s]="aafbe4bb-7771-4b1a-a7d6-fa5eb9d2e507",i._sentryDebugIdIdentifier="sentry-dbid-aafbe4bb-7771-4b1a-a7d6-fa5eb9d2e507")}catch{}})();class f{constructor(){b(this,"topics");b(this,"subUid");this.topics={},this.subUid=-1}subscribe(s,t){const e=typeof s=="string"?[s]:s,n=(++this.subUid).toString();return e.forEach(r=>{this.topics[r]||(this.topics[r]=[]),this.topics[r].push({token:n,func:t})}),n}async wait(s){return new Promise(t=>{const e=this.subscribe(s,n=>{this.unsubscribe(e),t(n)})})}async publish(s,...t){if(!this.topics[s])return!1;const e=this.topics[s];let n=e?e.length:0;for(;n--;)await e[n].func(t[0]);return!0}unsubscribe(s){for(const t in this.topics)if(this.topics[t]){for(let e=0,n=this.topics[t].length;e<n;e++)if(this.topics[t][e].token===s)return this.topics[t].splice(e,1),s}return!1}}export{f as P};
//# sourceMappingURL=pubsub.f8c17d6a.js.map
