import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.a3cd21fd.js";import{a as I}from"./asyncComputed.cd2516c6.js";import{b as k}from"./router.b08cb7b1.js";import"./index.18c2c3fe.js";import{M as n}from"./member.92eb1881.js";import{C as x}from"./CrudView.7315bd65.js";import{K as C}from"./icons.63ed1fb6.js";import{a as M}from"./ant-design.9db4d6d5.js";import"./Form.39b7718c.js";import"./hasIn.1b139fe4.js";import"./index.cf4c23b9.js";import"./record.3334502d.js";import"./pubsub.292c438a.js";import"./Paragraph.5f5bf5f5.js";import"./Base.8b5c1cdc.js";import"./Typography.f4bbfa97.js";import"./Modal.e9ad29f3.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ebf9a074.js";import"./url.6caf30a5.js";import"./index.c786eca5.js";import"./Title.219b5bb6.js";import"./Text.ba6b186c.js";import"./index.5e0e08d3.js";import"./index.460e56c5.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="bc6f5487-be61-4a60-bbd0-a9337cc9610c",t._sentryDebugIdIdentifier="sentry-dbid-bc6f5487-be61-4a60-bbd0-a9337cc9610c")}catch{}})();const X=b({__name:"Members",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),m()};async function p(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:d,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>p(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:c},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.162d4d9e.js.map
