import{z as t}from"./index.cf4c23b9.js";import{w as n}from"./metadata.8eebc80b.js";import"./outputWidgets.84fe9cdf.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="39109b72-38b6-4faf-8a7f-3e56ad4a8631",e._sentryDebugIdIdentifier="sentry-dbid-39109b72-38b6-4faf-8a7f-3e56ad4a8631")}catch{}})();const s=n.stages.flatMap(e=>e.transitions.flatMap(a=>a.typeName)),r=t.object({type:t.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:t.string(),title:t.string(),position:t.object({x:t.number(),y:t.number()}),props:t.object({path:t.string().nullable(),filename:t.string().nullable(),variableName:t.string().nullable()})}),o=t.object({id:t.string(),type:t.enum(s),sourceStageId:t.string(),targetStageId:t.string(),props:t.object({conditionValue:t.string().nullable()})}),f=t.object({stages:t.array(r),transitions:t.array(o)});export{f as s};
//# sourceMappingURL=schema.940d1789.js.map
