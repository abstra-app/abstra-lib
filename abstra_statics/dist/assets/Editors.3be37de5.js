import{d as y,f1 as g,y as b,b as _,c as w,u as h,fd as I}from"./outputWidgets.825b0b2c.js";import{a as k}from"./asyncComputed.45c96cf8.js";import{a as x}from"./gateway.a4c66c9b.js";import"./index.384c5e51.js";import{M as n}from"./member.a4dae1dd.js";import{C}from"./CrudView.8365e5d6.js";import{a as v}from"./ant-design.b373eaec.js";import"./popupNotifcation.51ce4693.js";import"./record.18ef23cb.js";import"./pubsub.09d8cebb.js";import"./router.649607de.js";import"./Form.44938078.js";import"./hasIn.0421072f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7a03afb0.js";import"./BookOutlined.82787a86.js";import"./url.9ded62f2.js";import"./Modal.6f953ff3.js";import"./index.40c6eaf7.js";import"./index.08c7d183.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[r]="99ac5923-574a-4e12-a1b3-d82973e5a9ad",t._sentryDebugIdIdentifier="sentry-dbid-99ac5923-574a-4e12-a1b3-d82973e5a9ad")}catch{}})();const Q=y({__name:"Editors",setup(t){const a=g().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),s()};async function c(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),s())}const{loading:p,result:u,refetch:s}=k(()=>n.list(a)),f=b(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=u.value)==null?void 0:e.map(o=>{var m;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((m=x.getAuthor())==null?void 0:m.claims.email)===o.email?[]:[{icon:I,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?i:[]}});return(e,i)=>(_(),w(C,{"entity-name":"editors",loading:h(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:f.value,"create-button-text":"Add editors",fields:l,onCreate:d},null,8,["loading","table"]))}});export{Q as default};
//# sourceMappingURL=Editors.3be37de5.js.map
