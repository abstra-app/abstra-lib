import{d as N,eI as O,r as _,H as x,b as y,eu as F,f as o,w as s,u as m,aC as M,eQ as R,c as h,bx as B,ew as D}from"./outputWidgets.bcc55d62.js";import{a as A}from"./asyncComputed.522271b4.js";import"./router.bba84ca4.js";import"./index.e7ff4833.js";import{O as c}from"./organization.096f3741.js";import{N as $}from"./Navbar.c4c439b4.js";import{C as G}from"./CrudView.cd991a27.js";import{B as V}from"./BaseLayout.52bd2852.js";import{a as j}from"./ant-design.37022b14.js";import{F as E}from"./PhArrowSquareOut.vue.26e95615.js";import{G as U}from"./PhPencil.vue.064784e3.js";import{A as H,F as L}from"./Form.9642dc84.js";import{M as P}from"./Modal.c1568b18.js";import"./popupNotifcation.d79eb8c0.js";import"./index.cf4c23b9.js";import"./record.a263f53d.js";import"./pubsub.bfb62ff6.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.530e91ac.js";import"./Text.2f2beebe.js";import"./index.f8230431.js";import"./index.08c60d0d.js";import"./BookOutlined.d81490c0.js";import"./Paragraph.061ecf6b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.3f334ae6.js";import"./url.6f9e45fc.js";import"./index.89bdf6a2.js";import"./Title.cba782a2.js";import"./index.af620851.js";import"./index.e6fdef6e.js";import"./hasIn.4a295b04.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="bf73f841-404f-4b7c-bc10-b772af42c13c",i._sentryDebugIdIdentifier="sentry-dbid-bf73f841-404f-4b7c-bc10-b772af42c13c")}catch{}})();const Ce=N({__name:"Organizations",setup(i){const l=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],v=O(),{loading:w,result:d,refetch:f}=A(()=>c.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=_({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function b(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await c.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await c.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,r;await j("Are you sure you want to delete this organization?")&&(await((r=(a=d.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:r.delete()),f())},I=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=d.value)==null?void 0:e.map(a=>{var r,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:E,label:"Go to projects",onClick:g},{icon:U,label:"Rename",onClick:()=>z(a)},{icon:R,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(y(),F(M,null,[o(V,null,{navbar:s(()=>[o($,{breadcrumb:l})]),content:s(()=>[o(G,{"entity-name":"organization",loading:m(w),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:I.value,fields:p,onCreate:C},null,8,["loading","table"])]),_:1}),o(m(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>b(!1)),onOk:t[2]||(t[2]=a=>b(!0))},{default:s(()=>[n.value.state==="renaming"?(y(),h(m(L),{key:0,layout:"vertical"},{default:s(()=>[o(m(H),{label:"New name"},{default:s(()=>[o(m(B),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):D("",!0)]),_:1},8,["open"])],64))}});export{Ce as default};
//# sourceMappingURL=Organizations.92aec92c.js.map
