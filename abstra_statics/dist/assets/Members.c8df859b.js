import{d,K as u,b,t as f,z as r,J as _}from"./registerWidgets.7452ec0b.js";import{a as g}from"./asyncComputed.23d75013.js";import"./utils.e51f765d.js";import{M as s}from"./member.62e0f586.js";import{C as y}from"./CrudView.2c6fede3.js";import"./passwordlessManager.abb9ad15.js";import"./pubsub.a0411919.js";import"./DropdownMenu.e6caac19.js";import"./CircularLoading.6725993e.js";import"./Modal.f31beab2.js";const A=d({__name:"Members",setup(x){const o=_().params.organizationId,m=[{key:"email",label:"Email"}],i=async e=>{await s.create(o,e.email),c()},{loading:n,result:l,refetch:c}=g(()=>s.list(o)),p=u(()=>{var e,t;return{columns:[{name:"Email"},{name:"Role"}],rows:(t=(e=l.value)==null?void 0:e.map(a=>({key:a.email,cells:[{text:a.email,classes:["title","centered"]},{text:a.role,classes:["centered"]}]})))!=null?t:[]}});return(e,t)=>(b(),f(y,{"entity-name":"members",loading:r(n),title:"Organization members",description:"List all organization members.","empty-title":"No members yet",table:r(p),"create-button-text":"Add members",fields:m,onCreate:i},null,8,["loading","table"]))}});export{A as default};
//# sourceMappingURL=Members.c8df859b.js.map
