import{N as O}from"./Navbar.41f2bfce.js";import{B as I}from"./BaseLayout.194c82bf.js";import{C as _}from"./ContentLayout.8d07c41d.js";import{C as R}from"./CrudView.a9d51d90.js";import{a as x}from"./ant-design.2c95fbeb.js";import{a as h}from"./asyncComputed.b91dcf62.js";import{F as B}from"./PhArrowSquareOut.vue.eb41d14c.js";import{G as D}from"./PhPencil.vue.f4788761.js";import{d as F,eo as M,e as $,f as A,o as b,X as G,b as o,w as i,u as l,aR as V,c as j,cv as E,bH as H,cu as L,R as U,cH as P,ep as S}from"./vue-router.962a3244.js";import"./gateway.6fba1c75.js";import{O as d}from"./organization.20908759.js";import"./tables.e97064bc.js";import"./PhChats.vue.265bd873.js";import"./PhSignOut.vue.aca6a6a4.js";import"./router.bccedc24.js";import"./index.108244e3.js";import"./Avatar.d9df8938.js";import"./index.0f3ba61b.js";import"./index.23f8b508.js";import"./BookOutlined.5befb4ea.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.39b3b534.js";import"./url.1528b8d9.js";import"./PhDotsThreeVertical.vue.9ddb858b.js";import"./Badge.fdcccc5a.js";import"./popupNotifcation.ec199114.js";import"./record.3a8655a5.js";import"./string.9bd57db8.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="2af7e751-8e0c-4bde-92fa-78750ec7d474",r._sentryDebugIdIdentifier="sentry-dbid-2af7e751-8e0c-4bde-92fa-78750ec7d474")}catch{}})();const ve=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:f}=h(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await d.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await d.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,s;await x("Are you sure you want to delete this organization?")&&(await((s=(t=p.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=A(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=p.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:B,label:"Go to projects",onClick:g},{icon:D,label:"Rename",onClick:()=>w(t)},{icon:S,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),G(V,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(R,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,create:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),j(l(L),{key:0,layout:"vertical"},{default:i(()=>[o(l(E),{label:"New name"},{default:i(()=>[o(l(H),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.b41e8687.js.map
