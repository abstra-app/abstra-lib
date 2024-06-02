var y=Object.defineProperty;var m=(a,e,t)=>e in a?y(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var s=(a,e,t)=>(m(a,typeof e!="symbol"?e+"":e,t),t);import{a as u}from"./asyncComputed.e188c84d.js";import"./outputWidgets.abde7be7.js";import{D as w,a as g,b,m as _}from"./runnerData.ab456c17.js";import{A as T}from"./record.4adc9d27.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="b5e37067-ef9d-4ec5-9a9e-6e98b26bdc59",a._sentryDebugIdIdentifier="sentry-dbid-b5e37067-ef9d-4ec5-9a9e-6e98b26bdc59")}catch{}})();class k{async list(){const e=await fetch("/_editor/api/env-vars");if(!e.ok)throw new Error("Failed to list env vars");return e.json()}async create(e,t){const r=await fetch("/_editor/api/env-vars",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:e,value:t})});return l.refetch(),r.json()}async delete(e){if(!(await fetch(`/_editor/api/env-vars/${e}`,{method:"DELETE"})).ok)throw new Error("Failed to delete env vars");l.refetch()}}const d=new k,l=u(async()=>(await d.list()).map(e=>o.fromDto(e.key,e.value)));class o{constructor(e,t){this._key=e,this._value=t}static get listComputed(){return l}static fromDto(e,t){return new o(e,t)}get key(){return this._key}get value(){return this._value}static async create(e,t){const r=await d.create(e,t);return new o(r.key,r.value)}async delete(){await d.delete(this._key)}}class F{async check(){return(await fetch("/_editor/api/linters/check")).json()}async fix(e,t){const r=await fetch(`/_editor/api/linters/fix/${e}/${t}`,{method:"POST"});if(!r.ok)throw new Error("Failed to fix");return p.refetch(),r.json()}}const f=new F,p=u(async()=>(await f.check()).map(e=>new v(e)));class C{constructor(e,t){s(this,"name");s(this,"label");s(this,"ruleName");this.name=e.name,this.label=e.label,this.ruleName=t}async fix(){await f.fix(this.ruleName,this.name)}}class E{constructor(e,t){s(this,"label");s(this,"fixes");this.ruleName=t,this.label=e.label,this.fixes=e.fixes.map(r=>new C(r,t))}}class v{constructor(e){s(this,"name");s(this,"label");s(this,"type");s(this,"issues");this.name=e.name,this.label=e.label,this.type=e.type,this.issues=e.issues.map(t=>new E(t,this.name))}static get asyncComputed(){return p}static fromName(e){var r;const t=(r=p.result.value)==null?void 0:r.find(c=>c.name===e);if(!t)throw new Error(`Rule ${e} not found`);return t}}class D{async get(){return await(await fetch("/_editor/api/workspace",{method:"GET",headers:{"Content-Type":"application/json"}})).json()}async update(e,t){const c=await(await fetch("/_editor/api/workspace",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json();return h.refetch(),c}async create(e){throw new Error("Not implemented")}async openFile(e){await fetch("/_editor/api/workspace/open-file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:e})})}async initFile(e,t){await fetch("/_editor/api/workspace/init-file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:e,type:t})}),h.refetch()}async checkFile(e){const t=await fetch(`/_editor/api/workspace/check-file?path=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error("Failed to check file");return await t.json()}async readFile(e){const t=await fetch(`/_editor/api/workspace/read-file?file=${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return t.status===404?null:await t.text()}async readTestData(){return await(await fetch("/_editor/api/workspace/read-test-data",{method:"GET",headers:{"Content-Type":"application/json"}})).text()}async writeTestData(e){if(!(await fetch("/_editor/api/workspace/write-test-data",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({test_data:e})})).ok)throw new Error("Failed to write test data");return{success:!0}}async deploy(){if(!(await fetch("/_editor/api/workspace/deploy",{method:"POST",headers:{"Content-Type":"application/json"}})).ok)throw new Error("Failed to deploy")}}const n=new D,h=u(async()=>{const a=await n.get();return i.from(a)});class i{constructor(e){s(this,"record");this.record=T.create(n,e)}static async get(){const e=await n.get();return new i(e)}static from(e){return new i(e)}get brandName(){var e;return(e=this.record.get("brand_name"))!=null?e:""}set brandName(e){this.record.set("brand_name",e)}get fontColor(){var e;return(e=this.record.get("font_color"))!=null?e:"#000000"}set fontColor(e){this.record.set("font_color",e)}get logoUrl(){var e;return(e=this.record.get("logo_url"))!=null?e:""}set logoUrl(e){this.record.set("logo_url",e)}get mainColor(){var e;return(e=this.record.get("main_color"))!=null?e:w}set mainColor(e){this.record.set("main_color",e)}get fontFamily(){var e;return(e=this.record.get("font_family"))!=null?e:g}set fontFamily(e){this.record.set("font_family",e)}get theme(){var e;return(e=this.record.get("theme"))!=null?e:b}set theme(e){this.record.set("theme",e)}async save(){return this.record.save()}hasChanges(){return this.record.hasChanges()}async openFile(e){await n.openFile(e)}async initFile(e,t){await n.initFile(e,t)}static async checkFile(e){return n.checkFile(e)}async readFile(e){return n.readFile(e)}static async readTestData(){return n.readTestData()}static async writeTestData(e){return n.writeTestData(e)}static async deploy(){return n.deploy()}get sidebar(){var e;return(e=this.record.get("sidebar"))!=null?e:[]}set sidebar(e){this.record.set("sidebar",e)}makeRunnerData(){return{sidebar:this.sidebar,name:this.brandName,fontColor:this.fontColor,brandName:this.brandName,fontFamily:this.fontFamily,logoUrl:_("logo",this.logoUrl,"player"),mainColor:this.mainColor,theme:this.theme}}static get computed(){return h}}export{o as E,v as L,i as W};
//# sourceMappingURL=workspaces.164de9bb.js.map
