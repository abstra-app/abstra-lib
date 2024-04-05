import{d as N,eI as O,r as _,H as x,b,eu as F,f as o,w as s,u as m,aC as M,eP as R,c as h,bx as B,ew as D}from"./outputWidgets.3681a2a5.js";import{a as A}from"./asyncComputed.317e87c5.js";import"./router.ef5c7692.js";import"./index.63f126f8.js";import{O as p}from"./organization.71029716.js";import{N as $}from"./Navbar.4610f1d5.js";import{C as G}from"./CrudView.b5e99bd9.js";import{B as V}from"./BaseLayout.409de48a.js";import{a as j}from"./ant-design.2fd7d10a.js";import{F as E}from"./PhArrowSquareOut.vue.5596feda.js";import{G as P}from"./PhPencil.vue.224ce5e0.js";import{A as U,F as H}from"./Form.c15ea82d.js";import{M as L}from"./Modal.7229d3ef.js";import"./popupNotifcation.d8032226.js";import"./index.cf4c23b9.js";import"./record.220fa006.js";import"./pubsub.916b1e4d.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.3019c4e7.js";import"./Text.1bf2a6e4.js";import"./index.b62ed045.js";import"./index.65e63d43.js";import"./BookOutlined.2d246e57.js";import"./Paragraph.326f3875.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b3245b51.js";import"./url.ec571b6b.js";import"./index.4f6b4519.js";import"./Title.142e78f1.js";import"./index.f44ff305.js";import"./index.567558aa.js";import"./hasIn.127ddf2a.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="9ad132b9-8b8f-44c8-a4fa-752eb5f906ee",i._sentryDebugIdIdentifier="sentry-dbid-9ad132b9-8b8f-44c8-a4fa-752eb5f906ee")}catch{}})();const Ce=N({__name:"Organizations",setup(i){const l=[{label:"My organizations",path:"/organizations"}],d=[{key:"name",label:"Organization Name"}],v=O(),{loading:w,result:c,refetch:f}=A(()=>p.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=_({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await p.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await p.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,r;await j("Are you sure you want to delete this organization?")&&(await((r=(t=c.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:r.delete()),f())},I=x(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=c.value)==null?void 0:e.map(t=>{var r,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(r=`/organizations/${encodeURIComponent(t.id)}`)!=null?r:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:E,label:"Go to projects",onClick:g},{icon:P,label:"Rename",onClick:()=>z(t)},{icon:R,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),F(M,null,[o(V,null,{navbar:s(()=>[o($,{breadcrumb:l})]),content:s(()=>[o(G,{"entity-name":"organization",loading:m(w),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:I.value,fields:d,onCreate:C},null,8,["loading","table"])]),_:1}),o(m(L),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),h(m(H),{key:0,layout:"vertical"},{default:s(()=>[o(m(U),{label:"New name"},{default:s(()=>[o(m(B),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):D("",!0)]),_:1},8,["open"])],64))}});export{Ce as default};
//# sourceMappingURL=Organizations.df4385cf.js.map
