import{d as z,K as f,b as y,c as O,e as i,x as b,z as r,F as k,H as x,q as C}from"./registerWidgets.802bba2f.js";import{f as h,g as v}from"./icons.1dc8a69b.js";import{a as N}from"./asyncComputed.1364aaa9.js";import"./utils.d92e4b23.js";import{O as s}from"./organization.b6064e11.js";import{C as w}from"./CrudView.9eafd43a.js";import{N as B}from"./Navbar.a1669887.js";import"./passwordlessManager.d5134797.js";import"./pubsub.a0411919.js";import"./DropdownMenu.32db0ef2.js";import"./CircularLoading.5c7f2ad7.js";import"./Modal.e13f7972.js";import"./logo.084e5d7c.js";const I={class:"organizations"},V=z({__name:"Organizations",setup(A){const c=[{key:"name",label:"Organization Name"}],l=x(),{loading:m,result:n,refetch:d}=N(()=>s.list()),o=({key:e})=>{l.push({name:"organization",params:{organizationId:e}})},p=async e=>{const a=await s.create(e.name);o({key:a.id})},u=async({key:e})=>{var a,t;confirm("Are you sure you want to delete this organization?")&&(await((t=(a=n.value)==null?void 0:a.find(_=>_.id===e))==null?void 0:t.delete()),d())},g=f(()=>{var e,a;return{columns:[{name:"Organization Name"},{name:"Path"},{name:"Organization Actions"}],rows:(a=(e=n.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.name,classes:["title","centered"],link:`/organizations/${encodeURIComponent(t.id)}`},{text:t.id},{text:"",classes:["centered"],actions:[{icon:h,label:"Delete",onClick:u,dangerous:!0},{icon:v,label:"Edit Organization",onClick:o}]}]})))!=null?a:[]}});return(e,a)=>(y(),O(k,null,[i(B),b("div",I,[i(w,{"entity-name":"organization",loading:r(m),"ask-name-on-create":!0,title:"Organizations",description:"Organizations are a way to group your company's projects.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:r(g),fields:c,onCreate:p},null,8,["loading","table"])])],64))}});const G=C(V,[["__scopeId","data-v-d3481e1c"]]);export{G as default};
//# sourceMappingURL=Organizations.1c6df23d.js.map
