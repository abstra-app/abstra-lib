import{d as b,ez as y,F as g,b as _,c as w,u as h}from"./outputWidgets.31f7d089.js";import{a as I}from"./asyncComputed.e77cc478.js";import{b as k}from"./router.9f7c32ab.js";import"./index.b9821219.js";import{M as n}from"./member.64544731.js";import{C as x}from"./CrudView.0df6e92a.js";import{F as C}from"./icons.198d98c5.js";import{a as M}from"./ant-design.641a17c9.js";import"./FormItem.44f90408.js";import"./hasIn.fdd00a9f.js";import"./jwt-decode.esm.74bd4619.js";import"./storage.9487c073.js";import"./index.83c4ff75.js";import"./index.cf4c23b9.js";import"./record.f93ee02b.js";import"./pubsub.1cbdbeb4.js";import"./Title.504b0ce1.js";import"./Text.07fdffd9.js";import"./Form.29fec373.js";import"./Modal.3bedd318.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d1ce3e50.js";import"./url.9c7cb212.js";import"./index.1aba186f.js";import"./index.717c43b7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="7ebcf32f-6506-4c71-97c2-8e51236d3b1c",t._sentryDebugIdIdentifier="sentry-dbid-7ebcf32f-6506-4c71-97c2-8e51236d3b1c")}catch{}})();const X=b({__name:"Members",setup(t){const r=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(r,e.email),m()};async function p(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),m())}const{loading:d,result:u,refetch:m}=I(()=>n.list(r)),f=g(()=>{var e,a;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(a=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>p(o),dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(_(),w(x,{"entity-name":"members",loading:h(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:c},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.59cc492e.js.map
