import{C as g}from"./CrudView.91b6c7f5.js";import{a as l}from"./ant-design.cad07fb8.js";import{a as b}from"./asyncComputed.557db8ec.js";import{d as w,e7 as _,ek as h,f as I,c as k,u as v,el as x,o as C}from"./vue-router.3651a0a9.js";import{a as z}from"./gateway.441ecb6a.js";import{M as n}from"./member.b63ae420.js";import"./tables.e063442e.js";import"./router.f3efed7b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a466c6a5.js";import"./BookOutlined.2faa38e2.js";import"./url.1fa0dd33.js";import"./PhDotsThree.vue.30e022d0.js";import"./index.a6c79072.js";import"./popupNotifcation.58438251.js";import"./record.21f9fccc.js";import"./string.47bdf7b5.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="f1aada11-7bd4-4f59-889c-30b566d299a3",o._sentryDebugIdIdentifier="sentry-dbid-f1aada11-7bd4-4f59-889c-30b566d299a3")}catch{}})();const K=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,c=[{key:"email",label:"Email"}],m=async e=>{await n.create(r,e.email),d()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await l("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await l("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),d())}const{loading:f,result:p,refetch:d}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:x,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(C(),k(g,{"entity-name":"editors",loading:v(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:c,onCreate:m},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Editors.818520d6.js.map
