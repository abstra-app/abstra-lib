var h=Object.defineProperty;var b=(a,t,e)=>t in a?h(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var p=(a,t,e)=>(b(a,typeof t!="symbol"?t+"":t,e),e);import{d as g,eA as w,J as v,b as k,c as $,u as _}from"./outputWidgets.eddbac36.js";import{a as I}from"./asyncComputed.fbd351ba.js";import"./console.56ba8e89.js";import{C as d}from"./gateway.e4ec4a58.js";import{A}from"./activeRecord.64b754df.js";import"./index.c1e978a8.js";import{p as C}from"./icons.08aaa24c.js";import{_ as j}from"./CrudView.vue_vue_type_script_setup_true_lang.d009f8f3.js";import"./index.cc18f239.js";import"./Form.f5163eed.js";import"./Title.7ca27be1.js";import"./index.1a0ec4ff.js";import"./index.31447910.js";import"./index.9c583b89.js";import"./dayjs.d80a3524.js";import"./index.8318ec36.js";import"./index.8b693270.js";import"./TabPane.05333dfb.js";import"./index.b6a61078.js";import"./index.7a28d537.js";import"./index.d099a09e.js";import"./index.933610ff.js";import"./index.2c51d0a8.js";import"./index.b131e8f9.js";import"./index.3475d619.js";import"./index.f428cf3a.js";import"./pubsub.9aea5614.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="4d8d7aad-baf6-4cf6-9075-5199d942cd55",a._sentryDebugIdIdentifier="sentry-dbid-4d8d7aad-baf6-4cf6-9075-5199d942cd55")}catch{}})();class P{constructor(){p(this,"urlPath","env-vars")}async create(t){return d.post(`projects/${t.projectId}/${this.urlPath}`,{name:t.name,value:t.value})}async delete(t,e){await d.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t){return d.get(`projects/${t}/${this.urlPath}`)}async get(t){return d.get(`${this.urlPath}/${t}`)}async update(t,e){return d.patch(`${this.urlPath}/${t}`,e)}}const o=new P;class s{constructor(t,e){p(this,"record");this.projectId=t,this.record=A.create(o,e,"id")}static async list(t){return(await o.list(t)).map(r=>new s(t,r))}static async create(t,e,r){const n=await o.create({projectId:t,name:e,value:r});return new s(t,n)}static async get(t,e){const r=await o.get(e);return new s(t,r)}static async update(t,e,r){const n=await o.update(e,r);return new s(t,n)}get key(){return this.record.get("name")}get value(){return this.record.get("value")}set value(t){this.record.set("value",t)}async save(){await this.record.save()}async delete(){await o.delete(this.projectId,this.key)}hasChanges(){return this.record.hasChanges()}}const rt=g({__name:"EnvVars",setup(a){const e=w().params.projectId,{loading:r,result:n,refetch:u}=I(()=>s.list(e)),m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function y({key:i,value:c}){await s.create(e,i,c),u()}const f=v(()=>{var i,c;return{columns:[{name:"Key"},{name:"Actions",align:"right"}],rows:(c=(i=n.value)==null?void 0:i.map(l=>({key:l.key,cells:[{text:l.key},{text:"Actions",actions:[{icon:C,label:"Delete",async onClick(){await l.delete(),u()},dangerous:!0}]}]})))!=null?c:[]}});return(i,c)=>(k(),$(j,{"entity-name":"Env var",loading:_(r),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:f.value,"create-button-text":"Add Environment Variable",fields:m,onCreate:y},null,8,["loading","table"]))}});export{rt as default};
//# sourceMappingURL=EnvVars.2c6cde47.js.map
