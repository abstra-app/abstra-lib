import{d as y,eA as b,H as g,b as _,c as w,u as h,eQ as I}from"./outputWidgets.5ea0a846.js";import{a as k}from"./asyncComputed.5e5133b6.js";import{b as x}from"./router.3b560cd4.js";import"./index.08f9833b.js";import{M as n}from"./member.7dbd3ae1.js";import{C}from"./CrudView.67638581.js";import{a as v}from"./ant-design.aae28013.js";import"./Form.98a7a6a9.js";import"./hasIn.63662996.js";import"./popupNotifcation.3842d22c.js";import"./index.cf4c23b9.js";import"./record.660b1d89.js";import"./pubsub.6d1d5b7b.js";import"./Paragraph.30b952f7.js";import"./Text.a8e86ea0.js";import"./Modal.ea07b921.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0d323532.js";import"./BookOutlined.043162ee.js";import"./url.16f11e2b.js";import"./index.f79091ce.js";import"./Title.718df1d3.js";import"./index.41ac8392.js";import"./index.78b6244e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="02036761-378b-483d-ba9a-0a9ea4eed3a5",t._sentryDebugIdIdentifier="sentry-dbid-02036761-378b-483d-ba9a-0a9ea4eed3a5")}catch{}})();const W=y({__name:"Editors",setup(t){const a=b().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:d},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.2e16ac40.js.map
