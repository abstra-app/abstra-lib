var d=Object.defineProperty;var i=(a,e,t)=>e in a?d(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var r=(a,e,t)=>(i(a,typeof e!="symbol"?e+"":e,t),t);import{a as c}from"./asyncComputed.70931a32.js";import"./outputWidgets.858eea56.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="c0da7f04-1f55-47ec-989b-d6adcd6f1947",a._sentryDebugIdIdentifier="sentry-dbid-c0da7f04-1f55-47ec-989b-d6adcd6f1947")}catch{}})();const s=class{async refreshIfChanged(e){var t,n;e.logged!==((n=(t=this.asyncComputed.result.value)==null?void 0:t.logged)!=null?n:!1)&&await this.asyncComputed.refetch()}async get(){return await(await fetch("/_editor/api/login")).json()}async create(e){const n=await(await fetch("/_editor/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})})).json();return await this.refreshIfChanged(n),n}async delete(){await fetch("/_editor/api/login",{method:"DELETE"}),this.asyncComputed.refetch()}async getProjectInfo(){return(await fetch("/_editor/api/login/info")).json()}get asyncComputed(){return s._asyncComputed===null&&(s._asyncComputed=c(()=>f.get())),s._asyncComputed}get loginUrl(){return"https://cloud.abstra.io/api-key?"+new URLSearchParams({redirect:location.href})}};let o=s;r(o,"_asyncComputed",null);const f=new o;export{f as l};
//# sourceMappingURL=login.fcd2656f.js.map
