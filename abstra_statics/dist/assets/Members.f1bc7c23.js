import{d as u,ez as f,H as b,b as y,c as g,u as _}from"./outputWidgets.e1ef7566.js";import{a as w}from"./asyncComputed.7df7ace6.js";import"./router.f775eabb.js";import{M as m}from"./member.98da909c.js";import"./columns.9c863063.js";import{C as I}from"./CrudView.24f70c2e.js";import"./Form.4c9b41f7.js";import"./Title.4a382120.js";import"./transButton.8c2deff8.js";import"./Text.d5ca2991.js";import"./index.48a00a36.js";import"./gateway.678c59a2.js";import"./activeRecord.4c9e636d.js";import"./pubsub.c47edaa0.js";import"./index.f4ac7424.js";import"./icons.c5a201f5.js";import"./url.8a9eed68.js";import"./index.71b36d1b.js";import"./index.5ae7e734.js";import"./index.48d01e32.js";import"./index.102ca4d5.js";import"./index.5ef89a41.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="62040479-1f40-4654-8a27-472668948019",e._sentryDebugIdIdentifier="sentry-dbid-62040479-1f40-4654-8a27-472668948019")}catch{}})();const K=u({__name:"Members",setup(e){const r=f().params.organizationId,n=[{key:"email",label:"Email"}],s=async t=>{await m.create(r,t.email),d()},{loading:l,result:p,refetch:d}=w(()=>m.list(r)),c=b(()=>{var t,a;return{columns:[{name:"Email"},{name:"Role"}],rows:(a=(t=p.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?a:[]}});return(t,a)=>(y(),g(I,{"entity-name":"members",loading:_(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:n,onCreate:s},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Members.f1bc7c23.js.map
