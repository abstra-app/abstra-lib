import{d as y,f1 as g,y as b,b as _,c as w,u as h,fd as I}from"./outputWidgets.c66cfd35.js";import{a as k}from"./asyncComputed.ac92fa65.js";import{a as x}from"./gateway.bf3aba3e.js";import"./index.75e5a782.js";import{M as n}from"./member.ace8bc42.js";import{C}from"./CrudView.124f0074.js";import{a as v}from"./ant-design.d45256e8.js";import"./popupNotifcation.e644ba88.js";import"./record.5e4f8e37.js";import"./pubsub.3aa052ca.js";import"./string.4d8ab426.js";import"./router.abf8ddb2.js";import"./Form.301ed94f.js";import"./hasIn.937116af.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b90c1e25.js";import"./BookOutlined.593e3757.js";import"./url.9300ef54.js";import"./Modal.36a2865a.js";import"./index.77c90042.js";import"./index.dc62faf8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="834cfad2-8e11-48cd-9814-e96b7cd66087",t._sentryDebugIdIdentifier="sentry-dbid-834cfad2-8e11-48cd-9814-e96b7cd66087")}catch{}})();const S=y({__name:"Editors",setup(t){const a=g().params.organizationId,d=[{key:"email",label:"Email"}],l=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=b(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:d,onCreate:l},null,8,["loading","table"]))}});export{S as default};
//# sourceMappingURL=Editors.22bbbee4.js.map
