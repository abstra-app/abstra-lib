var u=Object.defineProperty;var y=(r,e,t)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var n=(r,e,t)=>(y(r,typeof e!="symbol"?e+"":e,t),t);import{d as g,eA as f,J as b,b as w,c as _,u as h}from"./outputWidgets.17392370.js";import"./console.9b12928f.js";import"./index.c5e8e3a4.js";import{C as k}from"./gateway.ee06b706.js";import{A as v}from"./activeRecord.84b679f6.js";import{a as I}from"./asyncComputed.76849272.js";import{_ as D}from"./CrudView.vue_vue_type_script_setup_true_lang.c4e89a02.js";import"./index.7c30bb7a.js";import"./Form.e398e550.js";import"./Title.bc3ff086.js";import"./CollapsePanel.853dbd0d.js";import"./index.2e2d3a0a.js";import"./index.ba0ff767.js";import"./index.84380f11.js";import"./dayjs.05e1ae11.js";import"./index.56ff0f0c.js";import"./index.bd94f307.js";import"./TabPane.25e9ccd4.js";import"./index.8aa7fba2.js";import"./index.50017ce4.js";import"./index.fffd13c2.js";import"./index.d2f4083e.js";import"./index.1fd97730.js";import"./index.3e3b85af.js";import"./index.18880d1b.js";import"./index.8c91651f.js";import"./index.8d8985c7.js";import"./pubsub.fc739490.js";import"./icons.baa5f07a.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="52246da7-7342-40d1-ba33-4900bc62d1e6",r._sentryDebugIdIdentifier="sentry-dbid-52246da7-7342-40d1-ba33-4900bc62d1e6")}catch{}})();class N{constructor(){n(this,"urlPath","files")}async create(e){throw new Error("Not implemented")}async delete(e,t){throw new Error("Not implemented")}async get(e){throw new Error("Not implemented")}async update(e,t){throw new Error("Not implemented")}async list(e){return k.get(`projects/${e}/${this.urlPath}`)}}const p=new N;class m{constructor(e,t){n(this,"record");this.projectId=e,this.record=v.create(p,t,"id")}static async list(e){return(await p.list(e)).map(a=>new m(e,a))}get key(){return this.record.get("name")}get name(){return this.record.get("name")}get size(){return this.record.get("size")}get date(){return new Date(this.record.get("date"))}}const re=g({__name:"Files",setup(r){const t=f().params.projectId,{loading:a,result:c}=I(()=>m.list(t)),d=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}],l=b(()=>{var i,s;return{columns:[{name:"Name"},{name:"Size"},{name:"Date"}],rows:(s=(i=c.value)==null?void 0:i.map(o=>({key:o.key,cells:[{text:o.key},{text:o.size.toString()},{text:o.date.toDateString()}]})))!=null?s:[]}});return(i,s)=>(w(),_(D,{"entity-name":"File",loading:h(a),title:"Files",description:"Persist files on your projects.","empty-title":"No environment variables set",table:l.value,fields:d},null,8,["loading","table"]))}});export{re as default};
//# sourceMappingURL=Files.0c5b1d95.js.map
