import{N as O}from"./Navbar.dd7590e0.js";import{B as I}from"./BaseLayout.e9a890f5.js";import{C as _}from"./ContentLayout.8958779c.js";import{C as R}from"./CrudView.f924adbe.js";import{a as x}from"./ant-design.304f1dd5.js";import{a as h}from"./asyncComputed.191e76dc.js";import{F as B}from"./PhArrowSquareOut.vue.62645478.js";import{G as D}from"./PhPencil.vue.1f5b6c40.js";import{d as F,eq as M,e as $,f as A,X as G,b as o,w as i,u as l,aR as V,o as b,c as j,cv as E,bH as H,cu as L,R as U,cH as q,er as P}from"./vue-router.6860ceb3.js";import"./gateway.71cfa7e0.js";import{O as c}from"./organization.baee667b.js";import"./tables.de356771.js";import"./PhChats.vue.bd337a57.js";import"./PhSignOut.vue.c3fbbfea.js";import"./router.c4b1a62a.js";import"./index.df074fbc.js";import"./Avatar.c531648d.js";import"./index.0e1d650f.js";import"./index.ef68bf38.js";import"./BookOutlined.35b2fa4e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.bc1669cd.js";import"./url.f6200731.js";import"./PhDotsThreeVertical.vue.ea49e956.js";import"./Badge.a891dd39.js";import"./popupNotifcation.665cf3de.js";import"./record.4a2ca5f6.js";import"./string.893bd786.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="825ef103-5558-4609-acbd-687c3dc7ec7a",r._sentryDebugIdIdentifier="sentry-dbid-825ef103-5558-4609-acbd-687c3dc7ec7a")}catch{}})();const ve=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],d=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:f}=h(()=>c.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await c.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await c.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,s;await x("Are you sure you want to delete this organization?")&&(await((s=(t=p.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=A(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=p.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:B,label:"Go to projects",onClick:g},{icon:D,label:"Rename",onClick:()=>w(t)},{icon:P,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),G(V,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(R,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:d,create:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(q),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),j(l(L),{key:0,layout:"vertical"},{default:i(()=>[o(l(E),{label:"New name"},{default:i(()=>[o(l(H),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.64a3ad87.js.map
