import{C as g}from"./CrudView.dbbcd692.js";import{a as c}from"./ant-design.60bb9864.js";import{a as b}from"./asyncComputed.9c04a778.js";import{d as w,e7 as _,ek as h,f as I,c as k,u as v,el as x,o as C}from"./vue-router.bdd95b3b.js";import{a as z}from"./gateway.023845f7.js";import{M as n}from"./member.8a3105c1.js";import"./tables.9664ce8c.js";import"./router.149fa06c.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.3be8e514.js";import"./BookOutlined.9012acef.js";import"./url.fd6fde4b.js";import"./PhDotsThreeVertical.vue.4225f74d.js";import"./index.0ff0b8a1.js";import"./popupNotifcation.720870ec.js";import"./record.757921f4.js";import"./string.7b43099d.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="5027455b-9d02-4519-9544-36567e31bcd7",o._sentryDebugIdIdentifier="sentry-dbid-5027455b-9d02-4519-9544-36567e31bcd7")}catch{}})();const K=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,d=[{key:"email",label:"Email"}],m=async e=>{await n.create(r,e.email),l()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await c("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await c("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),l())}const{loading:p,result:f,refetch:l}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=f.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:x,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(C(),k(g,{"entity-name":"editors",loading:v(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:d,onCreate:m},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Editors.36bee6d2.js.map
