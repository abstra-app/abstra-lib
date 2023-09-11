import{d as p,ey as u,F as f,b as y,u as g,bu as _}from"./registerWidgets.cd0230b6.js";import{a as w}from"./asyncComputed.d5643777.js";import"./gateway.13cd486c.js";import{M as s}from"./member.79e306df.js";import"./index.832c5194.js";import{C as I}from"./CrudView.511a0961.js";import"./passwordlessManager.e49dd838.js";import"./pubsub.acd37fe2.js";import"./storage.c08be30c.js";import"./activeRecord.87f5172c.js";import"./DropdownMenu.43cd71e8.js";import"./Modal.bb8ad073.js";import"./LoadingIndicator.47654df0.js";import"./lottie.3848dff9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="fdb47e38-e851-479b-8a60-c626bce31dbc",e._sentryDebugIdIdentifier="sentry-dbid-fdb47e38-e851-479b-8a60-c626bce31dbc")}catch{}})();const N=p({__name:"Members",setup(e){const a=u().params.organizationId,i=[{key:"email",label:"Email"}],m=async t=>{await s.create(a,t.email),c()},{loading:l,result:d,refetch:c}=w(()=>s.list(a)),b=f(()=>{var t,r;return{columns:[{name:"Email"},{name:"Role"}],rows:(r=(t=d.value)==null?void 0:t.map(n=>({key:n.email,cells:[{text:n.email,classes:["title","centered"]},{text:n.role,classes:["centered"]}]})))!=null?r:[]}});return(t,r)=>(y(),g(I,{"entity-name":"members",loading:_(l),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:b.value,"create-button-text":"Add members",fields:i,onCreate:m},null,8,["loading","table"]))}});export{N as default};
//# sourceMappingURL=Members.e213223b.js.map
