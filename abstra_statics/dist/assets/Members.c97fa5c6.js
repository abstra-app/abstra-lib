import{d as u,ez as b,H as f,b as y,c as g,u as _}from"./outputWidgets.3a1a3161.js";import{a as w}from"./asyncComputed.3068c2f0.js";import"./router.a09ce7b4.js";import{M as m}from"./member.53164ecd.js";import"./columns.4d7cbf00.js";import{C as I}from"./CrudView.3b8ef4e3.js";import"./Title.875549d8.js";import"./index.62bc48c6.js";import"./gateway.32cbedf2.js";import"./activeRecord.8f2918d8.js";import"./pubsub.2dc7d89a.js";import"./index.f4ac7424.js";import"./icons.d8ed105c.js";import"./Text.499f5d9d.js";import"./Form.58fb677e.js";import"./url.8abf1d81.js";import"./index.4d93ecb2.js";import"./index.930d127f.js";import"./index.c9ce22b0.js";import"./index.46bd6cba.js";import"./index.1f4629a2.js";import"./index.0d5ed1d0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="f548cf6d-bad8-479d-a63a-bed407a290d4",e._sentryDebugIdIdentifier="sentry-dbid-f548cf6d-bad8-479d-a63a-bed407a290d4")}catch{}})();const K=u({__name:"Members",setup(e){const r=b().params.organizationId,n=[{key:"email",label:"Email"}],s=async t=>{await m.create(r,t.email),p()},{loading:d,result:l,refetch:p}=w(()=>m.list(r)),c=f(()=>{var t,a;return{columns:[{name:"Email"},{name:"Role"}],rows:(a=(t=l.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?a:[]}});return(t,a)=>(y(),g(I,{"entity-name":"members",loading:_(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:n,onCreate:s},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Members.c97fa5c6.js.map
