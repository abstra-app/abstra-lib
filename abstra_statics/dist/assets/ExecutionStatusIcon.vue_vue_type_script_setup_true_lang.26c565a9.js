import{C as l}from"./gateway.a3fd81e0.js";import{b as u,eh as d,f3 as w,f4 as I,d as j,o,c,u as a,R as S}from"./vue-router.a2e43274.js";import{L as P}from"./LoadingOutlined.4c9c54bc.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="9e5400b9-7f28-41c4-8f06-4f5fcb5238c3",r._sentryDebugIdIdentifier="sentry-dbid-9e5400b9-7f28-41c4-8f06-4f5fcb5238c3")}catch{}})();var F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"}}]},name:"minus-circle",theme:"filled"};const _=F;function C(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){A(r,s,t[s])})}return r}function A(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var f=function(e,t){var n=C({},e,t.attrs);return u(d,C({},n,{icon:w}),null)};f.displayName="CheckCircleFilled";f.inheritAttrs=!1;const $=f;function O(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){D(r,s,t[s])})}return r}function D(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var g=function(e,t){var n=O({},e,t.attrs);return u(d,O({},n,{icon:I}),null)};g.displayName="CloseCircleFilled";g.inheritAttrs=!1;const k=g;function v(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){x(r,s,t[s])})}return r}function x(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var p=function(e,t){var n=v({},e,t.attrs);return u(d,v({},n,{icon:_}),null)};p.displayName="MinusCircleFilled";p.inheritAttrs=!1;const E=p,B=["running","lock-failed","failed","finished","abandoned"];class L{async list({projectId:e,...t}){var h,y;const n={...t,offset:(h=t.offset)==null?void 0:h.toString(),limit:(y=t.limit)==null?void 0:y.toString()};Object.keys(n).forEach(i=>n[i]===void 0&&delete n[i]);const s=await l.get(`projects/${e}/executions`,n);return{executions:s.executions.map(i=>b.from(i)),totalCount:s.totalCount}}async fetchLogs(e,t){const n=await l.get(`projects/${e}/executions/${t}/logs`);return m.from(n)}async fetchThreadData(e,t){return(await l.get(`projects/${e}/executions/${t}/thread-data`)).response}}class m{constructor(e){this.dto=e}static from(e){return new m(e)}get entries(){return this.dto.sort((e,t)=>e.sequence-t.sequence).filter(e=>e.event!=="form-message")}}class b{constructor(e){this.dto=e}static from(e){return new b(e)}get id(){return this.dto.id}get shortId(){return this.dto.id.slice(0,8)}get createdAt(){return new Date(this.dto.createdAt)}get updatedAt(){return new Date(this.dto.updatedAt)}get status(){return this.dto.status}get context(){return this.dto.context}get buildId(){return this.dto.buildId}get stageId(){return this.dto.stageId}get duration_seconds(){return this.status==="running"?"-":`${(this.updatedAt.getTime()-this.createdAt.getTime())/1e3} s`}get stageRunId(){return this.dto.stageRunId}get projectId(){return this.dto.projectId}}const T=j({__name:"ExecutionStatusIcon",props:{status:{}},setup(r){return(e,t)=>e.status==="finished"?(o(),c(a($),{key:0,style:{color:"#33b891"}})):e.status==="failed"?(o(),c(a(k),{key:1,style:{color:"#fa675c"}})):e.status==="abandoned"||e.status==="lock-failed"?(o(),c(a(E),{key:2,style:{color:"#f69220"}})):e.status==="running"?(o(),c(a(P),{key:3})):S("",!0)}});export{L as E,T as _,B as e};
//# sourceMappingURL=ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.26c565a9.js.map
