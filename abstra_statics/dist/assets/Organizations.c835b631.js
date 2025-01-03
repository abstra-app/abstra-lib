import{N}from"./Navbar.2fae7065.js";import{B as k}from"./BaseLayout.47e2b348.js";import{C as I}from"./ContentLayout.e2534d0e.js";import{C as _}from"./CrudView.ee699ad5.js";import{a as O}from"./asyncComputed.2cc1ee42.js";import{F as x}from"./PhArrowSquareOut.vue.cbaee2a1.js";import{G as B}from"./PhPencil.vue.f3c267f9.js";import{d as R,eo as M,e as h,f as D,o as g,Y as F,b as o,w as i,u as s,aS as A,c as L,cB as S,bL as V,cA as $,S as j,cN as E}from"./index.ed04b5ab.js";import"./gateway.656175aa.js";import{a as m}from"./organization.7d870b2d.js";import"./tables.806257a7.js";import"./PhChats.vue.c4867900.js";import"./PhSignOut.vue.97c39747.js";import"./router.dc9e8214.js";import"./Badge.45df1ba2.js";import"./index.0396b02f.js";import"./Avatar.3752ab4e.js";import"./index.61fe3220.js";import"./index.85adfdf0.js";import"./BookOutlined.3e570c7f.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.09ac8169.js";import"./url.01bb18bd.js";import"./PhDotsThreeVertical.vue.79650e2c.js";import"./index.c4f0ef26.js";import"./popupNotifcation.7106d28c.js";import"./record.a5ab1ba1.js";import"./string.8b1a9a26.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="28bcaa44-402e-4b42-875e-e961c5f4ed23",r._sentryDebugIdIdentifier="sentry-dbid-28bcaa44-402e-4b42-875e-e961c5f4ed23")}catch{}})();const ge=R({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],f=M(),{loading:y,result:b,refetch:v}=O(()=>m.list()),p=({key:t})=>{f.push({name:"organization",params:{organizationId:t}})},n=h({state:"idle"});function z(t){n.value={state:"renaming",organizationId:t.id,newName:t.name}}async function c(t){if(n.value.state==="renaming"&&t){const{organizationId:e,newName:a}=n.value;await m.rename(e,a),v()}n.value={state:"idle"}}const w=async t=>{const e=await m.create(t.name);p({key:e.id})},C=D(()=>{var t,e;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(e=(t=b.value)==null?void 0:t.map(a=>{var d;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(d=a.id)!=null?d:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:p},{icon:B,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?e:[]}});return(t,e)=>(g(),F(A,null,[o(k,null,{navbar:i(()=>[o(N,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(y),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>c(!1)),onOk:e[2]||(e[2]=a=>c(!0))},{default:i(()=>[n.value.state==="renaming"?(g(),L(s($),{key:0,layout:"vertical"},{default:i(()=>[o(s(S),{label:"New name"},{default:i(()=>[o(s(V),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):j("",!0)]),_:1},8,["open"])],64))}});export{ge as default};
//# sourceMappingURL=Organizations.c835b631.js.map
