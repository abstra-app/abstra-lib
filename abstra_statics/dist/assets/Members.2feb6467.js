import{d as b,ey as u,H as f,b as y,c as _,u as g}from"./registerWidgets.7c26f935.js";import{a as w}from"./asyncComputed.cfc29dee.js";import"./gateway.e3086290.js";import{M as i}from"./member.4c794652.js";import"./index.bb66c593.js";import{_ as I}from"./CrudView.vue_vue_type_script_setup_true_lang.7813a1ae.js";import"./passwordlessManager.5d139655.js";import"./pubsub.c3a63076.js";import"./storage.53222b6f.js";import"./activeRecord.d07557d8.js";import"./index.315bc9f8.js";import"./index.01e54af7.js";import"./Title.9a021125.js";import"./Form.ac091445.js";import"./index.611607c8.js";import"./index.9a7a96c9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="bbc7a11a-9898-4b0e-a93c-f3f2aca0a6ad",e._sentryDebugIdIdentifier="sentry-dbid-bbc7a11a-9898-4b0e-a93c-f3f2aca0a6ad")}catch{}})();const $=b({__name:"Members",setup(e){const o=u().params.organizationId,s=[{key:"email",label:"Email"}],m=async t=>{await i.create(o,t.email),d()},{loading:l,result:c,refetch:d}=w(()=>i.list(o)),p=f(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=c.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email},{text:n.role}]})))!=null?r:[]}});return(t,r)=>(y(),_(I,{"entity-name":"members",loading:g(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:p.value,"create-button-text":"Add members",fields:s,onCreate:m},null,8,["loading","table"]))}});export{$ as default};
//# sourceMappingURL=Members.2feb6467.js.map
