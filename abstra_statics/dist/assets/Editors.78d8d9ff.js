import{d as y,eA as g,H as b,b as _,c as w,u as h,eP as I}from"./outputWidgets.d1d919f2.js";import{a as k}from"./asyncComputed.0ef8613f.js";import{b as x}from"./router.549c1807.js";import"./index.c0438daf.js";import{M as n}from"./member.4b0afb63.js";import{C}from"./CrudView.fb191347.js";import{a as v}from"./ant-design.f470388a.js";import"./Form.e009847e.js";import"./hasIn.e3adaf50.js";import"./popupNotifcation.c47cb16a.js";import"./index.cf4c23b9.js";import"./record.55f905bc.js";import"./pubsub.ba5c0982.js";import"./Paragraph.436f4863.js";import"./Text.9e700145.js";import"./Modal.e9d44e79.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.52ea7a77.js";import"./BookOutlined.df579340.js";import"./url.b08a776e.js";import"./index.3ae1a329.js";import"./Title.7964b5fc.js";import"./index.9d427b0c.js";import"./index.42f28c87.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="40936d88-f28e-4daa-a3f5-eaca129a6d0d",t._sentryDebugIdIdentifier="sentry-dbid-40936d88-f28e-4daa-a3f5-eaca129a6d0d")}catch{}})();const W=y({__name:"Editors",setup(t){const a=g().params.organizationId,d=[{key:"email",label:"Email"}],l=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=b(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:d,onCreate:l},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.78d8d9ff.js.map
