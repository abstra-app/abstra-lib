import{N as O}from"./Navbar.b1ff3113.js";import{B as I}from"./BaseLayout.5fc18dd6.js";import{C as _}from"./ContentLayout.169cf879.js";import{C as x}from"./CrudView.cfedb12a.js";import{a as D}from"./ant-design.1e9d5b60.js";import{a as M}from"./asyncComputed.e02ddca3.js";import{F as R}from"./PhArrowSquareOut.vue.33b3861a.js";import{G as h}from"./PhPencil.vue.e697d58c.js";import{d as B,eM as F,e as $,f as j,o as b,et as A,b as o,w as i,u as l,aD as G,eN as V,c as E,cj as L,bx as U,ci as P,ev as S,ct as T}from"./vue-router.14a548cd.js";import"./gateway.3e99bbcd.js";import"./tables.17e64d60.js";import{O as d}from"./organization.36019955.js";import"./PhChats.vue.5b56f171.js";import"./PhSignOut.vue.98c36413.js";import"./router.153eed5e.js";import"./index.d30600b7.js";import"./index.db7959db.js";import"./index.f7583dd5.js";import"./BookOutlined.20d08049.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a8b67555.js";import"./url.035a83f3.js";import"./index.737de368.js";import"./popupNotifcation.857cd3f8.js";import"./record.38982c9b.js";import"./string.06dbe131.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="c46f9139-8a4b-46af-9107-d9b6310b04c0",r._sentryDebugIdIdentifier="sentry-dbid-c46f9139-8a4b-46af-9107-d9b6310b04c0")}catch{}})();const ye=B({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=F(),{loading:z,result:p,refetch:f}=M(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await d.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await d.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,s;await D("Are you sure you want to delete this organization?")&&(await((s=(t=p.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=j(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=p.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:R,label:"Go to projects",onClick:g},{icon:h,label:"Rename",onClick:()=>w(t)},{icon:V,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),A(G,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(T),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),E(l(P),{key:0,layout:"vertical"},{default:i(()=>[o(l(L),{label:"New name"},{default:i(()=>[o(l(U),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):S("",!0)]),_:1},8,["open"])],64))}});export{ye as default};
//# sourceMappingURL=Organizations.2169a353.js.map
