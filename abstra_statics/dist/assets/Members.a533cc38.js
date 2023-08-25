import{d as b,K as f,b as y,t as g,z as s,J as _}from"./registerWidgets.c1da2b93.js";import{a as w}from"./asyncComputed.519c40eb.js";import"./gateway.c457f9d6.js";import{M as i}from"./member.016781a3.js";import"./index.a3927ba7.js";import{C as I}from"./CrudView.c21fdfa3.js";import"./passwordlessManager.4d2f4653.js";import"./pubsub.c7dd30c2.js";import"./activeRecord.2664e76c.js";import"./DropdownMenu.2652eaca.js";import"./Modal.5655879a.js";import"./LoadingIndicator.8f360a48.js";import"./lottie.1c237c41.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="8316d58d-2e3b-45ee-a752-2f93b48299d9",e._sentryDebugIdIdentifier="sentry-dbid-8316d58d-2e3b-45ee-a752-2f93b48299d9")}catch{}})();const K=b({__name:"Members",setup(e){const a=_().params.organizationId,m=[{key:"email",label:"Email"}],l=async t=>{await i.create(a,t.email),p()},{loading:d,result:c,refetch:p}=w(()=>i.list(a)),u=f(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=c.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:s(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:s(u),"create-button-text":"Add members",fields:m,onCreate:l},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Members.a533cc38.js.map
