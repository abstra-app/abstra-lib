import{d as y,eA as b,H as g,b as _,c as w,u as h,eQ as I}from"./outputWidgets.c5535d40.js";import{a as k}from"./asyncComputed.cd096d0b.js";import{b as x}from"./router.5cb6ccbc.js";import"./index.3ff2dc88.js";import{M as n}from"./member.4147c9b1.js";import{C}from"./CrudView.c6004271.js";import{a as v}from"./ant-design.df269098.js";import"./Form.de2ae8e0.js";import"./hasIn.7201ba3b.js";import"./popupNotifcation.a92ef29f.js";import"./index.cf4c23b9.js";import"./record.27789679.js";import"./pubsub.29d3c763.js";import"./Paragraph.367c674e.js";import"./Text.0f16ec89.js";import"./Modal.054089c0.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.bb177ffb.js";import"./BookOutlined.7e4818a7.js";import"./url.7bc15f9c.js";import"./index.0587cbb2.js";import"./Title.395d3bdd.js";import"./index.7d9dc405.js";import"./index.f34da8bf.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="845e44b6-0fd9-401a-b470-4393628c7748",t._sentryDebugIdIdentifier="sentry-dbid-845e44b6-0fd9-401a-b470-4393628c7748")}catch{}})();const W=y({__name:"Editors",setup(t){const a=b().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:d},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.43b7f3d4.js.map
