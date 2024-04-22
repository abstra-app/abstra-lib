var _=Object.defineProperty;var j=(o,e,t)=>e in o?_(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var k=(o,e,t)=>(j(o,typeof e!="symbol"?e+"":e,t),t);import{d as x,eE as A,r as E,J as P,a as D,b as g,ew as U,f as u,u as c,w as m,aE as G,eS as N,c as B,as as S,eH as F,bz as T,ey as z}from"./outputWidgets.899c2ba6.js";import{C as p}from"./router.ef1f0e81.js";import"./index.a02db49f.js";import{G as H}from"./PhPencil.vue.a761ee8c.js";import{a as J}from"./asyncComputed.af5dc7e5.js";import{C as K}from"./CrudView.d4e42c43.js";import{A as O}from"./Form.63ea0853.js";import{A as R}from"./Text.b13957eb.js";import{M as q}from"./Modal.0eb526d9.js";import"./popupNotifcation.b292d3fc.js";import"./record.11af8056.js";import"./pubsub.ccef1214.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.bc7c3230.js";import"./BookOutlined.140ad45d.js";import"./url.89e8212d.js";import"./Paragraph.9297eb2d.js";import"./Base.ddd59c02.js";import"./index.1e01f451.js";import"./Title.170ebf83.js";import"./index.2dd7ea66.js";import"./hasIn.35ca7acb.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="97eb9dd3-87c6-4944-a67e-ca7ca7e2a40e",o._sentryDebugIdIdentifier="sentry-dbid-97eb9dd3-87c6-4944-a67e-ca7ca7e2a40e")}catch{}})();class L{constructor(){k(this,"urlPath","env-vars")}async create(e){return p.post(`projects/${e.projectId}/${this.urlPath}`,{name:e.name,value:e.value})}async delete(e,t){await p.delete(`projects/${e}/${this.urlPath}/${t}`)}async update(e,t,a){await p.patch(`projects/${e}/${this.urlPath}/${t}`,{value:a})}async list(e){return p.get(`projects/${e}/${this.urlPath}`)}async get(e){return p.get(`${this.urlPath}/${e}`)}}const d=new L;class l{constructor(e,t){this.projectId=e,this.dto=t}static async list(e){return(await d.list(e)).map(a=>new l(e,a))}static async create(e,t,a){const y=await d.create({projectId:e,name:t,value:a});return new l(e,y)}static async get(e,t){const a=await d.get(t);return new l(e,a)}get key(){return this.dto.name}get value(){return this.dto.value}async delete(){await d.delete(this.projectId,this.key)}async update(e){await d.update(this.projectId,this.key,e)}}const ve=x({__name:"EnvVars",setup(o){const t=A().params.projectId,a=E({type:"idle"}),{loading:y,result:f,refetch:v}=J(()=>l.list(t)),h=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function $({key:r,value:n}){await l.create(t,r,n),v()}function C(r){a.value={type:"update-value",key:r.key,newValue:""}}async function w(r){var n;if(a.value.type==="update-value"&&r){const{key:s,newValue:i}=a.value,b=(n=f.value)==null?void 0:n.find(V=>V.key===s);b&&await b.update(i)}a.value={type:"idle"}}const I=P(()=>{var r,n;return{columns:[{name:"Key"},{name:"",align:"right"}],rows:(n=(r=f.value)==null?void 0:r.map(s=>({key:s.key,cells:[{type:"text",text:s.key},{type:"actions",actions:[{icon:N,label:"Delete",async onClick(){await s.delete(),v()},dangerous:!0},{icon:H,label:"Update value",onClick(){C(s)}}]}]})))!=null?n:[]}});return(r,n)=>{const s=D("ant-form");return g(),U(G,null,[u(K,{"entity-name":"Env var",loading:c(y),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:I.value,"create-button-text":"Add Environment Variable",fields:h,onCreate:$},null,8,["loading","table"]),u(c(q),{open:a.value.type==="update-value",title:"Update value",onCancel:n[1]||(n[1]=i=>w(!1)),onOk:n[2]||(n[2]=i=>w(!0))},{default:m(()=>[a.value.type==="update-value"?(g(),B(s,{key:0,layout:"vertical"},{default:m(()=>[u(c(O),null,{default:m(()=>[u(c(R),null,{default:m(()=>[S(F(a.value.key),1)]),_:1}),u(c(T),{value:a.value.newValue,"onUpdate:value":n[0]||(n[0]=i=>a.value.newValue=i)},null,8,["value"])]),_:1})]),_:1})):z("",!0)]),_:1},8,["open"])],64)}}});export{ve as default};
//# sourceMappingURL=EnvVars.d4aad0df.js.map
