import{d as y,eG as g,D as b,b as _,c as w,u as h,eS as I}from"./outputWidgets.b871b4c2.js";import{a as k}from"./asyncComputed.53a0782e.js";import{b as x}from"./router.cc1c6b6f.js";import"./index.c544e50b.js";import{M as n}from"./member.18fc4a7c.js";import{C}from"./CrudView.692afb96.js";import{a as v}from"./ant-design.fd18e6cf.js";import"./Form.698be632.js";import"./hasIn.5b514812.js";import"./popupNotifcation.79228d8c.js";import"./record.415ea43b.js";import"./pubsub.0f4910dc.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0965390b.js";import"./BookOutlined.cc9a8db5.js";import"./url.15a5742f.js";import"./Paragraph.febd4fe1.js";import"./Base.0bb5fa7a.js";import"./Modal.134b84f4.js";import"./index.336feafc.js";import"./Title.83084d03.js";import"./Text.48a7ca01.js";import"./index.6054946b.js";import"./index.5d1c532c.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="ee20cdc5-098c-4d33-9b51-7ee079e84e1c",t._sentryDebugIdIdentifier="sentry-dbid-ee20cdc5-098c-4d33-9b51-7ee079e84e1c")}catch{}})();const W=y({__name:"Editors",setup(t){const a=g().params.organizationId,c=[{key:"email",label:"Email"}],l=async e=>{await n.create(a,e.email),s()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=b(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:c,onCreate:l},null,8,["loading","table"]))}});export{W as default};
//# sourceMappingURL=Editors.7c1b7f8e.js.map
