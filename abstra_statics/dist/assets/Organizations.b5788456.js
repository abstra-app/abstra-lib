import{N as O}from"./Navbar.a2e969a3.js";import{B as I}from"./BaseLayout.2bb1ac6f.js";import{C as _}from"./ContentLayout.34675bf7.js";import{C as x}from"./CrudView.6cb8ad38.js";import{a as M}from"./ant-design.903f71e5.js";import{a as B}from"./asyncComputed.2a2a1288.js";import{F}from"./PhArrowSquareOut.vue.f02622b6.js";import{G as R}from"./PhPencil.vue.0fcd0798.js";import{d as h,eM as A,r as D,y as G,b as y,ey as $,f as o,w as i,u as s,aG as V,eS as j,c as E,bB as L,eA as S}from"./outputWidgets.52571dac.js";import"./gateway.9b472f57.js";import"./index.803d0576.js";import{O as p}from"./organization.6ceb5620.js";import{A as U,F as P}from"./Form.9e43a28b.js";import{M as T}from"./Modal.514213ca.js";import"./logo.084e5d7c.js";import"./PhChats.vue.ba664239.js";import"./PhSignOut.vue.2dbc88f8.js";import"./router.0ae1ef4a.js";import"./Text.0586c869.js";import"./Base.e64db743.js";import"./index.07ea88e4.js";import"./index.c074fcff.js";import"./BookOutlined.7e4ac738.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.a5567333.js";import"./url.5cc70021.js";import"./Paragraph.7aa2ce32.js";import"./index.89edc4ba.js";import"./Title.8fbc2e7d.js";import"./index.f3e1df2a.js";import"./index.109082a3.js";import"./popupNotifcation.e85fac74.js";import"./record.2a93f29c.js";import"./pubsub.be7004e9.js";import"./hasIn.f1c353ba.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="cc189aa7-9c9b-4bda-b9eb-cb7960f9a057",r._sentryDebugIdIdentifier="sentry-dbid-cc189aa7-9c9b-4bda-b9eb-cb7960f9a057")}catch{}})();const Ie=h({__name:"Organizations",setup(r){const l=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=A(),{loading:z,result:d,refetch:f}=B(()=>p.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=D({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function b(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await p.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await p.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,m;await M("Are you sure you want to delete this organization?")&&(await((m=(a=d.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:m.delete()),f())},N=G(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=d.value)==null?void 0:e.map(a=>{var m,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(m=`/organizations/${encodeURIComponent(a.id)}`)!=null?m:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:F,label:"Go to projects",onClick:g},{icon:R,label:"Rename",onClick:()=>w(a)},{icon:j,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(y(),$(V,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:l})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:s(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(s(T),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>b(!1)),onOk:t[2]||(t[2]=a=>b(!0))},{default:i(()=>[n.value.state==="renaming"?(y(),E(s(P),{key:0,layout:"vertical"},{default:i(()=>[o(s(U),{label:"New name"},{default:i(()=>[o(s(L),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):S("",!0)]),_:1},8,["open"])],64))}});export{Ie as default};
//# sourceMappingURL=Organizations.b5788456.js.map
