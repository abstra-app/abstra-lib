import{z as e}from"./index.cf4c23b9.js";import{w as s}from"./metadata.b2aff784.js";import"./outputWidgets.2096912b.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="5ef1e4e4-d697-4e78-9dbe-319b37fe8191",t._sentryDebugIdIdentifier="sentry-dbid-5ef1e4e4-d697-4e78-9dbe-319b37fe8191")}catch{}})();const r=s.stages.flatMap(t=>t.transitions.flatMap(n=>n.typeName)),o=e.object({type:e.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:e.string(),title:e.string(),position:e.object({x:e.number(),y:e.number()}),props:e.object({path:e.string().nullable(),filename:e.string().nullable(),variableName:e.string().nullable()})}),a=e.object({id:e.string(),type:e.enum(r),sourceStageId:e.string(),targetStageId:e.string(),props:e.object({conditionValue:e.string().nullable()})}),c=e.object({stages:e.array(o),transitions:e.array(a)});export{c as s};
//# sourceMappingURL=schema.4738d19c.js.map
