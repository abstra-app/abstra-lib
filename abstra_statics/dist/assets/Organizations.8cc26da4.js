import{d as _,K as y,b as z,c as O,e as c,x as w,z as d,F as k,H as h,q as x}from"./registerWidgets.88c51da7.js";import{f as C,g as v}from"./icons.b8d1681f.js";import{a as I}from"./asyncComputed.a5845b08.js";import"./gateway.a2c60508.js";import{O as l}from"./organization.546edb88.js";import"./index.0861a0a2.js";import{C as N}from"./CrudView.bc829b10.js";import{N as D}from"./Navbar.63054359.js";import"./passwordlessManager.28ad1e43.js";import"./pubsub.4f378f83.js";import"./activeRecord.aa5c6156.js";import"./DropdownMenu.66652201.js";import"./Modal.a39e83fe.js";import"./LoadingIndicator.c12a8499.js";import"./lottie.67123843.js";import"./logo.084e5d7c.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="90d37872-ff01-41be-abbe-3c36b5b00fe9",n._sentryDebugIdIdentifier="sentry-dbid-90d37872-ff01-41be-abbe-3c36b5b00fe9")}catch{}})();const A={class:"organizations"},B=_({__name:"Organizations",setup(n){const o=[{key:"name",label:"Organization Name"}],i=h(),{loading:m,result:r,refetch:p}=I(()=>l.list()),s=({key:e})=>{i.push({name:"organization",params:{organizationId:e}})},u=async e=>{const t=await l.create(e.name);s({key:t.id})},g=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this organization?")&&(await((a=(t=r.value)==null?void 0:t.find(b=>b.id===e))==null?void 0:a.delete()),p())},f=y(()=>{var e,t;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Organization Actions"}],rows:(t=(e=r.value)==null?void 0:e.map(a=>({key:a.id,cells:[{text:a.name,classes:["title","centered"],link:`/organizations/${encodeURIComponent(a.id)}`},{text:a.id},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:g,dangerous:!0},{icon:v,label:"Edit Organization",onClick:s}]}]})))!=null?t:[]}});return(e,t)=>(z(),O(k,null,[c(D),w("div",A,[c(N,{"entity-name":"organization",loading:d(m),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:d(f),fields:o,onCreate:u},null,8,["loading","table"])])],64))}});const Q=x(B,[["__scopeId","data-v-360ce05c"]]);export{Q as default};
//# sourceMappingURL=Organizations.8cc26da4.js.map
