import{d as b,K as f,b as y,t as g,z as s,J as _}from"./registerWidgets.75ad232d.js";import{a as w}from"./asyncComputed.62fdaa3d.js";import"./gateway.5777efa2.js";import{M as i}from"./member.dfae94e3.js";import"./index.7d53b731.js";import{C as I}from"./CrudView.dd8c5eda.js";import"./passwordlessManager.e427d83f.js";import"./pubsub.98e48b80.js";import"./activeRecord.91b12e0f.js";import"./DropdownMenu.bbfdc1b0.js";import"./Modal.5f99340f.js";import"./LoadingIndicator.bb348770.js";import"./lottie.24c4e251.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="04a1fd95-6b8a-4861-82c7-0332bf0779e1",e._sentryDebugIdIdentifier="sentry-dbid-04a1fd95-6b8a-4861-82c7-0332bf0779e1")}catch{}})();const K=b({__name:"Members",setup(e){const o=_().params.organizationId,m=[{key:"email",label:"Email"}],l=async t=>{await i.create(o,t.email),p()},{loading:d,result:c,refetch:p}=w(()=>i.list(o)),u=f(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=c.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:s(d),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:s(u),"create-button-text":"Add members",fields:m,onCreate:l},null,8,["loading","table"]))}});export{K as default};
//# sourceMappingURL=Members.ba2ddad6.js.map
