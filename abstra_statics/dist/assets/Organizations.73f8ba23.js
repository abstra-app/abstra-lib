import{N as k}from"./Navbar.ccd36b5d.js";import{B as N}from"./BaseLayout.66dc7e56.js";import{C as I}from"./ContentLayout.cf6cbd36.js";import{C as _}from"./CrudView.c43806e6.js";import{a as O}from"./asyncComputed.4a020410.js";import{F as x}from"./PhArrowSquareOut.vue.460517dc.js";import{G as R}from"./PhPencil.vue.7ba4efc2.js";import{d as B,eo as M,e as h,f as D,o as g,Y as F,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.8e6956bf.js";import"./gateway.c86527a2.js";import{a as m}from"./organization.1ab7ff8f.js";import"./tables.81df3871.js";import"./PhChats.vue.490e6b6b.js";import"./PhSignOut.vue.bc937e02.js";import"./router.afdce2d7.js";import"./index.00cc798f.js";import"./Avatar.f56d1e7f.js";import"./index.717c3e76.js";import"./index.002beb9b.js";import"./BookOutlined.0651da25.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.18fad650.js";import"./url.d3e72b06.js";import"./PhDotsThreeVertical.vue.f43ecf6e.js";import"./Badge.e2cf8e2c.js";import"./popupNotifcation.7713ed40.js";import"./record.8e84f05f.js";import"./string.204ed19d.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="e2a1bc9a-b5ba-4e59-a11c-19270533e045",r._sentryDebugIdIdentifier="sentry-dbid-e2a1bc9a-b5ba-4e59-a11c-19270533e045")}catch{}})();const de=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],f=M(),{loading:y,result:b,refetch:v}=O(()=>m.list()),p=({key:t})=>{f.push({name:"organization",params:{organizationId:t}})},n=h({state:"idle"});function z(t){n.value={state:"renaming",organizationId:t.id,newName:t.name}}async function c(t){if(n.value.state==="renaming"&&t){const{organizationId:e,newName:a}=n.value;await m.rename(e,a),v()}n.value={state:"idle"}}const w=async t=>{const e=await m.create(t.name);p({key:e.id})},C=D(()=>{var t,e;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(e=(t=b.value)==null?void 0:t.map(a=>{var d;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(d=a.id)!=null?d:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:p},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?e:[]}});return(t,e)=>(g(),F(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(y),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>c(!1)),onOk:e[2]||(e[2]=a=>c(!0))},{default:i(()=>[n.value.state==="renaming"?(g(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{de as default};
//# sourceMappingURL=Organizations.73f8ba23.js.map
