var P=Object.defineProperty;var k=(o,e,t)=>e in o?P(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var h=(o,e,t)=>(k(o,typeof e!="symbol"?e+"":e,t),t);import{d as I,r as f,b as C,t as S,w,S as x,x as l,N as b,O as j,Q as M,q as N,K as $,c as B,e as A,z as v,F as D,J as K}from"./registerWidgets.81004098.js";import{a as z}from"./asyncComputed.841de1fc.js";import{P as V}from"./project.eda7f383.js";import"./passwordlessManager.d8088db9.js";import{M as E}from"./member.35180141.js";import{A as F,C as _}from"./utils.ac5c1175.js";import{C as O}from"./CrudView.20b9da12.js";import{M as W}from"./Modal.bc20d9b5.js";import{o as Y}from"./icons.ea1ef9e9.js";import"./pubsub.a0411919.js";import"./DropdownMenu.f9c0b8cd.js";import"./CircularLoading.cef8a22f.js";class q{constructor(){h(this,"urlPath","api-keys")}async create({projectId:e,name:t}){return _.post(`projects/${e}/${this.urlPath}`,{name:t})}async delete(e,t){await _.delete(`projects/${e}/${this.urlPath}/${t}`)}async list(e){return _.get(`projects/${e}/${this.urlPath}`)}async get(){throw new Error("Not implemented")}async update(){throw new Error("Not implemented")}}const p=new q;class c{constructor(e){h(this,"record");this.record=new F(p,e,"id")}static async list(e){return(await p.list(e)).map(r=>new c(r))}static async create(e){const t=await p.create(e);return new c(t)}static async delete(e,t){await p.delete(e,t)}get id(){return this.record.get("id")}get name(){return this.record.get("name")}async save(){await this.record.save()}get createdAt(){return new Date(this.record.get("createdAt"))}hasChanges(){return this.record.hasChanges()}get ownerId(){return this.record.get("createdBy")}get value(){var e;return(e=this.record.get("value"))!=null?e:null}}const G=o=>(j("data-v-3da8363c"),o=o(),M(),o),H={class:"main-text"},J=G(()=>l("div",{class:"separator"},null,-1)),L=["value"],Q=I({__name:"ApiKeyModal",emits:["delete"],setup(o,{expose:e}){const t=f(null),r=f(""),u={maxWidth:"350px",height:"unset",padding:"30px"},d={display:"flex",flexDirection:"column",alignItems:"center",color:"#414A58",justifyContent:"center",lineHeight:"22px",fontSize:"18px",textAlign:"center",borderBottom:"none",gap:"23px",fontWeight:"700",marginBottom:"17px"},m={color:"#6D7C93",fontSize:"14px",textAlign:"center",justifyContent:"space-around"},y=a=>{var n;r.value=a,(n=t==null?void 0:t.value)==null||n.open()},s=()=>{var a;return(a=t==null?void 0:t.value)==null?void 0:a.close()};return e({open:y,close:s}),(a,n)=>(C(),S(W,{ref_key:"modalRef",ref:t,"container-style":u,"header-style":d,"content-style":m},{header:w(()=>[x(" API Key Created ")]),content:w(()=>[l("div",H,[x(b("Your API key has been created. Please copy it and store it in a safe place. You will not be able to see it again.")+" ",1),J,l("input",{disabled:"",value:r.value},null,8,L),l("div",{class:"buttons"},[l("button",{class:"cancel",onClick:s},"Close")])])]),_:1},512))}});const T=N(Q,[["__scopeId","data-v-3da8363c"]]),le=I({__name:"ApiKeys",setup(o){const t=K().params.projectId,{loading:r,result:u,refetch:d}=z(async()=>Promise.all([c.list(t),V.get(t).then(s=>E.list(s.organizationId))]).then(([s,a])=>s.map(n=>({apiKey:n,member:a.find(i=>i.authorId===n.ownerId)})))),m=async s=>{const a=await c.create({projectId:t,name:s});d(),a.value&&prompt("Copy this API key and paste it in the local editor to deploy your app:",a==null?void 0:a.value)},y=$(()=>{var s,a;return{columns:[{name:"Name"},{name:"Creation date"},{name:"Owner"},{name:"Actions"}],rows:(a=(s=u.value)==null?void 0:s.map(({apiKey:n,member:i})=>{var g;return{key:n.id,cells:[{text:n.name,classes:["title","centered"]},{text:n.createdAt.toLocaleString(),classes:[]},{text:(g=i==null?void 0:i.email)!=null?g:"Unknown"},{classes:["centered"],text:"actions",actions:[{label:"Delete",icon:Y,dangerous:!0,onClick:async()=>{await c.delete(t,n.id),d()}}]}]}}))!=null?a:[]}});return(s,a)=>(C(),B(D,null,[A(O,{"ask-name-on-create":!0,"entity-name":"API key","create-button-text":"Create API Key",loading:v(r),title:"API Keys",description:"API Keys are used to deploy your app from the local editor.","empty-title":"No API keys here yet",table:v(y),onCreate:m},null,8,["loading","table"]),A(T)],64))}});export{le as default};
//# sourceMappingURL=ApiKeys.07320cff.js.map
