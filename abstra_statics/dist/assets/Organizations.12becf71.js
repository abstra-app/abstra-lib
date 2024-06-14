import{N as O}from"./Navbar.ae20b0a3.js";import{B as I}from"./BaseLayout.11870784.js";import{C as _}from"./ContentLayout.832951cf.js";import{C as x}from"./CrudView.23d2cab3.js";import{a as F}from"./ant-design.123cf902.js";import{a as M}from"./asyncComputed.1bd921ff.js";import{F as R}from"./PhArrowSquareOut.vue.55e8e5d5.js";import{G as h}from"./PhPencil.vue.6b9f2660.js";import{d as B,f7 as D,r as A,y as V,b,eV as $,f as o,w as i,u as l,ay as G,fd as j,c as E,bx as L,eX as U}from"./outputWidgets.e875cc52.js";import"./gateway.e7ede1fb.js";import"./index.6d16075e.js";import{O as d}from"./organization.494c63f2.js";import{A as P,F as S}from"./Form.582dbf5a.js";import{M as T}from"./Modal.2f4e1218.js";import"./logo.084e5d7c.js";import"./PhChats.vue.58241960.js";import"./PhSignOut.vue.e3ee6b9c.js";import"./router.22f3bd60.js";import"./index.d750e7ea.js";import"./index.878d7f69.js";import"./BookOutlined.95d0ead0.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.f9a20795.js";import"./url.32aa5cd1.js";import"./index.0dfdaea0.js";import"./index.2ee8dfed.js";import"./popupNotifcation.5334800d.js";import"./record.af6fc363.js";import"./pubsub.aefef9ae.js";import"./string.aa35f56d.js";import"./hasIn.6f71cdb7.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="3c78a21a-8579-4394-906c-e02be2ffc8d6",r._sentryDebugIdIdentifier="sentry-dbid-3c78a21a-8579-4394-906c-e02be2ffc8d6")}catch{}})();const Ce=B({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],p=[{key:"name",label:"Organization Name"}],v=D(),{loading:z,result:c,refetch:f}=M(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=A({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await d.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,s;await F("Are you sure you want to delete this organization?")&&(await((s=(a=c.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=V(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=c.value)==null?void 0:e.map(a=>{var s,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(s=`/organizations/${encodeURIComponent(a.id)}`)!=null?s:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:R,label:"Go to projects",onClick:g},{icon:h,label:"Rename",onClick:()=>w(a)},{icon:j,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),$(G,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:p,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(T),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),E(l(S),{key:0,layout:"vertical"},{default:i(()=>[o(l(P),{label:"New name"},{default:i(()=>[o(l(L),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{Ce as default};
//# sourceMappingURL=Organizations.12becf71.js.map
