import{N}from"./Navbar.d883e50b.js";import{B as O}from"./BaseLayout.eefefa39.js";import{C as _}from"./ContentLayout.c5e5c138.js";import{C as x}from"./CrudView.d23ed202.js";import{a as R}from"./ant-design.6ddd2189.js";import{a as D}from"./asyncComputed.a952b95a.js";import{F as h}from"./PhArrowSquareOut.vue.b7a6464e.js";import{G as B}from"./PhPencil.vue.ca8bfe59.js";import{d as F,eH as M,e as A,f as $,W as G,b as o,w as i,u as l,aJ as V,eI as j,o as y,c as E,co as L,bD as U,cn as H,R as J,cA as P}from"./vue-router.afcf06ff.js";import"./gateway.d3db1be9.js";import{O as d}from"./organization.cf0a0b6a.js";import"./tables.64b4b1f2.js";import"./PhChats.vue.fcd1087f.js";import"./PhSignOut.vue.f82e071b.js";import"./router.2d509b72.js";import"./index.b4dc3b3d.js";import"./index.5b074c44.js";import"./index.75d8e9ac.js";import"./BookOutlined.c829f575.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.93c0d6f1.js";import"./url.7823dc6b.js";import"./PhDotsThree.vue.e883d5ee.js";import"./index.6fb1e2c9.js";import"./popupNotifcation.c145e592.js";import"./record.3c47cf2c.js";import"./string.18977233.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="7a582034-62bb-42ab-8649-3965cb37d301",r._sentryDebugIdIdentifier="sentry-dbid-7a582034-62bb-42ab-8649-3965cb37d301")}catch{}})();const ye=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:g}=D(()=>d.list()),f=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=A({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function b(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await d.rename(a,t),g()}n.value={state:"idle"}}const C=async e=>{const a=await d.create(e.name);f({key:a.id})},k=async({key:e})=>{var t,s;await R("Are you sure you want to delete this organization?")&&(await((s=(t=p.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),g())},I=$(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=p.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:h,label:"Go to projects",onClick:f},{icon:B,label:"Rename",onClick:()=>w(t)},{icon:j,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(y(),G(V,null,[o(O,null,{navbar:i(()=>[o(N,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:I.value,fields:c,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>b(!1)),onOk:a[2]||(a[2]=t=>b(!0))},{default:i(()=>[n.value.state==="renaming"?(y(),E(l(H),{key:0,layout:"vertical"},{default:i(()=>[o(l(L),{label:"New name"},{default:i(()=>[o(l(U),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):J("",!0)]),_:1},8,["open"])],64))}});export{ye as default};
//# sourceMappingURL=Organizations.aed79eec.js.map
