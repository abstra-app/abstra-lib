import{z as t}from"./index.cf4c23b9.js";import{w as r}from"./metadata.2dc29168.js";import"./outputWidgets.b653f677.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="086d7b59-00f7-4d61-bf00-9559241f6329",o._sentryDebugIdIdentifier="sentry-dbid-086d7b59-00f7-4d61-bf00-9559241f6329")}catch{}})();const i=r.stages.flatMap(o=>o.transitions.flatMap(e=>e.typeName)),d=t.object({type:t.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:t.string(),title:t.string(),position:t.object({x:t.number(),y:t.number()}),props:t.object({path:t.string().nullable(),filename:t.string().nullable(),variableName:t.string().nullable()})}),l=t.object({id:t.string(),type:t.enum(i),sourceStageId:t.string(),targetStageId:t.string(),props:t.object({conditionValue:t.string().nullable()})}),a=t.object({stages:t.array(d),transitions:t.array(l)}),c={"Content-Type":"application/json"},u="abstra-run-id";class w{async load(){const e=await fetch("/_editor/api/workflows");if(e.ok){const n=await e.json();return a.parse(n)}else throw new Error("Failed to fetch initial data")}async update(e){const n=await fetch("/_editor/api/workflows",{method:"PUT",headers:c,body:JSON.stringify(e)});if(n.ok){const s=await n.json();return a.parse(s)}else throw new Error("Failed to update workflow")}}export{u as A,w as W};
//# sourceMappingURL=api.588dd97b.js.map
