import{N as k}from"./Navbar.7d4f8428.js";import{B as N}from"./BaseLayout.3064783d.js";import{C as I}from"./ContentLayout.56df7f95.js";import{C as _}from"./CrudView.4ce73855.js";import{a as O}from"./asyncComputed.94aa5810.js";import{F as x}from"./PhArrowSquareOut.vue.afa46afd.js";import{G as R}from"./PhPencil.vue.495bf3df.js";import{d as B,eo as M,e as h,f as D,o as f,Y as F,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.ed89996a.js";import"./gateway.11f20fbc.js";import{a as m}from"./organization.465dea89.js";import"./tables.1d3f420f.js";import"./PhChats.vue.8b3e9add.js";import"./PhSignOut.vue.2d1646ac.js";import"./router.8482d4c4.js";import"./Badge.aca0e531.js";import"./index.4555540a.js";import"./Avatar.1c581187.js";import"./index.54f16d82.js";import"./index.01a1a3e2.js";import"./BookOutlined.f533b888.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.d223a53e.js";import"./url.c89010f7.js";import"./PhDotsThreeVertical.vue.27184ba6.js";import"./index.5e4a70fe.js";import"./popupNotifcation.aea1b584.js";import"./record.faa2f8bf.js";import"./string.d16798d7.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="397657b0-26fc-4250-98da-d87f4b7109c4",r._sentryDebugIdIdentifier="sentry-dbid-397657b0-26fc-4250-98da-d87f4b7109c4")}catch{}})();const ft=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],g=M(),{loading:y,result:b,refetch:v}=O(()=>m.list()),p=({key:e})=>{g.push({name:"organization",params:{organizationId:e}})},n=h({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function d(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await m.rename(t,a),v()}n.value={state:"idle"}}const w=async e=>{const t=await m.create(e.name);p({key:t.id})},C=D(()=>{var e,t;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(a=>{var c;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(c=a.id)!=null?c:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:p},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?t:[]}});return(e,t)=>(f(),F(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(y),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>d(!1)),onOk:t[2]||(t[2]=a=>d(!0))},{default:i(()=>[n.value.state==="renaming"?(f(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{ft as default};
//# sourceMappingURL=Organizations.b69ddd31.js.map
