import{C as b}from"./CrudView.2a7e11ba.js";import{a as l}from"./ant-design.17cf12ad.js";import{a as g}from"./asyncComputed.bc1d1b96.js";import{d as w,eC as _,eJ as h,K as I,b as C,c as k,u as v,eP as x}from"./vue-router.c084b0ce.js";import{a as z}from"./gateway.2860aedc.js";import"./index.361eae3c.js";import{M as n}from"./member.1827bc56.js";import"./router.323ef752.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5608b57e.js";import"./BookOutlined.e580274a.js";import"./url.9d42bccf.js";import"./index.7839f463.js";import"./index.93c4b6a1.js";import"./popupNotifcation.db6965f1.js";import"./record.5074e0e9.js";import"./string.0b090da8.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="73d47390-d20b-45df-85bf-8965a7a6947a",o._sentryDebugIdIdentifier="sentry-dbid-73d47390-d20b-45df-85bf-8965a7a6947a")}catch{}})();const q=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,m=[{key:"email",label:"Email"}],c=async e=>{await n.create(r,e.email),d()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await l("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await l("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),d())}const{loading:f,result:p,refetch:d}=g(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:x,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(C(),k(b,{"entity-name":"editors",loading:v(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:m,onCreate:c},null,8,["loading","table"]))}});export{q as default};
//# sourceMappingURL=Editors.b2dd103a.js.map
