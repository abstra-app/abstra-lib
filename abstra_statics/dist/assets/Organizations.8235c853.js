import{N as O}from"./Navbar.46e79c68.js";import{B as I}from"./BaseLayout.12f3b386.js";import{C as _}from"./ContentLayout.38446dee.js";import{C as R}from"./CrudView.17a972fb.js";import{a as x}from"./ant-design.e3eb28a0.js";import{a as h}from"./asyncComputed.b6f822e9.js";import{F as B}from"./PhArrowSquareOut.vue.e6bec3e9.js";import{G as D}from"./PhPencil.vue.128871af.js";import{d as F,eq as M,e as $,f as A,X as G,b as o,w as i,u as l,aR as V,o as b,c as j,cv as E,bH as H,cu as L,R as U,cH as q,er as P}from"./vue-router.9f9f01b3.js";import"./gateway.e0caa98c.js";import{O as d}from"./organization.60827de8.js";import"./tables.3be644ae.js";import"./PhChats.vue.2ba5dc8d.js";import"./PhSignOut.vue.237df2ed.js";import"./router.c32d57c5.js";import"./index.2b06c8b9.js";import"./Avatar.e4bca4a6.js";import"./index.cfd4952d.js";import"./index.ef349bf1.js";import"./BookOutlined.30c64d41.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0a0d7aeb.js";import"./url.f377987a.js";import"./PhDotsThreeVertical.vue.9409723e.js";import"./Badge.792744f2.js";import"./popupNotifcation.41cdd14e.js";import"./record.bbee8bcb.js";import"./string.6ac6ae27.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="c8af19fd-8913-4933-98fb-78e317b5e6ef",r._sentryDebugIdIdentifier="sentry-dbid-c8af19fd-8913-4933-98fb-78e317b5e6ef")}catch{}})();const ve=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:f}=h(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await d.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,s;await x("Are you sure you want to delete this organization?")&&(await((s=(a=p.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=A(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var s,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(s=`/organizations/${encodeURIComponent(a.id)}`)!=null?s:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:B,label:"Go to projects",onClick:g},{icon:D,label:"Rename",onClick:()=>w(a)},{icon:P,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),G(V,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(R,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,create:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(q),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),j(l(L),{key:0,layout:"vertical"},{default:i(()=>[o(l(E),{label:"New name"},{default:i(()=>[o(l(H),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.8235c853.js.map
