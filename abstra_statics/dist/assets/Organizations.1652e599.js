import{N as O}from"./Navbar.8232cd8b.js";import{B as I}from"./BaseLayout.f17ee3c4.js";import{C as _}from"./ContentLayout.47f830b5.js";import{C as x}from"./CrudView.85e0c19e.js";import{a as R}from"./ant-design.175da089.js";import{a as h}from"./asyncComputed.717010b1.js";import{F as B}from"./PhArrowSquareOut.vue.d65845ae.js";import{G as D}from"./PhPencil.vue.54b6766e.js";import{d as F,eo as M,e as $,f as A,o as b,X as G,b as o,w as i,u as l,aR as V,c as j,cy as E,bK as K,cx as L,R as U,cK as P,ep as S}from"./vue-router.c5c56f4e.js";import"./gateway.9b9f9984.js";import{O as c}from"./organization.65945644.js";import"./tables.39aae4ca.js";import"./PhChats.vue.1038536b.js";import"./PhSignOut.vue.46f81954.js";import"./router.84570fd4.js";import"./index.70d59567.js";import"./Avatar.dec02eaa.js";import"./index.15730eb4.js";import"./index.6032b24f.js";import"./BookOutlined.8eef7b09.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a2f0d0d0.js";import"./url.581d1091.js";import"./PhDotsThreeVertical.vue.c9102d24.js";import"./Badge.c466787f.js";import"./popupNotifcation.e14988ff.js";import"./record.9964e21d.js";import"./string.98000289.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="daa21ec4-4e07-407e-852c-9b61015c8ad4",r._sentryDebugIdIdentifier="sentry-dbid-daa21ec4-4e07-407e-852c-9b61015c8ad4")}catch{}})();const ve=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],d=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:g}=h(()=>c.list()),f=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await c.rename(a,t),g()}n.value={state:"idle"}}const C=async e=>{const a=await c.create(e.name);f({key:a.id})},k=async({key:e})=>{var t,s;await R("Are you sure you want to delete this organization?")&&(await((s=(t=p.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),g())},N=A(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=p.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:B,label:"Go to projects",onClick:f},{icon:D,label:"Rename",onClick:()=>w(t)},{icon:S,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),G(V,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:d,create:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),j(l(L),{key:0,layout:"vertical"},{default:i(()=>[o(l(E),{label:"New name"},{default:i(()=>[o(l(K),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.1652e599.js.map
