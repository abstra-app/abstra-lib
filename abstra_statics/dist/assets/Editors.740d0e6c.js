import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.6a7b2974.js";import{a as I}from"./asyncComputed.6e38050b.js";import{b as k}from"./router.5f815d47.js";import"./index.deb8cd66.js";import{M as n}from"./member.d4ef9d23.js";import{C as x}from"./CrudView.fcb7be02.js";import{K as C}from"./icons.34e94217.js";import{a as v}from"./ant-design.68403e57.js";import"./Form.0c6aa3e7.js";import"./hasIn.cf56167b.js";import"./popupNotifcation.3324ba79.js";import"./index.cf4c23b9.js";import"./record.ed1b75ef.js";import"./pubsub.3404ccf7.js";import"./Paragraph.2c25a714.js";import"./Base.4341e4c5.js";import"./Typography.458c99d3.js";import"./Modal.37b8aaa7.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.8fbdee2f.js";import"./url.92c351c8.js";import"./index.03375962.js";import"./Title.f00d10e1.js";import"./Text.5b6cbf92.js";import"./index.059d6d27.js";import"./index.1c341367.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="929e54de-5bb8-4691-8477-ce09c344cdea",t._sentryDebugIdIdentifier="sentry-dbid-929e54de-5bb8-4691-8477-ce09c344cdea")}catch{}})();const Y=b({__name:"Editors",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),m()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:c},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Editors.740d0e6c.js.map
