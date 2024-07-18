import{C as b}from"./CrudView.ca5e4f45.js";import{a as m}from"./ant-design.7dc1b6cb.js";import{a as g}from"./asyncComputed.c9d8887b.js";import{d as w,eA as _,eM as h,f as I,o as k,c as v,u as x,eN as C}from"./vue-router.930a7a3c.js";import{a as M}from"./gateway.4b98eed1.js";import"./tables.7a71377c.js";import{M as n}from"./member.7702dbac.js";import"./router.a9072663.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c90390bc.js";import"./BookOutlined.8ab341b0.js";import"./url.e8dc983f.js";import"./index.1a6ae3e6.js";import"./index.6fddf522.js";import"./popupNotifcation.b8d40b04.js";import"./record.13441543.js";import"./string.96b6cb22.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="314eb27b-aafa-4a2e-9bfe-9ee25744ff0a",o._sentryDebugIdIdentifier="sentry-dbid-314eb27b-aafa-4a2e-9bfe-9ee25744ff0a")}catch{}})();const K=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,c=[{key:"email",label:"Email"}],d=async e=>{await n.create(r,e.email),l()};async function u(e){var t;if(((t=M.getAuthor())==null?void 0:t.claims.email)===e.email&&await m("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await m("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),l())}const{loading:f,result:p,refetch:l}=g(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:C,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(k(),v(b,{"entity-name":"editors",loading:x(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:c,onCreate:d},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Editors.a6a98517.js.map
