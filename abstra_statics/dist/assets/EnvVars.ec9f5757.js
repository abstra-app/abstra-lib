var _=Object.defineProperty;var j=(o,e,t)=>e in o?_(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var k=(o,e,t)=>(j(o,typeof e!="symbol"?e+"":e,t),t);import{d as x,eB as A,r as D,H as P,a as E,b as g,ev as U,f as u,u as p,w as m,a$ as B,c as N,ar as F,eD as O,bO as S,ex as T}from"./outputWidgets.6f2079f2.js";import{C as d}from"./router.bd3c3265.js";import"./index.eed5955f.js";import{d as q,q as G}from"./icons.2416ce9f.js";import{a as H}from"./asyncComputed.cabe49c9.js";import{C as K}from"./CrudView.4ed1f536.js";import{A as R}from"./FormItem.ad234cc8.js";import{A as z}from"./Text.2ca6ae2d.js";import{M as J}from"./Modal.d9a1c499.js";import"./index.cf4c23b9.js";import"./record.47595bb2.js";import"./pubsub.062c9a5e.js";import"./Paragraph.78779367.js";import"./Base.1816589f.js";import"./Typography.a5dd5619.js";import"./Form.39218c79.js";import"./hasIn.e5c0248d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.946e2290.js";import"./url.cb6bdaba.js";import"./index.495d9e63.js";import"./Title.a6a240ad.js";import"./index.fd329bad.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="1b3db9d4-ab65-481e-ab75-e862f95ba9e4",o._sentryDebugIdIdentifier="sentry-dbid-1b3db9d4-ab65-481e-ab75-e862f95ba9e4")}catch{}})();class L{constructor(){k(this,"urlPath","env-vars")}async create(e){return d.post(`projects/${e.projectId}/${this.urlPath}`,{name:e.name,value:e.value})}async delete(e,t){await d.delete(`projects/${e}/${this.urlPath}/${t}`)}async update(e,t,a){await d.patch(`projects/${e}/${this.urlPath}/${t}`,{value:a})}async list(e){return d.get(`projects/${e}/${this.urlPath}`)}async get(e){return d.get(`${this.urlPath}/${e}`)}}const c=new L;class l{constructor(e,t){this.projectId=e,this.dto=t}static async list(e){return(await c.list(e)).map(a=>new l(e,a))}static async create(e,t,a){const y=await c.create({projectId:e,name:t,value:a});return new l(e,y)}static async get(e,t){const a=await c.get(t);return new l(e,a)}get key(){return this.dto.name}get value(){return this.dto.value}async delete(){await c.delete(this.projectId,this.key)}async update(e){await c.update(this.projectId,this.key,e)}}const be=x({__name:"EnvVars",setup(o){const t=A().params.projectId,a=D({type:"idle"}),{loading:y,result:f,refetch:v}=H(()=>l.list(t)),h=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function $({key:r,value:n}){await l.create(t,r,n),v()}function C(r){a.value={type:"update-value",key:r.key,newValue:""}}async function b(r){var n;if(a.value.type==="update-value"&&r){const{key:s,newValue:i}=a.value,w=(n=f.value)==null?void 0:n.find(V=>V.key===s);w&&await w.update(i)}a.value={type:"idle"}}const I=P(()=>{var r,n;return{columns:[{name:"Key"},{name:"",align:"right"}],rows:(n=(r=f.value)==null?void 0:r.map(s=>({key:s.key,cells:[{type:"text",text:s.key},{type:"actions",actions:[{icon:q,label:"Delete",async onClick(){await s.delete(),v()},dangerous:!0},{icon:G,label:"Update value",onClick(){C(s)}}]}]})))!=null?n:[]}});return(r,n)=>{const s=E("ant-form");return g(),U(B,null,[u(K,{"entity-name":"Env var",loading:p(y),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:I.value,"create-button-text":"Add Environment Variable",fields:h,onCreate:$},null,8,["loading","table"]),u(p(J),{open:a.value.type==="update-value",title:"Update value",onCancel:n[1]||(n[1]=i=>b(!1)),onOk:n[2]||(n[2]=i=>b(!0))},{default:m(()=>[a.value.type==="update-value"?(g(),N(s,{key:0,layout:"vertical"},{default:m(()=>[u(p(R),null,{default:m(()=>[u(p(z),null,{default:m(()=>[F(O(a.value.key),1)]),_:1}),u(p(S),{value:a.value.newValue,"onUpdate:value":n[0]||(n[0]=i=>a.value.newValue=i)},null,8,["value"])]),_:1})]),_:1})):T("",!0)]),_:1},8,["open"])],64)}}});export{be as default};
//# sourceMappingURL=EnvVars.ec9f5757.js.map
