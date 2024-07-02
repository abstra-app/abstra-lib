import{C as b}from"./CrudView.e7fb25da.js";import{a as l}from"./ant-design.e148b08a.js";import{a as g}from"./asyncComputed.c2fb5ad3.js";import{d as w,eC as _,eJ as h,K as I,b as C,c as k,u as v,eP as x}from"./vue-router.4aa75747.js";import{a as z}from"./gateway.34b2905a.js";import"./index.18d954b8.js";import{M as n}from"./member.9a2201fa.js";import"./router.a85d9206.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.36a8adfd.js";import"./BookOutlined.a27b4df7.js";import"./url.d7a0a029.js";import"./index.7de5165b.js";import"./index.2b85f3b8.js";import"./popupNotifcation.d1502e00.js";import"./record.624bef10.js";import"./string.0997571e.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="9fb8493b-8bad-4550-a085-3c9f45226292",o._sentryDebugIdIdentifier="sentry-dbid-9fb8493b-8bad-4550-a085-3c9f45226292")}catch{}})();const q=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,m=[{key:"email",label:"Email"}],d=async e=>{await n.create(r,e.email),c()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await l("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await l("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),c())}const{loading:f,result:p,refetch:c}=g(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:x,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(C(),k(b,{"entity-name":"editors",loading:v(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:m,onCreate:d},null,8,["loading","table"]))}});export{q as default};
//# sourceMappingURL=Editors.1d3fe3e1.js.map
