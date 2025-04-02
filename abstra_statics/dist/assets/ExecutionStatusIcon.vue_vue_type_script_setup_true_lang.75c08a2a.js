import{C as c}from"./gateway.61e97762.js";import{b as m,ee as h,eI as S,eJ as I,d as _,o as l,c as u,u as d,S as x}from"./index.00900164.js";import{L as $}from"./LoadingOutlined.30286f42.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="fd65e760-6e69-46d6-a21a-75535c05a504",r._sentryDebugIdIdentifier="sentry-dbid-fd65e760-6e69-46d6-a21a-75535c05a504")}catch{}})();var P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"}}]},name:"minus-circle",theme:"filled"};const k=P;function w(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){E(r,s,t[s])})}return r}function E(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var b=function(e,t){var n=w({},e,t.attrs);return m(h,w({},n,{icon:S}),null)};b.displayName="CheckCircleFilled";b.inheritAttrs=!1;const F=b;function j(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){A(r,s,t[s])})}return r}function A(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var y=function(e,t){var n=j({},e,t.attrs);return m(h,j({},n,{icon:I}),null)};y.displayName="CloseCircleFilled";y.inheritAttrs=!1;const D=y;function v(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){M(r,s,t[s])})}return r}function M(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var C=function(e,t){var n=v({},e,t.attrs);return m(h,v({},n,{icon:k}),null)};C.displayName="MinusCircleFilled";C.inheritAttrs=!1;const L=C,B=["running","lock-failed","failed","finished","abandoned"];class f{constructor(e){this.dto=e}static from(e){return new f(e)}get entries(){return this.dto.sort((e,t)=>e.sequence-t.sequence).filter(e=>e.event!=="form-message")}}class g{constructor(e){this.dto=e}static from(e){return new g(e)}get id(){return this.dto.id}get shortId(){return this.dto.id.slice(0,8)}get createdAt(){return new Date(this.dto.createdAt)}get updatedAt(){return new Date(this.dto.updatedAt)}get status(){return this.dto.status}get context(){return this.dto.context}get buildId(){var e;return(e=this.dto.buildId)!=null?e:""}get stageId(){return this.dto.stageId}get duration_seconds(){return this.status==="running"?"-":`${(this.updatedAt.getTime()-this.createdAt.getTime())/1e3} s`}get stageRunId(){return this.dto.stageRunId}get projectId(){return this.dto.projectId}}class z{async list({projectId:e,...t}){var p,a;const n={...t,offset:(p=t.offset)==null?void 0:p.toString(),limit:(a=t.limit)==null?void 0:a.toString()};Object.keys(n).forEach(o=>n[o]===void 0&&delete n[o]);const s=await c.get(`projects/${e}/executions`,n);return{executions:s.executions.map(o=>g.from(o)),totalCount:s.totalCount}}async fetchLogs(e,t){const n=await c.get(`projects/${e}/executions/${t}/logs`);return f.from(n)}async fetchThreadData(e,t){return(await c.get(`projects/${e}/executions/${t}/thread-data`)).response}async getExecutionTasks(e,t){return await c.get(`projects/${e}/executions/${t}/tasks`)}async fetchStages(){throw new Error("Method not implemented.")}}class V{async list(e){var o,O;const t={...e,offset:(o=e.offset)==null?void 0:o.toString(),limit:(O=e.limit)==null?void 0:O.toString()};Object.keys(t).forEach(i=>t[i]===void 0&&delete t[i]);const n=Object.fromEntries(Object.entries(t!=null?t:{}).filter(([,i])=>i!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",a=await(await fetch(`/_editor/api/executions${s}`)).json();return{executions:a.executions.map(i=>g.from(i)),totalCount:a.totalCount}}async fetchLogs(e,t){const s=await(await fetch(`/_editor/api/logs/${t}`)).json();return f.from(s)}async fetchThreadData(){return{}}async getExecutionTasks(e,t){return await(await fetch(`/_editor/api/executions/${t}/tasks`)).json()}async fetchStages(){return await(await fetch("/_editor/api/executions/stages")).json()}}const G=_({__name:"ExecutionStatusIcon",props:{status:{}},setup(r){return(e,t)=>e.status==="finished"?(l(),u(d(F),{key:0,style:{color:"#33b891"}})):e.status==="failed"?(l(),u(d(D),{key:1,style:{color:"#fa675c"}})):e.status==="abandoned"||e.status==="lock-failed"?(l(),u(d(L),{key:2,style:{color:"#f69220"}})):e.status==="running"?(l(),u(d($),{key:3})):x("",!0)}});export{V as L,z as R,G as _,B as e};
//# sourceMappingURL=ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.75c08a2a.js.map
