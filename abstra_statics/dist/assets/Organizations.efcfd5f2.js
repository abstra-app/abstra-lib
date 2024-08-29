import{N as O}from"./Navbar.a55b0a9b.js";import{B as I}from"./BaseLayout.725dd890.js";import{C as _}from"./ContentLayout.eb8212ea.js";import{C as x}from"./CrudView.2160ba4f.js";import{a as R}from"./ant-design.bf0bafc7.js";import{a as h}from"./asyncComputed.f61c65f6.js";import{F as B}from"./PhArrowSquareOut.vue.c6553844.js";import{G as D}from"./PhPencil.vue.a18a6a76.js";import{d as F,eq as M,e as $,f as A,X as G,b as o,w as i,u as l,aR as V,o as b,c as j,cy as E,bK as K,cx as L,R as U,cK as q,er as P}from"./vue-router.0f0de372.js";import"./gateway.f14ba533.js";import{O as c}from"./organization.e3db2763.js";import"./tables.5940f2e7.js";import"./PhChats.vue.73eb2a53.js";import"./PhSignOut.vue.3f31ce8f.js";import"./router.e4cab768.js";import"./index.49488088.js";import"./Avatar.a1a8ea31.js";import"./index.532e1b36.js";import"./index.bcb1ef88.js";import"./BookOutlined.8289ecab.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.4019547c.js";import"./url.8bd1978a.js";import"./PhDotsThreeVertical.vue.a2e4aa93.js";import"./popupNotifcation.07100d88.js";import"./record.698ae5f3.js";import"./string.f12a0ed4.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="833766cc-97b3-4963-bc84-2272df76c5a7",r._sentryDebugIdIdentifier="sentry-dbid-833766cc-97b3-4963-bc84-2272df76c5a7")}catch{}})();const be=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],d=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:f}=h(()=>c.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await c.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await c.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,s;await R("Are you sure you want to delete this organization?")&&(await((s=(t=p.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=A(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=p.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:B,label:"Go to projects",onClick:g},{icon:D,label:"Rename",onClick:()=>w(t)},{icon:P,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),G(V,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:d,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(q),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),j(l(L),{key:0,layout:"vertical"},{default:i(()=>[o(l(E),{label:"New name"},{default:i(()=>[o(l(K),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{be as default};
//# sourceMappingURL=Organizations.efcfd5f2.js.map
