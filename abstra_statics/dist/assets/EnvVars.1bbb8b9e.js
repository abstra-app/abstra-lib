var h=Object.defineProperty;var w=(a,e,t)=>e in a?h(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var d=(a,e,t)=>(w(a,typeof e!="symbol"?e+"":e,t),t);import{d as b,ey as g,H as v,b as k,c as $,u as _}from"./registerWidgets.ca57da3e.js";import{a as I}from"./asyncComputed.ae0b6a3c.js";import{C as l}from"./gateway.b88d532a.js";import{A as C}from"./activeRecord.f8743cd4.js";import"./index.27945116.js";import{o as j}from"./icons.1efe7950.js";import{_ as A}from"./CrudView.vue_vue_type_script_setup_true_lang.7b5510ae.js";import"./passwordlessManager.8d47b009.js";import"./pubsub.277d05a3.js";import"./storage.2a7aac1e.js";import"./Modal.db45c3f3.js";import"./Title.e5d7f1b0.js";import"./transButton.a2961478.js";import"./index.b0c465bd.js";import"./Text.1f2709b6.js";import"./index.e15362b2.js";import"./index.9943ced7.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="426e006c-cecf-48e4-ae6f-f07e1a53ef0c",a._sentryDebugIdIdentifier="sentry-dbid-426e006c-cecf-48e4-ae6f-f07e1a53ef0c")}catch{}})();class P{constructor(){d(this,"urlPath","env-vars")}async create(e){return l.post(`projects/${e.projectId}/${this.urlPath}`,{name:e.name,value:e.value})}async delete(e,t){await l.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return l.get(`projects/${e}/${this.urlPath}`)}async get(e){return l.get(`${this.urlPath}/${e}`)}async update(e,t){return l.patch(`${this.urlPath}/${e}`,t)}}const n=new P;class s{constructor(e,t){d(this,"record");this.projectId=e,this.record=C.create(n,t,"id")}static async list(e){return(await n.list(e)).map(r=>new s(e,r))}static async create(e,t,r){const o=await n.create({projectId:e,name:t,value:r});return new s(e,o)}static async get(e,t){const r=await n.get(t);return new s(e,r)}static async update(e,t,r){const o=await n.update(t,r);return new s(e,o)}get key(){return this.record.get("name")}get value(){return this.record.get("value")}set value(e){this.record.set("value",e)}async save(){await this.record.save()}async delete(){await n.delete(this.projectId,this.key)}hasChanges(){return this.record.hasChanges()}}const T=b({__name:"EnvVars",setup(a){const t=g().params.projectId,{loading:r,result:o,refetch:p}=I(()=>s.list(t)),m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function y({key:c,value:i}){await s.create(t,c,i),p()}const f=v(()=>{var c,i;return{columns:[{name:"Key"},{name:"Actions"}],rows:(i=(c=o.value)==null?void 0:c.map(u=>({key:u.key,cells:[{text:u.key},{text:"Actions",actions:[{icon:j,label:"Delete",async onClick(){await u.delete(),p()},dangerous:!0}]}]})))!=null?i:[]}});return(c,i)=>(k(),$(A,{"entity-name":"Env var",loading:_(r),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:f.value,"create-button-text":"Add Environment Variable",fields:m,onCreate:y},null,8,["loading","table"]))}});export{T as default};
//# sourceMappingURL=EnvVars.1bbb8b9e.js.map
