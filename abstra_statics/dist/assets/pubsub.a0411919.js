var h=Object.defineProperty;var o=(r,s,t)=>s in r?h(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t;var n=(r,s,t)=>(o(r,typeof s!="symbol"?s+"":s,t),t);class b{constructor(){n(this,"topics");n(this,"subUid");this.topics={},this.subUid=-1}subscribe(s,t){const i=typeof s=="string"?[s]:s,e=(++this.subUid).toString();return i.forEach(c=>{this.topics[c]||(this.topics[c]=[]),this.topics[c].push({token:e,func:t})}),e}async publish(s,t){if(!this.topics[s])return!1;const i=this.topics[s];let e=i?i.length:0;for(;e--;)await i[e].func(t);return!0}unsubscribe(s){for(const t in this.topics)if(this.topics[t]){for(let i=0,e=this.topics[t].length;i<e;i++)if(this.topics[t][i].token===s)return this.topics[t].splice(i,1),s}return!1}}export{b as P};
//# sourceMappingURL=pubsub.a0411919.js.map
