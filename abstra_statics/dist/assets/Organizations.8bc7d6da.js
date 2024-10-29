import{N as O}from"./Navbar.9637c86d.js";import{B as I}from"./BaseLayout.911e897f.js";import{C as _}from"./ContentLayout.507963f0.js";import{C as R}from"./CrudView.d245d8a0.js";import{a as x}from"./ant-design.1fa10241.js";import{a as h}from"./asyncComputed.dcb6a6ba.js";import{F as B}from"./PhArrowSquareOut.vue.206179c8.js";import{G as D}from"./PhPencil.vue.8ce1aa7f.js";import{d as F,eq as M,e as $,f as A,X as G,b as o,w as i,u as l,aR as V,o as b,c as j,cv as E,bH as H,cu as L,R as U,cH as q,er as P}from"./vue-router.ddf818f0.js";import"./gateway.7127c347.js";import{O as d}from"./organization.e9db2ca1.js";import"./tables.190a720a.js";import"./PhChats.vue.fa04b0a2.js";import"./PhSignOut.vue.c76310e9.js";import"./router.bf7be5e2.js";import"./index.2ce8156d.js";import"./Avatar.560c1bbd.js";import"./index.e6ef6c25.js";import"./index.d0b6a3c5.js";import"./BookOutlined.c06f1300.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.572dbb99.js";import"./url.eec99bb6.js";import"./PhDotsThreeVertical.vue.5ceb3d6e.js";import"./Badge.b0a95e20.js";import"./popupNotifcation.960cdf03.js";import"./record.41ede930.js";import"./string.f8a63dfa.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="e8063979-bdc9-465e-9b5d-b03e8426c9cd",r._sentryDebugIdIdentifier="sentry-dbid-e8063979-bdc9-465e-9b5d-b03e8426c9cd")}catch{}})();const ve=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:g}=h(()=>d.list()),f=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),g()}n.value={state:"idle"}}const C=async e=>{const t=await d.create(e.name);f({key:t.id})},k=async({key:e})=>{var a,s;await x("Are you sure you want to delete this organization?")&&(await((s=(a=p.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:s.delete()),g())},N=A(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var s,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(s=`/organizations/${encodeURIComponent(a.id)}`)!=null?s:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:B,label:"Go to projects",onClick:f},{icon:D,label:"Rename",onClick:()=>w(a)},{icon:P,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),G(V,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(R,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,create:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(q),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),j(l(L),{key:0,layout:"vertical"},{default:i(()=>[o(l(E),{label:"New name"},{default:i(()=>[o(l(H),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.8bc7d6da.js.map
