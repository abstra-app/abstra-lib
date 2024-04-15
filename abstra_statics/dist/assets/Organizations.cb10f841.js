import{N}from"./Navbar.028d92a8.js";import{B as O}from"./BaseLayout.cd12e9bf.js";import{C as _}from"./ContentLayout.e7bdea88.js";import{C as x}from"./CrudView.6c58b686.js";import{a as R}from"./ant-design.7770eac1.js";import{a as D}from"./asyncComputed.d544976a.js";import{F}from"./PhArrowSquareOut.vue.7fca856e.js";import{G as M}from"./PhPencil.vue.def1618c.js";import{d as h,eJ as B,r as A,I as $,b,ev as G,f as o,w as i,u as l,aD as V,eR as j,c as E,by as L,ex as U}from"./outputWidgets.c813e1c0.js";import"./router.200419fa.js";import"./index.ea28a839.js";import{O as d}from"./organization.2227e75f.js";import{A as J,F as P}from"./Form.bae548d6.js";import{M as S}from"./Modal.c08ae084.js";import"./logo.084e5d7c.js";import"./PhSignOut.vue.8b47e2d9.js";import"./Text.11a46b63.js";import"./index.e6685eb1.js";import"./index.9e8a23ac.js";import"./BookOutlined.e46ae7aa.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.587bf4b5.js";import"./url.f874f1d0.js";import"./Paragraph.4bf06d46.js";import"./index.5910e014.js";import"./Title.9ba346c5.js";import"./index.44cbbf0c.js";import"./index.a800a13b.js";import"./popupNotifcation.b75bdbab.js";import"./record.f54668e3.js";import"./pubsub.e4fdbaee.js";import"./hasIn.a85ca19a.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="074ae9fe-db7d-464a-a2ac-4eea08b1e429",r._sentryDebugIdIdentifier="sentry-dbid-074ae9fe-db7d-464a-a2ac-4eea08b1e429")}catch{}})();const ke=h({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],v=B(),{loading:z,result:c,refetch:f}=D(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=A({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await d.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await d.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,s;await R("Are you sure you want to delete this organization?")&&(await((s=(t=c.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),f())},I=$(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=c.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:g},{icon:M,label:"Rename",onClick:()=>w(t)},{icon:j,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),G(V,null,[o(O,null,{navbar:i(()=>[o(N,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:I.value,fields:p,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(S),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),E(l(P),{key:0,layout:"vertical"},{default:i(()=>[o(l(J),{label:"New name"},{default:i(()=>[o(l(L),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{ke as default};
//# sourceMappingURL=Organizations.cb10f841.js.map
