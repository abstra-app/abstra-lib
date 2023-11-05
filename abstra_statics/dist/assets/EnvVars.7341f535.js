var h=Object.defineProperty;var f=(a,e,t)=>e in a?h(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var u=(a,e,t)=>(f(a,typeof e!="symbol"?e+"":e,t),t);import{d as g,ez as w,H as v,b as k,c as $,u as C}from"./outputWidgets.7bdcec0a.js";import{a as I}from"./asyncComputed.cfb98789.js";import"./router.3986149f.js";import{C as d}from"./gateway.f622b899.js";import{A as _}from"./activeRecord.84d52553.js";import"./columns.6b51fbf2.js";import{k as j}from"./icons.6934ad19.js";import{C as A}from"./CrudView.82a1bc5a.js";import"./Title.9c0d0c5f.js";import"./index.15e46fc6.js";import"./pubsub.c455bec9.js";import"./index.f4ac7424.js";import"./Text.94a8ea41.js";import"./Form.f84b91b7.js";import"./url.5caacc63.js";import"./index.fa2fc691.js";import"./index.125aa6b3.js";import"./index.d2a75d88.js";import"./index.a9a6d5a2.js";import"./index.a2310446.js";import"./index.23129d61.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="28e190b4-aedb-40df-abd1-8f126396dd6b",a._sentryDebugIdIdentifier="sentry-dbid-28e190b4-aedb-40df-abd1-8f126396dd6b")}catch{}})();class P{constructor(){u(this,"urlPath","env-vars")}async create(e){return d.post(`projects/${e.projectId}/${this.urlPath}`,{name:e.name,value:e.value})}async delete(e,t){await d.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return d.get(`projects/${e}/${this.urlPath}`)}async get(e){return d.get(`${this.urlPath}/${e}`)}async update(e,t){return d.patch(`${this.urlPath}/${e}`,t)}}const n=new P;class s{constructor(e,t){u(this,"record");this.projectId=e,this.record=_.create(n,t,"id")}static async list(e){return(await n.list(e)).map(r=>new s(e,r))}static async create(e,t,r){const o=await n.create({projectId:e,name:t,value:r});return new s(e,o)}static async get(e,t){const r=await n.get(t);return new s(e,r)}static async update(e,t,r){const o=await n.update(t,r);return new s(e,o)}get key(){return this.record.get("name")}get value(){return this.record.get("value")}set value(e){this.record.set("value",e)}async save(){await this.record.save()}async delete(){await n.delete(this.projectId,this.key)}hasChanges(){return this.record.hasChanges()}}const Y=g({__name:"EnvVars",setup(a){const t=w().params.projectId,{loading:r,result:o,refetch:p}=I(()=>s.list(t)),m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function y({key:i,value:c}){await s.create(t,i,c),p()}const b=v(()=>{var i,c;return{columns:[{name:"Key"},{name:"Actions",align:"right"}],rows:(c=(i=o.value)==null?void 0:i.map(l=>({key:l.key,cells:[{text:l.key},{text:"Actions",actions:[{icon:j,label:"Delete",async onClick(){await l.delete(),p()},dangerous:!0}]}]})))!=null?c:[]}});return(i,c)=>(k(),$(A,{"entity-name":"Env var",loading:C(r),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:b.value,"create-button-text":"Add Environment Variable",fields:m,onCreate:y},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=EnvVars.7341f535.js.map
