var o=Object.defineProperty;var u=(e,s,t)=>s in e?o(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var r=(e,s,t)=>(u(e,typeof s!="symbol"?s+"":s,t),t);import"./registerWidgets.721ab253.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="4cca9e18-d9c0-44b6-906a-48cab52c9cb8",e._sentryDebugIdIdentifier="sentry-dbid-4cca9e18-d9c0-44b6-906a-48cab52c9cb8")}catch{}})();class a{constructor(){r(this,"topics");r(this,"subUid");this.topics={},this.subUid=-1}subscribe(s,t){const i=typeof s=="string"?[s]:s,n=(++this.subUid).toString();return i.forEach(c=>{this.topics[c]||(this.topics[c]=[]),this.topics[c].push({token:n,func:t})}),n}async wait(s){return new Promise(t=>{const i=this.subscribe(s,n=>{this.unsubscribe(i),t(n)})})}async publish(s,...t){if(!this.topics[s])return!1;const i=this.topics[s];let n=i?i.length:0;for(;n--;)await i[n].func(t[0]);return!0}unsubscribe(s){for(const t in this.topics)if(this.topics[t]){for(let i=0,n=this.topics[t].length;i<n;i++)if(this.topics[t][i].token===s)return this.topics[t].splice(i,1),s}return!1}}export{a as P};
//# sourceMappingURL=pubsub.38a955d6.js.map
