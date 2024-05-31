import{N as O}from"./Navbar.2c3e7222.js";import{B as I}from"./BaseLayout.0ae4130f.js";import{C as _}from"./ContentLayout.f37982a3.js";import{C as x}from"./CrudView.54cc55f3.js";import{a as F}from"./ant-design.74ce0f70.js";import{a as M}from"./asyncComputed.158f340f.js";import{F as R}from"./PhArrowSquareOut.vue.e7591eee.js";import{G as h}from"./PhPencil.vue.a6a00e3f.js";import{d as B,f7 as D,r as A,y as V,b,eV as $,f as o,w as i,u as l,ay as G,fd as j,c as E,bx as L,eX as U}from"./outputWidgets.73c505ca.js";import"./gateway.68d62bbf.js";import"./index.300e3466.js";import{O as d}from"./organization.cb6464ad.js";import{A as P,F as S}from"./Form.8dd853db.js";import{M as T}from"./Modal.ea3060e4.js";import"./logo.084e5d7c.js";import"./PhChats.vue.8e017ea4.js";import"./PhSignOut.vue.711f9ab2.js";import"./router.fa09e4ee.js";import"./index.eeaac799.js";import"./index.af8480de.js";import"./BookOutlined.a4e03501.js";import"./DocsButton.vue_vue_type_script_setup_true_lang.0e180c8e.js";import"./url.92163e49.js";import"./index.baa5034f.js";import"./index.6fa9024a.js";import"./popupNotifcation.e4d7b519.js";import"./record.54b1b7f2.js";import"./pubsub.8105eb2b.js";import"./hasIn.a2cc6da3.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m=new Error().stack;m&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[m]="f7461f45-6fe0-44d6-b82c-7c93a52c5e2f",r._sentryDebugIdIdentifier="sentry-dbid-f7461f45-6fe0-44d6-b82c-7c93a52c5e2f")}catch{}})();const we=B({__name:"Organizations",setup(r){const m=[{label:"My organizations",path:"/organizations"}],c=[{key:"name",label:"Organization Name"}],v=D(),{loading:z,result:p,refetch:f}=M(()=>d.list()),g=({key:e})=>{v.push({name:"organization",params:{organizationId:e}})},n=A({state:"idle"});function w(e){n.value={state:"renaming",organizationId:e.id,newName:e.name}}async function y(e){if(n.value.state==="renaming"&&e){const{organizationId:t,newName:a}=n.value;await d.rename(t,a),f()}n.value={state:"idle"}}const C=async e=>{const t=await d.create(e.name);g({key:t.id})},k=async({key:e})=>{var a,s;await F("Are you sure you want to delete this organization?")&&(await((s=(a=p.value)==null?void 0:a.find(u=>u.id===e))==null?void 0:s.delete()),f())},N=V(()=>{var e,t;return{columns:[{name:"Organization Name",align:"left"},{name:"Path"},{name:"",align:"right"}],rows:(t=(e=p.value)==null?void 0:e.map(a=>{var s,u;return{key:a.id,cells:[{type:"link",text:a.name,to:(s=`/organizations/${encodeURIComponent(a.id)}`)!=null?s:null},{type:"text",text:(u=a.id)!=null?u:null},{type:"actions",actions:[{icon:R,label:"Go to projects",onClick:g},{icon:h,label:"Rename",onClick:()=>w(a)},{icon:j,label:"Delete",onClick:k,dangerous:!0}]}]}}))!=null?t:[]}});return(e,t)=>(b(),$(G,null,[o(I,null,{navbar:i(()=>[o(O,{breadcrumb:m})]),content:i(()=>[o(_,null,{default:i(()=>[o(x,{"entity-name":"organization",loading:l(z),title:"My organizations",description:"An organization is your company\u2019s account. Manage editors, projects and billing.","create-button-text":"Create Organization","empty-title":"No organizations here yet",table:N.value,fields:c,onCreate:C},null,8,["loading","table"])]),_:1})]),_:1}),o(l(T),{open:n.value.state==="renaming",title:"Rename organization",onCancel:t[1]||(t[1]=a=>y(!1)),onOk:t[2]||(t[2]=a=>y(!0))},{default:i(()=>[n.value.state==="renaming"?(b(),E(l(S),{key:0,layout:"vertical"},{default:i(()=>[o(l(P),{label:"New name"},{default:i(()=>[o(l(L),{value:n.value.newName,"onUpdate:value":t[0]||(t[0]=a=>n.value.newName=a)},null,8,["value"])]),_:1})]),_:1})):U("",!0)]),_:1},8,["open"])],64))}});export{we as default};
//# sourceMappingURL=Organizations.b27cc591.js.map
