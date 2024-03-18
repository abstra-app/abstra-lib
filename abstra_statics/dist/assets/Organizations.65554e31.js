import{d as _,eA as I,r as N,H as x,b,ev as h,f as o,w as s,u as l,aD as A,c as D,bz as R,ex as B}from"./outputWidgets.55453a9e.js";import{e as F,H as M,K as $}from"./icons.ed0791e2.js";import{a as V}from"./asyncComputed.38281583.js";import"./router.3c302074.js";import"./index.805b1a2c.js";import{O as u}from"./organization.f86b3fbf.js";import{_ as j}from"./Navbar.vue_vue_type_script_setup_true_lang.57717916.js";import{C as E}from"./CrudView.702b13e5.js";import{B as H}from"./BaseLayout.31ddd240.js";import{a as L}from"./ant-design.55308a47.js";import{A as U,F as G}from"./Form.1e452ea7.js";import{M as K}from"./Modal.ac60a8e8.js";import"./popupNotifcation.0db0fba1.js";import"./index.cf4c23b9.js";import"./record.7d163256.js";import"./pubsub.787f3acc.js";import"./logo.084e5d7c.js";import"./Text.d8631408.js";import"./Base.98b5207b.js";import"./Typography.2db0cef5.js";import"./index.8c4d33e9.js";import"./ArrowRightOutlined.08fa31dd.js";import"./index.68cfddce.js";import"./Paragraph.98b1af99.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.411959b5.js";import"./url.4e25ee35.js";import"./index.6c7472f6.js";import"./Title.6bbee1b5.js";import"./index.03bd2a40.js";import"./index.4f5383a6.js";import"./hasIn.5b5d0bf0.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[m]="33bfff24-f4ed-434d-9c09-7edfdb50c0b2",i._sentryDebugIdIdentifier="sentry-dbid-33bfff24-f4ed-434d-9c09-7edfdb50c0b2")}catch{}})();const ke=_({__name:"Organizations",setup(i){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],z=I(),{loading:v,result:p,refetch:f}=V(()=>u.list()),g=({key:e})=>{z.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await u.rename(t,a),f()}n.value={state:"idle"}}const k=async e=>{const t=await u.create(e.name);g({key:t.id})},C=async({key:e})=>{var a,r;await L("Are you sure you want to delete this organization?")&&(await((r=(a=p.value)==null?void 0:a.find(d=>d.id===e))==null?void 0:r.delete()),f())},O=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var r,d;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(d=a.id)!=null?d:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(a)},{icon:$,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),h(A,null,[o(H,null,{navbar:s(()=>[o(j,{breadcrumb:m})]),content:s(()=>[o(E,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:O.value,fields:c,onCreate:k},null,8,["loading","table"])]),_:1}),o(l(K),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),D(l(G),{key:0,layout:"vertical"},{default:s(()=>[o(l(U),{label:"New name"},{default:s(()=>[o(l(R),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):B("",!0)]),_:1},8,["open"])],64))}});export{ke as default};
//# sourceMappingURL=Organizations.65554e31.js.map
