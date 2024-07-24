import{C as b}from"./CrudView.7744d95f.js";import{a as c}from"./ant-design.f4859727.js";import{a as g}from"./asyncComputed.942ccb8e.js";import{d as w,eB as _,eN as h,f as I,c as k,u as v,eO as x,o as C}from"./vue-router.a1ae2b4d.js";import{a as z}from"./gateway.24279ca1.js";import"./tables.df0d6ff6.js";import{M as n}from"./member.1661a192.js";import"./router.d8cf1f8b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.004e8b75.js";import"./BookOutlined.9861f850.js";import"./url.bc94821b.js";import"./PhDotsThree.vue.ac82f8bb.js";import"./index.31191741.js";import"./index.3a4e06b9.js";import"./popupNotifcation.390be2e5.js";import"./record.dd7765ca.js";import"./string.98feb219.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="0a043bd2-0dad-42b3-acc5-bfe9058fbdcd",o._sentryDebugIdIdentifier="sentry-dbid-0a043bd2-0dad-42b3-acc5-bfe9058fbdcd")}catch{}})();const P=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,m=[{key:"email",label:"Email"}],l=async e=>{await n.create(r,e.email),d()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await c("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await c("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),d())}const{loading:f,result:p,refetch:d}=g(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:x,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(C(),k(b,{"entity-name":"editors",loading:v(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:m,onCreate:l},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Editors.413cabec.js.map
