import{d as _,eA as I,r as N,G as x,b,ev as A,f as o,w as r,u as s,bq as h,c as R,bH as B,ex as D}from"./outputWidgets.98b19ac3.js";import{z as F,o as M,C as $}from"./icons.17769965.js";import{a as V}from"./asyncComputed.2379a31d.js";import"./authorManager.5fed50c2.js";import"./index.06f0c6fa.js";import{O as l}from"./organization.c3d838b1.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.f99e2f73.js";import{C as E}from"./CrudView.fc32e895.js";import{B as G}from"./BaseLayout.8115930a.js";import{a as L}from"./ant-design.c7967600.js";import{A as U}from"./FormItem.87880587.js";import{F as q}from"./Form.b6478e2b.js";import{M as H}from"./Title.91da0fd8.js";import"./index.cf4c23b9.js";import"./record.5d62c140.js";import"./pubsub.19c67421.js";import"./gateway.9df49d3d.js";import"./logo.084e5d7c.js";import"./Text.e8d75318.js";import"./index.855368b5.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.8965d7ed.js";import"./router.f63c5382.js";import"./index.5cd8edea.js";import"./url.17d1d095.js";import"./index.dd53931c.js";import"./index.61ce9763.js";import"./index.d3726f44.js";import"./index.2e29336b.js";import"./hasIn.1975a9b2.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="d9e32962-006a-4e3d-bbd2-58b9da4d3c03",i._sentryDebugIdIdentifier="sentry-dbid-d9e32962-006a-4e3d-bbd2-58b9da4d3c03")}catch{}})();const ve=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],d=[{key:"name",label:"Organization Name"}],y=I(),{loading:z,result:u,refetch:c}=V(()=>l.list()),p=({key:e})=>{y.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function v(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function g(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await l.rename(a,t),c()}n.value={state:"idle"}}const w=async e=>{const a=await l.create(e.name);p({key:a.id})},k=async({key:e})=>{var t,f;await L("Are you sure you want to delete this organization?")&&(await((f=(t=u.value)==null?void 0:t.find(O=>O.id===e))==null?void 0:f.delete()),c())},C=x(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(e=u.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.name,link:`/organizations/${encodeURIComponent(t.id)}`},{text:t.id},{text:"",actions:[{icon:F,label:"Go to projects",onClick:p},{icon:M,label:"Rename",onClick:()=>v(t)},{icon:$,label:"Delete",onClick:k,dangerous:!0}]}]})))!=null?a:[]}});return(e,a)=>(b(),A(h,null,[o(G,null,{navbar:r(()=>[o(j,{breadcrumb:m})]),content:r(()=>[o(E,{"entity-name":"organization",loading:s(z),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:d,onCreate:w},null,8,["loading","table"])]),_:1}),o(s(H),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>g(!1)),onOk:a[2]||(a[2]=t=>g(!0))},{default:r(()=>[n.value.state==="renaming"?(b(),R(s(q),{key:0,layout:"vertical"},{default:r(()=>[o(s(U),{label:"New name"},{default:r(()=>[o(s(B),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):D("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.0ae43367.js.map
