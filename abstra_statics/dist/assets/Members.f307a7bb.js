import{d as u,ez as b,H as f,b as y,c as g,u as _}from"./outputWidgets.17e2270d.js";import{a as w}from"./asyncComputed.c8589796.js";import"./router.845058a4.js";import{M as m}from"./member.4c8417db.js";import"./columns.1320dbbc.js";import{C as I}from"./CrudView.0a7d7224.js";import"./Title.7b6ce571.js";import"./index.4787064b.js";import"./gateway.deb7dadd.js";import"./activeRecord.1230459a.js";import"./pubsub.52f6192d.js";import"./index.f4ac7424.js";import"./icons.ae606380.js";import"./index.23cb8791.js";import"./Form.0e9953f6.js";import"./url.6c73df07.js";import"./index.29151007.js";import"./index.4b3be88e.js";import"./index.cfd05648.js";import"./index.bedec2c6.js";import"./index.34b7172c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="b584624d-0363-41e7-a95a-ba74ad78f921",e._sentryDebugIdIdentifier="sentry-dbid-b584624d-0363-41e7-a95a-ba74ad78f921")}catch{}})();const J=u({__name:"Members",setup(e){const a=b().params.organizationId,n=[{key:"email",label:"Email"}],s=async t=>{await m.create(a,t.email),p()},{loading:l,result:d,refetch:p}=w(()=>m.list(a)),c=f(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=d.value)==null?void 0:t.map(i=>({key:i.email,cells:[{text:i.email},{text:i.role}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:_(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:c.value,"create-button-text":"Add members",fields:n,onCreate:s},null,8,["loading","table"]))}});export{J as default};
//# sourceMappingURL=Members.f307a7bb.js.map
