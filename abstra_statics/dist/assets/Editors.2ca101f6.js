import{d as y,f1 as g,y as b,b as _,c as w,u as h,fd as I}from"./outputWidgets.e875cc52.js";import{a as k}from"./asyncComputed.1bd921ff.js";import{a as x}from"./gateway.e7ede1fb.js";import"./index.6d16075e.js";import{M as n}from"./member.c1736278.js";import{C}from"./CrudView.23d2cab3.js";import{a as v}from"./ant-design.123cf902.js";import"./popupNotifcation.5334800d.js";import"./record.af6fc363.js";import"./pubsub.aefef9ae.js";import"./string.aa35f56d.js";import"./router.22f3bd60.js";import"./Form.582dbf5a.js";import"./hasIn.6f71cdb7.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f9a20795.js";import"./BookOutlined.95d0ead0.js";import"./url.32aa5cd1.js";import"./Modal.2f4e1218.js";import"./index.0dfdaea0.js";import"./index.2ee8dfed.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="e92e8d7a-a11a-4a6f-a193-d9c6ed679224",t._sentryDebugIdIdentifier="sentry-dbid-e92e8d7a-a11a-4a6f-a193-d9c6ed679224")}catch{}})();const S=y({__name:"Editors",setup(t){const a=g().params.organizationId,d=[{key:"email",label:"Email"}],l=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=b(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:d,onCreate:l},null,8,["loading","table"]))}});export{S as default};
//# sourceMappingURL=Editors.2ca101f6.js.map
