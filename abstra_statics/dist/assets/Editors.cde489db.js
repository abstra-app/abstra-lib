import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.fcd80543.js";import{a as I}from"./asyncComputed.8902de0b.js";import{b as k}from"./router.c5a591de.js";import"./index.1809b77c.js";import{M as n}from"./member.57f0baed.js";import{C as x}from"./CrudView.aef6a496.js";import{L as C}from"./icons.65dea43e.js";import{a as v}from"./ant-design.dd08f411.js";import"./Form.e572f160.js";import"./hasIn.2356639e.js";import"./index.cf4c23b9.js";import"./record.30d9e933.js";import"./pubsub.a4d7dfb9.js";import"./Paragraph.93e6fbe0.js";import"./Base.53a9f5c5.js";import"./Typography.f646ea01.js";import"./Modal.a77095c9.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.7199185f.js";import"./url.a95156d7.js";import"./index.9430f259.js";import"./Title.38ec97cf.js";import"./Text.448996ba.js";import"./index.ab90f4b4.js";import"./index.c08dc4e1.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="8058339c-5f34-46c3-875f-91bdbc01bd18",t._sentryDebugIdIdentifier="sentry-dbid-8058339c-5f34-46c3-875f-91bdbc01bd18")}catch{}})();const X=b({__name:"Editors",setup(t){const r=y().params.organizationId,l=[{key:"email",label:"Email"}],c=async e=>{await n.create(r,e.email),m()};async function d(e){await v("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),m())}const{loading:p,result:u,refetch:m}=I(()=>n.list(r)),f=g(()=>{var e,a;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(a=(e=u.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>d(o),dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:f.value,"create-button-text":"Add members",fields:l,onCreate:c},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Editors.cde489db.js.map
