import{z as t}from"./outputWidgets.10f69f01.js";import{w as r}from"./metadata.4d943e60.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="6044eed2-3018-4def-b279-e55ace5bf539",n._sentryDebugIdIdentifier="sentry-dbid-6044eed2-3018-4def-b279-e55ace5bf539")}catch{}})();const i=r.stages.flatMap(n=>n.transitions.flatMap(e=>e.typeName)),l=t.object({type:t.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:t.string(),title:t.string(),position:t.object({x:t.number(),y:t.number()}),props:t.object({path:t.string().nullable(),filename:t.string().nullable(),variableName:t.string().nullable(),itemName:t.string().nullable()})}),d=t.object({id:t.string(),type:t.enum(i),sourceStageId:t.string(),targetStageId:t.string(),props:t.object({conditionValue:t.string().nullable()})}),o=t.object({stages:t.array(l),transitions:t.array(d)}),c={"Content-Type":"application/json"},b="abstra-run-id";class u{async load(){const e=await fetch("/_editor/api/workflows");if(e.ok){const a=await e.json();return o.parse(a)}else throw new Error("Failed to fetch initial data")}async update(e){const a=await fetch("/_editor/api/workflows",{method:"PUT",headers:c,body:JSON.stringify(e)});if(a.ok){const s=await a.json();return o.parse(s)}else throw new Error("Failed to update workflow")}}export{b as A,u as W};
//# sourceMappingURL=api.aee25380.js.map
