import{d as y,eA as b,H as g,b as _,c as w,u as h,eQ as I}from"./outputWidgets.cb8d4118.js";import{a as k}from"./asyncComputed.602f821b.js";import{b as x}from"./router.86733c93.js";import"./index.c95ca55f.js";import{M as n}from"./member.fc9100fd.js";import{C}from"./CrudView.e3bbbbbe.js";import{a as v}from"./ant-design.8a1ce750.js";import"./Form.ecb5a9ca.js";import"./hasIn.9378fb46.js";import"./popupNotifcation.901fafde.js";import"./index.cf4c23b9.js";import"./record.3c2cc598.js";import"./pubsub.6650fe4e.js";import"./Paragraph.bf76481e.js";import"./Text.9ccde808.js";import"./Modal.6ccabc4f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.3ef122e0.js";import"./BookOutlined.8ba19dd1.js";import"./url.f415825b.js";import"./index.20961092.js";import"./Title.0c6e5569.js";import"./index.6c0be9cd.js";import"./index.8c7f6a56.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="6d42804a-9b83-426e-9c7c-2003ba1ea599",t._sentryDebugIdIdentifier="sentry-dbid-6d42804a-9b83-426e-9c7c-2003ba1ea599")}catch{}})();const W=y({__name:"Editors",setup(t){const a=b().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(a,e.email),s()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:c},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.ab33afbd.js.map
