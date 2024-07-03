import{N as O}from"./Navbar.8eb91df7.js";import{B as I}from"./BaseLayout.898b1561.js";import{C as _}from"./ContentLayout.7a33a027.js";import{C as x}from"./CrudView.93995bd4.js";import{a as D}from"./ant-design.fcd20c52.js";import{a as R}from"./asyncComputed.ee546a92.js";import{F as h}from"./PhArrowSquareOut.vue.83bf418c.js";import{G as B}from"./PhPencil.vue.2cc7eda4.js";import{d as F,eJ as M,q as $,J as j,o as b,eu as A,b as o,w as i,u as l,aD as G,eP as V,c as E,cj as J,bx as L,ci as P,ew as U,ct as q}from"./vue-router.bd17b6ae.js";import"./gateway.f9e440cf.js";import"./index.6b702ec6.js";import{O as d}from"./organization.314e4d5f.js";import"./Logo.32144cd6.js";import"./logo.084e5d7c.js";import"./PhChats.vue.4cb53075.js";import"./PhSignOut.vue.dafc5a34.js";import"./router.06c008a0.js";import"./index.c216c35a.js";import"./index.076e4c3f.js";import"./index.c3badc5e.js";import"./BookOutlined.704465a2.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c7b666fc.js";import"./url.9461dc21.js";import"./index.1a7a4a92.js";import"./popupNotifcation.2ea0b010.js";import"./record.7ceeed56.js";import"./string.227f458e.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="2609d54f-4814-47e6-8b67-c435193dddf4",r._sentryDebugIdIdentifier="sentry-dbid-2609d54f-4814-47e6-8b67-c435193dddf4")}catch{}})();const ve=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=M(),{loading:w,result:p,refetch:f}=R(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await d.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,s;await D("Are you sure you want to delete this organization?")&&(await((s=(a=p.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=j(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var s,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(s=`/organizations/${encodeURIComponent(a.id)}`)!=null?s:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:h,label:"Go to projects",onClick:g},{icon:B,label:"Rename",onClick:()=>z(a)},{icon:V,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),A(G,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(w),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(q),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),E(l(P),{key:0,layout:"vertical"},{default:i(()=>[o(l(J),{label:"New name"},{default:i(()=>[o(l(L),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.726f9bdb.js.map
