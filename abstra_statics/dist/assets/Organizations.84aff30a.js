import{N}from"./Navbar.6f2dcb2d.js";import{B as k}from"./BaseLayout.f175a46d.js";import{C as I}from"./ContentLayout.137b31cd.js";import{C as _}from"./CrudView.42e03147.js";import{a as O}from"./asyncComputed.36bb51d1.js";import{F as x}from"./PhArrowSquareOut.vue.de27afa9.js";import{G as B}from"./PhPencil.vue.c1e7345e.js";import{d as R,eo as M,e as h,f as D,o as f,Y as F,b as o,w as i,u as s,aS as A,c as L,cB as S,bL as V,cA as $,S as j,cN as E}from"./index.0ca8e457.js";import"./gateway.dacd311f.js";import{a as m}from"./organization.237a33eb.js";import"./tables.224cd430.js";import"./PhChats.vue.5ac1646b.js";import"./PhSignOut.vue.ac7b64a3.js";import"./router.10a29452.js";import"./Badge.0c31bf56.js";import"./index.cd2eaf77.js";import"./Avatar.90fd5809.js";import"./index.5a3be079.js";import"./index.c4d4af31.js";import"./BookOutlined.e9c824a5.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d9052f48.js";import"./url.849b8e5d.js";import"./PhDotsThreeVertical.vue.f346b955.js";import"./index.425f3165.js";import"./popupNotifcation.ff82ab12.js";import"./record.e16c0ec5.js";import"./string.2b895afb.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="9bb9f2ea-c5e5-4912-9476-e697171d8f9f",r._sentryDebugIdIdentifier="sentry-dbid-9bb9f2ea-c5e5-4912-9476-e697171d8f9f")}catch{}})();const fe=R({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],g=M(),{loading:y,result:b,refetch:v}=O(()=>m.list()),p=({key:t})=>{g.push({name:"organization",params:{organizationId:t}})},n=h({state:"idle"});function z(t){n.value={state:"renaming",organizationId:t.id,newName:t.name}}async function d(t){if(n.value.state==="renaming"&&t){const{organizationId:e,newName:a}=n.value;await m.rename(e,a),v()}n.value={state:"idle"}}const w=async t=>{const e=await m.create(t.name);p({key:e.id})},C=D(()=>{var t,e;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(e=(t=b.value)==null?void 0:t.map(a=>{var c;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(c=a.id)!=null?c:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:p},{icon:B,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?e:[]}});return(t,e)=>(f(),F(A,null,[o(k,null,{navbar:i(()=>[o(N,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(y),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>d(!1)),onOk:e[2]||(e[2]=a=>d(!0))},{default:i(()=>[n.value.state==="renaming"?(f(),L(s($),{key:0,layout:"vertical"},{default:i(()=>[o(s(S),{label:"New name"},{default:i(()=>[o(s(V),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):j("",!0)]),_:1},8,["open"])],64))}});export{fe as default};
//# sourceMappingURL=Organizations.84aff30a.js.map
