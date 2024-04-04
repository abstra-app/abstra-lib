import{z as t}from"./index.cf4c23b9.js";import{w as r}from"./metadata.2c7352a3.js";import"./outputWidgets.4014d4b4.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="e37b3a64-d8e8-4861-ada4-cf17615a4b88",a._sentryDebugIdIdentifier="sentry-dbid-e37b3a64-d8e8-4861-ada4-cf17615a4b88")}catch{}})();const i=r.stages.flatMap(a=>a.transitions.flatMap(e=>e.typeName)),d=t.object({type:t.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:t.string(),title:t.string(),position:t.object({x:t.number(),y:t.number()}),props:t.object({path:t.string().nullable(),filename:t.string().nullable(),variableName:t.string().nullable()})}),l=t.object({id:t.string(),type:t.enum(i),sourceStageId:t.string(),targetStageId:t.string(),props:t.object({conditionValue:t.string().nullable()})}),n=t.object({stages:t.array(d),transitions:t.array(l)}),c={"Content-Type":"application/json"},u="abstra-run-id";class w{async load(){const e=await fetch("/_editor/api/workflows");if(e.ok){const o=await e.json();return n.parse(o)}else throw new Error("Failed to fetch initial data")}async update(e){const o=await fetch("/_editor/api/workflows",{method:"PUT",headers:c,body:JSON.stringify(e)});if(o.ok){const s=await o.json();return n.parse(s)}else throw new Error("Failed to update workflow")}}export{u as A,w as W};
//# sourceMappingURL=api.4e276e55.js.map
