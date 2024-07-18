var ye=Object.defineProperty;var fe=(s,e,a)=>e in s?ye(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var P=(s,e,a)=>(fe(s,typeof e!="symbol"?e+"":e,a),a);import{a as q}from"./asyncComputed.c2155699.js";import{d as b,e as E,o as m,c as g,w as l,u as t,b as r,cC as M,aw as h,ar as G,cE as ge,bL as _,c_ as he,D as T,co as w,bC as N,cn as B,f as H,eO as J,V as Q,eD as ve,eA as _e,aI as X,ct as Y,eB as we,U as be,R as $,cW as Ce,cU as Ue}from"./vue-router.07b0787c.js";import{A}from"./index.576703bc.js";import{_ as ke}from"./DocsButton.vue_vue_type_script_setup_true_lang.bd1d4b52.js";import{A as F}from"./index.c218c9f8.js";import{C as ee}from"./CrudView.56d73881.js";import{G as te}from"./PhPencil.vue.f7ccd945.js";import{A as Pe}from"./index.d437aecd.js";import{C as Re}from"./repository.7b4aec1b.js";import{C as R}from"./gateway.dbc202c5.js";import{E as ae}from"./record.635d12d5.js";import{p as U}from"./popupNotifcation.2ac8744a.js";import{a as Z}from"./ant-design.2617ef6a.js";import{A as K,T as Ae}from"./TabPane.809ff150.js";import"./BookOutlined.affbf6a6.js";import"./isNumeric.75337b1e.js";import"./router.54186e34.js";import"./url.c59aba42.js";import"./fetch.3f7da2ae.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="92e49a71-0790-4b74-9f9f-7593f15a01ea",s._sentryDebugIdIdentifier="sentry-dbid-92e49a71-0790-4b74-9f9f-7593f15a01ea")}catch{}})();const Ee=b({__name:"View",props:{signupPolicy:{}},emits:["updated","save"],setup(s,{emit:e}){const a=s,o=E(a.signupPolicy.strategy),n=E(a.signupPolicy.strategy==="patternOnly"?a.signupPolicy.emailPatterns:[]),i=E(a.signupPolicy.strategy==="patternOnly"?a.signupPolicy.emailPatterns.map(c=>({label:c})):[]),y=c=>{const C=c;if(n.value=C,C.length===0){o.value="inviteOnly",f("inviteOnly");return}i.value=C.map(k=>({label:k})),a.signupPolicy.emailPatterns=c,e("updated",a.signupPolicy)},p=()=>{e("save")},f=c=>{o.value=c,c!=="patternOnly"&&(c==="inviteOnly"&&a.signupPolicy.allowOnlyInvited(),e("updated",a.signupPolicy))};return(c,C)=>(m(),g(t(he),{style:{"padding-top":"8px",width:"100%"},justify:"space-between",align:"flex-end"},{default:l(()=>[r(t(ge),{value:o.value,"onUpdate:value":f},{default:l(()=>[r(t(A),{direction:"vertical"},{default:l(()=>[r(t(M),{value:"inviteOnly"},{default:l(()=>[h("Allow listed users only")]),_:1}),r(t(A),null,{default:l(()=>[r(t(M),{value:"patternOnly"},{default:l(()=>[h("Allow everyone from this domain:")]),_:1}),r(t(G),{mode:"tags",value:c.signupPolicy.emailPatterns,style:{"min-width":"300px"},placeholder:"@domain.com or sub.domain.com",disabled:o.value!=="patternOnly",options:i.value,"dropdown-match-select-width":"",open:!1,"onUpdate:value":y},null,8,["value","disabled","options"])]),_:1})]),_:1})]),_:1},8,["value"]),r(t(_),{disabled:!c.signupPolicy.hasChanges,type:"primary",onClick:p},{default:l(()=>[h(" Save changes ")]),_:1},8,["disabled"])]),_:1}))}}),xe=b({__name:"NewUser",props:{roleOptions:{}},emits:["created","cancel"],setup(s,{emit:e}){const o=s.roleOptions.map(p=>({label:p.name,value:p.name})),n=T({email:"",roles:[]});function i(){e("cancel")}function y(){!n.email||e("created",n)}return(p,f)=>(m(),g(t(F),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:i},{extra:l(()=>[r(t(A),null,{default:l(()=>[r(t(_),{onClick:i},{default:l(()=>[h("Cancel")]),_:1}),r(t(_),{type:"primary",onClick:y},{default:l(()=>[h("Submit")]),_:1})]),_:1})]),default:l(()=>[r(t(B),{model:n,layout:"vertical"},{default:l(()=>[r(t(w),{key:"email",label:"Email",required:!0},{default:l(()=>[r(t(N),{value:n.email,"onUpdate:value":f[0]||(f[0]=c=>n.email=c)},null,8,["value"])]),_:1}),r(t(w),{key:"role",label:"Role"},{default:l(()=>[r(t(G),{value:n.roles,"onUpdate:value":f[1]||(f[1]=c=>n.roles=c),mode:"multiple",options:t(o)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Oe=b({__name:"UpdateUser",props:{roleOptions:{},email:{},roles:{}},emits:["updated","cancel"],setup(s,{emit:e}){const a=s,o=a.roleOptions.map(p=>({label:p.name,value:p.name})),n=T({email:a.email,roles:a.roles});function i(){e("cancel")}function y(){e("updated",n)}return(p,f)=>(m(),g(t(F),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:i},{extra:l(()=>[r(t(A),null,{default:l(()=>[r(t(_),{onClick:i},{default:l(()=>[h("Cancel")]),_:1}),r(t(_),{type:"primary",onClick:y},{default:l(()=>[h("Submit")]),_:1})]),_:1})]),default:l(()=>[r(t(B),{model:n,layout:"vertical"},{default:l(()=>[r(t(w),{key:"email",label:"Email"},{default:l(()=>[r(t(N),{value:n.email,"onUpdate:value":f[0]||(f[0]=c=>n.email=c)},null,8,["value"])]),_:1}),r(t(w),{key:"role",label:"Role"},{default:l(()=>[r(t(G),{value:n.roles,"onUpdate:value":f[1]||(f[1]=c=>n.roles=c),mode:"multiple",options:t(o)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),De=b({__name:"View",props:{loading:{type:Boolean},users:{},onCreate:{type:Function},onEdit:{type:Function},onDelete:{type:Function}},setup(s){const e=s,a=H(()=>{var o;return{columns:[{name:"Email"},{name:"Roles"},{name:"",align:"right"}],rows:(o=e.users.map(n=>({key:n.email,cells:[{type:"text",text:n.email},{type:"slot",key:"roles",payload:{roles:n.roles}},{type:"actions",actions:[{icon:te,label:"Edit",onClick:()=>e.onEdit(n)},{icon:J,label:"Delete",onClick:()=>e.onDelete(n)}]}]})))!=null?o:[]}});return(o,n)=>(m(),g(ee,{"entity-name":"users",title:"",loading:o.loading,description:"List all app users.","empty-title":"No users yet",table:a.value,"create-button-text":"Add users",onCreate:o.onCreate},{roles:l(({payload:i})=>[(m(!0),Q(X,null,ve(i.roles,y=>(m(),g(t(Pe),{key:y,bordered:""},{default:l(()=>[h(_e(y),1)]),_:2},1024))),128))]),_:1},8,["loading","table","onCreate"]))}}),Ie=b({__name:"NewRole",emits:["created","cancel"],setup(s,{emit:e}){const a=T({name:"",description:""});function o(){e("cancel")}function n(){!a.name||e("created",a)}return(i,y)=>(m(),g(t(F),{open:"",title:"New role",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:o},{extra:l(()=>[r(t(A),null,{default:l(()=>[r(t(_),{onClick:o},{default:l(()=>[h("Cancel")]),_:1}),r(t(_),{type:"primary",onClick:n},{default:l(()=>[h("Submit")]),_:1})]),_:1})]),default:l(()=>[r(t(B),{model:a,layout:"vertical"},{default:l(()=>[r(t(w),{key:"name",label:"Name",required:!0},{default:l(()=>[r(t(N),{value:a.name,"onUpdate:value":y[0]||(y[0]=p=>a.name=p)},null,8,["value"])]),_:1}),r(t(w),{key:"description",label:"Description"},{default:l(()=>[r(t(Y),{value:a.description,"onUpdate:value":y[1]||(y[1]=p=>a.description=p),placeholder:"Optional description",rows:3},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),$e=b({__name:"UpdateRole",props:{name:{},description:{}},emits:["updated","cancel"],setup(s,{emit:e}){const a=s,o=T({description:a.description});function n(){e("cancel")}function i(){e("updated",o)}return(y,p)=>(m(),g(t(F),{open:"",title:"Update role",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:n},{extra:l(()=>[r(t(A),null,{default:l(()=>[r(t(_),{onClick:n},{default:l(()=>[h("Cancel")]),_:1}),r(t(_),{type:"primary",onClick:i},{default:l(()=>[h("Submit")]),_:1})]),_:1})]),default:l(()=>[r(t(B),{model:o,layout:"vertical"},{default:l(()=>[r(t(w),{key:"name",label:"Name"},{default:l(()=>[r(t(N),{value:a.name,disabled:""},null,8,["value"])]),_:1}),r(t(w),{key:"role",label:"Role"},{default:l(()=>[r(t(Y),{value:o.description,"onUpdate:value":p[0]||(p[0]=f=>o.description=f),placeholder:"Optional description",rows:3},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),je=b({__name:"View",props:{loading:{type:Boolean},roles:{},onCreate:{type:Function},onEdit:{type:Function},onDelete:{type:Function}},setup(s){const e=s,a=H(()=>{var o;return{columns:[{name:"Name"},{name:"Description"},{name:"",align:"right"}],rows:(o=e.roles.map(n=>({key:n.id,cells:[{type:"text",text:n.name},{type:"text",text:n.description},{type:"actions",actions:[{icon:te,label:"Edit",onClick:()=>e.onEdit(n)},{icon:J,label:"Delete",onClick:()=>e.onDelete(n)}]}]})))!=null?o:[]}});return(o,n)=>(m(),g(ee,{"entity-name":"roles",loading:o.loading,title:"",description:"List all app roles.","empty-title":"No roles yet",table:a.value,"create-button-text":"Add roles",onCreate:o.onCreate},null,8,["loading","table","onCreate"]))}}),S=class{constructor(e){P(this,"record");this.dto=e,this.record=ae.from(e)}static from(e){return new S(e)}toDTO(){return this.record.toDTO()}get id(){return this.record.get("id")}get projectId(){return this.record.get("projectId")}get emailPatterns(){return this.record.get("emailPatterns")}set emailPatterns(e){this.record.set("emailPatterns",e)}get hasChanges(){return this.record.hasChangesDeep("emailPatterns")}get strategy(){return this.dto.emailPatterns.length===0?"inviteOnly":"patternOnly"}get changes(){return this.record.changes}allowOnlyInvited(){this.record.set("emailPatterns",[])}static validate(e){return S.pattern.test(e)}};let x=S;P(x,"pattern",new RegExp("^@?(?!-)[A-Za-z0-9-]{1,}(?<!-)(\\.[A-Za-z]{2,})+$"));class Se{constructor(){P(this,"urlPath","signup-policy")}async update(e,a){return R.patch(`projects/${e}/${this.urlPath}`,a)}async get(e){return R.get(`projects/${e}/${this.urlPath}`)}}const W=new Se;class Te{constructor(e){this.projectId=e}async update(e){const{emailPatterns:a}=e.changes;if(!a)return e;const o=await W.update(this.projectId,{emailPatterns:a});return x.from(o)}async get(){const e=await W.get(this.projectId);return x.from(e)}}class z{constructor(e){P(this,"record");this.dto=e,this.record=ae.from(e)}static from(e){return new z(e)}toDTO(){return this.record.toDTO()}get changes(){return this.record.changes}get id(){return this.record.get("id")}get email(){return this.record.get("email")}set email(e){this.record.set("email",e)}get projectId(){return this.record.get("projectId")}get roles(){return this.record.get("roles")}set roles(e){this.record.set("roles",e)}update(e){this.record.update(e)}resetChanges(){this.record.resetChanges()}}class Ne{constructor(){P(this,"urlPath","users")}async create(e,a){return R.post(`projects/${e}/${this.urlPath}`,a)}async delete(e,a){await R.delete(`projects/${e}/${this.urlPath}/${a}`)}async list(e,{limit:a,offset:o}){const n={};a&&(n.limit=a.toString()),o&&(n.offset=o.toString());const i=new URLSearchParams(n);return R.get(`projects/${e}/${this.urlPath}?${i.toString()}`)}async update(e,a,o){return R.patch(`projects/${e}/${this.urlPath}/${a}`,o)}}const j=new Ne;class Be{constructor(e){this.projectId=e}async create(e){await j.create(this.projectId,e)}async update(e,a){await j.update(this.projectId,e,a)}async delete(e){await j.delete(this.projectId,e)}async list(e,a){return(await j.list(this.projectId,{limit:e,offset:a})).map(z.from)}}const rt=b({__name:"View",setup(s){const a=we().params.projectId,o=E({type:"initial"}),n=E("users");be(()=>{const d=new URLSearchParams(location.search).get("selected-panel")||"users",v=["roles","users"].includes(d)?d:"users";d&&(n.value=v)});const i=()=>{o.value.type="initial"},y=()=>{o.value.type="creatingUser"},p=u=>{o.value={type:"editingUser",payload:u}},f=()=>{o.value.type="creatingRole"},c=u=>{o.value={type:"editingRole",payload:u}},C=new Te(a),{result:k,refetch:oe}=q(()=>C.get()),ne=async()=>{if(!!k.value)try{await C.update(k.value),oe()}catch(u){u instanceof Error&&U("Update Error",u.message)}},O=new Be(a),{loading:re,result:le,refetch:D}=q(()=>O.list(100,0)),I=new Re(a),{loading:se,result:V,refetch:L}=q(()=>I.list(100,0)),ie=async u=>{try{if(o.value.type!=="creatingUser")return;await O.create(u),i(),D()}catch(d){d instanceof Error&&U("Create Error",d.message)}},ce=async u=>{try{if(o.value.type!=="editingUser")return;await O.update(o.value.payload.id,u),i(),D()}catch(d){d instanceof Error&&U("Update Error",d.message)}},ue=async u=>{if(!!await Z("Deleting users revoke their access to your application (in case they aren't allowed by a domain rule). Are you sure you want to continue?"))try{await O.delete(u.id),D()}catch(v){v instanceof Error&&U("Delete Error",v.message)}},de=async u=>{try{if(o.value.type!=="creatingRole")return;await I.create(u),i(),L()}catch(d){d instanceof Error&&U("Create Error",d.message)}},pe=async u=>{try{if(o.value.type!=="editingRole")return;await I.update(o.value.payload.id,u),i(),L()}catch(d){d instanceof Error&&U("Update Error",d.message)}},me=async u=>{if(!!await Z("Deleteing roles may revoke access to some features in your application. Are you sure you want to continue?"))try{await I.delete(u.id),L(),D()}catch(v){v instanceof Error&&U("Delete Error",v.message)}};return(u,d)=>(m(),Q(X,null,[r(t(Ce),null,{default:l(()=>[h("Access Control")]),_:1}),r(t(Ue),null,{default:l(()=>[h(" Manage how your end users interect with your application. "),r(ke,{path:"concepts/access-control"})]),_:1}),r(t(Ae),{"active-key":n.value,"onUpdate:activeKey":d[0]||(d[0]=v=>n.value=v)},{default:l(()=>[r(t(K),{key:"users",tab:"Users"}),r(t(K),{key:"roles",tab:"Roles"})]),_:1},8,["active-key"]),n.value==="users"&&t(k)?(m(),g(Ee,{key:0,"signup-policy":t(k),onSave:ne},null,8,["signup-policy"])):$("",!0),n.value==="users"?(m(),g(De,{key:1,loading:t(re),users:t(le)||[],onCreate:y,onEdit:p,onDelete:ue},null,8,["loading","users"])):$("",!0),n.value==="roles"?(m(),g(je,{key:2,loading:t(se),roles:t(V)||[],onCreate:f,onEdit:c,onDelete:me},null,8,["loading","roles"])):$("",!0),o.value.type==="creatingUser"?(m(),g(xe,{key:3,"role-options":t(V)||[],onCancel:i,onCreated:ie},null,8,["role-options"])):o.value.type==="editingUser"?(m(),g(Oe,{key:4,email:o.value.payload.email,roles:o.value.payload.roles||[],"role-options":t(V)||[],onUpdated:ce,onCancel:i},null,8,["email","roles","role-options"])):o.value.type==="creatingRole"?(m(),g(Ie,{key:5,onCancel:i,onCreated:de})):o.value.type==="editingRole"?(m(),g($e,{key:6,name:o.value.payload.name,description:o.value.payload.description,onUpdated:pe,onCancel:i},null,8,["name","description"])):$("",!0)],64))}});export{rt as default};
//# sourceMappingURL=View.1e131f2c.js.map
