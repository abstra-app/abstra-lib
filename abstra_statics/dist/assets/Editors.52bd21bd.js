import{C as b}from"./CrudView.713bb82f.js";import{a as c}from"./ant-design.f86b5fd5.js";import{a as g}from"./asyncComputed.8e1f8284.js";import{d as w,ed as _,eq as h,f as I,c as k,u as v,o as x,er as C}from"./vue-router.e363248c.js";import{a as z}from"./gateway.379fcd0d.js";import{M as n}from"./member.b8100b83.js";import"./tables.d83c8f0c.js";import"./router.7810d297.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.24f8d1b4.js";import"./BookOutlined.a071a09a.js";import"./url.0bf83deb.js";import"./PhDotsThreeVertical.vue.92d1ad63.js";import"./index.49597fd5.js";import"./popupNotifcation.180ed436.js";import"./record.e927e7e3.js";import"./string.a4531dc3.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="8b3011b3-9d4e-4cc0-b494-46df38d73fe6",o._sentryDebugIdIdentifier="sentry-dbid-8b3011b3-9d4e-4cc0-b494-46df38d73fe6")}catch{}})();const K=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,l=[{key:"email",label:"Email"}],m=async e=>{await n.create(r,e.email),d()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await c("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await c("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),d())}const{loading:f,result:p,refetch:d}=g(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:C,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(x(),k(b,{"entity-name":"editors",loading:v(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:l,onCreate:m},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Editors.52bd21bd.js.map
