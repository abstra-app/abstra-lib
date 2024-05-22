import{z as t}from"./outputWidgets.fc0873ad.js";import{w as r}from"./metadata.3a42c718.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="095df547-ad53-4083-98d1-78961807827e",n._sentryDebugIdIdentifier="sentry-dbid-095df547-ad53-4083-98d1-78961807827e")}catch{}})();const i=r.stages.flatMap(n=>n.transitions.flatMap(e=>e.typeName)),d=t.object({type:t.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:t.string(),title:t.string(),position:t.object({x:t.number(),y:t.number()}),props:t.object({path:t.string().nullable(),filename:t.string().nullable(),variableName:t.string().nullable(),itemName:t.string().nullable()})}),l=t.object({id:t.string(),type:t.enum(i),sourceStageId:t.string(),targetStageId:t.string(),props:t.object({conditionValue:t.string().nullable()})}),o=t.object({stages:t.array(d),transitions:t.array(l)}),c={"Content-Type":"application/json"},u="abstra-run-id";class w{async load(){const e=await fetch("/_editor/api/workflows");if(e.ok){const a=await e.json();return o.parse(a)}else throw new Error("Failed to fetch initial data")}async update(e){const a=await fetch("/_editor/api/workflows",{method:"PUT",headers:c,body:JSON.stringify(e)});if(a.ok){const s=await a.json();return o.parse(s)}else throw new Error("Failed to update workflow")}}export{u as A,w as W};
//# sourceMappingURL=api.0d5bfccc.js.map
