import{z as t}from"./index.cf4c23b9.js";import{w as s}from"./metadata.7a3af862.js";import"./outputWidgets.43a10844.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8bf18470-fce5-46e3-8f94-79857dc2f9d7",e._sentryDebugIdIdentifier="sentry-dbid-8bf18470-fce5-46e3-8f94-79857dc2f9d7")}catch{}})();const r=s.stages.flatMap(e=>e.transitions.flatMap(n=>n.typeName)),o=t.object({type:t.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:t.string(),title:t.string(),position:t.object({x:t.number(),y:t.number()}),props:t.object({path:t.string().nullable(),filename:t.string().nullable(),variableName:t.string().nullable()})}),a=t.object({id:t.string(),type:t.enum(r),sourceStageId:t.string(),targetStageId:t.string(),props:t.object({conditionValue:t.string().nullable()})}),l=t.object({stages:t.array(o),transitions:t.array(a)});export{l as s};
//# sourceMappingURL=schema.c41f5304.js.map
