var me=Object.defineProperty;var fe=(a,e,t)=>e in a?me(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var $=(a,e,t)=>(fe(a,typeof e!="symbol"?e+"":e,t),t);import{C as ge}from"./ContentLayout.82a0937b.js";import{l as re}from"./fetch.85e7c98a.js";import{E as ne}from"./record.7a291906.js";import{f as o,eG as ye,d as C,b as g,c as v,w as r,u as s,bE as S,aq as h,ew as O,eu as j,eD as Z,cz as ve,eF as R,aC as E,ad as G,eE as he,r as k,I as _e,H as x,v as be,e as Ce,cA as T,cx as M,ai as we,eQ as Pe,G as Oe,bx as ae,dh as te}from"./outputWidgets.6fd5a5d8.js";import{E as ke,a as Ue}from"./repository.11c9d9f5.js";import{a as N}from"./asyncComputed.310b0a30.js";import{d as W}from"./vuedraggable.umd.974cc2c4.js";import"./workspaces.ef806cf2.js";import{l as Y}from"./login.a10c76d6.js";import"./envVars.808d27e6.js";import{P as Ae,A as Q,T as Re}from"./TabPane.d460dc80.js";import{A as xe}from"./index.e1325c7f.js";import{s as Ie}from"./metadata.6d91eb5d.js";import{G as Se}from"./PhKanban.vue.4957a8b8.js";import{A as I}from"./Text.c853e104.js";import{A}from"./index.73f8e03d.js";import{A as De}from"./Item.83b0615a.js";import{A as le}from"./index.f6da9859.js";import{A as ie}from"./index.a9b847fc.js";import{_ as Te}from"./SaveButton.vue_vue_type_script_setup_true_lang.b5ea8551.js";import{A as se}from"./Paragraph.0504c9ed.js";import{C as qe}from"./CrudView.38b74af3.js";import{G as je}from"./PhPencil.vue.4e24a975.js";import{A as B,F as ue}from"./Form.86ede2da.js";import{A as ce}from"./index.52f3c433.js";import"./index.557fb711.js";import{A as Ee}from"./Title.c26fc29f.js";import"./pubsub.7bd978fa.js";import"./router.8cab4041.js";import"./popupNotifcation.8c55eab8.js";import"./runnerData.ffa20f2f.js";import"./url.1af9f50e.js";import"./hasIn.f935cc6f.js";import"./PhCheckCircle.vue.36088834.js";import"./PhScroll.vue.500293f2.js";import"./PhWebhooksLogo.vue.03b2906b.js";import"./UnsavedChangesHandler.7fcf1c4c.js";import"./ExclamationCircleOutlined.0b834acf.js";import"./Modal.c7fda8bb.js";import"./Link.ae8e3018.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2fb6a353.js";import"./BookOutlined.2e7b7d83.js";import"./isNumeric.75337b1e.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="bce32ac1-8607-4358-9d86-1a6886bb795a",a._sentryDebugIdIdentifier="sentry-dbid-bce32ac1-8607-4358-9d86-1a6886bb795a")}catch{}})();function oe(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},p=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(p=p.concat(Object.getOwnPropertySymbols(t).filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),p.forEach(function(l){$e(a,l,t[l])})}return a}function $e(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var K=function(e,t){var p=oe({},e,t.attrs);return o(ye,oe({},p,{icon:Ae}),null)};K.displayName="PlusOutlined";K.inheritAttrs=!1;const Ne=K;class ee{constructor(e){$(this,"record");this.record=ne.from(e)}get id(){return this.record.get("id")}get type(){return this.record.get("type")}get title(){return this.record.get("title")}get isPublic(){return this.record.get("is_public")}set isPublic(e){e&&this.record.set("required_roles",[]),this.record.set("is_public",e)}get requiredRoles(){return this.record.get("required_roles")}set requiredRoles(e){e.length!==0&&this.record.set("is_public",!1),this.record.set("required_roles",e)}makePublic(){this.isPublic=!0}makeProtected(){this.isPublic=!1,this.requiredRoles=[]}require(e){e.length!==0&&(this.isPublic=!1),this.requiredRoles=e}get visibility(){return this.isPublic?"public":this.requiredRoles.length===0?"protected":"private"}hasChanges(){return this.record.hasChanges("is_public")||this.record.hasChangesDeep("required_roles")}get changes(){return this.record.changes}get initialState(){return this.record.initialState}toUpdateDTO(){return{id:this.id,is_public:this.isPublic,required_roles:this.requiredRoles}}commit(){this.record.commit()}static from(e){return new ee(e)}}class Be{constructor(e=re){this.fetch=e}async list(){return(await(await this.fetch("/_editor/api/access-control",{method:"GET",headers:{"Content-Type":"application/json"}})).json()).map(ee.from)}async update(e){const t=e.reduce((l,n)=>(n.hasChanges()&&l.push({id:n.id,...n.changes}),l),[]);return await(await fetch("/_editor/api/access-control",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}}const V=class{constructor(e){$(this,"record");this.dto=e,this.record=ne.from(e)}static from(e){return new V(e)}toDTO(){return this.record.toDTO()}get id(){return this.record.get("id")}get projectId(){return this.record.get("projectId")}get emailPatterns(){return this.record.get("emailPatterns")}set emailPatterns(e){this.record.set("emailPatterns",e)}get hasChanges(){return this.record.hasChangesDeep("emailPatterns")}get strategy(){return this.dto.emailPatterns.length===0?"inviteOnly":this.dto.emailPatterns.length==1&&this.dto.emailPatterns[0]=="*"?"anyone":"patternOnly"}get changes(){return this.record.changes}allowAnyone(){this.record.set("emailPatterns",["*"])}allowOnlyInvited(){this.record.set("emailPatterns",[])}static validate(e){let t="";return e.startsWith("@")&&(t=e.slice(1)),e.startsWith("*@")&&(t=e.slice(2)),t.match(V.pattern)!==null}};let q=V;$(q,"pattern",/^[a-z0-9.-]+\.[a-z]{2,}$/);class Ve{constructor(e=re){this.fetch=e}async update(e){const{emailPatterns:t}=e.changes;return t?(await this.fetch("/_editor/api/users/signup-policy",{method:"PUT",body:JSON.stringify({email_patterns:t}),headers:{"Content-Type":"application/json"}}),q.from({...e.toDTO(),emailPatterns:t})):e}async get(){const t=await(await this.fetch("/_editor/api/users/signup-policy")).json();return q.from({emailPatterns:t.email_patterns,id:t.id,projectId:t.project_id,createdAt:t.created_at})}}const Ge=C({__name:"RoleSelector",props:{value:{},roleOptions:{}},emits:["update:value"],setup(a,{emit:e}){const t=()=>{var m,c;if(!((m=Y.asyncComputed.result.value)!=null&&m.logged))return;const n=(c=Y.asyncComputed.result.value)==null?void 0:c.project_id;window.open(`https://cloud.abstra.io/projects/${n}/access-control?selected-panel=roles`,"__roles")},p=n=>{e("update:value",n)},l=C({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}});return(n,m)=>(g(),v(s(G),{value:n.value,mode:"multiple","onUpdate:value":p},{dropdownRender:r(({menuNode:c})=>{var i;return[o(s(l),{vnodes:c},null,8,["vnodes"]),o(s(xe),{style:{margin:"4px 0"}}),(i=s(Y).asyncComputed.result.value)!=null&&i.logged?(g(),v(s(S),{key:0,type:"default",style:{width:"100%"},onClick:t},{icon:r(()=>[o(s(Ne))]),default:r(()=>[h(" Create a new role ")]),_:1})):O("",!0)]}),default:r(()=>[(g(!0),j(E,null,Z(n.roleOptions,c=>(g(),v(s(ve),{key:c,value:c},{default:r(()=>[h(R(c),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"]))}}),Fe=a=>a==="internal"?Se:Ie(a),Le="Public",He="Requires Sign-Up",ze="Requires Role",X=C({__name:"DraggeableItem",props:{item:{},roleOptions:{}},emits:["update:roles"],setup(a,{emit:e}){const t=a,p=typeof t.roleOptions<"u",l=n=>{e("update:roles",n)};return(n,m)=>(g(),v(s(De),{style:{"list-style":"none"},class:"item"},{default:r(()=>[o(s(A),{align:"center"},{default:r(()=>[(g(),v(he(s(Fe)(t.item.type)),{style:{"flex-shrink":"0",width:"24px"}})),o(s(I),{ellipsis:"",content:n.item.title,style:{"max-width":"90%",margin:"10px"}},null,8,["content"])]),_:1}),p?(g(),v(Ge,{key:0,style:{width:"100%"},value:n.item.requiredRoles||[],"role-options":n.roleOptions||[],"onUpdate:value":l},null,8,["value","role-options"])):O("",!0)]),_:1}))}});const Je=C({__name:"DraggeableSelector",props:{accessControls:{},roles:{}},emits:["update:accessControls"],setup(a,{emit:e}){const t=a,p=y=>y.reduce((d,u)=>{switch(u.visibility){case"public":d.public.push(u);break;case"protected":d.protected.push(u);break;case"private":d.private.push(u);break;default:throw new Error("Invalid visibility")}return d},{public:[],protected:[],private:[]}),l=p(t.accessControls),n=k(l.public),m=k(l.protected),c=k(l.private);_e(()=>t.accessControls,y=>{const d=p(y);n.value=d.public,m.value=d.protected,c.value=d.private},{immediate:!0});const i=x(()=>t.roles.map(y=>y.name)),f=new Map,_=y=>{if("added"in y){const d=t.accessControls.findIndex(u=>u.id===y.added.element.id);if(d===-1)return!0;t.accessControls[d].makePublic(),e("update:accessControls",[...t.accessControls])}return!0},F=y=>{if("added"in y){const d=t.accessControls.findIndex(u=>u.id===y.added.element.id);if(d===-1)return!0;t.accessControls[d].makeProtected(),e("update:accessControls",[...t.accessControls])}return!0},D=y=>{if("added"in y){const d=y.added.element.id,u=f.get(d);if(u){const w=t.accessControls.findIndex(z=>z.id===y.added.element.id);if(w===-1)return!0;t.accessControls[w].require(u),e("update:accessControls",[...t.accessControls])}}return!0},L=y=>{const d=c.value[y];d&&f.set(d.id,d.requiredRoles)},H=(y,d)=>{const u=t.accessControls.findIndex(w=>w.id===y.id);u!==-1&&(t.accessControls[u].require(d),d.length===0?(c.value=c.value.filter(w=>w.id!==y.id),m.value=[y,...m.value]):t.accessControls[u].isPublic=!1,e("update:accessControls",[...t.accessControls]))};return(y,d)=>(g(),v(s(A),{justify:"space-between",gap:"middle"},{default:r(()=>[o(s(A),{vertical:"",class:"container"},{default:r(()=>[o(s(I),{strong:""},{default:r(()=>[h(R(s(Le)),1)]),_:1}),o(s(W),{list:n.value,"onUpdate:list":d[0]||(d[0]=u=>n.value=u),class:"content","item-key":"id",group:"drag","ghost-class":"ghost",onChange:_},{item:r(({element:u})=>[o(X,{class:"item",item:u},null,8,["item"])]),_:1},8,["list"])]),_:1}),o(s(A),{vertical:"",class:"container"},{default:r(()=>[o(s(I),{strong:""},{default:r(()=>[h(R(s(He)),1)]),_:1}),o(s(W),{list:m.value,"onUpdate:list":d[1]||(d[1]=u=>m.value=u),class:"content","item-key":"id",group:"drag","ghost-class":"ghost",onChange:F},{item:r(({element:u})=>[o(X,{class:"item",item:u},null,8,["item"])]),_:1},8,["list"])]),_:1}),o(s(A),{vertical:"",class:"container"},{default:r(()=>[o(s(I),{strong:""},{default:r(()=>[h(R(s(ze)),1)]),_:1}),o(s(W),{list:c.value,"onUpdate:list":d[2]||(d[2]=u=>c.value=u),class:"content","item-key":"id",group:"drag","ghost-class":"ghost",onChange:D,onStart:d[3]||(d[3]=u=>L(u.oldIndex))},{item:r(({element:u})=>[o(X,{class:"item",item:u,"role-options":i.value,"onUpdate:roles":w=>H(u,w)},null,8,["item","role-options","onUpdate:roles"])]),_:1},8,["list"])]),_:1})]),_:1}))}});const Me=be(Je,[["__scopeId","data-v-21c452a6"]]),We=C({__name:"DanglingRolesAlert",props:{danglingRoles:{}},setup(a){return(e,t)=>(g(),v(s(ie),{type:"warning","show-icon":"",closable:""},{description:r(()=>[o(s(I),null,{default:r(()=>[h("The following roles are not defined in the Cloud Console:")]),_:1}),(g(!0),j(E,null,Z(e.danglingRoles,p=>(g(),v(s(le),{key:p,style:{margin:"2px"},color:"red"},{default:r(()=>[h(R(p),1)]),_:2},1024))),128))]),_:1}))}}),Ye=C({__name:"View",props:{accessControls:{},roles:{},loading:{type:Boolean}},emits:["update:access-controls","save"],setup(a,{emit:e}){const t=a,p=x(()=>{var i;return((i=t.accessControls)==null?void 0:i.filter(f=>f.hasChanges()))||[]}),l=x(()=>p.value.length>0),m={save:async()=>{e("save")},hasChanges:()=>l.value},c=x(()=>{const i=t.accessControls.flatMap(_=>_.requiredRoles)||[],f=t.roles.map(_=>_.name)||[];return(i==null?void 0:i.filter(_=>!f.includes(_)))||[]});return(i,f)=>(g(),j(E,null,[o(s(A),{justify:"flex-end"},{default:r(()=>[o(Te,{model:m})]),_:1}),!i.loading&&c.value.length>0?(g(),v(We,{key:0,"dangling-roles":c.value},null,8,["dangling-roles"])):O("",!0),o(Me,{"access-controls":i.accessControls,roles:i.roles||[],"onUpdate:accessControls":f[0]||(f[0]=_=>e("update:access-controls",_))},null,8,["access-controls","roles"])],64))}}),Qe={style:{padding:"30px"}},Xe=C({__name:"View",props:{signupPolicy:{}},emits:["update:signup-policy","save"],setup(a,{emit:e}){const t=a,p=k(t.signupPolicy.strategy),l=k(t.signupPolicy.strategy==="patternOnly"?t.signupPolicy.emailPatterns:[]),n=k(t.signupPolicy.strategy==="patternOnly"?t.signupPolicy.emailPatterns.map(i=>({label:i})):[]),m=i=>{const f=i;if(l.value=f,f.length===0){c("inviteOnly");return}n.value=f.map(_=>({label:_})),t.signupPolicy.emailPatterns=i,e("update:signup-policy",t.signupPolicy)},c=i=>{p.value=i,i!=="patternOnly"&&(i==="anyone"&&t.signupPolicy.allowAnyone(),i==="inviteOnly"&&t.signupPolicy.allowOnlyInvited(),e("update:signup-policy",t.signupPolicy))};return(i,f)=>(g(),v(s(T),{direction:"vertical",style:{"padding-top":"8px"}},{default:r(()=>[o(s(se),null,{default:r(()=>[h(" Control which end users may sign-up to your app. ")]),_:1}),o(s(S),{disabled:!i.signupPolicy.hasChanges,type:"primary",onClick:f[0]||(f[0]=_=>e("save"))},{default:r(()=>[h(" Save changes ")]),_:1},8,["disabled"]),Ce("div",Qe,[o(s(se),{strong:""},{default:r(()=>[h(" Allow self sign-up? ")]),_:1}),o(s(we),{value:p.value,"onUpdate:value":c},{default:r(()=>[o(s(T),{direction:"vertical"},{default:r(()=>[o(s(M),{value:"inviteOnly"},{default:r(()=>[h("No, users must be added by me.")]),_:1}),o(s(T),null,{default:r(()=>[o(s(M),{value:"patternOnly"},{default:r(()=>[h("Yes, but only for users in")]),_:1}),o(s(G),{mode:"tags",value:l.value,style:{"min-width":"250px"},placeholder:"@domain.com or sub.domain.com",disabled:p.value!=="patternOnly",options:n.value,"dropdown-match-select-width":"",open:!1,"onUpdate:value":m},null,8,["value","disabled","options"])]),_:1}),o(s(M),{value:"anyone"},{default:r(()=>[h("Yes, for anyone")]),_:1})]),_:1})]),_:1},8,["value"])])]),_:1}))}}),Ze=C({__name:"View",props:{loading:{type:Boolean},users:{}},emits:["create","edit","delete"],setup(a,{emit:e}){const t=a,p=x(()=>{var l;return{columns:[{name:"Email"},{name:"Roles"},{name:"",align:"right"}],rows:(l=t.users.map(n=>({key:n.email,cells:[{type:"text",text:n.email},{type:"slot",key:"roles",payload:{roles:n.roles}},{type:"actions",actions:[{icon:je,label:"Edit",onClick:()=>e("edit",n)},{icon:Pe,label:"Delete",onClick:()=>e("delete",n)}]}]})))!=null?l:[]}});return(l,n)=>(g(),j(E,null,[o(qe,{"entity-name":"users",title:"",loading:l.loading,description:"List all user profiles to be used for testing purposes.","empty-title":"No users yet",table:p.value,"create-button-text":"Add users",onCreate:n[0]||(n[0]=m=>e("create",m))},{roles:r(({payload:m})=>[(g(!0),j(E,null,Z(m.roles,c=>(g(),v(s(le),{key:c,bordered:""},{default:r(()=>[h(R(c),1)]),_:2},1024))),128))]),_:1},8,["loading","table"]),o(s(ie),{type:"info","show-icon":"",closable:""},{description:r(()=>[o(s(I),null,{default:r(()=>[h("Configurations made here only affect your local environment. To manage real users, please access the Cloud Console.")]),_:1})]),_:1})],64))}}),Ke=C({__name:"NewUser",props:{roleOptions:{}},emits:["created","cancel"],setup(a,{emit:e}){const p=a.roleOptions.map(c=>({label:c.name,value:c.name})),l=Oe({email:"",roles:[]});function n(){e("cancel")}function m(){!l.email||e("created",l)}return(c,i)=>(g(),v(s(ce),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:n},{extra:r(()=>[o(s(T),null,{default:r(()=>[o(s(S),{onClick:n},{default:r(()=>[h("Cancel")]),_:1}),o(s(S),{type:"primary",onClick:m},{default:r(()=>[h("Submit")]),_:1})]),_:1})]),default:r(()=>[o(s(ue),{model:l,layout:"vertical"},{default:r(()=>[o(s(B),{key:"email",label:"Email",required:!0},{default:r(()=>[o(s(ae),{value:l.email,"onUpdate:value":i[0]||(i[0]=f=>l.email=f)},null,8,["value"])]),_:1}),o(s(B),{key:"role",label:"Role"},{default:r(()=>[o(s(G),{value:l.roles,"onUpdate:value":i[1]||(i[1]=f=>l.roles=f),mode:"multiple",options:s(p)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),et=C({__name:"UpdateUser",props:{roleOptions:{},value:{}},emits:["updated","cancel"],setup(a,{emit:e}){const t=a,p=t.roleOptions.map(m=>({label:m.name,value:m.name}));function l(){e("cancel")}function n(){e("updated",t.value)}return(m,c)=>(g(),v(s(ce),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:l},{extra:r(()=>[o(s(T),null,{default:r(()=>[o(s(S),{onClick:l},{default:r(()=>[h("Cancel")]),_:1}),o(s(S),{type:"primary",onClick:n},{default:r(()=>[h("Submit")]),_:1})]),_:1})]),default:r(()=>[o(s(ue),{layout:"vertical"},{default:r(()=>[o(s(B),{key:"email",label:"Email"},{default:r(()=>[o(s(ae),{value:m.value.email,"onUpdate:value":c[0]||(c[0]=i=>m.value.email=i),disabled:""},null,8,["value"])]),_:1}),o(s(B),{key:"role",label:"Role"},{default:r(()=>[o(s(G),{value:m.value.roles,"onUpdate:value":c[1]||(c[1]=i=>m.value.roles=i),mode:"multiple",options:s(p)},null,8,["value","options"])]),_:1})]),_:1})]),_:1}))}}),zt=C({__name:"AccessControlEditor",setup(a){const e=()=>{t.value={type:"initial"}},t=k({type:"initial"}),p=k("enforcement"),l=new Be,{result:n,refetch:m}=N(async()=>await l.list()),c=x(()=>{var P;return((P=n.value)==null?void 0:P.filter(b=>b.hasChanges()))||[]}),i=async()=>{await l.update(c.value),await m()},f=new ke,{result:_,loading:F,refetch:D}=N(()=>f.list()),L=async P=>{await f.create(P),await D(),e()},H=async P=>{await f.update(P.id,P.changes),await D(),e()},y=async P=>{await f.delete(P.id),await D(),e()},d=new Ve,{result:u,refetch:w}=N(()=>d.get()),z=async()=>{!u.value||(await d.update(u.value),await w())},de=new Ue,{result:J,loading:pe}=N(()=>de.list(100,0));return(P,b)=>(g(),v(ge,null,{default:r(()=>[o(s(Ee),null,{default:r(()=>[h("Access Control")]),_:1}),o(s(Re),{"active-key":p.value,"onUpdate:activeKey":b[0]||(b[0]=U=>p.value=U)},{default:r(()=>[o(s(Q),{key:"enforcement",tab:"Security Level"}),o(s(Q),{key:"signup-policy",tab:"Sign Up Policy"}),o(s(Q),{key:"users",tab:"Test Users"})]),_:1},8,["active-key"]),p.value==="enforcement"&&s(n)?(g(),v(Ye,{key:0,"access-controls":s(n),"onUpdate:accessControls":b[1]||(b[1]=U=>te(n)?n.value=U:null),roles:s(J)||[],loading:s(pe),onSave:i},null,8,["access-controls","roles","loading"])):O("",!0),p.value==="users"?(g(),v(s(Ze),{key:1,loading:s(F),users:s(_)||[],onDelete:y,onCreate:b[2]||(b[2]=()=>t.value={type:"user-create"}),onEdit:b[3]||(b[3]=U=>t.value={type:"user-update",user:U})},null,8,["loading","users"])):O("",!0),p.value==="signup-policy"&&s(u)?(g(),v(Xe,{key:2,"signup-policy":s(u),"onUpdate:signupPolicy":b[4]||(b[4]=U=>te(u)?u.value=U:null),onSave:z},null,8,["signup-policy"])):O("",!0),t.value.type==="user-create"?(g(),v(s(Ke),{key:3,"role-options":s(J)||[],onCreated:L,onCancel:e},null,8,["role-options"])):O("",!0),t.value.type==="user-update"?(g(),v(s(et),{key:4,value:t.value.user,"role-options":s(J)||[],onUpdated:H,onCancel:e},null,8,["value","role-options"])):O("",!0)]),_:1}))}});export{zt as default};
//# sourceMappingURL=AccessControlEditor.98038ec1.js.map
