import{z as t}from"./index.cf4c23b9.js";import{w as r}from"./metadata.1b2faa6d.js";import"./outputWidgets.67d01534.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="f8cb3704-0477-49e7-b819-f05888697ce6",o._sentryDebugIdIdentifier="sentry-dbid-f8cb3704-0477-49e7-b819-f05888697ce6")}catch{}})();const i=r.stages.flatMap(o=>o.transitions.flatMap(e=>e.typeName)),c=t.object({type:t.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:t.string(),title:t.string(),position:t.object({x:t.number(),y:t.number()}),props:t.object({path:t.string().nullable(),filename:t.string().nullable(),variableName:t.string().nullable()})}),l=t.object({id:t.string(),type:t.enum(i),sourceStageId:t.string(),targetStageId:t.string(),props:t.object({conditionValue:t.string().nullable()})}),a=t.object({stages:t.array(c),transitions:t.array(l)}),d={"Content-Type":"application/json"},u="abstra-run-id";class w{async load(){const e=await fetch("/_editor/api/workflows");if(e.ok){const n=await e.json();return a.parse(n)}else throw new Error("Failed to fetch initial data")}async update(e){const n=await fetch("/_editor/api/workflows",{method:"PUT",headers:d,body:JSON.stringify(e)});if(n.ok){const s=await n.json();return a.parse(s)}else throw new Error("Failed to update workflow")}}export{u as A,w as W};
//# sourceMappingURL=api.c51328fc.js.map
