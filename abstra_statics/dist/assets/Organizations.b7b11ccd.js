import{N}from"./Navbar.efc28d54.js";import{B as O}from"./BaseLayout.97412e35.js";import{C as _}from"./ContentLayout.e615dbbd.js";import{C as x}from"./CrudView.613ef3f8.js";import{a as R}from"./ant-design.fbc95d0a.js";import{a as D}from"./asyncComputed.f065b2cf.js";import{F as h}from"./PhArrowSquareOut.vue.d2cf7b57.js";import{G as B}from"./PhPencil.vue.0fe9b452.js";import{d as F,eH as M,e as A,f as $,W as G,b as o,w as i,u as l,aJ as V,eI as j,o as b,c as E,co as L,bD as U,cn as H,R as J,cA as P}from"./vue-router.364debaa.js";import"./gateway.3b9ccabd.js";import"./tables.54c187a9.js";import{O as c}from"./organization.9b52c610.js";import"./PhChats.vue.57aa47d9.js";import"./PhSignOut.vue.53229f65.js";import"./router.f7c08c4c.js";import"./index.248d08ba.js";import"./index.6184fe7e.js";import"./index.d54d7e4f.js";import"./BookOutlined.0e1f5876.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.c1d10c52.js";import"./url.375724b9.js";import"./PhDotsThree.vue.45a73ae1.js";import"./index.157b9ada.js";import"./popupNotifcation.5b2e3617.js";import"./record.b865c14c.js";import"./string.bdbbe29f.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="88c00a75-cfb9-4416-8748-7f00385f5042",r._sentryDebugIdIdentifier="sentry-dbid-88c00a75-cfb9-4416-8748-7f00385f5042")}catch{}})();const be=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],d=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:f}=D(()=>c.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=A({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await c.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await c.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,s;await R("Are you sure you want to delete this organization?")&&(await((s=(t=p.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),f())},I=$(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=p.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:h,label:"Go to projects",onClick:g},{icon:B,label:"Rename",onClick:()=>w(t)},{icon:j,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),G(V,null,[o(O,null,{navbar:i(()=>[o(N,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:I.value,fields:d,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),E(l(H),{key:0,layout:"vertical"},{default:i(()=>[o(l(L),{label:"New name"},{default:i(()=>[o(l(U),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):J("",!0)]),_:1},8,["open"])],64))}});export{be as default};
//# sourceMappingURL=Organizations.b7b11ccd.js.map
