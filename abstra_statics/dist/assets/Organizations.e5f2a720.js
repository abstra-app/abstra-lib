import{N as k}from"./Navbar.8e80d494.js";import{B as N}from"./BaseLayout.6ebd4674.js";import{C as I}from"./ContentLayout.e715b3e9.js";import{C as _}from"./CrudView.8a9f5073.js";import{a as O}from"./asyncComputed.29b8437b.js";import{F as x}from"./PhArrowSquareOut.vue.cbd0ff5e.js";import{G as R}from"./PhPencil.vue.6f2e134d.js";import{d as B,eo as M,e as h,f as D,o as f,Y as F,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.494ee3d6.js";import"./gateway.833b1a3f.js";import{a as m}from"./organization.c4f91415.js";import"./tables.dfb44168.js";import"./PhChats.vue.cffb397f.js";import"./PhSignOut.vue.f8e43c8f.js";import"./router.cf865cb1.js";import"./index.bfdd23c5.js";import"./Avatar.337befad.js";import"./index.8d1e84af.js";import"./index.23041665.js";import"./BookOutlined.290604d1.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.50175de2.js";import"./url.d7450408.js";import"./PhDotsThreeVertical.vue.f08d40f5.js";import"./Badge.ee9d6d6c.js";import"./popupNotifcation.a3d22dad.js";import"./record.0afa2e2f.js";import"./string.c25cb15f.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="fc6b759d-4420-4a5a-9783-fe465e3850b3",r._sentryDebugIdIdentifier="sentry-dbid-fc6b759d-4420-4a5a-9783-fe465e3850b3")}catch{}})();const ce=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],g=M(),{loading:y,result:b,refetch:v}=O(()=>m.list()),p=({key:t})=>{g.push({name:"organization",params:{organizationId:t}})},n=h({state:"idle"});function z(t){n.value={state:"renaming",organizationId:t.id,newName:t.name}}async function d(t){if(n.value.state==="renaming"&&t){const{organizationId:e,newName:a}=n.value;await m.rename(e,a),v()}n.value={state:"idle"}}const w=async t=>{const e=await m.create(t.name);p({key:e.id})},C=D(()=>{var t,e;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(e=(t=b.value)==null?void 0:t.map(a=>{var c;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(c=a.id)!=null?c:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:p},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?e:[]}});return(t,e)=>(f(),F(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(y),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>d(!1)),onOk:e[2]||(e[2]=a=>d(!0))},{default:i(()=>[n.value.state==="renaming"?(f(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{ce as default};
//# sourceMappingURL=Organizations.e5f2a720.js.map
