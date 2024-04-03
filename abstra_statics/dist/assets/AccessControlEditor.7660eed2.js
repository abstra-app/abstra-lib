var ge=Object.defineProperty;var ve=(u,o,t)=>o in u?ge(u,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[o]=t;var K=(u,o,t)=>(ve(u,typeof o!="symbol"?o+"":o,t),t);import{a as B}from"./asyncComputed.a572f2b3.js";import{l as le}from"./fetch.27e19fea.js";import{E as re}from"./record.578a1ea0.js";import{d as P,b as p,c as v,w as a,eu as q,eB as Z,u as e,cB as _e,aq as _,eD as D,aC as $,ad as F,f as s,eC as he,ew as x,r as R,H as O,v as be,bE as U,e as Ce,cC as I,cz as Q,ai as we,eP as Pe,G as ee,bx as G,cp as ie,dh as ae}from"./outputWidgets.24d715aa.js";import{d as W}from"./vuedraggable.umd.989a3b8f.js";import{s as ke}from"./metadata.f952be97.js";import{G as Ue}from"./PhKanban.vue.c5913462.js";import{A as T}from"./Text.a3d7b61b.js";import{A as S}from"./index.89036478.js";import{A as xe}from"./Item.5ae92ec8.js";import{A as ue}from"./index.aa9d3c06.js";import{A as ce}from"./index.d988ec0e.js";import{_ as Re}from"./SaveButton.vue_vue_type_script_setup_true_lang.475dc746.js";import{A as ne}from"./Paragraph.876679f3.js";import{C as de}from"./CrudView.9c3b97e6.js";import{G as pe}from"./PhPencil.vue.38135403.js";import{A,F as L}from"./Form.6c56759c.js";import{A as H}from"./index.3db07a56.js";import{E as Ae,a as Oe}from"./repository.020b5e0d.js";import{A as j,T as Ie}from"./TabPane.30431eb8.js";import"./index.79d15ce1.js";import{A as Se}from"./Title.0a3b50b2.js";import"./pubsub.d6a14665.js";import"./PhCheckCircle.vue.a1aa7f79.js";import"./PhScroll.vue.6280fb26.js";import"./PhWebhooksLogo.vue.5ca7da22.js";import"./ant-design.0626d571.js";import"./index.c559b995.js";import"./Modal.4c3e5718.js";import"./Link.20d99be1.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.1f98ff18.js";import"./BookOutlined.ead575dc.js";import"./router.b7ce2b88.js";import"./popupNotifcation.d3362349.js";import"./url.7c45b197.js";import"./hasIn.27500da0.js";import"./isNumeric.75337b1e.js";(function(){try{var u=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(u._sentryDebugIds=u._sentryDebugIds||{},u._sentryDebugIds[o]="177fa09c-5f46-4eca-96c1-426cfbcb6767",u._sentryDebugIdIdentifier="sentry-dbid-177fa09c-5f46-4eca-96c1-426cfbcb6767")}catch{}})();class te{constructor(o){K(this,"record");this.record=re.from(o)}get id(){return this.record.get("id")}get type(){return this.record.get("type")}get title(){return this.record.get("title")}get isPublic(){return this.record.get("is_public")}set isPublic(o){o&&this.record.set("required_roles",[]),this.record.set("is_public",o)}get requiredRoles(){return this.record.get("required_roles")}set requiredRoles(o){o.length!==0&&this.record.set("is_public",!1),this.record.set("required_roles",o)}makePublic(){this.isPublic=!0}makeProtected(){this.isPublic=!1,this.requiredRoles=[]}require(o){o.length!==0&&(this.isPublic=!1),this.requiredRoles=o}get visibility(){return this.isPublic?"public":this.requiredRoles.length===0?"protected":"private"}hasChanges(){return this.record.hasChanges("is_public")||this.record.hasChangesDeep("required_roles")}get changes(){return this.record.changes}get initialState(){return this.record.initialState}toUpdateDTO(){return{id:this.id,is_public:this.isPublic,required_roles:this.requiredRoles}}commit(){this.record.commit()}static from(o){return new te(o)}}class De{constructor(o=le){this.fetch=o}async list(){return(await(await this.fetch("/_editor/api/access-control",{method:"GET",headers:{"Content-Type":"application/json"}})).json()).map(te.from)}async update(o){const t=o.reduce((r,l)=>(l.hasChanges()&&r.push({id:l.id,...l.changes}),r),[]);return await(await fetch("/_editor/api/access-control",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}}const Te=P({__name:"RoleSelector",props:{value:{},roleOptions:{}},emits:["update:value"],setup(u,{emit:o}){const t=n=>{o("update:value",n)};return(n,r)=>(p(),v(e(F),{value:n.value,mode:"multiple","onUpdate:value":t},{default:a(()=>[(p(!0),q($,null,Z(n.roleOptions,l=>(p(),v(e(_e),{key:l,value:l},{default:a(()=>[_(D(l),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"]))}}),qe=u=>u==="internal"?Ue:ke(u),Ee="Public",$e="Requires Sign-Up",Ne="Requires Role",X=P({__name:"DraggeableItem",props:{item:{},roleOptions:{}},emits:["update:roles"],setup(u,{emit:o}){const t=u,n=typeof t.roleOptions<"u",r=l=>{o("update:roles",l)};return(l,c)=>(p(),v(e(xe),{style:{"list-style":"none"},class:"item"},{default:a(()=>[s(e(S),{align:"center"},{default:a(()=>[(p(),v(he(e(qe)(t.item.type)),{style:{"flex-shrink":"0",width:"24px"}})),s(e(T),{ellipsis:"",content:l.item.title,style:{"max-width":"90%",margin:"10px"}},null,8,["content"])]),_:1}),n?(p(),v(Te,{key:0,style:{width:"100%"},value:l.item.requiredRoles||[],"role-options":l.roleOptions||[],"onUpdate:value":r},null,8,["value","role-options"])):x("",!0)]),_:1}))}});const Be=P({__name:"DraggeableSelector",props:{accessControls:{},roles:{}},emits:["update:accessControls"],setup(u,{emit:o}){const t=u,n=t.accessControls.reduce((y,d)=>{switch(d.visibility){case"public":y.public.push(d);break;case"protected":y.protected.push(d);break;case"private":y.private.push(d);break;default:throw new Error("Invalid visibility")}return y},{public:[],protected:[],private:[]}),r=R(n.public),l=R(n.protected),c=R(n.private),m=O(()=>t.roles.map(y=>y.name)),i=new Map,g=y=>{if("added"in y){const d=t.accessControls.findIndex(f=>f.id===y.added.element.id);if(d===-1)return!0;t.accessControls[d].makePublic(),o("update:accessControls",[...t.accessControls])}return!0},C=y=>{if("added"in y){const d=t.accessControls.findIndex(f=>f.id===y.added.element.id);if(d===-1)return!0;t.accessControls[d].makeProtected(),o("update:accessControls",[...t.accessControls])}return!0},J=y=>{if("added"in y){const d=y.added.element.id,f=i.get(d);if(f){const b=t.accessControls.findIndex(Y=>Y.id===y.added.element.id);if(b===-1)return!0;t.accessControls[b].require(f),o("update:accessControls",[...t.accessControls])}}return!0},E=y=>{const d=c.value[y];d&&i.set(d.id,d.requiredRoles)},M=(y,d)=>{const f=t.accessControls.findIndex(b=>b.id===y.id);f!==-1&&(t.accessControls[f].require(d),d.length===0?(c.value=c.value.filter(b=>b.id!==y.id),l.value=[y,...l.value]):t.accessControls[f].isPublic=!1,o("update:accessControls",[...t.accessControls]))};return(y,d)=>(p(),v(e(S),{justify:"space-between",gap:"middle"},{default:a(()=>[s(e(S),{vertical:"",class:"container"},{default:a(()=>[s(e(T),{strong:""},{default:a(()=>[_(D(e(Ee)),1)]),_:1}),s(e(W),{list:r.value,"onUpdate:list":d[0]||(d[0]=f=>r.value=f),class:"content","item-key":"id",group:"drag","ghost-class":"ghost",onChange:g},{item:a(({element:f})=>[s(X,{class:"item",item:f},null,8,["item"])]),_:1},8,["list"])]),_:1}),s(e(S),{vertical:"",class:"container"},{default:a(()=>[s(e(T),{strong:""},{default:a(()=>[_(D(e($e)),1)]),_:1}),s(e(W),{list:l.value,"onUpdate:list":d[1]||(d[1]=f=>l.value=f),class:"content","item-key":"id",group:"drag","ghost-class":"ghost",onChange:C},{item:a(({element:f})=>[s(X,{class:"item",item:f},null,8,["item"])]),_:1},8,["list"])]),_:1}),s(e(S),{vertical:"",class:"container"},{default:a(()=>[s(e(T),{strong:""},{default:a(()=>[_(D(e(Ne)),1)]),_:1}),s(e(W),{list:c.value,"onUpdate:list":d[2]||(d[2]=f=>c.value=f),class:"content","item-key":"id",group:"drag","ghost-class":"ghost",onChange:J,onStart:d[3]||(d[3]=f=>E(f.oldIndex))},{item:a(({element:f})=>[s(X,{class:"item",item:f,"role-options":m.value,"onUpdate:roles":b=>M(f,b)},null,8,["item","role-options","onUpdate:roles"])]),_:1},8,["list"])]),_:1})]),_:1}))}});const je=be(Be,[["__scopeId","data-v-b24de162"]]),Ve=P({__name:"DanglingRolesAlert",props:{danglingRoles:{}},setup(u){return(o,t)=>(p(),v(e(ce),{type:"warning","show-icon":"",closable:""},{description:a(()=>[s(e(T),null,{default:a(()=>[_("The following roles are not defined in the Cloud Console:")]),_:1}),(p(!0),q($,null,Z(o.danglingRoles,n=>(p(),v(e(ue),{key:n,style:{margin:"2px"},color:"red"},{default:a(()=>[_(D(n),1)]),_:2},1024))),128))]),_:1}))}}),Fe=P({__name:"View",props:{accessControls:{},roles:{},loading:{type:Boolean}},emits:["update:access-controls","save"],setup(u,{emit:o}){const t=u,n=O(()=>{var i;return((i=t.accessControls)==null?void 0:i.filter(g=>g.hasChanges()))||[]}),r=O(()=>n.value.length>0),c={save:async()=>{o("save")},hasChanges:()=>r.value},m=O(()=>{const i=t.accessControls.flatMap(C=>C.requiredRoles)||[],g=t.roles.map(C=>C.name)||[];return(i==null?void 0:i.filter(C=>!g.includes(C)))||[]});return(i,g)=>(p(),q($,null,[s(e(S),{justify:"flex-end"},{default:a(()=>[s(Re,{model:c})]),_:1}),!i.loading&&m.value.length>0?(p(),v(Ve,{key:0,"dangling-roles":m.value},null,8,["dangling-roles"])):x("",!0),s(je,{"access-controls":i.accessControls,roles:i.roles||[],"onUpdate:accessControls":g[0]||(g[0]=C=>o("update:access-controls",C))},null,8,["access-controls","roles"])],64))}}),Ge={style:{padding:"30px"}},Le=P({__name:"View",props:{signupPolicy:{}},emits:["update:signup-policy","save"],setup(u,{emit:o}){const t=u,n=R(t.signupPolicy.strategy),r=R(t.signupPolicy.strategy==="patternOnly"?t.signupPolicy.emailPatterns:[]),l=R(t.signupPolicy.strategy==="patternOnly"?t.signupPolicy.emailPatterns.map(i=>({label:i})):[]),c=i=>{const g=i;if(g.length===0){m("inviteOnly");return}r.value=g,l.value=g.map(C=>({label:C})),t.signupPolicy.emailPatterns=i,o("update:signup-policy",t.signupPolicy)},m=i=>{if(n.value=i,i==="patternOnly"){t.signupPolicy.emailPatterns=r.value;return}i==="anyone"&&t.signupPolicy.allowAnyone(),i==="inviteOnly"&&t.signupPolicy.allowOnlyInvited(),o("update:signup-policy",t.signupPolicy)};return(i,g)=>(p(),v(e(I),{direction:"vertical",style:{"padding-top":"8px"}},{default:a(()=>[s(e(ne),null,{default:a(()=>[_(" Control which end users may sign-up to your app. ")]),_:1}),s(e(U),{disabled:!i.signupPolicy.hasChanges,type:"primary",onClick:g[0]||(g[0]=C=>o("save"))},{default:a(()=>[_(" Save changes ")]),_:1},8,["disabled"]),Ce("div",Ge,[s(e(ne),{strong:""},{default:a(()=>[_(" Allow self sign-up? ")]),_:1}),s(e(we),{value:n.value,"onUpdate:value":m},{default:a(()=>[s(e(I),{direction:"vertical"},{default:a(()=>[s(e(Q),{value:"inviteOnly"},{default:a(()=>[_("No, users must be added by me.")]),_:1}),s(e(I),null,{default:a(()=>[s(e(Q),{value:"patternOnly"},{default:a(()=>[_("Yes, but only for users in")]),_:1}),s(e(F),{mode:"tags",value:r.value,style:{"min-width":"200px"},placeholder:"*@domain.com",disabled:n.value!=="patternOnly",options:l.value,"dropdown-match-select-width":"",open:!1,"onUpdate:value":c},null,8,["value","disabled","options"])]),_:1}),s(e(Q),{value:"anyone"},{default:a(()=>[_("Yes, for anyone")]),_:1})]),_:1})]),_:1},8,["value"])])]),_:1}))}}),He=P({__name:"View",props:{loading:{type:Boolean},users:{}},emits:["create","edit","delete"],setup(u,{emit:o}){const t=u,n=O(()=>{var r;return{columns:[{name:"Email"},{name:"Roles"},{name:"",align:"right"}],rows:(r=t.users.map(l=>({key:l.email,cells:[{type:"text",text:l.email},{type:"slot",key:"roles",payload:{roles:l.roles}},{type:"actions",actions:[{icon:pe,label:"Edit",onClick:()=>o("edit",l)},{icon:Pe,label:"Delete",onClick:()=>o("delete",l)}]}]})))!=null?r:[]}});return(r,l)=>(p(),q($,null,[s(de,{"entity-name":"users",title:"",loading:r.loading,description:"List all user profiles to be used for testing purposes.","empty-title":"No users yet",table:n.value,"create-button-text":"Add users",onCreate:l[0]||(l[0]=c=>o("create",c))},{roles:a(({payload:c})=>[(p(!0),q($,null,Z(c.roles,m=>(p(),v(e(ue),{key:m,bordered:""},{default:a(()=>[_(D(m),1)]),_:2},1024))),128))]),_:1},8,["loading","table"]),s(e(ce),{type:"info","show-icon":"",closable:""},{description:a(()=>[s(e(T),null,{default:a(()=>[_("Configurations done here only affect your local environment. To manager real users, please access the Cloud Console.")]),_:1})]),_:1})],64))}}),Je=P({__name:"NewUser",props:{roleOptions:{}},emits:["created","cancel"],setup(u,{emit:o}){const n=u.roleOptions.map(m=>({label:m.name,value:m.name})),r=ee({email:"",roles:[]});function l(){o("cancel")}function c(){!r.email||o("created",r)}return(m,i)=>(p(),v(e(H),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:l},{extra:a(()=>[s(e(I),null,{default:a(()=>[s(e(U),{onClick:l},{default:a(()=>[_("Cancel")]),_:1}),s(e(U),{type:"primary",onClick:c},{default:a(()=>[_("Submit")]),_:1})]),_:1})]),default:a(()=>[s(e(L),{model:r,layout:"vertical"},{default:a(()=>[s(e(A),{key:"email",label:"Email",required:!0},{default:a(()=>[s(e(G),{value:r.email,"onUpdate:value":i[0]||(i[0]=g=>r.email=g)},null,8,["value"])]),_:1}),s(e(A),{key:"role",label:"Role"},{default:a(()=>[s(e(F),{value:r.roles,"onUpdate:value":i[1]||(i[1]=g=>r.roles=g),mode:"multiple",options:e(n)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Me=P({__name:"UpdateUser",props:{roleOptions:{},value:{}},emits:["updated","cancel"],setup(u,{emit:o}){const t=u,n=t.roleOptions.map(c=>({label:c.name,value:c.name}));function r(){o("cancel")}function l(){o("updated",t.value)}return(c,m)=>(p(),v(e(H),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:r},{extra:a(()=>[s(e(I),null,{default:a(()=>[s(e(U),{onClick:r},{default:a(()=>[_("Cancel")]),_:1}),s(e(U),{type:"primary",onClick:l},{default:a(()=>[_("Submit")]),_:1})]),_:1})]),default:a(()=>[s(e(L),{layout:"vertical"},{default:a(()=>[s(e(A),{key:"email",label:"Email"},{default:a(()=>[s(e(G),{value:c.value.email,"onUpdate:value":m[0]||(m[0]=i=>c.value.email=i),disabled:""},null,8,["value"])]),_:1}),s(e(A),{key:"role",label:"Role"},{default:a(()=>[s(e(F),{value:c.value.roles,"onUpdate:value":m[1]||(m[1]=i=>c.value.roles=i),mode:"multiple",options:e(n)},null,8,["value","options"])]),_:1})]),_:1})]),_:1}))}}),Ye=P({__name:"NewRole",emits:["created","cancel"],setup(u,{emit:o}){const t=ee({name:"",description:""});function n(){o("cancel")}function r(){!t.name||o("created",t)}return(l,c)=>(p(),v(e(H),{open:"",title:"New role",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:n},{extra:a(()=>[s(e(I),null,{default:a(()=>[s(e(U),{onClick:n},{default:a(()=>[_("Cancel")]),_:1}),s(e(U),{type:"primary",onClick:r},{default:a(()=>[_("Submit")]),_:1})]),_:1})]),default:a(()=>[s(e(L),{model:t,layout:"vertical"},{default:a(()=>[s(e(A),{key:"name",label:"Name",required:!0},{default:a(()=>[s(e(G),{value:t.name,"onUpdate:value":c[0]||(c[0]=m=>t.name=m)},null,8,["value"])]),_:1}),s(e(A),{key:"description",label:"Description"},{default:a(()=>[s(e(ie),{value:t.description,"onUpdate:value":c[1]||(c[1]=m=>t.description=m),placeholder:"Optional description",rows:3},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),ze=P({__name:"UpdateRole",props:{name:{},description:{}},emits:["updated","cancel"],setup(u,{emit:o}){const t=u,n=ee({description:t.description});function r(){o("cancel")}function l(){o("updated",n)}return(c,m)=>(p(),v(e(H),{open:"",title:"Update role",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:r},{extra:a(()=>[s(e(I),null,{default:a(()=>[s(e(U),{onClick:r},{default:a(()=>[_("Cancel")]),_:1}),s(e(U),{type:"primary",onClick:l},{default:a(()=>[_("Submit")]),_:1})]),_:1})]),default:a(()=>[s(e(L),{model:n,layout:"vertical"},{default:a(()=>[s(e(A),{key:"name",label:"Name"},{default:a(()=>[s(e(G),{value:t.name,disabled:""},null,8,["value"])]),_:1}),s(e(A),{key:"role",label:"Role"},{default:a(()=>[s(e(ie),{value:n.description,"onUpdate:value":m[0]||(m[0]=i=>n.description=i),placeholder:"Optional description",rows:3},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Ke=P({__name:"View",props:{loading:{type:Boolean},roles:{},onCreate:{type:Function},onEdit:{type:Function}},setup(u){const o=u,t=O(()=>{var n;return{columns:[{name:"Name"},{name:"Description"},{name:"",align:"right"}],rows:(n=o.roles.map(r=>({key:r.id,cells:[{type:"text",text:r.name},{type:"text",text:r.description},{type:"actions",actions:[{icon:pe,label:"Edit",onClick:()=>o.onEdit(r)}]}]})))!=null?n:[]}});return(n,r)=>(p(),v(de,{"entity-name":"roles",loading:n.loading,title:"",description:"List all app roles.","empty-title":"No roles yet",table:t.value,"create-button-text":"Add roles",onCreate:n.onCreate},null,8,["loading","table","onCreate"]))}});class V{constructor(o){K(this,"record");this.dto=o,this.record=re.from(o)}static from(o){return new V(o)}toDTO(){return this.record.toDTO()}get id(){return this.record.get("id")}get projectId(){return this.record.get("projectId")}get emailPatterns(){return this.record.get("emailPatterns")}set emailPatterns(o){this.record.set("emailPatterns",o)}get hasChanges(){return this.record.hasChangesDeep("emailPatterns")}get strategy(){return this.dto.emailPatterns.length===0?"inviteOnly":this.dto.emailPatterns.length==1&&this.dto.emailPatterns[0]=="*"?"anyone":"patternOnly"}get changes(){return this.record.changes}allowAnyone(){this.record.set("emailPatterns",["*"])}allowOnlyInvited(){this.record.set("emailPatterns",[])}}class Qe{constructor(o=le){this.fetch=o}async update(o){const{emailPatterns:t}=o.changes;return t?(await this.fetch("/_editor/api/users/signup-policy",{method:"PUT",body:JSON.stringify({email_patterns:t}),headers:{"Content-Type":"application/json"}}),V.from({...o.toDTO(),emailPatterns:t})):o}async get(){const t=await(await this.fetch("/_editor/api/users/signup-policy")).json();return V.from({emailPatterns:t.email_patterns,id:t.id,projectId:t.project_id,createdAt:t.created_at})}}const We={style:{display:"flex","flex-direction":"column","justify-content":"center",padding:"40px 120px"}},$t=P({__name:"AccessControlEditor",setup(u){const o=()=>{t.value={type:"initial"}},t=R({type:"initial"}),n=R("enforcement"),r=new De,{result:l,refetch:c}=B(async()=>await r.list()),m=O(()=>{var w;return((w=l.value)==null?void 0:w.filter(h=>h.hasChanges()))||[]}),i=async()=>{await r.update(m.value),await c()},g=new Ae,{result:C,loading:J,refetch:E}=B(()=>g.list()),M=async w=>{await g.create(w),await E(),o()},y=async w=>{await g.update(w.id,w.changes),await E(),o()},d=async w=>{await g.delete(w.id),await E(),o()},f=new Qe,{result:b,refetch:Y}=B(()=>f.get()),me=async()=>{!b.value||(await f.update(b.value),await Y())},z=new Oe,{result:N,loading:oe,refetch:se}=B(()=>z.list(100,0)),fe=async w=>{await z.create(w),await se(),o()},ye=async w=>{t.value.type!=="role-update"||!t.value.role||(await z.update(t.value.role.id,w),await se(),o())};return(w,h)=>(p(),q("div",We,[s(e(Se),null,{default:a(()=>[_("Access Control")]),_:1}),s(e(Ie),{"active-key":n.value,"onUpdate:activeKey":h[0]||(h[0]=k=>n.value=k)},{default:a(()=>[s(e(j),{key:"enforcement",tab:"Security Level"}),s(e(j),{key:"roles",tab:"Roles"}),s(e(j),{key:"signup-policy",tab:"Sign Up Policy"}),s(e(j),{key:"users",tab:"Test Users"})]),_:1},8,["active-key"]),n.value==="enforcement"&&e(l)?(p(),v(Fe,{key:0,"access-controls":e(l),"onUpdate:accessControls":h[1]||(h[1]=k=>ae(l)?l.value=k:null),roles:e(N)||[],loading:e(oe),onSave:i},null,8,["access-controls","roles","loading"])):x("",!0),n.value==="users"?(p(),v(e(He),{key:1,loading:e(J),users:e(C)||[],onDelete:d,onCreate:h[2]||(h[2]=()=>t.value={type:"user-create"}),onEdit:h[3]||(h[3]=k=>t.value={type:"user-update",user:k})},null,8,["loading","users"])):x("",!0),n.value==="roles"?(p(),v(e(Ke),{key:2,loading:e(oe),roles:e(N)||[],onCreate:h[4]||(h[4]=k=>t.value={type:"role-create"}),onEdit:h[5]||(h[5]=k=>t.value={type:"role-update",role:k})},null,8,["loading","roles"])):x("",!0),n.value==="signup-policy"&&e(b)?(p(),v(Le,{key:3,"signup-policy":e(b),"onUpdate:signupPolicy":h[6]||(h[6]=k=>ae(b)?b.value=k:null),onSave:me},null,8,["signup-policy"])):x("",!0),t.value.type==="user-create"?(p(),v(e(Je),{key:4,"role-options":e(N)||[],onCreated:M,onCancel:o},null,8,["role-options"])):x("",!0),t.value.type==="user-update"?(p(),v(e(Me),{key:5,value:t.value.user,"role-options":e(N)||[],onUpdated:y,onCancel:o},null,8,["value","role-options"])):t.value.type==="role-create"?(p(),v(e(Ye),{key:6,onCancel:o,onCreated:fe})):t.value.type==="role-update"?(p(),v(e(ze),{key:7,name:t.value.role.name,description:t.value.role.description,onUpdated:ye,onCancel:o},null,8,["name","description"])):x("",!0)]))}});export{$t as default};
//# sourceMappingURL=AccessControlEditor.7660eed2.js.map
