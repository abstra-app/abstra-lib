import{N as k}from"./Navbar.c8bcf704.js";import{B as N}from"./BaseLayout.6d92f637.js";import{C as I}from"./ContentLayout.e2420c4f.js";import{C as _}from"./CrudView.abec7dee.js";import{a as O}from"./asyncComputed.ef6b106a.js";import{F as x}from"./PhArrowSquareOut.vue.13d3f6d7.js";import{G as R}from"./PhPencil.vue.81bd899e.js";import{d as B,eF as F,e as M,f as h,o as g,Y as D,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.ed5876d6.js";import"./gateway.0da9f723.js";import{a as m}from"./organization.fe7d5b3f.js";import"./tables.310dfb41.js";import"./PhChats.vue.5eef9514.js";import"./PhSignOut.vue.c287534a.js";import"./router.a3f3262c.js";import"./Badge.0d76d0e0.js";import"./index.71c666ad.js";import"./Avatar.2efeed91.js";import"./index.bbe8259c.js";import"./index.c3160e96.js";import"./BookOutlined.1d0028e4.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.cfdcb975.js";import"./url.28c9d07b.js";import"./PhDotsThreeVertical.vue.e3192744.js";import"./index.2e72325a.js";import"./popupNotifcation.cf9b894a.js";import"./record.4267e1e3.js";import"./string.1ab10e12.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="83d3decc-4199-4a96-b322-e56b3c7c3bb4",r._sentryDebugIdIdentifier="sentry-dbid-83d3decc-4199-4a96-b322-e56b3c7c3bb4")}catch{}})();const ge=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],f=F(),{loading:b,result:y,refetch:v}=O(()=>m.list()),c=({key:t})=>{f.push({name:"organization",params:{organizationId:t}})},n=M({state:"idle"});function z(t){n.value={state:"renaming",organizationId:t.id,newName:t.name}}async function p(t){if(n.value.state==="renaming"&&t){const{organizationId:e,newName:a}=n.value;await m.rename(e,a),v()}n.value={state:"idle"}}const w=async t=>{const e=await m.create(t.name);c({key:e.id})},C=h(()=>{var t,e;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(e=(t=y.value)==null?void 0:t.map(a=>{var d;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(d=a.id)!=null?d:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:c},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?e:[]}});return(t,e)=>(g(),D(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(b),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>p(!1)),onOk:e[2]||(e[2]=a=>p(!0))},{default:i(()=>[n.value.state==="renaming"?(g(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{ge as default};
//# sourceMappingURL=Organizations.e2f5c401.js.map
