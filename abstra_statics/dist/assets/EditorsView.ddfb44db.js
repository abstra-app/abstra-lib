var f=Object.defineProperty;var p=(i,e,t)=>e in i?f(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var a=(i,e,t)=>(p(i,typeof e!="symbol"?e+"":e,t),t);import{C as g}from"./CrudView.f7dfd6cc.js";import{e as n,f as c,ep as b,d as w,ea as y,eo as I,o as v,c as M,u as l}from"./index.b24b0be8.js";import{a as h}from"./gateway.5b2b2bc6.js";import{M as z}from"./member.a1a19b02.js";import"./tables.b183d093.js";import{a as u}from"./ant-design.201e3fba.js";import"./router.0ab78250.js";import"./Badge.78b81bf9.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c4bbb5da.js";import"./BookOutlined.9bd991bf.js";import"./url.ed3aee72.js";import"./PhDotsThreeVertical.vue.4434f9fc.js";import"./index.c895cbb9.js";import"./index.d8ea2ac2.js";import"./popupNotifcation.5870d19b.js";import"./record.45c57538.js";import"./string.9be7b1c9.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[e]="87b9dec5-8e8a-4981-ae3d-017ef4885219",i._sentryDebugIdIdentifier="sentry-dbid-87b9dec5-8e8a-4981-ae3d-017ef4885219")}catch{}})();class C{constructor({authorEmail:e,organizationId:t,api:o,handlers:s}){a(this,"members",n([]));a(this,"selectedMember",n(null));a(this,"draftMember",n(null));a(this,"creationFields",c(()=>this.getCreationFields()));a(this,"table",c(()=>this.makeCrudViewTable()));a(this,"loading",n(!1));a(this,"authorEmail");a(this,"organizationId");a(this,"api");a(this,"handlers");a(this,"currentMember",n(null));a(this,"confirmAddMember",async e=>{await this.api.create({organizationId:this.organizationId,email:e.email,teams:e.teams}),await this.fetchState()});this.authorEmail=e,this.organizationId=t,this.api=o,this.handlers=s}async fetchState(){this.loading.value=!0,await this.fetchMembers(),this.setCurrentMember(),this.loading.value=!1}setCurrentMember(){var e;this.currentMember.value=(e=this.members.value.find(t=>t.email===this.authorEmail))!=null?e:null}async fetchMembers(){this.members.value=await this.api.list(this.organizationId)}async removeMember(e){var o;if(((o=h.getAuthor())==null?void 0:o.claims.email)===e.email){await u("Removing your own access will block you from this organization. Are you sure?",{okText:"Remove",cancelText:"Cancel"})&&(await this.api.delete({organizationId:this.organizationId,authorId:e.authorId}),this.handlers.onSelfRemove());return}await u(`Are you sure you want to remove ${e.email} access?`,{okText:"Remove",cancelText:"Cancel"})&&(await this.api.delete({organizationId:this.organizationId,authorId:e.authorId}),await this.fetchMembers())}getCreationFields(){return[{key:"email",label:"Email",type:"text"}]}makeCrudViewTable(){return{columns:[{title:"Email",align:"center"},{title:"",align:"right"}],rows:this.members.value.map(e=>({key:e.email,cells:[{type:"text",text:e.email},{type:"actions",actions:[{icon:b,label:"Remove access",onClick:()=>this.removeMember(e),dangerous:!0}]}]}))}}}const K=w({__name:"EditorsView",setup(i){var d;const e=y(),t=I(),o=e.params.organizationId,s=new z,m=(d=h.getAuthor())==null?void 0:d.claims.email;if(!m)throw new Error("Author email is not available");const r=new C({organizationId:o,api:s,authorEmail:m,handlers:{onSelfRemove:()=>{t.push("organizations")}}});return r.fetchState(),(k,E)=>(v(),M(g,{"entity-name":"editor",loading:l(r).loading.value,title:"Editors",description:"Manage people who can edit projects within your organization","empty-title":"No editors yet",table:l(r).table.value,"create-button-text":"Invite Editor",fields:l(r).creationFields.value,create:l(r).confirmAddMember},null,8,["loading","table","fields","create"]))}});export{K as default};
//# sourceMappingURL=EditorsView.ddfb44db.js.map