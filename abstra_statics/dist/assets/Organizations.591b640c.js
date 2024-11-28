import{N as O}from"./Navbar.6aba703b.js";import{B as I}from"./BaseLayout.987b3714.js";import{C as _}from"./ContentLayout.e3431835.js";import{C as x}from"./CrudView.1f8b884c.js";import{a as R}from"./ant-design.f00625c0.js";import{a as h}from"./asyncComputed.6533c1c4.js";import{F as B}from"./PhArrowSquareOut.vue.72198c61.js";import{G as D}from"./PhPencil.vue.eef9919f.js";import{d as F,eo as M,e as $,f as A,o as y,X as G,b as o,w as i,u as l,aR as V,c as j,cy as E,bK as K,cx as L,R as U,cK as P,ep as S}from"./vue-router.3b71935d.js";import"./gateway.a84ceeab.js";import{O as u}from"./organization.649e74b0.js";import"./tables.ebc87ad8.js";import"./PhChats.vue.e3ae4574.js";import"./PhSignOut.vue.ec6f7ff2.js";import"./router.74e4263a.js";import"./index.f47b46c5.js";import"./Avatar.048e8790.js";import"./index.c0f8ff4a.js";import"./index.40854d6b.js";import"./BookOutlined.55a6a936.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.5b28678d.js";import"./url.deb5af1a.js";import"./PhDotsThreeVertical.vue.b6de7f3d.js";import"./Badge.e735c20f.js";import"./popupNotifcation.dda4d9fd.js";import"./record.77dee426.js";import"./string.bc3d5afd.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="60bd9305-9a23-492f-911f-ec4d21fb75b8",r._sentryDebugIdIdentifier="sentry-dbid-60bd9305-9a23-492f-911f-ec4d21fb75b8")}catch{}})();const ve=F({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],d=[{key:"name",label:"Organization Name"}],b=M(),{loading:v,result:c,refetch:p}=h(()=>u.list()),f=({key:e})=>{b.push({name:"organization",params:{organizationId:e}})},n=$({state:"idle"});function z(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function g(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await u.rename(t,a),p()}n.value={state:"idle"}}const w=async e=>{const t=await u.create(e.name);f({key:t.id})},C=async({key:e})=>{var a,s;await R("Are you sure you want to delete this organization?")&&(await((s=(a=c.value)==null?void 0:a.find(N=>N.id===e))==null?void 0:s.delete()),p())},k=A(()=>{var e,t;return{columns:[{title:"Organization Name",align:"left"},{title:"Path"},{title:"",align:"right"}],rows:(t=(e=c.value)==null?void 0:e.map(a=>{var s;return{key:a.id,cells:[{type:"link",text:a.name,to:`/organizations/${encodeURIComponent(a.id)}`},{type:"text",text:(s=a.id)!=null?s:null},{type:"actions",actions:[{icon:B,label:"Go to projects",onClick:f},{icon:D,label:"Rename",onClick:()=>z(a)},{icon:S,label:"Delete",onClick:C,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(y(),G(V,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(v),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:k.value,fields:d,create:w},null,8,["loading","table"])]),_:1})]),_:1}),o(l(P),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>g(!1)),onOk:t[2]||(t[2]=a=>g(!0))},{default:i(()=>[n.value.state==="renaming"?(y(),j(l(L),{key:0,layout:"vertical"},{default:i(()=>[o(l(E),{label:"New name"},{default:i(()=>[o(l(K),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{ve as default};
//# sourceMappingURL=Organizations.591b640c.js.map
