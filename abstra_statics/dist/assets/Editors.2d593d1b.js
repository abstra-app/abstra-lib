import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.d36af40e.js";import{a as I}from"./asyncComputed.516f6629.js";import{b as k}from"./router.0f899fcc.js";import"./index.1a320d15.js";import{M as n}from"./member.7bb81369.js";import{C as x}from"./CrudView.e25cd08d.js";import{L as C}from"./icons.9a65d765.js";import{a as v}from"./ant-design.eaca2d45.js";import"./Form.730000ff.js";import"./hasIn.5c520f68.js";import"./index.cf4c23b9.js";import"./record.42f87af8.js";import"./pubsub.5aec7261.js";import"./Paragraph.a17febc8.js";import"./Base.3a1b4bb1.js";import"./Typography.6b69dde1.js";import"./Modal.6baaef17.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7274b195.js";import"./url.2750057d.js";import"./index.e454e151.js";import"./Title.d24a1a71.js";import"./Text.7f6fc84b.js";import"./index.8fbb1153.js";import"./index.a0bb4b1e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="d7960054-a6ed-49db-b817-e7b86b11c7f2",t._sentryDebugIdIdentifier="sentry-dbid-d7960054-a6ed-49db-b817-e7b86b11c7f2")}catch{}})();const X=b({__name:"Editors",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),m()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:d},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Editors.2d593d1b.js.map
