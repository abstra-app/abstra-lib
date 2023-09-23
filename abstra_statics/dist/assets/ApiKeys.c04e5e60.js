var C=Object.defineProperty;var P=(a,e,t)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var f=(a,e,t)=>(P(a,typeof e!="symbol"?e+"":e,t),t);import{d as v,r as b,b as A,c as k,w,b0 as x,e as l,eA as D,eB as S,eC as $,v as j,ey as B,H as M,er as N,f as I,u as E,bu as K}from"./registerWidgets.32a97516.js";import{a as z}from"./asyncComputed.9b3e19e4.js";import{P as V}from"./project.73c6f559.js";import{C as _}from"./gateway.7015ff9d.js";import{M as H}from"./member.8139729b.js";import{A as W}from"./activeRecord.2e436871.js";import"./index.a7bc7dc9.js";import{_ as Y}from"./CrudView.vue_vue_type_script_setup_true_lang.a568a297.js";import{M as q}from"./Modal.80edabcb.js";import{q as F}from"./icons.1657b79d.js";import{f as G}from"./index.b048d0fb.js";import"./passwordlessManager.730dd996.js";import"./pubsub.15b3367b.js";import"./storage.ea1488a3.js";import"./index.413bace6.js";import"./Title.fff8b6ce.js";import"./transButton.f078ba96.js";import"./index.92431587.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="47bb25de-3bb2-44c9-aa1c-6cb666ecb18e",a._sentryDebugIdIdentifier="sentry-dbid-47bb25de-3bb2-44c9-aa1c-6cb666ecb18e")}catch{}})();class O{constructor(){f(this,"urlPath","api-keys")}async create({projectId:e,name:t}){return _.post(`projects/${e}/${this.urlPath}`,{name:t})}async delete(e,t){await _.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return _.get(`projects/${e}/${this.urlPath}`)}async get(){throw new Error("Not implemented")}async update(){throw new Error("Not implemented")}}const u=new O;class c{constructor(e){f(this,"record");this.record=W.create(u,e,"id")}static async list(e){return(await u.list(e)).map(r=>new c(r))}static async create(e){const t=await u.create(e);return new c(t)}static async delete(e,t){await u.delete(e,t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}async save(){await this.record.save()}get createdAt(){return new Date(this.record.get("createdAt"))}hasChanges(){return this.record.hasChanges()}get ownerId(){return this.record.get("createdBy")}get value(){var e;return(e=this.record.get("value"))!=null?e:null}}const T=a=>(S("data-v-3da8363c"),a=a(),$(),a),U={class:"main-text"},J=T(()=>l("div",{class:"separator"},null,-1)),L=["value"],Q=v({__name:"ApiKeyModal",emits:["delete"],setup(a,{expose:e}){const t=b(null),r=b(""),m={maxWidth:"350px",height:"unset",padding:"30px"},y={display:"flex",flexDirection:"column",alignItems:"center",color:"#414A58",justifyContent:"center",lineHeight:"22px",fontSize:"18px",textAlign:"center",borderBottom:"none",gap:"23px",fontWeight:"700",marginBottom:"17px"},d={color:"#6D7C93",fontSize:"14px",textAlign:"center",justifyContent:"space-around"},h=o=>{var n;r.value=o,(n=t==null?void 0:t.value)==null||n.open()},p=()=>{var o;return(o=t==null?void 0:t.value)==null?void 0:o.close()};return e({open:h,close:p}),(o,n)=>(A(),k(q,{ref_key:"modalRef",ref:t,"container-style":m,"header-style":y,"content-style":d},{header:w(()=>[x(" API Key Created ")]),content:w(()=>[l("div",U,[x(D("Your API key has been created. Please copy it and store it in a safe place. You will not be able to see it again.")+" ",1),J,l("input",{disabled:"",value:r.value},null,8,L),l("div",{class:"buttons"},[l("button",{class:"cancel",onClick:p},"Close")])])]),_:1},512))}});const R=j(Q,[["__scopeId","data-v-3da8363c"]]),_e=v({__name:"ApiKeys",setup(a){const e=[{key:"name",label:"API key name"}],r=B().params.projectId,{loading:m,result:y,refetch:d}=z(async()=>Promise.all([c.list(r),V.get(r).then(o=>H.list(o.organizationId))]).then(([o,n])=>o.map(s=>({apiKey:s,member:n.find(i=>i.authorId===s.ownerId)})))),h=async o=>{const n=await c.create({projectId:r,name:o.name});d(),n.value&&prompt("Copy this API key and paste it in the local editor to deploy your app:",n==null?void 0:n.value)},p=M(()=>{var o,n;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"Actions"}],rows:(n=(o=y.value)==null?void 0:o.map(({apiKey:s,member:i})=>{var g;return{key:s.id,cells:[{text:s.name},{text:G(s.createdAt,Date.now(),{addSuffix:!0})},{text:(g=i==null?void 0:i.email)!=null?g:"Unknown"},{text:"actions",actions:[{label:"Delete",icon:F,dangerous:!0,onClick:async()=>{await c.delete(r,s.id),d()}}]}]}}))!=null?n:[]}});return(o,n)=>(A(),N(K,null,[I(Y,{"entity-name":"API key","create-button-text":"Create API Key",loading:E(m),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:p.value,fields:e,onCreate:h},null,8,["loading","table"]),I(R)],64))}});export{_e as default};
//# sourceMappingURL=ApiKeys.c04e5e60.js.map
