import{d as b,eB as y,H as g,b as _,c as w,u as h}from"./outputWidgets.78c1e9b1.js";import{a as I}from"./asyncComputed.e28d0df5.js";import{b as k}from"./router.48db735d.js";import"./index.a3a30154.js";import{M as n}from"./member.9e28b46d.js";import{C as x}from"./CrudView.1b1ffe82.js";import{F as C}from"./icons.b044caed.js";import{a as M}from"./ant-design.95227feb.js";import"./FormItem.b14f4821.js";import"./hasIn.249cb62a.js";import"./index.cf4c23b9.js";import"./record.d42823f9.js";import"./pubsub.788d3547.js";import"./Paragraph.cc3be504.js";import"./Base.4c609d7d.js";import"./Form.2a6686f8.js";import"./Modal.aa10b8fb.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a283844f.js";import"./url.7d81a83b.js";import"./index.5ddcc632.js";import"./Title.f2a0eaa6.js";import"./Text.a54aa716.js";import"./index.f874e2d8.js";import"./index.9c8f68c7.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[i]="f8ad47aa-b8d3-4dfa-89f2-5d984c27f5cd",t._sentryDebugIdIdentifier="sentry-dbid-f8ad47aa-b8d3-4dfa-89f2-5d984c27f5cd")}catch{}})();const X=b({__name:"Members",setup(t){const a=y().params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(a,e.email),m()};async function c(e){await M("Are you sure you want to remove this member's access?")&&(await n.delete(a,e.authorId),m())}const{loading:p,result:f,refetch:m}=I(()=>n.list(a)),u=g(()=>{var e,r;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(r=(e=f.value)==null?void 0:e.map(o=>{var s;return{key:o.email,cells:[{type:"text",text:o.email},{type:"text",text:o.role},{type:"actions",actions:((s=k.getAuthor())==null?void 0:s.claims.email)===o.email?[]:[{icon:C,label:"Remove access",onClick:()=>c(o),dangerous:!0}]}]}}))!=null?r:[]}});return(e,r)=>(_(),w(x,{"entity-name":"members",loading:h(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:u.value,"create-button-text":"Add members",fields:l,onCreate:d},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.2396ad10.js.map
