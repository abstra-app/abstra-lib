import{z as t}from"./outputWidgets.d0d70069.js";import{w as r}from"./metadata.5f45b0ae.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="ac5231b8-dff4-4ab6-8fe6-70e7cf3e3e8d",a._sentryDebugIdIdentifier="sentry-dbid-ac5231b8-dff4-4ab6-8fe6-70e7cf3e3e8d")}catch{}})();const i=r.stages.flatMap(a=>a.transitions.flatMap(e=>e.typeName)),c=t.object({type:t.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:t.string(),title:t.string(),position:t.object({x:t.number(),y:t.number()}),props:t.object({path:t.string().nullable(),filename:t.string().nullable(),variableName:t.string().nullable()})}),d=t.object({id:t.string(),type:t.enum(i),sourceStageId:t.string(),targetStageId:t.string(),props:t.object({conditionValue:t.string().nullable()})}),o=t.object({stages:t.array(c),transitions:t.array(d)}),l={"Content-Type":"application/json"},b="abstra-run-id";class u{async load(){const e=await fetch("/_editor/api/workflows");if(e.ok){const n=await e.json();return o.parse(n)}else throw new Error("Failed to fetch initial data")}async update(e){const n=await fetch("/_editor/api/workflows",{method:"PUT",headers:l,body:JSON.stringify(e)});if(n.ok){const s=await n.json();return o.parse(s)}else throw new Error("Failed to update workflow")}}export{b as A,u as W};
//# sourceMappingURL=api.de15df96.js.map
