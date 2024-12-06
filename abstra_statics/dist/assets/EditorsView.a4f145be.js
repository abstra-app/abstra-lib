var f=Object.defineProperty;var p=(i,e,t)=>e in i?f(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var a=(i,e,t)=>(p(i,typeof e!="symbol"?e+"":e,t),t);import{C as g}from"./CrudView.1af0ea80.js";import{e as n,f as d,ep as b,d as w,ea as y,eo as I,o as v,c as M,u as l}from"./index.dd34dbc1.js";import{a as h}from"./gateway.044b1cc3.js";import{M as z}from"./member.fdb5b3dd.js";import"./tables.63bb36bd.js";import{a as u}from"./ant-design.1dbd18bb.js";import"./router.5426f005.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5aa74322.js";import"./BookOutlined.b3d59eea.js";import"./url.778a0a11.js";import"./PhDotsThreeVertical.vue.99394cc3.js";import"./Badge.e47c66e1.js";import"./index.602f599f.js";import"./popupNotifcation.0c7530c1.js";import"./record.3584e687.js";import"./string.a72d7eec.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[e]="e0c385e2-e656-4339-8f02-c457684e942f",i._sentryDebugIdIdentifier="sentry-dbid-e0c385e2-e656-4339-8f02-c457684e942f")}catch{}})();class C{constructor({authorEmail:e,organizationId:t,api:o,handlers:s}){a(this,"members",n([]));a(this,"selectedMember",n(null));a(this,"draftMember",n(null));a(this,"creationFields",d(()=>this.getCreationFields()));a(this,"table",d(()=>this.makeCrudViewTable()));a(this,"loading",n(!1));a(this,"authorEmail");a(this,"organizationId");a(this,"api");a(this,"handlers");a(this,"currentMember",n(null));a(this,"confirmAddMember",async e=>{await this.api.create({organizationId:this.organizationId,email:e.email,teams:e.teams}),await this.fetchState()});this.authorEmail=e,this.organizationId=t,this.api=o,this.handlers=s}async fetchState(){this.loading.value=!0,await this.fetchMembers(),this.setCurrentMember(),this.loading.value=!1}setCurrentMember(){var e;this.currentMember.value=(e=this.members.value.find(t=>t.email===this.authorEmail))!=null?e:null}async fetchMembers(){this.members.value=await this.api.list(this.organizationId)}async removeMember(e){var o;if(((o=h.getAuthor())==null?void 0:o.claims.email)===e.email){await u("Removing your own access will block you from this organization. Are you sure?",{okText:"Remove",cancelText:"Cancel"})&&(await this.api.delete({organizationId:this.organizationId,authorId:e.authorId}),this.handlers.onSelfRemove());return}await u(`Are you sure you want to remove ${e.email} access?`,{okText:"Remove",cancelText:"Cancel"})&&(await this.api.delete({organizationId:this.organizationId,authorId:e.authorId}),await this.fetchMembers())}getCreationFields(){return[{key:"email",label:"Email",type:"text"}]}makeCrudViewTable(){return{columns:[{title:"Email",align:"center"},{title:"",align:"right"}],rows:this.members.value.map(e=>({key:e.email,cells:[{type:"text",text:e.email},{type:"actions",actions:[{icon:b,label:"Remove access",onClick:()=>this.removeMember(e),dangerous:!0}]}]}))}}}const J=w({__name:"EditorsView",setup(i){var c;const e=y(),t=I(),o=e.params.organizationId,s=new z,m=(c=h.getAuthor())==null?void 0:c.claims.email;if(!m)throw new Error("Author email is not available");const r=new C({organizationId:o,api:s,authorEmail:m,handlers:{onSelfRemove:()=>{t.push("organizations")}}});return r.fetchState(),(k,E)=>(v(),M(g,{"entity-name":"editor",loading:l(r).loading.value,title:"Editors",description:"Manage people who can edit projects within your organization","empty-title":"No editors yet",table:l(r).table.value,"create-button-text":"Invite Editor",fields:l(r).creationFields.value,create:l(r).confirmAddMember},null,8,["loading","table","fields","create"]))}});export{J as default};
//# sourceMappingURL=EditorsView.a4f145be.js.map
