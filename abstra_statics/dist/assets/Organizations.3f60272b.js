import{d as _,eA as I,r as N,G as x,b as y,ev as A,f as o,w as r,u as s,bq as h,c as R,bH as B,ex as D}from"./outputWidgets.e5a7a6db.js";import{z as F,o as M,C as $}from"./icons.333f5339.js";import{a as V}from"./asyncComputed.250552f3.js";import"./authorManager.f943277e.js";import"./index.24c24b87.js";import{O as l}from"./organization.7a62a459.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.a4bbad7f.js";import{C as E}from"./CrudView.81cfb919.js";import{B as G}from"./BaseLayout.f9d40c53.js";import{a as L}from"./ant-design.52a8c651.js";import{A as U}from"./FormItem.2db6693f.js";import{F as q}from"./Form.a361a762.js";import{M as H}from"./Title.6bbf7de5.js";import"./index.cf4c23b9.js";import"./record.f7474b2d.js";import"./pubsub.915eb02b.js";import"./gateway.33526140.js";import"./logo.084e5d7c.js";import"./Text.d4e8aa32.js";import"./index.9add52d3.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.71ef2a8e.js";import"./router.4b8b459c.js";import"./index.b0b21f1e.js";import"./url.b1b7c939.js";import"./index.9b713baf.js";import"./index.a9c2383d.js";import"./index.0fc991ca.js";import"./index.fb5d8943.js";import"./hasIn.d6a78f72.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="82a58988-1891-4ee3-8a53-9f2eef7e9188",i._sentryDebugIdIdentifier="sentry-dbid-82a58988-1891-4ee3-8a53-9f2eef7e9188")}catch{}})();const ve=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],b=I(),{loading:z,result:d,refetch:c}=V(()=>l.list()),p=({key:e})=>{b.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function v(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function f(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await l.rename(a,t),c()}n.value={state:"idle"}}const w=async e=>{const a=await l.create(e.name);p({key:a.id})},k=async({key:e})=>{var t,g;await L("Are you sure you want to delete this organization?")&&(await((g=(t=d.value)==null?void 0:t.find(O=>O.id===e))==null?void 0:g.delete()),c())},C=x(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"Actions",align:"right"}],rows:(a=(e=d.value)==null?void 0:e.map(t=>({key:t.id,cells:[{text:t.name,link:`/organizations/${encodeURIComponent(t.id)}`},{text:t.id},{text:"",actions:[{icon:F,label:"Go to projects",onClick:p},{icon:M,label:"Rename",onClick:()=>v(t)},{icon:$,label:"Delete",onClick:k,dangerous:!0}]}]})))!=null?a:[]}});return(e,a)=>(y(),A(h,null,[o(G,null,{navbar:r(()=>[o(j,{breadcrumb:m})]),content:r(()=>[o(E,{"entity-name":"organization",loading:s(z),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,onCreate:w},null,8,["loading","table"])]),_:1}),o(s(H),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>f(!1)),onOk:a[2]||(a[2]=t=>f(!0))},{default:r(()=>[n.value.state==="renaming"?(y(),R(s(q),{key:0,layout:"vertical"},{default:r(()=>[o(s(U),{label:"New name"},{default:r(()=>[o(s(B),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):D("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.3f60272b.js.map
