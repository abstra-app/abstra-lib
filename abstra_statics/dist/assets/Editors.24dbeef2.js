import{d as y,f1 as b,y as g,b as _,c as w,u as h,fd as I}from"./outputWidgets.26554232.js";import{a as k}from"./asyncComputed.3edc6789.js";import{a as x}from"./gateway.99c1b0d6.js";import"./index.3de4e831.js";import{M as n}from"./member.04087b68.js";import{C}from"./CrudView.b9199998.js";import{a as v}from"./ant-design.4653ff1c.js";import"./popupNotifcation.ed054a9a.js";import"./record.0fcb30c2.js";import"./pubsub.8041ea49.js";import"./string.562bc688.js";import"./router.649825a2.js";import"./Form.a748f035.js";import"./hasIn.f9908699.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.443bd6b8.js";import"./BookOutlined.5bee2527.js";import"./url.b218ee84.js";import"./Modal.751847e1.js";import"./index.e5ce3cf3.js";import"./index.935932ac.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="6a411555-2a08-43dc-abe3-8be3dfd6123b",t._sentryDebugIdIdentifier="sentry-dbid-6a411555-2a08-43dc-abe3-8be3dfd6123b")}catch{}})();const S=y({__name:"Editors",setup(t){const a=b().params.organizationId,d=[{key:"email",label:"Email"}],l=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:d,onCreate:l},null,8,["loading","table"]))}});export{S as default};
//# sourceMappingURL=Editors.24dbeef2.js.map
