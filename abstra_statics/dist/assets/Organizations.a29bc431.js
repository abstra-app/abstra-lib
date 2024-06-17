import{N as O}from"./Navbar.1b7f2022.js";import{B as I}from"./BaseLayout.a53cd915.js";import{C as _}from"./ContentLayout.543a86f4.js";import{C as x}from"./CrudView.f10a7446.js";import{a as F}from"./ant-design.4d8697aa.js";import{a as M}from"./asyncComputed.d67c847a.js";import{F as R}from"./PhArrowSquareOut.vue.f025e0d0.js";import{G as h}from"./PhPencil.vue.f664e61d.js";import{d as B,f7 as D,r as A,y as V,b as y,eV as $,f as o,w as i,u as l,ay as G,fd as j,c as E,bx as L,eX as U}from"./outputWidgets.a6a6ef30.js";import"./gateway.c2265f5e.js";import"./index.ac4494b9.js";import{O as d}from"./organization.73a5063b.js";import{A as P,F as S}from"./Form.766fb35b.js";import{M as T}from"./Modal.c1c6172f.js";import"./logo.084e5d7c.js";import"./PhChats.vue.7e946ba6.js";import"./PhSignOut.vue.ae70df5d.js";import"./router.36169449.js";import"./index.10c54efc.js";import"./index.ae5b4ee6.js";import"./BookOutlined.90e1581d.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.92a302a6.js";import"./url.00089ca9.js";import"./index.30ac913e.js";import"./index.43d7170a.js";import"./popupNotifcation.ce8f3816.js";import"./record.8f173599.js";import"./pubsub.906f7e66.js";import"./string.d812720a.js";import"./hasIn.b01cfd56.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="bb100723-4211-47fa-aa9b-bb546a3cb830",r._sentryDebugIdIdentifier="sentry-dbid-bb100723-4211-47fa-aa9b-bb546a3cb830")}catch{}})();const Ce=B({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],v=D(),{loading:z,result:c,refetch:f}=M(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=A({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function b(e){if(n.value.state==="renaming"&&e){const{organizationId:a,newName:t}=n.value;await d.rename(a,t),f()}n.value={state:"idle"}}const C=async e=>{const a=await d.create(e.name);g({key:a.id})},k=async({key:e})=>{var t,s;await F("Are you sure you want to delete this organization?")&&(await((s=(t=c.value)==null?void 0:t.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=V(()=>{var e,a;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(a=(e=c.value)==null?void 0:e.map(t=>{var s,u;return{key:t.id,cells:[{type:"link",text:t.name,to:(s=`/organizations/${encodeURIComponent(t.id)}`)!=null?s:null},{type:"text",text:(u=t.id)!=null?u:null},{type:"actions",actions:[{icon:R,label:"Go to projects",onClick:g},{icon:h,label:"Rename",onClick:()=>w(t)},{icon:j,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?a:[]}});return(e,a)=>(y(),$(G,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:p,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(T),{open:n.value.state==="renaming",title:"Rename organization",onCancel:a[1]||(a[1]=t=>b(!1)),onOk:a[2]||(a[2]=t=>b(!0))},{default:i(()=>[n.value.state==="renaming"?(y(),E(l(S),{key:0,layout:"vertical"},{default:i(()=>[o(l(P),{label:"New name"},{default:i(()=>[o(l(L),{value:n.value.newName,"onUpdate:value":a[0]||(a[0]=t=>n.value.newName=t)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{Ce as default};
//# sourceMappingURL=Organizations.a29bc431.js.map
