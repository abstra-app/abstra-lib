import{d as y,eA as g,H as b,b as _,c as w,u as h,eP as I}from"./outputWidgets.4014d4b4.js";import{a as k}from"./asyncComputed.a0c968b6.js";import{b as x}from"./router.1c0eb438.js";import"./index.8d5a23af.js";import{M as n}from"./member.24c3caa3.js";import{C}from"./CrudView.264d093d.js";import{a as v}from"./ant-design.b8d167b3.js";import"./Form.cd3b3101.js";import"./hasIn.c8ca3e6f.js";import"./popupNotifcation.660ecbf7.js";import"./index.cf4c23b9.js";import"./record.6127802f.js";import"./pubsub.87c1781f.js";import"./Paragraph.af9661b7.js";import"./Text.fdda7b10.js";import"./Modal.b8868bc0.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5cd5a99e.js";import"./BookOutlined.dc160bfd.js";import"./url.32adf392.js";import"./index.08a3155b.js";import"./Title.03a6ebb6.js";import"./index.4f049bb1.js";import"./index.ab434345.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="3ef20de6-5624-40cd-a5b4-d0f135e892fa",t._sentryDebugIdIdentifier="sentry-dbid-3ef20de6-5624-40cd-a5b4-d0f135e892fa")}catch{}})();const W=y({__name:"Editors",setup(t){const a=g().params.organizationId,d=[{key:"email",label:"Email"}],l=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=b(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:d,onCreate:l},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.136c088b.js.map
