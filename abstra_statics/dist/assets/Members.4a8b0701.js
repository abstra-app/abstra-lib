import{d as u,ey as f,F as b,b as y,u as g,bu as _}from"./registerWidgets.0e440875.js";import{a as w}from"./asyncComputed.8678d980.js";import"./gateway.dd0f6075.js";import{M as s}from"./member.69c73fce.js";import"./index.095a51b1.js";import{C as I}from"./CrudView.1bea560c.js";import"./passwordlessManager.78e50ed3.js";import"./pubsub.3f22547d.js";import"./storage.f319f6a5.js";import"./activeRecord.a7f077c5.js";import"./DropdownMenu.b7d3c372.js";import"./Modal.9db32832.js";import"./LoadingIndicator.c6cb327c.js";import"./lottie.1b91379a.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="3d7677e8-ea42-4080-a08c-cd3390337df1",e._sentryDebugIdIdentifier="sentry-dbid-3d7677e8-ea42-4080-a08c-cd3390337df1")}catch{}})();const N=u({__name:"Members",setup(e){const o=f().params.organizationId,i=[{key:"email",label:"Email"}],m=async t=>{await s.create(o,t.email),c()},{loading:l,result:d,refetch:c}=w(()=>s.list(o)),p=b(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=d.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:_(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:p.value,"create-button-text":"Add members",fields:i,onCreate:m},null,8,["loading","table"]))}});export{N as default};
//# sourceMappingURL=Members.4a8b0701.js.map
