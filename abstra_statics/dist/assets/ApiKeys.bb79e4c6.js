var k=Object.defineProperty;var b=(s,e,t)=>e in s?k(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var _=(s,e,t)=>(b(s,typeof e!="symbol"?e+"":e,t),t);import{d as C,r as w,b as P,t as S,w as x,S as A,x as l,N as j,O as M,Q as N,q as $,K as B,c as D,e as I,z as v,F as K,J as z}from"./registerWidgets.7452ec0b.js";import{a as V}from"./asyncComputed.23d75013.js";import{P as E}from"./project.cc04e631.js";import{A as F,C as g}from"./utils.e51f765d.js";import{M as O}from"./member.62e0f586.js";import{C as W}from"./CrudView.2c6fede3.js";import{M as Y}from"./Modal.f31beab2.js";import{t as q}from"./icons.97625e56.js";import"./passwordlessManager.abb9ad15.js";import"./pubsub.a0411919.js";import"./DropdownMenu.e6caac19.js";import"./CircularLoading.6725993e.js";class G{constructor(){_(this,"urlPath","api-keys")}async create({projectId:e,name:t}){return g.post(`projects/${e}/${this.urlPath}`,{name:t})}async delete(e,t){await g.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return g.get(`projects/${e}/${this.urlPath}`)}async get(){throw new Error("Not implemented")}async update(){throw new Error("Not implemented")}}const u=new G;class c{constructor(e){_(this,"record");this.record=new F(u,e,"id")}static async list(e){return(await u.list(e)).map(n=>new c(n))}static async create(e){const t=await u.create(e);return new c(t)}static async delete(e,t){await u.delete(e,t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}async save(){await this.record.save()}get createdAt(){return new Date(this.record.get("createdAt"))}hasChanges(){return this.record.hasChanges()}get ownerId(){return this.record.get("createdBy")}get value(){var e;return(e=this.record.get("value"))!=null?e:null}}const H=s=>(M("data-v-3da8363c"),s=s(),N(),s),J={class:"main-text"},L=H(()=>l("div",{class:"separator"},null,-1)),Q=["value"],T=C({__name:"ApiKeyModal",emits:["delete"],setup(s,{expose:e}){const t=w(null),n=w(""),m={maxWidth:"350px",height:"unset",padding:"30px"},y={display:"flex",flexDirection:"column",alignItems:"center",color:"#414A58",justifyContent:"center",lineHeight:"22px",fontSize:"18px",textAlign:"center",borderBottom:"none",gap:"23px",fontWeight:"700",marginBottom:"17px"},d={color:"#6D7C93",fontSize:"14px",textAlign:"center",justifyContent:"space-around"},h=a=>{var o;n.value=a,(o=t==null?void 0:t.value)==null||o.open()},p=()=>{var a;return(a=t==null?void 0:t.value)==null?void 0:a.close()};return e({open:h,close:p}),(a,o)=>(P(),S(Y,{ref_key:"modalRef",ref:t,"container-style":m,"header-style":y,"content-style":d},{header:x(()=>[A(" API Key Created ")]),content:x(()=>[l("div",J,[A(j("Your API key has been created. Please copy it and store it in a safe place. You will not be able to see it again.")+" ",1),L,l("input",{disabled:"",value:n.value},null,8,Q),l("div",{class:"buttons"},[l("button",{class:"cancel",onClick:p},"Close")])])]),_:1},512))}});const U=$(T,[["__scopeId","data-v-3da8363c"]]),de=C({__name:"ApiKeys",setup(s){const e=[{key:"name",label:"API key name"}],n=z().params.projectId,{loading:m,result:y,refetch:d}=V(async()=>Promise.all([c.list(n),E.get(n).then(a=>O.list(a.organizationId))]).then(([a,o])=>a.map(r=>({apiKey:r,member:o.find(i=>i.authorId===r.ownerId)})))),h=async a=>{const o=await c.create({projectId:n,name:a.name});d(),o.value&&prompt("Copy this API key and paste it in the local editor to deploy your app:",o==null?void 0:o.value)},p=B(()=>{var a,o;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"Actions"}],rows:(o=(a=y.value)==null?void 0:a.map(({apiKey:r,member:i})=>{var f;return{key:r.id,cells:[{text:r.name,classes:["title","centered"]},{text:r.createdAt.toLocaleString(),classes:[]},{text:(f=i==null?void 0:i.email)!=null?f:"Unknown"},{classes:["centered"],text:"actions",actions:[{label:"Delete",icon:q,dangerous:!0,onClick:async()=>{await c.delete(n,r.id),d()}}]}]}}))!=null?o:[]}});return(a,o)=>(P(),D(K,null,[I(W,{"ask-name-on-create":!0,"entity-name":"API key","create-button-text":"Create API Key",loading:v(m),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:v(p),fields:e,onCreate:h},null,8,["loading","table"]),I(U)],64))}});export{de as default};
//# sourceMappingURL=ApiKeys.bb79e4c6.js.map
