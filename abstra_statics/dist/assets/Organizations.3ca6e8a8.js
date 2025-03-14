import{N as k}from"./Navbar.720e2f0f.js";import{B as N}from"./BaseLayout.ae2f526d.js";import{C as I}from"./ContentLayout.899e8447.js";import{C as _}from"./CrudView.5c743e6f.js";import{a as O}from"./asyncComputed.0377f0bf.js";import{F as x}from"./PhArrowSquareOut.vue.9e2503aa.js";import{G as R}from"./PhPencil.vue.530940f5.js";import{d as B,eo as M,e as h,f as D,o as f,Y as F,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.36dac945.js";import"./gateway.9fbe6436.js";import{a as m}from"./organization.50c3dd0f.js";import"./tables.edd8b248.js";import"./PhChats.vue.4ba9a3a8.js";import"./PhSignOut.vue.5bc6bce5.js";import"./router.4a6d2539.js";import"./Badge.b18709f3.js";import"./index.087537fc.js";import"./Avatar.e1e27d56.js";import"./index.be0e93f7.js";import"./index.c53055fa.js";import"./BookOutlined.5dacf7fd.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b76684f5.js";import"./url.ecdd32ac.js";import"./PhDotsThreeVertical.vue.a4b3d86d.js";import"./index.080e26fe.js";import"./popupNotifcation.e5ef2b56.js";import"./record.102dc74d.js";import"./string.9e70790e.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="b4c72db6-abf7-4fb8-8cd3-1b6057d2d9e7",r._sentryDebugIdIdentifier="sentry-dbid-b4c72db6-abf7-4fb8-8cd3-1b6057d2d9e7")}catch{}})();const ft=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],g=M(),{loading:b,result:y,refetch:v}=O(()=>m.list()),d=({key:e})=>{g.push({name:"organization",params:{organizationId:e}})},n=h({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function p(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await m.rename(t,a),v()}n.value={state:"idle"}}const w=async e=>{const t=await m.create(e.name);d({key:t.id})},C=D(()=>{var e,t;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(t=(e=y.value)==null?void 0:e.map(a=>{var c;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(c=a.id)!=null?c:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:d},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?t:[]}});return(e,t)=>(f(),F(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(b),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>p(!1)),onOk:t[2]||(t[2]=a=>p(!0))},{default:i(()=>[n.value.state==="renaming"?(f(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{ft as default};
//# sourceMappingURL=Organizations.3ca6e8a8.js.map
