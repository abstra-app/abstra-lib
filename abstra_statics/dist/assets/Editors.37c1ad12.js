import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.a0d0265d.js";import{a as I}from"./asyncComputed.dc0c45ed.js";import{b as k}from"./router.c2f63755.js";import"./index.db5d2331.js";import{M as n}from"./member.3d6e3e97.js";import{C as x}from"./CrudView.9173459d.js";import{L as C}from"./icons.3e68657a.js";import{a as v}from"./ant-design.cc063be8.js";import"./Form.72a58d24.js";import"./hasIn.c9d59175.js";import"./popupNotifcation.4293c660.js";import"./index.cf4c23b9.js";import"./record.a9ba638b.js";import"./pubsub.6ed4a04b.js";import"./Paragraph.f000a8fa.js";import"./Base.abb5fac0.js";import"./Typography.5f990276.js";import"./Modal.87fe97d8.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.54f7c162.js";import"./url.75cee938.js";import"./index.f0ccca2d.js";import"./Title.d260458f.js";import"./Text.10dcef50.js";import"./index.fc95be7d.js";import"./index.f602467e.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="db6e1793-8d8e-483b-885a-f60fd6cb270d",t._sentryDebugIdIdentifier="sentry-dbid-db6e1793-8d8e-483b-885a-f60fd6cb270d")}catch{}})();const Y=b({__name:"Editors",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),m()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:u,refetch:m}=I(()=>n.list(a)),f=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:d},null,8,["loading","table"]))}});export{Y as default};
//# sourceMappingURL=Editors.37c1ad12.js.map
