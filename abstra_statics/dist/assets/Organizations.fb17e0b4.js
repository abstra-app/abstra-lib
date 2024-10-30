import{N as O}from"./Navbar.333acf8e.js";import{B as I}from"./BaseLayout.5fa7dd7d.js";import{C as _}from"./ContentLayout.7900816e.js";import{C as R}from"./CrudView.e6677b95.js";import{a as x}from"./ant-design.a1922f96.js";import{a as h}from"./asyncComputed.086662ce.js";import{F as B}from"./PhArrowSquareOut.vue.06117313.js";import{G as D}from"./PhPencil.vue.ce143ca7.js";import{d as F,eq as M,e as $,f as A,X as G,b as o,w as i,u as l,aR as V,o as b,c as j,cv as E,bH as H,cu as L,R as U,cH as q,er as P}from"./vue-router.05917a31.js";import"./gateway.a1fbb63a.js";import{O as d}from"./organization.63f22d2c.js";import"./tables.9b013cb2.js";import"./PhChats.vue.225ba2ab.js";import"./PhSignOut.vue.590d89ce.js";import"./router.0803badc.js";import"./index.1f2970cc.js";import"./Avatar.abffe316.js";import"./index.bd25e814.js";import"./index.5a03463d.js";import"./BookOutlined.f77c3c76.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.8bec7020.js";import"./url.4694fd4e.js";import"./PhDotsThreeVertical.vue.bcf222f2.js";import"./Badge.0f3a8692.js";import"./popupNotifcation.2f082304.js";import"./record.eb59195e.js";import"./string.8bcd6d61.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="36ccb505-3caa-4765-9df9-34d41711d04e",r._sentryDebugIdIdentifier="sentry-dbid-36ccb505-3caa-4765-9df9-34d41711d04e")}catch{}})();const ve=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:f}=h(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await d.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await d.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,s;await x("Are you sure you want to delete this organization?")&&(await((s=(t=p.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=A(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=p.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:B,label:"Go to projects",onClick:g},{icon:D,label:"Rename",onClick:()=>w(t)},{icon:P,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),G(V,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(R,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,create:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(q),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),j(l(L),{key:0,layout:"vertical"},{default:i(()=>[o(l(E),{label:"New name"},{default:i(()=>[o(l(H),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.fb17e0b4.js.map
