var r=Object.defineProperty;var o=(e,s,t)=>s in e?r(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var n=(e,s,t)=>(o(e,typeof s!="symbol"?s+"":s,t),t);import"./outputWidgets.6ea16f91.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="c22e5d7b-0b59-407c-86ce-18bc8f31ccea",e._sentryDebugIdIdentifier="sentry-dbid-c22e5d7b-0b59-407c-86ce-18bc8f31ccea")}catch{}})();class h{constructor(){n(this,"topics");n(this,"subUid");this.topics={},this.subUid=-1}subscribe(s,t){const i=(++this.subUid).toString();return this.topics[s]||(this.topics[s]=[]),this.topics[s].push({token:i,func:t}),i}async wait(s){return new Promise(t=>{const i=this.subscribe(s,c=>{this.unsubscribe(i),t(c)})})}async publish(s,...t){if(!this.topics[s])return!1;const i=this.topics[s];let c=i?i.length:0;for(;c--;)await i[c].func(t[0]);return!0}unsubscribe(s){for(const t in this.topics)if(this.topics[t]){for(let i=0,c=this.topics[t].length;i<c;i++)if(this.topics[t][i].token===s)return this.topics[t].splice(i,1),s}return!1}reset(){this.topics={},this.subUid=-1}}export{h as P};
//# sourceMappingURL=pubsub.a44e3878.js.map
