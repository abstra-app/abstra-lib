import{d as y,eE as b,J as g,b as _,c as w,u as h,eS as I}from"./outputWidgets.c0c0bb43.js";import{a as k}from"./asyncComputed.88b03a2e.js";import{b as x}from"./router.8a098552.js";import"./index.6a7c5e13.js";import{M as n}from"./member.3064d828.js";import{C}from"./CrudView.ba435239.js";import{a as v}from"./ant-design.1fed3fe7.js";import"./Form.ee7b6ce2.js";import"./hasIn.4db6ec51.js";import"./popupNotifcation.98011be7.js";import"./record.23266e2d.js";import"./pubsub.67f9f2ba.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.95e22574.js";import"./BookOutlined.9e0db735.js";import"./url.abc8068c.js";import"./Paragraph.9384f37c.js";import"./Base.f9d35c7c.js";import"./Modal.20eca7a4.js";import"./index.4f64fe3f.js";import"./Title.fe71d7dd.js";import"./Text.1bda6535.js";import"./index.477b2f35.js";import"./index.edf6bc35.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="337d0442-a2f4-49b5-b524-0967475685c4",e._sentryDebugIdIdentifier="sentry-dbid-337d0442-a2f4-49b5-b524-0967475685c4")}catch{}})();const W=y({__name:"Editors",setup(e){const a=b().params.organizationId,l=[{key:"email",label:"Email"}],d=async t=>{await n.create(a,t.email),s()};async function c(t){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,t.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var t,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(t=u.value)==null?void 0:t.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(t,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:d},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.e2ff7cd5.js.map
