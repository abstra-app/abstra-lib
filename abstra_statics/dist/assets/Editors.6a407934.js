import{d as y,f1 as b,y as g,b as _,c as w,u as h,fd as I}from"./outputWidgets.161060e0.js";import{a as k}from"./asyncComputed.23e92968.js";import{a as x}from"./gateway.f2530f68.js";import"./index.f8b37d25.js";import{M as n}from"./member.c124bb38.js";import{C}from"./CrudView.121af814.js";import{a as v}from"./ant-design.50d54108.js";import"./popupNotifcation.f24dac0e.js";import"./record.6a8bcc7f.js";import"./pubsub.ce004d19.js";import"./string.0c0535f5.js";import"./router.42dba988.js";import"./Form.52ea0ff3.js";import"./hasIn.9bea2804.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c0209c48.js";import"./BookOutlined.c41eff22.js";import"./url.5fda3169.js";import"./Modal.27701131.js";import"./index.f997bfa4.js";import"./index.43e74cd1.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="da8ba410-9590-4fa5-94a8-6b4aa5134103",t._sentryDebugIdIdentifier="sentry-dbid-da8ba410-9590-4fa5-94a8-6b4aa5134103")}catch{}})();const S=y({__name:"Editors",setup(t){const o=b().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(o,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(o,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(o)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(a=>{var m;return{key:a.email,cells:[{type:"text",text:a.email},{type:"text",text:a.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===a.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(a),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:d},null,8,["loading","table"]))}});export{S as default};
//# sourceMappingURL=Editors.6a407934.js.map
