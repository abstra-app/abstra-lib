import{d as b,eE as y,J as g,b as _,c as w,u as h,eS as I}from"./outputWidgets.c3b247ee.js";import{a as k}from"./asyncComputed.667bc4d0.js";import{b as x}from"./router.96f76ce6.js";import"./index.830b1532.js";import{M as n}from"./member.cb14d5d5.js";import{C}from"./CrudView.c6595dbc.js";import{a as v}from"./ant-design.b018d3fd.js";import"./Form.f33ee4f2.js";import"./hasIn.5dc8f755.js";import"./popupNotifcation.9c6b7651.js";import"./record.8211c06a.js";import"./pubsub.e8d896ac.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.14130718.js";import"./BookOutlined.95180cde.js";import"./url.1d2df2a9.js";import"./Paragraph.0a32d481.js";import"./Base.dad7ed30.js";import"./Modal.83fd7931.js";import"./index.dd1cd0d4.js";import"./Title.1a0a00a3.js";import"./Text.efec52d0.js";import"./index.0a09cbab.js";import"./index.402640e8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="a3b201eb-5861-4764-832e-c5bb3401f313",t._sentryDebugIdIdentifier="sentry-dbid-a3b201eb-5861-4764-832e-c5bb3401f313")}catch{}})();const W=b({__name:"Editors",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),s()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:c},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.d0212d5b.js.map
