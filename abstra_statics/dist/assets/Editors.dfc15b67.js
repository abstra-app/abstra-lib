import{d as y,eA as b,H as g,b as _,c as w,u as h,eQ as I}from"./outputWidgets.e8054ca7.js";import{a as k}from"./asyncComputed.700b53fb.js";import{b as x}from"./router.d68c1114.js";import"./index.99dad205.js";import{M as n}from"./member.c3acc15a.js";import{C}from"./CrudView.952a9559.js";import{a as v}from"./ant-design.16d38231.js";import"./Form.b088898a.js";import"./hasIn.db1a5da2.js";import"./popupNotifcation.cbfc2da9.js";import"./index.cf4c23b9.js";import"./record.120358d7.js";import"./pubsub.37160207.js";import"./Paragraph.8835b4f7.js";import"./Text.230fde10.js";import"./Modal.2232ec94.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.fa55d3b1.js";import"./BookOutlined.5efe1db2.js";import"./url.175b4bff.js";import"./index.928945a7.js";import"./Title.a6b4e026.js";import"./index.d5ad068c.js";import"./index.9f01d476.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="4a6d1095-be3e-4c6e-a436-bdaf10a6895c",t._sentryDebugIdIdentifier="sentry-dbid-4a6d1095-be3e-4c6e-a436-bdaf10a6895c")}catch{}})();const W=y({__name:"Editors",setup(t){const a=b().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:d},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.dfc15b67.js.map
