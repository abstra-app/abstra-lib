import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.33535317.js";import{a as I}from"./asyncComputed.eceaf3f4.js";import{b as k}from"./router.477783f4.js";import"./index.a405b124.js";import{M as n}from"./member.e83c7dc5.js";import{C as x}from"./CrudView.418c1719.js";import{K as C}from"./icons.3c082a53.js";import{a as v}from"./ant-design.c6c2096e.js";import"./Form.bb02d3a3.js";import"./hasIn.0dff4f2d.js";import"./popupNotifcation.ce5e5591.js";import"./index.cf4c23b9.js";import"./record.49cb918d.js";import"./pubsub.fa124b5f.js";import"./Paragraph.e5c0c444.js";import"./Base.abc79167.js";import"./Typography.6c9836cc.js";import"./Modal.40f2d981.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b0a6885c.js";import"./url.807a6d7f.js";import"./index.aaedd1ff.js";import"./Title.55e2ce15.js";import"./Text.0d020666.js";import"./index.dd98bcf9.js";import"./index.2a50b107.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="6bf241fc-2d32-481f-8295-d0151e73a75d",t._sentryDebugIdIdentifier="sentry-dbid-6bf241fc-2d32-481f-8295-d0151e73a75d")}catch{}})();const Y=b({__name:"Editors",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),m()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:d},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Editors.3da22289.js.map
