import"./index.b1cce20c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="676529f2-30ff-41b1-9e13-d8534bd73e36",o._sentryDebugIdIdentifier="sentry-dbid-676529f2-30ff-41b1-9e13-d8534bd73e36")}catch{}})();class h{static async*sendMessage(e,t,n,a,c,f,p){var i;const s=await fetch("/_editor/api/ai/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:e,runtime:t,langGraphThreadId:a,threadId:n,code:c,executionError:f})});if(!s.ok)throw new Error("Failed to send message");const r=(i=s.body)==null?void 0:i.getReader();if(!r)throw new Error("No response body");for(;!p();){const d=await r.read();if(d.done)break;yield new TextDecoder().decode(d.value)}}static async createThread(){return(await fetch("/_editor/api/ai/thread",{method:"POST"})).json()}static async cancelAllRuns(e){return(await fetch("/_editor/api/ai/cancel-all",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({threadId:e})})).ok}static async generateProject(e){const t=await fetch("/_editor/api/ai/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e})});if(!t.ok){const n=await t.text();throw new Error(n)}}static async vote(e,t,n,a){await fetch("/_editor/api/ai/vote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vote:e,question:t,answer:n,context:a})})}}export{h as A};
//# sourceMappingURL=ai.a229c241.js.map
