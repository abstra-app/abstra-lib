import{d as y,eC as g,H as b,b as _,c as w,u as h,eQ as C}from"./outputWidgets.6fd5a5d8.js";import{a as I}from"./asyncComputed.310b0a30.js";import{b as k}from"./router.8cab4041.js";import"./index.cef21a4c.js";import{M as n}from"./member.7d44c5f0.js";import{C as x}from"./CrudView.38b74af3.js";import{a as v}from"./ant-design.14d564d0.js";import"./Form.86ede2da.js";import"./hasIn.f935cc6f.js";import"./popupNotifcation.8c55eab8.js";import"./index.cf4c23b9.js";import"./record.7a291906.js";import"./pubsub.7bd978fa.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2fb6a353.js";import"./BookOutlined.2e7b7d83.js";import"./url.1af9f50e.js";import"./Paragraph.0504c9ed.js";import"./Text.c853e104.js";import"./Modal.c7fda8bb.js";import"./index.73f8e03d.js";import"./Title.c26fc29f.js";import"./index.f6da9859.js";import"./index.dce244c9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="ed2fa74c-3f96-48a4-8160-50f6370d9857",t._sentryDebugIdIdentifier="sentry-dbid-ed2fa74c-3f96-48a4-8160-50f6370d9857")}catch{}})();const W=y({__name:"Editors",setup(t){const a=g().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=I(()=>n.list(a)),f=b(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=k.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(x,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:d},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.e2a2a0af.js.map
