import{z as t}from"./outputWidgets.b5ee3743.js";import{w as r}from"./metadata.514d5391.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="d6fa8474-6f02-4883-8ca2-1829b604a45a",a._sentryDebugIdIdentifier="sentry-dbid-d6fa8474-6f02-4883-8ca2-1829b604a45a")}catch{}})();const i=r.stages.flatMap(a=>a.transitions.flatMap(e=>e.typeName)),l=t.object({type:t.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:t.string(),title:t.string(),position:t.object({x:t.number(),y:t.number()}),props:t.object({path:t.string().nullable(),filename:t.string().nullable(),variableName:t.string().nullable(),itemName:t.string().nullable()})}),c=t.object({id:t.string(),type:t.enum(i),sourceStageId:t.string(),targetStageId:t.string(),props:t.object({conditionValue:t.string().nullable()})}),o=t.object({stages:t.array(l),transitions:t.array(c)}),d={"Content-Type":"application/json"},b="abstra-run-id";class u{async load(){const e=await fetch("/_editor/api/workflows");if(e.ok){const n=await e.json();return o.parse(n)}else throw new Error("Failed to fetch initial data")}async update(e){const n=await fetch("/_editor/api/workflows",{method:"PUT",headers:d,body:JSON.stringify(e)});if(n.ok){const s=await n.json();return o.parse(s)}else throw new Error("Failed to update workflow")}}export{b as A,u as W};
//# sourceMappingURL=api.4263217a.js.map
