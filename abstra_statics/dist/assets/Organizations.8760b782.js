import{d as _,eA as I,r as N,H as x,b,ev as h,f as o,w as s,u as l,aD as A,c as D,bz as R,ex as B}from"./outputWidgets.84400f3d.js";import{e as F,H as M,K as $}from"./icons.51c500b8.js";import{a as V}from"./asyncComputed.f2a51feb.js";import"./router.6e29c40f.js";import"./index.575f21cf.js";import{O as c}from"./organization.0f66ea2d.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.01047f53.js";import{C as E}from"./CrudView.ff2ba196.js";import{B as H}from"./BaseLayout.af9cbbe2.js";import{a as L}from"./ant-design.c41e79aa.js";import{A as U,F as G}from"./Form.d05a1b22.js";import{M as K}from"./Modal.d808afee.js";import"./popupNotifcation.d06c16fd.js";import"./index.cf4c23b9.js";import"./record.a1f907ea.js";import"./pubsub.87032f37.js";import"./logo.084e5d7c.js";import"./Text.471d0d00.js";import"./Base.5abbd37f.js";import"./Typography.d06ce724.js";import"./index.ee5bcd97.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Paragraph.4b47bceb.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6b27b5c3.js";import"./url.32b2d17f.js";import"./index.fa6ccec8.js";import"./Title.77255753.js";import"./index.f01295b9.js";import"./index.e0dbea82.js";import"./hasIn.bbea906d.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="e569b165-7442-4b52-9ecb-633a13c73669",i._sentryDebugIdIdentifier="sentry-dbid-e569b165-7442-4b52-9ecb-633a13c73669")}catch{}})();const we=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],d=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:p,refetch:g}=V(()=>c.list()),f=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await c.rename(t,a),g()}n.value={state:"idle"}}const k=async e=>{const t=await c.create(e.name);f({key:t.id})},C=async({key:e})=>{var a,r;await L("Are you sure you want to delete this organization?")&&(await((r=(a=p.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:r.delete()),g())},O=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var r,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:f},{icon:M,label:"Rename",onClick:()=>w(a)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),h(A,null,[o(H,null,{navbar:s(()=>[o(j,{breadcrumb:m})]),content:s(()=>[o(E,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:d,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),D(l(G),{key:0,layout:"vertical"},{default:s(()=>[o(l(U),{label:"New name"},{default:s(()=>[o(l(R),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{we as default};
//# sourceMappingURL=Organizations.8760b782.js.map
