import{C as b}from"./CrudView.30543074.js";import{a as l}from"./ant-design.3e244f71.js";import{a as g}from"./asyncComputed.c7982027.js";import{d as w,eC as _,eJ as h,J as I,o as C,c as k,u as v,eP as x}from"./vue-router.6b399b0b.js";import{a as z}from"./gateway.34f2a318.js";import"./index.c3b84c4d.js";import{M as n}from"./member.7fe830a9.js";import"./router.ab3f179a.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.e21048fc.js";import"./BookOutlined.7993dbf1.js";import"./url.2f4a4260.js";import"./index.57cdc892.js";import"./index.2e72b67b.js";import"./popupNotifcation.17b9c327.js";import"./record.f5201a57.js";import"./string.79d7b0e1.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="91b6b28f-f4cb-4c24-8fcf-488ad78a89be",o._sentryDebugIdIdentifier="sentry-dbid-91b6b28f-f4cb-4c24-8fcf-488ad78a89be")}catch{}})();const H=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,m=[{key:"email",label:"Email"}],d=async e=>{await n.create(r,e.email),c()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await l("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await l("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),c())}const{loading:f,result:p,refetch:c}=g(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:x,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(C(),k(b,{"entity-name":"editors",loading:v(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:m,onCreate:d},null,8,["loading","table"]))}});export{H as default};
//# sourceMappingURL=Editors.9cc49a97.js.map
