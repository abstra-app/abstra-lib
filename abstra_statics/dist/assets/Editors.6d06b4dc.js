import{C as g}from"./CrudView.7310efb3.js";import{a as m}from"./ant-design.da779684.js";import{a as b}from"./asyncComputed.2eacb78b.js";import{d as w,eB as _,eO as h,f as I,c as k,u as v,eP as x,o as C}from"./vue-router.39119ee1.js";import{a as z}from"./gateway.ff01358a.js";import"./tables.6fba3e0e.js";import{M as n}from"./member.efb31852.js";import"./router.8bbf8e9d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.453ce5bc.js";import"./BookOutlined.0e2985bb.js";import"./url.80e2a8da.js";import"./PhDotsThree.vue.a7b386b3.js";import"./index.5d0749ed.js";import"./index.77098606.js";import"./popupNotifcation.9cf3cb38.js";import"./record.8f8cf34d.js";import"./string.e3206d26.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[o]="1f0cb321-ca85-4baa-9a80-aa80a37cd890",a._sentryDebugIdIdentifier="sentry-dbid-1f0cb321-ca85-4baa-9a80-aa80a37cd890")}catch{}})();const K=w({__name:"Editors",setup(a){const o=_(),s=h(),r=o.params.organizationId,l=[{key:"email",label:"Email"}],d=async e=>{await n.create(r,e.email),c()};async function u(e){var t;if(((t=z.getAuthor())==null?void 0:t.claims.email)===e.email&&await m("You are about to remove your own access. You won't be able to access this organization anymore. Are you sure?")){await n.delete(r,e.authorId),await s.push({name:"organizations"});return}await m("Are you sure you want to remove this member's access?")&&(await n.delete(r,e.authorId),c())}const{loading:p,result:f,refetch:c}=b(()=>n.list(r)),y=I(()=>{var e,i;return{columns:[{name:"Email",align:"left"},{name:"Role"},{name:"",align:"right"}],rows:(i=(e=f.value)==null?void 0:e.map(t=>({key:t.email,cells:[{type:"text",text:t.email},{type:"text",text:t.role},{type:"actions",actions:[{icon:x,label:"Remove access",onClick:()=>u(t),dangerous:!0}]}]})))!=null?i:[]}});return(e,i)=>(C(),k(g,{"entity-name":"editors",loading:v(p),title:"Organization editors",description:"List all organization editors.","empty-title":"No editors yet",table:y.value,"create-button-text":"Add editors",fields:l,onCreate:d},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Editors.6d06b4dc.js.map
