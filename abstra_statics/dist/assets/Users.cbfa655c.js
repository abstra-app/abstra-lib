var B=Object.defineProperty;var W=(m,o,n)=>o in m?B(m,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):m[o]=n;var U=(m,o,n)=>(W(m,typeof o!="symbol"?o+"":o,n),n);import{d as x,E as _,b as h,c as b,w as i,f as r,u as a,bM as f,ao as E,cA as M,bF as D,ab as L,ez as V,r as J,F as G,et as Q,ev as H,bo as K}from"./outputWidgets.5e5b5eb8.js";import{u as X,o as Y}from"./icons.16f302b6.js";import{a as Z}from"./asyncComputed.28dd914c.js";import{z as e}from"./index.cf4c23b9.js";import{A as P}from"./FormItem.3f4ebdd2.js";import{F as I}from"./Form.b258a897.js";import{A as v}from"./index.6e01df3c.js";import{C as S}from"./router.a2c0d713.js";import"./jwt-decode.esm.74bd4619.js";import"./index.aeec525b.js";import{C as ee}from"./CrudView.b2363f7c.js";import{p as A}from"./popupNotifcation.c8cebea4.js";import"./hasIn.62b14ba2.js";import"./isNumeric.75337b1e.js";import"./storage.d3e61e1a.js";import"./index.f308e5c6.js";import"./record.264bc45b.js";import"./pubsub.2712b93d.js";import"./Title.1467f0db.js";import"./Text.81fc0521.js";import"./Modal.2435c150.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5fc396bf.js";import"./url.d4cca15f.js";import"./index.d7d2da12.js";(function(){try{var m=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(m._sentryDebugIds=m._sentryDebugIds||{},m._sentryDebugIds[o]="72631097-078d-420e-a006-9ddc339fb595",m._sentryDebugIdIdentifier="sentry-dbid-72631097-078d-420e-a006-9ddc339fb595")}catch{}})();class oe{constructor(){U(this,"urlPath","users")}async create(o,n){return S.post(`projects/${o}/${this.urlPath}`,n)}async delete(o,n){await S.delete(`projects/${o}/${this.urlPath}/${n}`)}async list(o,{limit:n,offset:t}){const s={};n&&(s.limit=n.toString()),t&&(s.offset=t.toString());const l=new URLSearchParams(s);return S.get(`projects/${o}/${this.urlPath}?${l.toString()}`)}async update(o,n,t){return S.patch(`projects/${o}/${this.urlPath}/${n}`,t)}}const R=new oe;class y{constructor(o){this.dto=o}static async list(o,n,t){return(await R.list(o,{limit:n,offset:t})).map(l=>new y(l))}static async create(o,n){const t=await R.create(o,n);return new y(t)}async delete(){await R.delete(this.projectId,this.id)}async change(o){this.roles=o.roles,await R.update(this.projectId,this.id,o)}get id(){return this.dto.id}get email(){return this.dto.email}get projectId(){return this.dto.projectId}get roles(){return this.dto.roles}set roles(o){this.dto.roles=o}}const te=e.boolean(),ne=e.boolean(),ae=e.boolean(),se=e.boolean();e.object({PROJECT_LIVE:te.optional(),ALLOW_RELEASE:ne.optional(),CONNECTORS_CONSOLE:ae.optional(),DUPLICATE_PROJECTS:se.optional()});const re=e.string();e.object({plan:re.optional()});const ie=e.string(),me=e.string(),le=e.string(),ce=e.string(),pe=e.null(),ue=e.string(),de=e.union([pe,ue]),Ce=e.string().regex(new RegExp("^[0-9]+m$")),ge=e.string().regex(new RegExp("^[0-9]+m$")),he=e.string().regex(new RegExp("^[0-9]+Mi$")),ye=e.string().regex(new RegExp("^[0-9]+Mi$")),Se=e.string().regex(new RegExp("^[0-9]+$")),Re=e.string().regex(new RegExp("^[0-9]+$")),be=e.enum(["shared","clickbus","test"]),fe=e.object({requestsCPU:Ce.optional(),limitsCPU:ge.optional(),requestsMemory:he.optional(),limitsMemory:ye.optional(),minReplicas:Se.optional(),timeoutSeconds:Re.optional(),workerType:be.optional()});e.object({id:ie,name:me,subdomain:le,organizationId:ce,customDomain:de.optional(),deploymentResources:fe.optional()});const Ee=e.string().regex(new RegExp("^[0-9]+m$")),Pe=e.string().regex(new RegExp("^[0-9]+m$")),we=e.string().regex(new RegExp("^[0-9]+Mi$")),Oe=e.string().regex(new RegExp("^[0-9]+Mi$")),xe=e.string().regex(new RegExp("^[0-9]+$")),je=e.string().regex(new RegExp("^[0-9]+$")),Ue=e.enum(["shared","clickbus","test"]);e.object({requestsCPU:Ee.optional(),limitsCPU:Pe.optional(),requestsMemory:we.optional(),limitsMemory:Oe.optional(),minReplicas:xe.optional(),timeoutSeconds:je.optional(),workerType:Ue.optional()});const Ae=e.number(),_e=e.number();e.object({limit:Ae.optional(),offset:_e.optional()});const Me=e.string(),$=e.string(),De=e.literal("workflow_viewer"),Le=["workflow_viewer"],j=e.array(De),Ie=e.string(),ve=e.string(),$e=e.object({id:Me,email:$,roles:j,projectId:Ie,createdAt:ve}),k=e.string(),z=e.string(),ke=e.boolean(),ze=e.boolean(),Fe=e.boolean(),Te=e.boolean(),F=e.object({PROJECT_LIVE:ke,ALLOW_RELEASE:ze,CONNECTORS_CONSOLE:Fe,DUPLICATE_PROJECTS:Te}),Ne=e.string(),T=e.object({plan:Ne.optional()}),qe=e.string().regex(new RegExp("^[0-9]+m$")),Be=e.string().regex(new RegExp("^[0-9]+m$")),We=e.string().regex(new RegExp("^[0-9]+Mi$")),Ve=e.string().regex(new RegExp("^[0-9]+Mi$")),Je=e.string().regex(new RegExp("^[0-9]+$")),Ge=e.string().regex(new RegExp("^[0-9]+$")),Qe=e.enum(["shared","clickbus","test"]),He=e.object({requestsCPU:qe.optional(),limitsCPU:Be.optional(),requestsMemory:We.optional(),limitsMemory:Ve.optional(),minReplicas:Je.optional(),timeoutSeconds:Ge.optional(),workerType:Qe.optional()}),Ke=e.string(),Xe=e.array(Ke),Ye=e.object({whitelistPatterns:Xe.optional()});e.object({id:k,name:z,featureFlags:F,billingMetadata:T,deploymentResources:He.optional(),membershipsMetadata:Ye.optional()});const Ze=e.string(),eo=e.array(Ze);e.object({whitelistPatterns:eo.optional()});const oo=k,to=z,no=F,ao=T;e.object({id:oo,name:to,featureFlags:no,billingMetadata:ao});const so=j;e.object({roles:so});const ro=e.number(),io=e.number();e.object({offset:ro.optional(),limit:io.optional()});const mo=$e;e.array(mo);const lo=$,co=j;e.object({email:lo,roles:co});const po=e.boolean();e.object({shouldBeOnboarded:po.optional()});const uo=e.string(),Co=e.string(),go=e.string(),ho=e.string();e.object({name:uo.optional(),companyName:Co.optional(),source:go.optional(),authorEmail:ho.optional()});const yo=x({__name:"NewUser",emits:["created","cancel"],setup(m,{emit:o}){const n=Le.map(d=>({label:d,value:d})),t=_({email:"",roles:[]});function s(){o("cancel")}function l(){!t.email||o("created",t)}return(d,C)=>(h(),b(a(v),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:s},{extra:i(()=>[r(a(M),null,{default:i(()=>[r(a(f),{onClick:s},{default:i(()=>[E("Cancel")]),_:1}),r(a(f),{type:"primary",onClick:l},{default:i(()=>[E("Submit")]),_:1})]),_:1})]),default:i(()=>[r(a(I),{model:t,layout:"vertical"},{default:i(()=>[r(a(P),{key:"email",label:"Email",required:!0},{default:i(()=>[r(a(D),{value:t.email,"onUpdate:value":C[0]||(C[0]=u=>t.email=u)},null,8,["value"])]),_:1}),r(a(P),{key:"role",label:"Role"},{default:i(()=>[r(a(L),{value:t.roles,"onUpdate:value":C[1]||(C[1]=u=>t.roles=u),mode:"multiple",options:a(n)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),So=x({__name:"UpdateUser",props:{roles:{},email:{}},emits:["updated","cancel"],setup(m,{emit:o}){const n=m,t=[{value:"workflow_viewer",label:"Workflow viewer"}],s=_({roles:n.roles});function l(){o("cancel")}function d(){o("updated",s)}return(C,u)=>(h(),b(a(v),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:l},{extra:i(()=>[r(a(M),null,{default:i(()=>[r(a(f),{onClick:l},{default:i(()=>[E("Cancel")]),_:1}),r(a(f),{type:"primary",onClick:d},{default:i(()=>[E("Submit")]),_:1})]),_:1})]),default:i(()=>[r(a(I),{model:s,layout:"vertical"},{default:i(()=>[r(a(P),{key:"email",label:"Email"},{default:i(()=>[r(a(D),{value:n.email,disabled:""},null,8,["value"])]),_:1}),r(a(P),{key:"role",label:"Role"},{default:i(()=>[r(a(L),{value:s.roles,"onUpdate:value":u[0]||(u[0]=w=>s.roles=w),mode:"multiple",options:t},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Wo=x({__name:"Users",setup(m){const n=V().params.projectId,t=J({type:"none"}),s=()=>{t.value.type="none"},l=()=>{t.value.type="new"},d=c=>{t.value={type:"edit",user:c}},C=async c=>{try{await y.create(n,c),s(),O()}catch(p){p instanceof Error&&A("Create Error",p.message)}},u=async c=>{try{if(t.value.type!=="edit")return;t.value.user.roles=c.roles,await t.value.user.change(c),s(),O()}catch(p){p instanceof Error&&A("Update Error",p.message)}},{loading:w,result:N,refetch:O}=Z(()=>y.list(n,100,0)),q=G(()=>{var c,p;return{columns:[{name:"Email"},{name:"Roles"},{name:"",align:"right"}],rows:(p=(c=N.value)==null?void 0:c.map(g=>({key:g.email,cells:[{type:"text",text:g.email},{type:"text",text:g.roles.join(", ")},{type:"actions",actions:[{icon:X,label:"Edit",onClick:()=>d(g)},{icon:Y,label:"Delete",onClick:async()=>{await g.delete(),O()}}]}]})))!=null?p:[]}});return(c,p)=>(h(),Q(K,null,[r(ee,{"entity-name":"users",loading:a(w),title:"Application users",description:"List all application users.","empty-title":"No users yet",table:q.value,"create-button-text":"Add users",onCreate:l},null,8,["loading","table"]),t.value.type==="new"?(h(),b(yo,{key:0,onCancel:s,onCreated:C})):t.value.type==="edit"?(h(),b(So,{key:1,email:t.value.user.email,roles:t.value.user.roles,onUpdated:u,onCancel:s},null,8,["email","roles"])):H("",!0)],64))}});export{Wo as default};
//# sourceMappingURL=Users.cbfa655c.js.map
