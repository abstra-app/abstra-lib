import{C as g}from"./CrudView.0bc31281.js";import{a as d}from"./ant-design.fefc2651.js";import{a as b}from"./asyncComputed.3648b21e.js";import{d as w,eB as _,eM as h,f as I,o as k,c as v,u as x,eN as C}from"./vue-router.7e01cca2.js";import{a as M}from"./gateway.0836c776.js";import"./index.f17cf34c.js";import{M as n}from"./member.5bb4f3ab.js";import"./router.acdacb72.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.244deaa2.js";import"./BookOutlined.2ced8fbc.js";import"./url.2afcc3be.js";import"./index.4182ab53.js";import"./index.9c9ea15f.js";import"./popupNotifcation.05c7e1b6.js";import"./record.2ef25179.js";import"./string.35560ba5.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="337f7c0f-5e73-40e4-a5de-2a8e5d396181",o._sentryDebugIdIdentifier="sentry-dbid-337f7c0f-5e73-40e4-a5de-2a8e5d396181")}catch{}})();const K=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,l=[{key:"email",label:"Email"}],m=async e=>{await n.create(r,e.email),c()};async function u(e){var t;if(((t=M.getAuthor())==null?void 0:t.claims.email)===e.email&&await d("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await d("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),c())}const{loading:f,result:p,refetch:c}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:C,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(k(),v(g,{"entity-name":"editors",loading:x(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:l,onCreate:m},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Editors.15c14e55.js.map
