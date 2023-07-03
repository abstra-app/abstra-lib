import{d as _,K as z,b as f,c as y,e as i,x as O,z as r,F as x,H as C,q as b}from"./registerWidgets.81004098.js";import{f as k,g as h}from"./icons.ea1ef9e9.js";import{a as v}from"./asyncComputed.841de1fc.js";import"./passwordlessManager.d8088db9.js";import{O as s}from"./organization.91baba90.js";import{C as w}from"./CrudView.20b9da12.js";import{N}from"./Navbar.60d8d8eb.js";import"./utils.ac5c1175.js";import"./pubsub.a0411919.js";import"./DropdownMenu.f9c0b8cd.js";import"./CircularLoading.cef8a22f.js";import"./Modal.bc20d9b5.js";import"./logo.084e5d7c.js";const B={class:"organizations"},I=_({__name:"Organizations",setup(V){const c=C(),{loading:l,result:o,refetch:m}=v(()=>s.list()),n=({key:e})=>{c.push({name:"organization",params:{organizationId:e}})},d=async e=>{const t=await s.create(e);n({key:t.id})},p=async({key:e})=>{var t,a;confirm("Are you sure you want to delete this organization?")&&(await((a=(t=o.value)==null?void 0:t.find(g=>g.id===e))==null?void 0:a.delete()),m())},u=z(()=>{var e,t;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Organization Actions"}],rows:(t=(e=o.value)==null?void 0:e.map(a=>({key:a.id,cells:[{text:a.name,classes:["title","centered"],link:`/organizations/${encodeURIComponent(a.id)}`},{text:a.id},{text:"",classes:["centered"],actions:[{icon:k,label:"Delete",onClick:p,dangerous:!0},{icon:h,label:"Edit Organization",onClick:n}]}]})))!=null?t:[]}});return(e,t)=>(f(),y(x,null,[i(N),O("div",B,[i(w,{"entity-name":"organization",loading:r(l),"ask-name-on-create":!0,title:"Organizations",description:"Organizations are a way to group your company's projects.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:r(u),onCreate:d},null,8,["loading","table"])])],64))}});const $=b(I,[["__scopeId","data-v-c358f474"]]);export{$ as default};
//# sourceMappingURL=Organizations.7dbd86dc.js.map
