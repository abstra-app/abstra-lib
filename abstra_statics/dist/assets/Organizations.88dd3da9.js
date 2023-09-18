import{d as b,ex as y,F as z,b as O,c as w,e as c,er as h,bu as k,bw as v,t as x}from"./registerWidgets.fbede4e9.js";import{e as C,f as I}from"./icons.9ea484f9.js";import{a as N}from"./asyncComputed.ded4e064.js";import"./gateway.6dfda10a.js";import{O as d}from"./organization.ad8b042a.js";import"./index.7df6535c.js";import{C as D}from"./CrudView.b195b458.js";import{N as A}from"./Navbar.bcb46846.js";import"./passwordlessManager.fc9080ef.js";import"./pubsub.9639d873.js";import"./storage.953471f2.js";import"./activeRecord.4cd28aae.js";import"./DropdownMenu.db99a3d3.js";import"./Modal.2d0c3e5e.js";import"./LoadingIndicator.d9107e25.js";import"./lottie.af5deb23.js";import"./logo.084e5d7c.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="cabff6e5-9d23-4dcc-a818-5a2fa84907e9",n._sentryDebugIdIdentifier="sentry-dbid-cabff6e5-9d23-4dcc-a818-5a2fa84907e9")}catch{}})();const B={class:"organizations"},E=b({__name:"Organizations",setup(n){const o=[{label:"My organizations",path:"/organizations"}],i=[{key:"name",label:"Organization Name"}],l=y(),{loading:m,result:r,refetch:p}=N(()=>d.list()),s=({key:e})=>{l.push({name:"organization",params:{organizationId:e}})},u=async e=>{const a=await d.create(e.name);s({key:a.id})},g=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this organization?")&&(await((t=(a=r.value)==null?void 0:a.find(_=>_.id===e))==null?void 0:t.delete()),p())},f=z(()=>{var e,a;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Organization Actions"}],rows:(a=(e=r.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.name,classes:["title","centered"],link:`/organizations/${encodeURIComponent(t.id)}`},{text:t.id},{text:"",classes:["centered"],actions:[{icon:C,label:"Delete",onClick:g,dangerous:!0},{icon:I,label:"Edit Organization",onClick:s}]}]})))!=null?a:[]}});return(e,a)=>(O(),w(v,null,[c(A,{breadcrumb:o}),h("div",B,[c(D,{"entity-name":"organization",loading:k(m),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:f.value,fields:i,onCreate:u},null,8,["loading","table"])])],64))}});const W=x(E,[["__scopeId","data-v-29b5921d"]]);export{W as default};
//# sourceMappingURL=Organizations.88dd3da9.js.map
