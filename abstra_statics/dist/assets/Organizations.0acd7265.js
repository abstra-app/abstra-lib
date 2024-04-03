import{d as N,eI as O,r as _,H as x,b as y,eu as F,f as o,w as s,u as m,aC as M,eP as R,c as h,bx as B,ew as D}from"./outputWidgets.24d715aa.js";import{a as A}from"./asyncComputed.a572f2b3.js";import"./router.b7ce2b88.js";import"./index.6d3f9576.js";import{O as p}from"./organization.bb8ed6b9.js";import{N as $}from"./Navbar.f8647f7b.js";import{C as G}from"./CrudView.9c3b97e6.js";import{B as V}from"./BaseLayout.1eb9bf7b.js";import{a as j}from"./ant-design.0626d571.js";import{F as E}from"./PhArrowSquareOut.vue.1a18478c.js";import{G as P}from"./PhPencil.vue.38135403.js";import{A as U,F as H}from"./Form.6c56759c.js";import{M as L}from"./Modal.4c3e5718.js";import"./popupNotifcation.d3362349.js";import"./index.cf4c23b9.js";import"./record.578a1ea0.js";import"./pubsub.d6a14665.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.af90e9a7.js";import"./index.f48e2d77.js";import"./index.d5f0d771.js";import"./Text.a3d7b61b.js";import"./BookOutlined.ead575dc.js";import"./Paragraph.876679f3.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.1f98ff18.js";import"./url.7c45b197.js";import"./index.89036478.js";import"./Title.0a3b50b2.js";import"./index.aa9d3c06.js";import"./index.c559b995.js";import"./hasIn.27500da0.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="6d5b4a16-6a51-4401-afae-2bb8c3bfbcf0",i._sentryDebugIdIdentifier="sentry-dbid-6d5b4a16-6a51-4401-afae-2bb8c3bfbcf0")}catch{}})();const Ce=N({__name:"Organizations",setup(i){const l=[{label:"My organizations",path:"/organizations"}],d=[{key:"name",label:"Organization Name"}],v=O(),{loading:w,result:c,refetch:f}=A(()=>p.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=_({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function b(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await p.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await p.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,r;await j("Are you sure you want to delete this organization?")&&(await((r=(t=c.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:r.delete()),f())},I=x(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=c.value)==null?void 0:e.map(t=>{var r,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(r=`/organizations/${encodeURIComponent(t.id)}`)!=null?r:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:E,label:"Go to projects",onClick:g},{icon:P,label:"Rename",onClick:()=>z(t)},{icon:R,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(y(),F(M,null,[o(V,null,{navbar:s(()=>[o($,{breadcrumb:l})]),content:s(()=>[o(G,{"entity-name":"organization",loading:m(w),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:I.value,fields:d,onCreate:C},null,8,["loading","table"])]),_:1}),o(m(L),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>b(!1)),onOk:a[2]||(a[2]=t=>b(!0))},{default:s(()=>[n.value.state==="renaming"?(y(),h(m(H),{key:0,layout:"vertical"},{default:s(()=>[o(m(U),{label:"New name"},{default:s(()=>[o(m(B),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):D("",!0)]),_:1},8,["open"])],64))}});export{Ce as default};
//# sourceMappingURL=Organizations.0acd7265.js.map
