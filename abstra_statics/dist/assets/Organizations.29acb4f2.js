import{N as O}from"./Navbar.e0f70d6a.js";import{B as I}from"./BaseLayout.b75c9556.js";import{C as _}from"./ContentLayout.94e1424a.js";import{C as x}from"./CrudView.792f8402.js";import{a as F}from"./ant-design.746b2b3c.js";import{a as M}from"./asyncComputed.8b3114fc.js";import{F as R}from"./PhArrowSquareOut.vue.415665fc.js";import{G as h}from"./PhPencil.vue.c698c2ae.js";import{d as B,f7 as D,r as A,y as V,b,eV as $,f as o,w as i,u as l,ay as G,fd as j,c as E,bx as L,eX as U}from"./outputWidgets.f4ce2475.js";import"./gateway.12ae1b79.js";import"./index.192d7ce9.js";import{O as d}from"./organization.956029a3.js";import{A as P,F as S}from"./Form.340be400.js";import{M as T}from"./Modal.d5227f0c.js";import"./logo.084e5d7c.js";import"./PhChats.vue.0f592489.js";import"./PhSignOut.vue.d12b9681.js";import"./router.c1f790da.js";import"./index.eca95cd2.js";import"./index.6d36c6c3.js";import"./BookOutlined.59ab169e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.74ecda45.js";import"./url.241154b3.js";import"./index.8f19b0e5.js";import"./index.c56eb263.js";import"./popupNotifcation.c07510ef.js";import"./record.024d7c78.js";import"./pubsub.0e98a66a.js";import"./hasIn.d56c31bb.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="aa830ddc-91cb-4ab6-89c2-1a0b12bf3645",r._sentryDebugIdIdentifier="sentry-dbid-aa830ddc-91cb-4ab6-89c2-1a0b12bf3645")}catch{}})();const we=B({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=D(),{loading:z,result:p,refetch:f}=M(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=A({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await d.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await d.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,s;await F("Are you sure you want to delete this organization?")&&(await((s=(t=p.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=V(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=p.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:R,label:"Go to projects",onClick:g},{icon:h,label:"Rename",onClick:()=>w(t)},{icon:j,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),$(G,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(T),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),E(l(S),{key:0,layout:"vertical"},{default:i(()=>[o(l(P),{label:"New name"},{default:i(()=>[o(l(L),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{we as default};
//# sourceMappingURL=Organizations.29acb4f2.js.map
