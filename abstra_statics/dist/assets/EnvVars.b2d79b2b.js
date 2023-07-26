var w=Object.defineProperty;var b=(a,e,t)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var u=(a,e,t)=>(b(a,typeof e!="symbol"?e+"":e,t),t);import{d as g,K as v,b as k,t as $,z as p,J as C}from"./registerWidgets.dc0b6768.js";import{a as I}from"./asyncComputed.1ef6bcd7.js";import{C as l}from"./gateway.320dd104.js";import{A as _}from"./activeRecord.81c73286.js";import{C as j}from"./CrudView.22658196.js";import{t as A}from"./icons.79ac4c38.js";import"./passwordlessManager.914ef4f9.js";import"./DropdownMenu.f0c8b270.js";import"./Modal.cf860ea9.js";import"./LoadingIndicator.91ee9d3a.js";import"./lottie.eb38a9e8.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="53eeaa59-e901-4cb3-9fe2-e746a31d5898",a._sentryDebugIdIdentifier="sentry-dbid-53eeaa59-e901-4cb3-9fe2-e746a31d5898")}catch{}})();class P{constructor(){u(this,"urlPath","env-vars")}async create(e){return l.post(`projects/${e.projectId}/${this.urlPath}`,{name:e.name,value:e.value})}async delete(e,t){await l.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return l.get(`projects/${e}/${this.urlPath}`)}async get(e){return l.get(`${this.urlPath}/${e}`)}async update(e,t){return l.patch(`${this.urlPath}/${e}`,t)}}const n=new P;class s{constructor(e,t){u(this,"record");this.projectId=e,this.record=new _(n,t,"id")}static async list(e){return(await n.list(e)).map(r=>new s(e,r))}static async create(e,t,r){const o=await n.create({projectId:e,name:t,value:r});return new s(e,o)}static async get(e,t){const r=await n.get(t);return new s(e,r)}static async update(e,t,r){const o=await n.update(t,r);return new s(e,o)}get key(){return this.record.get("name")}get value(){return this.record.get("value")}set value(e){this.record.set("value",e)}async save(){await this.record.save()}async delete(){await n.delete(this.projectId,this.key)}hasChanges(){return this.record.hasChanges()}}const q=g({__name:"EnvVars",setup(a){const t=C().params.projectId,{loading:r,result:o,refetch:m}=I(()=>s.list(t)),y=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function f({key:i,value:c}){await s.create(t,i,c),m()}const h=v(()=>{var i,c;return{columns:[{name:"Key"},{name:"Actions"}],rows:(c=(i=o.value)==null?void 0:i.map(d=>({key:d.key,cells:[{text:d.key,classes:["title","centered"]},{text:"Actions",classes:["centered"],actions:[{icon:A,label:"Delete",async onClick(){await d.delete(),m()},dangerous:!0}]}]})))!=null?c:[]}});return(i,c)=>(k(),$(j,{"entity-name":"env-vars",loading:p(r),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:p(h),"create-button-text":"Add Environment Variable",fields:p(y),onCreate:f},null,8,["loading","table","fields"]))}});export{q as default};
//# sourceMappingURL=EnvVars.b2d79b2b.js.map
