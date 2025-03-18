import{N as k}from"./Navbar.ca048091.js";import{B as N}from"./BaseLayout.457a5ee8.js";import{C as I}from"./ContentLayout.8c42122d.js";import{C as _}from"./CrudView.38cda0b5.js";import{a as O}from"./asyncComputed.322c7f8f.js";import{F as x}from"./PhArrowSquareOut.vue.84663a8a.js";import{G as R}from"./PhPencil.vue.00432d1e.js";import{d as B,eo as M,e as h,f as D,o as f,Y as F,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.c80219e2.js";import"./gateway.d74797a6.js";import{a as m}from"./organization.50544e19.js";import"./tables.7744c0bb.js";import"./PhChats.vue.8e54c745.js";import"./PhSignOut.vue.9e455164.js";import"./router.8063dd38.js";import"./Badge.ffab1414.js";import"./index.68a0e349.js";import"./Avatar.f00fa1cc.js";import"./index.bd9ac232.js";import"./index.cfa826cc.js";import"./BookOutlined.100d665e.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.ad997955.js";import"./url.ceb51a28.js";import"./PhDotsThreeVertical.vue.e90b101d.js";import"./index.a2434e5b.js";import"./popupNotifcation.da4ba7a0.js";import"./record.6fe21dfd.js";import"./string.1ce9e791.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="5604664f-325f-4591-a4a7-6a183c2b2a7d",r._sentryDebugIdIdentifier="sentry-dbid-5604664f-325f-4591-a4a7-6a183c2b2a7d")}catch{}})();const ft=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],g=M(),{loading:y,result:b,refetch:v}=O(()=>m.list()),p=({key:e})=>{g.push({name:"organization",params:{organizationId:e}})},n=h({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function d(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await m.rename(t,a),v()}n.value={state:"idle"}}const w=async e=>{const t=await m.create(e.name);p({key:t.id})},C=D(()=>{var e,t;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(a=>{var c;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(c=a.id)!=null?c:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:p},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?t:[]}});return(e,t)=>(f(),F(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(y),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>d(!1)),onOk:t[2]||(t[2]=a=>d(!0))},{default:i(()=>[n.value.state==="renaming"?(f(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{ft as default};
//# sourceMappingURL=Organizations.36a21db8.js.map
