import{N as k}from"./Navbar.b3d34914.js";import{B as N}from"./BaseLayout.250e52a6.js";import{C as I}from"./ContentLayout.19381e71.js";import{C as _}from"./CrudView.f9a71643.js";import{a as O}from"./asyncComputed.d961131c.js";import{F as x}from"./PhArrowSquareOut.vue.5a767403.js";import{G as R}from"./PhPencil.vue.64695b35.js";import{d as B,eo as M,e as h,f as D,o as g,Y as F,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.a3e548bb.js";import"./gateway.5b3b9b08.js";import{a as m}from"./organization.20835116.js";import"./tables.dd99ad25.js";import"./PhChats.vue.9a114ad6.js";import"./PhSignOut.vue.a73d9421.js";import"./router.2e892d90.js";import"./Badge.841d6f46.js";import"./index.a47e6254.js";import"./Avatar.e44abbb9.js";import"./index.88ef9423.js";import"./index.4152e58b.js";import"./BookOutlined.7fa58eb2.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5851cc5d.js";import"./url.b49e2d74.js";import"./PhDotsThreeVertical.vue.97c8a115.js";import"./index.428d32a2.js";import"./popupNotifcation.ceede3b7.js";import"./record.c7270ac4.js";import"./string.86c2a44d.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="76ca09b0-0bb0-4833-b150-73a441ce881f",r._sentryDebugIdIdentifier="sentry-dbid-76ca09b0-0bb0-4833-b150-73a441ce881f")}catch{}})();const gt=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],f=M(),{loading:b,result:y,refetch:v}=O(()=>m.list()),p=({key:e})=>{f.push({name:"organization",params:{organizationId:e}})},n=h({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function c(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await m.rename(t,a),v()}n.value={state:"idle"}}const w=async e=>{const t=await m.create(e.name);p({key:t.id})},C=D(()=>{var e,t;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(t=(e=y.value)==null?void 0:e.map(a=>{var d;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(d=a.id)!=null?d:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:p},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?t:[]}});return(e,t)=>(g(),F(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(b),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>c(!1)),onOk:t[2]||(t[2]=a=>c(!0))},{default:i(()=>[n.value.state==="renaming"?(g(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{gt as default};
//# sourceMappingURL=Organizations.4dfdd6a5.js.map
