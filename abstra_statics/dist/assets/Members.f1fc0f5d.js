import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.02d7c6ab.js";import{a as I}from"./asyncComputed.6ba28f12.js";import{b as k}from"./router.1ffd6f3d.js";import"./index.91e5c23a.js";import{M as n}from"./member.5d1953e8.js";import{C as x}from"./CrudView.9686d7bc.js";import{D as C}from"./icons.d148c279.js";import{a as M}from"./ant-design.cc523265.js";import"./FormItem.08e761e4.js";import"./hasIn.16bcfc34.js";import"./index.cf4c23b9.js";import"./record.4bf6e864.js";import"./pubsub.ee609699.js";import"./Paragraph.fbd3cedb.js";import"./Base.a464e3b8.js";import"./Typography.9f15a3fb.js";import"./Form.ad29b3fb.js";import"./Modal.04499883.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.754dc12b.js";import"./url.425ecd45.js";import"./index.3efceebc.js";import"./Title.5b74a8b2.js";import"./Text.4830f6bb.js";import"./index.48b86b74.js";import"./index.dfc44b72.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="7bcccc3e-c956-41d8-a4e5-2d320d096e69",t._sentryDebugIdIdentifier="sentry-dbid-7bcccc3e-c956-41d8-a4e5-2d320d096e69")}catch{}})();const Y=b({__name:"Members",setup(t){const a=y().params.organizationId,c=[{key:"email",label:"Email"}],l=async e=>{await n.create(a,e.email),m()};async function d(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:c,onCreate:l},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Members.f1fc0f5d.js.map
