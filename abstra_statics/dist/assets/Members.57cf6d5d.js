import{d as b,eA as u,J as f,b as y,c as g,u as _}from"./outputWidgets.8fc6742a.js";import{a as w}from"./asyncComputed.46a55a77.js";import"./router.3721af31.js";import{M as n}from"./member.af371aa5.js";import"./index.2752a30b.js";import{C as I}from"./CrudView.59fe4950.js";import"./Title.edf11ba9.js";import"./index.56510f21.js";import"./gateway.2d8a8070.js";import"./activeRecord.4c126cf1.js";import"./pubsub.6aa98c82.js";import"./icons.e3e65291.js";import"./index.5806b4ce.js";import"./Form.9563d4ee.js";import"./url.50f613f1.js";import"./index.464cd672.js";import"./index.bb5e5e15.js";import"./index.3e42ea2a.js";import"./index.ff0d0cbd.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="cbd398c3-5b33-424d-bbfe-8602724494c0",e._sentryDebugIdIdentifier="sentry-dbid-cbd398c3-5b33-424d-bbfe-8602724494c0")}catch{}})();const F=b({__name:"Members",setup(e){const r=u().params.organizationId,m=[{key:"email",label:"Email"}],s=async t=>{await n.create(r,t.email),c()},{loading:l,result:d,refetch:c}=w(()=>n.list(r)),p=f(()=>{var t,a;return{columns:[{name:"Email"},{name:"Role"}],rows:(a=(t=d.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?a:[]}});return(t,a)=>(y(),g(I,{"entity-name":"members",loading:_(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:p.value,"create-button-text":"Add members",fields:m,onCreate:s},null,8,["loading","table"]))}});export{F as default};
//# sourceMappingURL=Members.57cf6d5d.js.map
