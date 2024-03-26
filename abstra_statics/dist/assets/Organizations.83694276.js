import{d as O,eA as I,r as N,H as x,b,eu as h,f as o,w as s,u as m,aC as A,eP as F,c as R,by as B,ew as D}from"./outputWidgets.e9677800.js";import{a as M}from"./asyncComputed.37b7af98.js";import"./router.e014ddc2.js";import"./index.21e91f9c.js";import{O as c}from"./organization.165d6c3c.js";import{_ as $}from"./Navbar.vue_vue_type_script_setup_true_lang.897f61eb.js";import{C as G}from"./CrudView.8e03181d.js";import{B as V}from"./BaseLayout.07d4d66c.js";import{a as j}from"./ant-design.dbbf4726.js";import{F as E}from"./PhArrowSquareOut.vue.b47e902f.js";import{G as P}from"./PhPencil.vue.502d3996.js";import{A as U,F as H}from"./Form.9737d51d.js";import{M as L}from"./Modal.df560cc7.js";import"./popupNotifcation.7148cdf9.js";import"./index.cf4c23b9.js";import"./record.767f28b7.js";import"./pubsub.9e36d89a.js";import"./logo.084e5d7c.js";import"./Text.fd9e90fd.js";import"./Base.64d54b8f.js";import"./Typography.511f4fec.js";import"./index.c478ec95.js";import"./ArrowRightOutlined.08fa31dd.js";import"./Paragraph.394702f6.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a4277c3a.js";import"./url.89c6b244.js";import"./index.42279d35.js";import"./Title.c954a24a.js";import"./index.1a0bd015.js";import"./index.bbda4abd.js";import"./hasIn.bd3f78ff.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[l]="4c23226a-3269-4dee-a9c8-636e1fe28b7b",i._sentryDebugIdIdentifier="sentry-dbid-4c23226a-3269-4dee-a9c8-636e1fe28b7b")}catch{}})();const ke=O({__name:"Organizations",setup(i){const l=[{label:"My organizations",path:"/organizations"}],d=[{key:"name",label:"Organization Name"}],w=I(),{loading:z,result:p,refetch:f}=M(()=>c.list()),g=({key:e})=>{w.push({name:"organization",params:{organizationId:e}})},n=N({state:"idle"});function v(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await c.rename(t,a),f()}n.value={state:"idle"}}const k=async e=>{const t=await c.create(e.name);g({key:t.id})},C=async({key:e})=>{var a,r;await j("Are you sure you want to delete this organization?")&&(await((r=(a=p.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:r.delete()),f())},_=x(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var r,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(r=`/organizations/${encodeURIComponent(a.id)}`)!=null?r:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:E,label:"Go to projects",onClick:g},{icon:P,label:"Rename",onClick:()=>v(a)},{icon:F,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),h(A,null,[o(V,null,{navbar:s(()=>[o($,{breadcrumb:l})]),content:s(()=>[o(G,{"entity-name":"organization",loading:m(z),title:"My organizations",description:"An organization is your company\u2019s account. Add co-workers, manage their access, organize projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:_.value,fields:d,onCreate:k},null,8,["loading","table"])]),_:1}),o(m(L),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:s(()=>[n.value.state==="renaming"?(b(),R(m(H),{key:0,layout:"vertical"},{default:s(()=>[o(m(U),{label:"New name"},{default:s(()=>[o(m(B),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):D("",!0)]),_:1},8,["open"])],64))}});export{ke as default};
//# sourceMappingURL=Organizations.83694276.js.map
