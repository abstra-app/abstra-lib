import{d as y,f1 as b,y as g,b as _,c as w,u as h,fd as I}from"./outputWidgets.4146fe55.js";import{a as k}from"./asyncComputed.905ef636.js";import{a as x}from"./gateway.70ae421b.js";import"./index.db3319d7.js";import{M as n}from"./member.68bda974.js";import{C}from"./CrudView.f1e88258.js";import{a as v}from"./ant-design.b87a9268.js";import"./popupNotifcation.a0c2264e.js";import"./record.7cb5a1b7.js";import"./pubsub.93b3ca03.js";import"./string.5f0312b3.js";import"./router.ab4de720.js";import"./Form.9a8da619.js";import"./hasIn.65e75909.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c978cec0.js";import"./BookOutlined.e8a400ca.js";import"./url.4814cfa2.js";import"./Modal.1c34dbf6.js";import"./index.4490cc25.js";import"./index.d7947c1c.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="dad74fc4-82b3-47fa-b369-89dc34851095",t._sentryDebugIdIdentifier="sentry-dbid-dad74fc4-82b3-47fa-b369-89dc34851095")}catch{}})();const S=y({__name:"Editors",setup(t){const a=b().params.organizationId,d=[{key:"email",label:"Email"}],l=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=g(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:d,onCreate:l},null,8,["loading","table"]))}});export{S as default};
//# sourceMappingURL=Editors.f9a62196.js.map
