import{C as g}from"./CrudView.00b82294.js";import{a as d}from"./ant-design.65becd17.js";import{a as b}from"./asyncComputed.b8a2ba99.js";import{d as w,eB as _,eN as h,f as I,c as k,u as v,eO as x,o as C}from"./vue-router.c2ee0e91.js";import{a as z}from"./gateway.bf2cabe4.js";import"./tables.f86a0e1f.js";import{M as n}from"./member.c87ce2d2.js";import"./router.8cbc8b5b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f4a57cf9.js";import"./BookOutlined.ef7af410.js";import"./url.20e63960.js";import"./PhDotsThree.vue.1715c2d0.js";import"./index.98ac79b1.js";import"./index.00707700.js";import"./popupNotifcation.34667eaf.js";import"./record.7ac8200f.js";import"./string.187ed685.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="4529e083-e9cf-48d8-84fd-115db4c3fc78",o._sentryDebugIdIdentifier="sentry-dbid-4529e083-e9cf-48d8-84fd-115db4c3fc78")}catch{}})();const P=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,m=[{key:"email",label:"Email"}],l=async e=>{await n.create(r,e.email),c()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await d("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await d("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),c())}const{loading:f,result:p,refetch:c}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:x,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(C(),k(g,{"entity-name":"editors",loading:v(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:m,onCreate:l},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Editors.b4bea25e.js.map
