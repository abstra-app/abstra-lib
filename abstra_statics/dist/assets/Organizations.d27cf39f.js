import{N}from"./Navbar.62ab3140.js";import{B as k}from"./BaseLayout.a8eaaa59.js";import{C as I}from"./ContentLayout.9c2e2138.js";import{C as _}from"./CrudView.9d4fe7c6.js";import{a as O}from"./asyncComputed.7e5cce79.js";import{F as x}from"./PhArrowSquareOut.vue.d89a4d75.js";import{G as B}from"./PhPencil.vue.d45255c9.js";import{d as R,eo as M,e as h,f as D,o as f,Y as F,b as o,w as i,u as s,aS as A,c as L,cB as S,bL as V,cA as $,S as j,cN as E}from"./index.fd9b9ab8.js";import"./gateway.304ae457.js";import{a as m}from"./organization.7bf44130.js";import"./tables.7da5ab67.js";import"./PhChats.vue.3aefe688.js";import"./PhSignOut.vue.5254da4d.js";import"./router.d43eb07e.js";import"./Badge.7af0d9ba.js";import"./index.1b35746e.js";import"./Avatar.be8de205.js";import"./index.d015473d.js";import"./index.f5576411.js";import"./BookOutlined.e64b5e9e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.365ce5ce.js";import"./url.9ba27ecc.js";import"./PhDotsThreeVertical.vue.c27507a1.js";import"./index.d03e071b.js";import"./popupNotifcation.29b8d844.js";import"./record.b518ae74.js";import"./string.b5cc208c.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="3ad41f8a-bfe4-4d5a-9aa1-3b76cde19fb5",r._sentryDebugIdIdentifier="sentry-dbid-3ad41f8a-bfe4-4d5a-9aa1-3b76cde19fb5")}catch{}})();const fe=R({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],g=M(),{loading:b,result:y,refetch:v}=O(()=>m.list()),d=({key:t})=>{g.push({name:"organization",params:{organizationId:t}})},n=h({state:"idle"});function z(t){n.value={state:"renaming",organizationId:t.id,newName:t.name}}async function p(t){if(n.value.state==="renaming"&&t){const{organizationId:e,newName:a}=n.value;await m.rename(e,a),v()}n.value={state:"idle"}}const w=async t=>{const e=await m.create(t.name);d({key:e.id})},C=D(()=>{var t,e;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(e=(t=y.value)==null?void 0:t.map(a=>{var c;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(c=a.id)!=null?c:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:d},{icon:B,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?e:[]}});return(t,e)=>(f(),F(A,null,[o(k,null,{navbar:i(()=>[o(N,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(b),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>p(!1)),onOk:e[2]||(e[2]=a=>p(!0))},{default:i(()=>[n.value.state==="renaming"?(f(),L(s($),{key:0,layout:"vertical"},{default:i(()=>[o(s(S),{label:"New name"},{default:i(()=>[o(s(V),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):j("",!0)]),_:1},8,["open"])],64))}});export{fe as default};
//# sourceMappingURL=Organizations.d27cf39f.js.map
