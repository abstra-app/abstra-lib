import{N as k}from"./Navbar.3de0bbdf.js";import{B as N}from"./BaseLayout.f23f3ab1.js";import{C as I}from"./ContentLayout.46cee630.js";import{C as _}from"./CrudView.0cb65aba.js";import{a as O}from"./asyncComputed.61a4e861.js";import{F as x}from"./PhArrowSquareOut.vue.c422f708.js";import{G as R}from"./PhPencil.vue.d124c936.js";import{d as B,eo as M,e as h,f as D,o as f,Y as F,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.00900164.js";import"./gateway.61e97762.js";import{a as m}from"./organization.ab599133.js";import"./tables.3355581b.js";import"./PhChats.vue.38555357.js";import"./PhSignOut.vue.29943a16.js";import"./router.2cec9d72.js";import"./Badge.424cfeb2.js";import"./index.cdbf7d0b.js";import"./Avatar.8b92ae0e.js";import"./index.dec4e8c2.js";import"./index.7e967143.js";import"./BookOutlined.d78d7289.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.59fb8def.js";import"./url.81ce8e9e.js";import"./PhDotsThreeVertical.vue.f7911e43.js";import"./index.904b961c.js";import"./popupNotifcation.105ba4a6.js";import"./record.9a19fe6f.js";import"./string.a628f102.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="99b11627-a113-4465-9d68-9ef19fc21d33",r._sentryDebugIdIdentifier="sentry-dbid-99b11627-a113-4465-9d68-9ef19fc21d33")}catch{}})();const ft=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],g=M(),{loading:y,result:b,refetch:v}=O(()=>m.list()),p=({key:e})=>{g.push({name:"organization",params:{organizationId:e}})},n=h({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function d(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await m.rename(t,a),v()}n.value={state:"idle"}}const w=async e=>{const t=await m.create(e.name);p({key:t.id})},C=D(()=>{var e,t;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(a=>{var c;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(c=a.id)!=null?c:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:p},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?t:[]}});return(e,t)=>(f(),F(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(y),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>d(!1)),onOk:t[2]||(t[2]=a=>d(!0))},{default:i(()=>[n.value.state==="renaming"?(f(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{ft as default};
//# sourceMappingURL=Organizations.8dc08529.js.map
