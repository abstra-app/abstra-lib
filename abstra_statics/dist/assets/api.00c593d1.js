import{z as t}from"./outputWidgets.588123dd.js";import{w as r}from"./metadata.7a0feaf6.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="7cb7fa43-3c52-47a6-b930-c7b89bb6cf9a",a._sentryDebugIdIdentifier="sentry-dbid-7cb7fa43-3c52-47a6-b930-c7b89bb6cf9a")}catch{}})();const i=r.stages.flatMap(a=>a.transitions.flatMap(e=>e.typeName)),c=t.object({type:t.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:t.string(),title:t.string(),position:t.object({x:t.number(),y:t.number()}),props:t.object({path:t.string().nullable(),filename:t.string().nullable(),variableName:t.string().nullable(),itemName:t.string().nullable()})}),l=t.object({id:t.string(),type:t.enum(i),sourceStageId:t.string(),targetStageId:t.string(),props:t.object({conditionValue:t.string().nullable()})}),o=t.object({stages:t.array(c),transitions:t.array(l)}),b={"Content-Type":"application/json"},p="abstra-run-id";class u{async load(){const e=await fetch("/_editor/api/workflows");if(e.ok){const n=await e.json();return o.parse(n)}else throw new Error("Failed to fetch initial data")}async update(e){const n=await fetch("/_editor/api/workflows",{method:"PUT",headers:b,body:JSON.stringify(e)});if(n.ok){const s=await n.json();return o.parse(s)}else throw new Error("Failed to update workflow")}}export{p as A,u as W};
//# sourceMappingURL=api.00c593d1.js.map
