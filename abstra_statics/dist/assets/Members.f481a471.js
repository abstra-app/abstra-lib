import{d as u,ez as b,H as f,b as y,c as g,u as _}from"./outputWidgets.0ece0846.js";import{a as w}from"./asyncComputed.b17b5cdf.js";import"./router.2c88bff4.js";import{M as m}from"./member.6614dafd.js";import"./columns.928e34d1.js";import{C as I}from"./CrudView.2f330524.js";import"./Title.8bc762f9.js";import"./index.8f7b5e8b.js";import"./gateway.874e2fc3.js";import"./activeRecord.f46f579b.js";import"./pubsub.36f7c3dd.js";import"./index.f4ac7424.js";import"./icons.0c5e4294.js";import"./index.9d366905.js";import"./Form.cb4c8a62.js";import"./url.88345ece.js";import"./index.89e67404.js";import"./index.d779bf49.js";import"./index.1dc65b05.js";import"./index.2507db24.js";import"./index.d403f9df.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="0de905d9-f00f-4cbc-b571-bd896a30d63a",e._sentryDebugIdIdentifier="sentry-dbid-0de905d9-f00f-4cbc-b571-bd896a30d63a")}catch{}})();const J=u({__name:"Members",setup(e){const r=b().params.organizationId,n=[{key:"email",label:"Email"}],s=async t=>{await m.create(r,t.email),p()},{loading:d,result:l,refetch:p}=w(()=>m.list(r)),c=f(()=>{var t,a;return{columns:[{name:"Email"},{name:"Role"}],rows:(a=(t=l.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?a:[]}});return(t,a)=>(y(),g(I,{"entity-name":"members",loading:_(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:n,onCreate:s},null,8,["loading","table"]))}});export{J as default};
//# sourceMappingURL=Members.f481a471.js.map
