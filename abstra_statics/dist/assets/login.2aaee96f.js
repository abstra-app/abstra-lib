var i=Object.defineProperty;var c=(n,e,t)=>e in n?i(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var r=(n,e,t)=>(c(n,typeof e!="symbol"?e+"":e,t),t);import{a as d}from"./asyncComputed.4686243d.js";import"./outputWidgets.63450c6a.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="34883ab8-c763-4f54-9618-7031be8e3238",n._sentryDebugIdIdentifier="sentry-dbid-34883ab8-c763-4f54-9618-7031be8e3238")}catch{}})();const s=class{async refreshIfChanged(e){var t,a;e.logged!==((a=(t=this.asyncComputed.result.value)==null?void 0:t.logged)!=null?a:!1)&&await this.asyncComputed.refetch()}async get(){return await(await fetch("/_editor/api/login")).json()}async create(e){const a=await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json();return await this.refreshIfChanged(a),a}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return s._asyncComputed===null&&(s._asyncComputed=d(()=>l.get())),s._asyncComputed}get loginUrl(){return"https://cloud.abstra.io/api-key?"+new URLSearchParams({redirect:location.href})}};let o=s;r(o,"_asyncComputed",null);const l=new o;export{l};
//# sourceMappingURL=login.2aaee96f.js.map
