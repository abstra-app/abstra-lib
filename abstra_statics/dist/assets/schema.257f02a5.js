import{z as t}from"./index.cf4c23b9.js";import{w as s}from"./metadata.5f7300d4.js";import"./outputWidgets.a313d7bb.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0fd08e9e-893d-4634-8c98-58c2786eff94",e._sentryDebugIdIdentifier="sentry-dbid-0fd08e9e-893d-4634-8c98-58c2786eff94")}catch{}})();const r=s.stages.flatMap(e=>e.transitions.flatMap(n=>n.typeName)),o=t.object({type:t.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:t.string(),title:t.string(),position:t.object({x:t.number(),y:t.number()}),props:t.object({path:t.string().nullable(),filename:t.string().nullable(),variableName:t.string().nullable()})}),a=t.object({id:t.string(),type:t.enum(r),sourceStageId:t.string(),targetStageId:t.string(),props:t.object({conditionValue:t.string().nullable()})}),f=t.object({stages:t.array(o),transitions:t.array(a)});export{f as s};
//# sourceMappingURL=schema.257f02a5.js.map
