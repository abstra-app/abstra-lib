import{d as u,ey as f,H as b,b as y,c as _,u as g}from"./registerWidgets.ca9618c6.js";import{a as w}from"./asyncComputed.f26ab310.js";import"./gateway.f5df01e9.js";import{M as n}from"./member.57ce95dd.js";import"./index.eb434d5a.js";import{_ as I}from"./CrudView.vue_vue_type_script_setup_true_lang.0535df40.js";import"./passwordlessManager.91e53713.js";import"./pubsub.197ceb4e.js";import"./storage.a502fdce.js";import"./activeRecord.fa727ba5.js";import"./index.6cc8ffe0.js";import"./Title.f740cc19.js";import"./Form.fac64e0c.js";import"./icons.71da0300.js";import"./index.11818713.js";import"./index.b013a4c0.js";import"./index.c0bd1022.js";import"./index.7c566b28.js";import"./index.6a4df70c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="c62c835c-d81f-423e-861d-5460f3c649d1",e._sentryDebugIdIdentifier="sentry-dbid-c62c835c-d81f-423e-861d-5460f3c649d1")}catch{}})();const F=u({__name:"Members",setup(e){const r=f().params.organizationId,m=[{key:"email",label:"Email"}],s=async t=>{await n.create(r,t.email),c()},{loading:l,result:d,refetch:c}=w(()=>n.list(r)),p=b(()=>{var t,a;return{columns:[{name:"Email"},{name:"Role"}],rows:(a=(t=d.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?a:[]}});return(t,a)=>(y(),_(I,{"entity-name":"members",loading:g(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:p.value,"create-button-text":"Add members",fields:m,onCreate:s},null,8,["loading","table"]))}});export{F as default};
//# sourceMappingURL=Members.60f65852.js.map
