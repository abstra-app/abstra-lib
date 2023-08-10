import{d as b,K as f,b as y,t as g,z as s,J as _}from"./registerWidgets.0e006b6f.js";import{a as w}from"./asyncComputed.62aacf33.js";import"./gateway.68890283.js";import{M as i}from"./member.7da2b412.js";import"./index.699f7fd0.js";import{C as I}from"./CrudView.ce48083b.js";import"./passwordlessManager.4cf24a2b.js";import"./pubsub.13db2123.js";import"./activeRecord.d399634f.js";import"./DropdownMenu.a8ccd533.js";import"./Modal.d54926bb.js";import"./LoadingIndicator.8b9ec224.js";import"./lottie.b974d0b6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="3b624c50-8801-4d1b-ae3e-c8c208acf822",e._sentryDebugIdIdentifier="sentry-dbid-3b624c50-8801-4d1b-ae3e-c8c208acf822")}catch{}})();const K=b({__name:"Members",setup(e){const o=_().params.organizationId,m=[{key:"email",label:"Email"}],l=async t=>{await i.create(o,t.email),p()},{loading:c,result:d,refetch:p}=w(()=>i.list(o)),u=f(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=d.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:s(c),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:s(u),"create-button-text":"Add members",fields:m,onCreate:l},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Members.e6c6a30e.js.map
