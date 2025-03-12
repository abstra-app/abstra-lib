import{N as k}from"./Navbar.ddd33419.js";import{B as N}from"./BaseLayout.7b40832b.js";import{C as I}from"./ContentLayout.6fa70c2c.js";import{C as _}from"./CrudView.3e375430.js";import{a as O}from"./asyncComputed.d18a9fa3.js";import{F as x}from"./PhArrowSquareOut.vue.0dd026f0.js";import{G as R}from"./PhPencil.vue.adf16920.js";import{d as B,eo as M,e as h,f as D,o as f,Y as F,b as o,w as i,u as s,aS as L,c as S,cz as V,bL as $,cy as j,S as A,cL as E}from"./index.4aadb4b3.js";import"./gateway.32288124.js";import{a as m}from"./organization.dc9dfa4f.js";import"./tables.d10b764a.js";import"./PhChats.vue.b0097c2d.js";import"./PhSignOut.vue.4f40077a.js";import"./router.f8534c88.js";import"./Badge.260a8170.js";import"./index.2c238b0a.js";import"./Avatar.e6618b11.js";import"./index.bfbdf08f.js";import"./index.a9470594.js";import"./BookOutlined.f67181c8.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.516f3fad.js";import"./url.7d22bb63.js";import"./PhDotsThreeVertical.vue.6fbf703c.js";import"./index.0c55c36a.js";import"./popupNotifcation.73f11295.js";import"./record.277e98db.js";import"./string.358f1ec9.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="429e0b4a-e28d-4fe8-8e94-9b82dfd9fd93",r._sentryDebugIdIdentifier="sentry-dbid-429e0b4a-e28d-4fe8-8e94-9b82dfd9fd93")}catch{}})();const fe=B({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],u=[{key:"name",label:"Organization Name"}],g=M(),{loading:y,result:b,refetch:v}=O(()=>m.list()),d=({key:t})=>{g.push({name:"organization",params:{organizationId:t}})},n=h({state:"idle"});function z(t){n.value={state:"renaming",organizationId:t.id,newName:t.name}}async function p(t){if(n.value.state==="renaming"&&t){const{organizationId:e,newName:a}=n.value;await m.rename(e,a),v()}n.value={state:"idle"}}const w=async t=>{const e=await m.create(t.name);d({key:e.id})},C=D(()=>{var t,e;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(e=(t=b.value)==null?void 0:t.map(a=>{var c;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(c=a.id)!=null?c:null},{type:"actions",actions:[{icon:x,label:"Go to projects",onClick:d},{icon:R,label:"Rename",onClick:()=>z(a)}]}]}}))!=null?e:[]}});return(t,e)=>(f(),F(L,null,[o(N,null,{navbar:i(()=>[o(k,{breadcrumb:l})]),content:i(()=>[o(I,null,{default:i(()=>[o(_,{"entity-name":"organization",loading:s(y),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:C.value,fields:u,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(s(E),{open:n.value.state==="renaming",title:"Rename organization",onCancel:e[1]||(e[1]=a=>p(!1)),onOk:e[2]||(e[2]=a=>p(!0))},{default:i(()=>[n.value.state==="renaming"?(f(),S(s(j),{key:0,layout:"vertical"},{default:i(()=>[o(s(V),{label:"New name"},{default:i(()=>[o(s($),{value:n.value.newName,"onUpdate:value":e[0]||(e[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):A("",!0)]),_:1},8,["open"])],64))}});export{fe as default};
//# sourceMappingURL=Organizations.d6335c7c.js.map
