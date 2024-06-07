import{N as O}from"./Navbar.c70a7702.js";import{B as I}from"./BaseLayout.0d309ee4.js";import{C as _}from"./ContentLayout.0a4be918.js";import{C as x}from"./CrudView.ee499716.js";import{a as F}from"./ant-design.7af735be.js";import{a as M}from"./asyncComputed.22f2d2f6.js";import{F as R}from"./PhArrowSquareOut.vue.4f12cb74.js";import{G as h}from"./PhPencil.vue.03489b63.js";import{d as B,f7 as D,r as A,y as V,b,eV as $,f as o,w as i,u as l,ay as G,fd as j,c as E,bx as L,eX as U}from"./outputWidgets.ee3c0009.js";import"./gateway.e3c59c9d.js";import"./index.ef29e995.js";import{O as d}from"./organization.cd624baf.js";import{A as P,F as S}from"./Form.1f456b69.js";import{M as T}from"./Modal.ecd5381a.js";import"./logo.084e5d7c.js";import"./PhChats.vue.a13ae03f.js";import"./PhSignOut.vue.b14b9a0d.js";import"./router.618849c1.js";import"./index.9b206080.js";import"./index.22cf8ccc.js";import"./BookOutlined.4ccaa220.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5289a2a3.js";import"./url.762fcede.js";import"./index.cc5d069e.js";import"./index.ddf4c210.js";import"./popupNotifcation.f9e77086.js";import"./record.e9217c59.js";import"./pubsub.e0ba7a2d.js";import"./hasIn.d37c72ab.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="89446166-9541-4f24-afac-9a5e01207d24",r._sentryDebugIdIdentifier="sentry-dbid-89446166-9541-4f24-afac-9a5e01207d24")}catch{}})();const we=B({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],v=D(),{loading:z,result:c,refetch:f}=M(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=A({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await d.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await d.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,s;await F("Are you sure you want to delete this organization?")&&(await((s=(t=c.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=V(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=c.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:R,label:"Go to projects",onClick:g},{icon:h,label:"Rename",onClick:()=>w(t)},{icon:j,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),$(G,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:p,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(T),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),E(l(S),{key:0,layout:"vertical"},{default:i(()=>[o(l(P),{label:"New name"},{default:i(()=>[o(l(L),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{we as default};
//# sourceMappingURL=Organizations.bcd55a1c.js.map
