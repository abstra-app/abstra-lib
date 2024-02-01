var b=Object.defineProperty;var w=(a,t,e)=>t in a?b(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var d=(a,t,e)=>(w(a,typeof t!="symbol"?t+"":t,e),e);import{d as g,eB as h,H as v,b as k,c as I,u as _}from"./outputWidgets.fedfcd3d.js";import{a as $}from"./asyncComputed.85f3fa44.js";import{C as i}from"./router.2f45b101.js";import"./index.b2d437d8.js";import{o as C}from"./icons.d6968458.js";import{C as j}from"./CrudView.b0afdcd1.js";import"./FormItem.01394243.js";import"./hasIn.8e32d300.js";import"./index.cf4c23b9.js";import"./record.58a93060.js";import"./pubsub.e7814d85.js";import"./Paragraph.ecb7668b.js";import"./Base.69a242ac.js";import"./Form.c397012e.js";import"./Modal.ba464f5c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.4893ea9d.js";import"./url.24413485.js";import"./index.92d3b53a.js";import"./Title.5fb084c8.js";import"./Text.5caa7fba.js";import"./index.f1a4c5c9.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[t]="5569bcae-80c1-48ab-9fc5-f22d06ca4ec8",a._sentryDebugIdIdentifier="sentry-dbid-5569bcae-80c1-48ab-9fc5-f22d06ca4ec8")}catch{}})();class P{constructor(){d(this,"urlPath","env-vars")}async create(t){return i.post(`projects/${t.projectId}/${this.urlPath}`,{name:t.name,value:t.value})}async delete(t,e){await i.delete(`projects/${t}/${this.urlPath}/${e}`)}async list(t){return i.get(`projects/${t}/${this.urlPath}`)}async get(t){return i.get(`${this.urlPath}/${t}`)}}const c=new P;class n{constructor(t,e){this.projectId=t,this.dto=e}static async list(t){return(await c.list(t)).map(r=>new n(t,r))}static async create(t,e,r){const l=await c.create({projectId:t,name:e,value:r});return new n(t,l)}static async get(t,e){const r=await c.get(e);return new n(t,r)}get key(){return this.dto.name}get value(){return this.dto.value}async delete(){await c.delete(this.projectId,this.key)}}const X=g({__name:"EnvVars",setup(a){const e=h().params.projectId,{loading:r,result:l,refetch:u}=$(()=>n.list(e)),m=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function y({key:o,value:s}){await n.create(e,o,s),u()}const f=v(()=>{var o,s;return{columns:[{name:"Key"},{name:"",align:"right"}],rows:(s=(o=l.value)==null?void 0:o.map(p=>({key:p.key,cells:[{type:"text",text:p.key},{type:"actions",actions:[{icon:C,label:"Delete",async onClick(){await p.delete(),u()},dangerous:!0}]}]})))!=null?s:[]}});return(o,s)=>(k(),I(j,{"entity-name":"Env var",loading:_(r),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:f.value,"create-button-text":"Add Environment Variable",fields:m,onCreate:y},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=EnvVars.083b39a9.js.map
