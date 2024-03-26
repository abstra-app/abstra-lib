import{d as _,eA as I,r as N,H as x,b,ev as h,f as o,w as s,u as l,aD as A,c as D,bz as R,ex as B}from"./outputWidgets.b14d4ea2.js";import{e as F,H as M,K as $}from"./icons.780e185f.js";import{a as V}from"./asyncComputed.0b6f340a.js";import"./router.038496e7.js";import"./index.270f9929.js";import{O as c}from"./organization.eb400e74.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.f3530d64.js";import{C as E}from"./CrudView.be4fa7c8.js";import{B as H}from"./BaseLayout.0338aa05.js";import{a as L}from"./ant-design.a524a2a1.js";import{A as U,F as G}from"./Form.4ad85787.js";import{M as K}from"./Modal.681c0a69.js";import"./popupNotifcation.a7774c24.js";import"./index.cf4c23b9.js";import"./record.fd7c056d.js";import"./pubsub.634b15b6.js";import"./logo.084e5d7c.js";import"./Text.960439ff.js";import"./Base.c759a414.js";import"./Typography.24d398c1.js";import"./index.c21657b6.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Paragraph.47f7895e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.2f88b984.js";import"./url.6fb83e12.js";import"./index.3aa6b5c2.js";import"./Title.ef7d6752.js";import"./index.6627a8b1.js";import"./index.b8676d4b.js";import"./hasIn.7e44428f.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="2fa92de6-b2ea-4c7f-8c46-40b6cf5706c2",i._sentryDebugIdIdentifier="sentry-dbid-2fa92de6-b2ea-4c7f-8c46-40b6cf5706c2")}catch{}})();const we=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],d=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:p,refetch:f}=V(()=>c.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await c.rename(t,a),f()}n.value={state:"idle"}}const k=async e=>{const t=await c.create(e.name);g({key:t.id})},C=async({key:e})=>{var a,r;await L("Are you sure you want to delete this organization?")&&(await((r=(a=p.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:r.delete()),f())},O=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var r,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(a)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),h(A,null,[o(H,null,{navbar:s(()=>[o(j,{breadcrumb:m})]),content:s(()=>[o(E,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:d,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),D(l(G),{key:0,layout:"vertical"},{default:s(()=>[o(l(U),{label:"New name"},{default:s(()=>[o(l(R),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{we as default};
//# sourceMappingURL=Organizations.6d24bc95.js.map
