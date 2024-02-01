var R=Object.defineProperty;var V=(n,e,a)=>e in n?R(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var U=(n,e,a)=>(V(n,typeof e!="symbol"?e+"":e,a),a);import{d as I,G as j,b as y,c as v,w as s,f as l,u as o,bV as h,ar as g,cF as A,bO as E,ae as S,eB as F,r as O,H as G,ev as L,ex as q,a$ as H}from"./outputWidgets.13a515ea.js";import{t as T,o as W}from"./icons.0efae811.js";import{a as z}from"./asyncComputed.33e4fa63.js";import{C as J}from"./contracts.generated.a8ee9e17.js";import{A as C}from"./FormItem.e739a900.js";import{F as B}from"./Form.ee0f818c.js";import{A as N}from"./index.e4962c95.js";import{C as _}from"./router.4148c037.js";import"./index.2d2a21d6.js";import{C as K}from"./CrudView.7aab5d57.js";import{p as $}from"./popupNotifcation.214beb05.js";import"./index.cf4c23b9.js";import"./hasIn.827b7563.js";import"./isNumeric.75337b1e.js";import"./record.773c2b57.js";import"./pubsub.b5ba0a93.js";import"./Paragraph.3dda4963.js";import"./Base.314ffe1c.js";import"./Modal.571859b5.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.971db3e1.js";import"./url.da33913b.js";import"./index.c62cfbfa.js";import"./Title.d1269696.js";import"./Text.e9c6ec84.js";import"./index.bcad9238.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="462d8d91-5a40-4933-a938-66383abd7ebd",n._sentryDebugIdIdentifier="sentry-dbid-462d8d91-5a40-4933-a938-66383abd7ebd")}catch{}})();class Q{constructor(){U(this,"urlPath","users")}async create(e,a){return _.post(`projects/${e}/${this.urlPath}`,a)}async delete(e,a){await _.delete(`projects/${e}/${this.urlPath}/${a}`)}async list(e,{limit:a,offset:t}){const r={};a&&(r.limit=a.toString()),t&&(r.offset=t.toString());const i=new URLSearchParams(r);return _.get(`projects/${e}/${this.urlPath}?${i.toString()}`)}async update(e,a,t){return _.patch(`projects/${e}/${this.urlPath}/${a}`,t)}}const b=new Q;class w{constructor(e){this.dto=e}static async list(e,a,t){return(await b.list(e,{limit:a,offset:t})).map(i=>new w(i))}static async create(e,a){const t=await b.create(e,a);return new w(t)}async delete(){await b.delete(this.projectId,this.id)}async change(e){this.roles=e.roles,await b.update(this.projectId,this.id,e)}get id(){return this.dto.id}get email(){return this.dto.email}get projectId(){return this.dto.projectId}get roles(){return this.dto.roles}set roles(e){this.dto.roles=e}}const X=I({__name:"NewUser",emits:["created","cancel"],setup(n,{emit:e}){const a=J.map(p=>({label:p,value:p})),t=j({email:"",roles:[]});function r(){e("cancel")}function i(){!t.email||e("created",t)}return(p,m)=>(y(),v(o(N),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:r},{extra:s(()=>[l(o(A),null,{default:s(()=>[l(o(h),{onClick:r},{default:s(()=>[g("Cancel")]),_:1}),l(o(h),{type:"primary",onClick:i},{default:s(()=>[g("Submit")]),_:1})]),_:1})]),default:s(()=>[l(o(B),{model:t,layout:"vertical"},{default:s(()=>[l(o(C),{key:"email",label:"Email",required:!0},{default:s(()=>[l(o(E),{value:t.email,"onUpdate:value":m[0]||(m[0]=d=>t.email=d)},null,8,["value"])]),_:1}),l(o(C),{key:"role",label:"Role"},{default:s(()=>[l(o(S),{value:t.roles,"onUpdate:value":m[1]||(m[1]=d=>t.roles=d),mode:"multiple",options:o(a)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Y=I({__name:"UpdateUser",props:{roles:{},email:{}},emits:["updated","cancel"],setup(n,{emit:e}){const a=n,t=[{value:"workflow_viewer",label:"Workflow viewer"}],r=j({roles:a.roles});function i(){e("cancel")}function p(){e("updated",r)}return(m,d)=>(y(),v(o(N),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:i},{extra:s(()=>[l(o(A),null,{default:s(()=>[l(o(h),{onClick:i},{default:s(()=>[g("Cancel")]),_:1}),l(o(h),{type:"primary",onClick:p},{default:s(()=>[g("Submit")]),_:1})]),_:1})]),default:s(()=>[l(o(B),{model:r,layout:"vertical"},{default:s(()=>[l(o(C),{key:"email",label:"Email"},{default:s(()=>[l(o(E),{value:a.email,disabled:""},null,8,["value"])]),_:1}),l(o(C),{key:"role",label:"Role"},{default:s(()=>[l(o(S),{value:r.roles,"onUpdate:value":d[0]||(d[0]=k=>r.roles=k),mode:"multiple",options:t},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),xe=I({__name:"Users",setup(n){const a=F().params.projectId,t=O({type:"none"}),r=()=>{t.value.type="none"},i=()=>{t.value.type="new"},p=u=>{t.value={type:"edit",user:u}},m=async u=>{try{await w.create(a,u),r(),x()}catch(c){c instanceof Error&&$("Create Error",c.message)}},d=async u=>{try{if(t.value.type!=="edit")return;t.value.user.roles=u.roles,await t.value.user.change(u),r(),x()}catch(c){c instanceof Error&&$("Update Error",c.message)}},{loading:k,result:P,refetch:x}=z(()=>w.list(a,100,0)),D=G(()=>{var u,c;return{columns:[{name:"Email"},{name:"Roles"},{name:"",align:"right"}],rows:(c=(u=P.value)==null?void 0:u.map(f=>({key:f.email,cells:[{type:"text",text:f.email},{type:"text",text:f.roles.join(", ")},{type:"actions",actions:[{icon:T,label:"Edit",onClick:()=>p(f)},{icon:W,label:"Delete",onClick:async()=>{await f.delete(),x()}}]}]})))!=null?c:[]}});return(u,c)=>(y(),L(H,null,[l(K,{"entity-name":"users",loading:o(k),title:"Application users",description:"List all application users.","empty-title":"No users yet",table:D.value,"create-button-text":"Add users",onCreate:i},null,8,["loading","table"]),t.value.type==="new"?(y(),v(X,{key:0,onCancel:r,onCreated:m})):t.value.type==="edit"?(y(),v(Y,{key:1,email:t.value.user.email,roles:t.value.user.roles,onUpdated:d,onCancel:r},null,8,["email","roles"])):q("",!0)],64))}});export{xe as default};
//# sourceMappingURL=Users.d1a374d8.js.map
