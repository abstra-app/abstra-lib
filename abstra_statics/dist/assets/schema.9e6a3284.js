import{z as t}from"./index.cf4c23b9.js";import{w as s}from"./metadata.d3183e4c.js";import"./outputWidgets.cdb991c0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="73d4abc0-3ce8-4e0d-820b-073e2f6a4771",e._sentryDebugIdIdentifier="sentry-dbid-73d4abc0-3ce8-4e0d-820b-073e2f6a4771")}catch{}})();const a=s.stages.flatMap(e=>e.transitions.flatMap(n=>n.typeName)),r=t.object({type:t.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:t.string(),title:t.string(),position:t.object({x:t.number(),y:t.number()}),props:t.object({path:t.string().nullable(),filename:t.string().nullable(),variableName:t.string().nullable()})}),o=t.object({id:t.string(),type:t.enum(a),sourceStageId:t.string(),targetStageId:t.string(),props:t.object({conditionValue:t.string().nullable()})}),l=t.object({stages:t.array(r),transitions:t.array(o)});export{l as s};
//# sourceMappingURL=schema.9e6a3284.js.map
