import{z as t}from"./index.cf4c23b9.js";import{w as n}from"./metadata.ad42a3e0.js";import"./outputWidgets.149ec695.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="4d9e2953-1692-4ab4-8ad2-a2156ba68f57",e._sentryDebugIdIdentifier="sentry-dbid-4d9e2953-1692-4ab4-8ad2-a2156ba68f57")}catch{}})();const s=n.stages.flatMap(e=>e.transitions.flatMap(a=>a.typeName)),r=t.object({type:t.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:t.string(),title:t.string(),position:t.object({x:t.number(),y:t.number()}),props:t.object({path:t.string().nullable(),filename:t.string().nullable(),variableName:t.string().nullable()})}),o=t.object({id:t.string(),type:t.enum(s),sourceStageId:t.string(),targetStageId:t.string(),props:t.object({conditionValue:t.string().nullable()})}),c=t.object({stages:t.array(r),transitions:t.array(o)});export{c as s};
//# sourceMappingURL=schema.4e86e065.js.map
