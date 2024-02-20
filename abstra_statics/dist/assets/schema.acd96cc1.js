import{z as t}from"./index.cf4c23b9.js";import{f as o,a as s,j as r,b as d,t as l,u as c}from"./icons.57eb7190.js";import"./outputWidgets.59990c05.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="556b0920-aab6-47b6-95c5-f7ed9f116348",e._sentryDebugIdIdentifier="sentry-dbid-556b0920-aab6-47b6-95c5-f7ed9f116348")}catch{}})();const n={stages:[{icon:o,typeName:"forms",description:"Wait for a user input",key:"F",title:"Forms",startingOnly:!1,transitions:[{typeName:"forms:finished",title:"Finished",additionalPayload:[]},{typeName:"forms:failed",title:"Failed",additionalPayload:[]}]},{typeName:"hooks",title:"Hooks",startingOnly:!1,icon:s,description:"Wait for an external API call",key:"H",transitions:[{typeName:"hooks:finished",title:"Finished",additionalPayload:[]},{typeName:"hooks:failed",title:"Failed",additionalPayload:[]}]},{typeName:"jobs",title:"Jobs",startingOnly:!0,icon:r,description:"Scheduled tasks",key:"J",transitions:[{typeName:"jobs:finished",title:"Finished",additionalPayload:[]},{typeName:"jobs:failed",title:"Failed",additionalPayload:[]}]},{typeName:"scripts",title:"Scripts",startingOnly:!1,icon:d,description:"Run a script",key:"S",transitions:[{typeName:"scripts:finished",title:"Finished",additionalPayload:[]},{typeName:"scripts:failed",title:"Failed",additionalPayload:[]}]},{typeName:"conditions",title:"Conditions",startingOnly:!1,icon:l,description:"Make a decision",key:"C",transitions:[{typeName:"conditions:patternMatched",title:"Pattern Matched",additionalPayload:[]},{typeName:"conditions:patternNotMatched",title:"Pattern Not Matched",additionalPayload:[]}]},{typeName:"iterators",title:"Iterators",startingOnly:!1,icon:c,description:"Split thread for each element in a list",key:"I",transitions:[{typeName:"iterators:each",title:"Each",additionalPayload:[{key:"item",type:"typing.Any",title:"Item"}]}]}]};function h(e){const a=n.stages.find(i=>i.typeName===e);if(!a)throw new Error(`No metadata found for stage ${e}`);return a.icon}const y=n.stages.flatMap(e=>e.transitions.flatMap(a=>a.typeName)),p=t.object({type:t.enum(["forms","hooks","jobs","scripts","conditions","iterators"]),id:t.string(),title:t.string(),position:t.object({x:t.number(),y:t.number()}),props:t.object({path:t.string().nullable(),filename:t.string().nullable(),variableName:t.string().nullable()})}),f=t.object({id:t.string(),type:t.enum(y),sourceStageId:t.string(),targetStageId:t.string(),props:t.object({conditionValue:t.string().nullable()})}),u=t.object({stages:t.array(p),transitions:t.array(f)});export{h as a,u as s,n as w};
//# sourceMappingURL=schema.acd96cc1.js.map
