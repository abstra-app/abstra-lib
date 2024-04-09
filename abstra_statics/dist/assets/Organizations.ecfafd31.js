import{d as N,eI as O,r as _,H as x,b as y,eu as F,f as o,w as s,u as m,aC as M,eQ as R,c as h,bx as B,ew as D}from"./outputWidgets.0fcc4832.js";import{a as A}from"./asyncComputed.8a68a021.js";import"./router.9cf48e6f.js";import"./index.179db35e.js";import{O as u}from"./organization.8bb148b4.js";import{N as $}from"./Navbar.a16a1c82.js";import{C as G}from"./CrudView.41605d7f.js";import{B as V}from"./BaseLayout.52ea8ea2.js";import{a as j}from"./ant-design.32a1acf1.js";import{F as E}from"./PhArrowSquareOut.vue.178a87be.js";import{G as U}from"./PhPencil.vue.c8aa3b4f.js";import{A as H,F as L}from"./Form.780f472a.js";import{M as P}from"./Modal.401e1f75.js";import"./popupNotifcation.5ab97a7a.js";import"./index.cf4c23b9.js";import"./record.1fa21a6f.js";import"./pubsub.ec35bb48.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.6aa9ab20.js";import"./Text.4d1a9b47.js";import"./index.2b7e9891.js";import"./index.7b2544b3.js";import"./BookOutlined.80e5839e.js";import"./Paragraph.1f759319.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.211b0839.js";import"./url.58ed6757.js";import"./index.61769a5c.js";import"./Title.694ed3c8.js";import"./index.e87d52ec.js";import"./index.281794dc.js";import"./hasIn.82f707c7.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="deb02855-cc6c-4299-a531-addb492bdba3",i._sentryDebugIdIdentifier="sentry-dbid-deb02855-cc6c-4299-a531-addb492bdba3")}catch{}})();const Ce=N({__name:"Organizations",setup(i){const l=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],v=O(),{loading:w,result:c,refetch:g}=A(()=>u.list()),f=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=_({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function b(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await u.rename(a,t),g()}n.value={state:"idle"}}const C=async e=>{const a=await u.create(e.name);f({key:a.id})},k=async({key:e})=>{var t,r;await j("Are you sure you want to delete this organization?")&&(await((r=(t=c.value)==null?void 0:t.find(d=>d.id===e))==null?void 0:r.delete()),g())},I=x(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=c.value)==null?void 0:e.map(t=>{var r,d;return{key:t.id,cells:[{type:"link",text:t.name,to:(r=`/organizations/${encodeURIComponent(t.id)}`)!=null?r:null},{type:"text",text:(d=t.id)!=null?d:null},{type:"actions",actions:[{icon:E,label:"Go to projects",onClick:f},{icon:U,label:"Rename",onClick:()=>z(t)},{icon:R,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(y(),F(M,null,[o(V,null,{navbar:s(()=>[o($,{breadcrumb:l})]),content:s(()=>[o(G,{"entity-name":"organization",loading:m(w),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:I.value,fields:p,onCreate:C},null,8,["loading","table"])]),_:1}),o(m(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>b(!1)),onOk:a[2]||(a[2]=t=>b(!0))},{default:s(()=>[n.value.state==="renaming"?(y(),h(m(L),{key:0,layout:"vertical"},{default:s(()=>[o(m(H),{label:"New name"},{default:s(()=>[o(m(B),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):D("",!0)]),_:1},8,["open"])],64))}});export{Ce as default};
//# sourceMappingURL=Organizations.ecfafd31.js.map
