import{l as a}from"./index.15f476ed.js";import"./outputWidgets.e0c11cdd.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="21bab29f-6fb7-4427-856b-db039b2741f0",e._sentryDebugIdIdentifier="sentry-dbid-21bab29f-6fb7-4427-856b-db039b2741f0")}catch{}})();class r{constructor(t=a){this.fetch=t}async getData(t){return(await this.fetch("/_editor/api/kanban",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).json()}async getLogs(t){return(await this.fetch(`/_editor/api/kanban/logs/${t}`)).json()}async startJob(t){await this.fetch(`/_editor/api/kanban/jobs/${t}/start`,{method:"POST"})}}class i{constructor(t,s=a){this.authProvider=t,this.fetch=s}get headers(){return{"Content-Type":"application/json",...this.authProvider.authHeaders()}}async getData(t){return(await this.fetch("/_kanban/",{method:"POST",body:JSON.stringify(t),headers:this.headers})).json()}async getLogs(t){return(await this.fetch(`/_kanban/logs/${t}`,{headers:this.headers})).json()}async startJob(t){await this.fetch(`/_kanban/jobs/${t}/start`,{method:"POST",headers:this.headers})}}export{r as E,i as P};
//# sourceMappingURL=repository.86d344c2.js.map
