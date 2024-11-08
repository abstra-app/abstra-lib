import{N as O}from"./Navbar.ff1dfb11.js";import{B as I}from"./BaseLayout.6c473b74.js";import{C as _}from"./ContentLayout.2e2e0640.js";import{C as R}from"./CrudView.2edc7b15.js";import{a as x}from"./ant-design.439c5d35.js";import{a as h}from"./asyncComputed.60cc3624.js";import{F as B}from"./PhArrowSquareOut.vue.7b33c697.js";import{G as D}from"./PhPencil.vue.4a3a016f.js";import{d as F,eo as M,e as $,f as A,o as b,X as G,b as o,w as i,u as l,aR as V,c as j,cv as E,bH as H,cu as L,R as U,cH as P,ep as S}from"./vue-router.318741b1.js";import"./gateway.9ddadec6.js";import{O as d}from"./organization.541c263c.js";import"./tables.f54887e2.js";import"./PhChats.vue.a4de6f15.js";import"./PhSignOut.vue.69f3d826.js";import"./router.718866b9.js";import"./index.c83f9f61.js";import"./Avatar.b2bce96d.js";import"./index.43d4f791.js";import"./index.daa3c02a.js";import"./BookOutlined.bc3e45b0.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.256f196f.js";import"./url.8effdb46.js";import"./PhDotsThreeVertical.vue.7a2c34b9.js";import"./Badge.42197d4d.js";import"./popupNotifcation.56625d0f.js";import"./record.c3a43c45.js";import"./string.f8e88cda.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="50b114c1-3a5b-469b-a3ed-0d26c005a186",r._sentryDebugIdIdentifier="sentry-dbid-50b114c1-3a5b-469b-a3ed-0d26c005a186")}catch{}})();const ve=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:g}=h(()=>d.list()),f=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await d.rename(a,t),g()}n.value={state:"idle"}}const C=async e=>{const a=await d.create(e.name);f({key:a.id})},k=async({key:e})=>{var t,s;await x("Are you sure you want to delete this organization?")&&(await((s=(t=p.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),g())},N=A(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=p.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:B,label:"Go to projects",onClick:f},{icon:D,label:"Rename",onClick:()=>w(t)},{icon:S,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(b(),G(V,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(R,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,create:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>y(!1)),onOk:a[2]||(a[2]=t=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),j(l(L),{key:0,layout:"vertical"},{default:i(()=>[o(l(E),{label:"New name"},{default:i(()=>[o(l(H),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.75c61bbb.js.map
