var i=Object.defineProperty;var d=(n,e,t)=>e in n?i(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var r=(n,e,t)=>(d(n,typeof e!="symbol"?e+"":e,t),t);import{a as c}from"./asyncComputed.8a68a021.js";import"./outputWidgets.0fcc4832.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="dc0f3562-8675-4a80-8922-7fdbe6e7f078",n._sentryDebugIdIdentifier="sentry-dbid-dc0f3562-8675-4a80-8922-7fdbe6e7f078")}catch{}})();const s=class{async refreshIfChanged(e){var t,a;e.logged!==((a=(t=this.asyncComputed.result.value)==null?void 0:t.logged)!=null?a:!1)&&await this.asyncComputed.refetch()}async get(){return await(await fetch("/_editor/api/login")).json()}async create(e){const a=await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json();return await this.refreshIfChanged(a),a}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return s._asyncComputed===null&&(s._asyncComputed=c(()=>f.get())),s._asyncComputed}get loginUrl(){return"https://cloud.abstra.io/api-key?"+new URLSearchParams({redirect:location.href})}};let o=s;r(o,"_asyncComputed",null);const f=new o;export{f as l};
//# sourceMappingURL=login.4d9f7faf.js.map
