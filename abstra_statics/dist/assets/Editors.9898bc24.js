import{d as y,f1 as b,y as g,b as _,c as w,u as h,fd as I}from"./outputWidgets.2c486d17.js";import{a as k}from"./asyncComputed.e5d9d93d.js";import{a as x}from"./gateway.adeb84ce.js";import"./index.2716e389.js";import{M as n}from"./member.a6a785eb.js";import{C}from"./CrudView.0be2fa3c.js";import{a as v}from"./ant-design.00b6858a.js";import"./popupNotifcation.a2f3a0c9.js";import"./record.a711bc3f.js";import"./pubsub.5f7659e5.js";import"./string.197dfdcf.js";import"./router.b31795e5.js";import"./Form.73f198e2.js";import"./hasIn.9efd290a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.48e39fe8.js";import"./BookOutlined.09efaad6.js";import"./url.9b24e7ef.js";import"./Modal.b55eb59b.js";import"./index.46056937.js";import"./index.29a9f7dd.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="a7c0a980-5348-4cb1-a9e2-2898e78e5ebe",t._sentryDebugIdIdentifier="sentry-dbid-a7c0a980-5348-4cb1-a9e2-2898e78e5ebe")}catch{}})();const S=y({__name:"Editors",setup(t){const a=b().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),s()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:c},null,8,["loading","table"]))}});export{S as default};
//# sourceMappingURL=Editors.9898bc24.js.map
