import{d as b,eA as y,H as g,b as _,c as w,u as h,eQ as I}from"./outputWidgets.b1051bf6.js";import{a as k}from"./asyncComputed.024639a6.js";import{b as x}from"./router.1b3abbc5.js";import"./index.331b274c.js";import{M as n}from"./member.0291d133.js";import{C}from"./CrudView.1322ddeb.js";import{a as v}from"./ant-design.555dc1dc.js";import"./Form.764deea9.js";import"./hasIn.7a5dc2c1.js";import"./popupNotifcation.a74b9d8b.js";import"./index.cf4c23b9.js";import"./record.79259cc4.js";import"./pubsub.ebca5b2d.js";import"./Paragraph.c55dfd35.js";import"./Text.e1e330eb.js";import"./Modal.0ff10da6.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f9e024eb.js";import"./BookOutlined.9a0a4755.js";import"./url.e0198aad.js";import"./index.f9829772.js";import"./Title.52ce837c.js";import"./index.6e00e7fb.js";import"./index.5e2e5960.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="33a133e1-6e7c-4b3b-931b-4d037f02e370",t._sentryDebugIdIdentifier="sentry-dbid-33a133e1-6e7c-4b3b-931b-4d037f02e370")}catch{}})();const W=b({__name:"Editors",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:d},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.83ad9777.js.map
