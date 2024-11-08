import{C as g}from"./CrudView.e5ffd202.js";import{a as c}from"./ant-design.a04b7e36.js";import{a as b}from"./asyncComputed.d7b28a97.js";import{d as w,ea as _,eo as h,f as I,o as k,c as v,u as x,ep as z}from"./vue-router.ad24653d.js";import{a as C}from"./gateway.3f410472.js";import{M as n}from"./member.6d69d6ee.js";import"./tables.3fced79a.js";import"./router.0577ea16.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.97db712f.js";import"./BookOutlined.153a87ab.js";import"./url.483cfdfd.js";import"./PhDotsThreeVertical.vue.47b046a3.js";import"./Badge.388cfc40.js";import"./index.73fe6f6e.js";import"./popupNotifcation.636b78f5.js";import"./record.2333d37b.js";import"./string.f9c84c24.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="dc80f79d-d5e7-4add-8573-a479fb70f826",o._sentryDebugIdIdentifier="sentry-dbid-dc80f79d-d5e7-4add-8573-a479fb70f826")}catch{}})();const P=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,m=[{key:"email",label:"Email"}],l=async e=>{await n.create(r,e.email),d()};async function u(e){var t;if(((t=C.getAuthor())==null?void 0:t.claims.email)===e.email&&await c("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await c("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),d())}const{loading:f,result:p,refetch:d}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:z,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(k(),v(g,{"entity-name":"editors",loading:x(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:m,create:l},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Editors.c9bd7b31.js.map
