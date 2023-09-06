var C=Object.defineProperty;var P=(a,e,t)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var f=(a,e,t)=>(P(a,typeof e!="symbol"?e+"":e,t),t);import{d as A,r as w,b as v,u as k,eq as x,bh as I,er as l,eA as D,eB as S,eC as j,t as B,ey as M,F as $,c as N,e as b,bu as E,bw as K}from"./registerWidgets.59747b32.js";import{a as V}from"./asyncComputed.1d4b957f.js";import{P as z}from"./project.e281e8a0.js";import{C as g}from"./gateway.6a881856.js";import{M as q}from"./member.e6ea7189.js";import{A as F}from"./activeRecord.e2c0e940.js";import"./index.e8afc474.js";import{C as W}from"./CrudView.37ea6d3f.js";import{M as Y}from"./Modal.9da25f39.js";import{q as G}from"./icons.8e518be5.js";import{f as H}from"./index.b048d0fb.js";import"./passwordlessManager.794d3db6.js";import"./pubsub.cfb8c19f.js";import"./storage.e0256989.js";import"./DropdownMenu.7b5d814a.js";import"./LoadingIndicator.04199c7c.js";import"./lottie.15d20c75.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="304ee821-228a-46bc-9948-a8616dae31d3",a._sentryDebugIdIdentifier="sentry-dbid-304ee821-228a-46bc-9948-a8616dae31d3")}catch{}})();class O{constructor(){f(this,"urlPath","api-keys")}async create({projectId:e,name:t}){return g.post(`projects/${e}/${this.urlPath}`,{name:t})}async delete(e,t){await g.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return g.get(`projects/${e}/${this.urlPath}`)}async get(){throw new Error("Not implemented")}async update(){throw new Error("Not implemented")}}const u=new O;class c{constructor(e){f(this,"record");this.record=F.create(u,e,"id")}static async list(e){return(await u.list(e)).map(n=>new c(n))}static async create(e){const t=await u.create(e);return new c(t)}static async delete(e,t){await u.delete(e,t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}async save(){await this.record.save()}get createdAt(){return new Date(this.record.get("createdAt"))}hasChanges(){return this.record.hasChanges()}get ownerId(){return this.record.get("createdBy")}get value(){var e;return(e=this.record.get("value"))!=null?e:null}}const T=a=>(S("data-v-3da8363c"),a=a(),j(),a),U={class:"main-text"},J=T(()=>l("div",{class:"separator"},null,-1)),L=["value"],Q=A({__name:"ApiKeyModal",emits:["delete"],setup(a,{expose:e}){const t=w(null),n=w(""),m={maxWidth:"350px",height:"unset",padding:"30px"},y={display:"flex",flexDirection:"column",alignItems:"center",color:"#414A58",justifyContent:"center",lineHeight:"22px",fontSize:"18px",textAlign:"center",borderBottom:"none",gap:"23px",fontWeight:"700",marginBottom:"17px"},d={color:"#6D7C93",fontSize:"14px",textAlign:"center",justifyContent:"space-around"},h=o=>{var s;n.value=o,(s=t==null?void 0:t.value)==null||s.open()},p=()=>{var o;return(o=t==null?void 0:t.value)==null?void 0:o.close()};return e({open:h,close:p}),(o,s)=>(v(),k(Y,{ref_key:"modalRef",ref:t,"container-style":m,"header-style":y,"content-style":d},{header:x(()=>[I(" API Key Created ")]),content:x(()=>[l("div",U,[I(D("Your API key has been created. Please copy it and store it in a safe place. You will not be able to see it again.")+" ",1),J,l("input",{disabled:"",value:n.value},null,8,L),l("div",{class:"buttons"},[l("button",{class:"cancel",onClick:p},"Close")])])]),_:1},512))}});const R=B(Q,[["__scopeId","data-v-3da8363c"]]),fe=A({__name:"ApiKeys",setup(a){const e=[{key:"name",label:"API key name"}],n=M().params.projectId,{loading:m,result:y,refetch:d}=V(async()=>Promise.all([c.list(n),z.get(n).then(o=>q.list(o.organizationId))]).then(([o,s])=>o.map(r=>({apiKey:r,member:s.find(i=>i.authorId===r.ownerId)})))),h=async o=>{const s=await c.create({projectId:n,name:o.name});d(),s.value&&prompt("Copy this API key and paste it in the local editor to deploy your app:",s==null?void 0:s.value)},p=$(()=>{var o,s;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"Actions"}],rows:(s=(o=y.value)==null?void 0:o.map(({apiKey:r,member:i})=>{var _;return{key:r.id,cells:[{text:r.name,classes:["title","centered"]},{text:H(r.createdAt,Date.now(),{addSuffix:!0}),classes:[]},{text:(_=i==null?void 0:i.email)!=null?_:"Unknown"},{classes:["centered"],text:"actions",actions:[{label:"Delete",icon:G,dangerous:!0,onClick:async()=>{await c.delete(n,r.id),d()}}]}]}}))!=null?s:[]}});return(o,s)=>(v(),N(K,null,[b(W,{"entity-name":"API key","create-button-text":"Create API Key",loading:E(m),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:p.value,fields:e,onCreate:h},null,8,["loading","table"]),b(R)],64))}});export{fe as default};
//# sourceMappingURL=ApiKeys.079bc4f6.js.map
