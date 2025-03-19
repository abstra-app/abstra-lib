import{C as p}from"./gateway.d1732116.js";import{b as m,ee as h,eF as S,eG as I,d as _,o as c,c as l,u,S as P}from"./index.f642553c.js";import{L as F}from"./LoadingOutlined.f1e9ea60.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="d5305ae4-ac36-4510-a7dd-d1f154bdb60a",r._sentryDebugIdIdentifier="sentry-dbid-d5305ae4-ac36-4510-a7dd-d1f154bdb60a")}catch{}})();var $={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"}}]},name:"minus-circle",theme:"filled"};const x=$;function w(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){A(r,s,t[s])})}return r}function A(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var b=function(e,t){var n=w({},e,t.attrs);return m(h,w({},n,{icon:S}),null)};b.displayName="CheckCircleFilled";b.inheritAttrs=!1;const D=b;function v(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){E(r,s,t[s])})}return r}function E(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var y=function(e,t){var n=v({},e,t.attrs);return m(h,v({},n,{icon:I}),null)};y.displayName="CloseCircleFilled";y.inheritAttrs=!1;const k=y;function j(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.forEach(function(s){M(r,s,t[s])})}return r}function M(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var C=function(e,t){var n=j({},e,t.attrs);return m(h,j({},n,{icon:x}),null)};C.displayName="MinusCircleFilled";C.inheritAttrs=!1;const L=C,B=["running","lock-failed","failed","finished","abandoned"];class d{constructor(e){this.dto=e}static from(e){return new d(e)}get entries(){return this.dto.sort((e,t)=>e.sequence-t.sequence).filter(e=>e.event!=="form-message")}}class f{constructor(e){this.dto=e}static from(e){return new f(e)}get id(){return this.dto.id}get shortId(){return this.dto.id.slice(0,8)}get createdAt(){return new Date(this.dto.createdAt)}get updatedAt(){return new Date(this.dto.updatedAt)}get status(){return this.dto.status}get context(){return this.dto.context}get buildId(){var e;return(e=this.dto.buildId)!=null?e:""}get stageId(){return this.dto.stageId}get duration_seconds(){return this.status==="running"?"-":`${(this.updatedAt.getTime()-this.createdAt.getTime())/1e3} s`}get stageRunId(){return this.dto.stageRunId}get projectId(){return this.dto.projectId}}class z{async list({projectId:e,...t}){var g,a;const n={...t,offset:(g=t.offset)==null?void 0:g.toString(),limit:(a=t.limit)==null?void 0:a.toString()};Object.keys(n).forEach(o=>n[o]===void 0&&delete n[o]);const s=await p.get(`projects/${e}/executions`,n);return{executions:s.executions.map(o=>f.from(o)),totalCount:s.totalCount}}async fetchLogs(e,t){const n=await p.get(`projects/${e}/executions/${t}/logs`);return d.from(n)}async fetchThreadData(e,t){return(await p.get(`projects/${e}/executions/${t}/thread-data`)).response}async fetchStages(){throw new Error("Method not implemented.")}}class G{async list(e){var o,O;const t={...e,offset:(o=e.offset)==null?void 0:o.toString(),limit:(O=e.limit)==null?void 0:O.toString()};Object.keys(t).forEach(i=>t[i]===void 0&&delete t[i]);const n=Object.fromEntries(Object.entries(t!=null?t:{}).filter(([,i])=>i!=null)),s=Object.keys(n).length>0?`?${new URLSearchParams(n).toString()}`:"",a=await(await fetch(`/_editor/api/executions${s}`)).json();return{executions:a.executions.map(i=>f.from(i)),totalCount:a.totalCount}}async fetchLogs(e,t){const s=await(await fetch(`/_editor/api/logs/${t}`)).json();return d.from(s)}async fetchThreadData(){return{}}async fetchStages(){return await(await fetch("/_editor/api/executions/stages")).json()}}const V=_({__name:"ExecutionStatusIcon",props:{status:{}},setup(r){return(e,t)=>e.status==="finished"?(c(),l(u(D),{key:0,style:{color:"#33b891"}})):e.status==="failed"?(c(),l(u(k),{key:1,style:{color:"#fa675c"}})):e.status==="abandoned"||e.status==="lock-failed"?(c(),l(u(L),{key:2,style:{color:"#f69220"}})):e.status==="running"?(c(),l(u(F),{key:3})):P("",!0)}});export{G as L,z as R,V as _,B as e};
//# sourceMappingURL=ExecutionStatusIcon.vue_vue_type_script_setup_true_lang.3a5dad7e.js.map
