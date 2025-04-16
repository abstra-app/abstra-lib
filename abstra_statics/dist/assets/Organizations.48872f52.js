import{N as k}from"./Navbar.3ceeb087.js";import{B as N}from"./BaseLayout.67aa1ba9.js";import{C as I}from"./ContentLayout.d10a1126.js";import{C as _}from"./CrudView.15b95067.js";import{a as O}from"./asyncComputed.72258d46.js";import{F as x}from"./PhArrowSquareOut.vue.279a8ad9.js";import{G as R}from"./PhPencil.vue.066e4c16.js";import{d as B,eH as M,e as h,f as D,o as g,Y as F,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.e2d9b9bf.js";import"./gateway.5e1e46a5.js";import{a as m}from"./organization.b61f7754.js";import"./tables.b8ae7008.js";import"./PhChats.vue.84f96e1d.js";import"./PhSignOut.vue.42f9fa8c.js";import"./router.f5f5c720.js";import"./Badge.68625667.js";import"./index.3df36c47.js";import"./Avatar.95100b67.js";import"./index.164d75ae.js";import"./index.9b73dd31.js";import"./BookOutlined.2a439950.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a433faa1.js";import"./url.d39b9cf8.js";import"./PhDotsThreeVertical.vue.ab05e813.js";import"./index.ed249e2b.js";import"./popupNotifcation.0f84464d.js";import"./record.440ed4d9.js";import"./string.80a04e9f.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="6627d032-f4bb-4ca1-ab11-d47458e83085",r._sentryDebugIdIdentifier="sentry-dbid-6627d032-f4bb-4ca1-ab11-d47458e83085")}catch{}})();const gt=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],f=M(),{loading:y,result:b,refetch:v}=O(()=>m.list()),p=({key:e})=>{f.push({name:"organization",params:{organizationId:e}})},n=h({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function d(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await m.rename(t,a),v()}n.value={state:"idle"}}const w=async e=>{const t=await m.create(e.name);p({key:t.id})},C=D(()=>{var e,t;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(a=>{var c;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(c=a.id)!=null?c:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:p},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?t:[]}});return(e,t)=>(g(),F(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(y),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>d(!1)),onOk:t[2]||(t[2]=a=>d(!0))},{default:i(()=>[n.value.state==="renaming"?(g(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{gt as default};
//# sourceMappingURL=Organizations.48872f52.js.map
