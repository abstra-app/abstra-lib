import{N}from"./Navbar.2b08dcbd.js";import{B as k}from"./BaseLayout.a620a0e7.js";import{C as I}from"./ContentLayout.bb9824c5.js";import{C as _}from"./CrudView.6c675a7e.js";import{a as O}from"./asyncComputed.ea6fb0ac.js";import{F as x}from"./PhArrowSquareOut.vue.f112c15a.js";import{G as B}from"./PhPencil.vue.86ffa88b.js";import{d as R,eo as M,e as h,f as D,o as g,Y as F,b as o,w as i,u as s,aS as A,c as L,cB as S,bL as V,cA as $,S as j,cN as E}from"./index.aa181d5a.js";import"./gateway.f2987486.js";import{a as m}from"./organization.76f890a1.js";import"./tables.73f7b766.js";import"./PhChats.vue.388ad294.js";import"./PhSignOut.vue.b75889bb.js";import"./router.86c92ee3.js";import"./Badge.1056ee36.js";import"./index.328a6e23.js";import"./Avatar.ff4c52a8.js";import"./index.718f03cb.js";import"./index.46e049c8.js";import"./BookOutlined.a2009813.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.8da1b016.js";import"./url.b34d1545.js";import"./PhDotsThreeVertical.vue.7903a0a1.js";import"./index.4bff53e2.js";import"./popupNotifcation.155bd6f9.js";import"./record.da25a75b.js";import"./string.29adea79.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="0b9bbc42-db87-4e11-83f4-1e223a977457",r._sentryDebugIdIdentifier="sentry-dbid-0b9bbc42-db87-4e11-83f4-1e223a977457")}catch{}})();const ge=R({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],f=M(),{loading:b,result:y,refetch:v}=O(()=>m.list()),p=({key:t})=>{f.push({name:"organization",params:{organizationId:t}})},n=h({state:"idle"});function z(t){n.value={state:"renaming",organizationId:t.id,newName:t.name}}async function d(t){if(n.value.state==="renaming"&&t){const{organizationId:e,newName:a}=n.value;await m.rename(e,a),v()}n.value={state:"idle"}}const w=async t=>{const e=await m.create(t.name);p({key:e.id})},C=D(()=>{var t,e;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(e=(t=y.value)==null?void 0:t.map(a=>{var c;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(c=a.id)!=null?c:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:p},{icon:B,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?e:[]}});return(t,e)=>(g(),F(A,null,[o(k,null,{navbar:i(()=>[o(N,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(b),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>d(!1)),onOk:e[2]||(e[2]=a=>d(!0))},{default:i(()=>[n.value.state==="renaming"?(g(),L(s($),{key:0,layout:"vertical"},{default:i(()=>[o(s(S),{label:"New name"},{default:i(()=>[o(s(V),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):j("",!0)]),_:1},8,["open"])],64))}});export{ge as default};
//# sourceMappingURL=Organizations.ae2181c4.js.map
