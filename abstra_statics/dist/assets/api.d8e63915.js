import{z as t}from"./index.cf4c23b9.js";import{w as r}from"./metadata.0d6fb611.js";import"./outputWidgets.65a5bdbd.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="c2984189-d51c-4128-8cf9-035b3922c5bd",o._sentryDebugIdIdentifier="sentry-dbid-c2984189-d51c-4128-8cf9-035b3922c5bd")}catch{}})();const i=r.stages.flatMap(o=>o.transitions.flatMap(e=>e.typeName)),c=t.object({type:t.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:t.string(),title:t.string(),position:t.object({x:t.number(),y:t.number()}),props:t.object({path:t.string().nullable(),filename:t.string().nullable(),variableName:t.string().nullable()})}),d=t.object({id:t.string(),type:t.enum(i),sourceStageId:t.string(),targetStageId:t.string(),props:t.object({conditionValue:t.string().nullable()})}),a=t.object({stages:t.array(c),transitions:t.array(d)}),l={"Content-Type":"application/json"},u="abstra-run-id";class w{async load(){const e=await fetch("/_editor/api/workflows");if(e.ok){const n=await e.json();return a.parse(n)}else throw new Error("Failed to fetch initial data")}async update(e){const n=await fetch("/_editor/api/workflows",{method:"PUT",headers:l,body:JSON.stringify(e)});if(n.ok){const s=await n.json();return a.parse(s)}else throw new Error("Failed to update workflow")}}export{u as A,w as W};
//# sourceMappingURL=api.d8e63915.js.map
