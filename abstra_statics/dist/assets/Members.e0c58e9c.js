import{d as u,eB as f,G as b,b as y,c as g,u as _}from"./outputWidgets.c4f3de67.js";import{a as w}from"./asyncComputed.c75b06d6.js";import"./router.88734ca5.js";import{M as n}from"./member.b73129dc.js";import"./columns.aa61756c.js";import{C as I}from"./CrudView.4072ea68.js";import"./Base.9ed9c296.js";import"./transButton.ebe60b80.js";import"./Text.fcf8f28f.js";import"./Title.345a4775.js";import"./index.db3809d7.js";import"./gateway.5578a098.js";import"./record.685c8ba7.js";import"./pubsub.1842fa2d.js";import"./icons.49e74e71.js";import"./url.d2782274.js";import"./index.c4339fad.js";import"./index.b168b141.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="22f319a0-0ea8-4d69-9af5-9af3b0b03a52",e._sentryDebugIdIdentifier="sentry-dbid-22f319a0-0ea8-4d69-9af5-9af3b0b03a52")}catch{}})();const q=u({__name:"Members",setup(e){const o=f().params.organizationId,m=[{key:"email",label:"Email"}],s=async t=>{await n.create(o,t.email),p()},{loading:l,result:d,refetch:p}=w(()=>n.list(o)),c=b(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=d.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:_(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:m,onCreate:s},null,8,["loading","table"]))}});export{q as default};
//# sourceMappingURL=Members.e0c58e9c.js.map
