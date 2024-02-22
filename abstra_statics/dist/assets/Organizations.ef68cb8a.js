import{d as _,eA as I,r as N,H as x,b,ev as h,f as o,w as s,u as l,a$ as A,c as R,bO as B,ex as D}from"./outputWidgets.8ec48dfb.js";import{e as F,H as M,K as $}from"./icons.8af878db.js";import{a as V}from"./asyncComputed.651931ab.js";import"./router.de744989.js";import"./index.32a003ef.js";import{O as c}from"./organization.c522b347.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.7c416f57.js";import{C as E}from"./CrudView.9e27ceef.js";import{B as H}from"./BaseLayout.61b2abe1.js";import{a as L}from"./ant-design.18032a5f.js";import{A as U,F as G}from"./Form.1143d94a.js";import{M as K}from"./Modal.01099ac5.js";import"./index.cf4c23b9.js";import"./record.15a0e029.js";import"./pubsub.3b8564a9.js";import"./logo.084e5d7c.js";import"./Text.b8bb224a.js";import"./Base.4b2bec2b.js";import"./Typography.9f380cec.js";import"./index.1e12ebe6.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Paragraph.8b1783da.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d7522bf5.js";import"./url.e42a6f45.js";import"./index.bde9c8ce.js";import"./Title.c2f8fe08.js";import"./index.76a070fc.js";import"./index.87626f16.js";import"./hasIn.3dcfb997.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="58cfac65-b2a2-43ea-81bb-a00a400f57ee",i._sentryDebugIdIdentifier="sentry-dbid-58cfac65-b2a2-43ea-81bb-a00a400f57ee")}catch{}})();const ve=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],d=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:p,refetch:f}=V(()=>c.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await c.rename(a,t),f()}n.value={state:"idle"}}const k=async e=>{const a=await c.create(e.name);g({key:a.id})},C=async({key:e})=>{var t,r;await L("Are you sure you want to delete this organization?")&&(await((r=(t=p.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:r.delete()),f())},O=x(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=p.value)==null?void 0:e.map(t=>{var r,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(r=`/organizations/${encodeURIComponent(t.id)}`)!=null?r:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(t)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),h(A,null,[o(H,null,{navbar:s(()=>[o(j,{breadcrumb:m})]),content:s(()=>[o(E,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:d,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),R(l(G),{key:0,layout:"vertical"},{default:s(()=>[o(l(U),{label:"New name"},{default:s(()=>[o(l(B),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):D("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.ef68cb8a.js.map
