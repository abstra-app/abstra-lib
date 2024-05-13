var ye=Object.defineProperty;var ve=(l,e,s)=>e in l?ye(l,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[e]=s;var B=(l,e,s)=>(ve(l,typeof e!="symbol"?e+"":e,s),s);import{C as he}from"./ContentLayout.63582114.js";import{l as ie}from"./fetch.8116357d.js";import{E as ue}from"./record.809c2984.js";import{d as w,Z as M,J as O,b as g,ew as C,dl as be,ey as I,eB as _e,e as P,f as o,eI as Ce,c as b,w as a,u as t,bG as D,as as v,eF as oe,cD as we,eH as x,aE as q,af as L,eG as Pe,r as S,K as ke,x as Ae,cE as $,cB as Q,ak as Oe,eS as Ue,I as Ie,bz as ce,dj as ne}from"./outputWidgets.7f142bb6.js";import{E as Se,a as Re}from"./repository.0dd344b6.js";import{a as Z}from"./asyncComputed.097c7c39.js";import"./workspaces.2aa7d4ff.js";import{l as H}from"./login.8cc43174.js";import"./envVars.06ff15f2.js";import{d as X,F as ee}from"./vuedraggable.umd.f14f898a.js";import{P as xe,A as te,T as Ve}from"./TabPane.b052b7a6.js";import{A as je}from"./index.de2a8b07.js";import{s as De}from"./metadata.592dd68c.js";import{I as Te,F as $e}from"./PhKey.vue.ae1f2da4.js";import{G as He}from"./PhIdentificationBadge.vue.f5020414.js";import{G as Ee}from"./PhKanban.vue.6e3e5f13.js";import{A as V}from"./Text.f6115a15.js";import{A as U}from"./index.4eb94557.js";import{A as qe}from"./Item.8b0c67cf.js";import{A as j}from"./Paragraph.743c1f70.js";import{A as de}from"./index.fc201775.js";import{A as pe}from"./index.44209683.js";import{S as Ne}from"./SaveButton.c306a682.js";import{C as Be}from"./CrudView.1eb0709e.js";import{G as Me}from"./PhPencil.vue.95843261.js";import{A as F,F as me}from"./Form.67424860.js";import{A as fe}from"./index.8f6b7b38.js";import{A as Ze}from"./Title.c44cffd7.js";import"./pubsub.6e53ebb3.js";import"./router.24c13f8a.js";import"./popupNotifcation.18460d90.js";import"./runnerData.6c3a7c9e.js";import"./url.1a0f95e4.js";import"./hasIn.c728f912.js";import"./PhCheckCircle.vue.209c04e7.js";import"./PhScroll.vue.b51fc029.js";import"./PhWebhooksLogo.vue.3703accd.js";import"./Base.b8530494.js";import"./UnsavedChangesHandler.d6a3ce47.js";import"./ExclamationCircleOutlined.038a88a9.js";import"./Modal.8885582c.js";import"./Link.cc03eaff.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.dfb6d707.js";import"./BookOutlined.b7e9f6ac.js";import"./isNumeric.75337b1e.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[e]="ad3a1f81-7932-4607-9288-434b840838e8",l._sentryDebugIdIdentifier="sentry-dbid-ad3a1f81-7932-4607-9288-434b840838e8")}catch{}})();const Fe=["width","height","fill","transform"],Ge={key:0},Le=P("path",{d:"M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z"},null,-1),ze=[Le],Je={key:1},We=P("path",{d:"M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",opacity:"0.2"},null,-1),Ye=P("path",{d:"M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"},null,-1),Ke=[We,Ye],Qe={key:2},Xe=P("path",{d:"M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"},null,-1),et=[Xe],tt={key:3},st=P("path",{d:"M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z"},null,-1),ot=[st],at={key:4},rt=P("path",{d:"M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"},null,-1),nt=[rt],lt={key:5},it=P("path",{d:"M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z"},null,-1),ut=[it],ct={name:"PhHouse"},dt=w({...ct,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(l){const e=l,s=M("weight","regular"),c=M("size","1em"),i=M("color","currentColor"),r=M("mirrored",!1),p=O(()=>{var y;return(y=e.weight)!=null?y:s}),d=O(()=>{var y;return(y=e.size)!=null?y:c}),u=O(()=>{var y;return(y=e.color)!=null?y:i}),f=O(()=>e.mirrored!==void 0?e.mirrored?"scale(-1, 1)":void 0:r?"scale(-1, 1)":void 0);return(y,N)=>(g(),C("svg",_e({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:d.value,height:d.value,fill:u.value,transform:f.value},y.$attrs),[be(y.$slots,"default"),p.value==="bold"?(g(),C("g",Ge,ze)):p.value==="duotone"?(g(),C("g",Je,Ke)):p.value==="fill"?(g(),C("g",Qe,et)):p.value==="light"?(g(),C("g",tt,ot)):p.value==="regular"?(g(),C("g",at,nt)):p.value==="thin"?(g(),C("g",lt,ut)):I("",!0)],16,Fe))}});function le(l){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?Object(arguments[e]):{},c=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(s).filter(function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable}))),c.forEach(function(i){pt(l,i,s[i])})}return l}function pt(l,e,s){return e in l?Object.defineProperty(l,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[e]=s,l}var ae=function(e,s){var c=le({},e,s.attrs);return o(Ce,le({},c,{icon:xe}),null)};ae.displayName="PlusOutlined";ae.inheritAttrs=!1;const mt=ae;class re{constructor(e){B(this,"record");this.record=ue.from(e)}get id(){return this.record.get("id")}get type(){return this.record.get("type")}get title(){return this.record.get("title")}get isPublic(){return this.record.get("is_public")}set isPublic(e){e&&this.record.set("required_roles",[]),this.record.set("is_public",e)}get requiredRoles(){return this.record.get("required_roles")}set requiredRoles(e){e.length!==0&&this.record.set("is_public",!1),this.record.set("required_roles",e)}makePublic(){this.isPublic=!0}makeProtected(){this.isPublic=!1,this.requiredRoles=[]}require(e){e.length!==0&&(this.isPublic=!1),this.requiredRoles=e}get visibility(){return this.isPublic?"public":this.requiredRoles.length===0?"protected":"private"}hasChanges(){return this.record.hasChanges("is_public")||this.record.hasChangesDeep("required_roles")}get changes(){return this.record.changes}get initialState(){return this.record.initialState}toUpdateDTO(){return{id:this.id,is_public:this.isPublic,required_roles:this.requiredRoles}}commit(){this.record.commit()}static from(e){return new re(e)}}class ft{constructor(e=ie){this.fetch=e}async list(){return(await(await this.fetch("/_editor/api/access-control",{method:"GET",headers:{"Content-Type":"application/json"}})).json()).map(re.from)}async update(e){const s=e.reduce((i,r)=>(r.hasChanges()&&i.push({id:r.id,...r.changes}),i),[]);return await(await fetch("/_editor/api/access-control",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).json()}}const G=class{constructor(e){B(this,"record");this.dto=e,this.record=ue.from(e)}static from(e){return new G(e)}toDTO(){return this.record.toDTO()}get id(){return this.record.get("id")}get projectId(){return this.record.get("projectId")}get emailPatterns(){return this.record.get("emailPatterns")}set emailPatterns(e){this.record.set("emailPatterns",e)}get hasChanges(){return this.record.hasChangesDeep("emailPatterns")}get strategy(){return this.dto.emailPatterns.length===0?"inviteOnly":this.dto.emailPatterns.length==1&&this.dto.emailPatterns[0]=="*"?"anyone":"patternOnly"}get changes(){return this.record.changes}allowAnyone(){this.record.set("emailPatterns",["*"])}allowOnlyInvited(){this.record.set("emailPatterns",[])}static validate(e){let s="";return e.startsWith("@")&&(s=e.slice(1)),e.startsWith("*@")&&(s=e.slice(2)),s.match(G.pattern)!==null}};let E=G;B(E,"pattern",/^[a-z0-9.-]+\.[a-z]{2,}$/);class gt{constructor(e=ie){this.fetch=e}async update(e){const{emailPatterns:s}=e.changes;return s?(await this.fetch("/_editor/api/users/signup-policy",{method:"PUT",body:JSON.stringify({email_patterns:s}),headers:{"Content-Type":"application/json"}}),E.from({...e.toDTO(),emailPatterns:s})):e}async get(){const s=await(await this.fetch("/_editor/api/users/signup-policy")).json();return E.from({emailPatterns:s.email_patterns,id:s.id,projectId:s.project_id,createdAt:s.created_at})}}const yt=w({__name:"RoleSelector",props:{value:{},roleOptions:{}},emits:["update:value"],setup(l,{emit:e}){const s=()=>{var p,d;if(!((p=H.asyncComputed.result.value)!=null&&p.logged))return;const r=(d=H.asyncComputed.result.value)==null?void 0:d.project_id;window.open(`https://cloud.abstra.io/projects/${r}/access-control?selected-panel=roles`,"__roles")},c=r=>{e("update:value",r)},i=w({props:{vnodes:{type:Object,required:!0}},render(){return this.vnodes}});return(r,p)=>(g(),b(t(L),{value:r.value,mode:"multiple","onUpdate:value":c},{dropdownRender:a(({menuNode:d})=>{var u;return[o(t(i),{vnodes:d},null,8,["vnodes"]),o(t(je),{style:{margin:"4px 0"}}),(u=t(H).asyncComputed.result.value)!=null&&u.logged?(g(),b(t(D),{key:0,type:"default",style:{width:"100%"},onClick:s},{icon:a(()=>[o(t(mt))]),default:a(()=>[v(" Create a new role ")]),_:1})):I("",!0)]}),default:a(()=>[(g(!0),C(q,null,oe(r.roleOptions,d=>(g(),b(t(we),{key:d,value:d},{default:a(()=>[v(x(d),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"]))}}),vt=l=>l==="kanban"?Ee:l==="home"?dt:De(l),ht=Te,bt="Public",_t="Pages that are accessible to anyone with the link. No sign-up required.",Ct=He,wt="Requires Identification",Pt=$e,kt="Requires Role",se=w({__name:"DraggeableItem",props:{item:{},roleOptions:{}},emits:["update:roles"],setup(l,{emit:e}){const s=l,c=typeof s.roleOptions<"u",i=r=>{e("update:roles",r)};return(r,p)=>(g(),b(t(qe),{style:{"list-style":"none"},class:"item"},{default:a(()=>[o(t(U),{align:"center"},{default:a(()=>[(g(),b(Pe(t(vt)(s.item.type)),{style:{"flex-shrink":"0",width:"24px"}})),o(t(V),{ellipsis:"",content:r.item.title,style:{"max-width":"90%",margin:"10px"}},null,8,["content"])]),_:1}),c?(g(),b(yt,{key:0,style:{width:"100%"},value:r.item.requiredRoles||[],"role-options":r.roleOptions||[],"onUpdate:value":i},null,8,["value","role-options"])):I("",!0)]),_:1}))}});const At=["href"],Ot=w({__name:"DraggeableSelector",props:{accessControls:{},roles:{}},emits:["update:accessControls","see-signup-policy","see-console-access-control","see-editor-test-users"],setup(l,{emit:e}){const s=l,c=h=>h.reduce((n,m)=>{switch(m.visibility){case"public":n.public.push(m);break;case"protected":n.protected.push(m);break;case"private":n.private.push(m);break;default:throw new Error("Invalid visibility")}return n},{public:[],protected:[],private:[]}),i=c(s.accessControls),r=S(i.public),p=S(i.protected),d=S(i.private);ke(()=>s.accessControls,h=>{const n=c(h);r.value=n.public,p.value=n.protected,d.value=n.private},{immediate:!0});const u=O(()=>s.roles.map(h=>h.name)),f=new Map,y=h=>{if("added"in h){const n=s.accessControls.findIndex(m=>m.id===h.added.element.id);if(n===-1)return!0;s.accessControls[n].makePublic(),e("update:accessControls",[...s.accessControls])}return!0},N=h=>{if("added"in h){const n=s.accessControls.findIndex(m=>m.id===h.added.element.id);if(n===-1)return!0;s.accessControls[n].makeProtected(),e("update:accessControls",[...s.accessControls])}return!0},T=h=>{if("added"in h){const n=h.added.element.id,m=f.get(n);if(m){const k=s.accessControls.findIndex(Y=>Y.id===h.added.element.id);if(k===-1)return!0;s.accessControls[k].require(m),e("update:accessControls",[...s.accessControls])}}return!0},z=h=>{const n=d.value[h];n&&f.set(n.id,n.requiredRoles)},J=(h,n)=>{const m=s.accessControls.findIndex(k=>k.id===h.id);m!==-1&&(s.accessControls[m].require(n),n.length===0?(d.value=d.value.filter(k=>k.id!==h.id),p.value=[h,...p.value]):s.accessControls[m].isPublic=!1,e("update:accessControls",[...s.accessControls]))},W=()=>{var n,m;return(n=H.asyncComputed.result.value)!=null&&n.logged?`https://cloud.abstra.io/projects/${(m=H.asyncComputed.result.value)==null?void 0:m.project_id}/access-control?selected-panel=roles`:"https://cloud.abstra.io"};return(h,n)=>(g(),b(t(U),{justify:"space-between",gap:"middle"},{default:a(()=>[o(t(U),{vertical:"",class:"container"},{default:a(()=>[o(t(U),{class:"container-title"},{default:a(()=>[o(t(ht)),o(t(V),{strong:""},{default:a(()=>[v(x(t(bt)),1)]),_:1})]),_:1}),o(t(j),null,{default:a(()=>[v(x(t(_t)),1)]),_:1}),o(t(X),{list:r.value,"onUpdate:list":n[0]||(n[0]=m=>r.value=m),class:"content","item-key":"id","force-fallback":t(ee),group:"drag","ghost-class":"ghost",onChange:y},{item:a(({element:m})=>[o(se,{class:"item",item:m},null,8,["item"])]),_:1},8,["list","force-fallback"])]),_:1}),o(t(U),{vertical:"",class:"container"},{default:a(()=>[o(t(U),{class:"container-title"},{default:a(()=>[o(t(Ct)),o(t(V),{strong:""},{default:a(()=>[v(x(t(wt)),1)]),_:1})]),_:1}),o(t(j),null,{default:a(()=>[v(" Pages that are accessible to signed in users, according to the "),P("a",{onClick:n[1]||(n[1]=m=>e("see-signup-policy"))},"signup policy"),v(". ")]),_:1}),o(t(X),{list:p.value,"onUpdate:list":n[2]||(n[2]=m=>p.value=m),class:"content","item-key":"id","force-fallback":t(ee),group:"drag","ghost-class":"ghost",onChange:N},{item:a(({element:m})=>[o(se,{class:"item",item:m},null,8,["item"])]),_:1},8,["list","force-fallback"])]),_:1}),o(t(U),{vertical:"",class:"container"},{default:a(()=>[o(t(U),{class:"container-title"},{default:a(()=>[o(t(Pt)),o(t(V),{strong:""},{default:a(()=>[v(x(t(kt)),1)]),_:1})]),_:1}),o(t(j),null,{default:a(()=>[v(" Pages that are accessible to users with specific roles. Those roles can be assigned in the "),P("a",{target:"_blank",href:W()},"console (production)",8,At),v(" or in the "),P("a",{onClick:n[3]||(n[3]=m=>e("see-editor-test-users"))},'"Test users" tab (local environment)'),v(". ")]),_:1}),o(t(X),{list:d.value,"onUpdate:list":n[4]||(n[4]=m=>d.value=m),class:"content","item-key":"id","force-fallback":t(ee),group:"drag","ghost-class":"ghost",onChange:T,onStart:n[5]||(n[5]=m=>z(m.oldIndex))},{item:a(({element:m})=>[o(se,{class:"item",item:m,"role-options":u.value,"onUpdate:roles":k=>J(m,k)},null,8,["item","role-options","onUpdate:roles"])]),_:1},8,["list","force-fallback"])]),_:1})]),_:1}))}});const Ut=Ae(Ot,[["__scopeId","data-v-11d3a701"]]),It=w({__name:"DanglingRolesAlert",props:{danglingRoles:{}},setup(l){return(e,s)=>(g(),b(t(pe),{type:"warning","show-icon":"",closable:""},{description:a(()=>[o(t(V),null,{default:a(()=>[v("The following roles are not defined in the Cloud Console:")]),_:1}),(g(!0),C(q,null,oe(e.danglingRoles,c=>(g(),b(t(de),{key:c,style:{margin:"2px"},color:"red"},{default:a(()=>[v(x(c),1)]),_:2},1024))),128))]),_:1}))}}),St=w({__name:"View",props:{accessControls:{},roles:{},loading:{type:Boolean}},emits:["update:access-controls","save","see-signup-policy","see-console-access-control","see-editor-test-users"],setup(l,{emit:e}){const s=l,c=O(()=>{var u;return((u=s.accessControls)==null?void 0:u.filter(f=>f.hasChanges()))||[]}),i=O(()=>c.value.length>0),p={save:async()=>{e("save")},hasChanges:()=>i.value},d=O(()=>{const u=s.accessControls.flatMap(y=>y.requiredRoles)||[],f=s.roles.map(y=>y.name)||[];return(u==null?void 0:u.filter(y=>!f.includes(y)))||[]});return(u,f)=>(g(),C(q,null,[o(t(U),{justify:"flex-end"},{default:a(()=>[o(Ne,{model:p})]),_:1}),!u.loading&&d.value.length>0?(g(),b(It,{key:0,"dangling-roles":d.value},null,8,["dangling-roles"])):I("",!0),o(Ut,{"access-controls":u.accessControls,roles:u.roles||[],"onUpdate:accessControls":f[0]||(f[0]=y=>e("update:access-controls",y)),onSeeConsoleAccessControl:f[1]||(f[1]=y=>e("see-console-access-control")),onSeeEditorTestUsers:f[2]||(f[2]=y=>e("see-editor-test-users")),onSeeSignupPolicy:f[3]||(f[3]=y=>e("see-signup-policy"))},null,8,["access-controls","roles"])],64))}}),Rt={style:{padding:"30px"}},xt=w({__name:"View",props:{signupPolicy:{}},emits:["update:signup-policy","save"],setup(l,{emit:e}){const s=l,c=S(s.signupPolicy.strategy),i=S(s.signupPolicy.strategy==="patternOnly"?s.signupPolicy.emailPatterns:[]),r=S(s.signupPolicy.strategy==="patternOnly"?s.signupPolicy.emailPatterns.map(u=>({label:u})):[]),p=u=>{const f=u;if(i.value=f,f.length===0){d("inviteOnly");return}r.value=f.map(y=>({label:y})),s.signupPolicy.emailPatterns=u,e("update:signup-policy",s.signupPolicy)},d=u=>{c.value=u,u!=="patternOnly"&&(u==="anyone"&&s.signupPolicy.allowAnyone(),u==="inviteOnly"&&s.signupPolicy.allowOnlyInvited(),e("update:signup-policy",s.signupPolicy))};return(u,f)=>(g(),b(t($),{direction:"vertical",style:{"padding-top":"8px"}},{default:a(()=>[o(t(j),null,{default:a(()=>[v(" Control which end users may sign-up to your app. ")]),_:1}),o(t(D),{disabled:!u.signupPolicy.hasChanges,type:"primary",onClick:f[0]||(f[0]=y=>e("save"))},{default:a(()=>[v(" Save changes ")]),_:1},8,["disabled"]),P("div",Rt,[o(t(j),{strong:""},{default:a(()=>[v(" Allow self sign-up? ")]),_:1}),o(t(Oe),{value:c.value,"onUpdate:value":d},{default:a(()=>[o(t($),{direction:"vertical"},{default:a(()=>[o(t(Q),{value:"inviteOnly"},{default:a(()=>[v("No, users must be added by me.")]),_:1}),o(t($),null,{default:a(()=>[o(t(Q),{value:"patternOnly"},{default:a(()=>[v("Yes, but only for users in")]),_:1}),o(t(L),{mode:"tags",value:i.value,style:{"min-width":"250px"},placeholder:"@domain.com or sub.domain.com",disabled:c.value!=="patternOnly",options:r.value,"dropdown-match-select-width":"",open:!1,"onUpdate:value":p},null,8,["value","disabled","options"])]),_:1}),o(t(Q),{value:"anyone"},{default:a(()=>[v("Yes, for anyone")]),_:1})]),_:1})]),_:1},8,["value"])])]),_:1}))}}),Vt=w({__name:"View",props:{loading:{type:Boolean},users:{}},emits:["create","edit","delete"],setup(l,{emit:e}){const s=l,c=O(()=>{var i;return{columns:[{name:"Email"},{name:"Roles"},{name:"",align:"right"}],rows:(i=s.users.map(r=>({key:r.email,cells:[{type:"text",text:r.email},{type:"slot",key:"roles",payload:{roles:r.roles}},{type:"actions",actions:[{icon:Me,label:"Edit",onClick:()=>e("edit",r)},{icon:Ue,label:"Delete",onClick:()=>e("delete",r)}]}]})))!=null?i:[]}});return(i,r)=>(g(),C(q,null,[o(Be,{"entity-name":"users",title:"",loading:i.loading,description:"List all user profiles to be used for testing purposes.","empty-title":"No users yet",table:c.value,"create-button-text":"Add users",onCreate:r[0]||(r[0]=p=>e("create",p))},{roles:a(({payload:p})=>[(g(!0),C(q,null,oe(p.roles,d=>(g(),b(t(de),{key:d,bordered:""},{default:a(()=>[v(x(d),1)]),_:2},1024))),128))]),_:1},8,["loading","table"]),o(t(pe),{type:"info","show-icon":"",closable:""},{description:a(()=>[o(t(V),null,{default:a(()=>[v("Configurations made here only affect your local environment. To manage real users, please access the Cloud Console.")]),_:1})]),_:1})],64))}}),jt=w({__name:"NewUser",props:{roleOptions:{}},emits:["created","cancel"],setup(l,{emit:e}){const c=l.roleOptions.map(d=>({label:d.name,value:d.name})),i=Ie({email:"",roles:[]});function r(){e("cancel")}function p(){!i.email||e("created",i)}return(d,u)=>(g(),b(t(fe),{open:"",title:"New user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:r},{extra:a(()=>[o(t($),null,{default:a(()=>[o(t(D),{onClick:r},{default:a(()=>[v("Cancel")]),_:1}),o(t(D),{type:"primary",onClick:p},{default:a(()=>[v("Submit")]),_:1})]),_:1})]),default:a(()=>[o(t(me),{model:i,layout:"vertical"},{default:a(()=>[o(t(F),{key:"email",label:"Email",required:!0},{default:a(()=>[o(t(ce),{value:i.email,"onUpdate:value":u[0]||(u[0]=f=>i.email=f)},null,8,["value"])]),_:1}),o(t(F),{key:"role",label:"Role"},{default:a(()=>[o(t(L),{value:i.roles,"onUpdate:value":u[1]||(u[1]=f=>i.roles=f),mode:"multiple",options:t(c)},null,8,["value","options"])]),_:1})]),_:1},8,["model"])]),_:1}))}}),Dt=w({__name:"UpdateUser",props:{roleOptions:{},value:{}},emits:["updated","cancel"],setup(l,{emit:e}){const s=l,c=s.roleOptions.map(p=>({label:p.name,value:p.name}));function i(){e("cancel")}function r(){e("updated",s.value)}return(p,d)=>(g(),b(t(fe),{open:"",title:"Update user",width:720,"body-style":{paddingBottom:"80px"},"footer-style":{textAlign:"right"},onClose:i},{extra:a(()=>[o(t($),null,{default:a(()=>[o(t(D),{onClick:i},{default:a(()=>[v("Cancel")]),_:1}),o(t(D),{type:"primary",onClick:r},{default:a(()=>[v("Submit")]),_:1})]),_:1})]),default:a(()=>[o(t(me),{layout:"vertical"},{default:a(()=>[o(t(F),{key:"email",label:"Email"},{default:a(()=>[o(t(ce),{value:p.value.email,"onUpdate:value":d[0]||(d[0]=u=>p.value.email=u),disabled:""},null,8,["value"])]),_:1}),o(t(F),{key:"role",label:"Role"},{default:a(()=>[o(t(L),{value:p.value.roles,"onUpdate:value":d[1]||(d[1]=u=>p.value.roles=u),mode:"multiple",options:t(c)},null,8,["value","options"])]),_:1})]),_:1})]),_:1}))}}),Us=w({__name:"AccessControlEditor",setup(l){const e=()=>{s.value={type:"initial"}},s=S({type:"initial"}),c=S("enforcement"),i=new ft,{result:r,refetch:p}=Z(async()=>await i.list()),d=O(()=>{var A;return((A=r.value)==null?void 0:A.filter(_=>_.hasChanges()))||[]}),u=async()=>{await i.update(d.value),await p()},f=new Se,{result:y,loading:N,refetch:T}=Z(()=>f.list()),z=async A=>{await f.create(A),await T(),e()},J=async A=>{await f.update(A.id,A.changes),await T(),e()},W=async A=>{await f.delete(A.id),await T(),e()},h=new gt,{result:n,refetch:m}=Z(()=>h.get()),k=async()=>{!n.value||(await h.update(n.value),await m())},Y=new Re,{result:K,loading:ge}=Z(()=>Y.list(100,0));return(A,_)=>(g(),b(he,null,{default:a(()=>[o(t(Ze),null,{default:a(()=>[v("Access Control")]),_:1}),o(t(j),null,{default:a(()=>[v(" Configure the security level of your application. You can define which pages are accessible to signed-in users, which pages are accessible to users with specific roles, and which pages are accessible to everyone. ")]),_:1}),o(t(Ve),{"active-key":c.value,"onUpdate:activeKey":_[0]||(_[0]=R=>c.value=R)},{default:a(()=>[o(t(te),{key:"enforcement",tab:"Security Level"}),o(t(te),{key:"signup-policy",tab:"Sign-Up Policy"}),o(t(te),{key:"users",tab:"Test Users"})]),_:1},8,["active-key"]),c.value==="enforcement"&&t(r)?(g(),b(St,{key:0,"access-controls":t(r),"onUpdate:accessControls":_[1]||(_[1]=R=>ne(r)?r.value=R:null),roles:t(K)||[],loading:t(ge),onSave:u,onSeeConsoleAccessControl:_[2]||(_[2]=()=>c.value="roles"),onSeeEditorTestUsers:_[3]||(_[3]=()=>c.value="users"),onSeeSignupPolicy:_[4]||(_[4]=()=>c.value="signup-policy")},null,8,["access-controls","roles","loading"])):I("",!0),c.value==="users"?(g(),b(t(Vt),{key:1,loading:t(N),users:t(y)||[],onDelete:W,onCreate:_[5]||(_[5]=()=>s.value={type:"user-create"}),onEdit:_[6]||(_[6]=R=>s.value={type:"user-update",user:R})},null,8,["loading","users"])):I("",!0),c.value==="signup-policy"&&t(n)?(g(),b(xt,{key:2,"signup-policy":t(n),"onUpdate:signupPolicy":_[7]||(_[7]=R=>ne(n)?n.value=R:null),onSave:k},null,8,["signup-policy"])):I("",!0),s.value.type==="user-create"?(g(),b(t(jt),{key:3,"role-options":t(K)||[],onCreated:z,onCancel:e},null,8,["role-options"])):I("",!0),s.value.type==="user-update"?(g(),b(t(Dt),{key:4,value:s.value.user,"role-options":t(K)||[],onUpdated:J,onCancel:e},null,8,["value","role-options"])):I("",!0)]),_:1}))}});export{Us as default};
//# sourceMappingURL=AccessControlEditor.aa0066bb.js.map
