import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.83751d1a.js";import{a as I}from"./asyncComputed.00b2a54a.js";import{b as k}from"./router.a97dd462.js";import"./index.5fe52405.js";import{M as n}from"./member.a0e53ace.js";import{C as x}from"./CrudView.9183ae3f.js";import{K as C}from"./icons.ec415876.js";import{a as M}from"./ant-design.9b9294cd.js";import"./Form.c4d7a77e.js";import"./hasIn.4924df36.js";import"./index.cf4c23b9.js";import"./record.5250f5f8.js";import"./pubsub.d27c224d.js";import"./Paragraph.436c5ac0.js";import"./Base.809246e3.js";import"./Typography.31d41d79.js";import"./Modal.66378839.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.8121904e.js";import"./url.67368727.js";import"./index.9ca60e41.js";import"./Title.a85001be.js";import"./Text.50196cd9.js";import"./index.bf9a97d8.js";import"./index.634aab38.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="2badf760-b2e7-413f-a60d-0a5b66043106",t._sentryDebugIdIdentifier="sentry-dbid-2badf760-b2e7-413f-a60d-0a5b66043106")}catch{}})();const X=b({__name:"Members",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),m()};async function c(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:d},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.a781b900.js.map
