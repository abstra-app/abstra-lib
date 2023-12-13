var b=Object.defineProperty;var g=(a,e,t)=>e in a?b(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var p=(a,e,t)=>(g(a,typeof e!="symbol"?e+"":e,t),t);import{d as w,eA as h,G as v,b as k,c as I,u as _}from"./outputWidgets.723dbd35.js";import{a as $}from"./asyncComputed.6087fd05.js";import"./router.c09623bf.js";import"./index.f80aedcf.js";import{C as i}from"./gateway.ed2ccaa3.js";import{g as C}from"./icons.d199659e.js";import{C as j}from"./CrudView.ca2cf6ee.js";import"./Form.71a7af16.js";import"./index.b41dfd0a.js";import"./record.c3c42720.js";import"./pubsub.97441533.js";import"./index.d0473694.js";import"./Title.ad9727d9.js";import"./url.c8598ea1.js";import"./index.4913d787.js";import"./index.f91ebf4c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="e8fc5dfc-8355-48e0-99a0-20e0b0fa1d3b",a._sentryDebugIdIdentifier="sentry-dbid-e8fc5dfc-8355-48e0-99a0-20e0b0fa1d3b")}catch{}})();class A{constructor(){p(this,"urlPath","env-vars")}async create(e){return i.post(`projects/${e.projectId}/${this.urlPath}`,{name:e.name,value:e.value})}async delete(e,t){await i.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return i.get(`projects/${e}/${this.urlPath}`)}async get(e){return i.get(`${this.urlPath}/${e}`)}}const c=new A;class n{constructor(e,t){this.projectId=e,this.dto=t}static async list(e){return(await c.list(e)).map(r=>new n(e,r))}static async create(e,t,r){const l=await c.create({projectId:e,name:t,value:r});return new n(e,l)}static async get(e,t){const r=await c.get(t);return new n(e,r)}get key(){return this.dto.name}get value(){return this.dto.value}async delete(){await c.delete(this.projectId,this.key)}}const O=w({__name:"EnvVars",setup(a){const t=h().params.projectId,{loading:r,result:l,refetch:d}=$(()=>n.list(t)),m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function y({key:s,value:o}){await n.create(t,s,o),d()}const f=v(()=>{var s,o;return{columns:[{name:"Key"},{name:"Actions",align:"right"}],rows:(o=(s=l.value)==null?void 0:s.map(u=>({key:u.key,cells:[{text:u.key},{text:"Actions",actions:[{icon:C,label:"Delete",async onClick(){await u.delete(),d()},dangerous:!0}]}]})))!=null?o:[]}});return(s,o)=>(k(),I(j,{"entity-name":"Env var",loading:_(r),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:f.value,"create-button-text":"Add Environment Variable",fields:m,onCreate:y},null,8,["loading","table"]))}});export{O as default};
//# sourceMappingURL=EnvVars.8a02ff48.js.map
