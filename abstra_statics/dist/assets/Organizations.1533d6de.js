import{N as O}from"./Navbar.46281fd5.js";import{B as I}from"./BaseLayout.c9ee5844.js";import{C as _}from"./ContentLayout.42492292.js";import{C as x}from"./CrudView.124f0074.js";import{a as F}from"./ant-design.d45256e8.js";import{a as M}from"./asyncComputed.ac92fa65.js";import{F as R}from"./PhArrowSquareOut.vue.424703a6.js";import{G as h}from"./PhPencil.vue.c1c760a2.js";import{d as B,f7 as D,r as A,y as V,b,eV as $,f as o,w as i,u as l,ay as G,fd as j,c as E,bx as L,eX as U}from"./outputWidgets.c66cfd35.js";import"./gateway.bf3aba3e.js";import"./index.75e5a782.js";import{O as d}from"./organization.324aa15b.js";import{A as P,F as S}from"./Form.301ed94f.js";import{M as T}from"./Modal.36a2865a.js";import"./logo.084e5d7c.js";import"./PhChats.vue.a1b7a11c.js";import"./PhSignOut.vue.1deec21e.js";import"./router.abf8ddb2.js";import"./index.3e188a11.js";import"./index.c9ea2f3a.js";import"./BookOutlined.593e3757.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.b90c1e25.js";import"./url.9300ef54.js";import"./index.77c90042.js";import"./index.dc62faf8.js";import"./popupNotifcation.e644ba88.js";import"./record.5e4f8e37.js";import"./pubsub.3aa052ca.js";import"./string.4d8ab426.js";import"./hasIn.937116af.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="b3e06a59-2640-47cb-880a-4d5975d03eb9",r._sentryDebugIdIdentifier="sentry-dbid-b3e06a59-2640-47cb-880a-4d5975d03eb9")}catch{}})();const Ce=B({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],v=D(),{loading:z,result:c,refetch:f}=M(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=A({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await d.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,s;await F("Are you sure you want to delete this organization?")&&(await((s=(a=c.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=V(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=c.value)==null?void 0:e.map(a=>{var s,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(s=`/organizations/${encodeURIComponent(a.id)}`)!=null?s:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:R,label:"Go to projects",onClick:g},{icon:h,label:"Rename",onClick:()=>w(a)},{icon:j,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),$(G,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:p,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(T),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),E(l(S),{key:0,layout:"vertical"},{default:i(()=>[o(l(P),{label:"New name"},{default:i(()=>[o(l(L),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{Ce as default};
//# sourceMappingURL=Organizations.1533d6de.js.map
