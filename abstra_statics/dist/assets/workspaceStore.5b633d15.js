import{d as o}from"./router.9b33dadc.js";import{g as t}from"./api.601e66a7.js";import{e as s}from"./vue-router.f8901e1e.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="56123af9-2cdc-4f31-a5fa-53b7c428a1db",e._sentryDebugIdIdentifier="sentry-dbid-56123af9-2cdc-4f31-a5fa-53b7c428a1db")}catch{}})();const c=o("workspace",()=>{const e=s({workspace:null,loading:!1});return{state:e,actions:{async fetch(){e.value.loading=!0,e.value.workspace=await t(),e.value.loading=!1}}}});export{c as u};
//# sourceMappingURL=workspaceStore.5b633d15.js.map
