var _=Object.defineProperty;var j=(o,e,t)=>e in o?_(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var k=(o,e,t)=>(j(o,typeof e!="symbol"?e+"":e,t),t);import{d as x,eB as D,r as A,H as P,a as E,b as g,ev as U,f as u,u as p,w as m,aD as B,c as N,ar as F,eD as H,bz as S,ex as T}from"./outputWidgets.3188a019.js";import{C as c}from"./router.fce6e906.js";import"./index.ada93058.js";import{i as z,H as G}from"./icons.711a251e.js";import{a as K}from"./asyncComputed.7b65ee65.js";import{C as O}from"./CrudView.11c8cf76.js";import{A as R}from"./Form.a4ff567f.js";import{A as q}from"./Text.bf95915f.js";import{M as J}from"./Modal.4aabbac6.js";import"./popupNotifcation.216f2062.js";import"./index.cf4c23b9.js";import"./record.c6c89e1c.js";import"./pubsub.b7936f46.js";import"./Paragraph.7aa1831b.js";import"./Base.7f869b4c.js";import"./Typography.e2687acd.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.4279a50f.js";import"./url.3b1c7dd6.js";import"./index.1507f200.js";import"./Title.b20ed6e6.js";import"./index.e04abe45.js";import"./hasIn.f9eb80a7.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="cc3da961-9781-474b-8f18-05b4074f9e5e",o._sentryDebugIdIdentifier="sentry-dbid-cc3da961-9781-474b-8f18-05b4074f9e5e")}catch{}})();class L{constructor(){k(this,"urlPath","env-vars")}async create(e){return c.post(`projects/${e.projectId}/${this.urlPath}`,{name:e.name,value:e.value})}async delete(e,t){await c.delete(`projects/${e}/${this.urlPath}/${t}`)}async update(e,t,a){await c.patch(`projects/${e}/${this.urlPath}/${t}`,{value:a})}async list(e){return c.get(`projects/${e}/${this.urlPath}`)}async get(e){return c.get(`${this.urlPath}/${e}`)}}const d=new L;class l{constructor(e,t){this.projectId=e,this.dto=t}static async list(e){return(await d.list(e)).map(a=>new l(e,a))}static async create(e,t,a){const y=await d.create({projectId:e,name:t,value:a});return new l(e,y)}static async get(e,t){const a=await d.get(t);return new l(e,a)}get key(){return this.dto.name}get value(){return this.dto.value}async delete(){await d.delete(this.projectId,this.key)}async update(e){await d.update(this.projectId,this.key,e)}}const we=x({__name:"EnvVars",setup(o){const t=D().params.projectId,a=A({type:"idle"}),{loading:y,result:f,refetch:v}=K(()=>l.list(t)),h=[{label:"Variable name",key:"key"},{label:"Variable value",key:"value",type:"password"}];async function $({key:r,value:n}){await l.create(t,r,n),v()}function C(r){a.value={type:"update-value",key:r.key,newValue:""}}async function w(r){var n;if(a.value.type==="update-value"&&r){const{key:s,newValue:i}=a.value,b=(n=f.value)==null?void 0:n.find(V=>V.key===s);b&&await b.update(i)}a.value={type:"idle"}}const I=P(()=>{var r,n;return{columns:[{name:"Key"},{name:"",align:"right"}],rows:(n=(r=f.value)==null?void 0:r.map(s=>({key:s.key,cells:[{type:"text",text:s.key},{type:"actions",actions:[{icon:z,label:"Delete",async onClick(){await s.delete(),v()},dangerous:!0},{icon:G,label:"Update value",onClick(){C(s)}}]}]})))!=null?n:[]}});return(r,n)=>{const s=E("ant-form");return g(),U(B,null,[u(O,{"entity-name":"Env var",loading:p(y),title:"Environment Variables",description:"Set environment variables for your project.","empty-title":"No environment variables set",table:I.value,"create-button-text":"Add Environment Variable",fields:h,onCreate:$},null,8,["loading","table"]),u(p(J),{open:a.value.type==="update-value",title:"Update value",onCancel:n[1]||(n[1]=i=>w(!1)),onOk:n[2]||(n[2]=i=>w(!0))},{default:m(()=>[a.value.type==="update-value"?(g(),N(s,{key:0,layout:"vertical"},{default:m(()=>[u(p(R),null,{default:m(()=>[u(p(q),null,{default:m(()=>[F(H(a.value.key),1)]),_:1}),u(p(S),{value:a.value.newValue,"onUpdate:value":n[0]||(n[0]=i=>a.value.newValue=i)},null,8,["value"])]),_:1})]),_:1})):T("",!0)]),_:1},8,["open"])],64)}}});export{we as default};
//# sourceMappingURL=EnvVars.4149b395.js.map
