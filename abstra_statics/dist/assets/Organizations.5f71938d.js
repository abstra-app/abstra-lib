import{N as k}from"./Navbar.5a324fe1.js";import{B as N}from"./BaseLayout.4cb978f4.js";import{C as I}from"./ContentLayout.26e644d1.js";import{C as _}from"./CrudView.4e5e5d38.js";import{a as O}from"./asyncComputed.aacd33c5.js";import{F as x}from"./PhArrowSquareOut.vue.44a28ca5.js";import{G as R}from"./PhPencil.vue.9564785e.js";import{d as B,eo as M,e as h,f as D,o as f,Y as F,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.15254731.js";import"./gateway.a2baac5b.js";import{a as m}from"./organization.7f5b11c2.js";import"./tables.72f724b4.js";import"./PhChats.vue.cb113c5d.js";import"./PhSignOut.vue.20992b33.js";import"./router.c7d1ccb0.js";import"./Badge.e237782d.js";import"./index.2b550ec9.js";import"./Avatar.1d914745.js";import"./index.7ca300f0.js";import"./index.7ced7c08.js";import"./BookOutlined.89626a9b.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.dad04c7c.js";import"./url.c1903f26.js";import"./PhDotsThreeVertical.vue.4c91b80c.js";import"./index.8ea02c2b.js";import"./popupNotifcation.94d7b992.js";import"./record.04e7f52a.js";import"./string.373efa5d.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="f41202ff-555d-41c7-ac96-1769732f5134",r._sentryDebugIdIdentifier="sentry-dbid-f41202ff-555d-41c7-ac96-1769732f5134")}catch{}})();const ft=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],g=M(),{loading:y,result:b,refetch:v}=O(()=>m.list()),p=({key:e})=>{g.push({name:"organization",params:{organizationId:e}})},n=h({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function c(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await m.rename(t,a),v()}n.value={state:"idle"}}const w=async e=>{const t=await m.create(e.name);p({key:t.id})},C=D(()=>{var e,t;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(t=(e=b.value)==null?void 0:e.map(a=>{var d;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(d=a.id)!=null?d:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:p},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?t:[]}});return(e,t)=>(f(),F(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(y),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>c(!1)),onOk:t[2]||(t[2]=a=>c(!0))},{default:i(()=>[n.value.state==="renaming"?(f(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{ft as default};
//# sourceMappingURL=Organizations.5f71938d.js.map
