import{N as O}from"./Navbar.e17262fa.js";import{B as I}from"./BaseLayout.7242ac8f.js";import{C as _}from"./ContentLayout.0216496c.js";import{C as R}from"./CrudView.28535123.js";import{a as x}from"./ant-design.e3c9c226.js";import{a as h}from"./asyncComputed.fd56b5f4.js";import{F as B}from"./PhArrowSquareOut.vue.98e67337.js";import{G as D}from"./PhPencil.vue.cc07c84a.js";import{d as F,eq as M,e as $,f as A,X as G,b as o,w as i,u as l,aR as V,o as b,c as j,cv as E,bH as H,cu as L,R as U,cH as q,er as P}from"./vue-router.a2e43274.js";import"./gateway.a3fd81e0.js";import{O as d}from"./organization.1b7f46d5.js";import"./tables.38046344.js";import"./PhChats.vue.22bb0b1a.js";import"./PhSignOut.vue.d7a46c5e.js";import"./router.bf1618f9.js";import"./index.bf133760.js";import"./Avatar.21a16c5f.js";import"./index.27937ad2.js";import"./index.873de89c.js";import"./BookOutlined.503c1249.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.24f9b15f.js";import"./url.089f0cac.js";import"./PhDotsThreeVertical.vue.957fc1ec.js";import"./Badge.4cf310dc.js";import"./popupNotifcation.8d5e3a16.js";import"./record.a752c1e1.js";import"./string.eba44369.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="1df88c0d-ff16-4ea0-b5fb-7341d2c4edc2",r._sentryDebugIdIdentifier="sentry-dbid-1df88c0d-ff16-4ea0-b5fb-7341d2c4edc2")}catch{}})();const ve=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=M(),{loading:z,result:p,refetch:f}=h(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await d.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,s;await x("Are you sure you want to delete this organization?")&&(await((s=(a=p.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=A(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var s,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(s=`/organizations/${encodeURIComponent(a.id)}`)!=null?s:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:B,label:"Go to projects",onClick:g},{icon:D,label:"Rename",onClick:()=>w(a)},{icon:P,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),G(V,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(R,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,create:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(q),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),j(l(L),{key:0,layout:"vertical"},{default:i(()=>[o(l(E),{label:"New name"},{default:i(()=>[o(l(H),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.2ef80106.js.map
