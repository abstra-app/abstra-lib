import{N as O}from"./Navbar.3a9c6f63.js";import{B as I}from"./BaseLayout.707c393b.js";import{C as _}from"./ContentLayout.74e640e2.js";import{C as x}from"./CrudView.d60e9b31.js";import{a as R}from"./ant-design.658cc546.js";import{a as h}from"./asyncComputed.3a25ddd9.js";import{F as B}from"./PhArrowSquareOut.vue.a99021f1.js";import{G as D}from"./PhPencil.vue.c403964a.js";import{d as F,eo as M,e as $,f as A,o as b,X as G,b as o,w as i,u as l,aR as V,c as j,cy as E,bK as K,cx as L,R as U,cK as P,ep as S}from"./vue-router.cae69bd8.js";import"./gateway.b73dc90d.js";import{O as d}from"./organization.d5f4eae7.js";import"./tables.15195d0e.js";import"./PhChats.vue.a3a2f4a9.js";import"./PhSignOut.vue.233cd694.js";import"./router.bf7c7cd9.js";import"./index.c7da9e0a.js";import"./Avatar.17286514.js";import"./index.a6ede5cd.js";import"./index.9798bac5.js";import"./BookOutlined.dac10448.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f29196e5.js";import"./url.172d6188.js";import"./PhDotsThreeVertical.vue.6964c71d.js";import"./Badge.70817563.js";import"./popupNotifcation.fb98a092.js";import"./record.ae101e2e.js";import"./string.11edf9ae.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="f49eb0df-8d5b-4918-91f0-5375f70c01ab",r._sentryDebugIdIdentifier="sentry-dbid-f49eb0df-8d5b-4918-91f0-5375f70c01ab")}catch{}})();const ve=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:f}=h(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await d.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,s;await R("Are you sure you want to delete this organization?")&&(await((s=(a=p.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=A(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var s,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(s=`/organizations/${encodeURIComponent(a.id)}`)!=null?s:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:B,label:"Go to projects",onClick:g},{icon:D,label:"Rename",onClick:()=>w(a)},{icon:S,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),G(V,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,create:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),j(l(L),{key:0,layout:"vertical"},{default:i(()=>[o(l(E),{label:"New name"},{default:i(()=>[o(l(K),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.0da0daaf.js.map
