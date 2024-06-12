var ye=Object.defineProperty;var fe=(s,e,a)=>e in s?ye(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var P=(s,e,a)=>(fe(s,typeof e!="symbol"?e+"":e,a),a);import{a as q}from"./asyncComputed.f1d8a1d2.js";import{d as b,r as A,b as m,c as g,w as l,u as t,f as r,cH as E,cC as M,am as h,ah as G,cE as ge,bF as _,cY as he,N as S,bx as T,y as W,fd as X,eV as Y,f2 as ve,f4 as _e,ay as J,cs as Q,f1 as we,o as be,eX as I,cW as Ce,cU as ke}from"./outputWidgets.bbbaa102.js";import{_ as Ue}from"./DocsButton.vue_vue_type_script_setup_true_lang.02d03bbc.js";import{A as w,F}from"./Form.1745e5b9.js";import{A as B}from"./index.e4e3f346.js";import{C as ee}from"./CrudView.38e2bb59.js";import{G as te}from"./PhPencil.vue.20b5e2a8.js";import{A as Pe}from"./index.5d6decf5.js";import{C as Re}from"./repository.572f1c53.js";import{C as R}from"./gateway.66d38e07.js";import{E as ae}from"./record.c5027b83.js";import{p as k}from"./popupNotifcation.c8228c96.js";import{a as Z}from"./ant-design.36f58e0f.js";import{A as H,T as Ee}from"./TabPane.7123bbad.js";import"./BookOutlined.fb825d3b.js";import"./hasIn.cec00ae0.js";import"./isNumeric.75337b1e.js";import"./router.b7e1eafd.js";import"./url.504a882b.js";import"./Modal.5105eb26.js";import"./fetch.f897eb13.js";import"./pubsub.1b8a8c1a.js";import"./index.c89f229d.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="fe89a0d6-cba1-47d9-8706-77d4e4141873",s._sentryDebugIdIdentifier="sentry-dbid-fe89a0d6-cba1-47d9-8706-77d4e4141873")}catch{}})();const Ae=b({__name:"View",props:{signupPolicy:{}},emits:["updated","save"],setup(s,{emit:e}){const a=s,o=A(a.signupPolicy.strategy),n=A(a.signupPolicy.strategy==="patternOnly"?a.signupPolicy.emailPatterns:[]),i=A(a.signupPolicy.strategy==="patternOnly"?a.signupPolicy.emailPatterns.map(c=>({label:c})):[]),y=c=>{const C=c;if(n.value=C,C.length===0){o.value="inviteOnly",f("inviteOnly");return}i.value=C.map(U=>({label:U})),a.signupPolicy.emailPatterns=c,e("updated",a.signupPolicy)},p=()=>{e("save")},f=c=>{o.value=c,c!=="patternOnly"&&(c==="inviteOnly"&&a.signupPolicy.allowOnlyInvited(),e("updated",a.signupPolicy))};return(c,C)=>(m(),g(t(he),{style:{"padding-top":"8px",width:"100%"},justify:"space-between",align:"flex-end"},{default:l(()=>[r(t(ge),{value:o.value,"onUpdate:value":f},{default:l(()=>[r(t(E),{direction:"vertical"},{default:l(()=>[r(t(M),{value:"inviteOnly"},{default:l(()=>[h("Allow listed users only")]),_:1}),r(t(E),null,{default:l(()=>[r(t(M),{value:"patternOnly"},{default:l(()=>[h("Allow everyone from this domain:")]),_:1}),r(t(G),{mode:"tags",value:c.signupPolicy.emailPatterns,style:{"min-width":"300px"},placeholder:"@domain.com or sub.domain.com",disabled:o.value!=="patternOnly",options:i.value,"dropdown-match-select-width":"",open:!1,"onUpdate:value":y},null,8,["value","disabled","options"])]),_:1})]),_:1})]),_:1},8,["value"]),r(t(_),{disabled:!c.signupPolicy.hasChanges,type:"primary",onClick:p},{default:l(()=>[h(" Save changes ")]),_:1},8,["disabled"])]),_:1}))}}),xe=b({__name:"NewUser",props:{roleOptions:{}},emits:["created","cancel"],setup(s,{emit:e}){const o=s.roleOptions.map(p=>({label:p.name,value:p.name})),n=S({email:"",roles:[]});function i(){e("cancel")}function y(){!n.email||e("created",n)}return(p,f)=>(m(),g(t(B),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:i},{extra:l(()=>[r(t(E),null,{default:l(()=>[r(t(_),{onClick:i},{default:l(()=>[h("Cancel")]),_:1}),r(t(_),{type:"primary",onClick:y},{default:l(()=>[h("Submit")]),_:1})]),_:1})]),default:l(()=>[r(t(F),{model:n,layout:"vertical"},{default:l(()=>[r(t(w),{key:"email",label:"Email",required:!0},{default:l(()=>[r(t(T),{value:n.email,"onUpdate:value":f[0]||(f[0]=c=>n.email=c)},null,8,["value"])]),_:1}),r(t(w),{key:"role",label:"Role"},{default:l(()=>[r(t(G),{value:n.roles,"onUpdate:value":f[1]||(f[1]=c=>n.roles=c),mode:"multiple",options:t(o)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Oe=b({__name:"UpdateUser",props:{roleOptions:{},email:{},roles:{}},emits:["updated","cancel"],setup(s,{emit:e}){const a=s,o=a.roleOptions.map(p=>({label:p.name,value:p.name})),n=S({email:a.email,roles:a.roles});function i(){e("cancel")}function y(){e("updated",n)}return(p,f)=>(m(),g(t(B),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:i},{extra:l(()=>[r(t(E),null,{default:l(()=>[r(t(_),{onClick:i},{default:l(()=>[h("Cancel")]),_:1}),r(t(_),{type:"primary",onClick:y},{default:l(()=>[h("Submit")]),_:1})]),_:1})]),default:l(()=>[r(t(F),{model:n,layout:"vertical"},{default:l(()=>[r(t(w),{key:"email",label:"Email"},{default:l(()=>[r(t(T),{value:n.email,"onUpdate:value":f[0]||(f[0]=c=>n.email=c)},null,8,["value"])]),_:1}),r(t(w),{key:"role",label:"Role"},{default:l(()=>[r(t(G),{value:n.roles,"onUpdate:value":f[1]||(f[1]=c=>n.roles=c),mode:"multiple",options:t(o)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),$e=b({__name:"View",props:{loading:{type:Boolean},users:{},onCreate:{type:Function},onEdit:{type:Function},onDelete:{type:Function}},setup(s){const e=s,a=W(()=>{var o;return{columns:[{name:"Email"},{name:"Roles"},{name:"",align:"right"}],rows:(o=e.users.map(n=>({key:n.email,cells:[{type:"text",text:n.email},{type:"slot",key:"roles",payload:{roles:n.roles}},{type:"actions",actions:[{icon:te,label:"Edit",onClick:()=>e.onEdit(n)},{icon:X,label:"Delete",onClick:()=>e.onDelete(n)}]}]})))!=null?o:[]}});return(o,n)=>(m(),g(ee,{"entity-name":"users",title:"",loading:o.loading,description:"List all app users.","empty-title":"No users yet",table:a.value,"create-button-text":"Add users",onCreate:o.onCreate},{roles:l(({payload:i})=>[(m(!0),Y(J,null,ve(i.roles,y=>(m(),g(t(Pe),{key:y,bordered:""},{default:l(()=>[h(_e(y),1)]),_:2},1024))),128))]),_:1},8,["loading","table","onCreate"]))}}),De=b({__name:"NewRole",emits:["created","cancel"],setup(s,{emit:e}){const a=S({name:"",description:""});function o(){e("cancel")}function n(){!a.name||e("created",a)}return(i,y)=>(m(),g(t(B),{open:"",title:"New role",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:o},{extra:l(()=>[r(t(E),null,{default:l(()=>[r(t(_),{onClick:o},{default:l(()=>[h("Cancel")]),_:1}),r(t(_),{type:"primary",onClick:n},{default:l(()=>[h("Submit")]),_:1})]),_:1})]),default:l(()=>[r(t(F),{model:a,layout:"vertical"},{default:l(()=>[r(t(w),{key:"name",label:"Name",required:!0},{default:l(()=>[r(t(T),{value:a.name,"onUpdate:value":y[0]||(y[0]=p=>a.name=p)},null,8,["value"])]),_:1}),r(t(w),{key:"description",label:"Description"},{default:l(()=>[r(t(Q),{value:a.description,"onUpdate:value":y[1]||(y[1]=p=>a.description=p),placeholder:"Optional description",rows:3},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Ie=b({__name:"UpdateRole",props:{name:{},description:{}},emits:["updated","cancel"],setup(s,{emit:e}){const a=s,o=S({description:a.description});function n(){e("cancel")}function i(){e("updated",o)}return(y,p)=>(m(),g(t(B),{open:"",title:"Update role",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:n},{extra:l(()=>[r(t(E),null,{default:l(()=>[r(t(_),{onClick:n},{default:l(()=>[h("Cancel")]),_:1}),r(t(_),{type:"primary",onClick:i},{default:l(()=>[h("Submit")]),_:1})]),_:1})]),default:l(()=>[r(t(F),{model:o,layout:"vertical"},{default:l(()=>[r(t(w),{key:"name",label:"Name"},{default:l(()=>[r(t(T),{value:a.name,disabled:""},null,8,["value"])]),_:1}),r(t(w),{key:"role",label:"Role"},{default:l(()=>[r(t(Q),{value:o.description,"onUpdate:value":p[0]||(p[0]=f=>o.description=f),placeholder:"Optional description",rows:3},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),je=b({__name:"View",props:{loading:{type:Boolean},roles:{},onCreate:{type:Function},onEdit:{type:Function},onDelete:{type:Function}},setup(s){const e=s,a=W(()=>{var o;return{columns:[{name:"Name"},{name:"Description"},{name:"",align:"right"}],rows:(o=e.roles.map(n=>({key:n.id,cells:[{type:"text",text:n.name},{type:"text",text:n.description},{type:"actions",actions:[{icon:te,label:"Edit",onClick:()=>e.onEdit(n)},{icon:X,label:"Delete",onClick:()=>e.onDelete(n)}]}]})))!=null?o:[]}});return(o,n)=>(m(),g(ee,{"entity-name":"roles",loading:o.loading,title:"",description:"List all app roles.","empty-title":"No roles yet",table:a.value,"create-button-text":"Add roles",onCreate:o.onCreate},null,8,["loading","table","onCreate"]))}}),N=class{constructor(e){P(this,"record");this.dto=e,this.record=ae.from(e)}static from(e){return new N(e)}toDTO(){return this.record.toDTO()}get id(){return this.record.get("id")}get projectId(){return this.record.get("projectId")}get emailPatterns(){return this.record.get("emailPatterns")}set emailPatterns(e){this.record.set("emailPatterns",e)}get hasChanges(){return this.record.hasChangesDeep("emailPatterns")}get strategy(){return this.dto.emailPatterns.length===0?"inviteOnly":"patternOnly"}get changes(){return this.record.changes}allowOnlyInvited(){this.record.set("emailPatterns",[])}static validate(e){return N.pattern.test(e)}};let x=N;P(x,"pattern",new RegExp("^@?(?!-)[A-Za-z0-9-]{1,}(?<!-)(\\.[A-Za-z]{2,})+$"));class Ne{constructor(){P(this,"urlPath","signup-policy")}async update(e,a){return R.patch(`projects/${e}/${this.urlPath}`,a)}async get(e){return R.get(`projects/${e}/${this.urlPath}`)}}const K=new Ne;class Se{constructor(e){this.projectId=e}async update(e){const{emailPatterns:a}=e.changes;if(!a)return e;const o=await K.update(this.projectId,{emailPatterns:a});return x.from(o)}async get(){const e=await K.get(this.projectId);return x.from(e)}}class z{constructor(e){P(this,"record");this.dto=e,this.record=ae.from(e)}static from(e){return new z(e)}toDTO(){return this.record.toDTO()}get changes(){return this.record.changes}get id(){return this.record.get("id")}get email(){return this.record.get("email")}set email(e){this.record.set("email",e)}get projectId(){return this.record.get("projectId")}get roles(){return this.record.get("roles")}set roles(e){this.record.set("roles",e)}update(e){this.record.update(e)}resetChanges(){this.record.resetChanges()}}class Te{constructor(){P(this,"urlPath","users")}async create(e,a){return R.post(`projects/${e}/${this.urlPath}`,a)}async delete(e,a){await R.delete(`projects/${e}/${this.urlPath}/${a}`)}async list(e,{limit:a,offset:o}){const n={};a&&(n.limit=a.toString()),o&&(n.offset=o.toString());const i=new URLSearchParams(n);return R.get(`projects/${e}/${this.urlPath}?${i.toString()}`)}async update(e,a,o){return R.patch(`projects/${e}/${this.urlPath}/${a}`,o)}}const j=new Te;class Fe{constructor(e){this.projectId=e}async create(e){await j.create(this.projectId,e)}async update(e,a){await j.update(this.projectId,e,a)}async delete(e){await j.delete(this.projectId,e)}async list(e,a){return(await j.list(this.projectId,{limit:e,offset:a})).map(z.from)}}const ct=b({__name:"View",setup(s){const a=we().params.projectId,o=A({type:"initial"}),n=A("users");be(()=>{const d=new URLSearchParams(location.search).get("selected-panel")||"users",v=["roles","users"].includes(d)?d:"users";d&&(n.value=v)});const i=()=>{o.value.type="initial"},y=()=>{o.value.type="creatingUser"},p=u=>{o.value={type:"editingUser",payload:u}},f=()=>{o.value.type="creatingRole"},c=u=>{o.value={type:"editingRole",payload:u}},C=new Se(a),{result:U,refetch:oe}=q(()=>C.get()),ne=async()=>{if(!!U.value)try{await C.update(U.value),oe()}catch(u){u instanceof Error&&k("Update Error",u.message)}},O=new Fe(a),{loading:re,result:le,refetch:$}=q(()=>O.list(100,0)),D=new Re(a),{loading:se,result:V,refetch:L}=q(()=>D.list(100,0)),ie=async u=>{try{if(o.value.type!=="creatingUser")return;await O.create(u),i(),$()}catch(d){d instanceof Error&&k("Create Error",d.message)}},ce=async u=>{try{if(o.value.type!=="editingUser")return;await O.update(o.value.payload.id,u),i(),$()}catch(d){d instanceof Error&&k("Update Error",d.message)}},ue=async u=>{if(!!await Z("Deleteing users revoke their access to your application in case they aren't allowed to self sign-up. Are you sure you want to continue?"))try{await O.delete(u.id),$()}catch(v){v instanceof Error&&k("Delete Error",v.message)}},de=async u=>{try{if(o.value.type!=="creatingRole")return;await D.create(u),i(),L()}catch(d){d instanceof Error&&k("Create Error",d.message)}},pe=async u=>{try{if(o.value.type!=="editingRole")return;await D.update(o.value.payload.id,u),i(),L()}catch(d){d instanceof Error&&k("Update Error",d.message)}},me=async u=>{if(!!await Z("Deleteing roles may revoke access to some features in your application. Are you sure you want to continue?"))try{await D.delete(u.id),L(),$()}catch(v){v instanceof Error&&k("Delete Error",v.message)}};return(u,d)=>(m(),Y(J,null,[r(t(Ce),null,{default:l(()=>[h("Access Control")]),_:1}),r(t(ke),null,{default:l(()=>[h(" Manage how your end users interect with your application. "),r(Ue,{path:"concepts/access-control"})]),_:1}),r(t(Ee),{"active-key":n.value,"onUpdate:activeKey":d[0]||(d[0]=v=>n.value=v)},{default:l(()=>[r(t(H),{key:"users",tab:"Users"}),r(t(H),{key:"roles",tab:"Roles"})]),_:1},8,["active-key"]),n.value==="users"&&t(U)?(m(),g(Ae,{key:0,"signup-policy":t(U),onSave:ne},null,8,["signup-policy"])):I("",!0),n.value==="users"?(m(),g($e,{key:1,loading:t(re),users:t(le)||[],onCreate:y,onEdit:p,onDelete:ue},null,8,["loading","users"])):I("",!0),n.value==="roles"?(m(),g(je,{key:2,loading:t(se),roles:t(V)||[],onCreate:f,onEdit:c,onDelete:me},null,8,["loading","roles"])):I("",!0),o.value.type==="creatingUser"?(m(),g(xe,{key:3,"role-options":t(V)||[],onCancel:i,onCreated:ie},null,8,["role-options"])):o.value.type==="editingUser"?(m(),g(Oe,{key:4,email:o.value.payload.email,roles:o.value.payload.roles||[],"role-options":t(V)||[],onUpdated:ce,onCancel:i},null,8,["email","roles","role-options"])):o.value.type==="creatingRole"?(m(),g(De,{key:5,onCancel:i,onCreated:de})):o.value.type==="editingRole"?(m(),g(Ie,{key:6,name:o.value.payload.name,description:o.value.payload.description,onUpdated:pe,onCancel:i},null,8,["name","description"])):I("",!0)],64))}});export{ct as default};
//# sourceMappingURL=View.2004bfda.js.map
