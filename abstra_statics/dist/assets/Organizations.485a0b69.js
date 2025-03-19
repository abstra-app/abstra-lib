import{N as k}from"./Navbar.b4612b7d.js";import{B as N}from"./BaseLayout.b58c543d.js";import{C as I}from"./ContentLayout.932ad84d.js";import{C as _}from"./CrudView.e6fcf6c2.js";import{a as O}from"./asyncComputed.386a2db3.js";import{F as x}from"./PhArrowSquareOut.vue.8eb62dbd.js";import{G as R}from"./PhPencil.vue.f08a2504.js";import{d as B,eo as M,e as h,f as D,o as f,Y as F,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.c0b06422.js";import"./gateway.3074ee5c.js";import{a as m}from"./organization.b461e8ee.js";import"./tables.ece95658.js";import"./PhChats.vue.a6e083e6.js";import"./PhSignOut.vue.fcddaf80.js";import"./router.c8065cf4.js";import"./Badge.50335ef3.js";import"./index.124bb471.js";import"./Avatar.7971574f.js";import"./index.af2dbd28.js";import"./index.f299f473.js";import"./BookOutlined.996ccc20.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.37c27a6f.js";import"./url.2bc37cc5.js";import"./PhDotsThreeVertical.vue.b18d85f2.js";import"./index.7fe2dcea.js";import"./popupNotifcation.196e2ce5.js";import"./record.e2b26505.js";import"./string.3b7e3375.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="b56f73bc-237b-4159-ba38-f52eb870f943",r._sentryDebugIdIdentifier="sentry-dbid-b56f73bc-237b-4159-ba38-f52eb870f943")}catch{}})();const ft=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],g=M(),{loading:b,result:y,refetch:v}=O(()=>m.list()),p=({key:e})=>{g.push({name:"organization",params:{organizationId:e}})},n=h({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function c(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await m.rename(t,a),v()}n.value={state:"idle"}}const w=async e=>{const t=await m.create(e.name);p({key:t.id})},C=D(()=>{var e,t;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(t=(e=y.value)==null?void 0:e.map(a=>{var d;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(d=a.id)!=null?d:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:p},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?t:[]}});return(e,t)=>(f(),F(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(b),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>c(!1)),onOk:t[2]||(t[2]=a=>c(!0))},{default:i(()=>[n.value.state==="renaming"?(f(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{ft as default};
//# sourceMappingURL=Organizations.485a0b69.js.map
