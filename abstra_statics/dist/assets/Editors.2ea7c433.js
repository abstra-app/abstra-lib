import{d as y,eC as g,H as b,b as _,c as w,u as h,eQ as C}from"./outputWidgets.91aca867.js";import{a as I}from"./asyncComputed.80b8543d.js";import{b as k}from"./router.32c00038.js";import"./index.c8c05573.js";import{M as n}from"./member.b1b56df0.js";import{C as x}from"./CrudView.43b8ea20.js";import{a as v}from"./ant-design.ce2e5733.js";import"./Form.b05efde0.js";import"./hasIn.08cb52ef.js";import"./popupNotifcation.e29a3949.js";import"./index.cf4c23b9.js";import"./record.7dd868d1.js";import"./pubsub.2f955133.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0d41696f.js";import"./BookOutlined.ef064549.js";import"./url.3b332905.js";import"./Paragraph.2776a16b.js";import"./Text.d00fec7b.js";import"./Modal.b8d6e40f.js";import"./index.84324f75.js";import"./Title.41f0d9c2.js";import"./index.2e28589d.js";import"./index.55d5ee8d.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="cd516997-363a-4e78-9e71-b1ae2ca8703f",t._sentryDebugIdIdentifier="sentry-dbid-cd516997-363a-4e78-9e71-b1ae2ca8703f")}catch{}})();const W=y({__name:"Editors",setup(t){const a=g().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),s()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=I(()=>n.list(a)),f=b(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=k.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(x,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:c},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.2ea7c433.js.map
