var u=Object.defineProperty;var y=(r,e,t)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(y(r,typeof e!="symbol"?e+"":e,t),t);import{d as f,ez as g,H as w,b,c as _,u as h}from"./outputWidgets.2df9e511.js";import"./router.164b69b2.js";import"./columns.f28791e5.js";import{C as k}from"./gateway.7a25b835.js";import{A as v}from"./activeRecord.36a8fe6a.js";import{a as I}from"./asyncComputed.e495495e.js";import{C as D}from"./CrudView.0ae6a061.js";import"./Form.86cd8023.js";import"./Title.1873e880.js";import"./transButton.21d951e2.js";import"./Text.cf87271e.js";import"./index.d90c7b8e.js";import"./index.f4ac7424.js";import"./pubsub.35a0e00d.js";import"./icons.96b46ca5.js";import"./url.4a36a667.js";import"./index.e0535088.js";import"./index.4b084017.js";import"./index.96e01015.js";import"./index.ccf48690.js";import"./index.55f34527.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="3dd1b9f0-0351-4205-99de-fd836a4030b5",r._sentryDebugIdIdentifier="sentry-dbid-3dd1b9f0-0351-4205-99de-fd836a4030b5")}catch{}})();class C{constructor(){i(this,"urlPath","files")}async create(e){throw new Error("Not implemented")}async delete(e,t){throw new Error("Not implemented")}async get(e){throw new Error("Not implemented")}async update(e,t){throw new Error("Not implemented")}async list(e){return k.get(`projects/${e}/${this.urlPath}`)}}const l=new C;class d{constructor(e,t){i(this,"record");this.projectId=e,this.record=v.create(l,t,"id")}static async list(e){return(await l.list(e)).map(s=>new d(e,s))}get key(){return this.record.get("name")}get name(){return this.record.get("name")}get size(){return this.record.get("size")}get date(){return new Date(this.record.get("date"))}}const T=f({__name:"Files",setup(r){const t=g().params.projectId,{loading:s,result:m}=I(()=>d.list(t)),c=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],p=w(()=>{var a,n;return{columns:[{name:"Name"},{name:"Size"},{name:"Date"}],rows:(n=(a=m.value)==null?void 0:a.map(o=>({key:o.key,cells:[{text:o.key},{text:o.size.toString()},{text:o.date.toDateString()}]})))!=null?n:[]}});return(a,n)=>(b(),_(D,{"entity-name":"File",loading:h(s),title:"Files",description:"Persist files on your projects.","empty-title":"No environment variables set",table:p.value,fields:c},null,8,["loading","table"]))}});export{T as default};
//# sourceMappingURL=Files.8b14ab94.js.map
