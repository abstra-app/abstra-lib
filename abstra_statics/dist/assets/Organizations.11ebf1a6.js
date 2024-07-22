import{N as O}from"./Navbar.0cdfc7e2.js";import{B as I}from"./BaseLayout.fb7217c4.js";import{C as _}from"./ContentLayout.daa1323f.js";import{C as x}from"./CrudView.f70bf564.js";import{a as R}from"./ant-design.37bf0edc.js";import{a as h}from"./asyncComputed.7f523489.js";import{F as B}from"./PhArrowSquareOut.vue.4ebdbe7d.js";import{G as D}from"./PhPencil.vue.eb923c1b.js";import{d as F,eN as M,e as V,f as $,o as b,V as A,b as o,w as i,u as l,aI as G,eO as j,c as E,co as L,bC as U,cn as P,R as S,cy as T}from"./vue-router.33b1a225.js";import"./gateway.355ba675.js";import"./tables.f9bd7897.js";import{O as d}from"./organization.6bcbaf26.js";import"./PhChats.vue.cdb25035.js";import"./PhSignOut.vue.246f3f49.js";import"./router.d0575da4.js";import"./index.1d668b87.js";import"./index.920e6bcb.js";import"./index.8559649a.js";import"./BookOutlined.39378e37.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.84f0f0c6.js";import"./url.56afe455.js";import"./index.9f916721.js";import"./popupNotifcation.46ea30c9.js";import"./record.bc4c96de.js";import"./string.85a74f14.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="8db9794d-547e-464e-b057-059a0387990b",r._sentryDebugIdIdentifier="sentry-dbid-8db9794d-547e-464e-b057-059a0387990b")}catch{}})();const ye=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:g}=h(()=>d.list()),f=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=V({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await d.rename(a,t),g()}n.value={state:"idle"}}const C=async e=>{const a=await d.create(e.name);f({key:a.id})},k=async({key:e})=>{var t,s;await R("Are you sure you want to delete this organization?")&&(await((s=(t=p.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),g())},N=$(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=p.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:B,label:"Go to projects",onClick:f},{icon:D,label:"Rename",onClick:()=>w(t)},{icon:j,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),A(G,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(T),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),E(l(P),{key:0,layout:"vertical"},{default:i(()=>[o(l(L),{label:"New name"},{default:i(()=>[o(l(U),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):S("",!0)]),_:1},8,["open"])],64))}});export{ye as default};
//# sourceMappingURL=Organizations.11ebf1a6.js.map
