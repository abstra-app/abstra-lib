import{d as f,eA as u,J as b,b as y,c as _,u as g}from"./outputWidgets.17392370.js";import{a as w}from"./asyncComputed.76849272.js";import"./console.9b12928f.js";import{M as m}from"./member.b034255f.js";import"./index.c5e8e3a4.js";import{_ as I}from"./CrudView.vue_vue_type_script_setup_true_lang.c4e89a02.js";import"./index.7c30bb7a.js";import"./Form.e398e550.js";import"./Title.bc3ff086.js";import"./CollapsePanel.853dbd0d.js";import"./index.2e2d3a0a.js";import"./index.ba0ff767.js";import"./index.84380f11.js";import"./dayjs.05e1ae11.js";import"./index.56ff0f0c.js";import"./index.bd94f307.js";import"./TabPane.25e9ccd4.js";import"./index.8aa7fba2.js";import"./index.50017ce4.js";import"./index.fffd13c2.js";import"./index.d2f4083e.js";import"./index.1fd97730.js";import"./index.3e3b85af.js";import"./index.18880d1b.js";import"./index.8c91651f.js";import"./index.8d8985c7.js";import"./gateway.ee06b706.js";import"./activeRecord.84b679f6.js";import"./pubsub.fc739490.js";import"./icons.baa5f07a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="87f903d6-b69c-4a5f-aadd-8c825f2de8ef",e._sentryDebugIdIdentifier="sentry-dbid-87f903d6-b69c-4a5f-aadd-8c825f2de8ef")}catch{}})();const X=f({__name:"Members",setup(e){const r=u().params.organizationId,n=[{key:"email",label:"Email"}],s=async t=>{await m.create(r,t.email),l()},{loading:p,result:d,refetch:l}=w(()=>m.list(r)),c=b(()=>{var t,i;return{columns:[{name:"Email"},{name:"Role"}],rows:(i=(t=d.value)==null?void 0:t.map(a=>({key:a.email,cells:[{text:a.email},{text:a.role}]})))!=null?i:[]}});return(t,i)=>(y(),_(I,{"entity-name":"members",loading:g(p),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:n,onCreate:s},null,8,["loading","table"]))}});export{X as default};
//# sourceMappingURL=Members.0bba7ec6.js.map
