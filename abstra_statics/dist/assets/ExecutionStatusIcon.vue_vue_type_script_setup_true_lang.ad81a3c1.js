import{C as c}from"./gateway.a42ba9d2.js";import{b as m,ee as h,eI as S,eJ as I,d as _,o as l,c as u,u as d,S as x}from"./index.500f2857.js";import{L as $}from"./LoadingOutlined.2ea466a4.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="b574d32a-07ca-422b-8796-2c28a4663c5d",r._sentryDebugIdIdentifier="sentry-dbid-b574d32a-07ca-422b-8796-2c28a4663c5d")}catch{}})();var P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"}}]},name:"minus-circle",theme:"filled"};const k=P;function w(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.forEach(function(s){E(r,s,e[s])})}return r}function E(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var b=function(t,e){var n=w({},t,e.attrs);return m(h,w({},n,{icon:S}),null)};b.displayName="CheckCircleFilled";b.inheritAttrs=!1;const F=b;function j(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.forEach(function(s){A(r,s,e[s])})}return r}function A(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var y=function(t,e){var n=j({},t,e.attrs);return m(h,j({},n,{icon:I}),null)};y.displayName="CloseCircleFilled";y.inheritAttrs=!1;const D=y;function v(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.forEach(function(s){M(r,s,e[s])})}return r}function M(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var C=function(t,e){var n=v({},t,e.attrs);return m(h,v({},n,{icon:k}),null)};C.displayName="MinusCircleFilled";C.inheritAttrs=!1;const L=C,B=["running","lock-failed","failed","finished","abandoned"];class f{constructor(t){this.dto=t}static from(t){return new f(t)}get entries(){return this.dto.sort((t,e)=>t.sequence-e.sequence).filter(t=>t.event!=="form-message")}}class g{constructor(t){this.dto=t}static from(t){return new g(t)}get id(){return this.dto.id}get shortId(){return this.dto.id.slice(0,8)}get createdAt(){return new Date(this.dto.createdAt)}get updatedAt(){return new Date(this.dto.updatedAt)}get status(){return this.dto.status}get context(){return this.dto.context}get buildId(){var t;return(t=this.dto.buildId)!=null?t:""}get stageId(){return this.dto.stageId}get duration_seconds(){return this.status==="running"?"-":`${(this.updatedAt.getTime()-this.createdAt.getTime())/1e3} s`}get stageRunId(){return this.dto.stageRunId}get projectId(){return this.dto.projectId}}class z{async list({projectId:t,...e}){var p,a;const n={...e,offset:(p=e.offset)==null?void 0:p.toString(),limit:(a=e.limit)==null?void 0:a.toString()};Object.keys(n).forEach(o=>n[o]===void 0&&delete n[o]);const s=await c.get(`projects/${t}/executions`,n);return{executions:s.executions.map(o=>g.from(o)),totalCount:s.totalCount}}async fetchLogs(t,e){const n=await c.get(`projects/${t}/executions/${e}/logs`);return f.from(n)}async fetchThreadData(t,e){return(await c.get(`projects/${t}/executions/${e}/thread-data`)).response}async getExecutionTasks(t,e){return await c.get(`projects/${t}/executions/${e}/tasks`)}async fetchStages(){throw new Error("Method not implemented.")}}class V{async list(t){var o,O;const e={...t,offset:(o=t.offset)==null?void 0:o.toString(),limit:(O=t.limit)==null?void 0:O.toString()};Object.keys(e).forEach(i=>e[i]===void 0&&delete e[i]);const n=Object.fromEntries(Object.entries(e!=null?e:{}).filter(([,i])=>i!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",a=await(await fetch(`/_editor/api/executions${s}`)).json();return{executions:a.executions.map(i=>g.from(i)),totalCount:a.totalCount}}async fetchLogs(t,e){const s=await(await fetch(`/_editor/api/logs/${e}`)).json();return f.from(s)}async fetchThreadData(){return{}}async getExecutionTasks(t,e){return await(await fetch(`/_editor/api/executions/${e}/tasks`)).json()}async fetchStages(){return await(await fetch("/_editor/api/executions/stages")).json()}}const G=_({__name:"ExecutionStatusIcon",props:{status:{}},setup(r){return(t,e)=>t.status==="finished"?(l(),u(d(F),{key:0,style:{color:"#33b891"}})):t.status==="failed"?(l(),u(d(D),{key:1,style:{color:"#fa675c"}})):t.status==="abandoned"||t.status==="lock-failed"?(l(),u(d(L),{key:2,style:{color:"#f69220"}})):t.status==="running"?(l(),u(d($),{key:3})):x("",!0)}});export{V as L,z as R,G as _,B as e};
//# sourceMappingURL=ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.ad81a3c1.js.map
