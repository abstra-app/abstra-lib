import{C as g}from"./CrudView.4effc8fa.js";import{a as m}from"./ant-design.9d2f8846.js";import{a as b}from"./asyncComputed.51c09f48.js";import{d as w,eu as _,eH as h,f as I,c as k,u as v,eI as x,o as C}from"./vue-router.c0da5149.js";import{a as z}from"./gateway.0185a911.js";import"./tables.e5f30c7b.js";import{M as n}from"./member.a937d31f.js";import"./router.05e46340.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.9e494768.js";import"./BookOutlined.31eea83d.js";import"./url.af38eb09.js";import"./PhDotsThree.vue.a69499d9.js";import"./index.870938f7.js";import"./index.bba254a5.js";import"./popupNotifcation.6efc04c6.js";import"./record.a421ce0f.js";import"./string.17bb1136.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[a]="e5e85a25-d745-45fe-9928-cd79def88750",o._sentryDebugIdIdentifier="sentry-dbid-e5e85a25-d745-45fe-9928-cd79def88750")}catch{}})();const P=w({__name:"Editors",setup(o){const a=_(),s=h(),r=a.params.organizationId,c=[{key:"email",label:"Email"}],l=async e=>{await n.create(r,e.email),d()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await m("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await m("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),d())}const{loading:f,result:p,refetch:d}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=p.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:x,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(C(),k(g,{"entity-name":"editors",loading:v(f),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:c,onCreate:l},null,8,["loading","table"]))}});export{P as default};
//# sourceMappingURL=Editors.49b9ac31.js.map
