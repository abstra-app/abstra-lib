import{d as o}from"./router.d6fc84e4.js";import{g as t}from"./api.81d0de98.js";import{e as s}from"./vue-router.364debaa.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="56498729-08f8-4b89-8e25-fda837342da9",e._sentryDebugIdIdentifier="sentry-dbid-56498729-08f8-4b89-8e25-fda837342da9")}catch{}})();const i=o("workspace",()=>{const e=s({workspace:null,loading:!1});return{state:e,actions:{async fetch(){e.value.loading=!0,e.value.workspace=await t(),e.value.loading=!1}}}});export{i as u};
//# sourceMappingURL=workspaceStore.e409bf6c.js.map
