import{C as b}from"./CrudView.f71a8edf.js";import{a as c}from"./ant-design.ea38b0cf.js";import{a as g}from"./asyncComputed.9dc98c9c.js";import{d as w,eC as _,eJ as h,K as I,b as C,c as k,u as v,eP as x}from"./vue-router.fd6cc464.js";import{a as z}from"./gateway.e3c7dd36.js";import"./index.d3ddb293.js";import{M as n}from"./member.0af2ed0b.js";import"./router.334d82f6.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6d9db63f.js";import"./BookOutlined.3ba6c704.js";import"./url.b3f80499.js";import"./index.39593661.js";import"./index.dc66e7c8.js";import"./popupNotifcation.fd9a3e9c.js";import"./record.9553702f.js";import"./string.f84a7cb7.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="b8cfdf9d-4569-46f6-9d0b-2ce4f40d31d6",o._sentryDebugIdIdentifier="sentry-dbid-b8cfdf9d-4569-46f6-9d0b-2ce4f40d31d6")}catch{}})();const q=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,l=[{key:"email",label:"Email"}],m=async e=>{await n.create(r,e.email),d()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await c("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await c("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),d())}const{loading:f,result:p,refetch:d}=g(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:x,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(C(),k(b,{"entity-name":"editors",loading:v(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:l,onCreate:m},null,8,["loading","table"]))}});export{q as default};
//# sourceMappingURL=Editors.78dd41a6.js.map
