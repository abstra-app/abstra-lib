import{N}from"./Navbar.807c4f91.js";import{B as O}from"./BaseLayout.056f6197.js";import{C as _}from"./ContentLayout.036577d6.js";import{C as x}from"./CrudView.8fb9edb2.js";import{a as R}from"./ant-design.9fdda40e.js";import{a as D}from"./asyncComputed.34060e31.js";import{F}from"./PhArrowSquareOut.vue.4f1b22ff.js";import{G as M}from"./PhPencil.vue.82c9c620.js";import{d as h,eJ as B,r as A,I as $,b,ev as G,f as o,w as i,u as l,aD as V,eR as j,c as E,by as L,ex as U}from"./outputWidgets.1a4ea7e5.js";import"./router.d7e2a1d0.js";import"./index.23793bee.js";import{O as c}from"./organization.f5ec9e3a.js";import{A as J,F as P}from"./Form.b842a711.js";import{M as S}from"./Modal.19b3792b.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.155c8422.js";import"./Text.7f5615cf.js";import"./index.63a01a4d.js";import"./index.e0699ef2.js";import"./BookOutlined.d01902c3.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.19b5fdd4.js";import"./url.b10936df.js";import"./Paragraph.d8a08445.js";import"./index.32945746.js";import"./Title.2c97cb50.js";import"./index.3c83c361.js";import"./index.078a7f53.js";import"./popupNotifcation.7190cc41.js";import"./record.b1513995.js";import"./pubsub.c2d46080.js";import"./hasIn.7c90ac7a.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="ca49a7c2-63f6-4a8e-a60a-ec9bf0d1b5fc",r._sentryDebugIdIdentifier="sentry-dbid-ca49a7c2-63f6-4a8e-a60a-ec9bf0d1b5fc")}catch{}})();const ke=h({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],d=[{key:"name",label:"Organization Name"}],v=B(),{loading:z,result:p,refetch:f}=D(()=>c.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=A({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await c.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await c.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,s;await R("Are you sure you want to delete this organization?")&&(await((s=(t=p.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),f())},I=$(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=p.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(t)},{icon:j,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),G(V,null,[o(O,null,{navbar:i(()=>[o(N,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:I.value,fields:d,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(S),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),E(l(P),{key:0,layout:"vertical"},{default:i(()=>[o(l(J),{label:"New name"},{default:i(()=>[o(l(L),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{ke as default};
//# sourceMappingURL=Organizations.76afebd7.js.map
