import{C as b}from"./CrudView.36f5326e.js";import{a as d}from"./ant-design.6def081f.js";import{a as g}from"./asyncComputed.10de8a4b.js";import{d as w,eA as _,eM as h,f as I,o as k,c as v,u as x,eN as C}from"./vue-router.e016c212.js";import{a as M}from"./gateway.cb160cc2.js";import"./tables.201b204f.js";import{M as n}from"./member.17447477.js";import"./router.de4b25c8.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.31878121.js";import"./BookOutlined.f3bced1b.js";import"./url.3a22c66f.js";import"./index.1eba9f45.js";import"./index.7eacc144.js";import"./popupNotifcation.c9c9aa91.js";import"./record.c4c2199a.js";import"./string.8ec7016b.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="5780c5c1-b97c-4e58-9dad-c8b19ffbd786",o._sentryDebugIdIdentifier="sentry-dbid-5780c5c1-b97c-4e58-9dad-c8b19ffbd786")}catch{}})();const K=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,l=[{key:"email",label:"Email"}],m=async e=>{await n.create(r,e.email),c()};async function u(e){var t;if(((t=M.getAuthor())==null?void 0:t.claims.email)===e.email&&await d("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await d("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),c())}const{loading:f,result:p,refetch:c}=g(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:C,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(k(),v(b,{"entity-name":"editors",loading:x(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:l,onCreate:m},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Editors.dd17791f.js.map
