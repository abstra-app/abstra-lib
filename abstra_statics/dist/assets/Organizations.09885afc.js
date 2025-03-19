import{N as k}from"./Navbar.7c37c7aa.js";import{B as N}from"./BaseLayout.99a12bed.js";import{C as I}from"./ContentLayout.20b38953.js";import{C as _}from"./CrudView.ae7f70fa.js";import{a as O}from"./asyncComputed.0f7b9a70.js";import{F as x}from"./PhArrowSquareOut.vue.73d492f2.js";import{G as R}from"./PhPencil.vue.09a2b741.js";import{d as B,eo as M,e as h,f as D,o as f,Y as F,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.17ef7237.js";import"./gateway.59682f85.js";import{a as m}from"./organization.84ec15a4.js";import"./tables.ca8bd451.js";import"./PhChats.vue.9bec9716.js";import"./PhSignOut.vue.d5b62ffe.js";import"./router.4cf5c353.js";import"./Badge.f407b2b6.js";import"./index.12dfb295.js";import"./Avatar.93bb90ac.js";import"./index.c3fde952.js";import"./index.d42ded78.js";import"./BookOutlined.ca1e196d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.6ce9c660.js";import"./url.80d6dd1b.js";import"./PhDotsThreeVertical.vue.0811f16a.js";import"./index.def99da0.js";import"./popupNotifcation.89b0bd72.js";import"./record.a95d8414.js";import"./string.a8f22b1c.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="66354a28-e379-4592-a54f-33aaf963f68c",r._sentryDebugIdIdentifier="sentry-dbid-66354a28-e379-4592-a54f-33aaf963f68c")}catch{}})();const ft=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],g=M(),{loading:y,result:b,refetch:v}=O(()=>m.list()),p=({key:e})=>{g.push({name:"organization",params:{organizationId:e}})},n=h({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function c(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await m.rename(t,a),v()}n.value={state:"idle"}}const w=async e=>{const t=await m.create(e.name);p({key:t.id})},C=D(()=>{var e,t;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(a=>{var d;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(d=a.id)!=null?d:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:p},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?t:[]}});return(e,t)=>(f(),F(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(y),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>c(!1)),onOk:t[2]||(t[2]=a=>c(!0))},{default:i(()=>[n.value.state==="renaming"?(f(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{ft as default};
//# sourceMappingURL=Organizations.09885afc.js.map
