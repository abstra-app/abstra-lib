var i=Object.defineProperty;var c=(a,e,t)=>e in a?i(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var r=(a,e,t)=>(c(a,typeof e!="symbol"?e+"":e,t),t);import{a as d}from"./asyncComputed.ad4b4c43.js";import"./outputWidgets.1809539d.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="e3cc082f-8156-4a2a-97ae-20643247fa7e",a._sentryDebugIdIdentifier="sentry-dbid-e3cc082f-8156-4a2a-97ae-20643247fa7e")}catch{}})();const s=class{async refreshIfChanged(e){var t,n;e.logged!==((n=(t=this.asyncComputed.result.value)==null?void 0:t.logged)!=null?n:!1)&&await this.asyncComputed.refetch()}async get(){return await(await fetch("/_editor/api/login")).json()}async create(e){const n=await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json();return await this.refreshIfChanged(n),n}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return s._asyncComputed===null&&(s._asyncComputed=d(()=>f.get())),s._asyncComputed}get loginUrl(){return"https://cloud.abstra.io/api-key?"+new URLSearchParams({redirect:location.href})}};let o=s;r(o,"_asyncComputed",null);const f=new o;export{f as l};
//# sourceMappingURL=login.8231b36e.js.map
