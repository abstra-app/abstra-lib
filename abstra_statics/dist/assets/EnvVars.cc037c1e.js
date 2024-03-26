var _=Object.defineProperty;var j=(o,e,t)=>e in o?_(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var k=(o,e,t)=>(j(o,typeof e!="symbol"?e+"":e,t),t);import{d as x,eB as P,r as A,H as D,a as E,b as g,eu as U,f as u,u as p,w as m,aC as B,eP as G,c as N,aq as F,eE as S,by as T,ew as q}from"./outputWidgets.e9677800.js";import{C as c}from"./router.e014ddc2.js";import"./index.21e91f9c.js";import{G as H}from"./PhPencil.vue.502d3996.js";import{a as K}from"./asyncComputed.37b7af98.js";import{C as O}from"./CrudView.8e03181d.js";import{A as R}from"./Form.9737d51d.js";import{A as z}from"./Text.fd9e90fd.js";import{M as J}from"./Modal.df560cc7.js";import"./popupNotifcation.7148cdf9.js";import"./index.cf4c23b9.js";import"./record.767f28b7.js";import"./pubsub.9e36d89a.js";import"./Paragraph.394702f6.js";import"./Base.64d54b8f.js";import"./Typography.511f4fec.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a4277c3a.js";import"./url.89c6b244.js";import"./index.42279d35.js";import"./Title.c954a24a.js";import"./index.1a0bd015.js";import"./hasIn.bd3f78ff.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="63fc6a71-5382-460f-9eab-2673b37af835",o._sentryDebugIdIdentifier="sentry-dbid-63fc6a71-5382-460f-9eab-2673b37af835")}catch{}})();class L{constructor(){k(this,"urlPath","env-vars")}async create(e){return c.post(`projects/${e.projectId}/${this.urlPath}`,{name:e.name,value:e.value})}async delete(e,t){await c.delete(`projects/${e}/${this.urlPath}/${t}`)}async update(e,t,a){await c.patch(`projects/${e}/${this.urlPath}/${t}`,{value:a})}async list(e){return c.get(`projects/${e}/${this.urlPath}`)}async get(e){return c.get(`${this.urlPath}/${e}`)}}const d=new L;class l{constructor(e,t){this.projectId=e,this.dto=t}static async list(e){return(await d.list(e)).map(a=>new l(e,a))}static async create(e,t,a){const y=await d.create({projectId:e,name:t,value:a});return new l(e,y)}static async get(e,t){const a=await d.get(t);return new l(e,a)}get key(){return this.dto.name}get value(){return this.dto.value}async delete(){await d.delete(this.projectId,this.key)}async update(e){await d.update(this.projectId,this.key,e)}}const we=x({__name:"EnvVars",setup(o){const t=P().params.projectId,a=A({type:"idle"}),{loading:y,result:f,refetch:v}=K(()=>l.list(t)),h=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function $({key:r,value:n}){await l.create(t,r,n),v()}function C(r){a.value={type:"update-value",key:r.key,newValue:""}}async function w(r){var n;if(a.value.type==="update-value"&&r){const{key:s,newValue:i}=a.value,b=(n=f.value)==null?void 0:n.find(V=>V.key===s);b&&await b.update(i)}a.value={type:"idle"}}const I=D(()=>{var r,n;return{columns:[{name:"Key"},{name:"",align:"right"}],rows:(n=(r=f.value)==null?void 0:r.map(s=>({key:s.key,cells:[{type:"text",text:s.key},{type:"actions",actions:[{icon:G,label:"Delete",async onClick(){await s.delete(),v()},dangerous:!0},{icon:H,label:"Update value",onClick(){C(s)}}]}]})))!=null?n:[]}});return(r,n)=>{const s=E("ant-form");return g(),U(B,null,[u(O,{"entity-name":"Env var",loading:p(y),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:I.value,"create-button-text":"Add Environment Variable",fields:h,onCreate:$},null,8,["loading","table"]),u(p(J),{open:a.value.type==="update-value",title:"Update value",onCancel:n[1]||(n[1]=i=>w(!1)),onOk:n[2]||(n[2]=i=>w(!0))},{default:m(()=>[a.value.type==="update-value"?(g(),N(s,{key:0,layout:"vertical"},{default:m(()=>[u(p(R),null,{default:m(()=>[u(p(z),null,{default:m(()=>[F(S(a.value.key),1)]),_:1}),u(p(T),{value:a.value.newValue,"onUpdate:value":n[0]||(n[0]=i=>a.value.newValue=i)},null,8,["value"])]),_:1})]),_:1})):q("",!0)]),_:1},8,["open"])],64)}}});export{we as default};
//# sourceMappingURL=EnvVars.cc037c1e.js.map
