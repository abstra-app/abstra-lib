import{z as e}from"./index.cf4c23b9.js";import{w as n}from"./metadata.0f9898fd.js";import"./outputWidgets.bf3b4f42.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="04ed71de-beea-4a5e-a1d2-6fa0ced83568",t._sentryDebugIdIdentifier="sentry-dbid-04ed71de-beea-4a5e-a1d2-6fa0ced83568")}catch{}})();const s=n.stages.flatMap(t=>t.transitions.flatMap(a=>a.typeName)),r=e.object({type:e.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:e.string(),title:e.string(),position:e.object({x:e.number(),y:e.number()}),props:e.object({path:e.string().nullable(),filename:e.string().nullable(),variableName:e.string().nullable()})}),o=e.object({id:e.string(),type:e.enum(s),sourceStageId:e.string(),targetStageId:e.string(),props:e.object({conditionValue:e.string().nullable()})}),c=e.object({stages:e.array(r),transitions:e.array(o)});export{c as s};
//# sourceMappingURL=schema.b5dc8a91.js.map
